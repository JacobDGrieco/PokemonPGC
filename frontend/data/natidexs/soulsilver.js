const game = "soulsilver";
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game + "-national"]: "National Dex",
});
PPGC.register({
	dex: {
		[game + "-national"]: [
			{ id: 1, natiId: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), tags: ["starter"], },
			{ id: 2, natiId: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), tags: ["starter"], },
			{
				id: 3, natiId: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
				],
			},
			{ id: 4, natiId: 4, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), tags: ["starter"], },
			{ id: 5, natiId: 5, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), tags: ["starter"], },
			{ id: 6, natiId: 6, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), tags: ["starter"], },
			{ id: 7, natiId: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), tags: ["starter"], },
			{ id: 8, natiId: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), tags: ["starter"], },
			{ id: 9, natiId: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), tags: ["starter"], },
			{ id: 10, natiId: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), },
			{ id: 11, natiId: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), },
			{
				id: 12, natiId: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },
				],
			},
			{ id: 13, natiId: 13, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13), },
			{ id: 14, natiId: 14, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14), },
			{ id: 15, natiId: 15, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15), },
			{ id: 16, natiId: 16, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16), },
			{ id: 17, natiId: 17, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17), },
			{ id: 18, natiId: 18, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18), },
			{
				id: 19, natiId: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
				],
			},
			{
				id: 20, natiId: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
				],
			},
			{ id: 21, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 22, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 23, natiId: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 24, natiId: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{
				id: 25, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
				],
			},
			{
				id: 26, natiId: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
				],
			},
			{ id: 27, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), },
			{ id: 28, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), },
			{ id: 29, natiId: 29, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), },
			{ id: 30, natiId: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), },
			{ id: 31, natiId: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), },
			{ id: 32, natiId: 32, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), },
			{ id: 33, natiId: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), },
			{ id: 34, natiId: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), },
			{ id: 35, natiId: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 36, natiId: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{ id: 37, natiId: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), },
			{ id: 38, natiId: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), },
			{ id: 39, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 40, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{
				id: 41, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 42, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 43, natiId: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 44, natiId: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 45, natiId: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				],
			},
			{ id: 46, natiId: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), },
			{ id: 47, natiId: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), },
			{ id: 48, natiId: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), },
			{ id: 49, natiId: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), },
			{ id: 50, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), },
			{ id: 51, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), },
			{ id: 52, natiId: 52, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), },
			{ id: 53, natiId: 53, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), },
			{ id: 54, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 55, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 56, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 57, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 58, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), },
			{ id: 59, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), },
			{ id: 60, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 61, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 62, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{ id: 63, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 64, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 65, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
				],
			},
			{ id: 66, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), },
			{ id: 67, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), },
			{ id: 68, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), },
			{ id: 69, natiId: 69, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), },
			{ id: 70, natiId: 70, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), },
			{ id: 71, natiId: 71, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), },
			{ id: 72, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 73, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{ id: 74, natiId: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), },
			{ id: 75, natiId: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), },
			{ id: 76, natiId: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), },
			{ id: 77, natiId: 77, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), },
			{ id: 78, natiId: 78, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), },
			{ id: 79, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 80, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), },
			{ id: 81, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 82, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 83, natiId: 83, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), },
			{
				id: 84, natiId: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 85, natiId: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 86, natiId: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 87, natiId: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 88, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), },
			{ id: 89, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), },
			{ id: 90, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 91, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 92, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 93, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 94, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), },
			{ id: 95, natiId: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), },
			{ id: 96, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 97, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },
				],
			},
			{ id: 98, natiId: 98, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), },
			{ id: 99, natiId: 99, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), },
			{ id: 100, natiId: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), },
			{ id: 101, natiId: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), },
			{ id: 102, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{ id: 103, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), },
			{ id: 104, natiId: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{ id: 105, natiId: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), },
			{ id: 106, natiId: 106, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), },
			{ id: 107, natiId: 107, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), },
			{ id: 108, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 109, natiId: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), },
			{ id: 110, natiId: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), },
			{
				id: 111, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 112, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{ id: 113, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 114, natiId: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{ id: 115, natiId: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 116, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 117, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{
				id: 118, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 119, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{ id: 120, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 121, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 122, natiId: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), },
			{
				id: 123, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				],
			},
			{ id: 124, natiId: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{ id: 125, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 126, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 127, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{ id: 128, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{
				id: 129, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 130, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 131, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{ id: 132, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{ id: 133, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), },
			{ id: 134, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 135, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 136, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 137, natiId: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 138, natiId: 138, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), tags: ["fossil"], },
			{ id: 139, natiId: 139, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), tags: ["fossil"], },
			{ id: 140, natiId: 140, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), tags: ["fossil"], },
			{ id: 141, natiId: 141, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), tags: ["fossil"], },
			{ id: 142, natiId: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), tags: ["fossil"], },
			{ id: 143, natiId: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 144, natiId: 144, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), tags: ["legendary"], },
			{ id: 145, natiId: 145, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), tags: ["legendary"], },
			{ id: 146, natiId: 146, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), tags: ["legendary"], },
			{ id: 147, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["pseudo"], },
			{ id: 148, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["pseudo"], },
			{ id: 149, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["pseudo"], },
			{ id: 150, natiId: 150, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tags: ["legendary"], },
			{ id: 151, natiId: 151, name: "Mew", img: baseSprite(151), imgS: shinySprite(151), tags: ["mythical"], },
			{ id: 152, natiId: 152, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), tags: ["starter"], },
			{ id: 153, natiId: 153, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), tags: ["starter"], },
			{
				id: 154, natiId: 154, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), },
				],
			},
			{ id: 155, natiId: 155, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), tags: ["starter"], },
			{ id: 156, natiId: 156, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), tags: ["starter"], },
			{ id: 157, natiId: 157, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), tags: ["starter"], },
			{ id: 158, natiId: 158, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), tags: ["starter"], },
			{ id: 159, natiId: 159, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), tags: ["starter"], },
			{ id: 160, natiId: 160, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), tags: ["starter"], },
			{ id: 161, natiId: 161, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161), },
			{ id: 162, natiId: 162, name: "Furret", img: baseSprite(162), imgS: shinySprite(162), },
			{ id: 163, natiId: 163, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), },
			{ id: 164, natiId: 164, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), },
			{
				id: 165, natiId: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), },
				],
			},
			{
				id: 166, natiId: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), },
				],
			},
			{ id: 167, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 168, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 169, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 170, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 171, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{
				id: 172, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(172), imgS: shinySprite(172), },
					{ name: "Spiked-eared", img: baseSprite("172-s"), imgS: shinySprite("172-s"), tags: ["mythical"], },
				],
			},
			{ id: 173, natiId: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), },
			{ id: 174, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 175, natiId: 175, name: "Togepi", img: baseSprite(175), imgS: shinySprite(175), },
			{ id: 176, natiId: 176, name: "Togetic", img: baseSprite(176), imgS: shinySprite(176), },
			{ id: 177, natiId: 177, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), },
			{
				id: 178, natiId: 178, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), },
				],
			},
			{ id: 179, natiId: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), },
			{ id: 180, natiId: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), },
			{ id: 181, natiId: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), },
			{ id: 182, natiId: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{ id: 183, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 184, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{
				id: 185, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), },
				],
			},
			{
				id: 186, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{ id: 187, natiId: 187, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), },
			{ id: 188, natiId: 188, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), },
			{ id: 189, natiId: 189, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), },
			{
				id: 190, natiId: 190, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), },
				],
			},
			{ id: 191, natiId: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), },
			{ id: 192, natiId: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), },
			{ id: 193, natiId: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193), },
			{
				id: 194, natiId: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), },
				],
			},
			{
				id: 195, natiId: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), },
				],
			},
			{ id: 196, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 197, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{
				id: 198, natiId: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), },
				],
			},
			{ id: 199, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), },
			{ id: 200, natiId: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{
				id: 201, natiId: 201, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), tags: ["other"], forms: [
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
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), },
				],
			},
			{
				id: 202, natiId: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), },
				],
			},
			{
				id: 203, natiId: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), },
				],
			},
			{ id: 204, natiId: 204, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), },
			{ id: 205, natiId: 205, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), },
			{ id: 206, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{
				id: 207, natiId: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), },
				],
			},
			{
				id: 208, natiId: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), },
				],
			},
			{ id: 209, natiId: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 210, natiId: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{ id: 211, natiId: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), },
			{
				id: 212, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				],
			},
			{ id: 213, natiId: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), },
			{
				id: 214, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				],
			},
			{
				id: 215, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				],
			},
			{ id: 216, natiId: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), },
			{
				id: 217, natiId: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), },
				],
			},
			{ id: 218, natiId: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), },
			{ id: 219, natiId: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), },
			{ id: 220, natiId: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), },
			{
				id: 221, natiId: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				],
			},
			{ id: 222, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 223, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), },
			{
				id: 224, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },
				],
			},
			{ id: 225, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 226, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), },
			{ id: 227, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 228, natiId: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), },
			{
				id: 229, natiId: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), },
				],
			},
			{ id: 230, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 231, natiId: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 232, natiId: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), },
				],
			},
			{ id: 233, natiId: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 234, natiId: 234, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), },
			{ id: 235, natiId: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{ id: 236, natiId: 236, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236), },
			{ id: 237, natiId: 237, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237), },
			{ id: 238, natiId: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), },
			{ id: 239, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 240, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 241, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{ id: 242, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 243, natiId: 243, name: "Raikou", img: baseSprite(243), imgS: shinySprite(243), tags: ["legendary"], },
			{ id: 244, natiId: 244, name: "Entei", img: baseSprite(244), imgS: shinySprite(244), tags: ["legendary"], },
			{ id: 245, natiId: 245, name: "Suicune", img: baseSprite(245), imgS: shinySprite(245), tags: ["legendary"], },
			{ id: 246, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), tags: ["pseudo"], },
			{ id: 247, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), tags: ["pseudo"], },
			{ id: 248, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), tags: ["pseudo"], },
			{ id: 249, natiId: 249, name: "Lugia", img: baseSprite(249), imgS: shinySprite(249), tags: ["legendary"], },
			{ id: 250, natiId: 250, name: "Ho-oh", img: baseSprite(250), imgS: shinySprite(250), tags: ["legendary"], },
			{ id: 251, natiId: 251, name: "Celebi", img: baseSprite(251), imgS: shinySprite(251), tags: ["mythical"], },
			{ id: 252, natiId: 252, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), tags: ["starter"], },
			{ id: 253, natiId: 253, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), tags: ["starter"], },
			{ id: 254, natiId: 254, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), tags: ["starter"], },
			{
				id: 255, natiId: 255, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 256, natiId: 256, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 257, natiId: 257, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },
				],
			},
			{ id: 258, natiId: 258, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), tags: ["starter"], },
			{ id: 259, natiId: 259, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), tags: ["starter"], },
			{ id: 260, natiId: 260, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), tags: ["starter"], },
			{ id: 261, natiId: 261, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), },
			{ id: 262, natiId: 262, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), },
			{ id: 263, natiId: 263, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), },
			{ id: 264, natiId: 264, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), },
			{ id: 265, natiId: 265, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), },
			{ id: 266, natiId: 266, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), },
			{
				id: 267, natiId: 267, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), },
				],
			},
			{ id: 268, natiId: 268, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), },
			{
				id: 269, natiId: 269, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), },
				],
			},
			{ id: 270, natiId: 270, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), },
			{ id: 271, natiId: 271, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), },
			{
				id: 272, natiId: 272, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), },
				],
			},
			{ id: 273, natiId: 273, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), },
			{
				id: 274, natiId: 274, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274), },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f"), },
				],
			},
			{
				id: 275, natiId: 275, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275), },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f"), },
				],
			},
			{ id: 276, natiId: 276, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276), },
			{ id: 277, natiId: 277, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277), },
			{ id: 278, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 279, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 280, natiId: 280, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), },
			{ id: 281, natiId: 281, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), },
			{ id: 282, natiId: 282, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), },
			{ id: 283, natiId: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 284, natiId: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{ id: 285, natiId: 285, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), },
			{ id: 286, natiId: 286, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), },
			{ id: 287, natiId: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), },
			{ id: 288, natiId: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), },
			{ id: 289, natiId: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), },
			{ id: 290, natiId: 290, name: "Nincada", img: baseSprite(290), imgS: shinySprite(290), },
			{ id: 291, natiId: 291, name: "Ninjask", img: baseSprite(291), imgS: shinySprite(291), },
			{ id: 292, natiId: 292, name: "Shedinja", img: baseSprite(292), imgS: shinySprite(292), },
			{ id: 293, natiId: 293, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), },
			{ id: 294, natiId: 294, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), },
			{ id: 295, natiId: 295, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), },
			{ id: 296, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 297, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 298, natiId: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 299, natiId: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 300, natiId: 300, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), },
			{ id: 301, natiId: 301, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), },
			{ id: 302, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 303, natiId: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), },
			{ id: 304, natiId: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 305, natiId: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 306, natiId: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), },
			{
				id: 307, natiId: 307, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), },
				],
			},
			{
				id: 308, natiId: 308, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), },
				],
			},
			{ id: 309, natiId: 309, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), },
			{ id: 310, natiId: 310, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), },
			{ id: 311, natiId: 311, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 312, natiId: 312, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 313, natiId: 313, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), },
			{ id: 314, natiId: 314, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), },
			{
				id: 315, natiId: 315, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), },
				],
			},
			{
				id: 316, natiId: 316, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), },
				],
			},
			{
				id: 317, natiId: 317, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), },
				],
			},
			{ id: 318, natiId: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 319, natiId: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 320, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 321, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{
				id: 322, natiId: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), },
				],
			},
			{
				id: 323, natiId: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },
				],
			},
			{ id: 324, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 325, natiId: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), },
			{ id: 326, natiId: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), },
			{ id: 327, natiId: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), },
			{ id: 328, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 329, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 330, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{ id: 331, natiId: 331, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), },
			{
				id: 332, natiId: 332, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), },
				],
			},
			{ id: 333, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 334, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 335, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 336, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 337, natiId: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337), },
			{ id: 338, natiId: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338), },
			{ id: 339, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 340, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 341, natiId: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 342, natiId: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 343, natiId: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), },
			{ id: 344, natiId: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), },
			{ id: 345, natiId: 345, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), tags: ["fossil"], },
			{ id: 346, natiId: 346, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), tags: ["fossil"], },
			{ id: 347, natiId: 347, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), tags: ["fossil"], },
			{ id: 348, natiId: 348, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), tags: ["fossil"], },
			{ id: 349, natiId: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 350, natiId: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), },
				],
			},
			{
				id: 351, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), tags: ["gender"], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 352, natiId: 352, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), },
			{ id: 353, natiId: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 354, natiId: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), },
			{ id: 355, natiId: 355, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), },
			{ id: 356, natiId: 356, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), },
			{ id: 357, natiId: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 358, natiId: 358, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), },
			{ id: 359, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), },
			{ id: 360, natiId: 360, name: "Wynaut", img: baseSprite(360), imgS: shinySprite(360), },
			{ id: 361, natiId: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 362, natiId: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), },
			{ id: 363, natiId: 363, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), },
			{ id: 364, natiId: 364, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), },
			{ id: 365, natiId: 365, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), },
			{ id: 366, natiId: 366, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), },
			{ id: 367, natiId: 367, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), },
			{ id: 368, natiId: 368, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), },
			{
				id: 369, natiId: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				],
			},
			{ id: 370, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{ id: 371, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), tags: ["pseudo"], },
			{ id: 372, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), tags: ["pseudo"], },
			{ id: 373, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), tags: ["pseudo"], },
			{ id: 374, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), tags: ["pseudo"], },
			{ id: 375, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), tags: ["pseudo"], },
			{ id: 376, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), tags: ["pseudo"], },
			{ id: 377, natiId: 377, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), tags: ["legendary"], },
			{ id: 378, natiId: 378, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), tags: ["legendary"], },
			{ id: 379, natiId: 379, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), tags: ["legendary"], },
			{ id: 380, natiId: 380, name: "Latias", img: baseSprite(380), imgS: shinySprite(380), tags: ["legendary"], },
			{ id: 381, natiId: 381, name: "Latios", img: baseSprite(381), imgS: shinySprite(381), tags: ["legendary"], },
			{ id: 382, natiId: 382, name: "Kyogre", img: baseSprite(382), imgS: shinySprite(382), tags: ["legendary"], },
			{ id: 383, natiId: 383, name: "Groudon", img: baseSprite(383), imgS: shinySprite(383), tags: ["legendary"], },
			{ id: 384, natiId: 384, name: "Rayquaza", img: baseSprite(384), imgS: shinySprite(384), tags: ["legendary"], },
			{ id: 385, natiId: 385, name: "Jirachi", img: baseSprite(385), imgS: shinySprite(385), tags: ["mythical"], },
			{
				id: 386, natiId: 386, name: "Deoxys", img: baseSprite(386), imgS: shinySprite(386), tags: ["mythical"], forms: [
					{ name: "Normal", img: baseSprite(386), imgS: shinySprite(386), },
					{ name: "Attack", img: baseSprite("386-a"), imgS: shinySprite("386-a"), },
					{ name: "Defense", img: baseSprite("386-d"), imgS: shinySprite("386-d"), },
					{ name: "Speed", img: baseSprite("386-s"), imgS: shinySprite("386-s"), },
				],
			},
			{ id: 387, natiId: 387, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), tags: ["starter"], },
			{ id: 388, natiId: 388, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), tags: ["starter"], },
			{ id: 389, natiId: 389, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), tags: ["starter"], },
			{ id: 390, natiId: 390, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), tags: ["starter"], },
			{ id: 391, natiId: 391, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), tags: ["starter"], },
			{ id: 392, natiId: 392, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), tags: ["starter"], },
			{ id: 393, natiId: 393, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), tags: ["starter"], },
			{ id: 394, natiId: 394, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), tags: ["starter"], },
			{ id: 395, natiId: 395, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), tags: ["starter"], },
			{
				id: 396, natiId: 396, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), },
				],
			},
			{
				id: 397, natiId: 397, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), },
				],
			},
			{
				id: 398, natiId: 398, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), },
				],
			},
			{
				id: 399, natiId: 399, name: "Bidoof", img: baseSprite(399), imgS: shinySprite(399), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(399), imgS: shinySprite(399), },
					{ name: "Female", img: baseSprite("399-f"), imgS: shinySprite("399-f"), },
				],
			},
			{
				id: 400, natiId: 400, name: "Bibarel", img: baseSprite(400), imgS: shinySprite(400), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(400), imgS: shinySprite(400), },
					{ name: "Female", img: baseSprite("400-f"), imgS: shinySprite("400-f"), },
				],
			},
			{
				id: 401, natiId: 401, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), },
				],
			},
			{
				id: 402, natiId: 402, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), },
				],
			},
			{
				id: 403, natiId: 403, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), },
				],
			},
			{
				id: 404, natiId: 404, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), },
				],
			},
			{
				id: 405, natiId: 405, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), },
				],
			},
			{ id: 406, natiId: 406, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), },
			{
				id: 407, natiId: 407, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), },
				],
			},
			{ id: 408, natiId: 408, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), tags: ["fossil"], },
			{ id: 409, natiId: 409, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), tags: ["fossil"], },
			{ id: 410, natiId: 410, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), tags: ["fossil"], },
			{ id: 411, natiId: 411, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), tags: ["fossil"], },
			{
				id: 412, natiId: 412, name: "Burmy", img: baseSprite(412), imgS: shinySprite(412), tags: ["other"], forms: [
					{ name: "Plant Cloak", img: baseSprite("412-p"), imgS: shinySprite("412-p"), },
					{ name: "Sandy Cloak", img: baseSprite("412-s"), imgS: shinySprite("412-s"), },
					{ name: "Trash Cloak", img: baseSprite("412-t"), imgS: shinySprite("412-t"), },
				],
			},
			{
				id: 413, natiId: 413, name: "Wormadam", img: baseSprite(413), imgS: shinySprite(413), tags: ["other"], forms: [
					{ name: "Plant Cloak", img: baseSprite("413-p"), imgS: shinySprite("413-p"), },
					{ name: "Sandy Cloak", img: baseSprite("413-s"), imgS: shinySprite("413-s"), },
					{ name: "Trash Cloak", img: baseSprite("413-t"), imgS: shinySprite("413-t"), },
				],
			},
			{ id: 414, natiId: 414, name: "Mothim", img: baseSprite(414), imgS: shinySprite(414), },
			{
				id: 415, natiId: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), },
				],
			},
			{ id: 416, natiId: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), },
			{
				id: 417, natiId: 417, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), },
				],
			},
			{
				id: 418, natiId: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), },
				],
			},
			{
				id: 419, natiId: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), },
				],
			},
			{ id: 420, natiId: 420, name: "Cherubi", img: baseSprite(420), imgS: shinySprite(420), },
			{
				id: 421, natiId: 421, name: "Cherrim", img: baseSprite(421), imgS: shinySprite(421), tags: ["other"], forms: [
					{ name: "Overcast", img: baseSprite("421-o"), imgS: shinySprite("421-o"), },
					{ name: "Sunshine", img: baseSprite("421-s"), imgS: shinySprite("421-s"), },
				],
			},
			{
				id: 422, natiId: 422, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), tags: ["other"], forms: [
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), },
					{ name: "West Sea", img: baseSprite("422-w"), imgS: shinySprite("422-w"), },
				],
			},
			{
				id: 423, natiId: 423, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), tags: ["other"], forms: [
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), },
					{ name: "West Sea", img: baseSprite("423-w"), imgS: shinySprite("423-w"), },
				],
			},
			{
				id: 424, natiId: 424, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), },
				],
			},
			{ id: 425, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 426, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{ id: 427, natiId: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 428, natiId: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), },
			{ id: 429, natiId: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{ id: 430, natiId: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), },
			{ id: 431, natiId: 431, name: "Glameow", img: baseSprite(431), imgS: shinySprite(431), },
			{ id: 432, natiId: 432, name: "Purugly", img: baseSprite(432), imgS: shinySprite(432), },
			{ id: 433, natiId: 433, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), },
			{ id: 434, natiId: 434, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), },
			{ id: 435, natiId: 435, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), },
			{ id: 436, natiId: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), },
			{ id: 437, natiId: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), },
			{ id: 438, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), },
			{ id: 439, natiId: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), },
			{ id: 440, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 441, natiId: 441, name: "Chatot", img: baseSprite(441), imgS: shinySprite(441), },
			{ id: 442, natiId: 442, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{
				id: 443, natiId: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), },
				],
			},
			{
				id: 444, natiId: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), },
				],
			},
			{
				id: 445, natiId: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },
				],
			},
			{ id: 446, natiId: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 447, natiId: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), },
			{ id: 448, natiId: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), },
			{
				id: 449, natiId: 449, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), },
				],
			},
			{
				id: 450, natiId: 450, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), },
				],
			},
			{ id: 451, natiId: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), },
			{ id: 452, natiId: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), },
			{
				id: 453, natiId: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), },
				],
			},
			{
				id: 454, natiId: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), },
				],
			},
			{ id: 455, natiId: 455, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455), },
			{
				id: 456, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), },
				],
			},
			{
				id: 457, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), },
				],
			},
			{ id: 458, natiId: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), },
			{
				id: 459, natiId: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), },
				],
			},
			{
				id: 460, natiId: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), },
				],
			},
			{
				id: 461, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), },
				],
			},
			{ id: 462, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 463, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{
				id: 464, natiId: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{
				id: 465, natiId: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
				],
			},
			{ id: 466, natiId: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 467, natiId: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 468, natiId: 468, name: "Togekiss", img: baseSprite(468), imgS: shinySprite(468), },
			{ id: 469, natiId: 469, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469), },
			{ id: 470, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 471, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 472, natiId: 472, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472), },
			{
				id: 473, natiId: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				],
			},
			{ id: 474, natiId: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 475, natiId: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 476, natiId: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{ id: 477, natiId: 477, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), },
			{ id: 478, natiId: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{
				id: 479, natiId: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), },
				],
			},
			{ id: 480, natiId: 480, name: "Uxie", img: baseSprite(480), imgS: shinySprite(480), tags: ["legendary"], },
			{ id: 481, natiId: 481, name: "Mesprit", img: baseSprite(481), imgS: shinySprite(481), tags: ["legendary"], },
			{ id: 482, natiId: 482, name: "Azelf", img: baseSprite(482), imgS: shinySprite(482), tags: ["legendary"], },
			{ id: 483, natiId: 483, name: "Dialga", img: baseSprite(483), imgS: shinySprite(483), tags: ["legendary"], },
			{ id: 484, natiId: 484, name: "Palkia", img: baseSprite(484), imgS: shinySprite(484), tags: ["legendary"], },
			{ id: 485, natiId: 485, name: "Heatran", img: baseSprite(485), imgS: shinySprite(485), tags: ["legendary"], },
			{ id: 486, natiId: 486, name: "Regigigas", img: baseSprite(486), imgS: shinySprite(486), tags: ["legendary"], },
			{
				id: 487, natiId: 487, name: "Giratina", img: baseSprite(487), imgS: shinySprite(487), tags: ["other"], forms: [
					{ name: "Altered", img: baseSprite(487), imgS: shinySprite(487), },
					{ name: "Origin", img: baseSprite("487-o"), imgS: shinySprite("487-o"), },
				],
			},
			{ id: 488, natiId: 488, name: "Cresselia", img: baseSprite(488), imgS: shinySprite(488), tags: ["legendary"], },
			{ id: 489, natiId: 489, name: "Phione", img: baseSprite(489), imgS: shinySprite(489), tags: ["mythical"], },
			{ id: 490, natiId: 490, name: "Manaphy", img: baseSprite(490), imgS: shinySprite(490), tags: ["mythical"], },
			{ id: 491, natiId: 491, name: "Darkrai", img: baseSprite(491), imgS: shinySprite(491), tags: ["mythical"], },
			{
				id: 492, natiId: 492, name: "Shaymin", img: baseSprite(492), imgS: shinySprite(492), tags: ["other", "mythical"], forms: [
					{ name: "Land", img: baseSprite(492), imgS: shinySprite(492), },
					{ name: "Sky", img: baseSprite("492-s"), imgS: shinySprite("492-s"), },
				],
			},
			{ id: 493, natiId: 493, name: "Arceus", img: baseSprite(493), imgS: shinySprite(493), tags: ["mythical"], },
		]
	},
});
