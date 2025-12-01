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

export function wireGlobalNav(store, els, renderAll) {
	const { elLogo, elBack } = els;

	// Home button: app logo
	if (elLogo) {
		elLogo.style.cursor = "pointer";
		elLogo.addEventListener("click", () => {
			// Go to "all gens" view; URL becomes base index.html
			window.PPGC.navigateToState({
				level: "gen",
				genKey: null,
				gameKey: null,
				sectionId: null,
			});
		});
	}

	// Back button: section -> game(gen), game -> gen
	if (elBack) {
		elBack.style.cursor = "pointer";
		elBack.addEventListener("click", () => {
			const s = store.state;

			if (s.level === "section" && s.genKey) {
				// Example: #/section/gen1/red/red-catching
				// Go up to that gen's game list: #/game/gen1
				window.PPGC.navigateToState({
					level: "game",
					genKey: s.genKey,
					gameKey: null,
					sectionId: null,
				});
			} else if (s.level === "game") {
				// Example: #/game/gen1
				// Go up to top-level "all gens": base URL
				window.PPGC.navigateToState({
					level: "gen",
					genKey: null,
					gameKey: null,
					sectionId: null,
				});
			} else {
				// On home/account/other: do nothing
			}
		});
	}
}