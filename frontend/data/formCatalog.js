// src/data/forms/catalog.js
(function () {
	window.PPGC = window.PPGC || {};
	window.DATA = window.DATA || {};

	// Minimal registry helper (matches how your mon_info files do it)
	window.PPGC.register = window.PPGC.register ||
		function register(obj) {
			for (const [k, v] of Object.entries(obj || {})) {
				if (v && typeof v === "object" && !Array.isArray(v)) {
					window.DATA[k] = window.DATA[k] || {};
					// shallow merge is fine for this catalog
					Object.assign(window.DATA[k], v);
				} else {
					window.DATA[k] = v;
				}
			}
		};

	const formsCatalog = {
		25: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
			"original-cap": { label: "Original Cap", games: formSearch("gen7", "swsh", "sv"), },
			"rock-star": { label: "Rock Star", games: formSearch("oras"), },
			"belle": { label: "Belle", games: formSearch("oras"), },
			"pop-star": { label: "Pop Star", games: formSearch("oras"), },
			"phd": { label: "Ph. D", games: formSearch("oras"), },
			"libre": { label: "Libre", games: formSearch("oras"), },
		},
		26: {
			"kantonian-male": { label: "Kantonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
			"kantonian-female": { label: "Kantonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
		},
		130: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "sv", "lza"), },
		},
		888: {
			"normal": { label: "Normal", games: formSearch("swsh", "sv"), },
			"crowned-sword": { label: "Crowned Sword", games: formSearch("swsh", "sv"), },
		},
		719: {
			"mega": {
				label: "Mega Diancie",
				games: ["x-national", "y-national", "omegaruby", "alphasapphire"],
			},
		},
		569: {
			"gigantamax": {
				label: "Gigantamax",
				games: ["sword", "shield"],
			},
		},

		// You can also include “regional” style keys if you want them *even if HOME doesn’t list them*
		// 26: {
		//   "alolan": { label: "Alolan", games: ["sun-alola","moon-alola","ultrasun-alola","ultramoon-alola","letsgopikachu","letsgoeevee"] },
		//   "kantonian-female": { label: "Kantonian (Female)", games: ["letsgoeevee","letsgopikachu","scarlet","violet"] },
		// },
	};

	window.PPGC.register({ formsCatalog });
})();
