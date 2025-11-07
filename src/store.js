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
  shinyImgPath: "imgs/pokemon_home/shiny/shiny/",
};

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
}

export function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export function isGCEASection(section) {
  return (section?.title || "").trim().toLowerCase() === "gotta catch 'em all";
}
