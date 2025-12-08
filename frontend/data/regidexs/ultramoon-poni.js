const game = "ultramoon";
const sub = game + "-poni";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (...args) => _dex(game + "-alola", "regional", ...args);
const melemeleDex = (...args) => _dex(game + "-melemele", "regional", ...args);
const akalaDex = (...args) => _dex(game + "-akala", "regional", ...args);
const ulaulaDex = (...args) => _dex(game + "-ulaula", "regional", ...args);
const poniDex = (...args) => _dex(game + "-poni", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Poni Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [melemeleDex(10), akalaDex(1), ulaulaDex(1), alolaDex(10),], },
			{ id: 2, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [melemeleDex(11), akalaDex(2), ulaulaDex(2), alolaDex(11),], },
			{ id: 3, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [melemeleDex(12), akalaDex(3), ulaulaDex(3), alolaDex(12),], },
			{ id: 4, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [melemeleDex(13), akalaDex(4), ulaulaDex(4), alolaDex(13),], },
			{ id: 5, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [melemeleDex(14), akalaDex(5), ulaulaDex(5), alolaDex(14),], },
			{
				id: 6, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDex(15), akalaDex(6), ulaulaDex(6), alolaDex(15),
				], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDex(15, "Kantonian Male"), akalaDex(6, "Kantonian Male"), ulaulaDex(6, "Kantonian Male"), alolaDex(15, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDex(15, "Kantonian Female"), akalaDex(6, "Kantonian Female"), ulaulaDex(6, "Kantonian Female"), alolaDex(15, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15, "Alolan"), akalaDex(6, "Alolan"), ulaulaDex(6, "Alolan"), alolaDex(15, "Alolan"),], },
				],
			},
			{
				id: 7, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDex(16), akalaDex(7), ulaulaDex(7), alolaDex(16),
				], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDex(16, "Kantonian Male"), akalaDex(7, "Kantonian Male"), ulaulaDex(7, "Kantonian Male"), alolaDex(16, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDex(16, "Kantonian Female"), akalaDex(7, "Kantonian Female"), ulaulaDex(7, "Kantonian Female"), alolaDex(16, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16, "Alolan"), akalaDex(7, "Alolan"), ulaulaDex(7, "Alolan"), alolaDex(16, "Alolan"),], },
				],
			},
			{ id: 8, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), dexSync: [melemeleDex(24), alolaDex(24),], },
			{ id: 9, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), dexSync: [melemeleDex(25), alolaDex(25),], },
			{ id: 10, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), dexSync: [melemeleDex(26), alolaDex(26),], },
			{ id: 11, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), dexSync: [melemeleDex(27), alolaDex(27),], },
			{ id: 12, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), dexSync: [melemeleDex(28), alolaDex(28),], },
			{ id: 13, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), dexSync: [melemeleDex(29), alolaDex(29),], },
			{
				id: 14, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), dexSync: [melemeleDex(30), alolaDex(30),
				], forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), dexSync: [melemeleDex(30, "Natural Trim"), alolaDex(30, "Natural Trim"),], },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), dexSync: [melemeleDex(30, "Heart Trim"), alolaDex(30, "Heart Trim"),], },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), dexSync: [melemeleDex(30, "Star Trim"), alolaDex(30, "Star Trim"),], },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), dexSync: [melemeleDex(30, "Diamond Trim"), alolaDex(30, "Diamond Trim"),], },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), dexSync: [melemeleDex(30, "Debutante Trim"), alolaDex(30, "Debutante Trim"),], },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), dexSync: [melemeleDex(30, "Matron Trim"), alolaDex(30, "Matron Trim"),], },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), dexSync: [melemeleDex(30, "Dandy Trim"), alolaDex(30, "Dandy Trim"),], },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), dexSync: [melemeleDex(30, "Le Reine Trim"), alolaDex(30, "Le Reine Trim"),], },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), dexSync: [melemeleDex(30, "Kabuki Trim"), alolaDex(30, "Kabuki Trim"),], },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), dexSync: [melemeleDex(30, "Pharaoh Trim"), alolaDex(30, "Pharaoh Trim"),], },
				],
			},
			{ id: 15, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(39), akalaDex(15), ulaulaDex(15), alolaDex(39),], },
			{ id: 16, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(40), akalaDex(16), ulaulaDex(16), alolaDex(40),], },
			{ id: 17, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(41), akalaDex(17), ulaulaDex(17), alolaDex(41),], },
			{ id: 18, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(47), akalaDex(19), ulaulaDex(21), alolaDex(47),], },
			{ id: 19, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(48), akalaDex(20), ulaulaDex(22), alolaDex(48),], },
			{ id: 20, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [melemeleDex(66), alolaDex(66),], },
			{
				id: 21, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDex(67), alolaDex(67),
				], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDex(67, "Male"), alolaDex(67, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [melemeleDex(67, "Female"), alolaDex(67, "Female"),], },
				],
			},
			{ id: 22, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [melemeleDex(68), alolaDex(68),], },
			{ id: 23, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [melemeleDex(69), alolaDex(69),], },
			{ id: 24, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(71), akalaDex(21), ulaulaDex(30), alolaDex(71),], },
			{ id: 25, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(72), akalaDex(22), ulaulaDex(31), alolaDex(72),], },
			{
				id: 26, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(80), akalaDex(26), ulaulaDex(35), alolaDex(80),
				], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(80, "Male"), akalaDex(26, "Male"), ulaulaDex(35, "Male"), alolaDex(80, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDex(80, "Female"), akalaDex(26, "Female"), ulaulaDex(35, "Female"), alolaDex(80, "Female"),], },
				],
			},
			{
				id: 27, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(81), akalaDex(27), ulaulaDex(36), alolaDex(81),
				], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(81, "Male"), akalaDex(27, "Male"), ulaulaDex(36, "Male"), alolaDex(81, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDex(81, "Female"), akalaDex(27, "Female"), ulaulaDex(36, "Female"), alolaDex(81, "Female"),], },
				],
			},
			{ id: 28, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(82), akalaDex(28), ulaulaDex(37), alolaDex(82),], },
			{ id: 29, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [melemeleDex(83), alolaDex(83),], },
			{ id: 30, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [melemeleDex(84), alolaDex(84),], },
			{
				id: 31, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(85), akalaDex(29), ulaulaDex(38), alolaDex(85),
				], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(85, "Kantonian"), akalaDex(29, "Kantonian"), ulaulaDex(38, "Kantonian"), alolaDex(85, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(85, "Alolan"), akalaDex(29, "Alolan"), ulaulaDex(38, "Alolan"), alolaDex(85, "Alolan"),], },
				],
			},
			{
				id: 32, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(86), akalaDex(30), ulaulaDex(39), alolaDex(86),
				], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(86, "Kantonian"), akalaDex(30, "Kantonian"), ulaulaDex(39, "Kantonian"), alolaDex(86, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(86, "Alolan"), akalaDex(30, "Alolan"), ulaulaDex(39, "Alolan"), alolaDex(86, "Alolan"),], },
				],
			},
			{ id: 33, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(87), ulaulaDex(40), alolaDex(87),], },
			{ id: 34, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(88), ulaulaDex(41), alolaDex(88),], },
			{ id: 35, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [melemeleDex(89), alolaDex(89),], },
			{ id: 36, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [melemeleDex(90), alolaDex(90),], },
			{ id: 37, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [melemeleDex(91), alolaDex(91),], },
			{ id: 38, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [melemeleDex(92), alolaDex(92),], },
			{ id: 39, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [melemeleDex(93), alolaDex(93),], },
			{ id: 40, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [melemeleDex(94), alolaDex(94),], },
			{
				id: 41, name: "Oricorio", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDex(97), akalaDex(31), ulaulaDex(42), alolaDex(97),
				], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDex(97, "Baile Style"), akalaDex(31, "Baile Style"), ulaulaDex(42, "Baile Style"), alolaDex(97, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDex(97, "Pa'u Style"), akalaDex(31, "Pa'u Style"), ulaulaDex(42, "Pa'u Style"), alolaDex(97, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [melemeleDex(97, "Pom-Pom Style"), akalaDex(31, "Pom-Pom Style"), ulaulaDex(42, "Pom-Pom Style"), alolaDex(97, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDex(97, "Sensu Style"), akalaDex(31, "Sensu Style"), ulaulaDex(42, "Sensu Style"), alolaDex(97, "Sensu Style"),], },
				],
			},
			{ id: 42, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(98), ulaulaDex(43), alolaDex(98),], },
			{ id: 43, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(99), ulaulaDex(44), alolaDex(99),], },
			{
				id: 44, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDex(100), ulaulaDex(45), alolaDex(100),
				], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDex(100, "Red Flower"), ulaulaDex(45, "Red Flower"), alolaDex(100, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), dexSync: [melemeleDex(100, "Orange Flower"), ulaulaDex(45, "Orange Flower"), alolaDex(100, "Orange Flowerale"),], },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), dexSync: [melemeleDex(100, "Yellow Flower"), ulaulaDex(45, "Yellow Flower"), alolaDex(100, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), dexSync: [melemeleDex(100, "Blue Flower"), ulaulaDex(45, "Blue Flower"), alolaDex(44, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), dexSync: [melemeleDex(100, "White Flower"), ulaulaDex(45, "White Flower"), alolaDex(100, "White Flower"),], },
				],
			},
			{
				id: 45, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDex(101), ulaulaDex(46), alolaDex(101),
				], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDex(101, "Red Flower"), ulaulaDex(46, "Red Flower"), alolaDex(101, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), dexSync: [melemeleDex(101, "Orange Flower"), ulaulaDex(46, "Orange Flower"), alolaDex(101, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), dexSync: [melemeleDex(101, "Yellow Flower"), ulaulaDex(46, "Yellow Flower"), alolaDex(101, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), dexSync: [melemeleDex(101, "Blue Flower"), ulaulaDex(46, "Blue Flower"), alolaDex(101, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), dexSync: [melemeleDex(101, "White Flower"), ulaulaDex(46, "White Flower"), alolaDex(101, "White Flower"),], },
				],
			},
			{
				id: 46, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDex(102), ulaulaDex(47), alolaDex(102),
				], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDex(102, "Red Flower"), ulaulaDex(47, "Red Flower"), alolaDex(102, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), dexSync: [melemeleDex(102, "Orange Flower"), ulaulaDex(47, "Orange Flower"), alolaDex(102, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), dexSync: [melemeleDex(102, "Yellow Flower"), ulaulaDex(47, "Yellow Flower"), alolaDex(102, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), dexSync: [melemeleDex(102, "Blue Flower"), ulaulaDex(47, "Blue Flower"), alolaDex(102, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), dexSync: [melemeleDex(102, "White Flower"), ulaulaDex(47, "White Flower"), alolaDex(102, "White Flower"),], },
				],
			},
			{ id: 47, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(103), ulaulaDex(48), alolaDex(103),], },
			{ id: 48, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(104), ulaulaDex(49), alolaDex(104),], },
			{ id: 49, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(105), ulaulaDex(50), alolaDex(105),], },
			{ id: 50, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(106), ulaulaDex(51), alolaDex(106),], },
			{ id: 51, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(107), akalaDex(32), ulaulaDex(52), alolaDex(107),], },
			{ id: 52, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(108), akalaDex(33), ulaulaDex(53), alolaDex(108),], },
			{
				id: 53, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(111), akalaDex(34), ulaulaDex(54), alolaDex(111),
				], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(111, "Male"), akalaDex(34, "Male"), ulaulaDex(54, "Male"), alolaDex(111, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDex(111, "Female"), akalaDex(34, "Female"), ulaulaDex(54, "Female"), alolaDex(111, "Female"),], },
				],
			},
			{
				id: 54, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(112), akalaDex(35), ulaulaDex(55), alolaDex(112),
				], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(112, "Male"), akalaDex(35, "Male"), ulaulaDex(55, "Male"), alolaDex(112, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDex(112, "Female"), akalaDex(35, "Female"), ulaulaDex(55, "Female"), alolaDex(112, "Female"),], },
				],
			},
			{ id: 55, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(113), akalaDex(36), ulaulaDex(1000), alolaDex(113),], },
			{ id: 56, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(114), akalaDex(37), alolaDex(114),], },
			{ id: 57, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [melemeleDex(117), alolaDex(117),], },
			{ id: 58, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [melemeleDex(118), alolaDex(118),], },
			{ id: 59, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [melemeleDex(119), alolaDex(119),], },
			{ id: 60, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [melemeleDex(120), alolaDex(120),], },
			{ id: 61, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [melemeleDex(121), alolaDex(121),], },
			{ id: 62, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [melemeleDex(122), alolaDex(122),], },
			{ id: 63, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [melemeleDex(123), alolaDex(123),], },
			{ id: 64, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [melemeleDex(124), alolaDex(124),], },
			{ id: 65, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [melemeleDex(126), alolaDex(126),], },
			{
				id: 66, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDex(127), alolaDex(127),
				], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDex(127, "Midday"), alolaDex(127, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [melemeleDex(127, "Midnight"), alolaDex(127, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [melemeleDex(127, "Dusk"), alolaDex(127, "Dusk"),], },
				],
			},
			{ id: 67, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(129), akalaDex(38), ulaulaDex(56), alolaDex(129),], },
			{ id: 68, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(130), akalaDex(39), ulaulaDex(57), alolaDex(130),], },
			{
				id: 69, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(131), akalaDex(40), ulaulaDex(58), alolaDex(131),
				], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(131, "Male"), akalaDex(40, "Male"), ulaulaDex(58, "Male"), alolaDex(131, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDex(131, "Female"), akalaDex(40, "Female"), ulaulaDex(58, "Female"), alolaDex(131, "Female"),], },
				],
			},
			{
				id: 70, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(132), akalaDex(41), ulaulaDex(59), alolaDex(132),
				], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(132, "Male"), akalaDex(41, "Male"), ulaulaDex(59, "Male"), alolaDex(132, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDex(132, "Female"), akalaDex(41, "Female"), ulaulaDex(59, "Female"), alolaDex(132, "Female"),], },
				],
			},
			{ id: 71, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(66), ulaulaDex(64), alolaDex(165),], },
			{ id: 72, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(67), ulaulaDex(166), alolaDex(72),], },
			{ id: 73, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [akalaDex(71), alolaDex(170),], },
			{ id: 74, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [akalaDex(72), alolaDex(171),], },
			{
				id: 75, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDex(89), ulaulaDex(80), alolaDex(188),
				], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDex(89, "Blue-Striped"), ulaulaDex(80, "Blue-Striped"), alolaDex(188, "Blue-Striped"),], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [akalaDex(89, "Red-Striped"), ulaulaDex(80, "Red-Striped"), alolaDex(188, "Red-Striped"),], },
				],
			},
			{ id: 76, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [akalaDex(106), alolaDex(205),], },
			{ id: 77, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [akalaDex(107), alolaDex(206),], },
			{ id: 78, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [akalaDex(112), alolaDex(211),], },
			{ id: 79, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(118), ulaulaDex(81), alolaDex(217),], },
			{ id: 80, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(119), ulaulaDex(82), alolaDex(218),], },
			{ id: 81, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(120), ulaulaDex(83), alolaDex(219),], },
			{
				id: 82, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(121), ulaulaDex(84), alolaDex(220),
				], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(121, "Normal"), ulaulaDex(84, "Normal"), alolaDex(220, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDex(121, "Rainy"), ulaulaDex(84, "Rainy"), alolaDex(220, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDex(121, "Snowy"), ulaulaDex(84, "Snowy"), alolaDex(220, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDex(121, "Sunny"), ulaulaDex(84, "Sunny"), alolaDex(220, "Sunny"),], },
				],
			},
			{ id: 83, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [akalaDex(122), alolaDex(221),], },
			{ id: 84, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [akalaDex(123), alolaDex(222),], },
			{ id: 85, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [ulaulaDex(91), alolaDex(270),], },
			{ id: 86, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), dexSync: [alolaDex(339)], },
			{ id: 87, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), dexSync: [alolaDex(340)], },
			{
				id: 88, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [alolaDex(341)], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), dexSync: [alolaDex(341, "West Sea")], },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: [alolaDex(341, "East Sea")], },
				],
			},
			{
				id: 89, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [alolaDex(342)], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), dexSync: [alolaDex(342, "West Sea")], },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: [alolaDex(342, "East Sea")], },
				],
			},
			{
				id: 90, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), dexSync: [alolaDex(343)], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), dexSync: [alolaDex(343, "Male")], },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), dexSync: [alolaDex(343, "Female")], },
				],
			},
			{ id: 91, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), dexSync: [alolaDex(344)], },
			{ id: 92, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: [alolaDex(345)], },
			{ id: 93, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: [alolaDex(346)], },
			{ id: 94, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), dexSync: [alolaDex(347)], },
			{ id: 95, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), dexSync: [alolaDex(348)], },
			{ id: 96, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), dexSync: [alolaDex(349)], },
			{ id: 97, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), dexSync: [alolaDex(350)], },
			{ id: 98, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: [alolaDex(351)], },
			{ id: 99, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: [alolaDex(352)], },
			{ id: 100, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: [alolaDex(353)], },
			{ id: 101, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), dexSync: [alolaDex(354)], },
			{ id: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), dexSync: [alolaDex(355)], },
			{
				id: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), dexSync: [alolaDex(356)], forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), dexSync: [alolaDex(356, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [alolaDex(356, "Alolan")], },
				],
			},
			{ id: 104, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), dexSync: [alolaDex(357)], },
			{ id: 105, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), dexSync: [alolaDex(358)], },
			{ id: 106, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), dexSync: [alolaDex(359)], },
			{ id: 107, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), dexSync: [alolaDex(360)], },
			{ id: 108, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), dexSync: [alolaDex(361)], },
			{ id: 109, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), dexSync: [alolaDex(362)], },
			{ id: 110, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), dexSync: [alolaDex(363)], },
			{ id: 111, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), dexSync: [alolaDex(364)], },
			{
				id: 112, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [alolaDex(365)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [alolaDex(365, "Male")], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [alolaDex(365, "Female")], },
				],
			},
			{
				id: 113, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [alolaDex(366)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [alolaDex(366, "Male")], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [alolaDex(366, "Female")], },
				],
			},
			{
				id: 114, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [alolaDex(367)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: [alolaDex(367, "Male")], },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: [alolaDex(367, "Female")], },
				],
			},
			{
				id: 115, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), dexSync: [alolaDex(368)], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), dexSync: [alolaDex(368, "Male")], },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), dexSync: [alolaDex(368, "Female")], },
				],
			},
			{
				id: 116, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), dexSync: [alolaDex(369)], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), dexSync: [alolaDex(369, "Male")], },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), dexSync: [alolaDex(369, "Female")], },
				],
			},
			{ id: 117, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), dexSync: [alolaDex(370)], },
			{
				id: 118, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), dexSync: [alolaDex(371)], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), dexSync: [alolaDex(371, "Male")], },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), dexSync: [alolaDex(371, "Female")], },
				],
			},
			{ id: 119, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: [alolaDex(372)], },
			{ id: 120, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: [alolaDex(373)], },
			{ id: 121, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: [alolaDex(374)], },
			{ id: 122, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), dexSync: [alolaDex(375)], },
			{ id: 123, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), dexSync: [alolaDex(376)], },
			{ id: 124, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [alolaDex(377)], },
			{ id: 125, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [alolaDex(378)], },
			{ id: 126, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: [alolaDex(379)], },
			{ id: 127, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: [alolaDex(380)], },
			{ id: 128, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: [alolaDex(381)], },
			{ id: 129, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), dexSync: [alolaDex(382)], },
			{
				id: 130, name: "Tapu Fini", img: baseSprite(788), imgS: shinySprite(788), legendary: true, dexSync: [alolaDex(386)],
			}
		],
	},
});