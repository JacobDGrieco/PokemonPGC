import { save } from "../store.js";
import { bootstrapTasks } from "../tasks.js";
import {
  layoutWheel,
  getGameColor,
  computeChipScale,
  prepFormsModal,
  createWheelResizeHandler,
} from "./modal.js";

/**
 * Internal numeric ordering for dex status flags.
 * Higher numbers represent "better" completion.
 */
const _RANK = {
  unknown: 0,
  seen: 1,
  caught: 2,
  alpha: 3,
  shiny: 4,
  shiny_alpha: 5,
};
/**
 * Normalize a stored dex flag into one of the known status strings.
 */
function normalizeFlag(v) {
  return String(v || "unknown")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}
/**
 * Convert a status flag into its numeric rank using _RANK.
 */
function rankStatus(v) {
  return _RANK[v] ?? 0;
}
/**
 * Given an array of status flags, pick the highest-ranked one.
 */
function pickHighestStatus(list) {
  if (!Array.isArray(list) || !list.length) return "unknown";
  return list.reduce(
    (best, v) => (rankStatus(v) > rankStatus(best) ? v : best),
    "unknown"
  );
}
/**
 * Determine whether a single flag counts as "completed" for a game,
 * honoring that game's configured completion flags.
 */
function isCompletedForGame(game, val) {
  const v = normalizeFlag(val);
  const comps = (game?.completionFlags || ["caught"]).map(normalizeFlag);
  return comps.includes(v);
}
const _isMythicalForm = (f) => typeof f === "object" && !!f.mythical;

/**
 * Look up the forms node for a mon within the dex store, creating
 * nested objects on demand so callers can safely mutate it.
 */
function _getDexFormsNode(store, gameKey, monId) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  const node = map[monId] || { all: false, forms: {} };
  return { map, node };
}
/**
 * Replace the forms node for a mon within the dex store.
 */
function _setDexFormsNode(store, gameKey, monId, node) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  map[monId] = node;
  store.dexFormsStatus.set(gameKey, map);
  save();
}
function _setAllFormsForMon(
  store,
  gameKey,
  monId,
  formsList,
  status
) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  const node = map[monId] || { all: false, forms: {} };
  node.forms = node.forms || {};

  // Look up the mon so we can apply species + per-form caps
  const dexList = window.DATA.dex?.[gameKey] || [];
  const mon = dexList.find((m) => m && m.id === monId) || null;

  for (const f of formsList || []) {
    const name = typeof f === "string" ? f : f?.name;
    if (!name) continue;
    const applied = clampStatusForForm(mon, f, status);
    node.forms[name] = applied;
  }

  const total = (formsList || []).length;
  const filled = Object.values(node.forms).filter(
    (v) => v && v !== "unknown"
  ).length;
  node.all = total > 0 && filled === total && status !== "unknown";

  map[monId] = node;
  store.dexFormsStatus.set(gameKey, map);
}

/**
 * Clamp a mon-level status so it never exceeds the maximum allowed
 * by that mon (e.g. shiny-locked species).
 */
function clampStatusForMon(mon, val) {
  const desired = normalizeFlag(val);
  if (!mon || !mon.maxStatus) return desired;

  const max = normalizeFlag(mon.maxStatus);
  return rankStatus(desired) > rankStatus(max) ? max : desired;
}
/**
 * Check whether a particular status option is allowed for a mon.
 */
function isOptionAllowedForMon(mon, val) {
  if (!mon || !mon.maxStatus) return true;
  const max = normalizeFlag(mon.maxStatus);
  return rankStatus(val) <= rankStatus(max);
}
/**
 * Clamp a form-level status so it never exceeds the maximum allowed
 * by that specific form (if it has its own maxStatus).
 */
function clampStatusForForm(mon, form, val) {
  const desired = normalizeFlag(val);
  if (!mon) return desired;

  // Start with species cap if present
  let cap = mon.maxStatus ? normalizeFlag(mon.maxStatus) : null;

  // Tighten with per-form cap if present
  if (form && typeof form === "object" && form.maxStatus) {
    const formCap = normalizeFlag(form.maxStatus);
    if (!cap || rankStatus(formCap) < rankStatus(cap)) {
      cap = formCap;
    }
  }

  if (!cap) return desired;
  return rankStatus(desired) > rankStatus(cap) ? cap : desired;
}
/**
 * Check whether a particular status option is allowed for a form.
 */
function isOptionAllowedForForm(mon, form, val) {
  const normalized = normalizeFlag(val);
  if (!mon) return true;

  let cap = mon.maxStatus ? normalizeFlag(mon.maxStatus) : null;

  if (form && typeof form === "object" && form.maxStatus) {
    const formCap = normalizeFlag(form.maxStatus);
    if (!cap || rankStatus(formCap) < rankStatus(cap)) {
      cap = formCap;
    }
  }

  if (!cap) return true;
  return rankStatus(normalized) <= rankStatus(cap);
}
/**
 * Compute the effective species status based on the base species
 * flag and all of its forms.
 */
function _effectiveSpeciesStatus(store, gameKey, mon) {
  const statusMap = store.dexStatus.get(gameKey) || {};
  let base = statusMap[mon.id] || "unknown";
  if (Array.isArray(mon.forms) && mon.forms.length) {
    const { node } = _getDexFormsNode(store, gameKey, mon.id);
    const formVals = (mon.forms || []).map((f) => {
      const name = typeof f === "string" ? f : f?.name;
      return node.forms?.[name] || "unknown";
    });
    const highest = pickHighestStatus(formVals);
    if (rankStatus(highest) > rankStatus(base)) base = highest;
  }
  // ⬇️ NEW: enforce per-mon max
  return clampStatusForMon(mon, base);
}

// --- Research helpers -------------------------------------------------
// store.dexResearchStatus: Map<gameKey, { [monId]: { [taskIndex]: number|boolean } }>
/**
 * Aggregate research entries for a game into a simple summary
 * (completed vs total count).
 */
function _researchStatsFor(gameKey, store) {
  const dex = window.DATA.dex?.[gameKey] || [];
  const researchMap =
    store.dexResearchStatus instanceof Map
      ? store.dexResearchStatus.get(gameKey) || {}
      : {};

  let baseTotal = 0,
    extraTotal = 0,
    baseDone = 0,
    extraDone = 0;

  for (const m of dex) {
    const tasks = Array.isArray(m.research) ? m.research : [];
    if (!tasks.length) continue;

    const isExtraSpecies = !!m.mythical; // mythicals = extra credit
    const rec = researchMap[m.id] || {};

    tasks.forEach((t, idx) => {
      const tiers = Array.isArray(t.tiers) ? t.tiers : [];
      const steps = tiers.length || 1;

      // Support legacy boolean (true = full, false/undefined = 0)
      const raw = rec[idx];
      const level =
        typeof raw === "number"
          ? raw
          : raw
            ? steps
            : 0;

      const done = level >= steps;

      if (isExtraSpecies) {
        extraTotal++;
        if (done) extraDone++;
      } else {
        baseTotal++;
        if (done) baseDone++;
      }
    });
  }

  return { baseTotal, extraTotal, baseDone, extraDone };
}

/**
 * Build the summary card data for a given game's dex section.
 * Returned object is consumed by the card renderer.
 */
export function dexSummaryCardFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];

  // ——— Inject golden meter styles once ———
  if (!document.getElementById("ppgc-golden-meter-css")) {
    const style = document.createElement("style");
    style.id = "ppgc-golden-meter-css";
    document.head.appendChild(style);
  }

  const isMythical = (m) => !!m?.mythical;

  // --- Species meter (base/extra) using effective species status (forms-aware)
  const baseDex = dex.filter((m) => !isMythical(m));
  const extraDex = dex.filter((m) => isMythical(m));
  const baseTotal = baseDex.length;
  const extraTotal = extraDex.length;

  const baseDone = baseDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
  ).length;
  const extraDone = extraDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
  ).length;

  const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
  const pctExtended = baseTotal
    ? ((baseDone + extraDone) / baseTotal) * 100
    : 0;
  const pctBar = Math.min(
    100,
    Math.max(0, Math.round((baseDone / Math.max(1, baseTotal)) * 100))
  );
  const pctExtraOverlay =
    baseTotal > 0 && baseDone === baseTotal && extraTotal > 0
      ? (extraDone / extraTotal) * 100
      : 0;

  // --- National meter (same math, but against `${base}-national`) ---
  const baseGameKey = String(gameKey).endsWith("-national")
    ? String(gameKey).replace(/-national$/, "")
    : String(gameKey);
  const natKey = `${baseGameKey}-national`;
  const natDex = window.DATA.dex?.[natKey] || [];

  const natBaseDex = natDex.filter((m) => !isMythical(m));
  const natExtraDex = natDex.filter((m) => isMythical(m));
  const natBaseTotal = natBaseDex.length;
  const natExtraTotal = natExtraDex.length;

  const natBaseDone = natBaseDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, natKey, m))
  ).length;
  const natExtraDone = natExtraDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, natKey, m))
  ).length;

  const natPctBase = natBaseTotal ? (natBaseDone / natBaseTotal) * 100 : 0;
  const natPctExtended = natBaseTotal
    ? ((natBaseDone + natExtraDone) / natBaseTotal) * 100
    : 0;
  const natPctBar = Math.min(
    100,
    Math.max(0, Math.round((natBaseDone / Math.max(1, natBaseTotal)) * 100))
  );
  const natPctExtraOverlay =
    natBaseTotal > 0 && natBaseDone === natBaseTotal && natExtraTotal > 0
      ? (natExtraDone / natExtraTotal) * 100
      : 0;

  // --- Forms meter (split base/extra by per-form "mythical" flag)
  const haveNat = natBaseTotal > 0;
  const formsDex = haveNat ? natDex : dex;
  const speciesWithForms = formsDex.filter((m) => Array.isArray(m.forms) && m.forms.length);

  // totals
  let formsBaseTotal = 0,
    formsExtraTotal = 0,
    formsBaseDone = 0,
    formsExtraDone = 0;

  for (const m of speciesWithForms) {
    const nodeKey = haveNat ? natKey : gameKey;
    const { node } = _getDexFormsNode(store, nodeKey, m.id);

    for (const f of m.forms) {
      const name = typeof f === "string" ? f : f?.name;
      if (!name) continue;

      const isExtra = _isMythicalForm(f);               // <- mythical form?
      const v = normalizeFlag(node.forms?.[name] || "unknown");
      const isDone = isCompletedForGame(game, v);

      if (isExtra) {
        formsExtraTotal += 1;
        if (isDone) formsExtraDone += 1;
      } else {
        formsBaseTotal += 1;
        if (isDone) formsBaseDone += 1;
      }
    }
  }

  // base vs extended math (mirrors species meters)
  const formsPctBase = formsBaseTotal ? (formsBaseDone / formsBaseTotal) * 100 : 0;
  const formsPctExtended = formsBaseTotal ? ((formsBaseDone + formsExtraDone) / formsBaseTotal) * 100 : 0;
  const formsPctBar = Math.min(100, Math.max(0, Math.round((formsBaseDone / Math.max(1, formsBaseTotal)) * 100)));
  const formsPctExtraOverlay =
    formsBaseTotal > 0 && formsBaseDone === formsBaseTotal && formsExtraTotal > 0
      ? (formsExtraDone / formsExtraTotal) * 100
      : 0;

  const haveForms = (formsBaseTotal + formsExtraTotal) > 0;

  const { baseTotal: researchBaseTotal,
    extraTotal: researchExtraTotal,
    baseDone: researchBaseDone,
    extraDone: researchExtraDone } = _researchStatsFor(gameKey, store);

  const haveResearch = researchBaseTotal + researchExtraTotal > 0;

  let researchPctBar = 0,
    researchPctExtraOverlay = 0,
    researchLabelPct = 0;

  if (haveResearch) {
    const pctBase =
      researchBaseTotal ? (researchBaseDone / researchBaseTotal) * 100 : 0;
    const pctExtended = researchBaseTotal
      ? ((researchBaseDone + researchExtraDone) / researchBaseTotal) * 100
      : 0;

    researchLabelPct =
      researchBaseDone === researchBaseTotal ? pctExtended : pctBase;
    researchPctBar = Math.min(
      100,
      Math.max(0, Math.round((researchBaseDone / Math.max(1, researchBaseTotal)) * 100))
    );
    researchPctExtraOverlay =
      researchBaseTotal > 0 &&
        researchBaseDone === researchBaseTotal &&
        researchExtraTotal > 0
        ? (researchExtraDone / researchExtraTotal) * 100
        : 0;
  }

  const card = document.createElement("section");
  card.className = "card";
  const nationalHTML = haveNat
    ? `
  <!-- national meter -->
  <div class="small">National:
    ${natBaseDone === natBaseTotal ? natBaseDone + natExtraDone : natBaseDone}
    / ${natBaseTotal || 0}
    (${(natBaseDone === natBaseTotal ? natPctExtended : natPctBase).toFixed(2)}%)
  </div>
  <div class="progress ${natPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${natPctBar}%"></span>
    <span class="extra" style="width:${natPctExtraOverlay}%"></span>
    ${natPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${natPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
    : ``;

  const formsHTML = haveForms
    ? `
  <!-- forms meter -->
  <div class="small">
    Forms:
    ${formsBaseDone === formsBaseTotal ? formsBaseDone + formsExtraDone : formsBaseDone}
    / ${formsBaseTotal || 0}
    (${(formsBaseDone === formsBaseTotal ? formsPctExtended : formsPctBase).toFixed(2)}%)
  </div>
  <div class="progress ${formsPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${formsPctBar}%"></span>
    <span class="extra" style="width:${formsPctExtraOverlay}%"></span>
    ${formsPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${formsPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
    : ``;

  const researchHTML = haveResearch
    ? `
  <!-- research meter -->
  <div class="small">
    Research Tasks:
    ${researchBaseDone === researchBaseTotal ? researchBaseDone + researchExtraDone : researchBaseDone}
    / ${researchBaseTotal || 0}
    (${researchLabelPct.toFixed(2)}%)
  </div>
  <div class="progress ${researchPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${researchPctBar}%"></span>
    <span class="extra" style="width:${researchPctExtraOverlay}%"></span>
    ${researchPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${researchPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
    : ``;

  card.innerHTML = `
  <div class="card-hd"><h3>Pokédex — <span class="small">${game?.label || gameKey
    }</span></h3></div>
  <div class="card-bd">
    <!-- species meter -->
    <div class="small">Regional: ${baseDone === baseTotal ? baseDone + extraDone : baseDone}
      / ${baseTotal || 0} (${(baseDone === baseTotal ? pctExtended : pctBase).toFixed(2)}%)</div>
   <div class="progress ${pctExtraOverlay > 0 ? "has-extra" : ""}">
   <span class="base" style="width:${pctBar}%"></span>
   <span class="extra" style="width:${pctExtraOverlay}%"></span>
   ${pctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${Math.round(pctExtraOverlay)}%</div>` : ``}
 </div>
    ${nationalHTML}
    ${formsHTML}
    ${researchHTML}
  </div>`;
  return card;
}
/**
 * Compute overall dex completion percentage for a game.
 */
export function dexPctFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];

  const isMythical = (m) => !!m?.mythical;

  const baseDex = dex.filter((m) => !isMythical(m));
  const extraDex = dex.filter((m) => isMythical(m));
  const baseDone = baseDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
  ).length;
  const baseTotal = baseDex.length;
  const extraDone = extraDex.filter((m) =>
    isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
  ).length;

  const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
  const pctExtended = ((baseDone + extraDone) / Math.max(1, baseTotal)) * 100;
  return baseDone === baseTotal ? pctExtended : pctBase;
}
/**
 * Compute forms-only completion percentage for a game.
 */
export function formsPctFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);

  // prefer National forms set if it exists
  const baseGameKey = String(gameKey).endsWith("-national")
    ? String(gameKey).replace(/-national$/, "")
    : String(gameKey);
  const natKey = `${baseGameKey}-national`;
  const natDex = window.DATA.dex?.[natKey] || [];
  const haveNat = natDex.length > 0;

  const formsDex = haveNat ? natDex : (window.DATA.dex?.[gameKey] || []);
  const speciesWithForms = formsDex.filter((m) => Array.isArray(m.forms) && m.forms.length);

  let baseTotal = 0, extraTotal = 0, baseDone = 0, extraDone = 0;

  for (const m of speciesWithForms) {
    const nodeKey = haveNat ? natKey : gameKey;
    const { node } = _getDexFormsNode(store, nodeKey, m.id);

    for (const f of m.forms) {
      const name = typeof f === "string" ? f : f?.name;
      if (!name) continue;

      const isExtra = _isMythicalForm(f);
      const v = normalizeFlag(node.forms?.[name] || "unknown");
      const done = isCompletedForGame(game, v);

      if (isExtra) {
        extraTotal += 1;
        if (done) extraDone += 1;
      } else {
        baseTotal += 1;
        if (done) baseDone += 1;
      }
    }
  }

  if (!baseTotal) return 0;

  const pctBase = (baseDone / baseTotal) * 100;
  const pctExtended = ((baseDone + extraDone) / baseTotal) * 100;

  // mirror species logic: show extended only when base is full
  return baseDone === baseTotal ? pctExtended : pctBase;
}
/**
 * Compute research-task completion percentage for a game.
 */
export function researchPctFor(gameKey, genKey, store) {
  void genKey; // not needed, but keeps signature consistent

  const { baseTotal, extraTotal, baseDone, extraDone } = _researchStatsFor(
    gameKey,
    store
  );
  if (!baseTotal) return 0;

  const pctBase = (baseDone / baseTotal) * 100;
  const pctExtended = ((baseDone + extraDone) / baseTotal) * 100;

  // mirror species/forms: show extended only when base is full
  return baseDone === baseTotal ? pctExtended : pctBase;
}
window.PPGC = window.PPGC || {};
window.PPGC.formsPctFor = (gameKey, genKey) => formsPctFor(gameKey, genKey, store);
window.PPGC.researchPctFor = (gameKey, genKey) => researchPctFor(gameKey, genKey, store);

/**
 * Wire up the main dex modal: search, bulk controls, per-mon cards,
 * forms wheel modal, and research modal.
 */
export function wireDexModal(store, els) {
  const {
    modal,
    modalClose,
    dexGrid,
    dexSearch,
    dexSelectAll,
    dexClearAll,
    modalTitle,
  } = els;
  const bulkStatusSelect = dexClearAll;

  const formsModal = document.getElementById("formsModal");
  const formsModalClose = document.getElementById("formsModalClose");
  const formsWheel = document.getElementById("formsWheel");
  const researchModal = document.getElementById("researchModal");
  const researchModalClose = document.getElementById("researchModalClose");
  const researchGrid = document.getElementById("researchGrid");
  const researchTitle = document.getElementById("researchTitle");
  let formsNonce = 0;

  if (formsModal && formsModal.parentElement !== document.body) {
    document.body.appendChild(formsModal);
  }

  const modalChange =
    modal.querySelector("header .modalChange") || modal.querySelector(".modal-hd");
  const scopeBtn = document.createElement("button");
  scopeBtn.type = "button";
  scopeBtn.className = "button scope-toggle";
  scopeBtn.title = "Dex Toggle";

  function isNatKey(k) {
    return String(k || "").endsWith("-national");
  }
  function baseOf(k) {
    return isNatKey(k) ? String(k).replace(/-national$/, "") : String(k);
  }
  function updateScopeBtnLabel(gameKey) {
    const base = baseOf(gameKey);
    const natKey = `${base}-national`;
    const natDex = window.DATA.dex?.[natKey] || [];
    const hasNat = Array.isArray(natDex) && natDex.length > 0;

    if (!hasNat) {
      // No National Dex data: hide the toggle completely
      scopeBtn.style.display = "none";
      return;
    }

    // National Dex exists: show the toggle and set label
    scopeBtn.style.display = "";
    scopeBtn.textContent = isNatKey(gameKey) ? "RegiDex" : "NatiDex";
  }

  if (modalChange) {
    const modalClose = modalChange.querySelector('.modalClose');
    modalChange.insertBefore(scopeBtn, modalClose || modalChange.firstChild);
  }

  window.PPGC = window.PPGC || {};
  if (!Array.isArray(window.PPGC._pendingDexSyncs))
    window.PPGC._pendingDexSyncs = [];

  function _queueDexSync(gameKey, dexId, status) {
    window.PPGC._pendingDexSyncs.push({ gameKey, dexId, status });
  }
  function getImageForStatus(it, status) {
    const s = normalizeFlag(status);
    if (!s || s === "unknown" || s === "seen") return it.img || "";
    if (s === "shiny" || s === "shiny_alpha") return it.imgS || it.img || "";
    // "alpha" uses normal sprite; badge indicates alpha
    return it.img || "";
  }
  function getFilterClassForStatus(status) {
    const s = normalizeFlag(status);
    if (!s || s === "unknown") return "status-unknown";
    if (s === "seen") return "status-seen";
    return "status-normal";
  }
  function renderBadges(status) {
    const s = normalizeFlag(status);
    const icons = [];
    const isAlpha = (v) => v === "alpha" || v === "shiny_alpha";
    const isShiny = (v) => v === "shiny" || v === "shiny_alpha";
    if (isShiny(s) && window.DATA.marks?.shiny) {
      icons.push(`<img src="${window.DATA.marks.shiny}" alt="Shiny Badge"/>`);
    }
    if (isAlpha(s) && window.DATA.marks?.alpha) {
      icons.push(`<img src="${window.DATA.marks.alpha}" alt="Alpha Badge"/>`);
    }
    return icons.length ? `<div class="badges">${icons.join("")}</div>` : "";
  }
  // --- NEW: Dex↔Dex sync ----------------------------------------------
  function _resolveDexTargetKey(link) {
    // Per-game national keys: "ruby" -> "ruby-national"
    if (link?.dexType === "national") return `${link?.game}-national`;
    return link?.game;
  }
  function _resolveFormNameFor(link, entryId, targetGameKey) {
    if (typeof link?.form === "undefined" || link.form === null) return null;
    if (typeof link.form === "string") return link.form;

    // number => index into entry.forms (support 0- or 1-based)
    const dexList = window.DATA?.dex?.[targetGameKey] || [];
    const entry = dexList.find((e) => e && e.id === link.id);
    const forms = Array.isArray(entry?.forms) ? entry.forms : [];
    const idx =
      typeof link.form === "number"
        ? link.form >= 1
          ? link.form - 1
          : link.form
        : -1;
    const f = forms[idx];
    if (!f) return null;
    return typeof f === "string" ? f : f?.name || null;
  }

  /** Mirror changed statuses from the edited dex to linked dex entries. */
  function applyDexLinksFromDexEntries(gameKey, changedMap) {
    const dexList = window.DATA?.dex?.[gameKey] || [];
    if (!dexList.length) return;

    for (const [idStr, newStatusRaw] of Object.entries(changedMap || {})) {
      const dexId = Number(idStr);
      const entry = dexList.find((e) => e && e.id === dexId);
      if (!entry) continue;
      const links = Array.isArray(entry.dexSync) ? entry.dexSync : [];
      if (!links.length) continue;

      // normalize once
      const newStatus = String(newStatusRaw || "unknown")
        .trim()
        .toLowerCase();

      for (const link of links) {
        const targetGameKey = _resolveDexTargetKey(link);
        const targetId = link?.id;
        if (!targetGameKey || typeof targetId !== "number") continue;

        const formName = _resolveFormNameFor(link, targetId, targetGameKey);
        if (!formName) {
          // species-level mirror (write exact status)
          const curr = store.dexStatus.get(targetGameKey) || {};
          curr[targetId] = newStatus;
          store.dexStatus.set(targetGameKey, curr);
          save();
        } else {
          // form-level mirror
          const formsMap = store.dexFormsStatus.get(targetGameKey) || {};
          const node = formsMap[targetId] || { all: false, forms: {} };
          node.forms = node.forms || {};
          node.forms[formName] = newStatus;
          // recompute .all flag when every form is non-unknown
          const tList =
            (window.DATA?.dex?.[targetGameKey] || []).find(
              (e) => e && e.id === targetId
            )?.forms || [];
          const total = tList.length;
          const filled = tList.reduce((a, f) => {
            const nm = typeof f === "string" ? f : f?.name;
            return a + ((node.forms?.[nm] || "unknown") !== "unknown" ? 1 : 0);
          }, 0);
          node.all = total > 0 && filled === total && newStatus !== "unknown";
          formsMap[targetId] = node;
          store.dexFormsStatus.set(targetGameKey, formsMap);
          save();
        }
      }
    }
  }
  // Diff the current game's status against the snapshot and run both syncs
  function _syncChangesForCurrentGame() {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;

    const before = modal.__dexSnapshot || {};
    const after = store.dexStatus.get(gameKey) || {};
    const changed = {};
    for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
      const b = before[k] || "unknown";
      const a = after[k] || "unknown";
      if (a !== b) changed[k] = a;
    }

    if (Object.keys(changed).length === 0) return;

    // Dex ↔ Dex links
    try {
      applyDexLinksFromDexEntries(gameKey, changed);
    } catch (e) {
      console.error("applyDexLinksFromDexEntries (swap) error:", e);
    }

    // Dex → Task links (existing integration)
    try {
      window.PPGC.applyDexSyncsFromDexEntries?.(gameKey, changed);
    } catch (e) {
      console.error("applyDexSyncsFromDexEntries (swap) error:", e);
    }

    // Refresh snapshot so we don't re-apply the same diffs
    modal.__dexSnapshot = { ...after };
  }

  function renderDexGrid() {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;
    const genKey = (window.DATA.tabs || [])
      .map((t) => t.key)
      .find((gk) =>
        (window.DATA.games[gk] || []).some((g) => g.key === gameKey)
      );
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
    );
    const dex = window.DATA.dex?.[gameKey] || [];
    const q = (dexSearch.value || "").trim().toLowerCase();
    const options = game ? game.flags : ["shiny", "caught", "seen", "unknown"];
    const statusMap = store.dexStatus.get(gameKey) || {};

    if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
      const prev = normalizeFlag(bulkStatusSelect.value || "");
      const normalizedOptions = options.map((o) => normalizeFlag(o));

      // Prefer the previously chosen value if still valid; otherwise default nicely
      let desired =
        prev && normalizedOptions.includes(prev)
          ? prev
          : normalizedOptions.includes("caught")
            ? "caught"
            : normalizedOptions[0] || "unknown";

      bulkStatusSelect.innerHTML = normalizedOptions
        .map((val) => {
          const label = val
            .replace(/_/g, " ")
            .replace(/\b\w/g, (s) => s.toUpperCase());
          const selected = val === desired ? "selected" : "";
          return `<option value="${val}" ${selected}>${label}</option>`;
        })
        .join("");

      bulkStatusSelect.value = desired;
    }

    const filtered = dex.filter((it) =>
      `${it.id} ${it.name}`.toLowerCase().includes(q)
    );
    dexGrid.innerHTML = "";
    filtered.forEach((it) => {
      let current = statusMap[it.id] || "unknown";

      // if the Dex item defines forms, derive parent status from highest form
      const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
      const hasResearch = Array.isArray(it.research) && it.research.length > 0;
      if (hasForms) {
        const { node } = _getDexFormsNode(store, gameKey, it.id);
        const formVals = (it.forms || []).map((f) => {
          const name = typeof f === "string" ? f : f?.name;
          return node.forms?.[name] || "unknown";
        });
        const highest = pickHighestStatus(formVals);
        if (rankStatus(highest) > rankStatus(current)) current = highest;
      }
      current = clampStatusForMon(it, current);

      const src = getImageForStatus(it, current);
      const cls = getFilterClassForStatus(current);
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");
      card.style.setProperty("--accent", game?.color || "#6aa6ff");
      const keyForCount = `${gameKey}:${it.id}`;
      const formsCountHTML = hasForms
        ? `<span class="pill count" data-dex-forms-count="${keyForCount}"></span>`
        : "";
      const researchCountHTML = hasResearch
        ? `<span class="pill count" data-dex-research-count="${keyForCount}"></span>`
        : "";
      card.innerHTML = `
        <div class="thumb ${cls}">
          ${renderBadges(current)}
          <div class="name" title="${it.name}">#${String(it.id).padStart(
        3,
        "0"
      )}</div>
          ${src
          ? `<img class="sprite" alt="${it.name}" src="${src}" loading="lazy"/>`
          : `<div style="opacity:.5;">No image</div>`
        }
        </div>
        <div class="card-bd">
          <div class="name" title="${it.name}">${it.name}</div>
          <div class="row">
            ${hasForms
          ? `<button class="forms-launch" title="Choose forms">
                        <span class="dot"></span><span>Forms</span>${formsCountHTML}
                      </button>`
          : `<select class="flag-select" aria-label="Status for ${it.name
          }">
                        ${options
            .map((opt) => {
              const val = normalizeFlag(opt);
              if (!isOptionAllowedForMon(it, val)) return "";
              const label = val
                .replace(/_/g, " ")
                .replace(/\b\w/g, (s) => s.toUpperCase());
              const currentVal = clampStatusForMon(it, statusMap[it.id] || "unknown");
              return `<option value="${val}" ${val === currentVal ? "selected" : ""
                }>${label}</option>`;
            })
            .join("")}
                      </select>`
        }
            ${hasResearch
          ? `<button class="research-launch" title="Research tasks"
                          data-game="${gameKey}"
                          data-id="${it.id}">
                <span class="dot"></span><span>Research</span>${researchCountHTML}
              </button>`
          : ""
        }
          </div>
        </div>`;
      if (hasForms) {
        card.querySelector(".forms-launch")?.addEventListener("click", (e) => {
          e.stopPropagation();
          openDexForms(gameKey, genKey, it);
        });
        const countEl = card.querySelector(
          `[data-dex-forms-count="${keyForCount}"]`
        );
        if (countEl) {
          const total = (it.forms || []).length;
          const { node } = _getDexFormsNode(store, gameKey, it.id);
          const filled = (it.forms || []).reduce((acc, f) => {
            const name = typeof f === "string" ? f : f?.name;
            return (
              acc + ((node.forms?.[name] || "unknown") !== "unknown" ? 1 : 0)
            );
          }, 0);
          countEl.textContent = `${filled}/${total}`;
        }
      }
      if (hasResearch) {
        card.querySelector(".research-launch")?.addEventListener("click", (e) => {
          e.stopPropagation();
          openResearchModal(gameKey, genKey, it);
        });

        const researchCountEl = card.querySelector(
          `[data-dex-research-count="${keyForCount}"]`
        );
        if (researchCountEl) {
          const tasks = Array.isArray(it.research) ? it.research : [];
          const totalTasks = tasks.length || 0;

          const recAll =
            store.dexResearchStatus instanceof Map
              ? store.dexResearchStatus.get(gameKey) || {}
              : {};
          const rec = recAll[it.id] || {};

          let doneTasks = 0;
          tasks.forEach((t, idx) => {
            const tiers = Array.isArray(t.tiers) ? t.tiers : [];
            const steps = tiers.length || 1;

            const raw = rec[idx];
            const level =
              typeof raw === "number"
                ? raw
                : raw
                  ? steps   // legacy “true” = full
                  : 0;

            if (level >= steps) {
              doneTasks++;
            }
          });

          researchCountEl.textContent = `${doneTasks}/${totalTasks}`;
        }
      }
      const select = card.querySelector("select.flag-select");
      if (select) {
        select.addEventListener("change", () => {
          let newVal = normalizeFlag(select.value);
          newVal = clampStatusForMon(it, newVal);
          select.value = newVal;

          const curr = store.dexStatus.get(gameKey) || {};
          curr[it.id] = newVal;
          store.dexStatus.set(gameKey, curr);
          save();
          _queueDexSync(gameKey, it.id, newVal);

          const thumb = card.querySelector(".thumb");
          const img = card.querySelector("img.sprite");
          const newSrc = getImageForStatus(it, newVal);
          const newCls = getFilterClassForStatus(newVal);
          thumb.classList.remove(
            "status-unknown",
            "status-seen",
            "status-normal"
          );
          thumb.classList.add(newCls);
          if (img) img.src = newSrc;

          const oldBadges = card.querySelector(".badges");
          oldBadges?.remove();
          const newBadgesHTML = renderBadges(newVal);
          if (newBadgesHTML)
            thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
        });
      }
      dexGrid.appendChild(card);
    });
  }

  scopeBtn.addEventListener("click", () => {
    _syncChangesForCurrentGame();

    const current = store.state.dexModalFor;
    if (!current) return;
    const base = baseOf(current);
    const natKey = `${base}-national`;
    const natDex = window.DATA.dex?.[natKey] || [];

    // If there is no national dex data, do nothing
    if (!Array.isArray(natDex) || natDex.length === 0) return;

    const nextKey = isNatKey(current) ? base : natKey;

    // keep genKey consistent for title/color
    const genKey =
      (window.DATA.tabs || [])
        .map((t) => t.key)
        .find((gk) =>
          (window.DATA.games[gk] || []).some((g) => g.key === base)
        ) || null;

    openDexModal(nextKey, genKey);

    if (missingPanel && missingPanel.style.display !== "none") {
      renderMissingPanel(nextKey, genKey);
    }
  });

  function openDexModal(gameKey, genKey) {
    updateScopeBtnLabel(gameKey);
    store.state.dexModalFor = gameKey;

    // Use the *base* game for the label (e.g. "ruby" even if "ruby-national")
    const baseKey = baseOf(gameKey);
    const gameBase = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === baseKey
    );

    const tasksStore = window.PPGC?._tasksStoreRef;
    if (tasksStore) {
      const sections = window.DATA?.sections?.[gameKey] || [];
      for (const s of sections) {
        if (!s?.id) continue;
        bootstrapTasks(s.id, tasksStore);
      }
    }

    const curr = store.dexStatus.get(gameKey) || {};
    modal.__dexSnapshot = { ...curr };

    // Build title: "Ruby (RegiDex)" or "Ruby (NatiDex)"
    const baseLabel = gameBase ? gameBase.label : baseKey;
    const scopeLabel = isNatKey(gameKey) ? "NatiDex" : "RegiDex";
    modalTitle.textContent = `Dex Editor — ${baseLabel} (${scopeLabel})`;

    dexSearch.value = "";
    renderDexGrid();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  let _closing = false;
  function closeModal() {
    if (_closing) return;
    _closing = true;

    // Hide the modal first (keep DOM stable while we work)
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    // Kill any tooltips so nothing “sticks” at top-left
    try {
      window.PPGC?.hideTooltips?.();
    } catch { }

    // Mute inner renders while we sync
    window.PPGC = window.PPGC || {};
    window.PPGC._suppressRenders = true;

    // --- NEW: figure out which game we’re editing and what actually changed
    const gameKey = store.state.dexModalFor; // still set right now
    const before = modal.__dexSnapshot || {}; // snapshot taken on open
    const after = store.dexStatus.get(gameKey) || {}; // current status map
    const changed = {};
    for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
      const b = before[k] || "unknown";
      const a = after[k] || "unknown";
      if (a !== b) changed[k] = a; // only apply diffs
    }

    // Apply Dex -> Task using Dex entries’ taskSyncs (no rendering here)
    try {
      applyDexLinksFromDexEntries(gameKey, changed);
    } catch (e) {
      console.error("applyDexLinksFromDexEntries error:", e);
    }
    // Then apply Dex -> Task using Dex entries’ taskSyncs
    try {
      window.PPGC.applyDexSyncsFromDexEntries?.(gameKey, changed);
    } catch (e) {
      console.error("applyDexSyncsFromDexEntries error:", e);
    }

    // Now mark modal closed and persist
    store.state.dexModalFor = null;
    save();

    // Unmute and render exactly once on next frame
    window.PPGC._suppressRenders = false;
    requestAnimationFrame(() => {
      try {
        window.PPGC?.renderAll?.();
      } catch (e) {
        console.error(e);
      }
      _closing = false;
    });
  }

  function openDexForms(gameKey, genKey, mon) {
    if (!formsModal || !formsWheel) return;

    formsNonce += 1;
    const nonce = formsNonce;
    formsModal.dataset.formsNonce = String(nonce);
    formsModal.dataset.gameKey = gameKey;
    formsModal.dataset.genKey = genKey;
    formsModal.dataset.monId = String(mon.id);

    const accent = getGameColor(gameKey, genKey);
    const dialog = prepFormsModal(formsModal, formsWheel, { accent });
    if (!dialog) return;

    formsWheel.style.setProperty("--form-img", "100px");

    const forms = mon.forms || [];
    const N = forms.length;
    const preferWidth = N >= 11;

    const body = dialog.querySelector(".modal-bd");
    if (body) {
      if (N > 12) {
        body.classList.add("forms-wheel-scroll");
      } else {
        body.classList.remove("forms-wheel-scroll");
      }
    }

    const { size } = layoutWheel(dialog, { preferWidth, sizeCap: 1000 });
    formsWheel.style.setProperty("--size", `${size}px`);

    const games = window.DATA.games?.[genKey] || [];
    const game = games.find((g) => g.key === gameKey);
    const options = game
      ? game.flags || ["shiny", "caught", "seen", "unknown"]
      : ["shiny", "caught", "seen", "unknown"];

    const _scale = computeChipScale("dex", N, dialog);
    formsWheel.style.setProperty("--form-img", `${_scale.img}px`);
    formsWheel.style.setProperty("--chip-font", `${_scale.font}px`);
    formsWheel.style.setProperty("--chip-pad", _scale.pad);

    const { node } = _getDexFormsNode(store, gameKey, mon.id);

    // Build buttons with selects
    const chips = forms.map((form) => {
      const name = typeof form === "string" ? form : form?.name ?? "";

      // ⬇️ use a simple div container instead of a <button>
      const chip = document.createElement("div");
      chip.className = "form-chip";
      chip.title = name;
      chip.setAttribute("role", "group"); // accessibility: group for the select

      const row = document.createElement("div");
      row.className = "chip-row";

      const label = document.createElement("span");
      label.className = "chip-text";
      label.textContent = name || "?";
      row.appendChild(label);

      function updateChipState() {
        const val = sel.value;
        if (val && val !== "unknown") {
          chip.classList.add("is-set");
        } else {
          chip.classList.remove("is-set");
        }
      }

      const sel = document.createElement("select");
      sel.className = "flag-select";
      const rawCur = node.forms?.[name] || "unknown";
      const curVal = clampStatusForForm(mon, form, rawCur);
      const fObj = typeof form === "object" ? form : null;
      const startSrc =
        curVal === "shiny" || curVal === "shiny_alpha"
          ? fObj?.imgS || fObj?.img || null
          : fObj?.img || null;

      let im = null;
      if (startSrc) {
        im = document.createElement("img");
        im.src = startSrc;
        im.alt = name;
        im.loading = "lazy";
        row.appendChild(im);
      }

      const badges = document.createElement("div");
      badges.className = "badges";
      badges.innerHTML = renderBadges(curVal);
      chip.appendChild(badges);

      sel.innerHTML = options
        .map((opt) => {
          const val = normalizeFlag(opt);
          if (!isOptionAllowedForForm(mon, form, val)) return "";
          const label = val
            .replace(/_/g, " ")
            .replace(/\b\w/g, (s) => s.toUpperCase());
          return `<option value="${val}" ${val === curVal ? "selected" : ""}>${label}</option>`;
        })
        .join("");

      function applyChipStatusClass(val) {
        const cls = getFilterClassForStatus(val);
        chip.classList.remove("status-unknown", "status-seen", "status-normal");
        chip.classList.add(cls);
      }
      applyChipStatusClass(curVal);
      updateChipState();

      sel.addEventListener("change", () => {
        // 🔒 Ignore stale handlers from older modal instances
        if (formsModal.dataset.formsNonce !== String(nonce)) return;

        // Always use the currently active target stored on the modal
        const activeGameKey = formsModal.dataset.gameKey || gameKey;
        const activeMonId = Number(formsModal.dataset.monId || mon.id);

        let newVal = normalizeFlag(sel.value);
        newVal = clampStatusForForm(mon, form, newVal);
        sel.value = newVal;

        const { node } = _getDexFormsNode(store, activeGameKey, activeMonId);
        node.forms = node.forms || {};
        node.forms[name] = newVal;

        const total = forms.length;
        const filled = forms.reduce((a, f) => {
          const nm = typeof f === "string" ? f : f?.name;
          return a + (normalizeFlag(node.forms?.[nm]) !== "unknown" ? 1 : 0);
        }, 0);
        node.all = filled === total;
        _setDexFormsNode(store, activeGameKey, activeMonId, node);

        const key = `${activeGameKey}:${activeMonId}`;
        document
          .querySelectorAll(`[data-dex-forms-count="${key}"]`)
          .forEach((el) => {
            el.textContent = `${filled}/${total}`;
          });

        updateChipState();
        applyChipStatusClass(newVal);
        badges.innerHTML = renderBadges(newVal);

        if (im) {
          const shinyish = newVal === "shiny" || newVal === "shiny_alpha";
          const fObj = typeof form === "object" ? form : null;
          const nextSrc = shinyish
            ? fObj?.imgS || fObj?.img || im.src
            : fObj?.img || im.src;
          im.src = nextSrc;
        }

        // 🔁 Refresh the Dex grid behind the modal so card sprites/counts update
        renderDexGrid();

        try {
          window.PPGC?.applyTaskSyncsFromForm?.(
            activeGameKey,
            activeMonId,
            name,
            newVal
          );
        } catch { }
      });


      row.appendChild(sel);
      chip.appendChild(row);
      formsWheel.appendChild(chip);
      return chip;
    });

    // Shared radial layout + resize handler from modal.js
    const onResize = createWheelResizeHandler("dex", dialog, formsWheel, chips, {
      preferWidth,
      sizeCap: 1000,
      flattenSyForRingsGte: 3,
    });
    if (formsModal._dexOnResize) {
      window.removeEventListener("resize", formsModal._dexOnResize);
    }
    formsModal._dexOnResize = onResize;
    window.addEventListener("resize", onResize, { passive: true });
  }
  function closeDexForms() {
    if (formsModal?._dexOnResize) {
      window.removeEventListener("resize", formsModal._dexOnResize);
      formsModal._dexOnResize = null;
    }

    formsModal.classList.remove("open");
    formsModal.setAttribute("aria-hidden", "true");
    formsModal.setAttribute("inert", "");

    // clear active-target metadata
    delete formsModal.dataset.formsNonce;
    delete formsModal.dataset.gameKey;
    delete formsModal.dataset.genKey;
    delete formsModal.dataset.monId;
  }
  function openResearchModal(gameKey, genKey, mon) {
    if (!researchModal || !researchGrid) return;

    const tasks = Array.isArray(mon.research) ? mon.research : [];
    if (!tasks.length) return;

    researchTitle.textContent = `Research Tasks — ${mon.name}`;

    const boostIconSrc = "imgs/task_imgs/gen8_2/legendsarceus/boost.png";
    const MAX_TIERS = 5; // 1–5, like Serebii

    // hydrate from store (per-mon record)
    const recAll =
      store.dexResearchStatus instanceof Map
        ? store.dexResearchStatus.get(gameKey) || {}
        : {};
    const rec = recAll[mon.id] || {};

    const cardsHTML = tasks
      .map((t, idx) => {
        const tiers = Array.isArray(t.tiers) ? t.tiers : [];
        const steps = tiers.length || 1;

        // existing progress for this task
        const raw = rec[idx];
        const level =
          typeof raw === "number"
            ? raw
            : raw
              ? steps
              : 0;

        // fixed 5 “tier” slots so header and rows line up visually
        const len = tiers.length;
        const offset = Math.floor((MAX_TIERS - len) / 2); // center the values
        let tierSpans = "";
        for (let pos = 0; pos < MAX_TIERS; pos++) {
          const tierIndex = pos - offset;

          // if tierIndex is in range, use that value; otherwise leave blank
          const val =
            tierIndex >= 0 && tierIndex < len ? tiers[tierIndex] : "";

          tierSpans += `<span>${val != null && val !== "" ? val : ""}</span>`;
        }

        return `
        <div class="research-task" data-task="${idx}">
          <div class="rt-icon">
            ${t.boost
            ? `<img class="boost-icon" src="${boostIconSrc}" alt="Boost"/>`
            : ""
          }
          </div>
          <div class="rt-name">${t.text || ""}</div>
          <div class="rt-tiers">
            <div class="rt-tiers-spans">${tierSpans}</div>
            <div class="rt-slider">
            <input type="range"
                   min="0"
                   max="${steps}"
                   value="${level}"
                   step="1"
                   data-research-task="${idx}"
                   aria-label="Progress for '${t.text || ""}'"/>
          </div>
          </div>
        </div>`;
      })
      .join("");

    // header row + list of task “cards”
    researchGrid.innerHTML = `
    <div class="research-header">
      <div></div>
      <div class="rh-name">Task</div>
      <div class="rt-tiers-header">
        ${Array(MAX_TIERS)
        .fill(0)
        .map((_, i) => `<span>${i + 1}</span>`)
        .join("")}
      </div>
    </div>
    <div class="research-list">
      ${cardsHTML}
    </div>
  `;

    // wire sliders (same logic as before, just different markup)
    const map =
      store.dexResearchStatus instanceof Map
        ? store.dexResearchStatus.get(gameKey) || {}
        : {};
    const inner = map[mon.id] || {};

    researchGrid
      .querySelectorAll('input[type="range"][data-research-task]')
      .forEach((slider) => {
        const idx = Number(slider.getAttribute("data-research-task") || "0");
        const steps = Number(slider.max || "1");
        const label = researchGrid.querySelector(
          `[data-tier-label="${idx}"]`
        );

        const apply = () => {
          const lvl = Number(slider.value || "0");
          inner[idx] = lvl;
          if (label) {
            label.textContent = `${lvl}/${steps}`;
          }
          map[mon.id] = inner;
          store.dexResearchStatus.set(gameKey, map);
          save();
        };

        slider.addEventListener("input", apply);
        slider.addEventListener("change", apply);
      });

    researchModal.classList.add("open");
    researchModal.setAttribute("aria-hidden", "false");
  }
  function closeResearchModal() {
    if (!researchModal) return;
    researchModal.classList.remove("open");
    researchModal.setAttribute("aria-hidden", "true");
    // Re-render to refresh research meter + section header
    try {
      window.PPGC?.renderAll?.();
    } catch { }
  }

  const api = { openDexModal: openDexModal, closeModal, renderDexGrid };
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  dexSearch.addEventListener("input", renderDexGrid);
  dexSelectAll.addEventListener("click", () => {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;

    // NEW: take the bulk status from the dropdown (default to "caught")
    let chosen = "caught";
    if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
      const raw = bulkStatusSelect.value;
      if (raw) chosen = normalizeFlag(raw);
    }

    const dex = window.DATA.dex?.[gameKey] || [];
    const curr = store.dexStatus.get(gameKey) || {};

    for (const m of dex) {
      if (m.mythical) continue; // keep your existing rule: skip mythicals
      const applied = clampStatusForMon(m, chosen);
      curr[m.id] = applied;
      _queueDexSync(gameKey, m.id, applied);

      // forms: apply the same chosen status to every form
      if (Array.isArray(m.forms) && m.forms.length) {
        _setAllFormsForMon(store, gameKey, m.id, m.forms, applied);
        for (const f of m.forms) {
          const fname = typeof f === "string" ? f : f?.name;
          if (!fname) continue;
          try {
            window.PPGC?.applyTaskSyncsFromForm?.(
              gameKey,
              m.id,
              fname,
              chosen
            );
          } catch { }
        }
      }
    }

    store.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
  });

  formsModal?.addEventListener("click", (e) => {
    if (e.target === formsModal) closeDexForms();
  });
  formsModalClose?.addEventListener("click", closeDexForms);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && formsModal.classList.contains("open"))
      closeDexForms();
  });
  researchModal?.addEventListener("click", (e) => {
    if (e.target === researchModal) closeResearchModal();
  });
  researchModalClose?.addEventListener("click", closeResearchModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && researchModal.classList.contains("open")) {
      closeResearchModal();
    }
  });

  return api;
}