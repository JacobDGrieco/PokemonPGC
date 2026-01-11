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
		// Generation 1
		3: { // Venusaur
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		6: { // Charizard
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "swsh", "lza"), },
			"mega-x": { label: "Mega X", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-y": { label: "Mega Y", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		9: { // Blastoise
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "swsh", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		12: { // Butterfree
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		15: { // Beedrill
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lgpe", "lza"), },
		},
		18: { // Pidgeot
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lgpe", "lza"), },
		},
		19: { // Rattata
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe"), },
		},
		20: { // Raticate
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe"), },
		},
		25: { // Pikachu
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"rock-star": { label: "Rock Star", games: formSearch("oras"), },
			"belle": { label: "Belle", games: formSearch("oras"), },
			"pop-star": { label: "Pop Star", games: formSearch("oras"), },
			"phd": { label: "Ph. D", games: formSearch("oras"), },
			"libre": { label: "Libre", games: formSearch("oras"), },
			"alola-cap": { label: "Alola Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"hoenn-cap": { label: "Hoenn Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"kalos-cap": { label: "Kalos Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"original-cap": { label: "Original Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"partner-cap": { label: "Partner Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"sinnoh-cap": { label: "Sinnoh Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"unova-cap": { label: "Unova Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"world-cap": { label: "World Cap", games: formSearch("gen7", "swsh", "scvi"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		26: { // Raichu
			"kantonian-male": { label: "Kantonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "scvi", "lza"), },
			"kantonian-female": { label: "Kantonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"mega-x": { label: "Mega X", games: formSearch("lza"), },
			"mega-y": { label: "Mega Y", games: formSearch("lza"), },
		},
		27: { // Sandshrew
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		28: { // Sandslash
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		36: { // Clefable
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		37: { // Vulpix
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "la", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "la", "scvi"), },
		},
		38: { // Ninetales
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "la", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "la", "scvi", "lza"), },
		},
		41: { // Zubat
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
		},
		42: { // Golbat
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
		},
		44: { // Gloom
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi"), },
		},
		45: { // Vileplume
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi"), },
		},
		50: { // Diglett
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		51: { // Dugtrio
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		52: { // Meowth
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		53: { // Persian
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		58: { // Growlithe
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		59: { // Arcanine
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		64: { // Kadabra
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
		},
		65: { // Alakazam
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		68: { // Machamp
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		71: { // Victreebel
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		74: { // Geodude
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		75: { // Graveler
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		76: { // Golem
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		77: { // Ponyta
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		78: { // Rapidash
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		79: { // Slowpoke
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		80: { // Slowbro
			"kantonian": { label: "Kantonian", games: formSearch("oras", "gen7", "lgpe", "swsh", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lgpe", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		83: { // Farfetch'd
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		84: { // Doduo
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		85: { // Dodrio
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		88: { // Grimer
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		89: { // Muk
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		94: { // Gengar
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "swsh", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		97: { // Hypno
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "bdsp", "scvi"), },
		},
		99: { // Kingler
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		100: { // Voltorb
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		101: { // Electrode
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		103: { // Exeggutor
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		105: { // Marowak
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		110: { // Weezing
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		111: { // Rhyhorn
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi"), },
		},
		112: { // Rhydon
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi"), },
		},
		115: { // Kangaskhan
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		118: { // Goldeen
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
		},
		119: { // Seaking
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
		},
		121: { // Starmie
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		122: { // Mr. Mime
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "lza"), },
		},
		123: { // Scyther
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		127: { // Pinsir
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		128: { // Tauros
			"kantonian": { label: "Kantonian", games: formSearch("scvi", "lza"), },
			"paldea-combat-breed": { label: "Paldean (Combat Breed)", games: formSearch("scvi", "lza"), },
			"paldea-aqua-breed": { label: "Paldean (Aqua Breed)", games: formSearch("scvi", "lza"), },
			"paldea-blaze-breed": { label: "Paldean (Blaze Breed)", games: formSearch("scvi", "lza"), },
		},
		129: { // Magikarp
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		130: { // Gyarados
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		131: { // Lapras
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		133: { // Eevee
			"male": { label: "Male", games: formSearch("lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		142: { // Aerodactyl
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		143: { // Snorlax
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		144: { // Articuno
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		145: { // Zapdos
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		146: { // Moltres
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		149: { // Dragonite
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		150: { // Mewtwo
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-x": { label: "Mega X", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-y": { label: "Mega Y", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},

		// Generation 2
		154: { // Meganium
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		157: { // Typhlosion
			"johtonian": { label: "Johtonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		160: { // Feraligatr
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		165: { // Ledyba
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp"), },
		},
		166: { // Ledian
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp"), },
		},
		172: { // Pichu
			"normal": { label: "Normal", games: formSearch("hgss"), },
			"spiky-eared": { label: "Spiky-eared", games: formSearch("hgss"), },
		},
		178: { // Xatu
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp"), },
		},
		181: { // Ampharos
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		185: { // Sudowoodo
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
		},
		186: { // Politoed
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
		},
		190: { // Aipom
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
		},
		194: { // Wooper
			"johtonian-male": { label: "Johtonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"johtonian-female": { label: "Johtonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"paldean": { label: "Paldean", games: formSearch("scvi"), },
		},
		195: { // Quagsire
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
		},
		198: { // Murkrow
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
		},
		199: { // Slowking
			"johtonian": { label: "Johtonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		201: { // Unown
			"a": { label: "A", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"b": { label: "B", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"c": { label: "C", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"d": { label: "D", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"e": { label: "E", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"f": { label: "F", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"g": { label: "G", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"h": { label: "H", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"i": { label: "I", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"j": { label: "J", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"k": { label: "K", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"l": { label: "L", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"m": { label: "M", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"n": { label: "N", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"o": { label: "O", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"p": { label: "P", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"q": { label: "Q", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"r": { label: "R", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"s": { label: "S", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"t": { label: "T", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"u": { label: "U", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"v": { label: "V", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"w": { label: "W", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"x": { label: "X", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"y": { label: "Y", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"z": { label: "Z", games: formSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"!": { label: "!", games: formSearch("gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"?": { label: "?", games: formSearch("gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
		},
		202: { // Wobbuffet
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp"), },
		},
		203: { // Girafarig
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi"), },
		},
		207: { // Gligar
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
		},
		208: { // Steelix
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		211: { // Qwilfish
			"johtonian": { label: "Johtonian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		212: { // Scizor
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		214: { // Heracross
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		215: { // Sneasel
			"johtonian-male": { label: "Johtonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
			"johtonian-female": { label: "Johtonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
			"hisuian-male": { label: "Hisuian Male", games: formSearch("la", "scvi"), },
			"hisuian-female": { label: "Hisuian Female", games: formSearch("la", "scvi"), },
		},
		217: { // Ursaring
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la", "scvi"), },
		},
		221: { // Piloswine
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi"), },
		},
		222: { // Corsola
			"johtonian": { label: "Johtonian", games: formSearch("swsh"), },
			"galarian": { label: "Galarian", games: formSearch("swsh"), },
		},
		224: { // Octillery
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la"), },
		},
		227: { // Skarmory
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		229: { // Houndoom
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		232: { // Donphan
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi"), },
		},
		248: { // Tyranitar
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},

		// Generation 3
		254: { // Sceptile
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		255: { // Torchic
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
		},
		256: { // Combusken
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
		},
		257: { // Blaziken
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		260: { // Swampert
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		263: { // Zigzagoon
			"hoennian": { label: "Hoennian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		264: { // Linoone
			"hoennian": { label: "Hoennian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		267: { // Beautifly
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
		},
		269: { // Dustox
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "la"), },
		},
		272: { // Ludicolo
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
		},
		274: { // Nuzleaf
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
		},
		275: { // Shiftry
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi"), },
		},
		282: { // Gardevoir
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		302: { // Sableye
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		303: { // Mawile
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		306: { // Aggron
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		307: { // Meditite
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
		},
		308: { // Medicham
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		310: { // Manectric
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		315: { // Roselia
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		316: { // Gulpin
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		317: { // Swalot
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		319: { // Sharpedo
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		322: { // Numel
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		323: { // Camerupt
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		332: { // Cacturne
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		334: { // Altaria
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		350: { // Milotic
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		351: { // Castform
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"rainy": { label: "Rainy", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"snowy": { label: "Snowy", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"sunny": { label: "Sunny", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		358: { // Chimecho
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		359: { // Absol
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		362: { // Glalie
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		369: { // Relicanth
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		373: { // Salamence
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		376: { // Metagross
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		380: { // Latias
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		381: { // Latios
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		382: { // Kyogre
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"primal": { label: "Primal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		383: { // Groudon
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"primal": { label: "Primal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		384: { // Rayquaza
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		386: { // Deoxys
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"attack": { label: "Attack", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"defense": { label: "Defense", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"speed": { label: "Speed", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},

		// Generation 4
		396: { // Starly
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		397: { // Staravia
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		398: { // Staraptor
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		399: { // Bidoof
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		400: { // Bibarel
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		401: { // Kricketot
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		402: { // Kricketune
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		403: { // Shinx
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		404: { // Luxio
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		405: { // Luxray
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		407: { // Roserade
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		412: { // Burmy
			"plant-cloak": { label: "Plant Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sandy-cloak": { label: "Sandy Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"trash-cloak": { label: "Trash Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		413: { // Wormadam
			"plant-cloak": { label: "Plant Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sandy-cloak": { label: "Sandy Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"trash-cloak": { label: "Trash Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		415: { // Combee
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		417: { // Pachirisu
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		418: { // Buizel
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		419: { // Floatzel
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		421: { // Cherrim
			"overcast": { label: "Overcast", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sunshine": { label: "Sunshine", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		422: { // Shellos
			"west-sea": { label: "West Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"east-sea": { label: "East Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		423: { // Gastrodon
			"west-sea": { label: "West Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"east-sea": { label: "East Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		424: { // Ambipom
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		428: { // Lopunny
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		443: { // Gible
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		444: { // Gabite
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		445: { // Garchomp
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		448: { // Lucario
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		449: { // Hippopotas
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		450: { // Hippowdon
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		453: { // Croagunk
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		454: { // Toxicroak
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		456: { // Finneon
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		457: { // Lumineon
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		459: { // Snover
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		460: { // Abomasnow
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		461: { // Weavile
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		464: { // Rhyperior
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		465: { // Tangrowth
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		473: { // Mamoswine
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		475: { // Gallade
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		478: { // Froslass
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		421: { // Rotom
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fan": { label: "Fan", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"frost": { label: "Frost", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"heat": { label: "Heat", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mow": { label: "Mow", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"wash": { label: "Wash", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		483: { // Dialga
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		484: { // Palkia
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		485: { // Heatran
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		487: { // Giratina
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		491: { // Darkrai
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		492: { // Shaymin
			"land": { label: "Land", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sky": { label: "Sky", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		493: { // Arceus
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"bug": { label: "Bug", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dark": { label: "Dark", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dragon": { label: "Dragon", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"electric": { label: "Electric", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fairy": { label: "Fairy", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fighting": { label: "Fighting", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fire": { label: "Fire", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"flying": { label: "Flying", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ghost": { label: "Ghost", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"grass": { label: "Grass", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ground": { label: "Ground", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ice": { label: "Ice", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"poison": { label: "Poison", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"psychic": { label: "Psychic", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"rock": { label: "Rock", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"steel": { label: "Steel", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"water": { label: "Water", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},

		// Generation 5
		500: { // Emboar
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		503: { // Samurott
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		521: { // Unfeazant
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		530: { // Excadill
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		531: { // Audino
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		545: { // Scolipede
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		549: { // Lilligant
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		550: { // Basculin
			"red-striped": { label: "Red-Striped", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"blue-striped": { label: "Blue-Striped", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"white-striped": { label: "White-Striped", games: formSearch("la", "scvi", "lza"), },
		},
		554: { // Darumaka
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		555: { // Darmanitan
			"unovian": { label: "Unovian", games: formSearch("gen5", "gen6", "gen7", "swsh", "scvi", "lza"), },
			"unovian-zen-mode": { label: "Unovian Zen Mode", games: formSearch("gen5", "gen6", "gen7", "swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian-zen-mode": { label: "Galarian Zen Mode", games: formSearch("swsh", "scvi", "lza"), },
		},
		560: { // Scrafty
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		562: { // Yamask
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		569: { // Garbodor
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		570: { // Zorua
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		571: { // Zoroark
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		585: { // Deerling
			"spring": { label: "Spring", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"summer": { label: "Summer", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"autumn": { label: "Autumn", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"winter": { label: "Winter", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		586: { // Sawsbuck
			"spring": { label: "Spring", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"summer": { label: "Summer", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"autumn": { label: "Autumn", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"winter": { label: "Winter", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		592: { // Frillish
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		593: { // Jellicent
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		604: { // Eelektross
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		609: { // Chandelure
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		618: { // Stunfisk
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		623: { // Golurk
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		628: { // Braviary
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		641: { // Tornadus
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		642: { // Thundurus
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		645: { // Landorus
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		646: { // Kyurem
			"normal": { label: "Normal", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"black-kyurem": { label: "Black", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"white-kyurem": { label: "White", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		647: { // Keldeo
			"ordinary": { label: "Ordinary", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"resolute": { label: "Resolute", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		648: { // Meloetta
			"aria": { label: "Aria", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"pirouette": { label: "Pirouette", games: formSearch("bw2", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		649: { // Genesect
			"normal": { label: "Incarnate", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"burn-drive": { label: "Burn Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"chill-drive": { label: "Chill Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"douse-drive": { label: "Douse Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"shock-drive": { label: "Shock Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},

		// Generation 6
		652: { // Chesnaught
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		655: { // Delphox
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		658: { // Greninja
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"ash-greninja": { label: "Ash-Greninja", games: formSearch("gen7"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		666: { // Vivillon
			"meadow-pattern": { label: "Meadow Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"archipelago-pattern": { label: "Archipelago Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"continental-pattern": { label: "Continental Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"elegant-pattern": { label: "Elegant Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"garden-pattern": { label: "Garden Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"high-plains-pattern": { label: "High Plains Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"icy-snow-pattern": { label: "Icy Snow Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"jungle-pattern": { label: "Jungle Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"marine-pattern": { label: "Marine Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"modern-pattern": { label: "Modern Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"monsoon-pattern": { label: "Monsoon Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"ocean-pattern": { label: "Ocean Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"polar-pattern": { label: "Polar Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"river-pattern": { label: "River Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"sandstorm-pattern": { label: "Sandstorm Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"savanna-pattern": { label: "Savanna Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"sun-pattern": { label: "Sun Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"tundra-pattern": { label: "Tundra Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"fancy-pattern": { label: "Fancy Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"poke-ball-pattern": { label: "Poke Ball Pattern", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},
		668: { // Pyroar
			"male": { label: "Male", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		669: { // Flabebe
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},
		670: { // Floette
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"eternal-flower": { label: "Eternal Flower", games: formSearch("lza"), },
			"mega": { label: "Mega Eternal Flower", games: formSearch("lza"), },
		},
		671: { // Florges
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},
		676: { // Furfrou
			"natural": { label: "Natural", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"heart-trim": { label: "Heart Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"star-trim": { label: "Star Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"diamond-trim": { label: "Diamond Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"debutante-trim": { label: "Debutante Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"matron-trim": { label: "Matron Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"dandy-trim": { label: "Dandy Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"la-reine-trim": { label: "La Reine Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"kabuki-trim": { label: "Kabuki Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"pharaoh-trim": { label: "Pharaoh Trim", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},
		678: { // Meowstic
			"male": { label: "Male", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		681: { // Aegislash
			"shield-forme": { label: "Shield Forme", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"blade-forme": { label: "Blade Forme", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},
		687: { // Malamar
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		689: { // Barbaracle
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		691: { // Dragalge
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		701: { // Hawlucha
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		705: { // Sliggoo
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		706: { // Goodra
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		710: { // Pumpkabo
			"small": { label: "Small", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"medium": { label: "Medium", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"large": { label: "large", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"jumbo": { label: "jumbo", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		711: { // Gourgeist
			"small": { label: "Small", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"medium": { label: "Medium", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"large": { label: "large", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"jumbo": { label: "jumbo", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		713: { // Avalugg
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		716: { // Xerneas
			"neutral": { label: "Neutral", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
			"active": { label: "Active", games: formSearch("gen6", "gen7", "swsh", "la", "scvi", "lza"), },
		},
		718: { // Zygarde
			"10%-forme": { label: "10% Forme", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"50%-forme": { label: "50% Forme", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"complete-forme": { label: "Complete Forme", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"mega-complete-forme": { label: "Mega Complete Forme", games: formSearch("lza"), },
		},
		719: { // Diancie
			"normal": { label: "Normal", games: formSearch("oras", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("oras", "gen7", "lza"), },
		},
		720: { // Hoopa
			"confined": { label: "Confined", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
			"unbound": { label: "Unbound", games: formSearch("gen6", "gen7", "swsh", "scvi", "lza"), },
		},

		// Generation 7
		724: { // Decidueye
			"alolan": { label: "Alolan", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		740: { // Crabominable
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		741: { // Oricorio
			"baile-style": { label: "Baile Style", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"pom-pom-style": { label: "Pom-Pom Style", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"pau-style": { label: "Pa'u Style", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"sensu-style": { label: "Sensu Style", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		745: { // Lycanroc
			"midday": { label: "Midday", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"midnight": { label: "Midnight", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"dusk": { label: "Dusk", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		746: { // Wishiwashi
			"solo": { label: "Solo", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"school": { label: "School", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		768: { // Golisopod
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		773: { // Silvally
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"bug": { label: "Bug", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"dark": { label: "Dark", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"dragon": { label: "Dragon", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"electric": { label: "Electric", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"fairy": { label: "Fairy", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"fighting": { label: "Fighting", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"fire": { label: "Fire", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"flying": { label: "Flying", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"ghost": { label: "Ghost", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"grass": { label: "Grass", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"ground": { label: "Ground", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"ice": { label: "Ice", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"poison": { label: "Poison", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"psychic": { label: "Psychic", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"rock": { label: "Rock", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"steel": { label: "Steel", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"water": { label: "Water", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		774: { // Minior
			"meteor-form": { label: "Meteor Form", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"red-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"orange-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"yellow-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"green-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"blue-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"indigo-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"violet-core": { label: "Red Core", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		778: { // Mimikyu
			"disguised": { label: "Disguised", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"busted": { label: "Busted", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		780: { // Drampa
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		800: { // Necrozma
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "la", "scvi", "lza"), },
			"dusk-mane": { label: "Dusk Mane", games: formSearch("gen7", "swsh", "la", "scvi", "lza"), },
			"dawn-wings": { label: "Dawn Wings", games: formSearch("gen7", "swsh", "la", "scvi", "lza"), },
			"ultra": { label: "Ultra", games: formSearch("gen7", "swsh", "la", "scvi", "lza"), },
		},
		801: { // Magearna
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"original-color": { label: "Original Color", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		802: { // Marshadow
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "scvi", "lza"), },
			"zenith": { label: "Zenith", games: formSearch("gen7", "swsh", "scvi", "lza"), },
		},
		807: { // Zeraora
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},

		// Generation 7 - Part 2		
		809: { // Melmetal
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},

		// Generation 8
		812: { // Rillaboom
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		815: { // Cinderance
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		818: { // Inteleon
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		823: { // Corviknight
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		826: { // Orbettle
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		834: { // Drednaw
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		839: { // Coalossal
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		841: { // Flapple
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		842: { // Appletun
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		844: { // Sandaconda
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		845: { // Cramorant
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"gulping": { label: "Gulping", games: formSearch("swsh", "scvi", "lza"), },
			"gorging": { label: "Gorging", games: formSearch("swsh", "scvi", "lza"), },
		},
		849: { // Toxtricity
			"amped": { label: "Amped", games: formSearch("swsh", "scvi", "lza"), },
			"low-key": { label: "Low Key", games: formSearch("swsh", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		851: { // Centiskorch
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		854: { // Sinistea
			"phony": { label: "Phony", games: formSearch("swsh", "scvi", "lza"), },
			"antique": { label: "Antique", games: formSearch("swsh", "scvi", "lza"), },
		},
		855: { // Polteageist
			"phony": { label: "Phony", games: formSearch("swsh", "scvi", "lza"), },
			"antique": { label: "Antique", games: formSearch("swsh", "scvi", "lza"), },
		},
		858: { // Hatterene
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		861: { // Grimmsnarl
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		869: { // Alcremie
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		870: { // Falinks
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		875: { // Eiscue
			"ice-face": { label: "Ice Face", games: formSearch("swsh", "scvi", "lza"), },
			"noice-face": { label: "Noice Face", games: formSearch("swsh", "scvi", "lza"), },
		},
		876: { // Indeedee
			"male": { label: "Male", games: formSearch("swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("swsh", "la", "scvi", "lza"), },
		},
		877: { // Morpeko
			"full-belly-mode": { label: "Full Belly Mode", games: formSearch("swsh", "scvi", "lza"), },
			"hangry-mode": { label: "Hangry Mode", games: formSearch("swsh", "scvi", "lza"), },
		},
		879: { // Copperajah
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		884: { // Duraludon
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		888: { // Zacian
			"hero-of-many-battles": { label: "Hero of Many Battles", games: formSearch("swsh", "scvi", "lza"), },
			"crowned-sword": { label: "Crowned Sword", games: formSearch("swsh", "scvi", "lza"), },
		},
		889: { // Zamazenta
			"hero-of-many-battles": { label: "Hero of Many Battles", games: formSearch("swsh", "scvi", "lza"), },
			"crowned-shield": { label: "Crowned Shield", games: formSearch("swsh", "scvi", "lza"), },
		},
		890: { // Eternatus
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"eternamax": { label: "Eternamax", games: formSearch("swsh", "scvi", "lza"), },
		},
		892: { // Urshifu
			"single-strike-style": { label: "Single Strike Style", games: formSearch("swsh", "scvi", "lza"), },
			"rapid-strike-style": { label: "Rapid Strike Style", games: formSearch("swsh", "scvi", "lza"), },
			"gigantamax-single-strike-style": { label: "Gigantamax Single Strike Style", games: formSearch("swsh"), },
			"gigantamax-rapid-strike-style": { label: "Gigantamax Rapid Strike Style", games: formSearch("swsh"), },
		},
		893: { // Zarude
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"dada": { label: "Dada", games: formSearch("swsh", "scvi", "lza"), },
		},
		898: { // Calyrex
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"ice-rider": { label: "Ice Rider", games: formSearch("swsh", "scvi", "lza"), },
			"shadow-rider": { label: "Shadow Rider", games: formSearch("swsh", "scvi", "lza"), },
		},

		// Generation 8 - Part 2
		901: { // Ursaluna
			"normal": { label: "Normal", games: formSearch("scvi", "lza"), },
			"bloodmoon": { label: "Bloodmoon", games: formSearch("scvi", "lza"), },
		},
		902: { // Basculegion
			"male": { label: "Male", games: formSearch("la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("la", "scvi", "lza"), },
		},
		905: { // Enamorus
			"incarnate": { label: "Incarnate", games: formSearch("la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("la", "scvi", "lza"), },
		},

		// Generation 9
		916: { // Oinkologne
			"male": { label: "Male", games: formSearch("scvi", "lza"), },
			"female": { label: "Female", games: formSearch("scvi", "lza"), },
		},
		925: { // Maushold
			"family-of-four": { label: "Family of Four", games: formSearch("scvi", "lza"), },
			"family-of-three": { label: "Family of Three", games: formSearch("scvi", "lza"), },
		},
		931: { // Squawkabilly
			"green-plumage": { label: "Green Plumage", games: formSearch("scvi", "lza"), },
			"blue-plumage": { label: "Blue Plumage", games: formSearch("scvi", "lza"), },
			"yellow-plumage": { label: "Yellow Plumage", games: formSearch("scvi", "lza"), },
			"white-plumage": { label: "White Plumage", games: formSearch("scvi", "lza"), },
		},
		952: { // Scovillain
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		964: { // Palafin
			"zero": { label: "Zero", games: formSearch("scvi", "lza"), },
			"hero": { label: "Hero", games: formSearch("scvi", "lza"), },
		},
		966: { // Revavroom
			"normal": { label: "Normal", games: formSearch("scvi", "lza"), },
			"segin-starmobile": { label: "Segin Starmobile", games: formSearch("scvi", "lza"), },
			"schedar-starmobile": { label: "Schedar Starmobile", games: formSearch("scvi", "lza"), },
			"navi-starmobile": { label: "Navi Starmobile", games: formSearch("scvi", "lza"), },
			"ruchbah-starmobile": { label: "Ruchbah Starmobile", games: formSearch("scvi", "lza"), },
			"caph-starmobile": { label: "Caph Starmobile", games: formSearch("scvi", "lza"), },
		},
		970: { // Glimmora
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		978: { // Tatsugiri
			"cury": { label: "Curly", games: formSearch("scvi", "lza"), },
			"droopy": { label: "Droopy", games: formSearch("scvi", "lza"), },
			"stretchy": { label: "Stretchy", games: formSearch("scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		982: { // Dudunsparce
			"three-segment": { label: "Three-Segment", games: formSearch("scvi", "lza"), },
			"two-segment": { label: "Two-Segment", games: formSearch("scvi", "lza"), },
		},
		998: { // Baxcalibur
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		999: { // Gimmighoul
			"chest": { label: "Chest", games: formSearch("scvi", "lza"), },
			"roaming": { label: "Roaming", games: formSearch("scvi", "lza"), },
		},
		1007: { // Koraidon
			"limited": { label: "Limited", games: formSearch("scvi", "lza"), },
			"apex": { label: "Apex", games: formSearch("scvi", "lza"), },
		},
		1008: { // Miraidon
			"low-power": { label: "Low-Power", games: formSearch("scvi", "lza"), },
			"ultimate": { label: "Ultimate", games: formSearch("scvi", "lza"), },
		},
		1012: { // Poltchageist
			"counterfeit": { label: "Counterfeit", games: formSearch("scvi", "lza"), },
			"artisan": { label: "Artisan", games: formSearch("scvi", "lza"), },
		},
		1013: { // Sinistcha
			"counterfeit": { label: "Counterfeit", games: formSearch("scvi", "lza"), },
			"artisan": { label: "Artisan", games: formSearch("scvi", "lza"), },
		},
		1017: { // Ogerpon
			"teal-mask": { label: "Teal Mask", games: formSearch("scvi", "lza"), },
			"wellspring-mask": { label: "Wellspring Mask", games: formSearch("scvi", "lza"), },
			"hearthflame-mask": { label: "Hearthflame Mask", games: formSearch("scvi", "lza"), },
			"cornerstone-mask": { label: "Cornerstone Mask", games: formSearch("scvi", "lza"), },
			"terastalized-teal-mask": { label: "Terastalized Teal Mask", games: formSearch("scvi", "lza"), },
			"terastalized-wellspring-mask": { label: "Terastalized Wellspring Mask", games: formSearch("scvi", "lza"), },
			"terastalized-hearthflame-mask": { label: "Terastalized Hearthflame Mask", games: formSearch("scvi", "lza"), },
			"terastalized-cornerstone-mask": { label: "Terastalized Cornerstone Mask", games: formSearch("scvi", "lza"), },
		},
		1024: { // Terapagos
			"normal": { label: "Normal", games: formSearch("scvi"), },
			"terastal": { label: "Terastal", games: formSearch("scvi"), },
			"stellar": { label: "Stellar", games: formSearch("scvi"), },
		},
	};

	window.PPGC.register({ formsCatalog });
})();
