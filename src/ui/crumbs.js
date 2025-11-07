export function renderCrumbs(store, els) {
  const { elCrumbs } = els;
  const s = store.state;
  elCrumbs.innerHTML = "";
  const push = (t) => {
    const span = document.createElement("span");
    span.className = "crumb";
    span.textContent = t;
    elCrumbs.appendChild(span);
  };
  if (s.level === "gen") {
    push("Generations");
    return;
  }
  const genLabel =
    (window.DATA.tabs || []).find((x) => x.key === s.genKey)?.label || s.genKey;
  push(genLabel);
  if (s.level !== "gen") {
    const gameLabel =
      (window.DATA.games?.[s.genKey] || []).find((x) => x.key === s.gameKey)
        ?.label || s.gameKey;
    if (gameLabel) push(gameLabel);
  }
  if (s.level === "section") {
    const sec = (store.sectionsStore.get(s.gameKey) || []).find(
      (x) => x.id === s.sectionId
    );
    if (sec) push(sec.title);
  }
}
