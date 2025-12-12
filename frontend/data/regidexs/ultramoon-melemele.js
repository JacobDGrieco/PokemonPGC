const game = "ultramoon";
const sub = game + "-melemele";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Melemele Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 722, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), },
			{ id: 2, natiId: 723, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), },
			{ id: 3, natiId: 724, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), },
			{ id: 4, natiId: 725, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), },
			{ id: 5, natiId: 726, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), },
			{ id: 6, natiId: 727, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), },
			{ id: 7, natiId: 728, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), },
			{ id: 8, natiId: 729, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), },
			{ id: 9, natiId: 730, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), },
			{ id: 10, natiId: 731, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), },
			{ id: 11, natiId: 732, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), },
			{ id: 12, natiId: 733, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), },
			{ id: 13, natiId: 734, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), },
			{ id: 14, natiId: 735, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), },
			{
				id: 15, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
					{ name: "alola", img: baseSprite("019-a"), imgS: shinySprite("019-a"), },],
			},
			{
				id: 16, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
					{ name: "alola", img: baseSprite("020-a"), imgS: shinySprite("020-a"), },],
			},
			{ id: 17, natiId: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), },
			{ id: 18, natiId: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), },
			{
				id: 19, natiId: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },],
			},
			{
				id: 20, natiId: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), },],
			},
			{
				id: 21, natiId: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), },],
			},
			{ id: 22, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 23, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 24, natiId: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 25, natiId: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), },
			{ id: 26, natiId: 686, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), },
			{ id: 27, natiId: 687, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), },
			{ id: 28, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), },
			{ id: 29, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), },
			{
				id: 30, natiId: 676, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), },],
			},
			{ id: 31, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{
				id: 32, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", mythical: true, },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", mythical: true, },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", mythical: true, },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", mythical: true, },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", mythical: true, },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", mythical: true, },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", mythical: true, },],
			},
			{
				id: 33, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
					{ name: "alola", img: baseSprite("026-a"), imgS: shinySprite("026-a"), },],
			},
			{ id: 34, natiId: 736, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), },
			{ id: 35, natiId: 737, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), },
			{ id: 36, natiId: 738, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), },
			{ id: 37, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), },
			{
				id: 38, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), },],
			},
			{ id: 39, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 40, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 41, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 42, natiId: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 43, natiId: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 44, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 45, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), },
			{ id: 46, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), },
			{ id: 47, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 48, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 49, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 50, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },],
			},
			{
				id: 51, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },],
			},
			{
				id: 52, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "alola", img: baseSprite("052-a"), imgS: shinySprite("052-a"), },],
			},
			{
				id: 53, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "alola", img: baseSprite("053-a"), imgS: shinySprite("053-a"), },],
			},
			{ id: 54, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 55, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 56, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{
				id: 57, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), },
					{ name: "alola", img: baseSprite("088-a"), imgS: shinySprite("088-a"), },],
			},
			{
				id: 58, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), },
					{ name: "alola", img: baseSprite("089-a"), imgS: shinySprite("089-a"), },],
			},
			{ id: 59, natiId: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), },
			{ id: 60, natiId: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), },
			{ id: 61, natiId: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 62, natiId: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{ id: 63, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{ id: 64, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), },
			{ id: 65, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), },
			{ id: 66, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 67, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },],
			},
			{ id: 68, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 69, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 70, natiId: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{ id: 71, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 72, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{ id: 73, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 74, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 75, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), },
			{ id: 76, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 77, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{
				id: 78, natiId: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), },],
			},
			{ id: 79, natiId: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), },
			{
				id: 80, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },],
			},
			{
				id: 81, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },],
			},
			{ id: 82, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 83, natiId: 714, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), },
			{ id: 84, natiId: 715, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), },
			{
				id: 85, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "alola", img: baseSprite("050-a"), imgS: shinySprite("050-a"), },],
			},
			{
				id: 86, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "alola", img: baseSprite("051-a"), imgS: shinySprite("051-a"), },],
			},
			{ id: 87, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 88, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 89, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), },
			{ id: 90, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), },
			{ id: 91, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), },
			{ id: 92, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), },
			{ id: 93, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 94, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 95, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 96, natiId: 701, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701), },
			{
				id: 97, name: "Oricorio", img: baseSprite("741-po"), imgS: shinySprite("741-po"), forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), },],
			},
			{ id: 98, natiId: 742, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), },
			{ id: 99, natiId: 743, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), },
			{
				id: 100, natiId: 669, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), },],
			},
			{
				id: 101, natiId: 670, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), },],
			},
			{
				id: 102, natiId: 671, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), },],
			},
			{ id: 103, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{ id: 104, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), },
			{ id: 105, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 106, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 107, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 108, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 109, natiId: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), },
			{ id: 110, natiId: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{
				id: 111, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },],
			},
			{
				id: 112, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },],
			},
			{ id: 113, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 114, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 115, natiId: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 116, natiId: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 117, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), },
			{ id: 118, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), },
			{ id: 119, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), },
			{ id: 120, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), },
			{ id: 121, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), },
			{ id: 122, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), },
			{ id: 123, natiId: 703, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), },
			{ id: 124, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 125, natiId: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), },
			{ id: 126, natiId: 744, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), },
			{
				id: 127, natiId: 745, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), },],
			},
			{ id: 128, natiId: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), },
			{ id: 129, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 130, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 131, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), },],
			},
			{
				id: 132, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), },],
			},
			{ id: 133, natiId: 746, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), },
			{ id: 134, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{ id: 135, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 136, natiId: 747, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), },
			{ id: 137, natiId: 748, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), },
			{ id: 138, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 139, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 140, natiId: 366, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), },
			{ id: 141, natiId: 367, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), },
			{ id: 142, natiId: 368, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), },
			{ id: 143, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), },
			{
				id: 144, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },],
			},
			{ id: 145, natiId: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), },
			{ id: 146, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), },
			{ id: 147, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 148, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 149, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{ id: 150, natiId: 785, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, },
		],
	},
});