const game = "sun";
const sub = game + "-poni";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (id) => _regionalDex(game + "-alola", id);
const melemeleDex = (id) => _regionalDex(game + "-melemele", id);
const akalaDex = (id) => _regionalDex(game + "-akala", id);
const ulaulaDex = (id) => _regionalDex(game + "-ulaula", id);
const poniDex = (id) => _regionalDex(game + "-poni", id);
const alolaDexForm = (id, form) => _regionalDex(game + "-alola", id, form);
const melemeleDexForm = (id, form) => _regionalDex(game + "-melemele", id, form);
const akalaDexForm = (id, form) => _regionalDex(game + "-akala", id, form);
const ulaulaDexForm = (id, form) => _regionalDex(game + "-ulaula", id, form);
const poniDexForm = (id, form) => _regionalDex(game + "-poni", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {},
	{
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
				id: 6, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15), akalaDex(6), ulaulaDex(6), alolaDex(15),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDexForm(15), akalaDexForm(6), ulaulaDexForm(6), alolaDexForm(15),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDexForm(15), akalaDexForm(6), ulaulaDexForm(6), alolaDexForm(15),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15), akalaDexForm(6), ulaulaDexForm(6), alolaDexForm(15),], },
				],
			},
			{
				id: 7, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDex(16), akalaDex(7), ulaulaDex(7), alolaDex(16),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16), akalaDexForm(7), ulaulaDexForm(7), alolaDexForm(16),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16), akalaDexForm(7), ulaulaDexForm(7), alolaDexForm(16),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16), akalaDexForm(7), ulaulaDexForm(7), alolaDexForm(16),], },
				],
			},
			{ id: 8, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(32), akalaDex(16), ulaulaDex(15), alolaDex(32),], },
			{ id: 9, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(33), akalaDex(17), ulaulaDex(16), alolaDex(33),], },
			{ id: 10, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(34), akalaDex(18), ulaulaDex(17), alolaDex(34),], },
			{ id: 11, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(40), akalaDex(19), ulaulaDex(21), alolaDex(40),], },
			{ id: 12, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(41), akalaDex(20), ulaulaDex(22), alolaDex(41),], },
			{ id: 13, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [melemeleDex(54), alolaDex(54),], },
			{
				id: 14, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDex(55), alolaDex(55),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDexForm(55), alolaDexForm(55),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [melemeleDexForm(55), alolaDexForm(55),], },
				],
			},
			{ id: 15, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [melemeleDex(56), alolaDex(56),], },
			{ id: 16, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [melemeleDex(57), alolaDex(57),], },
			{ id: 17, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(59), akalaDex(21), ulaulaDex(30), alolaDex(59),], },
			{ id: 18, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(60), akalaDex(22), ulaulaDex(31), alolaDex(60),], },
			{
				id: 19, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(68), akalaDex(26), ulaulaDex(35), alolaDex(68),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(68), akalaDexForm(26), ulaulaDexForm(35), alolaDexForm(68),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(68), akalaDexForm(26), ulaulaDexForm(35), alolaDexForm(68),], },
				],
			},
			{
				id: 20, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(69), akalaDex(27), ulaulaDex(36), alolaDex(69),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(69), akalaDexForm(27), ulaulaDexForm(36), alolaDexForm(69),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(69), akalaDexForm(27), ulaulaDexForm(36), alolaDexForm(69),], },
				],
			},
			{ id: 21, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(70), akalaDex(28), ulaulaDex(37), alolaDex(70),], },
			{
				id: 22, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(71), akalaDex(29), ulaulaDex(38), alolaDex(71),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(71), akalaDexForm(29), ulaulaDexForm(38), alolaDexForm(71),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(71), akalaDexForm(29), ulaulaDexForm(38), alolaDexForm(71),], },
				],
			},
			{
				id: 23, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(72), akalaDex(30), ulaulaDex(39), alolaDex(72),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(72), akalaDexForm(30), ulaulaDexForm(39), alolaDexForm(72),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(72), akalaDexForm(30), ulaulaDexForm(39), alolaDexForm(72),], },
				],
			},
			{ id: 24, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(73), ulaulaDex(40), alolaDex(73),], },
			{ id: 25, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(74), ulaulaDex(41), alolaDex(74),], },
			{ id: 26, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [melemeleDex(75), alolaDex(75),], },
			{ id: 27, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [melemeleDex(76), alolaDex(76),], },
			{ id: 28, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [melemeleDex(77), alolaDex(77),], },
			{ id: 29, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [melemeleDex(78), alolaDex(78),], },
			{ id: 30, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [melemeleDex(79), alolaDex(79),], },
			{ id: 31, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [melemeleDex(80), alolaDex(80),], },
			{
				id: 32, name: "Oricorio", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDex(82), akalaDex(31), ulaulaDex(42), alolaDex(82),], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), dexSync: [melemeleDexForm(82), akalaDexForm(31), ulaulaDexForm(42), alolaDexForm(82),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82), akalaDexForm(31), ulaulaDexForm(42), alolaDexForm(82),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82), akalaDexForm(31), ulaulaDexForm(42), alolaDexForm(82),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(82), akalaDexForm(31), ulaulaDexForm(42), alolaDexForm(82),], },
				],
			},
			{ id: 33, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(83), ulaulaDex(43), alolaDex(83),], },
			{ id: 34, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(84), ulaulaDex(44), alolaDex(84),], },
			{ id: 35, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(85), ulaulaDex(45), alolaDex(85),], },
			{ id: 36, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(86), ulaulaDex(46), alolaDex(86),], },
			{ id: 37, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(87), ulaulaDex(47), alolaDex(87),], },
			{ id: 38, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(88), ulaulaDex(48), alolaDex(88),], },
			{ id: 39, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(89), akalaDex(32), ulaulaDex(49), alolaDex(89),], },
			{ id: 40, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(90), akalaDex(33), ulaulaDex(50), alolaDex(90),], },
			{
				id: 41, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(91), akalaDex(34), ulaulaDex(51), alolaDex(91),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(91), akalaDexForm(34), ulaulaDexForm(51), alolaDexForm(91),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(91), akalaDexForm(34), ulaulaDexForm(51), alolaDexForm(91),], },
				],
			},
			{
				id: 42, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(92), akalaDex(35), ulaulaDex(52), alolaDex(92),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(92), akalaDexForm(35), ulaulaDexForm(52), alolaDexForm(92),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(92), akalaDexForm(35), ulaulaDexForm(52), alolaDexForm(92),], },
				],
			},
			{ id: 43, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(93), akalaDex(36), alolaDex(93),], },
			{ id: 44, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(94), akalaDex(37), alolaDex(94),], },
			{ id: 45, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [melemeleDex(95), alolaDex(95),], },
			{ id: 46, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [melemeleDex(96), alolaDex(96),], },
			{ id: 47, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [melemeleDex(97), alolaDex(97),], },
			{ id: 48, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [melemeleDex(98), alolaDex(98),], },
			{ id: 49, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [melemeleDex(99), alolaDex(99),], },
			{ id: 50, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [melemeleDex(100), alolaDex(100),], },
			{ id: 51, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [melemeleDex(101), alolaDex(101),], },
			{ id: 52, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [melemeleDex(102), alolaDex(102),], },
			{ id: 53, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [melemeleDex(103), alolaDex(103),], },
			{
				id: 54, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDex(104), alolaDex(104),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDexForm(104), alolaDexForm(104),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [melemeleDexForm(104), alolaDexForm(104),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [melemeleDexForm(104), alolaDexForm(104),], },
				],
			},
			{ id: 55, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(106), akalaDex(38), ulaulaDex(53), alolaDex(106),], },
			{ id: 56, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(107), akalaDex(39), ulaulaDex(54), alolaDex(107),], },
			{
				id: 57, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(108), akalaDex(40), ulaulaDex(55), alolaDex(108),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(108), akalaDexForm(40), ulaulaDexForm(55), alolaDexForm(108),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(108), akalaDexForm(40), ulaulaDexForm(55), alolaDexForm(108),], },
				],
			},
			{
				id: 58, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(109), akalaDex(41), ulaulaDex(56), alolaDex(109),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(109), akalaDexForm(41), ulaulaDexForm(56), alolaDexForm(109),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(109), akalaDexForm(41), ulaulaDexForm(56), alolaDexForm(109),], },
				],
			},
			{ id: 59, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(59), ulaulaDex(58), alolaDex(132),], },
			{ id: 60, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(60), ulaulaDex(59), alolaDex(133),], },
			{ id: 61, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [akalaDex(64), alolaDex(137),], },
			{ id: 62, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [akalaDex(65), alolaDex(138),], },
			{ id: 63, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [akalaDex(96), alolaDex(169),], },
			{ id: 64, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [akalaDex(97), alolaDex(170),], },
			{ id: 65, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [akalaDex(102), alolaDex(175),], },
			{ id: 66, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(105), ulaulaDex(74), alolaDex(178),], },
			{ id: 67, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(106), ulaulaDex(75), alolaDex(179),], },
			{ id: 68, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(107), ulaulaDex(76), alolaDex(180),], },
			{
				id: 69, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(108), ulaulaDex(77), alolaDex(181),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDexForm(108), ulaulaDexForm(77), alolaDexForm(181),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDexForm(108), ulaulaDexForm(77), alolaDexForm(181),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDexForm(108), ulaulaDexForm(77), alolaDexForm(181),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDexForm(108), ulaulaDexForm(77), alolaDexForm(181),], },
				],
			},
			{ id: 70, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [akalaDex(109), alolaDex(182),], },
			{ id: 71, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [akalaDex(110), alolaDex(183),], },
			{ id: 72, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [ulaulaDex(80), alolaDex(208),], },
			{ id: 73, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), dexSync: [alolaDex(258)], },
			{ id: 74, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), dexSync: [alolaDex(259)], },
			{
				id: 75, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [alolaDex(260)], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), dexSync: [alolaDexForm(260)], },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: [alolaDexForm(260)], },
				],
			},
			{
				id: 76, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [alolaDex(261)], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), dexSync: [alolaDexForm(261)], },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: [alolaDexForm(261)], },
				],
			},
			{
				id: 77, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), dexSync: [alolaDex(262)], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), dexSync: [alolaDexForm(262)], },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), dexSync: [alolaDexForm(262)], },
				],
			},
			{ id: 78, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), dexSync: [alolaDex(263)], },
			{ id: 79, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: [alolaDex(264)], },
			{ id: 80, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: [alolaDex(265)], },
			{ id: 81, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: [alolaDex(266)], },
			{ id: 82, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: [alolaDex(267)], },
			{ id: 83, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: [alolaDex(268)], },
			{ id: 84, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), dexSync: [alolaDex(269)], },
			{
				id: 85, name: "Exeggutor", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [alolaDex(270)], forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), dexSync: [alolaDexForm(270)], },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [alolaDexForm(270)], },
				],
			},
			{ id: 86, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), dexSync: [alolaDex(271)], },
			{ id: 87, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), dexSync: [alolaDex(272)], },
			{ id: 88, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), dexSync: [alolaDex(273)], },
			{ id: 89, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), dexSync: [alolaDex(274)], },
			{
				id: 90, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [alolaDex(275)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [alolaDexForm(275)], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [alolaDexForm(275)], },
				],
			},
			{
				id: 91, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [alolaDex(276)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [alolaDexForm(276)], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [alolaDexForm(276)], },
				],
			},
			{
				id: 92, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [alolaDex(277)], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: [alolaDexForm(277)], },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: [alolaDexForm(277)], },
				],
			},
			{ id: 93, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [alolaDex(278)], },
			{ id: 94, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [alolaDex(279)], },
			{ id: 95, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [alolaDex(280)], },
			{ id: 96, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: [alolaDex(281)], },
			{ id: 97, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: [alolaDex(282)], },
			{ id: 98, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: [alolaDex(283)], },
			{ id: 99, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), dexSync: [alolaDex(284)], },
			{ id: 100, name: "Tapu Fini", img: baseSprite(788), imgS: shinySprite(788), legendary: true, dexSync: [alolaDex(288)], }
		],
	},
});