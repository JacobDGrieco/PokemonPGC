// Centralized state & persistence
const STORAGE_KEY = "ppgc_v1";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

export const store = {
  state: {
    level: saved.level || "gen", // 'gen' | 'game' | 'section'
    genKey: saved.genKey || null,
    gameKey: saved.gameKey || null,
    sectionId: saved.sectionId || null,
    dexModalFor: null,
  },
  sectionsStore: new Map(Object.entries(saved.sections || {})), // Map<gameKey, Section[]>
  tasksStore: new Map(Object.entries(saved.tasks || {})), // Map<sectionId, Task[]>
  dexStatus: new Map(Object.entries(saved.dexStatus || {})), // Map<gameKey, { [monId]: flag }>
  dexFormsStatus: new Map(), // Map<gameKey, { [monId]: { all?:boolean, forms: { [formName]: flag } } }>
  shinyImgPath: "imgs/pokemon_home/shiny/shiny/",
};
store.state.fashionModalFor ??= null;
store.state.fashionCategory ??= null;
store.fashionStatus ??= new Map(); // Map<gameKey, Map<categoryId, Record<itemId:boolean>>>
store.fashionFormsStatus ??= new Map();
store.distributionsStatus ??= new Map();
store.dexResearchStatus ??= new Map();
store.curryStatus ??= new Map(); // Map<gameKey, { [curryId]: boolean }>
store.curryFormsStatus ??= new Map(); // Map<gameKey, { [curryId]: { all:boolean, forms:{[name]:boolean} } }>

// when loading:
const raw = JSON.parse(localStorage.getItem("fashionStatus") || "{}");
const map = new Map();
for (const [gameKey, categories] of Object.entries(raw)) {
  const catMap = new Map();
  for (const [catId, items] of Object.entries(categories || {})) {
    catMap.set(catId, items || {});
  }
  map.set(gameKey, catMap);
}
store.fashionStatus = map || new Map();

const rawForms = JSON.parse(localStorage.getItem("fashionFormsStatus") || "{}");
const formsMap = new Map();
for (const [gameKey, categories] of Object.entries(rawForms)) {
  const catMap = new Map();
  for (const [catId, items] of Object.entries(categories || {})) {
    catMap.set(catId, items || {});
  }
  formsMap.set(gameKey, catMap);
}
store.fashionFormsStatus = formsMap;

const rawDexForms = JSON.parse(localStorage.getItem("dexFormsStatus") || "{}");
const dexFormsMap = new Map();
for (const [gameKey, byId] of Object.entries(rawDexForms)) {
  const rec = {};
  for (const [monId, node] of Object.entries(byId || {})) {
    rec[monId] = { all: !!node?.all, forms: node?.forms || {} };
  }
  dexFormsMap.set(gameKey, rec);
}
store.dexFormsStatus = dexFormsMap;

const rawDist = JSON.parse(localStorage.getItem("distributionsStatus") || "{}");
const distMap = new Map();
for (const [gameKey, rec] of Object.entries(rawDist)) {
  distMap.set(gameKey, rec || {});
}
store.distributionsStatus = distMap;

const rawResearch = JSON.parse(localStorage.getItem("dexResearchStatus") || "{}");
const researchMap = new Map();
for (const [gameKey, rec] of Object.entries(rawResearch)) {
  researchMap.set(gameKey, rec || {});
}
store.dexResearchStatus = researchMap;

const rawCurry = JSON.parse(localStorage.getItem("curryStatus") || "{}");
const curryMap = new Map();
for (const [gameKey, rec] of Object.entries(rawCurry)) {
  curryMap.set(gameKey, rec || {});
}
store.curryStatus = curryMap;

const rawCurryForms = JSON.parse(
  localStorage.getItem("curryFormsStatus") || "{}"
);
const curryFormsMap = new Map();
for (const [gameKey, rec] of Object.entries(rawCurryForms)) {
  const gameRec = {};
  for (const [curryId, node] of Object.entries(rec || {})) {
    gameRec[curryId] = {
      all: !!node?.all,
      forms: node?.forms || {},
    };
  }
  curryFormsMap.set(gameKey, gameRec);
}
store.curryFormsStatus = curryFormsMap;


export function save() {
  const obj = {
    level: store.state.level,
    genKey: store.state.genKey,
    gameKey: store.state.gameKey,
    sectionId: store.state.sectionId,
    sections: Object.fromEntries([...store.sectionsStore]),
    tasks: Object.fromEntries([...store.tasksStore]),
    dexStatus: Object.fromEntries([...store.dexStatus]),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));

  const fash = {};
  store.fashionStatus.forEach((catMap, gameKey) => {
    fash[gameKey] = {};
    catMap.forEach((items, catId) => {
      fash[gameKey][catId] = items;
    });
  });
  localStorage.setItem("fashionStatus", JSON.stringify(fash));

  const fashForms = {};
  store.fashionFormsStatus.forEach((catMap, gameKey) => {
    fashForms[gameKey] = {};
    catMap.forEach((items, catId) => {
      fashForms[gameKey][catId] = items;
    });
  });
  localStorage.setItem("fashionFormsStatus", JSON.stringify(fashForms));

  const dexForms = {};
  store.dexFormsStatus.forEach((byId, gameKey) => {
    dexForms[gameKey] = byId || {};
  });
  localStorage.setItem("dexFormsStatus", JSON.stringify(dexForms));

  const dist = {};
  store.distributionsStatus.forEach((rec, gameKey) => {
    dist[gameKey] = rec || {};
  });
  localStorage.setItem("distributionsStatus", JSON.stringify(dist));

  const research = {};
  store.dexResearchStatus.forEach((rec, gameKey) => {
    research[gameKey] = rec || {};
  });
  localStorage.setItem("dexResearchStatus", JSON.stringify(research));

  const curry = {};
  store.curryStatus.forEach((rec, gameKey) => {
    curry[gameKey] = rec || {};
  });
  localStorage.setItem("curryStatus", JSON.stringify(curry));

  const curryForms = {};
  store.curryFormsStatus.forEach((rec, gameKey) => {
    curryForms[gameKey] = rec || {};
  });
  localStorage.setItem("curryFormsStatus", JSON.stringify(curryForms));
}
store.save = save;

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function isGCEASection(section) {
  return (section?.title || "").trim().toLowerCase() === "gotta catch 'em all";
}

export function getAllGameKeys() {
  const out = new Set();

  // From static DATA (authoritative)
  const S = window.DATA || {};
  Object.keys(S.sections || {}).forEach((k) => out.add(k));
  Object.keys(S.dex || {}).forEach((k) => out.add(k));
  Object.keys(S.fashion || {}).forEach((k) => out.add(k));
  Object.keys(S.curry || {}).forEach((k) => out.add(k));

  // From live stores (if any game has state but not in DATA for some reason)
  if (store.dexStatus instanceof Map)
    store.dexStatus.forEach((_, k) => out.add(k));
  if (store.dexFormsStatus instanceof Map)
    store.dexFormsStatus.forEach((_, k) => out.add(k));
  if (store.fashionStatus instanceof Map)
    store.fashionStatus.forEach((_, k) => out.add(k));
  if (store.fashionFormsStatus instanceof Map)
    store.fashionFormsStatus.forEach((_, k) => out.add(k));
  if (store.curryStatus instanceof Map)
    store.curryStatus.forEach((_, k) => out.add(k));
  if (store.curryFormsStatus instanceof Map)
    store.curryFormsStatus.forEach((_, k) => out.add(k));

  return [...out];
}

// Make them available on window too so persistence fallback can find them
window.store = store;
store.getTaskState = function (taskId) {
  // DFS across all tasks arrays
  const visit = (arr) => {
    for (const t of arr || []) {
      if (!t) continue;
      if (String(t.id) === String(taskId)) return t;
      if (Array.isArray(t.children)) {
        const hit = visit(t.children);
        if (hit) return hit;
      }
    }
    return null;
  };

  for (const [, tasks] of this.tasksStore.entries()) {
    const node = visit(tasks);
    if (node) {
      if (node.type === "tiered") {
        return {
          type: "tiered",
          currentTier: Number(node.currentTier || 0),
          currentCount: Number(node.currentCount || 0),
        };
      }
      return { type: "check", done: !!node.done };
    }
  }

  // Fallback if not found (DOM fallback in persistence will still try)
  return { type: "check", done: false };
};

/** Return full dex entry state for a dexId in a game. */
store.getDexState = function (gameKey, dexId) {
  const d = this.dex?.[gameKey]?.[dexId] || {};
  // Ensure all flags are present
  return {
    seen: !!d.seen,
    caught: !!d.caught,
    shiny: !!d.shiny,
    alpha: !!d.alpha,
    forms: d.forms || {},
  };
};
/** Return { status, forms:{ [formKey]: status } } for a dexId in a game. */
store.getDexStatus = function (gameKey, dexId) {
  const monId = String(dexId);
  // Top-level status (single dropdown)
  const byGame =
    this.dexStatus instanceof Map ? this.dexStatus.get(gameKey) : null;
  const statusRaw =
    byGame && typeof byGame[monId] !== "undefined" ? byGame[monId] : "unknown";
  const status =
    typeof statusRaw === "string"
      ? statusRaw
      : statusRaw
        ? "caught"
        : "unknown";

  // Per-form statuses
  const formsOut = {};
  const formsByGame =
    this.dexFormsStatus instanceof Map
      ? this.dexFormsStatus.get(gameKey)
      : null;
  const pack =
    formsByGame && formsByGame[monId] ? formsByGame[monId] : { forms: {} };
  const formsRec = pack?.forms || pack || {};

  for (const [k, v] of Object.entries(formsRec)) {
    // allow either string statuses or booleans
    formsOut[k] = typeof v === "string" ? v : v ? "caught" : "unknown";
  }

  return { status, forms: formsOut };
};

/** Return true/false for a fashion selection (or specific form if formIndex != null). */
store.getFashionState = function (gameKey, categoryId, itemId, formKey) {
  const gCat =
    this.fashionStatus instanceof Map ? this.fashionStatus.get(gameKey) : null;
  const gFormsCat =
    this.fashionFormsStatus instanceof Map
      ? this.fashionFormsStatus.get(gameKey)
      : null;

  const catKey = String(categoryId);
  const itemKey = String(itemId);

  // Whole-item toggle (no forms)
  if (formKey == null) {
    const cat = gCat && gCat.get(catKey);
    if (!cat) return false;
    return !!cat[itemKey];
  }

  // Specific form toggle
  const catForms = gFormsCat && gFormsCat.get(catKey);
  const itemPack = catForms && catForms[itemKey];
  if (!itemPack) return false;

  // Support either { forms: { [idx]: boolean } } or a flat { [idx]: boolean }
  const forms =
    (itemPack && typeof itemPack.forms === "object" && itemPack.forms) ||
    itemPack ||
    {};
  if (typeof formKey === "string") return !!forms[formKey];
  if (typeof formKey === "number") return !!forms[String(formKey)];
  return false;
};

// ---- Hard reset hook: when ppgc_v1 gets removed, also clear form/fashion state ----
(function setupPPGCResetHook() {
  const STORAGE_KEY = "ppgc_v1";
  const EXTRA_KEYS = [
    "dexFormsStatus",
    "fashionStatus",
    "fashionFormsStatus",
    "dexResearchStatus",
    "curryStatus",
    "curryFormsStatus",
  ];

  // Keep original
  const _origRemoveItem = localStorage.removeItem.bind(localStorage);

  // Patch localStorage.removeItem so removing ppgc_v1 also clears forms/fashion
  localStorage.removeItem = function (key) {
    _origRemoveItem(key);
    if (key === STORAGE_KEY) {
      try {
        EXTRA_KEYS.forEach((k) => _origRemoveItem(k));
      } catch { }
      // Clear in-memory mirrors so the UI truly resets
      try {
        store.sectionsStore.clear();
        store.tasksStore.clear();
        store.dexStatus = new Map();
        store.dexFormsStatus = new Map();
        store.fashionStatus = new Map();
        store.fashionFormsStatus = new Map();
        store.dexResearchStatus = new Map();
        store.curryStatus = new Map();
        store.curryFormsStatus = new Map();

        // Also reset basic state (optional)
        store.state = {
          level: "gen",
          genKey: null,
          gameKey: null,
          sectionId: null,
          dexModalFor: null,
          fashionModalFor: null,
          fashionCategory: null,
        };
      } catch { }
      // One re-render to reflect the cleared state
      try {
        window.PPGC?._suppressRenders && (window.PPGC._suppressRenders = false);
        window.PPGC?.renderAll?.();
      } catch { }
    }
  };

  // Bonus: explicit API if you want to call it directly
  window.PPGC = window.PPGC || {};
  window.PPGC.resetAllProgress = function () {
    try {
      localStorage.removeItem(STORAGE_KEY); // will cascade via the patch
    } catch { }
  };
})();
