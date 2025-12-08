const game = "soulsilver";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const nationalDex = (...args) => _dex(game, "national", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Johto Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), dexSync: nationalDex(152), },
			{ id: 2, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), dexSync: nationalDex(153), },
			{
				id: 3, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), dexSync: nationalDex(154), forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), dexSync: nationalDex(154, "Male"), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), dexSync: nationalDex(154, "Female"), },
				],
			},
			{ id: 4, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), dexSync: nationalDex(155), },
			{ id: 5, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), dexSync: nationalDex(156), },
			{ id: 6, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), dexSync: nationalDex(157), },
			{ id: 7, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), dexSync: nationalDex(158), },
			{ id: 8, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), dexSync: nationalDex(159), },
			{ id: 9, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), dexSync: nationalDex(160), },
			{ id: 10, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16), dexSync: nationalDex(16), },
			{ id: 11, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17), dexSync: nationalDex(17), },
			{ id: 12, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18), dexSync: nationalDex(18), },
			{ id: 13, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: nationalDex(21), },
			{ id: 14, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: nationalDex(22), },
			{ id: 15, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: nationalDex(163), },
			{ id: 16, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: nationalDex(164), },
			{
				id: 17, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), dexSync: nationalDex(19), forms: [
					{ name: "Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: nationalDex(19, "Male"), },
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: nationalDex(19, "Female"), },
				],
			},
			{
				id: 18, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), dexSync: nationalDex(20), forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: nationalDex(20, "Male"), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: nationalDex(20, "Female"), },
				],
			},
			{ id: 19, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161), dexSync: nationalDex(161), },
			{ id: 20, name: "Furret", img: baseSprite(162), imgS: shinySprite(162), dexSync: nationalDex(162), },
			{
				id: 21, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: nationalDex(172), forms: [
					{ name: "Normal", img: baseSprite(172), imgS: shinySprite(172), dexSync: nationalDex(172, "Normal"), },
					{ name: "Spiky-eared", img: baseSprite("172-s"), imgS: shinySprite("172-s"), dexSync: nationalDex(172, "Spiky-eared"), },
				],
			},
			{
				id: 22, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25, "Male"), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: nationalDex(25, "Female"), },
				],
			},
			{
				id: 23, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26), forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26, "Male"), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: nationalDex(26, "Female"), },
				],
			},
			{ id: 24, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: nationalDex(10), },
			{ id: 25, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: nationalDex(11), },
			{
				id: 26, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: nationalDex(12), forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: nationalDex(12, "Male"), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: nationalDex(12, "Female"), },
				],
			},
			{ id: 27, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13), dexSync: nationalDex(13), },
			{ id: 28, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14), dexSync: nationalDex(14), },
			{ id: 29, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15), dexSync: nationalDex(15), },
			{
				id: 30, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: nationalDex(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: nationalDex(165, "Male"), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: nationalDex(165, "Female"), },
				],
			},
			{
				id: 31, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: nationalDex(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: nationalDex(166, "Male"), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: nationalDex(166, "Female"), },
				],
			},
			{ id: 32, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: nationalDex(167), },
			{ id: 33, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: nationalDex(168), },
			{ id: 34, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: nationalDex(74), },
			{ id: 35, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: nationalDex(75), },
			{ id: 36, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: nationalDex(76), },
			{
				id: 37, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41, "Male"), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: nationalDex(41, "Female"), },
				],
			},
			{
				id: 38, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42, "Male"), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: nationalDex(42, "Female"), },
				],
			},
			{ id: 39, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: nationalDex(169), },
			{ id: 40, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: nationalDex(173), },
			{ id: 41, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: nationalDex(35), },
			{ id: 42, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: nationalDex(36), },
			{ id: 43, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: nationalDex(174), },
			{ id: 44, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: nationalDex(39), },
			{ id: 45, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: nationalDex(40), },
			{ id: 46, name: "Togepi", img: baseSprite(175), imgS: shinySprite(175), dexSync: nationalDex(175), },
			{ id: 47, name: "Togetic", img: baseSprite(176), imgS: shinySprite(176), dexSync: nationalDex(176), },
			{ id: 48, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: nationalDex(27), },
			{ id: 49, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: nationalDex(28), },
			{ id: 50, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), dexSync: nationalDex(23), },
			{ id: 51, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), dexSync: nationalDex(24), },
			{ id: 52, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: nationalDex(206), },
			{ id: 53, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), dexSync: nationalDex(179), },
			{ id: 54, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), dexSync: nationalDex(180), },
			{ id: 55, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), dexSync: nationalDex(181), },
			{
				id: 56, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), dexSync: nationalDex(194), forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: nationalDex(194, "Male"), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: nationalDex(194, "Female"), },
				],
			},
			{
				id: 57, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), dexSync: nationalDex(195), forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), dexSync: nationalDex(195, "Male"), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), dexSync: nationalDex(195, "Female"), },
				],
			},
			{ id: 58, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: nationalDex(92), },
			{ id: 59, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: nationalDex(93), },
			{ id: 60, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: nationalDex(94), },
			{
				id: 61, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), dexSync: nationalDex(201), forms: [
					{ name: "A", img: baseSprite("201-a"), imgS: shinySprite("201-a"), dexSync: nationalDex(201, "A"), },
					{ name: "B", img: baseSprite("201-b"), imgS: shinySprite("201-b"), dexSync: nationalDex(201, "B"), },
					{ name: "C", img: baseSprite("201-c"), imgS: shinySprite("201-c"), dexSync: nationalDex(201, "C"), },
					{ name: "D", img: baseSprite("201-d"), imgS: shinySprite("201-d"), dexSync: nationalDex(201, "D"), },
					{ name: "E", img: baseSprite("201-e"), imgS: shinySprite("201-e"), dexSync: nationalDex(201, "E"), },
					{ name: "F", img: baseSprite("201-f"), imgS: shinySprite("201-f"), dexSync: nationalDex(201, "F"), },
					{ name: "G", img: baseSprite("201-g"), imgS: shinySprite("201-g"), dexSync: nationalDex(201, "G"), },
					{ name: "H", img: baseSprite("201-h"), imgS: shinySprite("201-h"), dexSync: nationalDex(201, "H"), },
					{ name: "I", img: baseSprite("201-i"), imgS: shinySprite("201-i"), dexSync: nationalDex(201, "I"), },
					{ name: "J", img: baseSprite("201-j"), imgS: shinySprite("201-j"), dexSync: nationalDex(201, "J"), },
					{ name: "K", img: baseSprite("201-k"), imgS: shinySprite("201-k"), dexSync: nationalDex(201, "K"), },
					{ name: "L", img: baseSprite("201-l"), imgS: shinySprite("201-l"), dexSync: nationalDex(201, "L"), },
					{ name: "M", img: baseSprite("201-m"), imgS: shinySprite("201-m"), dexSync: nationalDex(201, "M"), },
					{ name: "N", img: baseSprite("201-n"), imgS: shinySprite("201-n"), dexSync: nationalDex(201, "N"), },
					{ name: "O", img: baseSprite("201-o"), imgS: shinySprite("201-o"), dexSync: nationalDex(201, "O"), },
					{ name: "P", img: baseSprite("201-p"), imgS: shinySprite("201-p"), dexSync: nationalDex(201, "P"), },
					{ name: "Q", img: baseSprite("201-q"), imgS: shinySprite("201-q"), dexSync: nationalDex(201, "Q"), },
					{ name: "R", img: baseSprite("201-r"), imgS: shinySprite("201-r"), dexSync: nationalDex(201, "R"), },
					{ name: "S", img: baseSprite("201-s"), imgS: shinySprite("201-s"), dexSync: nationalDex(201, "S"), },
					{ name: "T", img: baseSprite("201-t"), imgS: shinySprite("201-t"), dexSync: nationalDex(201, "T"), },
					{ name: "U", img: baseSprite("201-u"), imgS: shinySprite("201-u"), dexSync: nationalDex(201, "U"), },
					{ name: "V", img: baseSprite("201-v"), imgS: shinySprite("201-v"), dexSync: nationalDex(201, "V"), },
					{ name: "W", img: baseSprite("201-w"), imgS: shinySprite("201-w"), dexSync: nationalDex(201, "W"), },
					{ name: "X", img: baseSprite("201-x"), imgS: shinySprite("201-x"), dexSync: nationalDex(201, "X"), },
					{ name: "Y", img: baseSprite("201-y"), imgS: shinySprite("201-y"), dexSync: nationalDex(201, "Y"), },
					{ name: "Z", img: baseSprite("201-z"), imgS: shinySprite("201-z"), dexSync: nationalDex(201, "Z"), },
					{ name: "!", img: baseSprite("201-em"), imgS: shinySprite("201-em"), dexSync: nationalDex(201, "!"), },
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), dexSync: nationalDex(201, "?"), },],
			},
			{ id: 62, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), dexSync: nationalDex(95), },
			{
				id: 63, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), dexSync: nationalDex(208), forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), dexSync: nationalDex(208, "Male"), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), dexSync: nationalDex(208, "Female"), },
				],
			},
			{ id: 64, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), dexSync: nationalDex(69), },
			{ id: 65, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), dexSync: nationalDex(70), },
			{ id: 66, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), dexSync: nationalDex(71), },
			{ id: 67, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), dexSync: nationalDex(187), },
			{ id: 68, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), dexSync: nationalDex(188), },
			{ id: 69, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), dexSync: nationalDex(189), },
			{ id: 70, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: nationalDex(46), },
			{ id: 71, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: nationalDex(47), },
			{ id: 72, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: nationalDex(60), },
			{ id: 73, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: nationalDex(61), },
			{ id: 74, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: nationalDex(62), },
			{
				id: 75, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: nationalDex(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: nationalDex(186, "Male"), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: nationalDex(186, "Female"), },
				],
			},
			{
				id: 76, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129, "Male"), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: nationalDex(129, "Female"), },
				],
			},
			{
				id: 77, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130, "Male"), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: nationalDex(130, "Female"), },
				],
			},
			{
				id: 78, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118), forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118, "Male"), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: nationalDex(118, "Female"), },
				],
			},
			{
				id: 79, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119), forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119, "Male"), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: nationalDex(119, "Female"), },
				],
			},
			{ id: 80, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: nationalDex(79), },
			{ id: 81, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: nationalDex(80), },
			{ id: 82, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: nationalDex(199), },
			{ id: 83, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), dexSync: nationalDex(43), },
			{
				id: 84, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), dexSync: nationalDex(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), dexSync: nationalDex(44, "Male"), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), dexSync: nationalDex(44, "Female"), },
				],
			},
			{
				id: 85, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), dexSync: nationalDex(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), dexSync: nationalDex(45, "Male"), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), dexSync: nationalDex(45, "Female"), },
				],
			},
			{ id: 86, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), dexSync: nationalDex(182), },
			{ id: 87, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: nationalDex(96), },
			{
				id: 88, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: nationalDex(97), forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: nationalDex(97, "Male"), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: nationalDex(97, "Female"), },
				],
			},
			{ id: 89, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: nationalDex(63), },
			{
				id: 90, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64, "Male"), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: nationalDex(64, "Female"), },
				],
			},
			{
				id: 91, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65, "Male"), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: nationalDex(65, "Female"), },
				],
			},
			{ id: 92, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: nationalDex(132), },
			{ id: 93, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), dexSync: nationalDex(204), },
			{ id: 94, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), dexSync: nationalDex(205), },
			{ id: 95, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), dexSync: nationalDex(29), },
			{ id: 96, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), dexSync: nationalDex(30), },
			{ id: 97, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), dexSync: nationalDex(31), },
			{ id: 98, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), dexSync: nationalDex(32), },
			{ id: 99, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), dexSync: nationalDex(33), },
			{ id: 100, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), dexSync: nationalDex(34), },
			{ id: 101, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193), dexSync: nationalDex(193), },
			{ id: 102, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469), dexSync: nationalDex(469), },
			{ id: 103, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), dexSync: nationalDex(191), },
			{ id: 104, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), dexSync: nationalDex(192), },
			{ id: 105, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), dexSync: nationalDex(102), },
			{ id: 106, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), dexSync: nationalDex(103), },
			{
				id: 107, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: nationalDex(185), forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: nationalDex(185, "Male"), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: nationalDex(185, "Female"), },
				],
			},
			{
				id: 108, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), dexSync: nationalDex(202), forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), dexSync: nationalDex(202, "Male"), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), dexSync: nationalDex(202, "Female"), },
				],
			},
			{ id: 109, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), dexSync: nationalDex(48), },
			{ id: 110, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), dexSync: nationalDex(49), },
			{
				id: 111, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: nationalDex(123), forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: nationalDex(123, "Male"), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: nationalDex(123, "Female"), },
				],
			},
			{
				id: 112, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: nationalDex(212), forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: nationalDex(212, "Male"), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: nationalDex(212, "Female"), },
				],
			},
			{ id: 113, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: nationalDex(127), },
			{
				id: 114, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: nationalDex(214), forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: nationalDex(214, "Male"), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: nationalDex(214, "Female"), },
				],
			},
			{ id: 115, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), dexSync: nationalDex(109), },
			{ id: 116, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), dexSync: nationalDex(110), },
			{ id: 117, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), dexSync: nationalDex(88), },
			{ id: 118, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), dexSync: nationalDex(89), },
			{ id: 119, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: nationalDex(81), },
			{ id: 120, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: nationalDex(82), },
			{ id: 121, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), dexSync: nationalDex(100), },
			{ id: 122, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), dexSync: nationalDex(101), },
			{
				id: 123, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), dexSync: nationalDex(190), forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), dexSync: nationalDex(190, "Male"), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), dexSync: nationalDex(190, "Female"), },
				],
			},
			{
				id: 124, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), dexSync: nationalDex(424), forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), dexSync: nationalDex(424, "Male"), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), dexSync: nationalDex(424, "Female"), },
				],
			},
			{ id: 125, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), dexSync: nationalDex(209), },
			{ id: 126, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), dexSync: nationalDex(210), },
			{ id: 127, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), dexSync: nationalDex(37), },
			{ id: 128, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), dexSync: nationalDex(38), },
			{ id: 129, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: nationalDex(58), },
			{ id: 130, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: nationalDex(59), },
			{ id: 131, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), dexSync: nationalDex(234), },
			{ id: 132, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), dexSync: nationalDex(183), },
			{ id: 133, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), dexSync: nationalDex(184), },
			{ id: 134, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: nationalDex(50), },
			{ id: 135, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: nationalDex(51), },
			{ id: 136, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: nationalDex(56), },
			{ id: 137, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: nationalDex(57), },
			{ id: 138, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), dexSync: nationalDex(52), },
			{ id: 139, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), dexSync: nationalDex(53), },
			{ id: 140, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: nationalDex(54), },
			{ id: 141, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: nationalDex(55), },
			{ id: 142, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: nationalDex(66), },
			{ id: 143, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: nationalDex(67), },
			{ id: 144, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: nationalDex(68), },
			{ id: 145, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236), dexSync: nationalDex(236), },
			{ id: 146, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), dexSync: nationalDex(106), },
			{ id: 147, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), dexSync: nationalDex(107), },
			{ id: 148, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237), dexSync: nationalDex(237), },
			{
				id: 149, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: nationalDex(203), forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: nationalDex(203, "Male"), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: nationalDex(203, "Female"), },
				],
			},
			{ id: 150, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: nationalDex(128), },
			{ id: 151, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: nationalDex(241), },
			{ id: 152, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), dexSync: nationalDex(240), },
			{ id: 153, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), dexSync: nationalDex(126), },
			{ id: 154, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), dexSync: nationalDex(238), },
			{ id: 155, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), dexSync: nationalDex(124), },
			{ id: 156, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), dexSync: nationalDex(239), },
			{ id: 157, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), dexSync: nationalDex(125), },
			{ id: 158, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), dexSync: nationalDex(122), },
			{ id: 159, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: nationalDex(235), },
			{ id: 160, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), dexSync: nationalDex(83), },
			{ id: 161, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), dexSync: nationalDex(177), },
			{
				id: 162, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), dexSync: nationalDex(178), forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), dexSync: nationalDex(178, "Male"), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), dexSync: nationalDex(178, "Female"), },
				],
			},
			{ id: 163, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), dexSync: nationalDex(211), },
			{ id: 164, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: nationalDex(72), },
			{ id: 165, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: nationalDex(73), },
			{ id: 166, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), dexSync: nationalDex(98), },
			{ id: 167, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), dexSync: nationalDex(99), },
			{ id: 168, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), dexSync: nationalDex(213), },
			{ id: 169, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: nationalDex(120), },
			{ id: 170, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: nationalDex(121), },
			{ id: 171, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: nationalDex(90), },
			{ id: 172, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: nationalDex(91), },
			{ id: 173, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: nationalDex(222), },
			{ id: 174, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: nationalDex(223), },
			{
				id: 175, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: nationalDex(224), forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: nationalDex(224, "Male"), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: nationalDex(224, "Female"), },
				],
			},
			{ id: 176, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: nationalDex(170), },
			{ id: 177, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: nationalDex(171), },
			{ id: 178, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), dexSync: nationalDex(86), },
			{ id: 179, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), dexSync: nationalDex(87), },
			{ id: 180, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), dexSync: nationalDex(108), },
			{ id: 181, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), dexSync: nationalDex(463), },
			{ id: 182, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), dexSync: nationalDex(114), },
			{
				id: 183, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), dexSync: nationalDex(465), forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), dexSync: nationalDex(465, "Male"), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), dexSync: nationalDex(465, "Female"), },
				],
			},
			{ id: 184, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: nationalDex(133), },
			{ id: 185, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: nationalDex(134), },
			{ id: 186, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: nationalDex(135), },
			{ id: 187, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: nationalDex(136), },
			{ id: 188, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: nationalDex(196), },
			{ id: 189, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: nationalDex(197), },
			{ id: 190, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), dexSync: nationalDex(116), },
			{ id: 191, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), dexSync: nationalDex(117), },
			{ id: 192, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), dexSync: nationalDex(230), },
			{
				id: 193, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), dexSync: nationalDex(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), dexSync: nationalDex(207, "Male"), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), dexSync: nationalDex(207, "Female"), },
				],
			},
			{ id: 194, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: nationalDex(225), },
			{ id: 195, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), dexSync: nationalDex(220), },
			{
				id: 196, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), dexSync: nationalDex(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), dexSync: nationalDex(221, "Male"), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), dexSync: nationalDex(221, "Female"), },
				],
			},
			{
				id: 197, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), dexSync: nationalDex(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), dexSync: nationalDex(473, "Male"), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), dexSync: nationalDex(473, "Female"), },
				],
			},
			{ id: 198, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), dexSync: nationalDex(216), },
			{
				id: 199, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), dexSync: nationalDex(217), forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), dexSync: nationalDex(217, "Male"), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), dexSync: nationalDex(217, "Female"), },
				],
			},
			{ id: 200, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), dexSync: nationalDex(231), },
			{
				id: 201, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), dexSync: nationalDex(232), forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), dexSync: nationalDex(232, "Male"), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), dexSync: nationalDex(232, "Female"), },
				],
			},
			{ id: 202, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: nationalDex(226), },
			{ id: 203, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: nationalDex(227), },
			{
				id: 204, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), dexSync: nationalDex(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), dexSync: nationalDex(84, "Male"), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), dexSync: nationalDex(84, "Female"), },
				],
			},
			{
				id: 205, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), dexSync: nationalDex(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), dexSync: nationalDex(85, "Male"), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), dexSync: nationalDex(85, "Female"), },
				],
			},
			{ id: 206, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), dexSync: nationalDex(77), },
			{ id: 207, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), dexSync: nationalDex(78), },
			{ id: 208, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), dexSync: nationalDex(104), },
			{ id: 209, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), dexSync: nationalDex(105), },
			{ id: 210, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), dexSync: nationalDex(115), },
			{
				id: 211, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), dexSync: nationalDex(111), forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), dexSync: nationalDex(111, "Male"), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), dexSync: nationalDex(111, "Female"), },
				],
			},
			{
				id: 212, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), dexSync: nationalDex(112), forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), dexSync: nationalDex(112, "Male"), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), dexSync: nationalDex(112, "Female"), },
				],
			},
			{
				id: 213, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: nationalDex(198), forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: nationalDex(198, "Male"), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: nationalDex(198, "Female"), },
				],
			},
			{ id: 214, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), dexSync: nationalDex(228), },
			{
				id: 215, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), dexSync: nationalDex(229), forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), dexSync: nationalDex(229, "Male"), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), dexSync: nationalDex(229, "Female"), },
				],
			},
			{ id: 216, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), dexSync: nationalDex(218), },
			{ id: 217, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), dexSync: nationalDex(219), },
			{
				id: 218, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: nationalDex(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: nationalDex(215, "Male"), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: nationalDex(215, "Female"), },
				],
			},
			{ id: 219, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: nationalDex(200), },
			{ id: 220, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), dexSync: nationalDex(137), },
			{ id: 221, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), dexSync: nationalDex(233), },
			{ id: 222, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: nationalDex(113), },
			{ id: 223, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: nationalDex(242), },
			{ id: 224, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: nationalDex(131), },
			{ id: 225, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), dexSync: nationalDex(138), },
			{ id: 226, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), dexSync: nationalDex(139), },
			{ id: 227, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), dexSync: nationalDex(140), },
			{ id: 228, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), dexSync: nationalDex(141), },
			{ id: 229, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), dexSync: nationalDex(142), },
			{ id: 230, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: nationalDex(143), },
			{ id: 231, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), dexSync: nationalDex(1), },
			{ id: 232, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), dexSync: nationalDex(2), },
			{
				id: 233, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), dexSync: nationalDex(3), forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), dexSync: nationalDex(3, "Male"), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), dexSync: nationalDex(3, "Female"), },
				],
			},
			{ id: 234, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), dexSync: nationalDex(4), },
			{ id: 235, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), dexSync: nationalDex(5), },
			{ id: 236, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), dexSync: nationalDex(6), },
			{ id: 237, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), dexSync: nationalDex(7), },
			{ id: 238, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), dexSync: nationalDex(8), },
			{ id: 239, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), dexSync: nationalDex(9), },
			{ id: 240, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), legendary: true, dexSync: nationalDex(144), },
			{ id: 241, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), legendary: true, dexSync: nationalDex(145), },
			{ id: 242, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), legendary: true, dexSync: nationalDex(146), },
			{ id: 243, name: "Raikou", img: baseSprite(243), imgS: shinySprite(243), legendary: true, dexSync: nationalDex(243), },
			{ id: 244, name: "Entei", img: baseSprite(244), imgS: shinySprite(244), legendary: true, dexSync: nationalDex(244), },
			{ id: 245, name: "Suicune", img: baseSprite(245), imgS: shinySprite(245), legendary: true, dexSync: nationalDex(245), },
			{ id: 246, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: nationalDex(147), },
			{ id: 247, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: nationalDex(148), },
			{ id: 248, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: nationalDex(149), },
			{ id: 249, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), dexSync: nationalDex(246), },
			{ id: 250, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), dexSync: nationalDex(247), },
			{ id: 251, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), dexSync: nationalDex(248), },
			{ id: 252, name: "Lugia", img: baseSprite(249), imgS: shinySprite(249), legendary: true, dexSync: nationalDex(249), },
			{ id: 253, name: "Ho-oh", img: baseSprite(250), imgS: shinySprite(250), legendary: true, dexSync: nationalDex(250), },
			{ id: 254, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), legendary: true, dexSync: nationalDex(150), },
			{ id: 255, name: "Mew", img: baseSprite(151), imgS: shinySprite(151), mythical: true, dexSync: nationalDex(151), },
			{ id: 256, name: "Celebi", img: baseSprite(251), imgS: shinySprite(251), mythical: true, dexSync: nationalDex(251), }
		],
	},
});
