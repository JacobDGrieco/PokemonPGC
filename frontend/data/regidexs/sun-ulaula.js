const game = "sun";
const sub = game + "-ulaula";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (...args) => _dex(game + "-alola", "regional", ...args);
const melemeleDex = (...args) => _dex(game + "-melemele", "regional", ...args);
const akalaDex = (...args) => _dex(game + "-akala", "regional", ...args);
const ulaulaDex = (...args) => _dex(game + "-ulaula", "regional", ...args);
const poniDex = (...args) => _dex(game + "-poni", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Ulaula Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 731, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), },
			{ id: 2, natiId: 732, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), },
			{ id: 3, natiId: 733, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), },
			{ id: 4, natiId: 734, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), },
			{ id: 5, natiId: 735, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), },
			{
				id: 6, natiId: 19, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), },
				],
			},
			{
				id: 7, natiId: 20, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), },
				],
			},
			{
				id: 8, natiId: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), },
				],
			},
			{
				id: 9, natiId: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), },
				],
			},
			{ id: 10, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 11, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 12, natiId: 736, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), },
			{ id: 13, natiId: 737, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), },
			{ id: 14, natiId: 738, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), },
			{ id: 15, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 16, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 17, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 18, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), },
			{ id: 19, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), },
			{ id: 20, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), },
			{ id: 21, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 22, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{
				id: 23, natiId: 52, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), },
				],
			},
			{
				id: 24, natiId: 53, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), },
				],
			},
			{ id: 25, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 26, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 27, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{
				id: 28, natiId: 88, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), },
				],
			},
			{
				id: 29, natiId: 89, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), },
				],
			},
			{ id: 30, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 31, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{ id: 32, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 33, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 34, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), },
			{
				id: 35, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 36, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 37, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{
				id: 38, natiId: 50, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), },
				],
			},
			{
				id: 39, natiId: 51, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), },
				],
			},
			{ id: 40, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 41, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{
				id: 42, natiId: 741, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), },
				],
			},
			{ id: 43, natiId: 742, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), },
			{ id: 44, natiId: 743, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), },
			{ id: 45, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{ id: 46, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), },
			{ id: 47, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 48, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 49, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 50, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{
				id: 51, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 52, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 53, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 54, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 55, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), },
				],
			},
			{
				id: 56, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), },
				],
			},
			{ id: 57, natiId: 746, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), },
			{ id: 58, natiId: 749, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), },
			{ id: 59, natiId: 750, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), },
			{ id: 60, natiId: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 61, natiId: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{ id: 62, natiId: 751, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), },
			{ id: 63, natiId: 752, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), },
			{ id: 64, natiId: 755, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), },
			{ id: 65, natiId: 756, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), },
			{ id: 66, natiId: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), },
			{ id: 67, natiId: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), },
			{ id: 68, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 69, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 70, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{
				id: 71, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{
				id: 72, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 73, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{ id: 74, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), },
			{ id: 75, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), },
			{ id: 76, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), },
			{
				id: 77, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 78, natiId: 568, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), },
			{ id: 79, natiId: 569, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), },
			{ id: 80, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 81, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{ id: 82, natiId: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), },
			{ id: 83, natiId: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 84, natiId: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{
				id: 85, natiId: 774, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), },
				],
			},
			{ id: 86, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), },
			{ id: 87, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), },
			{ id: 88, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), },
			{ id: 89, natiId: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 90, natiId: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 91, natiId: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 92, natiId: 674, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), },
			{ id: 93, natiId: 675, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), },
			{ id: 94, natiId: 775, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), },
			{ id: 95, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 96, natiId: 776, name: "Turtonator", img: baseSprite(776), imgS: shinySprite(776), },
			{ id: 97, natiId: 777, name: "Togedemaru", img: baseSprite(777), imgS: shinySprite(777), },
			{ id: 98, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 99, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 100, natiId: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{
				id: 101, natiId: 74, name: "Geodude", img: baseSprite("074-a"), imgS: shinySprite("074-a"), forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), },
				],
			},
			{
				id: 102, natiId: 75, name: "Graveler", img: baseSprite("075-a"), imgS: shinySprite("075-a"), forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), },
				],
			},
			{
				id: 103, natiId: 76, name: "Golem", img: baseSprite("076-a"), imgS: shinySprite("076-a"), forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), },
				],
			},
			{ id: 104, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), },
			{ id: 105, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), },
			{ id: 106, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), },
			{ id: 107, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 108, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 109, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{
				id: 110, natiId: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), },
				],
			},
			{
				id: 111, natiId: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), },
				],
			},
			{
				id: 112, natiId: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },
				],
			},
			{ id: 113, natiId: 707, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), },
			{ id: 114, natiId: 778, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), },
			{ id: 115, natiId: 779, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), },
			{ id: 116, natiId: 780, name: "Drampa", img: baseSprite(780), imgS: shinySprite(780), },
			{ id: 117, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), },
			{ id: 118, natiId: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 119, natiId: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), },
			{ id: 120, natiId: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{
				id: 121, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				],
			},
			{
				id: 122, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), },
				],
			},
			{
				id: 123, natiId: 27, name: "Sandshrew", img: baseSprite("027-a"), imgS: shinySprite("027-a"), forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), },
				],
			},
			{
				id: 124, natiId: 28, name: "Sandslash", img: baseSprite("028-a"), imgS: shinySprite("028-a"), forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), },
				],
			},
			{
				id: 125, natiId: 37, name: "Vulpix", img: baseSprite("037-a"), imgS: shinySprite("037-a"), forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), },
				],
			},
			{
				id: 126, natiId: 38, name: "Ninetales", img: baseSprite("038-a"), imgS: shinySprite("038-a"), forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), },
				],
			},
			{ id: 127, natiId: 582, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), },
			{ id: 128, natiId: 583, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), },
			{ id: 129, natiId: 584, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), },
			{ id: 130, natiId: 787, name: "Tapu Bulu", img: baseSprite(787), imgS: shinySprite(787), legendary: true, },
		],
	},
});