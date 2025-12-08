const game = "moon";
const sub = game + "-alola";
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
	[sub]: "Alola Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), dexSync: [melemeleDex(1)], },
			{ id: 2, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), dexSync: [melemeleDex(2)], },
			{ id: 3, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), dexSync: [melemeleDex(3)], },
			{ id: 4, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), dexSync: [melemeleDex(4)], },
			{ id: 5, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), dexSync: [melemeleDex(5)], },
			{ id: 6, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), dexSync: [melemeleDex(6)], },
			{ id: 7, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), dexSync: [melemeleDex(7)], },
			{ id: 8, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), dexSync: [melemeleDex(8)], },
			{ id: 9, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), dexSync: [melemeleDex(9)], },
			{ id: 10, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [melemeleDex(10), akalaDex(1), ulaulaDex(1), poniDex(1),], },
			{ id: 11, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [melemeleDex(11), akalaDex(2), ulaulaDex(2), poniDex(2),], },
			{ id: 12, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [melemeleDex(12), akalaDex(3), ulaulaDex(3), poniDex(3),], },
			{ id: 13, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [melemeleDex(13), akalaDex(4), ulaulaDex(4), poniDex(4),], },
			{ id: 14, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [melemeleDex(14), akalaDex(5), ulaulaDex(5), poniDex(5),], },
			{
				id: 15, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15), akalaDex(6), ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDexForm(15, "Kantonian Male"), akalaDexForm(6, "Kantonian Male"), ulaulaDexForm(6, "Kantonian Male"), poniDexForm(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDexForm(15, "Kantonian Female"), akalaDexForm(6, "Kantonian Female"), ulaulaDexForm(6, "Kantonian Female"), poniDexForm(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15, "Alolan"), akalaDexForm(6, "Alolan"), ulaulaDexForm(6, "Alolan"), poniDexForm(6, "Alolan"),], },
				],
			},
			{
				id: 16, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), akalaDex(7), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16, "Kantonian Male"), akalaDexForm(7, "Kantonian Male"), ulaulaDexForm(7, "Kantonian Male"), poniDexForm(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16, "Kantonian Female"), akalaDexForm(7, "Kantonian Female"), ulaulaDexForm(7, "Kantonian Female"), poniDexForm(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16, "Alolan"), akalaDexForm(7, "Alolan"), ulaulaDexForm(7, "Alolan"), poniDexForm(7, "Alolan"),], },
				],
			},
			{ id: 17, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [melemeleDex(17), akalaDex(8),], },
			{ id: 18, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [melemeleDex(18), akalaDex(9),], },
			{
				id: 19, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDex(19), akalaDex(10),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDexForm(19, "Male"), akalaDexForm(10, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [melemeleDexForm(19, "Female"), akalaDexForm(10, "Female"),], },
				],
			},
			{
				id: 20, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDex(20), ulaulaDex(8),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDexForm(20, "Male"), ulaulaDexForm(8, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [melemeleDexForm(20, "Female"), ulaulaDexForm(8, "Female"),], },
				],
			},
			{
				id: 21, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDex(21), ulaulaDex(9),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDexForm(21, "Male"), ulaulaDexForm(9, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [melemeleDexForm(21, "Female"), ulaulaDexForm(9, "Female"),], },
				],
			},
			{ id: 22, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [melemeleDex(22), ulaulaDex(10),], },
			{ id: 23, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [melemeleDex(23), ulaulaDex(11),], },
			{ id: 24, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [melemeleDex(24)], },
			{
				id: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [melemeleDex(25)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [melemeleDexForm(25, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [melemeleDexForm(25, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), dexSync: [melemeleDexForm(25, "Alola Cap")], maxStatus: "caught", mythical: true },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), dexSync: [melemeleDexForm(25, "Hoenn Cap")], maxStatus: "caught", mythical: true },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), dexSync: [melemeleDexForm(25, "Kalos Cap")], maxStatus: "caught", mythical: true },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), dexSync: [melemeleDexForm(25, "Original Cap")], maxStatus: "caught", mythical: true },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), dexSync: [melemeleDexForm(25, "Partner Cap")], maxStatus: "caught", mythical: true },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), dexSync: [melemeleDexForm(25, "Sinnoh Cap")], maxStatus: "caught", mythical: true },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), dexSync: [melemeleDexForm(25, "Unova Cap")], maxStatus: "caught", mythical: true },
				],
			},
			{
				id: 26, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [melemeleDex(26)], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [melemeleDexForm(26, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [melemeleDexForm(26, "Kantonian Female")], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [melemeleDexForm(26, "Alolan")], },
				],
			},
			{ id: 27, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(27), akalaDex(11), ulaulaDex(12),], },
			{ id: 28, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(28), akalaDex(12), ulaulaDex(13),], },
			{ id: 29, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(29), akalaDex(13), ulaulaDex(14),], },
			{ id: 30, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [melemeleDex(30), akalaDex(14),], },
			{
				id: 31, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDex(31), akalaDex(15),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDexForm(31, "Male"), akalaDexForm(15, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [melemeleDexForm(31, "Female"), akalaDexForm(15, "Female"),], },
				],
			},
			{ id: 32, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(32), akalaDex(16), ulaulaDex(15), poniDex(8),], },
			{ id: 33, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(33), akalaDex(17), ulaulaDex(16), poniDex(9),], },
			{ id: 34, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(34), akalaDex(18), ulaulaDex(17), poniDex(10),], },
			{ id: 35, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [melemeleDex(35)], },
			{ id: 36, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [melemeleDex(36)], },
			{ id: 37, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [melemeleDex(37), ulaulaDex(18),], },
			{ id: 38, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [melemeleDex(38), ulaulaDex(19),], },
			{ id: 39, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [melemeleDex(39), ulaulaDex(20),], },
			{ id: 40, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(40), akalaDex(19), ulaulaDex(21), poniDex(11),], },
			{ id: 41, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(41), akalaDex(20), ulaulaDex(22), poniDex(12),], },
			{ id: 42, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: [melemeleDex(42)], },
			{
				id: 43, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: [melemeleDex(43)], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: [melemeleDexForm(43, "Male")], },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: [melemeleDexForm(43, "Female")], },
				],
			},
			{
				id: 44, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: [melemeleDex(44)], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: [melemeleDexForm(44, "Male")], },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: [melemeleDexForm(44, "Female")], },
				],
			},
			{
				id: 45, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDex(45), ulaulaDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [melemeleDexForm(45, "Kantonian"), ulaulaDexForm(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDexForm(45, "Alolan"), ulaulaDexForm(23, "Alolan"),], },
				],
			},
			{
				id: 46, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDex(46), ulaulaDex(24),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [melemeleDexForm(46, "Kantonian"), ulaulaDexForm(24, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDexForm(46, "Alolan"), ulaulaDexForm(24, "Alolan"),], },
				],
			},
			{ id: 47, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [melemeleDex(47), ulaulaDex(25),], },
			{ id: 48, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [melemeleDex(48), ulaulaDex(26),], },
			{ id: 49, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [melemeleDex(49), ulaulaDex(27),], },
			{
				id: 50, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDex(50), ulaulaDex(28),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [melemeleDexForm(50, "Kantonian"), ulaulaDexForm(28, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDexForm(50, "Alolan"), ulaulaDexForm(28, "Alolan"),], },
				],
			},
			{
				id: 51, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDex(51), ulaulaDex(29),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [melemeleDexForm(51, "Kantonian"), ulaulaDexForm(29, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDexForm(51, "Alolan"), ulaulaDexForm(29, "Alolan"),], },
				],
			},
			{ id: 52, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: [melemeleDex(52)], },
			{ id: 53, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: [melemeleDex(53)], },
			{ id: 54, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [melemeleDex(54), poniDex(13),], },
			{
				id: 55, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDex(55), poniDex(14),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDexForm(55, "Male"), poniDexForm(14, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [melemeleDexForm(55, "Female"), poniDexForm(14, "Female"),], },
				],
			},
			{ id: 56, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [melemeleDex(56), poniDex(15),], },
			{ id: 57, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [melemeleDex(57), poniDex(16),], },
			{ id: 58, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: [melemeleDex(58)], },
			{ id: 59, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(59), akalaDex(21), ulaulaDex(30), poniDex(17),], },
			{ id: 60, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(60), akalaDex(22), ulaulaDex(31), poniDex(18),], },
			{ id: 61, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(61), akalaDex(23), ulaulaDex(32),], },
			{ id: 62, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(62), akalaDex(24), ulaulaDex(33),], },
			{ id: 63, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(63), akalaDex(25), ulaulaDex(34),], },
			{ id: 64, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [melemeleDex(64)], },
			{ id: 65, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [melemeleDex(65)], },
			{ id: 66, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: [melemeleDex(66)], },
			{ id: 67, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: [melemeleDex(67)], },
			{
				id: 68, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(68), akalaDex(26), ulaulaDex(35), poniDex(19),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(68, "Male"), akalaDexForm(26, "Male"), ulaulaDexForm(35, "Male"), poniDexForm(19, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(68, "Female"), akalaDexForm(26, "Female"), ulaulaDexForm(35, "Female"), poniDexForm(19, "Female"),], },
				],
			},
			{
				id: 69, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(69), akalaDex(27), ulaulaDex(36), poniDex(20),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(69, "Male"), akalaDexForm(27, "Male"), ulaulaDexForm(36, "Male"), poniDexForm(20, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(69, "Female"), akalaDexForm(27, "Female"), ulaulaDexForm(36, "Female"), poniDexForm(20, "Female"),], },
				],
			},
			{ id: 70, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(70), akalaDex(28), ulaulaDex(37), poniDex(21),], },
			{
				id: 71, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(71), akalaDex(29), ulaulaDex(38), poniDex(22),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(71, "Kantonian"), akalaDexForm(29, "Kantonian"), ulaulaDexForm(38, "Kantonian"), poniDexForm(22, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(71, "Alolan"), akalaDexForm(29, "Alolan"), ulaulaDexForm(38, "Alolan"), poniDexForm(22, "Alolan"),], },
				],
			},
			{
				id: 72, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(72), akalaDex(30), ulaulaDex(39), poniDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(72, "Kantonian"), akalaDexForm(30, "Kantonian"), ulaulaDexForm(39, "Kantonian"), poniDexForm(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(72, "Alolan"), akalaDexForm(30, "Alolan"), ulaulaDexForm(39, "Alolan"), poniDexForm(23, "Alolan"),], },
				],
			},
			{ id: 73, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(73), ulaulaDex(40), poniDex(24),], },
			{ id: 74, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(74), ulaulaDex(41), poniDex(25),], },
			{ id: 75, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [melemeleDex(75), poniDex(26),], },
			{ id: 76, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [melemeleDex(76), poniDex(27),], },
			{ id: 77, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [melemeleDex(77), poniDex(28),], },
			{ id: 78, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [melemeleDex(78), poniDex(29),], },
			{ id: 79, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [melemeleDex(79), poniDex(30),], },
			{ id: 80, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [melemeleDex(80), poniDex(31),], },
			{ id: 81, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: [melemeleDex(81)], },
			{
				id: 82, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDex(82), akalaDex(31), ulaulaDex(42), poniDex(32),], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), dexSync: [melemeleDexForm(82, "Baile Style"), akalaDexForm(31, "Baile Style"), ulaulaDexForm(42, "Baile Style"), poniDexForm(32, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82, "Pa'u Style"), akalaDexForm(31, "Pa'u Style"), ulaulaDexForm(42, "Pa'u Style"), poniDexForm(32, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [melemeleDexForm(82, "Pom-Pom Style"), akalaDexForm(31, "Pom-Pom Style"), ulaulaDexForm(42, "Pom-Pom Style"), poniDexForm(32, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(82, "Sensu Style"), akalaDexForm(31, "Sensu Style"), ulaulaDexForm(42, "Sensu Style"), poniDexForm(32, "Sensu Style"),], },
				],
			},
			{ id: 83, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(83), ulaulaDex(43), poniDex(33),], },
			{ id: 84, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(84), ulaulaDex(44), poniDex(34),], },
			{ id: 85, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(85), ulaulaDex(45), poniDex(35),], },
			{ id: 86, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(86), ulaulaDex(46), poniDex(36),], },
			{ id: 87, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(87), ulaulaDex(47), poniDex(37),], },
			{ id: 88, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(88), ulaulaDex(48), poniDex(38),], },
			{ id: 89, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(89), akalaDex(32), ulaulaDex(49), poniDex(39),], },
			{ id: 90, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(90), akalaDex(33), ulaulaDex(50), poniDex(40),], },
			{
				id: 91, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(91), akalaDex(34), ulaulaDex(51), poniDex(41),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(91, "Male"), akalaDexForm(34, "Male"), ulaulaDexForm(51, "Male"), poniDexForm(41, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(91, "Female"), akalaDexForm(34, "Female"), ulaulaDexForm(51, "Female"), poniDexForm(41, "Female"),], },
				],
			},
			{
				id: 92, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(92), akalaDex(35), ulaulaDex(52), poniDex(42),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(92, "Male"), akalaDexForm(35, "Male"), ulaulaDexForm(52, "Male"), poniDexForm(42, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(92, "Female"), akalaDexForm(35, "Female"), ulaulaDexForm(52, "Female"), poniDexForm(42, "Female"),], },
				],
			},
			{ id: 93, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(93), akalaDex(36), poniDex(43),], },
			{ id: 94, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(94), akalaDex(37), poniDex(44),], },
			{ id: 95, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [melemeleDex(95), poniDex(45),], },
			{ id: 96, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [melemeleDex(96), poniDex(46),], },
			{ id: 97, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [melemeleDex(97), poniDex(47),], },
			{ id: 98, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [melemeleDex(98), poniDex(48),], },
			{ id: 99, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [melemeleDex(99), poniDex(49),], },
			{ id: 100, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [melemeleDex(100), poniDex(50),], },
			{ id: 101, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [melemeleDex(101), poniDex(51),], },
			{ id: 102, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [melemeleDex(102), poniDex(52),], },
			{ id: 103, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [melemeleDex(103), poniDex(53),], },
			{
				id: 104, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDex(104), poniDex(54),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDexForm(104, "Midday"), poniDexForm(54, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [melemeleDexForm(104, "Midnight"), poniDexForm(54, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [melemeleDexForm(104, "Dusk"), poniDexForm(54, "Dusk"),], },
				],
			},
			{ id: 105, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: [melemeleDex(105)], },
			{ id: 106, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(106), akalaDex(38), ulaulaDex(53), poniDex(55),], },
			{ id: 107, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(107), akalaDex(39), ulaulaDex(54), poniDex(56),], },
			{
				id: 108, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(108), akalaDex(40), ulaulaDex(55), poniDex(57),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(108, "Male"), akalaDexForm(40, "Male"), ulaulaDexForm(55, "Male"), poniDexForm(57, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(108, "Female"), akalaDexForm(40, "Female"), ulaulaDexForm(55, "Female"), poniDexForm(57, "Female"),], },
				],
			},
			{
				id: 109, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(109), akalaDex(41), ulaulaDex(56), poniDex(58),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(109, "Male"), akalaDexForm(41, "Male"), ulaulaDexForm(56, "Male"), poniDexForm(58, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(109, "Female"), akalaDexForm(41, "Female"), ulaulaDexForm(56, "Female"), poniDexForm(58, "Female"),], },
				],
			},
			{ id: 110, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(110), akalaDex(42), ulaulaDex(57),], },
			{ id: 111, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [melemeleDex(111), akalaDex(43),], },
			{ id: 112, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [melemeleDex(112), akalaDex(44),], },
			{ id: 113, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [melemeleDex(113), akalaDex(45),], },
			{ id: 114, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [melemeleDex(114), akalaDex(46),], },
			{ id: 115, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: [melemeleDex(115)], },
			{ id: 116, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: [melemeleDex(116)], },
			{ id: 117, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), dexSync: [melemeleDex(117)], },
			{ id: 118, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), dexSync: [melemeleDex(118)], },
			{ id: 119, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), dexSync: [melemeleDex(119)], },
			{ id: 120, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), dexSync: [akalaDex(47)], },
			{ id: 121, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), dexSync: [akalaDex(48)], },
			{ id: 122, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), dexSync: [akalaDex(49)], },
			{ id: 123, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: [akalaDex(50)], },
			{ id: 124, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: [akalaDex(51)], },
			{ id: 125, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: [akalaDex(52)], },
			{ id: 126, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: [akalaDex(53)], },
			{ id: 127, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: [akalaDex(54)], },
			{ id: 128, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: [akalaDex(55)], },
			{ id: 129, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), dexSync: [akalaDex(56)], },
			{ id: 130, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), dexSync: [akalaDex(57)], },
			{ id: 131, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), dexSync: [akalaDex(58)], },
			{ id: 132, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(59), ulaulaDex(58), poniDex(59),], },
			{ id: 133, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(60), ulaulaDex(59), poniDex(60),], },
			{ id: 134, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: [akalaDex(61)], },
			{ id: 135, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: [akalaDex(62)], },
			{ id: 136, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: [akalaDex(63)], },
			{ id: 137, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [akalaDex(64), poniDex(61),], },
			{ id: 138, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [akalaDex(65), poniDex(62),], },
			{ id: 139, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [akalaDex(66), ulaulaDex(60),], },
			{ id: 140, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [akalaDex(67), ulaulaDex(61),], },
			{ id: 141, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [akalaDex(68), ulaulaDex(62),], },
			{ id: 142, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [akalaDex(69), ulaulaDex(63),], },
			{ id: 143, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [akalaDex(70)], },
			{ id: 144, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [akalaDex(71)], },
			{ id: 145, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [akalaDex(72), ulaulaDex(64),], },
			{ id: 146, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [akalaDex(73), ulaulaDex(65),], },
			{ id: 147, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [akalaDex(74), ulaulaDex(66),], },
			{ id: 148, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [akalaDex(75), ulaulaDex(67),], },
			{ id: 149, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [akalaDex(76), ulaulaDex(68),], },
			{ id: 150, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [akalaDex(77), ulaulaDex(69),], },
			{ id: 151, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [akalaDex(78), ulaulaDex(70),], },
			{
				id: 152, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDex(79), ulaulaDex(71),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDexForm(79, "Male"), ulaulaDexForm(71, "Male"),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [akalaDexForm(79, "Female"), ulaulaDexForm(71, "Female"),], },
				],
			},
			{
				id: 153, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDex(80), ulaulaDex(72),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDexForm(80, "Male"), ulaulaDexForm(72, "Male"),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [akalaDexForm(80, "Female"), ulaulaDexForm(72, "Female"),], },
				],
			},
			{
				id: 154, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDex(81), ulaulaDex(73),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDexForm(81, "Male"), ulaulaDexForm(73, "Male"),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [akalaDexForm(81, "Female"), ulaulaDexForm(73, "Male"),], },
				],
			},
			{ id: 155, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [akalaDex(82)], },
			{
				id: 156, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [akalaDex(83)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [akalaDexForm(83, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [akalaDexForm(83, "sun")], },
				],
			},
			{ id: 157, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [akalaDex(84)], },
			{ id: 158, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [akalaDex(85)], },
			{ id: 159, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [akalaDex(86)], },
			{ id: 160, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [akalaDex(87)], },
			{ id: 161, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [akalaDex(88)], },
			{ id: 162, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [akalaDex(89)], },
			{ id: 163, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), dexSync: [akalaDex(90)], },
			{
				id: 164, name: "Marowak", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [akalaDex(91)], forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), dexSync: [akalaDexForm(91, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [akalaDexForm(91, "Alolan")], },
				],
			},
			{ id: 165, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), dexSync: [akalaDex(92)], },
			{ id: 166, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), dexSync: [akalaDex(93)], },
			{ id: 167, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), dexSync: [akalaDex(94)], },
			{ id: 168, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), dexSync: [akalaDex(95)], },
			{ id: 169, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [akalaDex(96), poniDex(63),], },
			{ id: 170, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [akalaDex(97), poniDex(64),], },
			{ id: 171, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), dexSync: [akalaDex(98)], },
			{ id: 172, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), dexSync: [akalaDex(99)], },
			{ id: 173, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), dexSync: [akalaDex(100)], },
			{ id: 174, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), dexSync: [akalaDex(101)], },
			{ id: 175, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [akalaDex(102), poniDex(65),], },
			{ id: 176, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), dexSync: [akalaDex(103)], },
			{ id: 177, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), dexSync: [akalaDex(104)], },
			{ id: 178, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(105), ulaulaDex(74), poniDex(66),], },
			{ id: 179, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(106), ulaulaDex(75), poniDex(67),], },
			{ id: 180, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(107), ulaulaDex(76), poniDex(68),], },
			{
				id: 181, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(108), ulaulaDex(77), poniDex(69),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDexForm(108, "Normal"), ulaulaDexForm(77, "Normal"), poniDexForm(69, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDexForm(108, "Rainy"), ulaulaDexForm(77, "Rainy"), poniDexForm(69, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDexForm(108, "Snowy"), ulaulaDexForm(77, "Snowy"), poniDexForm(69, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDexForm(108, "Sunny"), ulaulaDexForm(77, "Sunny"), poniDexForm(69, "Sunny"),], },
				],
			},
			{ id: 182, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [akalaDex(109), poniDex(70),], },
			{ id: 183, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [akalaDex(110), poniDex(71),], },
			{ id: 184, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: [akalaDex(111)], },
			{ id: 185, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: [akalaDex(112)], },
			{ id: 186, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), dexSync: [akalaDex(113)], },
			{ id: 187, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), dexSync: [akalaDex(114)], },
			{ id: 188, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [akalaDex(115)], },
			{ id: 189, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [akalaDex(116)], },
			{ id: 190, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [akalaDex(117)], },
			{ id: 191, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [akalaDex(118)], },
			{ id: 192, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), dexSync: [akalaDex(119)], },
			{ id: 193, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), dexSync: [akalaDex(120)], },
			{ id: 194, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), dexSync: [akalaDex(121)], },
			{ id: 195, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), dexSync: [akalaDex(122)], },
			{ id: 196, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: [akalaDex(123)], },
			{ id: 197, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: [akalaDex(124)], },
			{ id: 198, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), dexSync: [akalaDex(125)], },
			{ id: 199, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), dexSync: [akalaDex(126)], },
			{ id: 200, name: "Pyukumuku", img: baseSprite(771), imgS: shinySprite(771), dexSync: [akalaDex(127)], },
			{ id: 201, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: [akalaDex(128)], },
			{ id: 202, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: [akalaDex(129)], },
			{ id: 203, name: "Type: Null", img: baseSprite(772), imgS: shinySprite(772), legendary: true, },
			{ id: 204, name: "Silvally", img: baseSprite(773), imgS: shinySprite(773), legendary: true, },
			{
				id: 205, name: "Zygarde", img: baseSprite(718), imgS: shinySprite(718), legendary: true, forms: [
					{ name: "10%", img: baseSprite("718-10"), imgS: shinySprite("718-10"), legendary: true, },
					{ name: "50%", img: baseSprite(718), imgS: shinySprite(718), legendary: true, },
				],
			},
			{ id: 206, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: [ulaulaDex(78)], },
			{ id: 207, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: [ulaulaDex(79)], },
			{ id: 208, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [ulaulaDex(80), poniDex(72),], },
			{ id: 209, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: [ulaulaDex(81)], },
			{ id: 210, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [ulaulaDex(82)], },
			{ id: 211, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [ulaulaDex(83)], },
			{ id: 212, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [ulaulaDex(84)], },
			{
				id: 213, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), dexSync: [ulaulaDex(85)], forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), dexSync: [ulaulaDexForm(85, "Blue Core")], },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), dexSync: [ulaulaDexForm(85, "Green Core")], },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), dexSync: [ulaulaDexForm(85, "Indigo Core")], },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), dexSync: [ulaulaDexForm(85, "Orange Core")], },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), dexSync: [ulaulaDexForm(85, "Red Core")], },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), dexSync: [ulaulaDexForm(85, "Violet Core")], },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), dexSync: [ulaulaDexForm(85, "Yellow Core")], },
				],
			},
			{ id: 214, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), dexSync: [ulaulaDex(86)], },
			{ id: 215, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), dexSync: [ulaulaDex(87)], },
			{ id: 216, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), dexSync: [ulaulaDex(88)], },
			{ id: 217, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), dexSync: [ulaulaDex(89)], },
			{ id: 218, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), dexSync: [ulaulaDex(90)], },
			{ id: 219, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), dexSync: [ulaulaDex(91)], },
			{ id: 220, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), dexSync: [ulaulaDex(92)], },
			{ id: 221, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), dexSync: [ulaulaDex(93)], },
			{ id: 222, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), dexSync: [ulaulaDex(94)], },
			{ id: 223, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [ulaulaDex(95)], },
			{ id: 224, name: "Turtonator", img: baseSprite(776), imgS: shinySprite(776), dexSync: [ulaulaDex(96)], },
			{ id: 225, name: "Togedemaru", img: baseSprite(777), imgS: shinySprite(777), dexSync: [ulaulaDex(97)], },
			{ id: 226, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), dexSync: [ulaulaDex(98)], },
			{ id: 227, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), dexSync: [ulaulaDex(99)], },
			{ id: 228, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), dexSync: [ulaulaDex(100)], },
			{
				id: 229, name: "Geodude", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [ulaulaDex(101)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [ulaulaDexForm(101, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [ulaulaDexForm(101, "Alolan")], },
				],
			},
			{
				id: 230, name: "Graveler", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [ulaulaDex(102)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [ulaulaDexForm(102, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [ulaulaDexForm(102, "Alolan")], },
				],
			},
			{
				id: 231, name: "Golem", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [ulaulaDex(103)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [ulaulaDexForm(103, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [ulaulaDexForm(103, "Alolan")], },
				],
			},
			{ id: 232, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [ulaulaDex(104)], },
			{ id: 233, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [ulaulaDex(105)], },
			{ id: 234, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [ulaulaDex(106)], },
			{ id: 235, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: [ulaulaDex(107)], },
			{ id: 236, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: [ulaulaDex(108)], },
			{ id: 237, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: [ulaulaDex(109)], },
			{
				id: 238, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [ulaulaDex(110)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [ulaulaDexForm(110, "Male")], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [ulaulaDexForm(110, "Female")], },
				],
			},
			{
				id: 239, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [ulaulaDex(111)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [ulaulaDexForm(111, "Male")], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [ulaulaDexForm(111, "Female")], },
				],
			},
			{
				id: 240, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [ulaulaDex(112)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [ulaulaDexForm(112, "Male")], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [ulaulaDexForm(112, "Female")], },
				],
			},
			{ id: 241, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), dexSync: [ulaulaDex(113)], },
			{ id: 242, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [ulaulaDex(114)], },
			{ id: 243, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [ulaulaDex(115)], },
			{ id: 244, name: "Drampa", img: baseSprite(780), imgS: shinySprite(780), dexSync: [ulaulaDex(116)], },
			{ id: 245, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), dexSync: [ulaulaDex(117)], },
			{ id: 246, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [ulaulaDex(118)], },
			{ id: 247, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [ulaulaDex(119)], },
			{ id: 248, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [ulaulaDex(120)], },
			{
				id: 249, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [ulaulaDex(121)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [ulaulaDexForm(121, "Male")], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [ulaulaDexForm(121, "Female")], },
				],
			},
			{
				id: 250, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [ulaulaDex(122)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [ulaulaDexForm(122, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [ulaulaDexForm(122, "Female")], },
				],
			},
			{
				id: 251, name: "Sandshrew", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [ulaulaDex(123)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [ulaulaDexForm(123, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [ulaulaDexForm(123, "Alolan")], },
				],
			},
			{
				id: 252, name: "Sandslash", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [ulaulaDex(124)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [ulaulaDexForm(124, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [ulaulaDexForm(124, "Alolan")], },
				],
			},
			{
				id: 253, name: "Vulpix", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [ulaulaDex(125)], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [ulaulaDexForm(125, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [ulaulaDexForm(125, "Alolan")], },
				],
			},
			{
				id: 254, name: "Ninetales", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [ulaulaDex(126)], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [ulaulaDexForm(126, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [ulaulaDexForm(126, "Alolan")], },
				],
			},
			{ id: 255, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [ulaulaDex(127)], },
			{ id: 256, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [ulaulaDex(128)], },
			{ id: 257, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [ulaulaDex(129)], },
			{ id: 258, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), dexSync: [poniDex(73)], },
			{ id: 259, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), dexSync: [poniDex(74)], },
			{
				id: 260, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [poniDex(75)], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), dexSync: [poniDexForm(75, "West Sea")], },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: [poniDexForm(75, "East Sea")], },
				],
			},
			{
				id: 261, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [poniDex(76)], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), dexSync: [poniDexForm(76, "West Sea")], },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: [poniDexForm(76, "East Sea")], },
				],
			},
			{
				id: 262, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), dexSync: [poniDex(77)], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), dexSync: [poniDexForm(77, "Male")], },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), dexSync: [poniDexForm(77, "Female")], },
				],
			},
			{ id: 263, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), dexSync: [poniDex(78)], },
			{ id: 264, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: [poniDex(79)], },
			{ id: 265, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: [poniDex(80)], },
			{ id: 266, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: [poniDex(81)], },
			{ id: 267, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: [poniDex(82)], },
			{ id: 268, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: [poniDex(83)], },
			{ id: 269, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), dexSync: [poniDex(84)], },
			{
				id: 270, name: "Exeggutor", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [poniDex(85)], forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), dexSync: [poniDexForm(85, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [poniDexForm(85, "Alolan")], },
				],
			},
			{ id: 271, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), dexSync: [poniDex(86)], },
			{ id: 272, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), dexSync: [poniDex(87)], },
			{ id: 273, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), dexSync: [poniDex(88)], },
			{ id: 274, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), dexSync: [poniDex(89)], },
			{
				id: 275, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [poniDex(90)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [poniDexForm(90, "Male")], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [poniDexForm(90, "Female")], },
				],
			},
			{
				id: 276, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [poniDex(91)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [poniDexForm(91, "Male")], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [poniDexForm(91, "Female")], },
				],
			},
			{
				id: 277, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [poniDex(92)], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: [poniDexForm(92, "Male")], },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: [poniDexForm(92, "Female")], },
				],
			},
			{ id: 278, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [poniDex(93)], },
			{ id: 279, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [poniDex(94)], },
			{ id: 280, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [poniDex(95)], },
			{ id: 281, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: [poniDex(96)], },
			{ id: 282, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: [poniDex(97)], },
			{ id: 283, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: [poniDex(98)], },
			{ id: 284, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), dexSync: [poniDex(99)], },
			{ id: 285, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, dexSync: [melemeleDex(120)], },
			{ id: 286, name: "Tapu Lele", img: baseSprite(786), imgS: shinySprite(786), legendary: true, dexSync: [akalaDex(130)], },
			{ id: 287, name: "Tapu Bulu", img: baseSprite(787), imgS: shinySprite(787), legendary: true, dexSync: [ulaulaDex(130)], },
			{ id: 288, name: "Tapu Fini", img: baseSprite(788), imgS: shinySprite(788), legendary: true, dexSync: [poniDex(100)], },
			{ id: 289, name: "Cosmog", img: baseSprite(789), imgS: shinySprite(789), maxStatus: "caught", legendary: true, },
			{ id: 290, name: "Cosmoem", img: baseSprite(790), imgS: shinySprite(790), maxStatus: "caught", legendary: true, },
			{ id: 291, name: "Solgaleo", img: baseSprite(791), imgS: shinySprite(791), legendary: true, },
			{ id: 292, name: "Lunala", img: baseSprite(792), imgS: shinySprite(792), legendary: true, },
			{ id: 293, name: "Nihilego", img: baseSprite(793), imgS: shinySprite(793), },
			{ id: 294, name: "Buzzwole", img: baseSprite(794), imgS: shinySprite(794), },
			{ id: 295, name: "Pheromosa", img: baseSprite(795), imgS: shinySprite(795), },
			{ id: 296, name: "Xurkitree", img: baseSprite(796), imgS: shinySprite(796), },
			{ id: 297, name: "Celesteela", img: baseSprite(797), imgS: shinySprite(797), },
			{ id: 298, name: "Kartana", img: baseSprite(798), imgS: shinySprite(798), },
			{ id: 299, name: "Guzzlord", img: baseSprite(799), imgS: shinySprite(799), },
			{ id: 300, name: "Necrozma", img: baseSprite(800), imgS: shinySprite(800), legendary: true, },
			{
				id: 301, name: "Magearna", img: baseSprite(801), imgS: shinySprite(801), maxStatus: "caught", mythical: true, forms: [
					{ name: "Normal", img: baseSprite(801), imgS: shinySprite(801), maxStatus: "caught", mythical: true, },
					{ name: "Original Color", img: baseSprite("801-o"), imgS: shinySprite("801-o"), maxStatus: "caught", mythical: true, },
				],
			},
			{ id: 302, name: "Marshadow", img: baseSprite(802), imgS: shinySprite(802), maxStatus: "caught", mythical: true, },
		],
	},
});