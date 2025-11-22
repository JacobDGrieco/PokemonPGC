import { save } from "../store.js";

/**
 * Central DOM references used across the app.
 *
 * All lookups happen once at load time; if you ever render this app into
 * a different container, you may want to re-run these queries.
 */
export const elements = {
	// Shell / layout
	elLogo: document.querySelector(".app-header h1"),
	elSidebarTitle: document.getElementById("navTitle"),
	elSidebarList: document.getElementById("sideList"),
	elBack: document.getElementById("navBack"),
	elContent: document.getElementById("content"),
	elCrumbs: document.getElementById("crumbs"),

	// Dex modal
	modal: document.getElementById("modal"),
	modalClose: document.getElementById("modalClose"),
	dexGrid: document.getElementById("dexGrid"),
	dexSearch: document.getElementById("dexSearch"),
	dexSelectAll: document.getElementById("dexSelectAll"),
	dexClearAll: document.getElementById("dexClearAll"),
	modalTitle: document.getElementById("modalTitle"),

	// Fashion modal
	fashionModal: document.getElementById("fashionModal"),
	fashionModalClose: document.getElementById("fashionModalClose"),
	fashionGrid: document.getElementById("fashionGrid"),
	fashionSearch: document.getElementById("fashionSearch"),
	fashionSelectAll: document.getElementById("fashionSelectAll"),
	fashionClearAll: document.getElementById("fashionClearAll"),
	fashionModalTitle: document.getElementById("fashionModalTitle"),
};

/**
 * Wire global navigation:
 * - Clicking the app logo jumps to the Generations view.
 * - The back button steps:
 *     section → game → gen.
 */
export function wireGlobalNav(store, els, renderAll) {
	const { elLogo, elBack } = els;

	/**
	 * Reset navigation to the top-level "Generations" view.
	 */
	const goToGen = () => {
		const s = store.state;
		s.level = "gen";
		s.sectionId = null;
		s.gameKey = null;
		save();
		renderAll();
	};

	// Logo acts as "home" (Generations)
	if (elLogo) {
		elLogo.addEventListener("click", goToGen);
		elLogo.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				goToGen();
			}
		});
	}

	// Back button: section → game → gen
	if (elBack) {
		elBack.addEventListener("click", () => {
			const s = store.state;

			if (s.level === "section") {
				s.level = "game";
				s.sectionId = null;
			} else if (s.level === "game") {
				s.level = "gen";
				s.gameKey = null;
			} else {
				// already at top
				return;
			}

			save();
			renderAll();
		});
	}
}
