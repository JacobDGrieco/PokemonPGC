const game = "diamond";
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
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
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
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },
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
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
				],
			},
			{
				id: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
				],
			},
			{ id: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{
				id: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [regionalDex(104)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [regionalDex(104, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [regionalDex(104, "Female")], },
				],
			},
			{
				id: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: [regionalDex(105)], forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [regionalDex(105, "Male")], },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [regionalDex(105, "Female")], },
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
			{ id: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [regionalDex(100)], },
			{ id: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [regionalDex(101)], },
			{ id: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), },
			{ id: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), },
			{ id: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{
				id: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [regionalDex(28)], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [regionalDex(28, "Male")], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [regionalDex(28, "Female")], },
				],
			},
			{
				id: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [regionalDex(29)], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [regionalDex(29, "Male")], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [regionalDex(29, "Female")], },
				],
			},
			{ id: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
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
			{ id: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [regionalDex(43)], },
			{ id: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [regionalDex(44)], },
			{ id: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), },
			{ id: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), },
			{ id: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{ id: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: [regionalDex(20)], },
			{
				id: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: [regionalDex(21)], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: [regionalDex(21, "Male")], },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: [regionalDex(21, "Female")], },
				],
			},
			{
				id: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: [regionalDex(22)], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: [regionalDex(22, "Male")], },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: [regionalDex(22, "Female")], },
				],
			},
			{ id: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [regionalDex(40)], },
			{ id: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [regionalDex(41)], },
			{ id: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [regionalDex(42)], },
			{ id: 69, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), },
			{ id: 70, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), },
			{ id: 71, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), },
			{ id: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [regionalDex(136)], },
			{ id: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [regionalDex(137)], },
			{ id: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: [regionalDex(31)], },
			{ id: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: [regionalDex(32)], },
			{ id: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: [regionalDex(33)], },
			{ id: 77, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), dexSync: [regionalDex(90)], },
			{ id: 78, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), dexSync: [regionalDex(91)], },
			{ id: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), },
			{ id: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 83, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), },
			{
				id: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), },
			{ id: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), },
			{ id: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [regionalDex(69)], },
			{ id: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [regionalDex(70)], },
			{ id: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [regionalDex(71)], },
			{ id: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), dexSync: [regionalDex(34)], },
			{ id: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },
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
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{ id: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [regionalDex(97)], },
			{ id: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{ id: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{
				id: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [regionalDex(78)], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [regionalDex(78, "Male")], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [regionalDex(78, "Female")], },
				],
			},
			{
				id: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [regionalDex(79)], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [regionalDex(79, "Male")], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [regionalDex(79, "Female")], },
				],
			},
			{ id: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), dexSync: [regionalDex(95)], },
			{
				id: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				],
			},
			{ id: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{ id: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{ id: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{
				id: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [regionalDex(23)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [regionalDex(23, "Male")], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [regionalDex(23, "Female")], },
				],
			},
			{
				id: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [regionalDex(24)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [regionalDex(24, "Male")], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [regionalDex(24, "Female")], },
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
			{ id: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [regionalDex(113)], },
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
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), },
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
			{ id: 163, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: [regionalDex(106)], },
			{ id: 164, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: [regionalDex(107)], },
			{
				id: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), },
				],
			},
			{
				id: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), },
				],
			},
			{ id: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [regionalDex(30)], },
			{ id: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [regionalDex(103)], },
			{ id: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [regionalDex(99)], },
			{ id: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 175, name: "Togepi", img: baseSprite(175), imgS: shinySprite(175), },
			{ id: 176, name: "Togetic", img: baseSprite(176), imgS: shinySprite(176), },
			{ id: 177, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), },
			{
				id: 178, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), },
				],
			},
			{ id: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), },
			{ id: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), },
			{ id: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), },
			{ id: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{ id: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), dexSync: [regionalDex(125)], },
			{ id: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), dexSync: [regionalDex(126)], },
			{
				id: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [regionalDex(93)], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [regionalDex(93, "Male")], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [regionalDex(93, "Female")], },
				],
			},
			{
				id: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{ id: 187, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), },
			{ id: 188, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), },
			{ id: 189, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), },
			{
				id: 190, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), dexSync: [regionalDex(63)], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), dexSync: [regionalDex(63, "Male")], },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), dexSync: [regionalDex(63, "Female")], },
				],
			},
			{ id: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), },
			{ id: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), },
			{ id: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193), },
			{
				id: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), dexSync: [regionalDex(117)], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: [regionalDex(117, "Male")], },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: [regionalDex(117, "Female")], },
				],
			},
			{
				id: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), dexSync: [regionalDex(118)], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), dexSync: [regionalDex(118, "Male")], },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), dexSync: [regionalDex(118, "Female")], },
				],
			},
			{ id: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{
				id: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [regionalDex(74)], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: [regionalDex(74, "Male")], },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: [regionalDex(74, "Female")], },
				],
			},
			{ id: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), },
			{ id: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: [regionalDex(72)], },
			{
				id: 201, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), dexSync: [regionalDex(114)], forms: [
					{ name: "A", img: baseSprite("201-a"), imgS: shinySprite("201-a"), dexSync: [regionalDex(114, "A")], },
					{ name: "B", img: baseSprite("201-b"), imgS: shinySprite("201-b"), dexSync: [regionalDex(114, "B")], },
					{ name: "C", img: baseSprite("201-c"), imgS: shinySprite("201-c"), dexSync: [regionalDex(114, "C")], },
					{ name: "D", img: baseSprite("201-d"), imgS: shinySprite("201-d"), dexSync: [regionalDex(114, "D")], },
					{ name: "E", img: baseSprite("201-e"), imgS: shinySprite("201-e"), dexSync: [regionalDex(114, "E")], },
					{ name: "F", img: baseSprite("201-f"), imgS: shinySprite("201-f"), dexSync: [regionalDex(114, "F")], },
					{ name: "G", img: baseSprite("201-g"), imgS: shinySprite("201-g"), dexSync: [regionalDex(114, "G")], },
					{ name: "H", img: baseSprite("201-h"), imgS: shinySprite("201-h"), dexSync: [regionalDex(114, "H")], },
					{ name: "I", img: baseSprite("201-i"), imgS: shinySprite("201-i"), dexSync: [regionalDex(114, "I")], },
					{ name: "J", img: baseSprite("201-j"), imgS: shinySprite("201-j"), dexSync: [regionalDex(114, "J")], },
					{ name: "K", img: baseSprite("201-k"), imgS: shinySprite("201-k"), dexSync: [regionalDex(114, "K")], },
					{ name: "L", img: baseSprite("201-l"), imgS: shinySprite("201-l"), dexSync: [regionalDex(114, "L")], },
					{ name: "M", img: baseSprite("201-m"), imgS: shinySprite("201-m"), dexSync: [regionalDex(114, "M")], },
					{ name: "N", img: baseSprite("201-n"), imgS: shinySprite("201-n"), dexSync: [regionalDex(114, "N")], },
					{ name: "O", img: baseSprite("201-o"), imgS: shinySprite("201-o"), dexSync: [regionalDex(114, "O")], },
					{ name: "P", img: baseSprite("201-p"), imgS: shinySprite("201-p"), dexSync: [regionalDex(114, "P")], },
					{ name: "Q", img: baseSprite("201-q"), imgS: shinySprite("201-q"), dexSync: [regionalDex(114, "Q")], },
					{ name: "R", img: baseSprite("201-r"), imgS: shinySprite("201-r"), dexSync: [regionalDex(114, "R")], },
					{ name: "S", img: baseSprite("201-s"), imgS: shinySprite("201-s"), dexSync: [regionalDex(114, "S")], },
					{ name: "T", img: baseSprite("201-t"), imgS: shinySprite("201-t"), dexSync: [regionalDex(114, "T")], },
					{ name: "U", img: baseSprite("201-u"), imgS: shinySprite("201-u"), dexSync: [regionalDex(114, "U")], },
					{ name: "V", img: baseSprite("201-v"), imgS: shinySprite("201-v"), dexSync: [regionalDex(114, "V")], },
					{ name: "W", img: baseSprite("201-w"), imgS: shinySprite("201-w"), dexSync: [regionalDex(114, "W")], },
					{ name: "X", img: baseSprite("201-x"), imgS: shinySprite("201-x"), dexSync: [regionalDex(114, "X")], },
					{ name: "Y", img: baseSprite("201-y"), imgS: shinySprite("201-y"), dexSync: [regionalDex(114, "Y")], },
					{ name: "Z", img: baseSprite("201-z"), imgS: shinySprite("201-z"), dexSync: [regionalDex(114, "Z")], },
					{ name: "!", img: baseSprite("201-em"), imgS: shinySprite("201-em"), dexSync: [regionalDex(114, "!")], },
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), dexSync: [regionalDex(114, "?")], },
				],
			},
			{
				id: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), },
				],
			},
			{
				id: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: [regionalDex(121)], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: [regionalDex(121, "Male")], },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: [regionalDex(121, "Female")], },
				],
			},
			{ id: 204, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), },
			{ id: 205, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), },
			{ id: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{
				id: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), },
				],
			},
			{
				id: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), dexSync: [regionalDex(35)], forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), dexSync: [regionalDex(35, "Male")], },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), dexSync: [regionalDex(35, "Female")], },
				],
			},
			{ id: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{ id: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), },
			{
				id: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				],
			},
			{ id: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), },
			{
				id: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [regionalDex(62)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: [regionalDex(62, "Male")], },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: [regionalDex(62, "Female")], },
				],
			},
			{
				id: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [regionalDex(144)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [regionalDex(144, "Male")], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [regionalDex(144, "Female")], },
				],
			},
			{ id: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), },
			{
				id: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), },
				],
			},
			{ id: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), },
			{ id: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), },
			{ id: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), },
			{
				id: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				],
			},
			{ id: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [regionalDex(132)], },
			{
				id: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [regionalDex(133)], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: [regionalDex(133, "Male")], },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: [regionalDex(133, "Female")], },
				],
			},
			{ id: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [regionalDex(141)], },
			{ id: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), },
			{
				id: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), },
				],
			},
			{ id: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), },
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
			{ id: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [regionalDex(98)], },
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
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 256, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 257, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },
				],
			},
			{ id: 258, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), },
			{ id: 259, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), },
			{ id: 260, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), },
			{ id: 261, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), },
			{ id: 262, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), },
			{ id: 263, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), },
			{ id: 264, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), },
			{ id: 265, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), dexSync: [regionalDex(48)], },
			{ id: 266, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), dexSync: [regionalDex(49)], },
			{
				id: 267, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), dexSync: [regionalDex(50)], forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), dexSync: [regionalDex(50, "Male")], },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), dexSync: [regionalDex(50, "Female")], },
				],
			},
			{ id: 268, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), dexSync: [regionalDex(51)], },
			{
				id: 269, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), dexSync: [regionalDex(52)], forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), dexSync: [regionalDex(52, "Male")], },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), dexSync: [regionalDex(52, "Female")], },
				],
			},
			{ id: 270, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), },
			{ id: 271, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), },
			{
				id: 272, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), },
				],
			},
			{ id: 273, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), },
			{
				id: 274, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274), },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f"), },
				],
			},
			{
				id: 275, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275), },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f"), },
				],
			},
			{ id: 276, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276), },
			{ id: 277, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277), },
			{ id: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [regionalDex(119)], },
			{ id: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [regionalDex(120)], },
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
			{ id: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), dexSync: [regionalDex(124)], },
			{ id: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 300, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), },
			{ id: 301, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), },
			{ id: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), },
			{ id: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), },
			{
				id: 307, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), dexSync: [regionalDex(86)], forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), dexSync: [regionalDex(86, "Male")], },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), dexSync: [regionalDex(86, "Female")], },
				],
			},
			{
				id: 308, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), dexSync: [regionalDex(87)], forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), dexSync: [regionalDex(87, "Male")], },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), dexSync: [regionalDex(87, "Female")], },
				],
			},
			{ id: 309, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), },
			{ id: 310, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), },
			{ id: 311, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 312, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 313, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), },
			{ id: 314, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), },
			{
				id: 315, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), dexSync: [regionalDex(26)], forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), dexSync: [regionalDex(26, "Male")], },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), dexSync: [regionalDex(26, "Female")], },
				],
			},
			{
				id: 316, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), },
				],
			},
			{
				id: 317, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), },
				],
			},
			{ id: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{
				id: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), },
				],
			},
			{
				id: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },
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
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), },
				],
			},
			{ id: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337), },
			{ id: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338), },
			{ id: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [regionalDex(80)], },
			{ id: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [regionalDex(81)], },
			{ id: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), },
			{ id: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), },
			{ id: 345, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), },
			{ id: 346, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), },
			{ id: 347, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), },
			{ id: 348, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), },
			{ id: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [regionalDex(138)], },
			{
				id: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [regionalDex(139)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [regionalDex(139, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [regionalDex(139, "Female")], },
				],
			},
			{
				id: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 352, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), },
			{ id: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), },
			{ id: 355, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), },
			{ id: 356, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), },
			{ id: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 358, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), dexSync: [regionalDex(83)], },
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
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
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
					{ name: "Normal", img: baseSprite(386), imgS: shinySprite(386), },
					{ name: "Attack", img: baseSprite("386-a"), imgS: shinySprite("386-a"), },
					{ name: "Defense", img: baseSprite("386-d"), imgS: shinySprite("386-d"), },
					{ name: "Speed", img: baseSprite("386-s"), imgS: shinySprite("386-s"), },
				],
			},
			{ id: 387, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), dexSync: [regionalDex(1)], },
			{ id: 388, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), dexSync: [regionalDex(2)], },
			{ id: 389, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), dexSync: [regionalDex(3)], },
			{ id: 390, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), dexSync: [regionalDex(4)], },
			{ id: 391, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), dexSync: [regionalDex(5)], },
			{ id: 392, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), dexSync: [regionalDex(6)], },
			{ id: 393, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), dexSync: [regionalDex(7)], },
			{ id: 394, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), dexSync: [regionalDex(8)], },
			{ id: 395, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), dexSync: [regionalDex(9)], },
			{
				id: 396, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), dexSync: [regionalDex(10)], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), dexSync: [regionalDex(10, "Male")], },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), dexSync: [regionalDex(10, "Female")], },
				],
			},
			{
				id: 397, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), dexSync: [regionalDex(11)], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), dexSync: [regionalDex(11, "Male")], },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), dexSync: [regionalDex(11, "Female")], },
				],
			},
			{
				id: 398, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), dexSync: [regionalDex(12)], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), dexSync: [regionalDex(12, "Male")], },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), dexSync: [regionalDex(12, "Female")], },
				],
			},
			{
				id: 399, name: "Bidoof", img: baseSprite(399), imgS: shinySprite(399), dexSync: [regionalDex(13)], forms: [
					{ name: "Male", img: baseSprite(399), imgS: shinySprite(399), dexSync: [regionalDex(13, "Male")], },
					{ name: "Female", img: baseSprite("399-f"), imgS: shinySprite("399-f"), dexSync: [regionalDex(13, "Female")], },
				],
			},
			{
				id: 400, name: "Bibarel", img: baseSprite(400), imgS: shinySprite(400), dexSync: [regionalDex(14)], forms: [
					{ name: "Male", img: baseSprite(400), imgS: shinySprite(400), dexSync: [regionalDex(14, "Male")], },
					{ name: "Female", img: baseSprite("400-f"), imgS: shinySprite("400-f"), dexSync: [regionalDex(14, "Female")], },
				],
			},
			{
				id: 401, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), dexSync: [regionalDex(15)], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), dexSync: [regionalDex(15, "Male")], },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), dexSync: [regionalDex(15, "Female")], },
				],
			},
			{
				id: 402, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), dexSync: [regionalDex(16)], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), dexSync: [regionalDex(16, "Male")], },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), dexSync: [regionalDex(16, "Female")], },
				],
			},
			{
				id: 403, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), dexSync: [regionalDex(17)], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), dexSync: [regionalDex(17, "Male")], },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), dexSync: [regionalDex(17, "Female")], },
				],
			},
			{
				id: 404, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), dexSync: [regionalDex(18)], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), dexSync: [regionalDex(18, "Male")], },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), dexSync: [regionalDex(18, "Female")], },
				],
			},
			{
				id: 405, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), dexSync: [regionalDex(19)], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), dexSync: [regionalDex(19, "Male")], },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), dexSync: [regionalDex(19, "Female")], },
				],
			},
			{ id: 406, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), dexSync: [regionalDex(25)], },
			{
				id: 407, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), dexSync: [regionalDex(27)], forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), dexSync: [regionalDex(27, "Male")], },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), dexSync: [regionalDex(27, "Female")], },
				],
			},
			{ id: 408, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [regionalDex(36)], },
			{ id: 409, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [regionalDex(37)], },
			{ id: 410, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [regionalDex(38)], },
			{ id: 411, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [regionalDex(39)], },
			{
				id: 412, name: "Burmy", img: baseSprite(412), imgS: shinySprite(412), dexSync: [regionalDex(45)], forms: [
					{ name: "Plant Cloak", img: baseSprite("412-p"), imgS: shinySprite("412-p"), dexSync: [regionalDex(45, "Plant Cloak")], },
					{ name: "Sandy Cloak", img: baseSprite("412-s"), imgS: shinySprite("412-s"), dexSync: [regionalDex(45, "Sandy Cloak")], },
					{ name: "Trash Cloak", img: baseSprite("412-t"), imgS: shinySprite("412-t"), dexSync: [regionalDex(45, "Trash Cloak")], },
				],
			},
			{
				id: 413, name: "Wormadam", img: baseSprite(413), imgS: shinySprite(413), dexSync: [regionalDex(46)], forms: [
					{ name: "Plant Cloak", img: baseSprite("413-p"), imgS: shinySprite("413-p"), dexSync: [regionalDex(46, "Plant Cloak")], },
					{ name: "Sandy Cloak", img: baseSprite("413-s"), imgS: shinySprite("413-s"), dexSync: [regionalDex(46, "Sandy Cloak")], },
					{ name: "Trash Cloak", img: baseSprite("413-t"), imgS: shinySprite("413-t"), dexSync: [regionalDex(46, "Trash Cloak")], },
				],
			},
			{ id: 414, name: "Mothim", img: baseSprite(414), imgS: shinySprite(414), dexSync: [regionalDex(47)], },
			{
				id: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), dexSync: [regionalDex(53)], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), dexSync: [regionalDex(53, "Male")], },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), dexSync: [regionalDex(53, "Female")], },
				],
			},
			{ id: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), dexSync: [regionalDex(54)], },
			{
				id: 417, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), dexSync: [regionalDex(55)], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), dexSync: [regionalDex(55, "Male")], },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), dexSync: [regionalDex(55, "Female")], },
				],
			},
			{
				id: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), dexSync: [regionalDex(56)], forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), dexSync: [regionalDex(56, "Male")], },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), dexSync: [regionalDex(56, "Female")], },
				],
			},
			{
				id: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), dexSync: [regionalDex(57)], forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), dexSync: [regionalDex(57, "Male")], },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), dexSync: [regionalDex(57, "Female")], },
				],
			},
			{ id: 420, name: "Cherubi", img: baseSprite(420), imgS: shinySprite(420), dexSync: [regionalDex(58)], },
			{
				id: 421, name: "Cherrim", img: baseSprite(421), imgS: shinySprite(421), dexSync: [regionalDex(59)], forms: [
					{ name: "Overcast", img: baseSprite("421-o"), imgS: shinySprite("421-o"), dexSync: [regionalDex(59, "Overcast")], },
					{ name: "Sunshine", img: baseSprite("421-s"), imgS: shinySprite("421-s"), dexSync: [regionalDex(59, "Sunshine")], },
				],
			},
			{
				id: 422, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [regionalDex(60)], forms: [
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: [regionalDex(60, "East Sea")], },
					{ name: "West Sea", img: baseSprite("422-w"), imgS: shinySprite("422-w"), dexSync: [regionalDex(60, "West Sea")], },
				],
			},
			{
				id: 423, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [regionalDex(61)], forms: [
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: [regionalDex(61, "East Sea")], },
					{ name: "West Sea", img: baseSprite("423-w"), imgS: shinySprite("423-w"), dexSync: [regionalDex(61, "West Sea")], },
				],
			},
			{
				id: 424, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), dexSync: [regionalDex(64)], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), dexSync: [regionalDex(64, "Male")], },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), dexSync: [regionalDex(64, "Female")], },
				],
			},
			{ id: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [regionalDex(65)], },
			{ id: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [regionalDex(66)], },
			{ id: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), dexSync: [regionalDex(67)], },
			{ id: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), dexSync: [regionalDex(68)], },
			{ id: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: [regionalDex(73)], },
			{ id: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [regionalDex(75)], },
			{ id: 431, name: "Glameow", img: baseSprite(431), imgS: shinySprite(431), dexSync: [regionalDex(76)], },
			{ id: 432, name: "Purugly", img: baseSprite(432), imgS: shinySprite(432), dexSync: [regionalDex(77)], },
			{ id: 433, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), dexSync: [regionalDex(82)], },
			{ id: 434, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), dexSync: [regionalDex(84)], },
			{ id: 435, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), dexSync: [regionalDex(85)], },
			{ id: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), dexSync: [regionalDex(88)], },
			{ id: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), dexSync: [regionalDex(89)], },
			{ id: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [regionalDex(92)], },
			{ id: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), dexSync: [regionalDex(94)], },
			{ id: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [regionalDex(96)], },
			{ id: 441, name: "Chatot", img: baseSprite(441), imgS: shinySprite(441), dexSync: [regionalDex(102)], },
			{ id: 442, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), dexSync: [regionalDex(108)], },
			{
				id: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [regionalDex(109)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [regionalDex(109, "Male")], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [regionalDex(109, "Female")], },
				],
			},
			{
				id: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [regionalDex(110)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [regionalDex(110, "Male")], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [regionalDex(110, "Female")], },
				],
			},
			{
				id: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [regionalDex(111)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [regionalDex(111, "Male")], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [regionalDex(111, "Female")], },
				],
			},
			{ id: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [regionalDex(112)], },
			{ id: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [regionalDex(115)], },
			{ id: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [regionalDex(116)], },
			{
				id: 449, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), dexSync: [regionalDex(122)], forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), dexSync: [regionalDex(122, "Male")], },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), dexSync: [regionalDex(122, "Female")], },
				],
			},
			{
				id: 450, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), dexSync: [regionalDex(123)], forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), dexSync: [regionalDex(123, "Male")], },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), dexSync: [regionalDex(123, "Female")], },
				],
			},
			{ id: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), dexSync: [regionalDex(127)], },
			{ id: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), dexSync: [regionalDex(128)], },
			{
				id: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), dexSync: [regionalDex(129)], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), dexSync: [regionalDex(129, "Male")], },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), dexSync: [regionalDex(129, "Female")], },
				],
			},
			{
				id: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), dexSync: [regionalDex(130)], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), dexSync: [regionalDex(130, "Male")], },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), dexSync: [regionalDex(130, "Female")], },
				],
			},
			{ id: 455, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455), dexSync: [regionalDex(131)], },
			{
				id: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [regionalDex(134)], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [regionalDex(134, "Male")], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [regionalDex(134, "Female")], },
				],
			},
			{
				id: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [regionalDex(135)], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [regionalDex(135, "Male")], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [regionalDex(135, "Female")], },
				],
			},
			{ id: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [regionalDex(140)], },
			{
				id: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: [regionalDex(142)], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: [regionalDex(142, "Male")], },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: [regionalDex(142, "Female")], },
				],
			},
			{
				id: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: [regionalDex(143)], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: [regionalDex(143, "Male")], },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: [regionalDex(143, "Female")], },
				],
			},
			{
				id: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [regionalDex(145)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [regionalDex(145, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [regionalDex(145, "Female")], },
				],
			},
			{ id: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{
				id: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{
				id: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
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
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				],
			},
			{ id: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{ id: 477, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), },
			{ id: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{ id: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), },
			{ id: 480, name: "Uxie", img: baseSprite(480), imgS: shinySprite(480), dexSync: [regionalDex(146)], },
			{ id: 481, name: "Mesprit", img: baseSprite(481), imgS: shinySprite(481), dexSync: [regionalDex(147)], },
			{ id: 482, name: "Azelf", img: baseSprite(482), imgS: shinySprite(482), dexSync: [regionalDex(148)], },
			{ id: 483, name: "Dialga", img: baseSprite(483), imgS: shinySprite(483), dexSync: [regionalDex(149)], },
			{ id: 484, name: "Palkia", img: baseSprite(484), imgS: shinySprite(484), dexSync: [regionalDex(150)], },
			{ id: 485, name: "Heatran", img: baseSprite(485), imgS: shinySprite(485), },
			{ id: 486, name: "Regigigas", img: baseSprite(486), imgS: shinySprite(486), },
			{ id: 487, name: "Giratina", img: baseSprite(487), imgS: shinySprite(487), },
			{ id: 488, name: "Cresselia", img: baseSprite(488), imgS: shinySprite(488), },
			{ id: 489, name: "Phione", img: baseSprite(489), imgS: shinySprite(489), mythical: true, },
			{ id: 490, name: "Manaphy", img: baseSprite(490), imgS: shinySprite(490), mythical: true, dexSync: [regionalDex(151)], },
			{ id: 491, name: "Darkrai", img: baseSprite(491), imgS: shinySprite(491), mythical: true, },
			{ id: 492, name: "Shaymin", img: baseSprite(492), imgS: shinySprite(492), mythical: true, },
			{ id: 493, name: "Arceus", img: baseSprite(493), imgS: shinySprite(493), mythical: true, },
		]
	},
});
