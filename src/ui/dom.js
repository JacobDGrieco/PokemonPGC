import { save } from "../store.js";

export const elements = {
  elLogo: document.querySelector(".app-header h1"),
  elSidebarTitle: document.getElementById("navTitle"),
  elSidebarList: document.getElementById("sideList"),
  elBack: document.getElementById("navBack"),
  elContent: document.getElementById("content"),
  elCrumbs: document.getElementById("crumbs"),
  modal: document.getElementById("modal"),
  modalClose: document.getElementById("modalClose"),
  dexGrid: document.getElementById("dexGrid"),
  dexSearch: document.getElementById("dexSearch"),
  dexSelectAll: document.getElementById("dexSelectAll"),
  dexClearAll: document.getElementById("dexClearAll"),
  modalTitle: document.getElementById("modalTitle"),
};

export function wireGlobalNav(store, els, renderAll) {
  const { elLogo, elBack } = els;
  const goToGen = () => {
    store.state.level = "gen";
    store.state.sectionId = null;
    store.state.gameKey = null;
    save();
    renderAll();
  };
  elLogo?.addEventListener("click", goToGen);
  elLogo?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToGen();
    }
  });
  elBack?.addEventListener("click", () => {
    const s = store.state;
    if (s.level === "section") {
      s.level = "game";
      s.sectionId = null;
    } else if (s.level === "game") {
      s.level = "gen";
      s.gameKey = null;
    }
    save();
    renderAll();
  });
}
