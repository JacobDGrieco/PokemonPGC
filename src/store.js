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
}

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function isGCEASection(section) {
  return (section?.title || "").trim().toLowerCase() === "gotta catch 'em all";
}
