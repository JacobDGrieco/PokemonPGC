const game = "letsgopikachu";
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Kanto Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), tags: ["starter"], },
			{ id: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), tags: ["starter"], },
			{
				id: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), tags: ["gender", "starter", "mega"], forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
				],
			},
			{ id: 4, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), tags: ["starter"], },
			{ id: 5, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), tags: ["starter"], },
			{ id: 6, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), tags: ["starter", "mega"], },
			{ id: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), tags: ["starter"], },
			{ id: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), tags: ["starter"], },
			{ id: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), tags: ["starter", "mega"], },
			{ id: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), },
			{ id: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), },
			{
				id: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },
				],
			},
			{ id: 13, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13), },
			{ id: 14, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14), },
			{ id: 15, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15), tags: ["mega"], },
			{ id: 16, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16), },
			{ id: 17, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17), },
			{ id: 18, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18), tags: ["mega"], },
			{
				id: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), tags: ["alolan"], },
				],
			},
			{
				id: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), tags: ["alolan"], },
				],
			},
			{ id: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{
				id: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
				],
			},
			{
				id: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), tags: ["alolan"], },
				],
			},
			{
				id: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), tags: ["alolan"], },
				],
			},
			{
				id: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), tags: ["alolan"], },
				],
			},
			{ id: 29, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), },
			{ id: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), },
			{ id: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), },
			{ id: 32, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), },
			{ id: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), },
			{ id: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), },
			{ id: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{
				id: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), tags: ["alolan"], },
				],
			},
			{
				id: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), tags: ["alolan"], },
				],
			},
			{ id: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{
				id: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				],
			},
			{ id: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), },
			{ id: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), },
			{ id: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), },
			{ id: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), },
			{
				id: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), tags: ["alolan"], },
				],
			},
			{
				id: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), tags: ["alolan"], },
				],
			},
			{
				id: 52, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), tags: ["alolan"], },
				],
			},
			{
				id: 53, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), tags: ["alolan"], },
				],
			},
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
				id: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
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
			{
				id: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), tags: ["alolan"], },
				],
			},
			{
				id: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), tags: ["alolan"], },
				],
			},
			{
				id: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), tags: ["alolan"], },
				],
			},
			{ id: 77, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), },
			{ id: 78, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), },
			{ id: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), tags: ["mega"], },
			{ id: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 83, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), },
			{
				id: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{
				id: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), tags: ["alolan"], },
				],
			},
			{
				id: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), tags: ["alolan"], },
				],
			},
			{ id: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), tags: ["mega"], },
			{ id: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), },
			{ id: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },
				],
			},
			{ id: 98, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), },
			{ id: 99, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), },
			{ id: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), },
			{ id: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), },
			{ id: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), tags: ["alolan"], },
				],
			},
			{ id: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), tags: ["alolan"], },
				],
			},
			{ id: 106, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), },
			{ id: 107, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), },
			{ id: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), },
			{ id: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), },
			{
				id: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{ id: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{ id: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{
				id: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{ id: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), },
			{
				id: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
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
				id: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{ id: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{ id: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), },
			{ id: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 138, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), tags: ["fossil"], },
			{ id: 139, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), tags: ["fossil"], },
			{ id: 140, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), tags: ["fossil"], },
			{ id: 141, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), tags: ["fossil"], },
			{ id: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), tags: ["fossil", "mega"], },
			{ id: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 144, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), tags: ["legendary"], },
			{ id: 145, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), tags: ["legendary"], },
			{ id: 146, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), tags: ["legendary"], },
			{ id: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["psuedo"], },
			{ id: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["psuedo"], },
			{ id: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["psuedo"], },
			{ id: 150, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tags: ["legendary", "mega"], },
			{ id: 151, name: "Mew", img: baseSprite(151), imgS: shinySprite(151), tags: ["mythical"], },
			{ id: 152, name: "Meltan", img: baseSprite(808), imgS: shinySprite(808), tags: ["mythical"], },
			{ id: 153, name: "Melmetal", img: baseSprite(809), imgS: shinySprite(809), tags: ["mythical"], }
		],
	},
});
