const game = "sun";
const sub = game + "-ulaula";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (id) => _regionalDex(game + "-alola", "regional", id);
const melemeleDex = (id) => _regionalDex(game + "-melemele", "regional", id);
const akalaDex = (id) => _regionalDex(game + "-akala", "regional", id);
const ulaulaDex = (id) => _regionalDex(game + "-ulaula", "regional", id);
const poniDex = (id) => _regionalDex(game + "-poni", "regional", id);
const alolaDexForm = (id, form) => _regionalDex(game + "-alola", "regional", id, form);
const melemeleDexForm = (id, form) => _regionalDex(game + "-melemele", "regional", id, form);
const akalaDexForm = (id, form) => _regionalDex(game + "-akala", "regional", id, form);
const ulaulaDexForm = (id, form) => _regionalDex(game + "-ulaula", "regional", id, form);
const poniDexForm = (id, form) => _regionalDex(game + "-poni", "regional", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Ulaula Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [melemeleDex(10), akalaDex(1), alolaDex(10), poniDex(1),], },
			{ id: 2, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [melemeleDex(11), akalaDex(2), alolaDex(11), poniDex(2),], },
			{ id: 3, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [melemeleDex(12), akalaDex(3), alolaDex(12), poniDex(3),], },
			{ id: 4, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [melemeleDex(13), akalaDex(4), alolaDex(13), poniDex(4),], },
			{ id: 5, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [melemeleDex(14), akalaDex(5), alolaDex(14), poniDex(5),], },
			{
				id: 6, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15), akalaDex(6), alolaDex(15), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDexForm(15), akalaDexForm(6), alolaDexForm(15), poniDexForm(6),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDexForm(15), akalaDexForm(6), alolaDexForm(15), poniDexForm(6),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15), akalaDexForm(6), alolaDexForm(15), poniDexForm(6),], },
				],
			},
			{
				id: 7, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), akalaDex(7), alolaDex(16), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16), akalaDexForm(7), alolaDexForm(16), poniDexForm(7),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16), akalaDexForm(7), alolaDexForm(16), poniDexForm(7),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16), akalaDexForm(7), alolaDexForm(16), poniDexForm(7),], },
				],
			},
			{
				id: 8, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDex(20), alolaDex(20),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDexForm(20), alolaDexForm(20),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [melemeleDexForm(20), alolaDexForm(20),], },
				],
			},
			{
				id: 9, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDex(21), alolaDex(21),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDexForm(21), alolaDexForm(21),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [melemeleDexForm(21), alolaDexForm(21),], },
				],
			},
			{ id: 10, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [melemeleDex(22), alolaDex(22),], },
			{ id: 11, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [melemeleDex(23), alolaDex(23),], },
			{ id: 12, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(27), akalaDex(11), alolaDex(27),], },
			{ id: 13, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(28), akalaDex(12), alolaDex(28),], },
			{ id: 14, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(29), akalaDex(13), alolaDex(29),], },
			{ id: 15, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(32), akalaDex(16), alolaDex(32), poniDex(8),], },
			{ id: 16, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(33), akalaDex(17), alolaDex(32), poniDex(9),], },
			{ id: 17, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(34), akalaDex(18), alolaDex(32), poniDex(10),], },
			{ id: 18, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [melemeleDex(37), alolaDex(37),], },
			{ id: 19, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [melemeleDex(38), alolaDex(38),], },
			{ id: 20, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [melemeleDex(39), alolaDex(39),], },
			{ id: 21, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(40), akalaDex(19), alolaDex(40), poniDex(11),], },
			{ id: 22, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(41), akalaDex(20), alolaDex(41), poniDex(12),], },
			{
				id: 23, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDex(45), alolaDex(45),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [melemeleDexForm(45), alolaDexForm(45),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDexForm(45), alolaDexForm(45),], },
				],
			},
			{
				id: 24, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDex(46), alolaDex(46),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [melemeleDexForm(46), alolaDexForm(46),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDexForm(46), alolaDexForm(46),], },
				],
			},
			{ id: 25, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [melemeleDex(47), alolaDex(47),], },
			{ id: 26, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [melemeleDex(48), alolaDex(48),], },
			{ id: 27, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [melemeleDex(49), alolaDex(49),], },
			{
				id: 28, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDex(50), alolaDex(50),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [melemeleDexForm(50), alolaDexForm(50),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDexForm(50), alolaDexForm(50),], },
				],
			},
			{
				id: 29, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDex(51), alolaDex(51),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [melemeleDexForm(51), alolaDexForm(51),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDexForm(51), alolaDexForm(51),], },
				],
			},
			{ id: 30, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(59), akalaDex(21), alolaDex(59), poniDex(17),], },
			{ id: 31, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(60), akalaDex(22), alolaDex(60), poniDex(18),], },
			{ id: 32, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(61), akalaDex(23), alolaDex(61),], },
			{ id: 33, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(62), akalaDex(24), alolaDex(62),], },
			{ id: 34, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(63), akalaDex(25), alolaDex(63),], },
			{
				id: 35, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(68), akalaDex(26), alolaDex(68), poniDex(19),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(68), akalaDexForm(26), alolaDexForm(68), poniDexForm(19),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(68), akalaDexForm(26), alolaDexForm(68), poniDexForm(19),], },
				],
			},
			{
				id: 36, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(69), akalaDex(27), alolaDex(69), poniDex(20),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(69), akalaDexForm(27), alolaDexForm(69), poniDexForm(20),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(69), akalaDexForm(27), alolaDexForm(69), poniDexForm(20),], },
				],
			},
			{ id: 37, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(70), akalaDex(28), alolaDex(70), poniDex(21),], },
			{
				id: 38, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(71), akalaDex(29), alolaDex(71), poniDex(22),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(71), akalaDexForm(29), alolaDexForm(71), poniDexForm(22),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(71), akalaDexForm(29), alolaDexForm(71), poniDexForm(22),], },
				],
			},
			{
				id: 39, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(72), akalaDex(30), alolaDex(72), poniDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(72), akalaDexForm(30), alolaDexForm(72), poniDexForm(23),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(72), akalaDexForm(30), alolaDexForm(72), poniDexForm(23),], },
				],
			},
			{ id: 40, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(73), alolaDex(40), poniDex(73),], },
			{ id: 41, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(74), alolaDex(41), poniDex(74),], },
			{
				id: 42, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDex(82), akalaDex(31), alolaDex(82), poniDex(32),], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), dexSync: [melemeleDexForm(82), akalaDexForm(31), alolaDexForm(82), poniDexForm(32),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82), akalaDexForm(31), alolaDexForm(82), poniDexForm(32),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82), akalaDexForm(31), alolaDexForm(82), poniDexForm(32),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(82), akalaDexForm(31), alolaDexForm(82), poniDexForm(32),], },
				],
			},
			{ id: 43, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(83), alolaDex(83), poniDex(33),], },
			{ id: 44, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(84), alolaDex(84), poniDex(34),], },
			{ id: 45, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(85), alolaDex(85), poniDex(35),], },
			{ id: 46, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(86), alolaDex(86), poniDex(36),], },
			{ id: 47, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(87), alolaDex(87), poniDex(37),], },
			{ id: 48, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(88), alolaDex(88), poniDex(38),], },
			{ id: 49, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(89), akalaDex(89), alolaDex(49), poniDex(39),], },
			{ id: 50, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(90), akalaDex(33), alolaDex(90), poniDex(40),], },
			{
				id: 51, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(91), akalaDex(34), alolaDex(91), poniDex(41),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(91), akalaDexForm(34), alolaDexForm(91), poniDexForm(41),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(91), akalaDexForm(34), alolaDexForm(91), poniDexForm(41),], },
				],
			},
			{
				id: 52, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(92), akalaDex(35), alolaDex(92), poniDex(42),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(92), akalaDexForm(35), alolaDexForm(92), poniDexForm(42),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(92), akalaDexForm(35), alolaDexForm(92), poniDexForm(42),], },
				],
			},
			{ id: 53, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(106), akalaDex(38), alolaDex(106), poniDex(55),], },
			{ id: 54, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(107), akalaDex(39), alolaDex(107), poniDex(56),], },
			{
				id: 55, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(108), akalaDex(40), alolaDex(108), poniDex(57),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(108), akalaDexForm(40), alolaDexForm(108), poniDexForm(57),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(108), akalaDexForm(40), alolaDexForm(108), poniDexForm(57),], },
				],
			},
			{
				id: 56, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(109), akalaDex(41), alolaDex(109), poniDex(58),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(109), akalaDexForm(41), alolaDexForm(109), poniDexForm(58),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(109), akalaDexForm(41), alolaDexForm(109), poniDexForm(58),], },
				],
			},
			{ id: 57, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(110), akalaDex(42), alolaDex(110),], },
			{ id: 58, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(59), alolaDex(132), poniDex(59),], },
			{ id: 59, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(60), alolaDex(133), poniDex(60),], },
			{ id: 60, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [akalaDex(66), alolaDex(140),], },
			{ id: 61, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [akalaDex(67), alolaDex(141),], },
			{ id: 62, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [akalaDex(68), alolaDex(141),], },
			{ id: 63, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [akalaDex(69), alolaDex(142),], },
			{ id: 64, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [akalaDex(72), alolaDex(145),], },
			{ id: 65, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [akalaDex(73), alolaDex(146),], },
			{ id: 66, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [akalaDex(74), alolaDex(147),], },
			{ id: 67, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [akalaDex(75), alolaDex(148),], },
			{ id: 68, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [akalaDex(76), alolaDex(149),], },
			{ id: 69, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [akalaDex(77), alolaDex(150),], },
			{ id: 70, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [akalaDex(78), alolaDex(151),], },
			{
				id: 71, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDex(79), alolaDex(152),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDexForm(79), alolaDexForm(152),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [akalaDexForm(79), alolaDexForm(152),], },
				],
			},
			{
				id: 72, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDex(80), alolaDex(153),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDexForm(80), akalaDexForm(153),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [akalaDexForm(80), akalaDexForm(153),], },
				],
			},
			{
				id: 73, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDex(81), alolaDex(154),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDexForm(81), alolaDexForm(154),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [akalaDexForm(81), alolaDexForm(154),], },
				],
			},
			{ id: 74, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(105), alolaDex(178), poniDex(67),], },
			{ id: 75, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(106), alolaDex(179), poniDex(68),], },
			{ id: 76, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(107), alolaDex(180), poniDex(69),], },
			{
				id: 77, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(108), alolaDex(181), poniDex(69),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDexForm(108), alolaDexForm(181), poniDexForm(69),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDexForm(108), alolaDexForm(181), poniDexForm(69),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDexForm(108), alolaDexForm(181), poniDexForm(69),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDexForm(108), alolaDexForm(181), poniDexForm(69),], },
				],
			},
			{ id: 78, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: [alolaDex(206)], },
			{ id: 79, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: [alolaDex(207)], },
			{ id: 80, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [alolaDex(208), poniDex(72),], },
			{ id: 81, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: [alolaDex(209)], },
			{ id: 82, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [alolaDex(210)], },
			{ id: 83, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [alolaDex(211)], },
			{ id: 84, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [alolaDex(212)], },
			{
				id: 85, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), dexSync: [alolaDex(213)], forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), dexSync: [alolaDexForm(213)], },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), dexSync: [alolaDexForm(213)], },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), dexSync: [alolaDexForm(213)], },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), dexSync: [alolaDexForm(213)], },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), dexSync: [alolaDexForm(213)], },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), dexSync: [alolaDexForm(213)], },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), dexSync: [alolaDexForm(213)], },
				],
			},
			{ id: 86, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), dexSync: [alolaDex(214)], },
			{ id: 87, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), dexSync: [alolaDex(215)], },
			{ id: 88, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), dexSync: [alolaDex(216)], },
			{ id: 89, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), dexSync: [alolaDex(217)], },
			{ id: 90, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), dexSync: [alolaDex(218)], },
			{ id: 91, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), dexSync: [alolaDex(219)], },
			{ id: 92, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), dexSync: [alolaDex(220)], },
			{ id: 93, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), dexSync: [alolaDex(221)], },
			{ id: 94, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), dexSync: [alolaDex(222)], },
			{ id: 95, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [alolaDex(223)], },
			{ id: 96, name: "Turtonator", img: baseSprite(776), imgS: shinySprite(776), dexSync: [alolaDex(224)], },
			{ id: 97, name: "Togedemaru", img: baseSprite(777), imgS: shinySprite(777), dexSync: [alolaDex(225)], },
			{ id: 98, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), dexSync: [alolaDex(226)], },
			{ id: 99, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), dexSync: [alolaDex(227)], },
			{ id: 100, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), dexSync: [alolaDex(228)], },
			{
				id: 101, name: "Geodude", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [alolaDex(229)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [alolaDexForm(229)], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [alolaDexForm(229)], },
				],
			},
			{
				id: 102, name: "Graveler", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [alolaDex(230)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [alolaDexForm(230)], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [alolaDexForm(230)], },
				],
			},
			{
				id: 103, name: "Golem", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [alolaDex(231)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [alolaDexForm(231)], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [alolaDexForm(231)], },
				],
			},
			{ id: 104, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [alolaDex(232)], },
			{ id: 105, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [alolaDex(233)], },
			{ id: 106, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [alolaDex(234)], },
			{ id: 107, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: [alolaDex(235)], },
			{ id: 108, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: [alolaDex(236)], },
			{ id: 109, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: [alolaDex(237)], },
			{
				id: 110, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [alolaDex(238)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [alolaDexForm(238)], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [alolaDexForm(238)], },
				],
			},
			{
				id: 111, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [alolaDex(239)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [alolaDexForm(239)], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [alolaDexForm(239)], },
				],
			},
			{
				id: 112, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [alolaDex(240)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [alolaDexForm(240)], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [alolaDexForm(240)], },
				],
			},
			{ id: 113, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), dexSync: [alolaDex(241)], },
			{ id: 114, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [alolaDex(242)], },
			{ id: 115, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [alolaDex(243)], },
			{ id: 116, name: "Drampa", img: baseSprite(780), imgS: shinySprite(780), dexSync: [alolaDex(244)], },
			{ id: 117, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), dexSync: [alolaDex(245)], },
			{ id: 118, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [alolaDex(246)], },
			{ id: 119, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [alolaDex(247)], },
			{ id: 120, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [alolaDex(248)], },
			{
				id: 121, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [alolaDex(249)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [alolaDexForm(249)], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [alolaDexForm(249)], },
				],
			},
			{
				id: 122, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [alolaDex(250)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [alolaDexForm(250)], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [alolaDexForm(250)], },
				],
			},
			{
				id: 123, name: "Sandshrew", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [alolaDex(251)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [alolaDexForm(251)], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [alolaDexForm(251)], },
				],
			},
			{
				id: 124, name: "Sandslash", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [alolaDex(252)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [alolaDexForm(252)], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [alolaDexForm(252)], },
				],
			},
			{
				id: 125, name: "Vulpix", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [alolaDex(253)], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [alolaDexForm(253)], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [alolaDexForm(253)], },
				],
			},
			{
				id: 126, name: "Ninetales", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [alolaDex(254)], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [alolaDexForm(254)], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [alolaDexForm(254)], },
				],
			},
			{ id: 127, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [alolaDex(255)], },
			{ id: 128, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [alolaDex(256)], },
			{ id: 129, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [alolaDex(257)], },
			{ id: 130, name: "Tapu Bulu", img: baseSprite(787), imgS: shinySprite(787), legendary: true, dexSync: [alolaDex(287)], },
		],
	},
});