// src/data/forms/catalog.js
(function () {
	window.PPGC = window.PPGC || {};
	window.DATA = window.DATA || {};

	// Minimal registry helper (matches how your mon_info files do it)
	window.PPGC.register =
		window.PPGC.register ||
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

	/**
	 * DATA.formsCatalog schema:
	 * {
	 *   [natiId]: {
	 *     [formKey]: {
	 *       label: string,
	 *       games: string[],   // game keys from your app ("sword", "shield", "scarlet", etc.)
	 *     }
	 *   }
	 * }
	 */
	const formsCatalog = {
		// Zacian (888)
		888: {
			"normal": {
				label: "Normal",
				games: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"],
			},
			"crowned-sword": {
				label: "Crowned Sword",
				games: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"],
			},
		},

		// Diancie (719)
		719: {
			"mega": {
				label: "Mega Diancie",
				games: ["x-national", "y-national", "omegaruby", "alphasapphire"],
			},
		},

		// Garbodor (569)
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
