const game = "sun";
const sub = game + "-akala";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (...args) => _dex(game + "-alola", "regional", ...args);
const melemeleDex = (...args) => _dex(game + "-melemele", "regional", ...args);
const akalaDex = (...args) => _dex(game + "-akala", "regional", ...args);
const ulaulaDex = (...args) => _dex(game + "-ulaula", "regional", ...args);
const poniDex = (...args) => _dex(game + "-poni", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Akala Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [melemeleDex(10), alolaDex(10), ulaulaDex(1), poniDex(1),], },
			{ id: 2, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [melemeleDex(11), alolaDex(11), ulaulaDex(2), poniDex(2),], },
			{ id: 3, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [melemeleDex(12), alolaDex(12), ulaulaDex(3), poniDex(3),], },
			{ id: 4, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [melemeleDex(13), alolaDex(13), ulaulaDex(4), poniDex(4),], },
			{ id: 5, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [melemeleDex(14), alolaDex(14), ulaulaDex(5), poniDex(5),], },
			{
				id: 6, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15), alolaDex(15), ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDex(15, "Kantonian Male"), alolaDex(15, "Kantonian Male"), ulaulaDex(6, "Kantonian Male"), poniDex(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDex(15, "Kantonian Female"), alolaDex(15, "Kantonian Female"), ulaulaDex(6, "Kantonian Female"), poniDex(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15, "Alolan"), alolaDex(15, "Alolan"), ulaulaDex(6, "Alolan"), poniDex(6, "Alolan"),], },
				],
			},
			{
				id: 7, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), alolaDex(16), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDex(16, "Kantonian Male"), alolaDex(16, "Kantonian Male"), ulaulaDex(7, "Kantonian Male"), poniDex(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDex(16, "Kantonian Female"), alolaDex(16, "Kantonian Female"), ulaulaDex(7, "Kantonian Female"), poniDex(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16, "Alolan"), alolaDex(16, "Alolan"), ulaulaDex(7, "Alolan"), poniDex(7, "Alolan"),], },
				],
			},
			{ id: 8, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [melemeleDex(17), alolaDex(17),], },
			{ id: 9, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [melemeleDex(18), alolaDex(18),], },
			{
				id: 10, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDex(19), alolaDex(19),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDex(19, "Male"), alolaDex(19, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [melemeleDex(19, "Female"), alolaDex(19, "Female"),], },
				],
			},
			{ id: 11, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(27), alolaDex(27), ulaulaDex(12),], },
			{ id: 12, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(28), alolaDex(28), ulaulaDex(13),], },
			{ id: 13, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(29), alolaDex(29), ulaulaDex(14),], },
			{ id: 14, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [melemeleDex(30), alolaDex(30),], },
			{
				id: 15, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDex(31), alolaDex(31),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDex(31, "Male"), alolaDex(31, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [melemeleDex(31, "Female"), alolaDex(31, "Female"),], },
				],
			},
			{ id: 16, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(32), alolaDex(32), ulaulaDex(15), poniDex(8),], },
			{ id: 17, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(33), alolaDex(33), ulaulaDex(16), poniDex(9),], },
			{ id: 18, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(34), alolaDex(34), ulaulaDex(17), poniDex(10),], },
			{ id: 19, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(40), alolaDex(40), ulaulaDex(21), poniDex(11),], },
			{ id: 20, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(41), alolaDex(41), ulaulaDex(22), poniDex(12),], },
			{ id: 21, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(59), alolaDex(59), ulaulaDex(30), poniDex(17),], },
			{ id: 22, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(60), alolaDex(60), ulaulaDex(31), poniDex(18),], },
			{ id: 23, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(61), alolaDex(61), ulaulaDex(32),], },
			{ id: 24, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(62), alolaDex(62), ulaulaDex(33),], },
			{ id: 25, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(63), alolaDex(63), ulaulaDex(34),], },
			{
				id: 26, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(68), alolaDex(68), ulaulaDex(35), poniDex(19),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(68, "Male"), alolaDex(68, "Male"), ulaulaDex(35, "Male"), poniDex(19, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDex(68, "Female"), alolaDex(68, "Female"), ulaulaDex(35, "Female"), poniDex(19, "Female"),], },
				],
			},
			{
				id: 27, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(69), alolaDex(69), ulaulaDex(36), poniDex(20),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(69, "Male"), alolaDex(69, "Male"), ulaulaDex(36, "Male"), poniDex(20, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDex(69, "Female"), alolaDex(69, "Female"), ulaulaDex(36, "Female"), poniDex(20, "Female"),], },
				],
			},
			{ id: 28, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(70), alolaDex(70), ulaulaDex(37), poniDex(21),], },
			{
				id: 29, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(71), alolaDex(71), ulaulaDex(38), poniDex(22),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(71, "Kantonian"), alolaDex(71, "Kantonian"), ulaulaDex(38, "Kantonian"), poniDex(22, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(71, "Alolan"), alolaDex(71, "Alolan"), ulaulaDex(38, "Alolan"), poniDex(22, "Alolan"),], },
				],
			},
			{
				id: 30, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(72), alolaDex(72), ulaulaDex(39), poniDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(72, "Kantonian"), alolaDex(72, "Kantonian"), ulaulaDex(39, "Kantonian"), poniDex(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(72, "Alolan"), alolaDex(72, "Alolan"), ulaulaDex(39, "Alolan"), poniDex(23, "Alolan"),], },
				],
			},
			{
				id: 31, name: "Oricorio", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDex(82), alolaDex(82), ulaulaDex(42), poniDex(32),], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), dexSync: [melemeleDex(82, "Baile Style"), alolaDex(82, "Baile Style"), ulaulaDex(42, "Baile Style"), poniDex(32, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDex(82, "Pa'u Style"), alolaDex(82, "Pa'u Style"), ulaulaDex(42, "Pa'u Style"), poniDex(32, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDex(82, "Pom-Pom Style"), alolaDex(82, "Pom-Pom Style"), ulaulaDex(42, "Pom-Pom Style"), poniDex(32, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDex(82, "Sensu Style"), alolaDex(82, "Sensu Style"), ulaulaDex(42, "Sensu Style"), poniDex(32, "Sensu Style"),], },
				],
			},
			{ id: 32, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(89), alolaDex(89), ulaulaDex(49), poniDex(39),], },
			{ id: 33, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(90), alolaDex(90), ulaulaDex(50), poniDex(40),], },
			{
				id: 34, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(91), alolaDex(91), ulaulaDex(51), poniDex(41),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(91, "Male"), alolaDex(91, "Male"), ulaulaDex(51, "Male"), poniDex(41, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDex(91, "Female"), alolaDex(91, "Female"), ulaulaDex(51, "Female"), poniDex(41, "Female"),], },
				],
			},
			{
				id: 35, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(92), alolaDex(92), ulaulaDex(52), poniDex(42),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(92, "Male"), alolaDex(92, "Male"), ulaulaDex(52, "Male"), poniDex(42, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDex(92, "Female"), alolaDex(92, "Female"), ulaulaDex(52, "Female"), poniDex(42, "Female"),], },
				],
			},
			{ id: 36, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(93), alolaDex(93), poniDex(43),], },
			{ id: 37, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(94), alolaDex(94), poniDex(44),], },
			{ id: 38, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(106), alolaDex(106), ulaulaDex(53), poniDex(55),], },
			{ id: 39, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(107), alolaDex(107), ulaulaDex(54), poniDex(56),], },
			{
				id: 40, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(108), alolaDex(108), ulaulaDex(55), poniDex(57),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(108, "Male"), alolaDex(108, "Male"), ulaulaDex(55, "Male"), poniDex(57, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDex(108, "Female"), alolaDex(108, "Female"), ulaulaDex(55, "Female"), poniDex(57, "Female"),], },
				],
			},
			{
				id: 41, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(109), alolaDex(109), ulaulaDex(56), poniDex(58),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(109, "Male"), alolaDex(109, "Male"), ulaulaDex(56, "Male"), poniDex(58, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDex(109, "Female"), alolaDex(109, "Female"), ulaulaDex(56, "Female"), poniDex(58, "Female"),], },
				],
			},
			{ id: 42, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(110), alolaDex(110), ulaulaDex(57),], },
			{ id: 43, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [melemeleDex(111), alolaDex(111),], },
			{ id: 44, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [melemeleDex(112), alolaDex(112),], },
			{ id: 45, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [melemeleDex(113), alolaDex(113),], },
			{ id: 46, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [melemeleDex(114), alolaDex(114),], },
			{ id: 47, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), dexSync: [alolaDex(120)], },
			{ id: 48, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), dexSync: [alolaDex(121)], },
			{ id: 49, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), dexSync: [alolaDex(122)], },
			{ id: 50, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: [alolaDex(123)], },
			{ id: 51, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: [alolaDex(124)], },
			{ id: 52, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: [alolaDex(125)], },
			{ id: 53, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: [alolaDex(126)], },
			{ id: 54, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: [alolaDex(127)], },
			{ id: 55, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: [alolaDex(128)], },
			{ id: 56, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), dexSync: [alolaDex(129)], },
			{ id: 57, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), dexSync: [alolaDex(130)], },
			{ id: 58, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), dexSync: [alolaDex(131)], },
			{ id: 59, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [alolaDex(132), ulaulaDex(58), poniDex(59),], },
			{ id: 60, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [alolaDex(133), ulaulaDex(59), poniDex(60),], },
			{ id: 61, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: [alolaDex(134)], },
			{ id: 62, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: [alolaDex(135)], },
			{ id: 63, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: [alolaDex(136)], },
			{ id: 64, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [alolaDex(137), poniDex(61),], },
			{ id: 65, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [alolaDex(138), poniDex(62),], },
			{ id: 66, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [alolaDex(139), ulaulaDex(60),], },
			{ id: 67, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [alolaDex(140), ulaulaDex(61),], },
			{ id: 68, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [alolaDex(141), ulaulaDex(62),], },
			{ id: 69, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [alolaDex(142), ulaulaDex(63),], },
			{ id: 70, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [alolaDex(143)], },
			{ id: 71, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [alolaDex(144)], },
			{ id: 72, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [alolaDex(145), ulaulaDex(64),], },
			{ id: 73, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [alolaDex(146), ulaulaDex(65),], },
			{ id: 74, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [alolaDex(147), ulaulaDex(66),], },
			{ id: 75, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [alolaDex(148), ulaulaDex(67),], },
			{ id: 76, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [alolaDex(149), ulaulaDex(68),], },
			{ id: 77, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [alolaDex(150), ulaulaDex(69),], },
			{ id: 78, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [alolaDex(151), ulaulaDex(70),], },
			{
				id: 79, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [alolaDex(152), ulaulaDex(71),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [alolaDex(152, "Male"), ulaulaDex(71, "Male"),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [alolaDex(152, "Female"), ulaulaDex(71, "Female"),], },
				],
			},
			{
				id: 80, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [alolaDex(153), ulaulaDex(72),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [alolaDex(153, "Male"), alolaDex(72, "Male"),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [alolaDex(153, "Female"), alolaDex(72, "Female"),], },
				],
			},
			{
				id: 81, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [alolaDex(154), ulaulaDex(73),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [alolaDex(154, "Male"), alolaDex(73, "Male"),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [alolaDex(154, "Female"), alolaDex(73, "Male"),], },
				],
			},
			{ id: 82, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [alolaDex(155)], },
			{
				id: 83, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [alolaDex(83)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [alolaDex(83, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [alolaDex(83, "sun")], },
				],
			},
			{ id: 84, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [alolaDex(157)], },
			{ id: 85, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [alolaDex(158)], },
			{ id: 86, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [alolaDex(159)], },
			{ id: 87, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [alolaDex(160)], },
			{ id: 88, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [alolaDex(161)], },
			{ id: 89, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [alolaDex(162)], },
			{ id: 90, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), dexSync: [alolaDex(163)], },
			{
				id: 91, name: "Marowak", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [alolaDex(164)], forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), dexSync: [alolaDex(164, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [alolaDex(164, "Alolan")], },
				],
			},
			{ id: 92, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), dexSync: [alolaDex(165)], },
			{ id: 93, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), dexSync: [alolaDex(166)], },
			{ id: 94, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), dexSync: [alolaDex(167)], },
			{ id: 95, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), dexSync: [alolaDex(168)], },
			{ id: 96, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [alolaDex(169)], },
			{ id: 97, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [alolaDex(170)], },
			{ id: 98, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), dexSync: [alolaDex(171)], },
			{ id: 99, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), dexSync: [alolaDex(172)], },
			{ id: 100, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), dexSync: [alolaDex(173)], },
			{ id: 101, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), dexSync: [alolaDex(174)], },
			{ id: 102, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [alolaDex(175), poniDex(65),], },
			{ id: 103, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), dexSync: [alolaDex(176)], },
			{ id: 104, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), dexSync: [alolaDex(177)], },
			{ id: 105, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [alolaDex(178), ulaulaDex(74), poniDex(67),], },
			{ id: 106, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [alolaDex(179), ulaulaDex(75), poniDex(68),], },
			{ id: 107, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [alolaDex(180), ulaulaDex(76), poniDex(69),], },
			{
				id: 108, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [alolaDex(181), ulaulaDex(77), poniDex(69),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [alolaDex(181, "Normal"), ulaulaDex(77, "Normal"), poniDex(69, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [alolaDex(181, "Rainy"), ulaulaDex(77, "Rainy"), poniDex(69, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [alolaDex(181, "Snowy"), ulaulaDex(77, "Snowy"), poniDex(69, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [alolaDex(181, "Sunny"), ulaulaDex(77, "Sunny"), poniDex(69, "Sunny"),], },
				],
			},
			{ id: 109, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [alolaDex(182), poniDex(70),], },
			{ id: 110, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [alolaDex(183), poniDex(71),], },
			{ id: 111, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: [alolaDex(184)], },
			{ id: 112, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: [alolaDex(185)], },
			{ id: 113, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), dexSync: [alolaDex(186)], },
			{ id: 114, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), dexSync: [alolaDex(187)], },
			{ id: 115, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [alolaDex(188)], },
			{ id: 116, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [alolaDex(189)], },
			{ id: 117, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [alolaDex(190)], },
			{ id: 118, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [alolaDex(191)], },
			{ id: 119, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), dexSync: [alolaDex(192)], },
			{ id: 120, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), dexSync: [alolaDex(193)], },
			{ id: 121, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), dexSync: [alolaDex(194)], },
			{ id: 122, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), dexSync: [alolaDex(195)], },
			{ id: 123, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: [alolaDex(196)], },
			{ id: 124, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: [alolaDex(197)], },
			{ id: 125, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), dexSync: [alolaDex(198)], },
			{ id: 126, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), dexSync: [alolaDex(199)], },
			{ id: 127, name: "Pyukumuku", img: baseSprite(771), imgS: shinySprite(771), dexSync: [alolaDex(200)], },
			{ id: 128, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: [alolaDex(201)], },
			{ id: 129, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: [alolaDex(202)], },
			{ id: 130, name: "Tapu Lele", img: baseSprite(786), imgS: shinySprite(786), legendary: true, dexSync: [alolaDex(286)], },
		],
	},
});