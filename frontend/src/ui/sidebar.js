import { save } from "../store.js";
import { ensureSections } from "../tasks.js";

/* ===================== Helpers ===================== */

/**
 * Create a sidebar "directory item" row.
 */
function makeDirItem(label, onClick, active = false, imgPath = null) {
	const li = document.createElement("div");
	li.className = "dir-item" + (active ? " active" : "");

	const iconHtml = imgPath
		? `<span class="icon game-icon" style="background-image: url('${imgPath}')"></span>`
		: `<span class="icon"></span>`;

	li.innerHTML = `
    <div class="label">
      ${iconHtml}
      <span>${label}</span>
    </div>
    <div>›</div>
  `;
	li.addEventListener("click", onClick);
	return li;
}

/* ===================== Sidebar renderer ===================== */

/**
 * Render the left sidebar:
 * - Level "gen": list of generations
 * - Level "game": list of games for current gen
 * - Level "section": list of sections for current game
 *
 * Also injects and manages the Gen 1 sprite color toggle in the header.
 */
export function renderSidebar(store, els, renderAll) {
	const { elSidebarList, elSidebarTitle, elBack } = els;
	const s = store.state;

	elSidebarList.innerHTML = "";

	// ----- Gen 1 sprite color toggle in sidebar header -----
	(function syncGen1SpriteToggle() {
		const headerEl = document.querySelector(".sidebar-header");
		if (!headerEl) return;

		let toggle = headerEl.querySelector("#gen1SpriteToggle");

		// Create toggle once
		if (!toggle) {
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

				// Store state
				s.gen1SpriteMode = isColor ? "color" : "bw";
				save();

				// Global flag so tasks/dex can read it
				window.PPGC = window.PPGC || {};
				window.PPGC.gen1SpriteColor = isColor;

				renderAll();
			});
		}

		const input = toggle.querySelector("input");

		// Show only when we’re inside a Gen 1 context (adjust 'gen1' key if needed)
		const showToggle = s.level !== "gen" && s.genKey === "gen1";
		toggle.classList.toggle("hidden", !showToggle);

		// Default mode if missing
		if (!s.gen1SpriteMode) {
			s.gen1SpriteMode = "bw";
		}

		const isColor = s.gen1SpriteMode === "color";
		if (input) input.checked = isColor;

		// Keep global flag in sync every render
		window.PPGC = window.PPGC || {};
		window.PPGC.gen1SpriteColor = isColor;
	})();

	/* ---------- Level: GEN (list generations) ---------- */

	if (s.level === "gen") {
		elBack?.classList.add("hidden");
		if (elSidebarTitle) elSidebarTitle.textContent = "Generations";

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

	/* ---------- Level: GAME (list games for gen) ---------- */

	if (s.level === "game") {
		elBack?.classList.remove("hidden");

		const genLabel =
			(window.DATA.tabs || []).find((x) => x.key === s.genKey)?.label ||
			s.genKey;
		if (elSidebarTitle) elSidebarTitle.textContent = genLabel;

		(window.DATA.games?.[s.genKey] || []).forEach((g) => {
			const imgPath = `imgs/games/${g.key}.png`;

			elSidebarList.appendChild(
				makeDirItem(
					g.label,
					() => {
						s.level = "section";
						s.gameKey = g.key;
						const arr = ensureSections(g.key);
						s.sectionId = arr?.[0]?.id || null;
						save();
						renderAll();
					},
					s.gameKey === g.key, // highlight active game if already set
					imgPath
				)
			);
		});

		return;
	}

	/* ---------- Level: SECTION (list sections for game) ---------- */

	if (s.level === "section") {
		elBack?.classList.remove("hidden");

		const gameLabel =
			(window.DATA.games?.[s.genKey] || []).find(
				(x) => x.key === s.gameKey
			)?.label || s.gameKey;
		if (elSidebarTitle) elSidebarTitle.textContent = gameLabel;

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
