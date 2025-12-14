const gen = 4;
const game = "soulsilver";
const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Johto Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, natiId: 152, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), tags: ["starter"] },
			{ id: 2, natiId: 153, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), tags: ["starter"] },
			{
				id: 3, natiId: 154, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), },
				]
			},
			{ id: 4, natiId: 155, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), tags: ["starter"] },
			{ id: 5, natiId: 156, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), tags: ["starter"] },
			{ id: 6, natiId: 157, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), tags: ["starter"] },
			{ id: 7, natiId: 158, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), tags: ["starter"] },
			{ id: 8, natiId: 159, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), tags: ["starter"] },
			{ id: 9, natiId: 160, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), tags: ["starter"] },
			{ id: 10, natiId: 16, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16) },
			{ id: 11, natiId: 17, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17) },
			{ id: 12, natiId: 18, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18) },
			{ id: 13, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21) },
			{ id: 14, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22) },
			{ id: 15, natiId: 163, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163) },
			{ id: 16, natiId: 164, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164) },
			{
				id: 17, natiId: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
				]
			},
			{
				id: 18, natiId: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
				]
			},
			{ id: 19, natiId: 161, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161) },
			{ id: 20, natiId: 162, name: "Furret", img: baseSprite(162), imgS: shinySprite(162) },
			{
				id: 21, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(172), imgS: shinySprite(172), },
					{ name: "Spiked-eared", img: baseSprite("172-s"), imgS: shinySprite("172-s"), tags: ["mythical"], },
				],
			},
			{
				id: 22, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
				]
			},
			{
				id: 23, natiId: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
				]
			},
			{ id: 24, natiId: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10) },
			{ id: 25, natiId: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11) },
			{
				id: 26, natiId: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },
				]
			},
			{ id: 27, natiId: 13, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13) },
			{ id: 28, natiId: 14, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14) },
			{ id: 29, natiId: 15, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15) },
			{
				id: 30, natiId: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), },
				]
			},
			{
				id: 31, natiId: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), },
				]
			},
			{ id: 32, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167) },
			{ id: 33, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168) },
			{ id: 34, natiId: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74) },
			{ id: 35, natiId: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75) },
			{ id: 36, natiId: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76) },
			{
				id: 37, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				]
			},
			{
				id: 38, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				]
			},
			{ id: 39, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169) },
			{ id: 40, natiId: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173) },
			{ id: 41, natiId: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35) },
			{ id: 42, natiId: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36) },
			{ id: 43, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174) },
			{ id: 44, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39) },
			{ id: 45, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40) },
			{ id: 46, natiId: 175, name: "Togepi", img: baseSprite(175), imgS: shinySprite(175) },
			{ id: 47, natiId: 176, name: "Togetic", img: baseSprite(176), imgS: shinySprite(176) },
			{ id: 48, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27) },
			{ id: 49, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28) },
			{ id: 50, natiId: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23) },
			{ id: 51, natiId: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24) },
			{ id: 52, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206) },
			{ id: 53, natiId: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179) },
			{ id: 54, natiId: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180) },
			{ id: 55, natiId: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181) },
			{
				id: 56, natiId: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), },
				]
			},
			{
				id: 57, natiId: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), },
				]
			},
			{ id: 58, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92) },
			{ id: 59, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93) },
			{ id: 60, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94) },
			{
				id: 61, natiId: 201, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), tags: ["other"], forms: [
					{ name: "A", img: baseSprite("201-a"), imgS: shinySprite("201-a"), },
					{ name: "B", img: baseSprite("201-b"), imgS: shinySprite("201-b"), },
					{ name: "C", img: baseSprite("201-c"), imgS: shinySprite("201-c"), },
					{ name: "D", img: baseSprite("201-d"), imgS: shinySprite("201-d"), },
					{ name: "E", img: baseSprite("201-e"), imgS: shinySprite("201-e"), },
					{ name: "F", img: baseSprite("201-f"), imgS: shinySprite("201-f"), },
					{ name: "G", img: baseSprite("201-g"), imgS: shinySprite("201-g"), },
					{ name: "H", img: baseSprite("201-h"), imgS: shinySprite("201-h"), },
					{ name: "I", img: baseSprite("201-i"), imgS: shinySprite("201-i"), },
					{ name: "J", img: baseSprite("201-j"), imgS: shinySprite("201-j"), },
					{ name: "K", img: baseSprite("201-k"), imgS: shinySprite("201-k"), },
					{ name: "L", img: baseSprite("201-l"), imgS: shinySprite("201-l"), },
					{ name: "M", img: baseSprite("201-m"), imgS: shinySprite("201-m"), },
					{ name: "N", img: baseSprite("201-n"), imgS: shinySprite("201-n"), },
					{ name: "O", img: baseSprite("201-o"), imgS: shinySprite("201-o"), },
					{ name: "P", img: baseSprite("201-p"), imgS: shinySprite("201-p"), },
					{ name: "Q", img: baseSprite("201-q"), imgS: shinySprite("201-q"), },
					{ name: "R", img: baseSprite("201-r"), imgS: shinySprite("201-r"), },
					{ name: "S", img: baseSprite("201-s"), imgS: shinySprite("201-s"), },
					{ name: "T", img: baseSprite("201-t"), imgS: shinySprite("201-t"), },
					{ name: "U", img: baseSprite("201-u"), imgS: shinySprite("201-u"), },
					{ name: "V", img: baseSprite("201-v"), imgS: shinySprite("201-v"), },
					{ name: "W", img: baseSprite("201-w"), imgS: shinySprite("201-w"), },
					{ name: "X", img: baseSprite("201-x"), imgS: shinySprite("201-x"), },
					{ name: "Y", img: baseSprite("201-y"), imgS: shinySprite("201-y"), },
					{ name: "Z", img: baseSprite("201-z"), imgS: shinySprite("201-z"), },
					{ name: "!", img: baseSprite("201-em"), imgS: shinySprite("201-em"), },
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), },]
			},
			{ id: 62, natiId: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95) },
			{
				id: 63, natiId: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), },
				]
			},
			{ id: 64, natiId: 69, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69) },
			{ id: 65, natiId: 70, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70) },
			{ id: 66, natiId: 71, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71) },
			{ id: 67, natiId: 187, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187) },
			{ id: 68, natiId: 188, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188) },
			{ id: 69, natiId: 189, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189) },
			{ id: 70, natiId: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46) },
			{ id: 71, natiId: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47) },
			{ id: 72, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60) },
			{ id: 73, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61) },
			{ id: 74, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62) },
			{
				id: 75, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				]
			},
			{
				id: 76, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				]
			},
			{
				id: 77, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				]
			},
			{
				id: 78, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				]
			},
			{
				id: 79, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				]
			},
			{ id: 80, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79) },
			{ id: 81, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80) },
			{ id: 82, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199) },
			{ id: 83, natiId: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43) },
			{
				id: 84, natiId: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				]
			},
			{
				id: 85, natiId: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				]
			},
			{ id: 86, natiId: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182) },
			{ id: 87, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96) },
			{
				id: 88, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },
				]
			},
			{ id: 89, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63) },
			{
				id: 90, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				]
			},
			{
				id: 91, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
				]
			},
			{ id: 92, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132) },
			{ id: 93, natiId: 204, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204) },
			{ id: 94, natiId: 205, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205) },
			{ id: 95, natiId: 29, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29) },
			{ id: 96, natiId: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30) },
			{ id: 97, natiId: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31) },
			{ id: 98, natiId: 32, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32) },
			{ id: 99, natiId: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33) },
			{ id: 100, natiId: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34) },
			{ id: 101, natiId: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193) },
			{ id: 102, natiId: 469, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469) },
			{ id: 103, natiId: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191) },
			{ id: 104, natiId: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192) },
			{ id: 105, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102) },
			{ id: 106, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103) },
			{
				id: 107, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), },
				]
			},
			{
				id: 108, natiId: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), },
				]
			},
			{ id: 109, natiId: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48) },
			{ id: 110, natiId: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49) },
			{
				id: 111, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				]
			},
			{
				id: 112, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				]
			},
			{ id: 113, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127) },
			{
				id: 114, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				]
			},
			{ id: 115, natiId: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109) },
			{ id: 116, natiId: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110) },
			{ id: 117, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88) },
			{ id: 118, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89) },
			{ id: 119, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81) },
			{ id: 120, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82) },
			{ id: 121, natiId: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100) },
			{ id: 122, natiId: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101) },
			{
				id: 123, natiId: 190, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), },
				]
			},
			{
				id: 124, natiId: 424, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), },
				]
			},
			{ id: 125, natiId: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209) },
			{ id: 126, natiId: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210) },
			{ id: 127, natiId: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37) },
			{ id: 128, natiId: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38) },
			{ id: 129, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58) },
			{ id: 130, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59) },
			{ id: 131, natiId: 234, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234) },
			{ id: 132, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183) },
			{ id: 133, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184) },
			{ id: 134, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50) },
			{ id: 135, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51) },
			{ id: 136, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56) },
			{ id: 137, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57) },
			{ id: 138, natiId: 52, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52) },
			{ id: 139, natiId: 53, name: "Persian", img: baseSprite(53), imgS: shinySprite(53) },
			{ id: 140, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54) },
			{ id: 141, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55) },
			{ id: 142, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66) },
			{ id: 143, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67) },
			{ id: 144, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68) },
			{ id: 145, natiId: 236, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236) },
			{ id: 146, natiId: 106, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106) },
			{ id: 147, natiId: 107, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107) },
			{ id: 148, natiId: 237, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237) },
			{
				id: 149, natiId: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), },
				]
			},
			{ id: 150, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128) },
			{ id: 151, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241) },
			{ id: 152, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240) },
			{ id: 153, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126) },
			{ id: 154, natiId: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238) },
			{ id: 155, natiId: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124) },
			{ id: 156, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239) },
			{ id: 157, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125) },
			{ id: 158, natiId: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122) },
			{ id: 159, natiId: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235) },
			{ id: 160, natiId: 83, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83) },
			{ id: 161, natiId: 177, name: "Natu", img: baseSprite(177), imgS: shinySprite(177) },
			{
				id: 162, natiId: 178, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), },
				]
			},
			{ id: 163, natiId: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211) },
			{ id: 164, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72) },
			{ id: 165, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73) },
			{ id: 166, natiId: 98, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98) },
			{ id: 167, natiId: 99, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99) },
			{ id: 168, natiId: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213) },
			{ id: 169, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120) },
			{ id: 170, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121) },
			{ id: 171, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90) },
			{ id: 172, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91) },
			{ id: 173, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222) },
			{ id: 174, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223) },
			{
				id: 175, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },
				]
			},
			{ id: 176, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170) },
			{ id: 177, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171) },
			{ id: 178, natiId: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86) },
			{ id: 179, natiId: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87) },
			{ id: 180, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108) },
			{ id: 181, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463) },
			{ id: 182, natiId: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114) },
			{
				id: 183, natiId: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
				]
			},
			{ id: 184, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133) },
			{ id: 185, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134) },
			{ id: 186, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135) },
			{ id: 187, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136) },
			{ id: 188, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196) },
			{ id: 189, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197) },
			{ id: 190, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116) },
			{ id: 191, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117) },
			{ id: 192, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230) },
			{
				id: 193, natiId: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), },
				]
			},
			{ id: 194, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225) },
			{ id: 195, natiId: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220) },
			{
				id: 196, natiId: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				]
			},
			{
				id: 197, natiId: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				]
			},
			{ id: 198, natiId: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216) },
			{
				id: 199, natiId: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), },
				]
			},
			{ id: 200, natiId: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231) },
			{
				id: 201, natiId: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), },
				]
			},
			{ id: 202, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226) },
			{ id: 203, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227) },
			{
				id: 204, natiId: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				]
			},
			{
				id: 205, natiId: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				]
			},
			{ id: 206, natiId: 77, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77) },
			{ id: 207, natiId: 78, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78) },
			{ id: 208, natiId: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104) },
			{ id: 209, natiId: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105) },
			{ id: 210, natiId: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115) },
			{
				id: 211, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				]
			},
			{
				id: 212, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				]
			},
			{
				id: 213, natiId: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), },
				]
			},
			{ id: 214, natiId: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228) },
			{
				id: 215, natiId: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), },
				]
			},
			{ id: 216, natiId: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218) },
			{ id: 217, natiId: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219) },
			{
				id: 218, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				]
			},
			{ id: 219, natiId: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200) },
			{ id: 220, natiId: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137) },
			{ id: 221, natiId: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233) },
			{ id: 222, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113) },
			{ id: 223, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242) },
			{ id: 224, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131) },
			{ id: 225, natiId: 138, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), tags: ["fossil"] },
			{ id: 226, natiId: 139, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), tags: ["fossil"] },
			{ id: 227, natiId: 140, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), tags: ["fossil"] },
			{ id: 228, natiId: 141, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), tags: ["fossil"] },
			{ id: 229, natiId: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), tags: ["fossil"] },
			{ id: 230, natiId: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143) },
			{ id: 231, natiId: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), tags: ["starter"] },
			{ id: 232, natiId: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), tags: ["starter"] },
			{
				id: 233, natiId: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
				]
			},
			{ id: 234, natiId: 4, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), tags: ["starter"] },
			{ id: 235, natiId: 5, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), tags: ["starter"] },
			{ id: 236, natiId: 6, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), tags: ["starter"] },
			{ id: 237, natiId: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), tags: ["starter"] },
			{ id: 238, natiId: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), tags: ["starter"] },
			{ id: 239, natiId: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), tags: ["starter"] },
			{ id: 240, natiId: 144, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), tags: ["legendary"] },
			{ id: 241, natiId: 145, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), tags: ["legendary"] },
			{ id: 242, natiId: 146, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), tags: ["legendary"] },
			{ id: 243, natiId: 243, name: "Raikou", img: baseSprite(243), imgS: shinySprite(243), tags: ["legendary"] },
			{ id: 244, natiId: 244, name: "Entei", img: baseSprite(244), imgS: shinySprite(244), tags: ["legendary"] },
			{ id: 245, natiId: 245, name: "Suicune", img: baseSprite(245), imgS: shinySprite(245), tags: ["legendary"] },
			{ id: 246, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["pseudo"] },
			{ id: 247, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["pseudo"] },
			{ id: 248, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["pseudo"] },
			{ id: 249, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), tags: ["pseudo"] },
			{ id: 250, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), tags: ["pseudo"] },
			{ id: 251, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), tags: ["pseudo"] },
			{ id: 252, natiId: 249, name: "Lugia", img: baseSprite(249), imgS: shinySprite(249), tags: ["legendary"] },
			{ id: 253, natiId: 250, name: "Ho-oh", img: baseSprite(250), imgS: shinySprite(250), tags: ["legendary"] },
			{ id: 254, natiId: 150, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tags: ["legendary"] },
			{ id: 255, natiId: 151, name: "Mew", img: baseSprite(151), imgS: shinySprite(151), tags: ["mythical"] },
			{ id: 256, natiId: 251, name: "Celebi", img: baseSprite(251), imgS: shinySprite(251), tags: ["mythical"] }
		],
	},
});
