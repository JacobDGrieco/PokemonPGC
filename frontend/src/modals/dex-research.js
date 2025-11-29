// dex-research-modal.js
import { save } from "../store.js";

export function openResearchModal(gameKey, genKey, mon, store) {
	void genKey; // not needed, kept for symmetry

	const researchModal = document.getElementById("researchModal");
	const researchGrid = document.getElementById("researchGrid");
	const researchTitle = document.getElementById("researchTitle");
	if (!researchModal || !researchGrid || !researchTitle) return;

	const tasks = Array.isArray(mon.research) ? mon.research : [];
	if (!tasks.length) return;

	researchTitle.textContent = `Research Tasks — ${mon.name}`;

	const boostIconSrc = "imgs/task-imgs/gen8/legendsarceus/boost.png";
	const MAX_TIERS = 5;

	const recAll =
		store.dexResearchStatus instanceof Map
			? store.dexResearchStatus.get(gameKey) || {}
			: {};
	const rec = recAll[mon.id] || {};

	const cardsHTML = tasks
		.map((t, idx) => {
			const tiers = Array.isArray(t.tiers) ? t.tiers : [];
			const steps = tiers.length || 1;

			const raw = rec[idx];
			const level =
				typeof raw === "number" ? raw : raw ? steps : 0;

			const len = tiers.length;
			const offset = Math.floor((MAX_TIERS - len) / 2);
			let tierSpans = "";
			for (let pos = 0; pos < MAX_TIERS; pos++) {
				const tierIndex = pos - offset;
				const val =
					tierIndex >= 0 && tierIndex < len ? tiers[tierIndex] : "";
				tierSpans += `<span>${val != null && val !== "" ? val : ""}</span>`;
			}

			return `
        <div class="research-task" data-task="${idx}">
          <div class="rt-icon">
            ${t.boost ? `<img class="boost-icon" src="${boostIconSrc}" alt="Boost"/>` : ""}
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

			const apply = () => {
				const lvl = Number(slider.value || "0");
				inner[idx] = lvl;
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

export function setupResearchModal() {
	const researchModal = document.getElementById("researchModal");
	const researchModalClose = document.getElementById("researchModalClose");
	if (!researchModal) return;

	const closeResearchModal = () => {
		researchModal.classList.remove("open");
		researchModal.setAttribute("aria-hidden", "true");
		try {
			window.PPGC?.renderAll?.();
		} catch { }
	};

	researchModal.addEventListener("click", (e) => {
		if (e.target === researchModal) closeResearchModal();
	});
	researchModalClose?.addEventListener("click", closeResearchModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && researchModal.classList.contains("open")) {
			closeResearchModal();
		}
	});
}
