const game = "sun";
const sub = game + "-melemele";
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
	[sub]: "Melemele Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), dexSync: alolaDex(1), },
			{ id: 2, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), dexSync: alolaDex(2), },
			{ id: 3, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), dexSync: alolaDex(3), },
			{ id: 4, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), dexSync: alolaDex(4), },
			{ id: 5, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), dexSync: alolaDex(5), },
			{ id: 6, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), dexSync: alolaDex(6), },
			{ id: 7, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), dexSync: alolaDex(7), },
			{ id: 8, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), dexSync: alolaDex(8), },
			{ id: 9, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), dexSync: alolaDex(9), },
			{ id: 10, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [alolaDex(10), akalaDex(1), ulaulaDex(1), poniDex(1),], },
			{ id: 11, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [alolaDex(11), akalaDex(2), ulaulaDex(2), poniDex(2),], },
			{ id: 12, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [alolaDex(12), akalaDex(3), ulaulaDex(3), poniDex(3),], },
			{ id: 13, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [alolaDex(13), akalaDex(4), ulaulaDex(4), poniDex(4),], },
			{ id: 14, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [alolaDex(14), akalaDex(5), ulaulaDex(5), poniDex(5),], },
			{
				id: 15, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [alolaDex(15), akalaDex(6), ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [alolaDexForm(15, "Kantonian Male"), akalaDexForm(6, "Kantonian Male"), ulaulaDexForm(6, "Kantonian Male"), poniDexForm(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [alolaDexForm(15, "Kantonian Female"), akalaDexForm(6, "Kantonian Female"), ulaulaDexForm(6, "Kantonian Female"), poniDexForm(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [alolaDexForm(15, "Alolan"), akalaDexForm(6, "Alolan"), ulaulaDexForm(6, "Alolan"), poniDexForm(6, "Alolan"),], },
				],
			},
			{
				id: 16, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [alolaDex(16), akalaDex(7), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [alolaDexForm(16, "Kantonian Male"), akalaDexForm(7, "Kantonian Male"), ulaulaDexForm(7, "Kantonian Male"), poniDexForm(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [alolaDexForm(16, "Kantonian Female"), akalaDexForm(7, "Kantonian Female"), ulaulaDexForm(7, "Kantonian Female"), poniDexForm(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [alolaDexForm(16, "Alolan"), akalaDexForm(7, "Alolan"), ulaulaDexForm(7, "Alolan"), poniDexForm(7, "Alolan"),], },
				],
			},
			{ id: 17, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [alolaDex(17), akalaDex(8),], },
			{ id: 18, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [alolaDex(18), akalaDex(9),], },
			{
				id: 19, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [alolaDex(19), akalaDex(10),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [alolaDexForm(19, "Male"), akalaDexForm(10, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [alolaDexForm(19, "Female"), akalaDexForm(10, "Female"),], },
				],
			},
			{
				id: 20, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [alolaDex(20), ulaulaDex(8),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [alolaDexForm(20, "Male"), ulaulaDexForm(8, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [alolaDexForm(20, "Female"), ulaulaDexForm(8, "Female"),], },
				],
			},
			{
				id: 21, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [alolaDex(21), ulaulaDex(9),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [alolaDexForm(21, "Male"), ulaulaDexForm(9, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [alolaDexForm(21, "Female"), ulaulaDexForm(9, "Female"),], },
				],
			},
			{ id: 22, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [alolaDex(22), ulaulaDex(10),], },
			{ id: 23, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [alolaDex(23), ulaulaDex(11),], },
			{ id: 24, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: alolaDex(24), },
			{
				id: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: alolaDex(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [alolaDexForm(25, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [alolaDexForm(25, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), dexSync: [alolaDexForm(25, "Alola Cap")], maxStatus: "caught", mythical: true },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), dexSync: [alolaDexForm(25, "Hoenn Cap")], maxStatus: "caught", mythical: true },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), dexSync: [alolaDexForm(25, "Kalos Cap")], maxStatus: "caught", mythical: true },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), dexSync: [alolaDexForm(25, "Original Cap")], maxStatus: "caught", mythical: true },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), dexSync: [alolaDexForm(25, "Partner Cap")], maxStatus: "caught", mythical: true },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), dexSync: [alolaDexForm(25, "Sinnoh Cap")], maxStatus: "caught", mythical: true },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), dexSync: [alolaDexForm(25, "Unova Cap")], maxStatus: "caught", mythical: true },
				],
			},
			{
				id: 26, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: alolaDex(26), forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [alolaDexForm(26, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [alolaDexForm(26, "Kantonian Female")], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [alolaDexForm(26, "Alolan")], },
				],
			},
			{ id: 27, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [alolaDex(27), akalaDex(11), ulaulaDex(12),], },
			{ id: 28, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [alolaDex(28), akalaDex(12), ulaulaDex(13),], },
			{ id: 29, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [alolaDex(29), akalaDex(13), ulaulaDex(14),], },
			{ id: 30, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [alolaDex(30), akalaDex(14),], },
			{
				id: 31, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [alolaDex(31), akalaDex(15),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [alolaDexForm(31, "Male"), akalaDexForm(15, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [alolaDexForm(31, "Female"), akalaDexForm(15, "Female"),], },
				],
			},
			{ id: 32, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [alolaDex(32), akalaDex(16), ulaulaDex(15), poniDex(8),], },
			{ id: 33, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [alolaDex(33), akalaDex(17), ulaulaDex(16), poniDex(9),], },
			{ id: 34, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [alolaDex(34), akalaDex(18), ulaulaDex(17), poniDex(10),], },
			{ id: 35, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: alolaDex(35), },
			{ id: 36, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: alolaDex(36), },
			{ id: 37, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [alolaDex(37), ulaulaDex(18),], },
			{ id: 38, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [alolaDex(38), ulaulaDex(19),], },
			{ id: 39, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [alolaDex(39), ulaulaDex(20),], },
			{ id: 40, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [alolaDex(40), akalaDex(19), ulaulaDex(21), poniDex(11),], },
			{ id: 41, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [alolaDex(41), akalaDex(20), ulaulaDex(22), poniDex(12),], },
			{ id: 42, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: alolaDex(42), },
			{
				id: 43, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: alolaDex(43), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: [alolaDexForm(43, "Male")], },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: [alolaDexForm(43, "Female")], },
				],
			},
			{
				id: 44, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: alolaDex(44), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: [alolaDexForm(44, "Male")], },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: [alolaDexForm(44, "Female")], },
				],
			},
			{
				id: 45, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [alolaDex(45), ulaulaDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [alolaDexForm(45, "Kantonian"), ulaulaDexForm(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [alolaDexForm(45, "Alolan"), ulaulaDexForm(23, "Alolan"),], },
				],
			},
			{
				id: 46, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [alolaDex(46), ulaulaDex(24),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [alolaDexForm(46, "Kantonian"), ulaulaDexForm(24, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [alolaDexForm(46, "Alolan"), ulaulaDexForm(24, "Alolan"),], },
				],
			},
			{ id: 47, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [alolaDex(47), ulaulaDex(25),], },
			{ id: 48, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [alolaDex(48), ulaulaDex(26),], },
			{ id: 49, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [alolaDex(49), ulaulaDex(27),], },
			{
				id: 50, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [alolaDex(50), ulaulaDex(28),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [alolaDexForm(50, "Kantonian"), ulaulaDexForm(28, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [alolaDexForm(50, "Alolan"), ulaulaDexForm(28, "Alolan"),], },
				],
			},
			{
				id: 51, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [alolaDex(51), ulaulaDex(29),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [alolaDexForm(51, "Kantonian"), ulaulaDexForm(29, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [alolaDexForm(51, "Alolan"), ulaulaDexForm(29, "Alolan"),], },
				],
			},
			{ id: 52, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: alolaDex(52), },
			{ id: 53, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: alolaDex(53), },
			{ id: 54, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [alolaDex(54), poniDex(13),], },
			{
				id: 55, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [alolaDex(55), poniDex(14),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [alolaDexForm(55, "Male"), poniDexForm(14, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [alolaDexForm(55, "Female"), poniDexForm(14, "Female"),], },
				],
			},
			{ id: 56, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [alolaDex(56), poniDex(15),], },
			{ id: 57, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [alolaDex(57), poniDex(16),], },
			{ id: 58, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: alolaDex(58), },
			{ id: 59, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [alolaDex(59), akalaDex(21), ulaulaDex(30), poniDex(17),], },
			{ id: 60, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [alolaDex(60), akalaDex(22), ulaulaDex(31), poniDex(18),], },
			{ id: 61, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [alolaDex(61), akalaDex(23), ulaulaDex(32),], },
			{ id: 62, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [alolaDex(62), akalaDex(24), ulaulaDex(33),], },
			{ id: 63, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [alolaDex(63), akalaDex(25), ulaulaDex(34),], },
			{ id: 64, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: alolaDex(64), },
			{ id: 65, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: alolaDex(65), },
			{ id: 66, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: alolaDex(66), },
			{ id: 67, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: alolaDex(67), },
			{
				id: 68, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [alolaDex(68), akalaDex(26), ulaulaDex(35), poniDex(19),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [alolaDexForm(68, "Male"), akalaDexForm(26, "Male"), ulaulaDexForm(35, "Male"), poniDexForm(19, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [alolaDexForm(68, "Female"), akalaDexForm(26, "Female"), ulaulaDexForm(35, "Female"), poniDexForm(19, "Female"),], },
				],
			},
			{
				id: 69, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [alolaDex(69), akalaDex(27), ulaulaDex(36), poniDex(20),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [alolaDexForm(69, "Male"), akalaDexForm(27, "Male"), ulaulaDexForm(36, "Male"), poniDexForm(20, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [alolaDexForm(69, "Female"), akalaDexForm(27, "Female"), ulaulaDexForm(36, "Female"), poniDexForm(20, "Female"),], },
				],
			},
			{ id: 70, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [alolaDex(70), akalaDex(28), ulaulaDex(37), poniDex(21),], },
			{
				id: 71, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [alolaDex(71), akalaDex(29), ulaulaDex(38), poniDex(22),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [alolaDexForm(71, "Kantonian"), akalaDexForm(29, "Kantonian"), ulaulaDexForm(38, "Kantonian"), poniDexForm(22, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [alolaDexForm(71, "Alolan"), akalaDexForm(29, "Alolan"), ulaulaDexForm(38, "Alolan"), poniDexForm(22, "Alolan"),], },
				],
			},
			{
				id: 72, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [alolaDex(72), akalaDex(30), ulaulaDex(39), poniDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [alolaDexForm(72, "Kantonian"), akalaDexForm(30, "Kantonian"), ulaulaDexForm(39, "Kantonian"), poniDexForm(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [alolaDexForm(72, "Alolan"), akalaDexForm(30, "Alolan"), ulaulaDexForm(39, "Alolan"), poniDexForm(23, "Alolan"),], },
				],
			},
			{ id: 73, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [alolaDex(73), ulaulaDex(40), poniDex(24),], },
			{ id: 74, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [alolaDex(74), ulaulaDex(41), poniDex(25),], },
			{ id: 75, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [alolaDex(75), poniDex(26),], },
			{ id: 76, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [alolaDex(76), poniDex(27),], },
			{ id: 77, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [alolaDex(77), poniDex(28),], },
			{ id: 78, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [alolaDex(78), poniDex(29),], },
			{ id: 79, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [alolaDex(79), poniDex(30),], },
			{ id: 80, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [alolaDex(80), poniDex(31),], },
			{ id: 81, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: alolaDex(81), },
			{
				id: 82, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [alolaDex(82), akalaDex(31), ulaulaDex(42), poniDex(32),], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), dexSync: [alolaDexForm(82, "Baile Style"), akalaDexForm(31, "Baile Style"), ulaulaDexForm(42, "Baile Style"), poniDexForm(32, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [alolaDexForm(82, "Pa'u Style"), akalaDexForm(31, "Pa'u Style"), ulaulaDexForm(42, "Pa'u Style"), poniDexForm(32, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [alolaDexForm(82, "Pom-Pom Style"), akalaDexForm(31, "Pom-Pom Style"), ulaulaDexForm(42, "Pom-Pom Style"), poniDexForm(32, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [alolaDexForm(82, "Sensu Style"), akalaDexForm(31, "Sensu Style"), ulaulaDexForm(42, "Sensu Style"), poniDexForm(32, "Sensu Style"),], },
				],
			},
			{ id: 83, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [alolaDex(83), ulaulaDex(43), poniDex(33),], },
			{ id: 84, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [alolaDex(84), ulaulaDex(44), poniDex(34),], },
			{ id: 85, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [alolaDex(85), ulaulaDex(45), poniDex(35),], },
			{ id: 86, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [alolaDex(86), ulaulaDex(46), poniDex(36),], },
			{ id: 87, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [alolaDex(87), ulaulaDex(47), poniDex(37),], },
			{ id: 88, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [alolaDex(88), ulaulaDex(48), poniDex(38),], },
			{ id: 89, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [alolaDex(89), akalaDex(32), ulaulaDex(49), poniDex(39),], },
			{ id: 90, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [alolaDex(90), akalaDex(33), ulaulaDex(50), poniDex(40),], },
			{
				id: 91, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [alolaDex(91), akalaDex(34), ulaulaDex(51), poniDex(41),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [alolaDexForm(91, "Male"), akalaDexForm(34, "Male"), ulaulaDexForm(51, "Male"), poniDexForm(41, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [alolaDexForm(91, "Female"), akalaDexForm(34, "Female"), ulaulaDexForm(51, "Female"), poniDexForm(41, "Female"),], },
				],
			},
			{
				id: 92, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [alolaDex(92), akalaDex(35), ulaulaDex(52), poniDex(42),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [alolaDexForm(92, "Male"), akalaDexForm(35, "Male"), ulaulaDexForm(52, "Male"), poniDexForm(42, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [alolaDexForm(92, "Female"), akalaDexForm(35, "Female"), ulaulaDexForm(52, "Female"), poniDexForm(42, "Female"),], },
				],
			},
			{ id: 93, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [alolaDex(93), akalaDex(36), poniDex(43),], },
			{ id: 94, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [alolaDex(94), akalaDex(37), poniDex(44),], },
			{ id: 95, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [alolaDex(95), poniDex(45),], },
			{ id: 96, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [alolaDex(96), poniDex(46),], },
			{ id: 97, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [alolaDex(97), poniDex(47),], },
			{ id: 98, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [alolaDex(98), poniDex(48),], },
			{ id: 99, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [alolaDex(99), poniDex(49),], },
			{ id: 100, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [alolaDex(100), poniDex(50),], },
			{ id: 101, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [alolaDex(101), poniDex(51),], },
			{ id: 102, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [alolaDex(102), poniDex(52),], },
			{ id: 103, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [alolaDex(103), poniDex(53),], },
			{
				id: 104, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [alolaDex(104), poniDex(54),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [alolaDexForm(104, "Midday"), poniDexForm(54, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [alolaDexForm(104, "Midnight"), poniDexForm(54, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [alolaDexForm(104, "Dusk"), poniDexForm(54, "Dusk"),], },
				],
			},
			{ id: 105, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: alolaDex(105), },
			{ id: 106, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [alolaDex(106), akalaDex(38), ulaulaDex(53), poniDex(55),], },
			{ id: 107, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [alolaDex(107), akalaDex(39), ulaulaDex(54), poniDex(56),], },
			{
				id: 108, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [alolaDex(108), akalaDex(40), ulaulaDex(55), poniDex(57),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [alolaDexForm(108, "Male"), akalaDexForm(40, "Male"), ulaulaDexForm(55, "Male"), poniDexForm(57, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [alolaDexForm(108, "Female"), akalaDexForm(40, "Female"), ulaulaDexForm(55, "Female"), poniDexForm(57, "Female"),], },
				],
			},
			{
				id: 109, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [alolaDex(109), akalaDex(41), ulaulaDex(56), poniDex(58),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [alolaDexForm(109, "Male"), akalaDexForm(41, "Male"), ulaulaDexForm(56, "Male"), poniDexForm(58, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [alolaDexForm(109, "Female"), akalaDexForm(41, "Female"), ulaulaDexForm(56, "Female"), poniDexForm(58, "Female"),], },
				],
			},
			{ id: 110, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [alolaDex(110), akalaDex(42), ulaulaDex(57),], },
			{ id: 111, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [alolaDex(111), akalaDex(43),], },
			{ id: 112, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [alolaDex(112), akalaDex(44),], },
			{ id: 113, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [alolaDex(113), akalaDex(45),], },
			{ id: 114, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [alolaDex(114), akalaDex(46),], },
			{ id: 115, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: alolaDex(115), },
			{ id: 116, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: alolaDex(116), },
			{ id: 117, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), dexSync: alolaDex(117), },
			{ id: 118, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), dexSync: alolaDex(118), },
			{ id: 119, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), dexSync: alolaDex(119), },
			{ id: 120, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, dexSync: alolaDex(285), },
		],
	},
});