const game = "ultrasun";
const sub = game + "-ulaula";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (id) => _dex(game + "-alola", "regional", id);
const melemeleDex = (id) => _dex(game + "-melemele", "regional", id);
const akalaDex = (id) => _dex(game + "-akala", "regional", id);
const ulaulaDex = (id) => _dex(game + "-ulaula", "regional", id);
const poniDex = (id) => _dex(game + "-poni", "regional", id);
const alolaDexForm = (id, form) => _dex(game + "-alola", "regional", id, form);
const melemeleDexForm = (id, form) => _dex(game + "-melemele", "regional", id, form);
const akalaDexForm = (id, form) => _dex(game + "-akala", "regional", id, form);
const ulaulaDexForm = (id, form) => _dex(game + "-ulaula", "regional", id, form);
const poniDexForm = (id, form) => _dex(game + "-poni", "regional", id, form);

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
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDexForm(15, "Kantonian Male"), akalaDexForm(6, "Kantonian Male"), alolaDexForm(15, "Kantonian Male"), poniDexForm(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDexForm(15, "Kantonian Female"), akalaDexForm(6, "Kantonian Female"), alolaDexForm(15, "Kantonian Female"), poniDexForm(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15, "Alolan"), akalaDexForm(6, "Alolan"), alolaDexForm(15, "Alolan"), poniDexForm(6, "Alolan"),], },
				],
			},
			{
				id: 7, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), akalaDex(7), alolaDex(16), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16, "Kantonian Male"), akalaDexForm(7, "Kantonian Male"), alolaDexForm(16, "Kantonian Male"), poniDexForm(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16, "Kantonian Female"), akalaDexForm(7, "Kantonian Female"), alolaDexForm(16, "Kantonian Female"), poniDexForm(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16, "Alolan"), akalaDexForm(7, "Alolan"), alolaDexForm(16, "Alolan"), poniDexForm(7, "Alolan"),], },
				],
			},
			{
				id: 8, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDex(20), alolaDex(20),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDexForm(20, "Male"), alolaDexForm(20, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [melemeleDexForm(20, "Female"), alolaDexForm(20, "Female"),], },
				],
			},
			{
				id: 9, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDex(21), alolaDex(21),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDexForm(21, "Male"), alolaDexForm(21, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [melemeleDexForm(21, "Female"), alolaDexForm(21, "Female"),], },
				],
			},
			{ id: 10, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [melemeleDex(22), alolaDex(22),], },
			{ id: 11, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [melemeleDex(23), alolaDex(23),], },
			{ id: 12, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(34), akalaDex(11), alolaDex(24),], },
			{ id: 13, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(35), akalaDex(12), alolaDex(25),], },
			{ id: 14, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(36), akalaDex(13), alolaDex(36),], },
			{ id: 15, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(39), akalaDex(15), alolaDex(39), poniDex(15),], },
			{ id: 16, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(40), akalaDex(16), alolaDex(40), poniDex(16),], },
			{ id: 17, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(41), akalaDex(17), alolaDex(41), poniDex(17),], },
			{ id: 18, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [melemeleDex(44), alolaDex(44),], },
			{ id: 19, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [melemeleDex(45), alolaDex(45),], },
			{ id: 20, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [melemeleDex(46), alolaDex(46),], },
			{ id: 21, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(47), akalaDex(19), alolaDex(47), poniDex(18),], },
			{ id: 22, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(48), akalaDex(20), alolaDex(48), poniDex(19),], },
			{
				id: 23, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), dexSync: [melemeleDex(52), alolaDex(52),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [melemeleDexForm(52, "Kantonian"), alolaDexForm(52, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDexForm(52, "Alolan"), alolaDexForm(52, "Alolan"),], },
				],
			},
			{
				id: 24, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [melemeleDex(53), alolaDex(53),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [melemeleDexForm(53, "Kantonian"), alolaDexForm(53, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDexForm(53, "Alolan"), alolaDexForm(53, "Alolan"),], },
				],
			},
			{ id: 25, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [melemeleDex(54), alolaDex(54),], },
			{ id: 26, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [melemeleDex(55), alolaDex(55),], },
			{ id: 27, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [melemeleDex(56), alolaDex(56),], },
			{
				id: 28, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), dexSync: [melemeleDex(57), alolaDex(57),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [melemeleDexForm(57, "Kantonian"), alolaDexForm(57, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDexForm(57, "Alolan"), alolaDexForm(57, "Alolan"),], },
				],
			},
			{
				id: 29, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), dexSync: [melemeleDex(58), alolaDex(58),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [melemeleDexForm(58, "Kantonian"), alolaDexForm(58, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDexForm(58, "Alolan"), alolaDexForm(58, "Alolan"),], },
				],
			},
			{ id: 30, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(71), akalaDex(21), alolaDex(71), poniDex(24),], },
			{ id: 31, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(72), akalaDex(22), alolaDex(72), poniDex(25),], },
			{ id: 32, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(73), akalaDex(23), alolaDex(73),], },
			{ id: 33, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(74), akalaDex(24), alolaDex(74),], },
			{ id: 34, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(75), akalaDex(25), alolaDex(75),], },
			{
				id: 35, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(80), akalaDex(26), alolaDex(80), poniDex(26),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(80, "Male"), akalaDexForm(26, "Male"), alolaDexForm(80, "Male"), poniDexForm(26, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(80, "Female"), akalaDexForm(26, "Female"), alolaDexForm(80, "Female"), poniDexForm(26, "Female"),], },
				],
			},
			{
				id: 36, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(81), akalaDex(27), alolaDex(81), poniDex(27),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(81, "Male"), akalaDexForm(27, "Male"), alolaDexForm(81, "Male"), poniDexForm(27, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(81, "Female"), akalaDexForm(27, "Female"), alolaDexForm(81, "Female"), poniDexForm(27, "Female"),], },
				],
			},
			{ id: 37, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(82), akalaDex(28), alolaDex(82), poniDex(28),], },
			{
				id: 38, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDex(85), akalaDex(29), alolaDex(85), poniDex(31),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(85, "Kantonian"), akalaDexForm(29, "Kantonian"), alolaDexForm(85, "Kantonian"), poniDexForm(31, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(85, "Alolan"), akalaDexForm(29, "Alolan"), alolaDexForm(85, "Alolan"), poniDexForm(31, "Alolan"),], },
				],
			},
			{
				id: 39, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDex(86), akalaDex(30), alolaDex(86), poniDex(32),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(86, "Kantonian"), akalaDexForm(30, "Kantonian"), alolaDexForm(86, "Kantonian"), poniDexForm(32, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(86, "Alolan"), akalaDexForm(30, "Alolan"), alolaDexForm(86, "Alolan"), poniDexForm(32, "Alolan"),], },
				],
			},
			{ id: 40, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(87), alolaDex(87), poniDex(33),], },
			{ id: 41, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(88), alolaDex(87), poniDex(34),], },
			{
				id: 42, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDex(97), akalaDex(31), alolaDex(97), poniDex(41),], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDexForm(97, "Baile Style"), akalaDexForm(31, "Baile Style"), alolaDexForm(97, "Baile Style"), poniDexForm(41, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDexForm(97, "Pa'u Style"), akalaDexForm(31, "Pa'u Style"), alolaDexForm(97, "Pa'u Style"), poniDexForm(41, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [melemeleDexForm(97, "Pom-Pom Style"), akalaDexForm(31, "Pom-Pom Style"), alolaDexForm(97, "Pom-Pom Style"), poniDexForm(41, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(97, "Sensu Style"), akalaDexForm(31, "Sensu Style"), alolaDexForm(97, "Sensu Style"), poniDexForm(41, "Sensu Style"),], },
				],
			},
			{ id: 43, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(98), alolaDex(98), poniDex(42),], },
			{ id: 44, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(99), alolaDex(98), poniDex(43),], },
			{
				id: 45, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDex(100), alolaDex(100), poniDex(44),], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDexForm(100, "Red Flower"), alolaDexForm(100, "Red Flower"), poniDexForm(44, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), dexSync: [melemeleDexForm(100, "Orange Flower"), alolaDexForm(100, "Orange Flower"), poniDexForm(44, "Orange Flowerale"),], },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), dexSync: [melemeleDexForm(100, "Yellow Flower"), alolaDexForm(100, "Yellow Flower"), poniDexForm(44, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), dexSync: [melemeleDexForm(100, "Blue Flower"), alolaDexForm(100, "Blue Flower"), poniDexForm(44, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), dexSync: [melemeleDexForm(100, "White Flower"), alolaDexForm(100, "White Flower"), poniDexForm(44, "White Flower"),], },
				],
			},
			{
				id: 46, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDex(101), alolaDex(101), poniDex(45),], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDexForm(101, "Red Flower"), alolaDexForm(101, "Red Flower"), poniDexForm(45, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), dexSync: [melemeleDexForm(101, "Orange Flower"), alolaDexForm(101, "Orange Flower"), poniDexForm(45, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), dexSync: [melemeleDexForm(101, "Yellow Flower"), alolaDexForm(101, "Yellow Flower"), poniDexForm(45, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), dexSync: [melemeleDexForm(101, "Blue Flower"), alolaDexForm(101, "Blue Flower"), poniDexForm(45, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), dexSync: [melemeleDexForm(101, "White Flower"), alolaDexForm(101, "White Flower"), poniDexForm(45, "White Flower"),], },
				],
			},
			{
				id: 47, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDex(102), alolaDex(102), poniDex(46),], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDexForm(102, "Red Flower"), alolaDexForm(102, "Red Flower"), poniDexForm(46, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), dexSync: [melemeleDexForm(102, "Orange Flower"), alolaDexForm(102, "Orange Flower"), poniDexForm(46, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), dexSync: [melemeleDexForm(102, "Yellow Flower"), alolaDexForm(102, "Yellow Flower"), poniDexForm(46, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), dexSync: [melemeleDexForm(102, "Blue Flower"), alolaDexForm(102, "Blue Flower"), poniDexForm(46, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), dexSync: [melemeleDexForm(102, "White Flower"), alolaDexForm(102, "White Flower"), poniDexForm(46, "White Flower"),], },
				],
			},
			{ id: 48, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(103), alolaDex(103), poniDex(47),], },
			{ id: 49, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(104), alolaDex(104), poniDex(48),], },
			{ id: 50, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(105), alolaDex(105), poniDex(49),], },
			{ id: 51, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(106), alolaDex(106), poniDex(50),], },
			{ id: 52, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(107), akalaDex(32), alolaDex(107), poniDex(51),], },
			{ id: 53, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(108), akalaDex(33), alolaDex(108), poniDex(52),], },
			{
				id: 54, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(111), akalaDex(34), alolaDex(111), poniDex(53),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(111, "Male"), akalaDexForm(34, "Male"), alolaDexForm(111, "Male"), poniDexForm(53, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(111, "Female"), akalaDexForm(34, "Female"), alolaDexForm(111, "Female"), poniDexForm(53, "Female"),], },
				],
			},
			{
				id: 55, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(112), akalaDex(35), alolaDex(112), poniDex(54),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(112, "Male"), akalaDexForm(35, "Male"), alolaDexForm(112, "Male"), poniDexForm(54, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(112, "Female"), akalaDexForm(35, "Female"), alolaDexForm(112, "Female"), poniDexForm(54, "Female"),], },
				],
			},
			{ id: 56, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(129), akalaDex(38), alolaDex(129), poniDex(67),], },
			{ id: 57, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(130), akalaDex(39), alolaDex(130), poniDex(68),], },
			{
				id: 58, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(131), akalaDex(40), alolaDex(131), poniDex(69),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(131, "Male"), akalaDexForm(40, "Male"), alolaDexForm(131, "Male"), poniDexForm(69, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(131, "Female"), akalaDexForm(40, "Female"), alolaDexForm(131, "Female"), poniDexForm(69, "Female"),], },
				],
			},
			{
				id: 59, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(132), akalaDex(41), alolaDex(132), poniDex(70),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(132, "Male"), akalaDexForm(41, "Male"), alolaDexForm(132, "Male"), poniDexForm(70, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(132, "Female"), akalaDexForm(41, "Female"), alolaDexForm(132, "Female"), poniDexForm(70, "Female"),], },
				],
			},
			{ id: 60, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(133), akalaDex(42), alolaDex(133),], },
			{ id: 61, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), dexSync: [melemeleDex(140), alolaDex(140),], },
			{ id: 62, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), dexSync: [melemeleDex(141), alolaDex(141),], },
			{ id: 63, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), dexSync: [melemeleDex(142), alolaDex(142),], },
			{ id: 64, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(66), alolaDex(165), poniDex(71),], },
			{ id: 65, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(67), alolaDex(166), poniDex(72),], },
			{ id: 66, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [akalaDex(73), alolaDex(172),], },
			{ id: 67, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [akalaDex(74), alolaDex(173),], },
			{ id: 68, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [akalaDex(75), alolaDex(175),], },
			{ id: 69, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [akalaDex(76), alolaDex(175),], },
			{ id: 70, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [akalaDex(79), alolaDex(178),], },
			{ id: 71, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [akalaDex(80), alolaDex(179),], },
			{ id: 72, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [akalaDex(81), alolaDex(180),], },
			{ id: 73, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [akalaDex(82), alolaDex(181),], },
			{ id: 74, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [akalaDex(83), alolaDex(182),], },
			{ id: 75, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [akalaDex(84), alolaDex(183),], },
			{ id: 76, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [akalaDex(85), alolaDex(184),], },
			{
				id: 77, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDex(86), alolaDex(185),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDexForm(86, "Male"), alolaDexForm(185, "Male"),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [akalaDexForm(86, "Female"), alolaDexForm(185, "Female"),], },
				],
			},
			{
				id: 78, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDex(87), alolaDex(186),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDexForm(87, "Male"), alolaDexForm(186, "Male"),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [akalaDexForm(87, "Female"), alolaDexForm(186, "Female"),], },
				],
			},
			{
				id: 79, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDex(88), alolaDex(187),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDexForm(88, "Male"), alolaDexForm(187, "Male"),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [akalaDexForm(88, "Female"), alolaDexForm(187, "Female"),], },
				],
			},
			{
				id: 80, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDex(89), alolaDex(188), poniDex(75),], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDexForm(89, "Blue-Striped"), alolaDexForm(188, "Blue-Striped"), poniDexForm(75, "Blue-Striped"),], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [akalaDexForm(89, "Red-Striped"), alolaDexForm(188, "Red-Striped"), poniDexForm(75, "Red-Striped"),], },
				],
			},
			{ id: 81, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(118), alolaDex(217), poniDex(79),], },
			{ id: 82, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(119), alolaDex(218), poniDex(80),], },
			{ id: 83, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(120), alolaDex(219), poniDex(81),], },
			{
				id: 84, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(121), alolaDex(220), poniDex(82),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDexForm(121, "Normal"), alolaDexForm(220, "Normal"), poniDexForm(82, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDexForm(121, "Rainy"), alolaDexForm(220, "Rainy"), poniDexForm(82, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDexForm(121, "Snowy"), alolaDexForm(220, "Snowy"), poniDexForm(82, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDexForm(121, "Sunny"), alolaDexForm(220, "Sunny"), poniDexForm(82, "Sunny"),], },
				],
			},
			{ id: 85, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: [alolaDex(264)], },
			{ id: 86, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: [alolaDex(265)], },
			{ id: 87, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572), dexSync: [alolaDex(266)], },
			{ id: 88, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573), dexSync: [alolaDex(267)], },
			{ id: 89, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), dexSync: [alolaDex(268)], },
			{ id: 90, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), dexSync: [alolaDex(269)], },
			{ id: 91, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [alolaDex(270), poniDex(85),], },
			{ id: 92, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: [alolaDex(271)], },
			{ id: 93, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [alolaDex(272)], },
			{ id: 94, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [alolaDex(273)], },
			{ id: 95, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [alolaDex(274)], },
			{ id: 96, name: "Elgyem", img: baseSprite(605), imgS: shinySprite(605), dexSync: [alolaDex(275)], },
			{ id: 97, name: "Beheeyem", img: baseSprite(606), imgS: shinySprite(606), dexSync: [alolaDex(276)], },
			{
				id: 98, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), dexSync: [alolaDex(277)], forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), dexSync: [alolaDexForm(277, "Blue Core")], },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), dexSync: [alolaDexForm(277, "Green Core")], },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), dexSync: [alolaDexForm(277, "Indigo Core")], },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), dexSync: [alolaDexForm(277, "Orange Core")], },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), dexSync: [alolaDexForm(277, "Red Core")], },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), dexSync: [alolaDexForm(277, "Violet Core")], },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), dexSync: [alolaDexForm(277, "Yellow Core")], },
				],
			},
			{ id: 99, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), dexSync: [alolaDex(278)], },
			{ id: 100, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), dexSync: [alolaDex(279)], },
			{ id: 101, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), dexSync: [alolaDex(280)], },
			{ id: 102, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), dexSync: [alolaDex(281)], },
			{ id: 103, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), dexSync: [alolaDex(282)], },
			{ id: 104, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), dexSync: [alolaDex(283)], },
			{ id: 105, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), dexSync: [alolaDex(284)], },
			{ id: 106, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), dexSync: [alolaDex(285)], },
			{ id: 107, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), dexSync: [alolaDex(286)], },
			{ id: 108, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [alolaDex(287)], },
			{ id: 109, name: "Turtonator", img: baseSprite(776), imgS: shinySprite(776), dexSync: [alolaDex(288)], },
			{ id: 110, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), dexSync: [alolaDex(289)], },
			{
				id: 111, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), dexSync: [alolaDex(290)], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), dexSync: [alolaDexForm(290, "Male")], },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), dexSync: [alolaDexForm(290, "Female")], },
				],
			},
			{ id: 112, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), dexSync: [alolaDex(291)], },
			{ id: 113, name: "Togedemaru", img: baseSprite(777), imgS: shinySprite(777), dexSync: [alolaDex(292)], },
			{ id: 114, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), dexSync: [alolaDex(293)], },
			{ id: 115, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), dexSync: [alolaDex(294)], },
			{ id: 116, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), dexSync: [alolaDex(295)], },
			{ id: 117, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), dexSync: [alolaDex(296)], },
			{ id: 118, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), dexSync: [alolaDex(297)], },
			{
				id: 119, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: [alolaDex(298)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [alolaDexForm(298, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [alolaDexForm(298, "Alolan")], },
				],
			},
			{
				id: 120, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: [alolaDex(299)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [alolaDexForm(299, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [alolaDexForm(299, "Alolan")], },
				],
			},
			{
				id: 121, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: [alolaDex(300)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [alolaDexForm(300, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [alolaDexForm(300, "Alolan")], },
				],
			},
			{ id: 122, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [alolaDex(301)], },
			{ id: 123, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [alolaDex(302)], },
			{ id: 124, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [alolaDex(303)], },
			{ id: 125, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: [alolaDex(304)], },
			{ id: 126, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: [alolaDex(305)], },
			{ id: 127, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: [alolaDex(306)], },
			{
				id: 128, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [alolaDex(307)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [alolaDexForm(307, "Male")], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [alolaDexForm(307, "Female")], },
				],
			},
			{
				id: 129, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [alolaDex(308)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [alolaDexForm(308, "Male")], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [alolaDexForm(308, "Female")], },
				],
			},
			{
				id: 130, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [alolaDex(309)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [alolaDexForm(309, "Male")], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [alolaDexForm(309, "Female")], },
				],
			},
			{ id: 131, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), dexSync: [alolaDex(310)], },
			{ id: 132, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), dexSync: [alolaDex(311)], },
			{ id: 133, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), dexSync: [alolaDex(312)], },
			{ id: 134, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), dexSync: [alolaDex(313)], },
			{ id: 135, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), dexSync: [alolaDex(314)], },
			{ id: 136, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [alolaDex(315)], },
			{ id: 137, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), dexSync: [alolaDex(316)], },
			{ id: 138, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), dexSync: [alolaDex(317)], },
			{
				id: 139, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), dexSync: [alolaDex(318)], forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), dexSync: [alolaDexForm(318, "Male")], },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), dexSync: [alolaDexForm(318, "Female")], },
				],
			},
			{
				id: 140, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), dexSync: [alolaDex(319)], forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), dexSync: [alolaDexForm(319, "Male")], },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), dexSync: [alolaDexForm(319, "Female")], },
				],
			},
			{ id: 141, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [alolaDex(320)], },
			{ id: 142, name: "Drampa", img: baseSprite(780), imgS: shinySprite(780), dexSync: [alolaDex(321)], },
			{ id: 143, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), dexSync: [alolaDex(322)], },
			{ id: 144, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [alolaDex(323)], },
			{ id: 145, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [alolaDex(324)], },
			{ id: 146, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [alolaDex(325)], },
			{
				id: 147, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [alolaDex(326)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [alolaDexForm(326, "Male")], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [alolaDexForm(326, "Female")], },
				],
			},
			{
				id: 148, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [alolaDex(327)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [alolaDexForm(327, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [alolaDexForm(327, "Female")], },
				],
			},
			{
				id: 149, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: [alolaDex(328)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [alolaDexForm(328, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [alolaDexForm(328, "Alolan")], },
				],
			},
			{
				id: 150, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: [alolaDex(329)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [alolaDexForm(329, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [alolaDexForm(329, "Alolan")], },
				],
			},
			{
				id: 151, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), dexSync: [alolaDex(330)], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [alolaDexForm(330, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [alolaDexForm(330, "Alolan")], },
				],
			},
			{
				id: 152, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), dexSync: [alolaDex(331)], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [alolaDexForm(331, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [alolaDexForm(331, "Alolan")], },
				],
			},
			{ id: 153, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [alolaDex(332)], },
			{ id: 154, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [alolaDex(333)], },
			{ id: 155, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [alolaDex(334)], },
			{ id: 156, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), dexSync: [alolaDex(335)], },
			{ id: 157, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), dexSync: [alolaDex(336)], },
			{ id: 158, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [alolaDex(337)], },
			{ id: 159, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [alolaDex(338)], },
			{ id: 160, name: "Tapu Bulu", img: baseSprite(787), imgS: shinySprite(787), legendary: true, dexSync: [alolaDex(385)], },
		],
	},
});