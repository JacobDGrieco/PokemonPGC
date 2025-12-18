(() => {
	const gen = 7;
	const GAME_KEYS = ["sun", "moon"];
	const SUB = "-melemele";
	const DEX_NAME = "Melemele Dex";

	const BASE_DEX = [
		{ id: 1, natiId: 722, name: "Rowlet", img: () => baseSprite(722), imgS: () => shinySprite(722), tags: ["starter"], },
		{ id: 2, natiId: 723, name: "Dartrix", img: () => baseSprite(723), imgS: () => shinySprite(723), tags: ["starter"], },
		{ id: 3, natiId: 724, name: "Decidueye", img: () => baseSprite(724), imgS: () => shinySprite(724), tags: ["starter", "zcrystal"], },
		{ id: 4, natiId: 725, name: "Litten", img: () => baseSprite(725), imgS: () => shinySprite(725), tags: ["starter"], },
		{ id: 5, natiId: 726, name: "Torracat", img: () => baseSprite(726), imgS: () => shinySprite(726), tags: ["starter"], },
		{ id: 6, natiId: 727, name: "Incineroar", img: () => baseSprite(727), imgS: () => shinySprite(727), tags: ["starter", "zcrystal"], },
		{ id: 7, natiId: 728, name: "Popplio", img: () => baseSprite(728), imgS: () => shinySprite(728), tags: ["starter"], },
		{ id: 8, natiId: 729, name: "Brionne", img: () => baseSprite(729), imgS: () => shinySprite(729), tags: ["starter"], },
		{ id: 9, natiId: 730, name: "Primarina", img: () => baseSprite(730), imgS: () => shinySprite(730), tags: ["starter", "zcrystal"], },
		{ id: 10, natiId: 731, name: "Pikipek", img: () => baseSprite(731), imgS: () => shinySprite(731), },
		{ id: 11, natiId: 732, name: "Trumbeak", img: () => baseSprite(732), imgS: () => shinySprite(732), },
		{ id: 12, natiId: 733, name: "Toucannon", img: () => baseSprite(733), imgS: () => shinySprite(733), },
		{ id: 13, natiId: 734, name: "Yungoos", img: () => baseSprite(734), imgS: () => shinySprite(734), },
		{ id: 14, natiId: 735, name: "Gumshoos", img: () => baseSprite(735), imgS: () => shinySprite(735), },
		{
			id: 15, natiId: 19, name: "Rattata", img: () => baseSprite("0019-a"), imgS: () => shinySprite("0019-a"), tags: ["gender"], forms: [
				{ name: "Kantonian Male", img: () => baseSprite(19), imgS: () => shinySprite(19), },
				{ name: "Kantonian Female", img: () => baseSprite("0019-f"), imgS: () => shinySprite("0019-f"), },
				{ name: "Alolan", img: () => baseSprite("0019-a"), imgS: () => shinySprite("0019-a"), tags: ["alolan", "zcrystal"] },
			],
		},
		{
			id: 16, natiId: 20, name: "Raticate", img: () => baseSprite("0020-a"), imgS: () => shinySprite("0020-a"), tags: ["gender"], forms: [
				{ name: "Kantonian Male", img: () => baseSprite(20), imgS: () => shinySprite(20), },
				{ name: "Kantonian Female", img: () => baseSprite("0020-f"), imgS: () => shinySprite("0020-f"), },
				{ name: "Alolan", img: () => baseSprite("0020-a"), imgS: () => shinySprite("0020-a"), tags: ["alolan"] },
			],
		},
		{ id: 17, natiId: 10, name: "Caterpie", img: () => baseSprite(10), imgS: () => shinySprite(10), },
		{ id: 18, natiId: 11, name: "Metapod", img: () => baseSprite(11), imgS: () => shinySprite(11), },
		{
			id: 19, natiId: 12, name: "Butterfree", img: () => baseSprite(12), imgS: () => shinySprite(12), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(12), imgS: () => shinySprite(12), },
				{ name: "Female", img: () => baseSprite("0012-f"), imgS: () => shinySprite("0012-f"), },
			],
		},
		{
			id: 20, natiId: 165, name: "Ledyba", img: () => baseSprite(165), imgS: () => shinySprite(165), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(165), imgS: () => shinySprite(165), },
				{ name: "Female", img: () => baseSprite("0165-f"), imgS: () => shinySprite("0165-f"), },
			],
		},
		{
			id: 21, natiId: 166, name: "Ledian", img: () => baseSprite(166), imgS: () => shinySprite(166), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(166), imgS: () => shinySprite(166), },
				{ name: "Female", img: () => baseSprite("0166-f"), imgS: () => shinySprite("0166-f"), },
			],
		},
		{ id: 22, natiId: 167, name: "Spinarak", img: () => baseSprite(167), imgS: () => shinySprite(167), },
		{ id: 23, natiId: 168, name: "Ariados", img: () => baseSprite(168), imgS: () => shinySprite(168), },
		{ id: 24, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172), },
		{
			id: 25, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender", "other"], forms: [
				{ name: "Male", img: () => baseSprite(25), imgS: () => shinySprite(25), },
				{ name: "Female", img: () => baseSprite("0025-f"), imgS: () => shinySprite("0025-f"), },
				{ name: "Alola Cap", img: () => baseSprite("0025-a"), imgS: () => shinySprite("0025-a"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Hoenn Cap", img: () => baseSprite("0025-h"), imgS: () => shinySprite("0025-h"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Kalos Cap", img: () => baseSprite("0025-k"), imgS: () => shinySprite("0025-k"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Original Cap", img: () => baseSprite("0025-o"), imgS: () => shinySprite("0025-o"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Partner Cap", img: () => baseSprite("0025-p"), imgS: () => shinySprite("0025-p"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Sinnoh Cap", img: () => baseSprite("0025-s"), imgS: () => shinySprite("0025-s"), maxStatus: "caught", tags: ["mythical"], },
				{ name: "Unova Cap", img: () => baseSprite("0025-u"), imgS: () => shinySprite("0025-u"), maxStatus: "caught", tags: ["mythical"], },
			],
		},
		{
			id: 26, natiId: 26, name: "Raichu", img: () => baseSprite("0026-a"), imgS: () => shinySprite("0026-a"), tags: ["gender", "zcrystal"], forms: [
				{ name: "Kantonian Male", img: () => baseSprite(26), imgS: () => shinySprite(26), },
				{ name: "Kantonian Female", img: () => baseSprite("0026-f"), imgS: () => shinySprite("0026-f"), },
				{ name: "Alolan", img: () => baseSprite("0026-a"), imgS: () => shinySprite("0026-a"), tags: ["alolan"] },
			],
		},
		{ id: 27, natiId: 736, name: "Grubbin", img: () => baseSprite(736), imgS: () => shinySprite(736), },
		{ id: 28, natiId: 737, name: "Charjabug", img: () => baseSprite(737), imgS: () => shinySprite(737), },
		{ id: 29, natiId: 738, name: "Vikavolt", img: () => baseSprite(738), imgS: () => shinySprite(738), },
		{ id: 30, natiId: 438, name: "Bonsly", img: () => baseSprite(438), imgS: () => shinySprite(438), },
		{
			id: 31, natiId: 185, name: "Sudowoodo", img: () => baseSprite(185), imgS: () => shinySprite(185), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(185), imgS: () => shinySprite(185), },
				{ name: "Female", img: () => baseSprite("0185-f"), imgS: () => shinySprite("0185-f"), },
			],
		},
		{ id: 32, natiId: 440, name: "Happiny", img: () => baseSprite(440), imgS: () => shinySprite(440), },
		{ id: 33, natiId: 113, name: "Chansey", img: () => baseSprite(113), imgS: () => shinySprite(113), },
		{ id: 34, natiId: 242, name: "Blissey", img: () => baseSprite(242), imgS: () => shinySprite(242), },
		{ id: 35, natiId: 446, name: "Munchlax", img: () => baseSprite(446), imgS: () => shinySprite(446), },
		{ id: 36, natiId: 143, name: "Snorlax", img: () => baseSprite(143), imgS: () => shinySprite(143), },
		{ id: 37, natiId: 79, name: "Slowpoke", img: () => baseSprite(79), imgS: () => shinySprite(79), },
		{ id: 38, natiId: 80, name: "Slowbro", img: () => baseSprite(80), imgS: () => shinySprite(80), tags: ["mega"], },
		{ id: 39, natiId: 199, name: "Slowking", img: () => baseSprite(199), imgS: () => shinySprite(199), },
		{ id: 40, natiId: 278, name: "Wingull", img: () => baseSprite(278), imgS: () => shinySprite(278), },
		{ id: 41, natiId: 279, name: "Pelipper", img: () => baseSprite(279), imgS: () => shinySprite(279), },
		{ id: 42, natiId: 63, name: "Abra", img: () => baseSprite(63), imgS: () => shinySprite(63), },
		{
			id: 43, natiId: 64, name: "Kadabra", img: () => baseSprite(64), imgS: () => shinySprite(64), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(64), imgS: () => shinySprite(64), },
				{ name: "Female", img: () => baseSprite("0064-f"), imgS: () => shinySprite("0064-f"), },
			],
		},
		{
			id: 44, natiId: 65, name: "Alakazam", img: () => baseSprite(65), imgS: () => shinySprite(65), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(65), imgS: () => shinySprite(65), },
				{ name: "Female", img: () => baseSprite("0065-f"), imgS: () => shinySprite("0065-f"), },
			],
		},
		{
			id: 45, natiId: 52, name: "Meowth", img: () => baseSprite("0052-a"), imgS: () => shinySprite("0052-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(52), imgS: () => shinySprite(52), },
				{ name: "Alolan", img: () => baseSprite("0052-a"), imgS: () => shinySprite("0052-a"), tags: ["alolan"] },
			],
		},
		{
			id: 46, natiId: 53, name: "Persian", img: () => baseSprite("0053-a"), imgS: () => shinySprite("0053-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(53), imgS: () => shinySprite(53), },
				{ name: "Alolan", img: () => baseSprite("0053-a"), imgS: () => shinySprite("0053-a"), tags: ["alolan"] },
			],
		},
		{ id: 47, natiId: 81, name: "Magnemite", img: () => baseSprite(81), imgS: () => shinySprite(81), },
		{ id: 48, natiId: 82, name: "Magneton", img: () => baseSprite(82), imgS: () => shinySprite(82), },
		{ id: 49, natiId: 462, name: "Magnezone", img: () => baseSprite(462), imgS: () => shinySprite(462), },
		{
			id: 50, natiId: 88, name: "Grimer", img: () => baseSprite("0088-a"), imgS: () => shinySprite("0088-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(88), imgS: () => shinySprite(88), },
				{ name: "Alolan", img: () => baseSprite("0088-a"), imgS: () => shinySprite("0088-a"), tags: ["alolan"] },
			],
		},
		{
			id: 51, natiId: 89, name: "Muk", img: () => baseSprite("0089-a"), imgS: () => shinySprite("0089-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(89), imgS: () => shinySprite(89), },
				{ name: "Alolan", img: () => baseSprite("0089-a"), imgS: () => shinySprite("0089-a"), tags: ["alolan"] },
			],
		},
		{ id: 52, natiId: 58, name: "Growlithe", img: () => baseSprite(58), imgS: () => shinySprite(58), },
		{ id: 53, natiId: 59, name: "Arcanine", img: () => baseSprite(59), imgS: () => shinySprite(59), },
		{ id: 54, natiId: 96, name: "Drowzee", img: () => baseSprite(96), imgS: () => shinySprite(96), },
		{
			id: 55, natiId: 97, name: "Hypno", img: () => baseSprite(97), imgS: () => shinySprite(97), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(97), imgS: () => shinySprite(97), },
				{ name: "Female", img: () => baseSprite("0097-f"), imgS: () => shinySprite("0097-f"), },
			],
		},
		{ id: 56, natiId: 296, name: "Makuhita", img: () => baseSprite(296), imgS: () => shinySprite(296), },
		{ id: 57, natiId: 297, name: "Hariyama", img: () => baseSprite(297), imgS: () => shinySprite(297), },
		{ id: 58, natiId: 235, name: "Smeargle", img: () => baseSprite(235), imgS: () => shinySprite(235), },
		{ id: 59, natiId: 739, name: "Crabrawler", img: () => baseSprite(739), imgS: () => shinySprite(739), },
		{ id: 60, natiId: 740, name: "Crabominable", img: () => baseSprite(740), imgS: () => shinySprite(740), },
		{ id: 61, natiId: 92, name: "Gastly", img: () => baseSprite(92), imgS: () => shinySprite(92), },
		{ id: 62, natiId: 93, name: "Haunter", img: () => baseSprite(93), imgS: () => shinySprite(93), },
		{ id: 63, natiId: 94, name: "Gengar", img: () => baseSprite(94), imgS: () => shinySprite(94), tags: ["mega"], },
		{ id: 64, natiId: 425, name: "Drifloon", img: () => baseSprite(425), imgS: () => shinySprite(425), },
		{ id: 65, natiId: 426, name: "Drifblim", img: () => baseSprite(426), imgS: () => shinySprite(426), },
		{ id: 66, natiId: 200, name: "Misdreavus", img: () => baseSprite(200), imgS: () => shinySprite(200), },
		{ id: 67, natiId: 429, name: "Mismagius", img: () => baseSprite(429), imgS: () => shinySprite(429), },
		{
			id: 68, natiId: 41, name: "Zubat", img: () => baseSprite(41), imgS: () => shinySprite(41), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(41), imgS: () => shinySprite(41), },
				{ name: "Female", img: () => baseSprite("0041-f"), imgS: () => shinySprite("0041-f"), },
			],
		},
		{
			id: 69, natiId: 42, name: "Golbat", img: () => baseSprite(42), imgS: () => shinySprite(42), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(42), imgS: () => shinySprite(42), },
				{ name: "Female", img: () => baseSprite("0042-f"), imgS: () => shinySprite("0042-f"), },
			],
		},
		{ id: 70, natiId: 169, name: "Crobat", img: () => baseSprite(169), imgS: () => shinySprite(169), },
		{
			id: 71, natiId: 50, name: "Diglett", img: () => baseSprite("0050-a"), imgS: () => shinySprite("0050-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(50), imgS: () => shinySprite(50), },
				{ name: "Alolan", img: () => baseSprite("0050-a"), imgS: () => shinySprite("0050-a"), tags: ["alolan"] },
			],
		},
		{
			id: 72, natiId: 51, name: "Dugtrio", img: () => baseSprite("0051-a"), imgS: () => shinySprite("0051-a"), forms: [
				{ name: "Kantonian", img: () => baseSprite(51), imgS: () => shinySprite(51), },
				{ name: "Alolan", img: () => baseSprite("0051-a"), imgS: () => shinySprite("0051-a"), tags: ["alolan"] },
			],
		},
		{ id: 73, natiId: 21, name: "Spearow", img: () => baseSprite(21), imgS: () => shinySprite(21), },
		{ id: 74, natiId: 22, name: "Fearow", img: () => baseSprite(22), imgS: () => shinySprite(22), },
		{ id: 75, natiId: 627, name: "Rufflet", img: () => baseSprite(627), imgS: () => shinySprite(627), },
		{ id: 76, natiId: 628, name: "Braviary", img: () => baseSprite(628), imgS: () => shinySprite(628), },
		{ id: 77, natiId: 629, name: "Vullaby", img: () => baseSprite(629), imgS: () => shinySprite(629), },
		{ id: 78, natiId: 630, name: "Mandibuzz", img: () => baseSprite(630), imgS: () => shinySprite(630), },
		{ id: 79, natiId: 56, name: "Mankey", img: () => baseSprite(56), imgS: () => shinySprite(56), },
		{ id: 80, natiId: 57, name: "Primeape", img: () => baseSprite(57), imgS: () => shinySprite(57), },
		{ id: 81, natiId: 225, name: "Delibird", img: () => baseSprite(225), imgS: () => shinySprite(225), },
		{
			id: 82, natiId: 741, name: "Oricorio", img: () => baseSprite("0741-po"), imgS: () => shinySprite("0741-po"), tags: ["other"], forms: [
				{ name: "Baile Style", img: () => baseSprite(741), imgS: () => shinySprite(741), },
				{ name: "Pa'u Style", img: () => baseSprite("0741-pa"), imgS: () => shinySprite("0741-p"), },
				{ name: "Pom-Pom Style", img: () => baseSprite("0741-po"), imgS: () => shinySprite("0741-p"), },
				{ name: "Sensu Style", img: () => baseSprite("0741-s"), imgS: () => shinySprite("0741-s"), },
			],
		},
		{ id: 83, natiId: 742, name: "Cutiefly", img: () => baseSprite(742), imgS: () => shinySprite(742), },
		{ id: 84, natiId: 743, name: "Ribombee", img: () => baseSprite(743), imgS: () => shinySprite(743), },
		{ id: 85, natiId: 548, name: "Petilil", img: () => baseSprite(548), imgS: () => shinySprite(548), },
		{ id: 86, natiId: 549, name: "Lilligant", img: () => baseSprite(549), imgS: () => shinySprite(549), },
		{ id: 87, natiId: 546, name: "Cottonee", img: () => baseSprite(546), imgS: () => shinySprite(546), },
		{ id: 88, natiId: 547, name: "Whimsicott", img: () => baseSprite(547), imgS: () => shinySprite(547), },
		{ id: 89, natiId: 54, name: "Psyduck", img: () => baseSprite(54), imgS: () => shinySprite(54), },
		{ id: 90, natiId: 55, name: "Golduck", img: () => baseSprite(55), imgS: () => shinySprite(55), },
		{
			id: 91, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
				{ name: "Female", img: () => baseSprite("0129-f"), imgS: () => shinySprite("0129-f"), },
			],
		},
		{
			id: 92, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
				{ name: "Female", img: () => baseSprite("0130-f"), imgS: () => shinySprite("0130-f"), },
			],
		},
		{ id: 93, natiId: 339, name: "Barboach", img: () => baseSprite(339), imgS: () => shinySprite(339), },
		{ id: 94, natiId: 340, name: "Whiscash", img: () => baseSprite(340), imgS: () => shinySprite(340), },
		{ id: 95, natiId: 66, name: "Machop", img: () => baseSprite(66), imgS: () => shinySprite(66), },
		{ id: 96, natiId: 67, name: "Machoke", img: () => baseSprite(67), imgS: () => shinySprite(67), },
		{ id: 97, natiId: 68, name: "Machamp", img: () => baseSprite(68), imgS: () => shinySprite(68), },
		{ id: 98, natiId: 524, name: "Roggenrola", img: () => baseSprite(524), imgS: () => shinySprite(524), },
		{ id: 99, natiId: 525, name: "Boldore", img: () => baseSprite(525), imgS: () => shinySprite(525), },
		{ id: 100, natiId: 526, name: "Gigalith", img: () => baseSprite(526), imgS: () => shinySprite(526), },
		{ id: 101, natiId: 703, name: "Carbink", img: () => baseSprite(703), imgS: () => shinySprite(703), },
		{ id: 102, natiId: 302, name: "Sableye", img: () => baseSprite(302), imgS: () => shinySprite(302), tags: ["mega"], },
		{ id: 103, natiId: 744, name: "Rockruff", img: () => baseSprite(744), imgS: () => shinySprite(744), },
		{
			id: 104, natiId: 745, name: "Lycanroc", img: () => baseSprite(745), imgS: () => shinySprite(745), tags: ["other"], forms: [
				{ name: "Midday", img: () => baseSprite(745), imgS: () => shinySprite(745), },
				{ name: "Midnight", img: () => baseSprite("0745-m"), imgS: () => shinySprite("0745-m"), },
				{ name: "Dusk", img: () => baseSprite("0745-d"), imgS: () => shinySprite("0745-d"), },
			],
		},
		{ id: 105, natiId: 327, name: "Spinda", img: () => baseSprite(327), imgS: () => shinySprite(327), },
		{ id: 106, natiId: 72, name: "Tentacool", img: () => baseSprite(72), imgS: () => shinySprite(72), },
		{ id: 107, natiId: 73, name: "Tentacruel", img: () => baseSprite(73), imgS: () => shinySprite(73), },
		{
			id: 108, natiId: 456, name: "Finneon", img: () => baseSprite(456), imgS: () => shinySprite(456), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(456), imgS: () => shinySprite(456), },
				{ name: "Female", img: () => baseSprite("0456-f"), imgS: () => shinySprite("0456-f"), },
			],
		},
		{
			id: 109, natiId: 457, name: "Lumineon", img: () => baseSprite(457), imgS: () => shinySprite(457), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(457), imgS: () => shinySprite(457), },
				{ name: "Female", img: () => baseSprite("0457-f"), imgS: () => shinySprite("0457-f"), },
			],
		},
		{ id: 110, natiId: 746, name: "Wishiwashi", img: () => baseSprite(746), imgS: () => shinySprite(746), },
		{ id: 111, natiId: 370, name: "Luvdisc", img: () => baseSprite(370), imgS: () => shinySprite(370), },
		{ id: 112, natiId: 222, name: "Corsola", img: () => baseSprite(222), imgS: () => shinySprite(222), },
		{ id: 113, natiId: 747, name: "Mareanie", img: () => baseSprite(747), imgS: () => shinySprite(747), },
		{ id: 114, natiId: 748, name: "Toxapex", img: () => baseSprite(748), imgS: () => shinySprite(748), },
		{ id: 115, natiId: 90, name: "Shellder", img: () => baseSprite(90), imgS: () => shinySprite(90), },
		{ id: 116, natiId: 91, name: "Cloyster", img: () => baseSprite(91), imgS: () => shinySprite(91), },
		{ id: 117, natiId: 371, name: "Bagon", img: () => baseSprite(371), imgS: () => shinySprite(371), tags: ["pseudo"], },
		{ id: 118, natiId: 372, name: "Shelgon", img: () => baseSprite(372), imgS: () => shinySprite(372), tags: ["pseudo"], },
		{ id: 119, natiId: 373, name: "Salamence", img: () => baseSprite(373), imgS: () => shinySprite(373), tags: ["pseudo", "mega"], },
		{ id: 120, natiId: 785, name: "Tapu Koko", img: () => baseSprite(785), imgS: () => shinySprite(785), tags: ["legendary", "zcrystal"], },
	];

	window.DATA = window.DATA || {};
	window.DATA.dex = window.DATA.dex || {};
	window.DATA.dexNames = window.DATA.dexNames || {};

	function buildDexFor(gameKey) {
		const baseSprite = (natiId) =>
			wantAnimatedDexSprites(gen)
				? _frontSpriteAnimated(gen, gameKey, natiId)
				: _frontSprite(gen, gameKey, natiId);

		const shinySprite = (natiId) =>
			wantAnimatedDexSprites(gen)
				? _frontSpriteShinyAnimated(gen, gameKey, natiId)
				: _frontSpriteShiny(gen, gameKey, natiId);

		return BASE_DEX.map((m) => ({
			...m,
			img: () => baseSprite(m.natiId),
			imgS: () => shinySprite(m.natiId),
		}));
	}

	for (const gk of GAME_KEYS) {
		window.DATA.dexNames[gk + SUB] = DEX_NAME;
		window.DATA.dex[gk + SUB] = buildDexFor(gk + SUB);
	}

	try {
		window.PPGC = window.PPGC || {};
		if (typeof window.PPGC.rebuildNatDexIndex === "function") {
			window.PPGC.rebuildNatDexIndex();
		} else if (typeof window.PPGC._natDexIndex !== "undefined") {
			window.PPGC._natDexIndex = null;
		}
	} catch { }
})();