const game = "white";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const regionalDex = (...args) => _dex(game, "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game + "-national"]: "National Dex",
});
PPGC.register({
	dex: {
		[game + "-national"]: [
			{ id: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), },
			{ id: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), },
			{
				id: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), }
				],
			},
			{ id: 4, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), },
			{ id: 5, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), },
			{ id: 6, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), },
			{ id: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), },
			{ id: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), },
			{ id: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), },
			{ id: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), },
			{ id: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), },
			{
				id: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), }
				],
			},
			{ id: 13, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13), },
			{ id: 14, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14), },
			{ id: 15, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15), },
			{ id: 16, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16), },
			{ id: 17, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17), },
			{ id: 18, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18), },
			{
				id: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), forms: [
					{ name: "Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), }
				],
			},
			{
				id: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), }
				],
			},
			{ id: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{
				id: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), }
				],
			},
			{
				id: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), }
				],
			},
			{ id: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), },
			{ id: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), },
			{ id: 29, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), },
			{ id: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), },
			{ id: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), },
			{ id: 32, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), },
			{ id: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), },
			{ id: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), },
			{ id: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{ id: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), },
			{ id: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), },
			{ id: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{
				id: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), }
				],
			},
			{
				id: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), }
				],
			},
			{ id: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), }
				],
			},
			{
				id: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), }
				],
			},
			{ id: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), },
			{ id: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), },
			{ id: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), },
			{ id: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), },
			{ id: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), },
			{ id: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), },
			{ id: 52, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), },
			{ id: 53, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), },
			{ id: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), },
			{ id: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), },
			{ id: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{ id: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), }
				],
			},
			{
				id: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), }
				],
			},
			{ id: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), },
			{ id: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), },
			{ id: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), },
			{ id: 69, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), },
			{ id: 70, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), },
			{ id: 71, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), },
			{ id: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{ id: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), },
			{ id: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), },
			{ id: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), },
			{ id: 77, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), },
			{ id: 78, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), },
			{ id: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), },
			{ id: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 83, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), },
			{
				id: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), }
				],
			},
			{
				id: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), }
				],
			},
			{ id: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), },
			{ id: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), },
			{ id: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), },
			{ id: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), },
			{ id: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), }
				],
			},
			{ id: 98, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), },
			{ id: 99, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), },
			{ id: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), },
			{ id: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), },
			{ id: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{ id: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), },
			{ id: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{ id: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), },
			{ id: 106, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), },
			{ id: 107, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), },
			{ id: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), },
			{ id: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), },
			{
				id: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), }
				],
			},
			{
				id: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), }
				],
			},
			{ id: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{ id: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{
				id: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), }
				],
			},
			{
				id: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), }
				],
			},
			{ id: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), },
			{
				id: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), }
				],
			},
			{ id: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{ id: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{ id: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{
				id: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), }
				],
			},
			{
				id: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), }
				],
			},
			{ id: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{ id: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{ id: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), },
			{ id: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 138, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), },
			{ id: 139, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), },
			{ id: 140, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), },
			{ id: 141, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), },
			{ id: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), },
			{ id: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 144, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), },
			{ id: 145, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), },
			{ id: 146, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), },
			{ id: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), },
			{ id: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), },
			{ id: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), },
			{ id: 150, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), },
			{ id: 151, name: "Mew", img: baseSprite(151), imgS: shinySprite(151), mythical: true, },
			{ id: 152, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), },
			{ id: 153, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), },
			{
				id: 154, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), }
				],
			},
			{ id: 155, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), },
			{ id: 156, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), },
			{ id: 157, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), },
			{ id: 158, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), },
			{ id: 159, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), },
			{ id: 160, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), },
			{ id: 161, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161), },
			{ id: 162, name: "Furret", img: baseSprite(162), imgS: shinySprite(162), },
			{ id: 163, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), },
			{ id: 164, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), },
			{
				id: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), }
				],
			},
			{
				id: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), }
				],
			},
			{ id: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{ id: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), },
			{ id: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 175, name: "Togepi", img: baseSprite(175), imgS: shinySprite(175), },
			{ id: 176, name: "Togetic", img: baseSprite(176), imgS: shinySprite(176), },
			{ id: 177, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), },
			{
				id: 178, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), }
				],
			},
			{ id: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), },
			{ id: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), },
			{ id: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), },
			{ id: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{ id: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{
				id: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), }
				],
			},
			{
				id: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), }
				],
			},
			{ id: 187, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), },
			{ id: 188, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), },
			{ id: 189, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), },
			{
				id: 190, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), }
				],
			},
			{ id: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), },
			{ id: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), },
			{ id: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193), },
			{
				id: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), }
				],
			},
			{
				id: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), }
				],
			},
			{ id: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{
				id: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), }
				],
			},
			{ id: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), },
			{ id: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{
				id: 201, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), forms: [
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
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), },],
			},
			{
				id: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), }
				],
			},
			{
				id: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), }
				],
			},
			{ id: 204, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), },
			{ id: 205, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), },
			{ id: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{
				id: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), }
				],
			},
			{
				id: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), }
				],
			},
			{ id: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{ id: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), },
			{
				id: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), }
				],
			},
			{ id: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), },
			{
				id: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), }
				],
			},
			{
				id: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), }
				],
			},
			{ id: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), },
			{
				id: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), }
				],
			},
			{ id: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), },
			{ id: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), },
			{ id: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), },
			{
				id: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), }
				],
			},
			{ id: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), },
			{
				id: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), }
				],
			},
			{ id: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), },
			{ id: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), },
			{
				id: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), }
				],
			},
			{ id: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), }
				],
			},
			{ id: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 234, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), },
			{ id: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{ id: 236, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236), },
			{ id: 237, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237), },
			{ id: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), },
			{ id: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{ id: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 243, name: "Raikou", img: baseSprite(243), imgS: shinySprite(243), },
			{ id: 244, name: "Entei", img: baseSprite(244), imgS: shinySprite(244), },
			{ id: 245, name: "Suicune", img: baseSprite(245), imgS: shinySprite(245), },
			{ id: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), },
			{ id: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), },
			{ id: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), },
			{ id: 249, name: "Lugia", img: baseSprite(249), imgS: shinySprite(249), },
			{ id: 250, name: "Ho-oh", img: baseSprite(250), imgS: shinySprite(250), },
			{ id: 251, name: "Celebi", img: baseSprite(251), imgS: shinySprite(251), mythical: true, },
			{ id: 252, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), },
			{ id: 253, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), },
			{ id: 254, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), },
			{
				id: 255, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), }
				],
			},
			{
				id: 256, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), }
				],
			},
			{
				id: 257, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), }
				],
			},
			{ id: 258, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), },
			{ id: 259, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), },
			{ id: 260, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), },
			{ id: 261, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), },
			{ id: 262, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), },
			{ id: 263, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), },
			{ id: 264, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), },
			{ id: 265, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), },
			{ id: 266, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), },
			{
				id: 267, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), }
				],
			},
			{ id: 268, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), },
			{
				id: 269, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), }
				],
			},
			{ id: 270, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), },
			{ id: 271, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), },
			{
				id: 272, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), }
				],
			},
			{ id: 273, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), },
			{
				id: 274, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274), },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f"), }
				],
			},
			{
				id: 275, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275), },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f"), }
				],
			},
			{ id: 276, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276), },
			{ id: 277, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277), },
			{ id: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 280, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), },
			{ id: 281, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), },
			{ id: 282, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), },
			{ id: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{ id: 285, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), },
			{ id: 286, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), },
			{ id: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), },
			{ id: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), },
			{ id: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), },
			{ id: 290, name: "Nincada", img: baseSprite(290), imgS: shinySprite(290), },
			{ id: 291, name: "Ninjask", img: baseSprite(291), imgS: shinySprite(291), },
			{ id: 292, name: "Shedinja", img: baseSprite(292), imgS: shinySprite(292), },
			{ id: 293, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), },
			{ id: 294, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), },
			{ id: 295, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), },
			{ id: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 300, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), },
			{ id: 301, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), },
			{ id: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), },
			{ id: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), },
			{
				id: 307, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), }
				],
			},
			{
				id: 308, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), }
				],
			},
			{ id: 309, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), },
			{ id: 310, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), },
			{ id: 311, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 312, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 313, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), },
			{ id: 314, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), },
			{
				id: 315, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), }
				],
			},
			{
				id: 316, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), }
				],
			},
			{
				id: 317, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), }
				],
			},
			{ id: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{
				id: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), }
				],
			},
			{
				id: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), }
				],
			},
			{ id: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), },
			{ id: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), },
			{ id: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), },
			{ id: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{ id: 331, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), },
			{
				id: 332, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), }
				],
			},
			{ id: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337), },
			{ id: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338), },
			{ id: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), },
			{ id: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), },
			{ id: 345, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), },
			{ id: 346, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), },
			{ id: 347, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), },
			{ id: 348, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), },
			{ id: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), }
				],
			},
			{
				id: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), }
				],
			},
			{ id: 352, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), },
			{ id: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), },
			{ id: 355, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), },
			{ id: 356, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), },
			{ id: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 358, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), },
			{ id: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), },
			{ id: 360, name: "Wynaut", img: baseSprite(360), imgS: shinySprite(360), },
			{ id: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), },
			{ id: 363, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), },
			{ id: 364, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), },
			{ id: 365, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), },
			{ id: 366, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), },
			{ id: 367, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), },
			{ id: 368, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), },
			{
				id: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), }
				],
			},
			{ id: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{ id: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{ id: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), },
			{ id: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), },
			{ id: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), },
			{ id: 377, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), },
			{ id: 378, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), },
			{ id: 379, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), },
			{ id: 380, name: "Latias", img: baseSprite(380), imgS: shinySprite(380), },
			{ id: 381, name: "Latios", img: baseSprite(381), imgS: shinySprite(381), },
			{ id: 382, name: "Kyogre", img: baseSprite(382), imgS: shinySprite(382), },
			{ id: 383, name: "Groudon", img: baseSprite(383), imgS: shinySprite(383), },
			{ id: 384, name: "Rayquaza", img: baseSprite(384), imgS: shinySprite(384), },
			{ id: 385, name: "Jirachi", img: baseSprite(385), imgS: shinySprite(385), mythical: true, },
			{
				id: 386, name: "Deoxys", img: baseSprite(386), imgS: shinySprite(386), mythical: true, forms: [
					{ name: "Normal", img: baseSprite(386), imgS: shinySprite(386), mythical: true, },
					{ name: "Attack", img: baseSprite("386-a"), imgS: shinySprite("386-a"), mythical: true, },
					{ name: "Defense", img: baseSprite("386-d"), imgS: shinySprite("386-d"), mythical: true, },
					{ name: "Speed", img: baseSprite("386-s"), imgS: shinySprite("386-s"), mythical: true, }
				],
			},
			{ id: 387, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), },
			{ id: 388, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), },
			{ id: 389, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), },
			{ id: 390, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), },
			{ id: 391, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), },
			{ id: 392, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), },
			{ id: 393, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), },
			{ id: 394, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), },
			{ id: 395, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), },
			{
				id: 396, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), }
				],
			},
			{
				id: 397, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), }
				],
			},
			{
				id: 398, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), }
				],
			},
			{
				id: 399, name: "Bidoof", img: baseSprite(399), imgS: shinySprite(399), forms: [
					{ name: "Male", img: baseSprite(399), imgS: shinySprite(399), },
					{ name: "Female", img: baseSprite("399-f"), imgS: shinySprite("399-f"), }
				],
			},
			{
				id: 400, name: "Bibarel", img: baseSprite(400), imgS: shinySprite(400), forms: [
					{ name: "Male", img: baseSprite(400), imgS: shinySprite(400), },
					{ name: "Female", img: baseSprite("400-f"), imgS: shinySprite("400-f"), }
				],
			},
			{
				id: 401, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), }
				],
			},
			{
				id: 402, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), }
				],
			},
			{
				id: 403, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), }
				],
			},
			{
				id: 404, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), }
				],
			},
			{
				id: 405, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), }
				],
			},
			{ id: 406, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), },
			{
				id: 407, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), }
				],
			},
			{ id: 408, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), },
			{ id: 409, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), },
			{ id: 410, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), },
			{ id: 411, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), },
			{
				id: 412, name: "Burmy", img: baseSprite(412), imgS: shinySprite(412), forms: [
					{ name: "Plant Cloak", img: baseSprite(412), imgS: shinySprite(412), },
					{ name: "Sandy Cloak", img: baseSprite("412-s"), imgS: shinySprite("412-s"), },
					{ name: "Trash Cloak", img: baseSprite("412-t"), imgS: shinySprite("412-t"), }
				],
			},
			{
				id: 413, name: "Wormadam", img: baseSprite(413), imgS: shinySprite(413), forms: [
					{ name: "Plant Cloak", img: baseSprite(413), imgS: shinySprite(413), },
					{ name: "Sandy Cloak", img: baseSprite("413-s"), imgS: shinySprite("413-s"), },
					{ name: "Trash Cloak", img: baseSprite("413-t"), imgS: shinySprite("413-t"), }
				],
			},
			{ id: 414, name: "Mothim", img: baseSprite(414), imgS: shinySprite(414), },
			{
				id: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), }
				],
			},
			{ id: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), },
			{
				id: 417, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), }
				],
			},
			{
				id: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), }
				],
			},
			{
				id: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), }
				],
			},
			{ id: 420, name: "Cherubi", img: baseSprite(420), imgS: shinySprite(420), },
			{
				id: 421, name: "Cherrim", img: baseSprite(421), imgS: shinySprite(421), forms: [
					{ name: "Overcast", img: baseSprite(421), imgS: shinySprite(421), },
					{ name: "Sunshine", img: baseSprite("421-s"), imgS: shinySprite("421-s"), }
				],
			},
			{
				id: 422, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), },],
			},
			{
				id: 423, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), },],
			},
			{
				id: 424, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), }
				],
			},
			{ id: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{ id: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), },
			{ id: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{ id: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), },
			{ id: 431, name: "Glameow", img: baseSprite(431), imgS: shinySprite(431), },
			{ id: 432, name: "Purugly", img: baseSprite(432), imgS: shinySprite(432), },
			{ id: 433, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), },
			{ id: 434, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), },
			{ id: 435, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), },
			{ id: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), },
			{ id: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), },
			{ id: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), },
			{ id: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), },
			{ id: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 441, name: "Chatot", img: baseSprite(441), imgS: shinySprite(441), },
			{ id: 442, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{
				id: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), }
				],
			},
			{
				id: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), }
				],
			},
			{
				id: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), }
				],
			},
			{ id: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), },
			{ id: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), },
			{
				id: 449, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), }
				],
			},
			{
				id: 450, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), }
				],
			},
			{ id: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), },
			{ id: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), },
			{
				id: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), }
				],
			},
			{
				id: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), }
				],
			},
			{ id: 455, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455), },
			{
				id: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), }
				],
			},
			{
				id: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), }
				],
			},
			{ id: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), },
			{
				id: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), }
				],
			},
			{
				id: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), }
				],
			},
			{
				id: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), }
				],
			},
			{ id: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{
				id: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), }
				],
			},
			{
				id: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), }
				],
			},
			{ id: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 468, name: "Togekiss", img: baseSprite(468), imgS: shinySprite(468), },
			{ id: 469, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469), },
			{ id: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 472, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472), },
			{
				id: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), }
				],
			},
			{ id: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{ id: 477, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), },
			{ id: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{
				id: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), }
				],
			},
			{ id: 480, name: "Uxie", img: baseSprite(480), imgS: shinySprite(480), },
			{ id: 481, name: "Mesprit", img: baseSprite(481), imgS: shinySprite(481), },
			{ id: 482, name: "Azelf", img: baseSprite(482), imgS: shinySprite(482), },
			{ id: 483, name: "Dialga", img: baseSprite(483), imgS: shinySprite(483), },
			{ id: 484, name: "Palkia", img: baseSprite(484), imgS: shinySprite(484), },
			{ id: 485, name: "Heatran", img: baseSprite(485), imgS: shinySprite(485), },
			{ id: 486, name: "Regigigas", img: baseSprite(486), imgS: shinySprite(486), },
			{
				id: 487, name: "Giratina", img: baseSprite(487), imgS: shinySprite(487), forms: [
					{ name: "Altered", img: baseSprite(487), imgS: shinySprite(487), },
					{ name: "Origin", img: baseSprite("487-o"), imgS: shinySprite("487-o"), }
				],
			},
			{ id: 488, name: "Cresselia", img: baseSprite(488), imgS: shinySprite(488), },
			{ id: 489, name: "Phione", img: baseSprite(489), imgS: shinySprite(489), mythical: true, },
			{ id: 490, name: "Manaphy", img: baseSprite(490), imgS: shinySprite(490), mythical: true, },
			{ id: 491, name: "Darkrai", img: baseSprite(491), imgS: shinySprite(491), mythical: true, },
			{
				id: 492, name: "Shaymin", img: baseSprite(492), imgS: shinySprite(492), mythical: true, forms: [
					{ name: "Land", img: baseSprite(492), imgS: shinySprite(492), mythical: true, },
					{ name: "Sky", img: baseSprite("492-s"), imgS: shinySprite("492-s"), mythical: true, }
				],
			},
			{ id: 493, name: "Arceus", img: baseSprite(493), imgS: shinySprite(493), mythical: true, },
			{ id: 494, name: "Victini", img: baseSprite(494), imgS: shinySprite(494), dexSync: [regionalDex(0)], maxStatus: "caught", mythical: true, },
			{ id: 495, name: "Snivy", img: baseSprite(495), imgS: shinySprite(495), dexSync: [regionalDex(1)], },
			{ id: 496, name: "Servine", img: baseSprite(496), imgS: shinySprite(496), dexSync: [regionalDex(2)], },
			{ id: 497, name: "Serperior", img: baseSprite(497), imgS: shinySprite(497), dexSync: [regionalDex(3)], },
			{ id: 498, name: "Tepig", img: baseSprite(498), imgS: shinySprite(498), dexSync: [regionalDex(4)], },
			{ id: 499, name: "Pignite", img: baseSprite(499), imgS: shinySprite(499), dexSync: [regionalDex(5)], },
			{ id: 500, name: "Emboar", img: baseSprite(500), imgS: shinySprite(500), dexSync: [regionalDex(6)], },
			{ id: 501, name: "Oshawott", img: baseSprite(501), imgS: shinySprite(501), dexSync: [regionalDex(7)], },
			{ id: 502, name: "Dewott", img: baseSprite(502), imgS: shinySprite(502), dexSync: [regionalDex(8)], },
			{ id: 503, name: "Samurott", img: baseSprite(503), imgS: shinySprite(503), dexSync: [regionalDex(9)], },
			{ id: 504, name: "Patrat", img: baseSprite(504), imgS: shinySprite(504), dexSync: [regionalDex(10)], },
			{ id: 505, name: "Watchog", img: baseSprite(505), imgS: shinySprite(505), dexSync: [regionalDex(11)], },
			{ id: 506, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), dexSync: [regionalDex(12)], },
			{ id: 507, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), dexSync: [regionalDex(13)], },
			{ id: 508, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), dexSync: [regionalDex(14)], },
			{ id: 509, name: "Purrloin", img: baseSprite(509), imgS: shinySprite(509), dexSync: [regionalDex(15)], },
			{ id: 510, name: "Liepard", img: baseSprite(510), imgS: shinySprite(510), dexSync: [regionalDex(16)], },
			{ id: 511, name: "Pansage", img: baseSprite(511), imgS: shinySprite(511), dexSync: [regionalDex(17)], },
			{ id: 512, name: "Simisage", img: baseSprite(512), imgS: shinySprite(512), dexSync: [regionalDex(18)], },
			{ id: 513, name: "Pansear", img: baseSprite(513), imgS: shinySprite(513), dexSync: [regionalDex(19)], },
			{ id: 514, name: "Simisear", img: baseSprite(514), imgS: shinySprite(514), dexSync: [regionalDex(20)], },
			{ id: 515, name: "Panpour", img: baseSprite(515), imgS: shinySprite(515), dexSync: [regionalDex(21)], },
			{ id: 516, name: "Simipour", img: baseSprite(516), imgS: shinySprite(516), dexSync: [regionalDex(22)], },
			{ id: 517, name: "Munna", img: baseSprite(517), imgS: shinySprite(517), dexSync: [regionalDex(23)], },
			{ id: 518, name: "Musharna", img: baseSprite(518), imgS: shinySprite(518), dexSync: [regionalDex(24)], },
			{ id: 519, name: "Pidove", img: baseSprite(519), imgS: shinySprite(519), dexSync: [regionalDex(25)], },
			{ id: 520, name: "Tranquill", img: baseSprite(520), imgS: shinySprite(520), dexSync: [regionalDex(26)], },
			{
				id: 521, name: "Unfezant", img: baseSprite(521), imgS: shinySprite(521), dexSync: [regionalDex(27)], forms: [
					{ name: "Male", img: baseSprite(521), imgS: shinySprite(521), dexSync: [regionalDex(27, "Male")], },
					{ name: "Female", img: baseSprite("521-f"), imgS: shinySprite("521-f"), dexSync: [regionalDex(27, "Female")], }
				],
			},
			{ id: 522, name: "Blitzle", img: baseSprite(522), imgS: shinySprite(522), dexSync: [regionalDex(28)], },
			{ id: 523, name: "Zebstrika", img: baseSprite(523), imgS: shinySprite(523), dexSync: [regionalDex(29)], },
			{ id: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [regionalDex(30)], },
			{ id: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [regionalDex(31)], },
			{ id: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [regionalDex(32)], },
			{ id: 527, name: "Woobat", img: baseSprite(527), imgS: shinySprite(527), dexSync: [regionalDex(33)], },
			{ id: 528, name: "Swoobat", img: baseSprite(528), imgS: shinySprite(528), dexSync: [regionalDex(34)], },
			{ id: 529, name: "Drilbur", img: baseSprite(529), imgS: shinySprite(529), dexSync: [regionalDex(35)], },
			{ id: 530, name: "Excadrill", img: baseSprite(530), imgS: shinySprite(530), dexSync: [regionalDex(36)], },
			{ id: 531, name: "Audino", img: baseSprite(531), imgS: shinySprite(531), dexSync: [regionalDex(37)], },
			{ id: 532, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532), dexSync: [regionalDex(38)], },
			{ id: 533, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533), dexSync: [regionalDex(39)], },
			{ id: 534, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534), dexSync: [regionalDex(40)], },
			{ id: 535, name: "Tympole", img: baseSprite(535), imgS: shinySprite(535), dexSync: [regionalDex(41)], },
			{ id: 536, name: "Palpitoad", img: baseSprite(536), imgS: shinySprite(536), dexSync: [regionalDex(42)], },
			{ id: 537, name: "Seismitoad", img: baseSprite(537), imgS: shinySprite(537), dexSync: [regionalDex(43)], },
			{ id: 538, name: "Throh", img: baseSprite(538), imgS: shinySprite(538), dexSync: [regionalDex(44)], },
			{ id: 539, name: "Sawk", img: baseSprite(539), imgS: shinySprite(539), dexSync: [regionalDex(45)], },
			{ id: 540, name: "Sewaddle", img: baseSprite(540), imgS: shinySprite(540), dexSync: [regionalDex(46)], },
			{ id: 541, name: "Swadloon", img: baseSprite(541), imgS: shinySprite(541), dexSync: [regionalDex(47)], },
			{ id: 542, name: "Leavanny", img: baseSprite(542), imgS: shinySprite(542), dexSync: [regionalDex(48)], },
			{ id: 543, name: "Venipede", img: baseSprite(543), imgS: shinySprite(543), dexSync: [regionalDex(49)], },
			{ id: 544, name: "Whirlipede", img: baseSprite(544), imgS: shinySprite(544), dexSync: [regionalDex(50)], },
			{ id: 545, name: "Scolipede", img: baseSprite(545), imgS: shinySprite(545), dexSync: [regionalDex(51)], },
			{ id: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [regionalDex(52)], },
			{ id: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [regionalDex(53)], },
			{ id: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [regionalDex(54)], },
			{ id: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [regionalDex(55)], },
			{
				id: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [regionalDex(56)], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [regionalDex(56, "Blue-Striped")], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [regionalDex(56, "Red-Striped")], }
				],
			},
			{ id: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [regionalDex(57)], },
			{ id: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [regionalDex(58)], },
			{ id: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [regionalDex(59)], },
			{ id: 554, name: "Darumaka", img: baseSprite(554), imgS: shinySprite(554), dexSync: [regionalDex(60)], },
			{ id: 555, name: "Darmanitan", img: baseSprite(555), imgS: shinySprite(555), dexSync: [regionalDex(61)], },
			{ id: 556, name: "Maractus", img: baseSprite(556), imgS: shinySprite(556), dexSync: [regionalDex(62)], },
			{ id: 557, name: "Dwebble", img: baseSprite(557), imgS: shinySprite(557), dexSync: [regionalDex(63)], },
			{ id: 558, name: "Crustle", img: baseSprite(558), imgS: shinySprite(558), dexSync: [regionalDex(64)], },
			{ id: 559, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), dexSync: [regionalDex(65)], },
			{ id: 560, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), dexSync: [regionalDex(66)], },
			{ id: 561, name: "Sigilyph", img: baseSprite(561), imgS: shinySprite(561), dexSync: [regionalDex(67)], },
			{ id: 562, name: "Yamask", img: baseSprite(562), imgS: shinySprite(562), dexSync: [regionalDex(68)], },
			{ id: 563, name: "Cofagrigus", img: baseSprite(563), imgS: shinySprite(563), dexSync: [regionalDex(69)], },
			{ id: 564, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), dexSync: [regionalDex(70)], },
			{ id: 565, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), dexSync: [regionalDex(71)], },
			{ id: 566, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), dexSync: [regionalDex(72)], },
			{ id: 567, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), dexSync: [regionalDex(73)], },
			{ id: 568, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: [regionalDex(74)], },
			{ id: 569, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: [regionalDex(75)], },
			{ id: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), dexSync: [regionalDex(76)], },
			{ id: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), dexSync: [regionalDex(77)], },
			{ id: 572, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572), dexSync: [regionalDex(78)], },
			{ id: 573, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573), dexSync: [regionalDex(79)], },
			{ id: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), dexSync: [regionalDex(80)], },
			{ id: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), dexSync: [regionalDex(81)], },
			{ id: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), dexSync: [regionalDex(82)], },
			{ id: 577, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577), dexSync: [regionalDex(83)], },
			{ id: 578, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578), dexSync: [regionalDex(84)], },
			{ id: 579, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579), dexSync: [regionalDex(85)], },
			{ id: 580, name: "Ducklett", img: baseSprite(580), imgS: shinySprite(580), dexSync: [regionalDex(86)], },
			{ id: 581, name: "Swanna", img: baseSprite(581), imgS: shinySprite(581), dexSync: [regionalDex(87)], },
			{ id: 582, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [regionalDex(88)], },
			{ id: 583, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [regionalDex(89)], },
			{ id: 584, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [regionalDex(90)], },
			{
				id: 585, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), dexSync: [regionalDex(91)], forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), dexSync: [regionalDex(91, "Autumn")], },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [regionalDex(91, "Spring")], },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [regionalDex(91, "Summer")], },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), dexSync: [regionalDex(91, "Winter")], }
				],
			},
			{
				id: 586, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), dexSync: [regionalDex(92)], forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), dexSync: [regionalDex(92, "Autumn")], },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [regionalDex(92, "Spring")], },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [regionalDex(92, "Summer")], },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), dexSync: [regionalDex(92, "Winter")], }
				],
			},
			{ id: 587, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), dexSync: [regionalDex(93)], },
			{ id: 588, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), dexSync: [regionalDex(94)], },
			{ id: 589, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), dexSync: [regionalDex(95)], },
			{ id: 590, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), dexSync: [regionalDex(96)], },
			{ id: 591, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), dexSync: [regionalDex(97)], },
			{
				id: 592, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), dexSync: [regionalDex(98)], forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), dexSync: [regionalDex(98, "Male")], },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), dexSync: [regionalDex(98, "Female")], }
				],
			},
			{
				id: 593, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), dexSync: [regionalDex(99)], forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), dexSync: [regionalDex(99, "Male")], },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), dexSync: [regionalDex(99, "Female")], }
				],
			},
			{ id: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [regionalDex(100)], },
			{ id: 595, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595), dexSync: [regionalDex(101)], },
			{ id: 596, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596), dexSync: [regionalDex(102)], },
			{ id: 597, name: "Ferroseed", img: baseSprite(597), imgS: shinySprite(597), dexSync: [regionalDex(103)], },
			{ id: 598, name: "Ferrothorn", img: baseSprite(598), imgS: shinySprite(598), dexSync: [regionalDex(104)], },
			{ id: 599, name: "Klink", img: baseSprite(599), imgS: shinySprite(599), dexSync: [regionalDex(105)], },
			{ id: 600, name: "Klang", img: baseSprite(600), imgS: shinySprite(600), dexSync: [regionalDex(106)], },
			{ id: 601, name: "Klinklang", img: baseSprite(601), imgS: shinySprite(601), dexSync: [regionalDex(107)], },
			{ id: 602, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), dexSync: [regionalDex(108)], },
			{ id: 603, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), dexSync: [regionalDex(109)], },
			{ id: 604, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), dexSync: [regionalDex(110)], },
			{ id: 605, name: "Elgyem", img: baseSprite(605), imgS: shinySprite(605), dexSync: [regionalDex(111)], },
			{ id: 606, name: "Beheeyem", img: baseSprite(606), imgS: shinySprite(606), dexSync: [regionalDex(112)], },
			{ id: 607, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607), dexSync: [regionalDex(113)], },
			{ id: 608, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608), dexSync: [regionalDex(114)], },
			{ id: 609, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609), dexSync: [regionalDex(115)], },
			{ id: 610, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), dexSync: [regionalDex(116)], },
			{ id: 611, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), dexSync: [regionalDex(117)], },
			{ id: 612, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), dexSync: [regionalDex(118)], },
			{ id: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), dexSync: [regionalDex(119)], },
			{ id: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), dexSync: [regionalDex(120)], },
			{ id: 615, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), dexSync: [regionalDex(121)], },
			{ id: 616, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), dexSync: [regionalDex(122)], },
			{ id: 617, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), dexSync: [regionalDex(123)], },
			{ id: 618, name: "Stunfisk", img: baseSprite(618), imgS: shinySprite(618), dexSync: [regionalDex(124)], },
			{ id: 619, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), dexSync: [regionalDex(125)], },
			{ id: 620, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), dexSync: [regionalDex(126)], },
			{ id: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: [regionalDex(127)], },
			{ id: 622, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), dexSync: [regionalDex(128)], },
			{ id: 623, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), dexSync: [regionalDex(129)], },
			{ id: 624, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [regionalDex(130)], },
			{ id: 625, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [regionalDex(131)], },
			{ id: 626, name: "Bouffalant", img: baseSprite(626), imgS: shinySprite(626), dexSync: [regionalDex(132)], },
			{ id: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [regionalDex(133)], },
			{ id: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [regionalDex(134)], },
			{ id: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [regionalDex(135)], },
			{ id: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [regionalDex(136)], },
			{ id: 631, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631), dexSync: [regionalDex(137)], },
			{ id: 632, name: "Durant", img: baseSprite(632), imgS: shinySprite(632), dexSync: [regionalDex(138)], },
			{ id: 633, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), dexSync: [regionalDex(139)], },
			{ id: 634, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), dexSync: [regionalDex(140)], },
			{ id: 635, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), dexSync: [regionalDex(141)], },
			{ id: 636, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), dexSync: [regionalDex(142)], },
			{ id: 637, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), dexSync: [regionalDex(143)], },
			{ id: 638, name: "Cobalion", img: baseSprite(638), imgS: shinySprite(638), dexSync: [regionalDex(144)], },
			{ id: 639, name: "Terrakion", img: baseSprite(639), imgS: shinySprite(639), dexSync: [regionalDex(145)], },
			{ id: 640, name: "Virizion", img: baseSprite(640), imgS: shinySprite(640), dexSync: [regionalDex(146)], },
			{ id: 641, name: "Tornadus", img: baseSprite(641), imgS: shinySprite(641), dexSync: [regionalDex(147)], maxStatus: "caught", },
			{ id: 642, name: "Thundurus", img: baseSprite(642), imgS: shinySprite(642), dexSync: [regionalDex(148)], maxStatus: "caught", },
			{ id: 643, name: "Reshiram", img: baseSprite(643), imgS: shinySprite(643), dexSync: [regionalDex(149)], maxStatus: "caught", },
			{ id: 644, name: "Zekrom", img: baseSprite(644), imgS: shinySprite(644), dexSync: [regionalDex(150)], maxStatus: "caught", },
			{ id: 645, name: "Landorus", img: baseSprite(645), imgS: shinySprite(645), dexSync: [regionalDex(151)], },
			{ id: 646, name: "Kyurem", img: baseSprite(646), imgS: shinySprite(646), dexSync: [regionalDex(152)], },
			{ id: 647, name: "Keldeo", img: baseSprite(647), imgS: shinySprite(647), dexSync: [regionalDex(153)], maxStatus: "caught", mythical: true, },
			{ id: 648, name: "Meloetta", img: baseSprite(648), imgS: shinySprite(648), dexSync: [regionalDex(154)], maxStatus: "caught", mythical: true, },
			{ id: 649, name: "Genesect", img: baseSprite(649), imgS: shinySprite(649), dexSync: [regionalDex(155)], maxStatus: "caught", mythical: true, }
		]
	},
});
