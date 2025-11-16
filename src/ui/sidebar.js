import { save } from "../store.js";
import { ensureSections } from "../tasks.js";

function makeDirItem(label, onClick, active = false) {
  const li = document.createElement("div");
  li.className = "dir-item" + (active ? " active" : "");
  li.innerHTML = `<div class="label"><span class="icon"></span><span>${label}</span></div><div>›</div>`;
  li.addEventListener("click", onClick);
  return li;
}

export function renderSidebar(store, els, renderAll) {
  const { elSidebarList, elSidebarTitle, elBack } = els;
  const s = store.state;
  elSidebarList.innerHTML = "";

  // --- NEW: Gen 1 sprite color toggle in sidebar header ---
  const headerEl = document.querySelector(".sidebar-header");
  let toggle = headerEl?.querySelector("#gen1SpriteToggle");
  if (headerEl && !toggle) {
    toggle = document.createElement("label");
    toggle.id = "gen1SpriteToggle";
    toggle.className = "sprite-toggle hidden";
    toggle.innerHTML = `
      <span class="lbl">Colors</span>
      <input type="checkbox" />
      <span class="switch"><span class="knob"></span></span>
    `;
    headerEl.appendChild(toggle);

    const input = toggle.querySelector("input");
    input.addEventListener("change", () => {
      const isColor = input.checked;
      // store state
      s.gen1SpriteMode = isColor ? "color" : "bw";
      save();

      // global flag so dex/tasks can read it
      window.PPGC = window.PPGC || {};
      window.PPGC.gen1SpriteColor = isColor;

      renderAll();
    });
  }

  if (toggle) {
    const input = toggle.querySelector("input");
    // Show only when we’re inside a Gen 1 game context
    // (adjust 'gen1' here if your key is different)
    const showToggle = s.level !== "gen" && s.genKey === "gen1";
    toggle.classList.toggle("hidden", !showToggle);

    // default state if missing
    if (!s.gen1SpriteMode) {
      s.gen1SpriteMode = "bw";
    }

    const isColor = s.gen1SpriteMode === "color";
    if (input) input.checked = isColor;

    // keep global in sync every render
    window.PPGC = window.PPGC || {};
    window.PPGC.gen1SpriteColor = isColor;
  }
  // --- END NEW ---

  if (s.level === "gen") {
    elBack?.classList.add("hidden");
    elSidebarTitle.textContent = "Generations";
    (window.DATA.tabs || []).forEach((t) => {
      elSidebarList.appendChild(
        makeDirItem(t.label, () => {
          s.level = "game";
          s.genKey = t.key;
          s.gameKey = null;
          save();
          renderAll();
        })
      );
    });
    return;
  }

  if (s.level === "game") {
    elBack?.classList.remove("hidden");
    const genLabel =
      (window.DATA.tabs || []).find((x) => x.key === s.genKey)?.label ||
      s.genKey;
    elSidebarTitle.textContent = genLabel;
    (window.DATA.games?.[s.genKey] || []).forEach((g) => {
      elSidebarList.appendChild(
        makeDirItem(g.label, () => {
          s.level = "section";
          s.gameKey = g.key;
          const arr = ensureSections(g.key);
          s.sectionId = arr?.[0]?.id || null;
          save();
          renderAll();
        })
      );
    });
    return;
  }

  if (s.level === "section") {
    elBack?.classList.remove("hidden");
    const gameLabel =
      (window.DATA.games?.[s.genKey] || []).find((x) => x.key === s.gameKey)
        ?.label || s.gameKey;
    elSidebarTitle.textContent = gameLabel;
    const arr = ensureSections(s.gameKey);
    arr.forEach((sec) => {
      elSidebarList.appendChild(
        makeDirItem(
          sec.title,
          () => {
            s.sectionId = sec.id;
            save();
            renderAll();
          },
          s.sectionId === sec.id
        )
      );
    });
  }
}
