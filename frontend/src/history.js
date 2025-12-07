// history.js
// Tiny history/router helper for PPGC.
//
// index.js will call: initHistory({ store, renderAll })
// and after that you can use:
//   window.PPGC.navigateTo("account")
//   window.PPGC.navigateToState({ level: "section", gameKey: "...", ... })

export function initHistory({ store, renderAll }) {
	// ----- Named routes (for special views like "account") -----
	const routes = {
		home: () => {
			// Just re-render whatever the current state is
			renderAll();
			if (typeof store.save === "function") store.save();
		},

		account: () => {
			store.state.level = "account";
			store.state.genKey = null;
			store.state.gameKey = null;
			store.state.sectionId = null;

			if (!store.state.accountTab) {
				store.state.accountTab = "general";
			}

			renderAll();
			if (typeof store.save === "function") store.save();
		},
	};

	function buildPrettyHashFromState(state) {
		const base = window.location.pathname.split("#")[0].split("?")[0] || "/";

		let hash = "";

		if (state.level === "section") {
			const gen = state.genKey || "all";
			const game = state.gameKey || "all";
			const sec = state.sectionId || "";
			hash = `#/section/${gen}/${game}/${sec}`;
		} else if (state.level === "game") {
			const gen = state.genKey || "all";
			hash = `#/game/${gen}`;
		} else if (state.level === "account") {
			const tab = state.accountTab || "general";
			hash = `#/account/${tab}`;
		} else if (state.level === "gen") {
			hash = "";
		} else {
			hash = "";
		}

		return base + hash;
	}

	// ----- Named route helpers (Account, Home, etc.) -----

	function renderRoute(route) {
		const fn = routes[route] || routes.home;
		fn();
	}

	function navigateTo(route) {
		if (!routes[route]) {
			console.warn("[history] unknown route:", route);
			route = "home";
		}

		// For named routes, still use a simple hash:
		//   #/account/general
		//   #/gen
		let newUrl;
		if (route === "account") {
			const base = window.location.pathname.split("#")[0].split("?")[0] || "/";
			newUrl = base + "#/account/general";
		} else if (route === "home") {
			const base = window.location.pathname.split("#")[0].split("?")[0] || "/";
			newUrl = base;
		} else {
			const base = window.location.pathname.split("#")[0].split("?")[0] || "/";
			newUrl = base + "#/" + route;
		}

		const state = { route };

		history.pushState(state, "", newUrl);
		renderRoute(route);
	}

	// ----- Generic state-based navigation (games/sections/account tabs) -----

	function navigateToState(partial) {
		// 1) Merge the new state into the existing store.state
		Object.assign(store.state, partial);

		// 2) Build a pretty hash URL based on the new state
		const newUrl = buildPrettyHashFromState(store.state);

		// 3) Snapshot the state into history.state for Back/Forward
		const snapshot = {
			level: store.state.level,
			genKey: store.state.genKey,
			gameKey: store.state.gameKey,
			sectionId: store.state.sectionId,
			accountTab: store.state.accountTab,
		};

		history.pushState(snapshot, "", newUrl);

		// 4) Render and persist
		renderAll();
		if (typeof store.save === "function") store.save();
	}

	function applyUrlToStateFromLocation() {
		const hash = window.location.hash || "";
		const path = window.location.pathname || "";

		let parts = null;

		if (hash.startsWith("#/")) {
			parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
		} else {
			// optional: support path-style /section/gen1/red/red-catching
			const pathParts = path.split("/").filter(Boolean);
			const idx = pathParts.findIndex(
				(p) => p === "section" || p === "game" || p === "account"
			);
			if (idx !== -1) {
				parts = pathParts.slice(idx);
			}
		}

		if (!parts || !parts.length) return;

		const [route, a, b, c] = parts;

		if (route === "account") {
			store.state.level = "account";
			store.state.genKey = null;
			store.state.gameKey = null;
			store.state.sectionId = null;
			store.state.accountTab = a || "general";
		} else if (route === "game") {
			store.state.level = "game";
			store.state.genKey = a || null;
			store.state.gameKey = null;
			store.state.sectionId = null;
			store.state.accountTab = null;
		} else if (route === "section") {
			store.state.level = "section";
			store.state.genKey = a || null; // gen
			store.state.gameKey = b || null; // game
			store.state.sectionId = c || null; // section
			store.state.accountTab = null;
		} else {
			// Unknown route; leave state as-is (localStorage).
		}
	}

	// ----- Back/Forward handling -----

	window.addEventListener("popstate", (event) => {
		const snap = event.state;
		if (!snap) return;

		// If this history entry came from navigateTo("..."), it will
		// have { route }. In that case, just re-run the named route.
		if (snap.route) {
			renderRoute(snap.route);
			return;
		}

		// Otherwise, treat it as a full-state snapshot from navigateToState.
		Object.assign(store.state, {
			level: snap.level || "gen",
			genKey: snap.genKey || null,
			gameKey: snap.gameKey || null,
			sectionId: snap.sectionId || null,
			accountTab: snap.accountTab || null,
		});

		renderAll();
		if (typeof store.save === "function") store.save();
	});
	// React to hash changes (e.g. clicking a bookmark while already on PPGC)
	window.addEventListener("hashchange", () => {
		// Update state from the new URL
		applyUrlToStateFromLocation();

		// Render and persist
		renderAll();
		if (typeof store.save === "function") store.save();

		// Keep history.state in sync with the new state, but don't add another entry
		const snapshot = {
			level: store.state.level,
			genKey: store.state.genKey,
			gameKey: store.state.gameKey,
			sectionId: store.state.sectionId,
			accountTab: store.state.accountTab || null,
		};
		history.replaceState(snapshot, "", window.location.href);
	});

	// Optionally: record the *current* state as the first history entry,
	// so going "Back" out of the first navigation behaves consistently.
	applyUrlToStateFromLocation();
	try {
		const initialSnapshot = {
			level: store.state.level,
			genKey: store.state.genKey,
			gameKey: store.state.gameKey,
			sectionId: store.state.sectionId,
			accountTab: store.state.accountTab || null,
		};
		history.replaceState(initialSnapshot, "", window.location.href);
	} catch {
		// ignore if history is not available
	}

	// ----- Expose helpers on window.PPGC -----

	window.PPGC = window.PPGC || {};
	window.PPGC.navigateTo = navigateTo; // named routes like "account"
	window.PPGC.navigateToState = navigateToState; // generic state-based routes
}
