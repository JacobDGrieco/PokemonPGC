const game = "moon";
const sub = game + "-melemele";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const alolaDex = (...args) => _dex(game + "-alola", "regional", ...args);
const melemeleDex = (...args) => _dex(game + "-melemele", "regional", ...args);
const akalaDex = (...args) => _dex(game + "-akala", "regional", ...args);
const ulaulaDex = (...args) => _dex(game + "-ulaula", "regional", ...args);
const poniDex = (...args) => _dex(game + "-poni", "regional", ...args);

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
			{ id: 10, natiId: 731, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [akalaDex(1), ulaulaDex(1), poniDex(1),], },
			{ id: 11, natiId: 732, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [akalaDex(2), ulaulaDex(2), poniDex(2),], },
			{ id: 12, natiId: 733, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [akalaDex(3), ulaulaDex(3), poniDex(3),], },
			{ id: 13, natiId: 734, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [akalaDex(4), ulaulaDex(4), poniDex(4),], },
			{ id: 14, natiId: 735, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [akalaDex(5), ulaulaDex(5), poniDex(5),], },
			{
				id: 15, natiId: 19, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [akalaDex(6), ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [akalaDex(6, "Kantonian Male"), ulaulaDex(6, "Kantonian Male"), poniDex(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [akalaDex(6, "Kantonian Female"), ulaulaDex(6, "Kantonian Female"), poniDex(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [akalaDex(6, "Alolan"), ulaulaDex(6, "Alolan"), poniDex(6, "Alolan"),], },
				],
			},
			{
				id: 16, natiId: 20, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [akalaDex(7), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [akalaDex(7, "Kantonian Male"), ulaulaDex(7, "Kantonian Male"), poniDex(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [akalaDex(7, "Kantonian Female"), ulaulaDex(7, "Kantonian Female"), poniDex(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [akalaDex(7, "Alolan"), ulaulaDex(7, "Alolan"), poniDex(7, "Alolan"),], },
				],
			},
			{ id: 17, natiId: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [akalaDex(8),], },
			{ id: 18, natiId: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [akalaDex(9),], },
			{
				id: 19, natiId: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [akalaDex(10),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [akalaDex(10, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [akalaDex(10, "Female"),], },
				],
			},
			{
				id: 20, natiId: 165, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [ulaulaDex(8),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [ulaulaDex(8, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [ulaulaDex(8, "Female"),], },
				],
			},
			{
				id: 21, natiId: 166, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [ulaulaDex(9),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [ulaulaDex(9, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [ulaulaDex(9, "Female"),], },
				],
			},
			{ id: 22, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [ulaulaDex(10),], },
			{ id: 23, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [ulaulaDex(11),], },
			{ id: 24, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{
				id: 25, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", mythical: true },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", mythical: true },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", mythical: true },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", mythical: true },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", mythical: true },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", mythical: true },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", mythical: true },
				],
			},
			{
				id: 26, natiId: 26, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), },
				],
			},
			{ id: 27, natiId: 736, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [akalaDex(11), ulaulaDex(12),], },
			{ id: 28, natiId: 737, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [akalaDex(12), ulaulaDex(13),], },
			{ id: 29, natiId: 738, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [akalaDex(13), ulaulaDex(14),], },
			{ id: 30, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [akalaDex(14),], },
			{
				id: 31, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [akalaDex(15),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [akalaDex(15, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [akalaDex(15, "Female"),], },
				],
			},
			{ id: 32, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [akalaDex(16), ulaulaDex(15), poniDex(8),], },
			{ id: 33, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [akalaDex(17), ulaulaDex(16), poniDex(9),], },
			{ id: 34, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [akalaDex(18), ulaulaDex(17), poniDex(10),], },
			{ id: 35, natiId: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 36, natiId: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 37, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [ulaulaDex(18),], },
			{ id: 38, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [ulaulaDex(19),], },
			{ id: 39, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [ulaulaDex(20),], },
			{ id: 40, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [akalaDex(19), ulaulaDex(21), poniDex(11),], },
			{ id: 41, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [akalaDex(20), ulaulaDex(22), poniDex(12),], },
			{ id: 42, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 43, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 44, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
				],
			},
			{
				id: 45, natiId: 52, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [ulaulaDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [ulaulaDex(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [ulaulaDex(23, "Alolan"),], },
				],
			},
			{
				id: 46, natiId: 53, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [ulaulaDex(24),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [ulaulaDex(24, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [ulaulaDex(24, "Alolan"),], },
				],
			},
			{ id: 47, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [ulaulaDex(25),], },
			{ id: 48, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [ulaulaDex(26),], },
			{ id: 49, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [ulaulaDex(27),], },
			{
				id: 50, natiId: 88, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [ulaulaDex(28),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [ulaulaDex(28, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [ulaulaDex(28, "Alolan"),], },
				],
			},
			{
				id: 51, natiId: 89, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [ulaulaDex(29),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [ulaulaDex(29, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [ulaulaDex(29, "Alolan"),], },
				],
			},
			{ id: 52, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), },
			{ id: 53, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), },
			{ id: 54, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [poniDex(13),], },
			{
				id: 55, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [poniDex(14),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [poniDex(14, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [poniDex(14, "Female"),], },
				],
			},
			{ id: 56, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [poniDex(15),], },
			{ id: 57, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [poniDex(16),], },
			{ id: 58, natiId: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{ id: 59, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [akalaDex(21), ulaulaDex(30), poniDex(17),], },
			{ id: 60, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [akalaDex(22), ulaulaDex(31), poniDex(18),], },
			{ id: 61, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [akalaDex(23), ulaulaDex(32),], },
			{ id: 62, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [akalaDex(24), ulaulaDex(33),], },
			{ id: 63, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [akalaDex(25), ulaulaDex(34),], },
			{ id: 64, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 65, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{ id: 66, natiId: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{ id: 67, natiId: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{
				id: 68, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [akalaDex(26), ulaulaDex(35), poniDex(19),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [akalaDex(26, "Male"), ulaulaDex(35, "Male"), poniDex(19, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [akalaDex(26, "Female"), ulaulaDex(35, "Female"), poniDex(19, "Female"),], },
				],
			},
			{
				id: 69, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [akalaDex(27), ulaulaDex(36), poniDex(20),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [akalaDex(27, "Male"), ulaulaDex(36, "Male"), poniDex(20, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [akalaDex(27, "Female"), ulaulaDex(36, "Female"), poniDex(20, "Female"),], },
				],
			},
			{ id: 70, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [akalaDex(28), ulaulaDex(37), poniDex(21),], },
			{
				id: 71, natiId: 50, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [akalaDex(29), ulaulaDex(38), poniDex(22),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [akalaDex(29, "Kantonian"), ulaulaDex(38, "Kantonian"), poniDex(22, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [akalaDex(29, "Alolan"), ulaulaDex(38, "Alolan"), poniDex(22, "Alolan"),], },
				],
			},
			{
				id: 72, natiId: 51, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [akalaDex(30), ulaulaDex(39), poniDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [akalaDex(30, "Kantonian"), ulaulaDex(39, "Kantonian"), poniDex(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [akalaDex(30, "Alolan"), ulaulaDex(39, "Alolan"), poniDex(23, "Alolan"),], },
				],
			},
			{ id: 73, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [ulaulaDex(40), poniDex(24),], },
			{ id: 74, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [ulaulaDex(41), poniDex(25),], },
			{ id: 75, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [poniDex(26),], },
			{ id: 76, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [poniDex(27),], },
			{ id: 77, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [poniDex(28),], },
			{ id: 78, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [poniDex(29),], },
			{ id: 79, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [poniDex(30),], },
			{ id: 80, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [poniDex(31),], },
			{ id: 81, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{
				id: 82, natiId: 741, name: "Oricorio", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [akalaDex(31), ulaulaDex(42), poniDex(32),], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [akalaDex(31, "Baile Style"), ulaulaDex(42, "Baile Style"), poniDex(32, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-p"), dexSync: [akalaDex(31, "Pa'u Style"), ulaulaDex(42, "Pa'u Style"), poniDex(32, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-p"), dexSync: [akalaDex(31, "Pom-Pom Style"), ulaulaDex(42, "Pom-Pom Style"), poniDex(32, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [akalaDex(31, "Sensu Style"), ulaulaDex(42, "Sensu Style"), poniDex(32, "Sensu Style"),], },
				],
			},
			{ id: 83, natiId: 742, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [ulaulaDex(43), poniDex(33),], },
			{ id: 84, natiId: 743, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [ulaulaDex(44), poniDex(34),], },
			{ id: 85, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [ulaulaDex(45), poniDex(35),], },
			{ id: 86, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [ulaulaDex(46), poniDex(36),], },
			{ id: 87, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [ulaulaDex(47), poniDex(37),], },
			{ id: 88, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [ulaulaDex(48), poniDex(38),], },
			{ id: 89, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [akalaDex(32), ulaulaDex(49), poniDex(39),], },
			{ id: 90, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [akalaDex(33), ulaulaDex(50), poniDex(40),], },
			{
				id: 91, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [akalaDex(34), ulaulaDex(51), poniDex(41),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [akalaDex(34, "Male"), ulaulaDex(51, "Male"), poniDex(41, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [akalaDex(34, "Female"), ulaulaDex(51, "Female"), poniDex(41, "Female"),], },
				],
			},
			{
				id: 92, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [akalaDex(35), ulaulaDex(52), poniDex(42),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [akalaDex(35, "Male"), ulaulaDex(52, "Male"), poniDex(42, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [akalaDex(35, "Female"), ulaulaDex(52, "Female"), poniDex(42, "Female"),], },
				],
			},
			{ id: 93, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [akalaDex(36), poniDex(43),], },
			{ id: 94, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [akalaDex(37), poniDex(44),], },
			{ id: 95, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [poniDex(45),], },
			{ id: 96, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [poniDex(46),], },
			{ id: 97, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [poniDex(47),], },
			{ id: 98, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [poniDex(48),], },
			{ id: 99, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [poniDex(49),], },
			{ id: 100, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [poniDex(50),], },
			{ id: 101, natiId: 703, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [poniDex(51),], },
			{ id: 102, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [poniDex(52),], },
			{ id: 103, natiId: 744, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [poniDex(53),], },
			{
				id: 104, natiId: 745, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [poniDex(54),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [poniDex(54, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [poniDex(54, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [poniDex(54, "Dusk"),], },
				],
			},
			{ id: 105, natiId: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), },
			{ id: 106, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [akalaDex(38), ulaulaDex(53), poniDex(55),], },
			{ id: 107, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [akalaDex(39), ulaulaDex(54), poniDex(56),], },
			{
				id: 108, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [akalaDex(40), ulaulaDex(55), poniDex(57),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [akalaDex(40, "Male"), ulaulaDex(55, "Male"), poniDex(57, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [akalaDex(40, "Female"), ulaulaDex(55, "Female"), poniDex(57, "Female"),], },
				],
			},
			{
				id: 109, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [akalaDex(41), ulaulaDex(56), poniDex(58),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [akalaDex(41, "Male"), ulaulaDex(56, "Male"), poniDex(58, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [akalaDex(41, "Female"), ulaulaDex(56, "Female"), poniDex(58, "Female"),], },
				],
			},
			{ id: 110, natiId: 746, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [akalaDex(42), ulaulaDex(57),], },
			{ id: 111, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [akalaDex(43),], },
			{ id: 112, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [akalaDex(44),], },
			{ id: 113, natiId: 747, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [akalaDex(45),], },
			{ id: 114, natiId: 748, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [akalaDex(46),], },
			{ id: 115, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 116, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 117, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 118, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 119, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{ id: 120, natiId: 785, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, },
		],
	},
});