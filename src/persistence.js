import { getAllGameKeys } from "./store.js";

/* ===================== IDB tiny helper ===================== */
const DB_NAME = "ppgc-backups";
const DB_STORE = "handles";

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(DB_STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbGet(key) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const req = tx.objectStore(DB_STORE).get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}
async function idbSet(key, val) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    tx.objectStore(DB_STORE).put(val, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/* ===================== FS helpers ===================== */
const DIR_KEY = "backupDirV1";

async function ensureDirHandle() {
  let handle = await idbGet(DIR_KEY);
  // Handles are structured-cloneable in IDB; permission may still need confirming
  if (handle && (await verifyWritePermission(handle))) {
    return handle;
  }
  // Ask once; afterwards we save handle to IDB and write silently.
  handle = await window.showDirectoryPicker({ id: "PPGC-Backups" });
  const ok = await verifyWritePermission(handle);
  if (!ok) throw new Error("Write permission denied.");
  await idbSet(DIR_KEY, handle);
  return handle;
}

async function verifyWritePermission(handle) {
  if (!handle) return false;
  const perm = await handle.queryPermission({ mode: "readwrite" });
  if (perm === "granted") return true;
  if (perm === "prompt") {
    const p2 = await handle.requestPermission({ mode: "readwrite" });
    return p2 === "granted";
  }
  return false;
}

async function writeJsonFile(dirHandle, filename, obj) {
  const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(
    new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" })
  );
  await writable.close();
}

function slug(x) {
  return String(x)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ===================== Canonical walkers ===================== */
// These read ONLY from your registered data so we cover 100% of IDs every time.
function getSectionsForGame(gameKey) {
  const sections = window.DATA?.sections?.[gameKey] || []; // [{id,title}]
  return sections.map((s) => s.id);
}

function collectAllTaskIdsFromData(gameKey) {
  const tasksByGroup = window.DATA?.tasks || {}; // expects keys like "legendsza-catching": [...]
  const sectionIds = getSectionsForGame(gameKey);
  const out = [];
  const visit = (node) => {
    if (!node || !node.id) return;
    out.push(node.id);
    if (Array.isArray(node.children)) node.children.forEach(visit);
  };
  sectionIds.forEach((groupId) => {
    const rows = tasksByGroup[groupId] || [];
    rows.forEach(visit);
  });
  return Array.from(new Set(out));
}

function collectAllDexIdsFromData(gameKey) {
  const dexArr = window.DATA?.dex?.[gameKey] || [];
  return dexArr.map((d) => d.id);
}

function collectAllFashionKeysFromData(gameKey) {
  const cats = window.DATA?.fashion?.[gameKey]?.categories || [];
  const out = [];
  for (const category of cats) {
    const catId = category.id;
    for (const item of category.items || []) {
      const itemId = item.id; // can be number or string; we keep as-is for lookup
      const forms = Array.isArray(item.forms) ? item.forms : [];
      if (!forms.length) {
        out.push({
          categoryId: catId,
          itemId,
          formLookup: null, // ← lookup key (null = whole item)
          jsonKey: `${slug(catId)}:${slug(itemId)}:-`, // ← pretty JSON key
        });
      } else {
        forms.forEach((f, idx) => {
          const name = typeof f === "string" ? f : f?.name || String(idx + 1);
          // If a form id exists, prefer it; else itemId-{1..N}
          const formId =
            typeof f === "object" && f?.id
              ? String(f.id)
              : `${slug(itemId)}-${idx + 1}`;
          out.push({
            categoryId: catId,
            itemId,
            formLookup: name, // ← store uses NAME as the key
            jsonKey: `${slug(catId)}:${slug(itemId)}:${slug(formId)}`,
          });
        });
      }
    }
  }
  return out;
}

function getDexCanonicalForms(gameKey, dexId) {
  const arr = window.DATA?.dex?.[gameKey] || [];
  const entry = arr.find((d) => String(d.id) === String(dexId));
  const list = Array.isArray(entry?.forms) ? entry.forms : [];
  // Always return STRING KEYS, never objects
  return list
    .map((f) =>
      typeof f === "string"
        ? f
        : f && (f.name || f.id)
        ? String(f.name || f.id)
        : ""
    )
    .filter(Boolean);
}

// Status priority so we can compute the "highest" status
const STATUS_PRIORITY = {
  unknown: 0,
  seen: 1,
  caught: 2,
  alpha: 3,
  shiny: 4,
  shiny_alpha: 5,
};
function liftStatus(base, ...others) {
  let best = STATUS_PRIORITY[base] ?? 0;
  for (const s of others) {
    const p = STATUS_PRIORITY[s] ?? 0;
    if (p > best) best = p;
  }
  // return the status string that matches priority value
  for (const [k, v] of Object.entries(STATUS_PRIORITY)) {
    if (v === best) return k;
  }
  return "unknown";
}

/* ===================== Reading CURRENT values ===================== */
// We prefer store getters. If missing, we fall back to DOM queries (best-effort).
function readTaskState(taskId) {
  if (window.store?.getTaskState) return window.store.getTaskState(taskId);

  // Fallback DOM (expects data-task-id wrapper with either a checkbox or a slider/count)
  const root = document.querySelector(`[data-task-id="${CSS.escape(taskId)}"]`);
  if (!root) return { type: "check", done: false };

  const slider = root.querySelector('input[type="range"]');
  if (slider) {
    const cc = Number.parseInt(
      slider.getAttribute("data-current-count") || slider.value || "0",
      10
    );
    const ct = Number.parseInt(
      slider.getAttribute("data-current-tier") || "0",
      10
    );
    return { type: "tiered", currentCount: cc, currentTier: ct };
  }
  const cb = root.querySelector('input[type="checkbox"]');
  return { type: "check", done: !!cb?.checked };
}

function readDexState(gameKey, dexId) {
  // If you later provide store.getDexStatus(gameKey, dexId) returning {status, forms:{[k]:status}}
  if (window.store?.getDexStatus)
    return window.store.getDexStatus(gameKey, dexId);

  // DOM fallback:
  const cell = document.querySelector(`.dex-cell[data-dex-id="${dexId}"]`);
  const status =
    cell?.querySelector("select[data-dex-status]")?.value ||
    cell?.getAttribute("data-dex-status") ||
    "unknown";
  const forms = {};
  document
    .querySelectorAll(`.dex-form[data-dex-id="${dexId}"]`)
    .forEach((f) => {
      const key =
        f.getAttribute("data-form-key") ||
        f.getAttribute("data-form-name") ||
        f.id ||
        "";
      if (!key) return;
      const formStatus =
        f.querySelector("select[data-dex-form-status]")?.value ||
        f.getAttribute("data-status") ||
        "unknown";
      forms[key] = formStatus;
    });
  return { status, forms };
}

function readFashionState(gameKey, categoryId, itemId, formLookup) {
  if (window.store?.getFashionState)
    return window.store.getFashionState(
      gameKey,
      categoryId,
      itemId,
      formLookup
    );
}

/* ===================== Snapshot builder ===================== */
export function collectSnapshot(gameKey) {
  const when = new Date().toISOString();

  // Tasks
  const allTaskIds = collectAllTaskIdsFromData(gameKey);
  const tasks = {};
  for (const id of allTaskIds) {
    tasks[id] = readTaskState(id);
  }

  // Dex
  const allDexIds = collectAllDexIdsFromData(gameKey);
  const dex = {};
  for (const id of allDexIds) {
    // 1) read current (store getter preferred, else DOM)
    const cur = readDexState(gameKey, id); // { status, forms }
    const baseStatus = cur?.status ?? "unknown";
    const forms = { ...(cur?.forms || {}) };

    // 2) ensure ALL canonical forms are present (default "unknown")
    const canonicalForms = getDexCanonicalForms(gameKey, id);
    for (const fname of canonicalForms) {
      if (!(fname in forms)) forms[fname] = "unknown";
    }

    // 3) lift parent status if any form outranks it
    const formStatuses = Object.values(forms);
    const lifted = liftStatus(baseStatus, ...formStatuses);

    dex[id] = { status: lifted, forms };
  }

  // Fashion
  const fashion = {};
  const fKeys = collectAllFashionKeysFromData(gameKey);
  for (const k of fKeys) {
    const { categoryId, itemId, formLookup, jsonKey } = k;
    fashion[jsonKey] = readFashionState(
      gameKey,
      categoryId,
      itemId,
      formLookup
    );
  }

  // Meta (just helpful context)
  const meta = {
    gameKey,
    generatedAt: when,
    version: "v1",
  };

  return { meta, tasks, dex, fashion };
}

/* ===================== Backup orchestration ===================== */
let backupTimer = null;
let lastGameKey = null;

function currentGameKey() {
  // Prefer a data attribute set on #content or body
  const fromAttr =
    document.querySelector("#content")?.getAttribute("data-game-key") ||
    document.body?.getAttribute("data-game-key") ||
    window.PPGC?.currentGameKey || // if your app exposes it
    "legendsza"; // safe default for now
  return fromAttr;
}

export async function backupNow() {
  const gameKey = currentGameKey();
  lastGameKey = gameKey;
  const dir = await ensureDirHandle();
  const snap = collectSnapshot(gameKey);
  await writeJsonFile(dir, `${gameKey}.json`, snap);
  emitBackupDone(gameKey);
}

export async function backupAllNow() {
  const dir = await ensureDirHandle();
  const when = new Date().toISOString();
  const games = getAllGameKeys();
  for (const gameKey of games) {
    const snap = collectSnapshot(gameKey);
    await writeJsonFile(dir, `${gameKey}.json`, snap);
    emitBackupDone(gameKey);
  }
  // Optional: a simple meta index of what we saved this pass
  await writeJsonFile(dir, `meta-all.json`, { generatedAt: when, games });
}

export function initBackups({ minutes = 10 } = {}) {
  // Ask browser to persist storage (helps keep IDB/permissions)
  if (navigator?.storage?.persist) {
    navigator.storage.persist().catch(() => {});
  }
  if (backupTimer) clearInterval(backupTimer);
  backupTimer = setInterval(() => {
    backupAllNow().catch((err) =>
      console.debug("[PPGC backup] skipped:", err?.message || err)
    );
  }, Math.max(1, minutes) * 60 * 1000);
}

export async function isBackupFolderGranted() {
  try {
    const handle = await (async () => {
      const h = await idbGet(DIR_KEY);
      if (!h) return null;
      const perm = await h.queryPermission({ mode: "readwrite" });
      if (perm === "granted") return h;
      const req = await h.requestPermission({ mode: "readwrite" });
      return req === "granted" ? h : null;
    })();
    return !!handle;
  } catch {
    return false;
  }
}

// Fire a DOM event so UI can update “Last backup” indicator
function emitBackupDone(gameKey) {
  try {
    const ts = new Date().toISOString();
    window.dispatchEvent(
      new CustomEvent("ppgc:backup:done", { detail: { gameKey, ts } })
    );
    // cache last ts for quick reads
    localStorage.setItem("ppgc_last_backup_ts", ts);
    localStorage.setItem("ppgc_last_backup_game", gameKey || "");
  } catch {}
}

export async function chooseBackupFolder() {
  // Force a fresh picker
  const dirHandle = await window.showDirectoryPicker({ id: "PPGC-Backups" });
  const perm = await dirHandle.requestPermission({ mode: "readwrite" });
  if (perm !== "granted") {
    throw new Error("Write permission denied for chosen folder.");
  }
  await idbSet(DIR_KEY, dirHandle);
  return true;
}
