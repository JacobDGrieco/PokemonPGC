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
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi", "lza"), },
			"mega-x": { label: "Mega X", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-y": { label: "Mega Y", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		9: { // Blastoise
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		12: { // Butterfree
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		15: { // Beedrill
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "scvi", "lza"), },
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
		52: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		53: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		58: {
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		59: {
			"kantonian": { label: "Kantonian", games: formSearch("la", "scvi"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi"), },
		},
		64: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
		},
		65: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		68: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		71: {
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		74: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		75: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		76: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi"), },
		},
		77: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		78: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi"), },
		},
		79: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		80: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		83: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		84: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		85: {
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
		105: {
			"kantonian": { label: "Kantonian", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
			"alolan": { label: "Alolan", games: formSearch("gen7", "lgpe", "swsh", "scvi", "lza"), },
		},
		110: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		111: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		112: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		115: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		118: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		119: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		121: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		122: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		123: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		127: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},
		128: {
			"kantonian": { label: "Kantonian", games: formSearch("scvi", "lza"), },
			"paldea-combat-breed": { label: "Paldean (Combat Breed)", games: formSearch("scvi", "lza"), },
			"paldea-aqua-breed": { label: "Paldean (Aqua Breed)", games: formSearch("scvi", "lza"), },
			"paldea-blaze-breed": { label: "Paldean (Blaze Breed)", games: formSearch("scvi", "lza"), },
		},
		129: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		130: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		131: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		133: {
			"male": { label: "Male", games: formSearch("lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("lgpe", "swsh", "bdsp", "la", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		143: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		144: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		145: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		146: {
			"kantonian": { label: "Kantonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		149: { // Dragonite
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		150: { // Mewtwo
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-x": { label: "Mega X", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
			"mega-y": { label: "Mega Y", games: formSearch("gen6", "gen7", "lgpe", "lza"), },
		},

		// Generation 2
		154: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		157: {
			"johtonian": { label: "Johtonian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		160: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		165: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		166: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		172: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"spiky-eared": { label: "Spiky-eared", games: formSearch("hgss"), },
		},
		178: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		181: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		185: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		186: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		190: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		194: {
			"johtonian-male": { label: "Johtonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"johtonian-female": { label: "Johtonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"paldean": { label: "Paldean", games: formSearch("scvi", "lza"), },
		},
		195: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		198: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		199: {
			"johtonian": { label: "Johtonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		201: {
			"a": { label: "A", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"b": { label: "B", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"c": { label: "C", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"d": { label: "D", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"e": { label: "E", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"f": { label: "F", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"g": { label: "G", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"h": { label: "H", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"i": { label: "I", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"j": { label: "J", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"k": { label: "K", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"l": { label: "L", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"m": { label: "M", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"n": { label: "N", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"o": { label: "O", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"p": { label: "P", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"q": { label: "Q", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"r": { label: "R", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"s": { label: "S", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"t": { label: "T", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"u": { label: "U", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"v": { label: "V", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"w": { label: "W", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"x": { label: "X", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"y": { label: "Y", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"z": { label: "Z", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"!": { label: "!", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"?": { label: "?", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		202: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		203: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		207: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		208: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		211: {
			"johtonian": { label: "Johtonian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		212: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		214: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		215: {
			"johtonian-male": { label: "Johtonian Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"johtonian-female": { label: "Johtonian Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"hisuian-male": { label: "Hisuian Male", games: formSearch("la", "scvi", "lza"), },
			"hisuian-female": { label: "Hisuian Female", games: formSearch("la", "scvi", "lza"), },
		},
		217: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		221: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		222: {
			"johtonian": { label: "Johtonian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		224: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		227: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		229: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		232: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		248: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},

		// Generation 3
		254: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		255: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		256: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		257: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		260: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		263: {
			"hoennian": { label: "Hoennian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		264: {
			"hoennian": { label: "Hoennian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		267: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		269: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		272: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		274: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		275: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		282: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		302: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		303: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		306: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		307: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		308: {
			"male": { label: "Male", games: formSearch("gen6", "gen7", "lza"), },
			"female": { label: "Female", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		310: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		315: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		316: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		317: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		319: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		322: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		323: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		332: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		334: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		350: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		351: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"rainy": { label: "Rainy", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"snowy": { label: "Snowy", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"sunny": { label: "Sunny", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		358: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		359: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		362: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		369: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		373: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		376: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		380: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		381: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		382: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"primal": { label: "Primal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		383: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"primal": { label: "Primal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		384: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		386: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"attack": { label: "Attack", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"defense": { label: "Defense", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"speed": { label: "Speed", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},

		// Generation 4
		396: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		397: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		398: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		399: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		400: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		401: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		402: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		403: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		404: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		405: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		407: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		412: {
			"plant-cloak": { label: "Plant Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sandy-cloak": { label: "Sandy Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"trash-cloak": { label: "Trash Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		413: {
			"plant-cloak": { label: "Plant Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sandy-cloak": { label: "Sandy Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"trash-cloak": { label: "Trash Cloak", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		415: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		417: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		418: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		419: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		421: {
			"overcast": { label: "Overcast", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sunshine": { label: "Sunshine", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		421: {
			"west-sea": { label: "West Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"east-sea": { label: "East Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		422: {
			"west-sea": { label: "West Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"east-sea": { label: "East Sea", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		424: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		428: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		443: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		444: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		445: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		448: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
			"mega-z": { label: "Mega Z", games: formSearch("lza"), },
		},
		449: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		450: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		453: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		454: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		456: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		457: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		459: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		460: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		461: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		464: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		465: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		473: {
			"male": { label: "Male", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		475: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		478: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		421: {
			"normal": { label: "Normal", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fan": { label: "Fan", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"frost": { label: "Frost", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"heat": { label: "Heat", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mow": { label: "Mow", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"wash": { label: "Wash", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		483: {
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		484: {
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		485: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		487: {
			"altered": { label: "Altered", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"origin": { label: "Origin", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		491: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		492: {
			"land": { label: "Land", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sky": { label: "Sky", games: formSearch("gen4", "gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		493: {
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
		500: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		503: {
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		521: {
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		530: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		531: {
			"normal": { label: "Normal", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		545: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		549: {
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		550: {
			"red-striped": { label: "Red-Striped", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"blue-striped": { label: "Blue-Striped", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"white-striped": { label: "White-Striped", games: formSearch("la", "scvi", "lza"), },
		},
		554: {
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		555: {
			"unovian": { label: "Unovian", games: formSearch("gen5", "gen6", "gen7", "swsh", "scvi", "lza"), },
			"unovian-zen-mode": { label: "Unovian Zen Mode", games: formSearch("gen5", "gen6", "gen7", "swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian-zen-mode": { label: "Galarian Zen Mode", games: formSearch("swsh", "scvi", "lza"), },
		},
		560: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		562: {
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		569: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		570: {
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		571: {
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		585: {
			"spring": { label: "Spring", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"summer": { label: "Summer", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"autumn": { label: "Autumn", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"winter": { label: "Winter", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		586: {
			"spring": { label: "Spring", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"summer": { label: "Summer", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"autumn": { label: "Autumn", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"winter": { label: "Winter", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		592: {
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		593: {
			"male": { label: "Male", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		604: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		609: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		618: {
			"unovian": { label: "Unovian", games: formSearch("swsh", "scvi", "lza"), },
			"galarian": { label: "Galarian", games: formSearch("swsh", "scvi", "lza"), },
		},
		623: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		628: {
			"unovian": { label: "Unovian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		641: {
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		642: {
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		645: {
			"incarnate": { label: "Incarnate", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		646: {
			"normal": { label: "Normal", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"black-kyurem": { label: "Black", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"white-kyurem": { label: "White", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		647: {
			"ordinary": { label: "Ordinary", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"resolute": { label: "Resolute", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		648: {
			"aria": { label: "Aria", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"pirouette": { label: "Pirouette", games: formSearch("bw2", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		649: {
			"normal": { label: "Incarnate", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"burn-drive": { label: "Burn Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"chill-drive": { label: "Chill Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"douse-drive": { label: "Douse Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"shock-drive": { label: "Shock Drive", games: formSearch("gen5", "gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},

		// Generation 6
		652: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		655: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		658: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"ash-greninja": { label: "Ash-Greninja", games: formSearch("gen7"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		666: {
			"meadow-pattern": { label: "Meadow Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"archipelago-pattern": { label: "Archipelago Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"continental-pattern": { label: "Continental Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"elegant-pattern": { label: "Elegant Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"garden-pattern": { label: "Garden Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"high-plains-pattern": { label: "High Plains Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"icy-snow-pattern": { label: "Icy Snow Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"jungle-pattern": { label: "Jungle Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"marine-pattern": { label: "Marine Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"modern-pattern": { label: "Modern Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"monsoon-pattern": { label: "Monsoon Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ocean-pattern": { label: "Ocean Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"polar-pattern": { label: "Polar Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"river-pattern": { label: "River Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sandstorm-pattern": { label: "Sandstorm Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"savanna-pattern": { label: "Savanna Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sun-pattern": { label: "Sun Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"tundra-pattern": { label: "Tundra Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fancy-pattern": { label: "Fancy Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"poke-ball-pattern": { label: "Poke Ball Pattern", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		668: {
			"male": { label: "Male", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		669: {
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		670: {
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"eternal-flower": { label: "Eternal Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega Eternal Flower", games: formSearch("lza"), },
		},
		671: {
			"red-flower": { label: "Red Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"yellow-flower": { label: "Yellow Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"orange-flower": { label: "Orange Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"blue-flower": { label: "Blue Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"white-flower": { label: "White Flower", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		676: {
			"natural": { label: "Natural", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"heart-trim": { label: "Heart Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"star-trim": { label: "Star Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"diamond-trim": { label: "Diamond Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"debutante-trim": { label: "Debutante Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"matron-trim": { label: "Matron Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dandy-trim": { label: "Dandy Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"la-reine-trim": { label: "La Reine Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"kabuki-trim": { label: "Kabuki Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"pharaoh-trim": { label: "Pharaoh Trim", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		678: {
			"male": { label: "Male", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		681: {
			"shield-forme": { label: "Shield Forme", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"blade-forme": { label: "Blade Forme", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		687: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		689: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		691: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		701: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		705: {
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		706: {
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		710: {
			"small": { label: "Small", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"medium": { label: "Medium", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"large": { label: "large", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"jumbo": { label: "jumbo", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		711: {
			"small": { label: "Small", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"medium": { label: "Medium", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"large": { label: "large", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"jumbo": { label: "jumbo", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		713: {
			"kaloasian": { label: "Kalosian", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		716: {
			"neutral": { label: "Neutral", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"active": { label: "Active", games: formSearch("gen6", "gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		718: {
			"10%-forme": { label: "10% Forme", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"50%-forme": { label: "50% Forme", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"complete-forme": { label: "Complete Forme", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mega-complete-forme": { label: "Mega Complete Forme", games: formSearch("lza"), },
		},
		719: {
			"normal": { label: "Normal", games: formSearch("gen6", "gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen6", "gen7", "lza"), },
		},
		720: {
			"confined": { label: "Confined", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
			"unbound": { label: "Unbound", games: formSearch("gen6", "gen7", "swsh", "bdsp", "scvi", "lza"), },
		},

		// Generation 7
		724: {
			"alolan": { label: "Alolan", games: formSearch("la", "scvi", "lza"), },
			"hisuian": { label: "Hisuian", games: formSearch("la", "scvi", "lza"), },
		},
		740: {
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},
		741: {
			"baile-style": { label: "Baile Style", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"pom-pom-style": { label: "Pom-Pom Style", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"pau-style": { label: "Pa'u Style", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"sensu-style": { label: "Sensu Style", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		745: {
			"midday": { label: "Midday", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"midnight": { label: "Midnight", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dusk": { label: "Dusk", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		746: {
			"solo": { label: "Solo", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"school": { label: "School", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		768: {
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},
		773: {
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"bug": { label: "Bug", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dark": { label: "Dark", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"dragon": { label: "Dragon", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"electric": { label: "Electric", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fairy": { label: "Fairy", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fighting": { label: "Fighting", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"fire": { label: "Fire", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"flying": { label: "Flying", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ghost": { label: "Ghost", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"grass": { label: "Grass", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ground": { label: "Ground", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"ice": { label: "Ice", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"poison": { label: "Poison", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"psychic": { label: "Psychic", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"rock": { label: "Rock", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"steel": { label: "Steel", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"water": { label: "Water", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		774: {
			"meteor-form": { label: "Meteor Form", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"red-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"orange-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"yellow-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"green-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"blue-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"indigo-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"violet-core": { label: "Red Core", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		778: {
			"disguised": { label: "Disguised", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"busted": { label: "Busted", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		780: {
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},
		800: {
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"dusk-mane": { label: "Dusk Mane", games: formSearch("gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"dawn-wings": { label: "Dawn Wings", games: formSearch("gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
			"ultra": { label: "Ultra", games: formSearch("gen7", "swsh", "bdsp", "la", "scvi", "lza"), },
		},
		801: {
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"original-color": { label: "Original Color", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},
		802: {
			"normal": { label: "Normal", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
			"zenith": { label: "Zenith", games: formSearch("gen7", "swsh", "bdsp", "scvi", "lza"), },
		},
		807: {
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},

		// Generation 7 - Part 2		
		809: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},

		// Generation 8
		812: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		815: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		818: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		823: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		826: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		834: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		839: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		841: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		842: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		844: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		844: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		845: {
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"gulping": { label: "Gulping", games: formSearch("swsh", "scvi", "lza"), },
			"gorging": { label: "Gorging", games: formSearch("swsh", "scvi", "lza"), },
		},
		849: {
			"amped": { label: "Amped", games: formSearch("swsh", "scvi", "lza"), },
			"low-key": { label: "Low Key", games: formSearch("swsh", "scvi", "lza"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		851: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		854: {
			"phony": { label: "Phony", games: formSearch("swsh", "scvi", "lza"), },
			"antique": { label: "Antique", games: formSearch("swsh", "scvi", "lza"), },
		},
		855: {
			"phony": { label: "Phony", games: formSearch("swsh", "scvi", "lza"), },
			"antique": { label: "Antique", games: formSearch("swsh", "scvi", "lza"), },
		},
		858: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		861: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		869: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		870: {
			"normal": { label: "Normal", games: formSearch("gen7", "lza"), },
			"mega": { label: "Mega", games: formSearch("gen7", "lza"), },
		},
		876: {
			"ice-face": { label: "Ice Face", games: formSearch("swsh", "scvi", "lza"), },
			"noice-face": { label: "Noice Face", games: formSearch("swsh", "scvi", "lza"), },
		},
		876: {
			"male": { label: "Male", games: formSearch("swsh", "la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("swsh", "la", "scvi", "lza"), },
		},
		877: {
			"full-belly-mode": { label: "Full Belly Mode", games: formSearch("swsh", "scvi", "lza"), },
			"hangry-mode": { label: "Hangry Mode", games: formSearch("swsh", "scvi", "lza"), },
		},
		879: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		884: {
			"normal": { label: "Normal", games: formSearch("swsh"), },
			"gigantamax": { label: "Gigantamax", games: formSearch("swsh"), },
		},
		888: {
			"hero-of-many-battles": { label: "Hero of Many Battles", games: formSearch("swsh", "scvi", "lza"), },
			"crowned-sword": { label: "Crowned Sword", games: formSearch("swsh", "scvi", "lza"), },
		},
		889: {
			"hero-of-many-battles": { label: "Hero of Many Battles", games: formSearch("swsh", "scvi", "lza"), },
			"crowned-shield": { label: "Crowned Shield", games: formSearch("swsh", "scvi", "lza"), },
		},
		890: {
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"eternamax": { label: "Eternamax", games: formSearch("swsh", "scvi", "lza"), },
		},
		892: {
			"single-strike-style": { label: "Single Strike Style", games: formSearch("swsh", "scvi", "lza"), },
			"rapid-strike-style": { label: "Rapid Strike Style", games: formSearch("swsh", "scvi", "lza"), },
			"gigantamax-single-strike-style": { label: "Gigantamax Single Strike Style", games: formSearch("swsh"), },
			"gigantamax-rapid-strike-style": { label: "Gigantamax Rapid Strike Style", games: formSearch("swsh"), },
		},
		893: {
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"dada": { label: "Dada", games: formSearch("swsh", "scvi", "lza"), },
		},
		898: {
			"normal": { label: "Normal", games: formSearch("swsh", "scvi", "lza"), },
			"ice-rider": { label: "Ice Rider", games: formSearch("swsh", "scvi", "lza"), },
			"shadow-rider": { label: "Shadow Rider", games: formSearch("swsh", "scvi", "lza"), },
		},

		// Generation 8 - Part 2
		901: {
			"normal": { label: "Normal", games: formSearch("scvi", "lza"), },
			"bloodmoon": { label: "Bloodmoon", games: formSearch("scvi", "lza"), },
		},
		902: {
			"male": { label: "Male", games: formSearch("la", "scvi", "lza"), },
			"female": { label: "Female", games: formSearch("la", "scvi", "lza"), },
		},
		905: {
			"incarnate": { label: "Incarnate", games: formSearch("la", "scvi", "lza"), },
			"therian": { label: "Therian", games: formSearch("la", "scvi", "lza"), },
		},

		// Generation 9
		916: {
			"male": { label: "Male", games: formSearch("scvi", "lza"), },
			"female": { label: "Female", games: formSearch("scvi", "lza"), },
		},
		925: {
			"family-of-four": { label: "Family of Four", games: formSearch("scvi", "lza"), },
			"family-of-three": { label: "Family of Three", games: formSearch("scvi", "lza"), },
		},
		931: {
			"green-plumage": { label: "Green Plumage", games: formSearch("scvi", "lza"), },
			"blue-plumage": { label: "Blue Plumage", games: formSearch("scvi", "lza"), },
			"yellow-plumage": { label: "Yellow Plumage", games: formSearch("scvi", "lza"), },
			"white-plumage": { label: "White Plumage", games: formSearch("scvi", "lza"), },
		},
		952: {
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		964: {
			"zero": { label: "Zero", games: formSearch("scvi", "lza"), },
			"hero": { label: "Hero", games: formSearch("scvi", "lza"), },
		},
		966: {
			"normal": { label: "Normal", games: formSearch("scvi", "lza"), },
			"segin-starmobile": { label: "Segin Starmobile", games: formSearch("scvi", "lza"), },
			"schedar-starmobile": { label: "Schedar Starmobile", games: formSearch("scvi", "lza"), },
			"navi-starmobile": { label: "Navi Starmobile", games: formSearch("scvi", "lza"), },
			"ruchbah-starmobile": { label: "Ruchbah Starmobile", games: formSearch("scvi", "lza"), },
			"caph-starmobile": { label: "Caph Starmobile", games: formSearch("scvi", "lza"), },
		},
		970: {
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		978: {
			"cury": { label: "Curly", games: formSearch("scvi", "lza"), },
			"droopy": { label: "Droopy", games: formSearch("scvi", "lza"), },
			"stretchy": { label: "Stretchy", games: formSearch("scvi", "lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		982: {
			"three-segment": { label: "Three-Segment", games: formSearch("scvi", "lza"), },
			"two-segment": { label: "Two-Segment", games: formSearch("scvi", "lza"), },
		},
		998: {
			"normal": { label: "Normal", games: formSearch("lza"), },
			"mega": { label: "Mega", games: formSearch("lza"), },
		},
		999: {
			"chest": { label: "Chest", games: formSearch("scvi", "lza"), },
			"roaming": { label: "Roaming", games: formSearch("scvi", "lza"), },
		},
		1012: {
			"counterfeit": { label: "Counterfeit", games: formSearch("scvi", "lza"), },
			"artisan": { label: "Artisan", games: formSearch("scvi", "lza"), },
		},
		1013: {
			"counterfeit": { label: "Counterfeit", games: formSearch("scvi", "lza"), },
			"artisan": { label: "Artisan", games: formSearch("scvi", "lza"), },
		},
		1017: {
			"teal-mask": { label: "Teal Mask", games: formSearch("scvi", "lza"), },
			"wellspring-mask": { label: "Wellspring Mask", games: formSearch("scvi", "lza"), },
			"hearthflame-mask": { label: "Hearthflame Mask", games: formSearch("scvi", "lza"), },
			"cornerstone-mask": { label: "Cornerstone Mask", games: formSearch("scvi", "lza"), },
			"terastalized-teal-mask": { label: "Terastalized Teal Mask", games: formSearch("scvi", "lza"), },
			"terastalized-wellspring-mask": { label: "Terastalized Wellspring Mask", games: formSearch("scvi", "lza"), },
			"terastalized-hearthflame-mask": { label: "Terastalized Hearthflame Mask", games: formSearch("scvi", "lza"), },
			"terastalized-cornerstone-mask": { label: "Terastalized Cornerstone Mask", games: formSearch("scvi", "lza"), },
		},
		1024: {
			"normal": { label: "Normal", games: formSearch("scvi"), },
			"terastal": { label: "Terastal", games: formSearch("scvi"), },
			"stellar": { label: "Stellar", games: formSearch("scvi"), },
		},
	};

	window.PPGC.register({ formsCatalog });
})();
