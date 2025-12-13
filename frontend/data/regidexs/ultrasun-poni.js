const game = "ultrasun";
const sub = game + "-poni";
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Poni Dex",
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
				id: 6, natiId: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), tags: ["alolan"], },
				],
			},
			{
				id: 7, natiId: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), tags: ["alolan"], },
				],
			},
			{ id: 8, natiId: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 9, natiId: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), tags: ["mega"], },
			{ id: 10, natiId: 686, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), },
			{ id: 11, natiId: 687, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), },
			{ id: 12, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), },
			{ id: 13, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), },
			{
				id: 14, natiId: 676, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), tags: ["other"], forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), },
				],
			},
			{ id: 15, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 16, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 17, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 18, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 19, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 20, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 21, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), },
				],
			},
			{ id: 22, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 23, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 24, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 25, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{
				id: 26, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 27, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 28, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 29, natiId: 714, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), },
			{ id: 30, natiId: 715, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), },
			{
				id: 31, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), tags: ["alolan"], },
				],
			},
			{
				id: 32, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), tags: ["alolan"], },
				],
			},
			{ id: 33, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), },
			{ id: 34, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), },
			{ id: 35, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), },
			{ id: 36, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), },
			{ id: 37, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), },
			{ id: 38, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), },
			{ id: 39, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 40, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{
				id: 41, natiId: 741, name: "Oricorio", img: baseSprite("741-s"), imgS: shinySprite("741-s"), tags: ["other"], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), },
				],
			},
			{ id: 42, natiId: 742, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), },
			{ id: 43, natiId: 743, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), },
			{
				id: 44, natiId: 669, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), },
				],
			},
			{
				id: 45, natiId: 670, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), },
				],
			},
			{
				id: 46, natiId: 671, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), },
				],
			},
			{ id: 47, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{ id: 48, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), },
			{ id: 49, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 50, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 51, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 52, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{
				id: 53, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 54, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 55, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 56, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 57, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), },
			{ id: 58, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), },
			{ id: 59, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), },
			{ id: 60, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), },
			{ id: 61, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), },
			{ id: 62, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), },
			{ id: 63, natiId: 703, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), },
			{ id: 64, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 65, natiId: 744, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), },
			{
				id: 66, natiId: 745, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), tags: ["other", "zcrystal"], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), },
				],
			},
			{ id: 67, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 68, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 69, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), },
				],
			},
			{
				id: 70, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), },
				],
			},
			{ id: 71, natiId: 749, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), },
			{ id: 72, natiId: 750, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), },
			{ id: 73, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{ id: 74, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{
				id: 75, natiId: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), tags: ["other"], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), },
				],
			},
			{ id: 76, natiId: 759, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), },
			{ id: 77, natiId: 760, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), },
			{ id: 78, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{ id: 79, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), tags: ["pseudo"], },
			{ id: 80, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), tags: ["pseudo"], },
			{ id: 81, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), tags: ["pseudo"], },
			{
				id: 82, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 83, natiId: 767, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), },
			{ id: 84, natiId: 768, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), },
			{ id: 85, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 86, natiId: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 87, natiId: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{
				id: 88, natiId: 422, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), tags: ["other"], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), },
				],
			},
			{
				id: 89, natiId: 423, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), tags: ["other"], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), },
				],
			},
			{
				id: 90, natiId: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				],
			},
			{ id: 91, natiId: 781, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), },
			{ id: 92, natiId: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 93, natiId: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 94, natiId: 690, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), },
			{ id: 95, natiId: 691, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), },
			{ id: 96, natiId: 692, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), },
			{ id: 97, natiId: 693, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), },
			{ id: 98, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 99, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{ id: 100, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{ id: 101, natiId: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 102, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 103, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), tags: ["alolan"], },
				],
			},
			{ id: 104, natiId: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 105, natiId: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 106, natiId: 619, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), },
			{ id: 107, natiId: 620, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), },
			{ id: 108, natiId: 782, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), tags: ["pseudo"], },
			{ id: 109, natiId: 783, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), tags: ["pseudo"], },
			{ id: 110, natiId: 784, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), tags: ["pseudo", "zcrystal"], },
			{ id: 111, natiId: 587, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), },
			{
				id: 112, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				],
			},
			{
				id: 113, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				],
			},
			{
				id: 114, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				],
			},
			{
				id: 115, natiId: 190, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), },
				],
			},
			{
				id: 116, natiId: 424, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), },
				],
			},
			{ id: 117, natiId: 667, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), },
			{
				id: 118, natiId: 668, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), },
				],
			},
			{ id: 119, natiId: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{ id: 120, natiId: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{ id: 121, natiId: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), },
			{ id: 122, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 123, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{ id: 124, natiId: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), },
			{ id: 125, natiId: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), tags: ["mega"], },
			{ id: 126, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["pseudo"], },
			{ id: 127, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["pseudo"], },
			{ id: 128, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["pseudo"], },
			{ id: 129, natiId: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), tags: ["fossil", "mega"], },
			{ id: 130, natiId: 788, name: "Tapu Fini", img: baseSprite(788), imgS: shinySprite(788), tags: ["zcrystal", "legendary"], }
		],
	},
});