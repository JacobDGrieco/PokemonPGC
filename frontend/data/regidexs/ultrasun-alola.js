const game = "ultrasun";
const sub = game + "-alola";
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
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15, "Alolan"), akalaDexForm(6, "Alolan"), ulaulaDexForm(6, "Alolan"), poniDexForm(6, "Alolan"),], },],
			},
			{
				id: 16, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), akalaDex(7), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16, "Kantonian Male"), akalaDexForm(7, "Kantonian Male"), ulaulaDexForm(7, "Kantonian Male"), poniDexForm(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16, "Kantonian Female"), akalaDexForm(7, "Kantonian Female"), ulaulaDexForm(7, "Kantonian Female"), poniDexForm(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16, "Alolan"), akalaDexForm(7, "Alolan"), ulaulaDexForm(7, "Alolan"), poniDexForm(7, "Alolan"),], },],
			},
			{ id: 17, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [melemeleDex(17), akalaDex(8),], },
			{ id: 18, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [melemeleDex(18), akalaDex(9),], },
			{
				id: 19, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDex(19), akalaDex(10),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDexForm(19, "Male"), akalaDexForm(10, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [melemeleDexForm(19, "Female"), akalaDexForm(10, "Female"),], },],
			},
			{
				id: 20, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDex(20), ulaulaDex(8),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [melemeleDexForm(20, "Male"), ulaulaDexForm(8, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [melemeleDexForm(20, "Female"), ulaulaDexForm(8, "Female"),], },],
			},
			{
				id: 21, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDex(21), ulaulaDex(9),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [melemeleDexForm(21, "Male"), ulaulaDexForm(9, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [melemeleDexForm(21, "Female"), ulaulaDexForm(9, "Female"),], },],
			},
			{ id: 22, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [melemeleDex(22), ulaulaDex(10),], },
			{ id: 23, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [melemeleDex(23), ulaulaDex(11),], },
			{ id: 24, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), dexSync: [melemeleDex(24), poniDex(8),], },
			{ id: 25, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), dexSync: [melemeleDex(25), poniDex(9),], },
			{ id: 26, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), dexSync: [melemeleDex(26), poniDex(10),], },
			{ id: 27, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), dexSync: [melemeleDex(27), poniDex(11),], },
			{ id: 28, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), dexSync: [melemeleDex(28), poniDex(12),], },
			{ id: 29, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), dexSync: [melemeleDex(29), poniDex(13),], },
			{
				id: 30, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), dexSync: [melemeleDex(30), poniDex(14),], forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), dexSync: [melemeleDexForm(30, "Natural Trim"), poniDexForm(14, "Natural Trim"),], },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), dexSync: [melemeleDexForm(30, "Heart Trim"), poniDexForm(14, "Heart Trim"),], },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), dexSync: [melemeleDexForm(30, "Star Trim"), poniDexForm(14, "Star Trim"),], },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), dexSync: [melemeleDexForm(30, "Diamond Trim"), poniDexForm(14, "Diamond Trim"),], },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), dexSync: [melemeleDexForm(30, "Debutante Trim"), poniDexForm(14, "Debutante Trim"),], },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), dexSync: [melemeleDexForm(30, "Matron Trim"), poniDexForm(14, "Matron Trim"),], },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), dexSync: [melemeleDexForm(30, "Dandy Trim"), poniDexForm(14, "Dandy Trim"),], },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), dexSync: [melemeleDexForm(30, "Le Reine Trim"), poniDexForm(14, "Le Reine Trim"),], },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), dexSync: [melemeleDexForm(30, "Kabuki Trim"), poniDexForm(14, "Kabuki Trim"),], },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), dexSync: [melemeleDexForm(30, "Pharaoh Trim"), poniDexForm(14, "Pharaoh Trim"),], },],
			},
			{ id: 31, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [melemeleDex(31)], },
			{
				id: 32, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [melemeleDex(32)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [melemeleDexForm(32, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [melemeleDexForm(32, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Alola Cap")], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Hoenn Cap")], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Kalos Cap")], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Original Cap")], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Partner Cap")], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Sinnoh Cap")], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", mythical: true, dexSync: [melemeleDexForm(32, "Unova Cap")], },],
			},
			{
				id: 33, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [melemeleDex(33)], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [melemeleDexForm(33, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [melemeleDexForm(33, "Kantonian Female")], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [melemeleDexForm(33, "Alolan")], },],
			},
			{ id: 34, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(34), akalaDex(11), ulaulaDex(12),], },
			{ id: 35, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(35), akalaDex(12), ulaulaDex(13),], },
			{ id: 36, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(36), akalaDex(13), ulaulaDex(14),], },
			{ id: 37, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [melemeleDex(37), akalaDex(14),], },
			{
				id: 38, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDex(38), akalaDex(15),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDexForm(38, "Male"), akalaDexForm(15, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [melemeleDexForm(38, "Female"), akalaDexForm(15, "Female"),], },],
			},
			{ id: 39, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(39), akalaDex(16), ulaulaDex(15), poniDex(15),], },
			{ id: 40, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(40), akalaDex(17), ulaulaDex(16), poniDex(16),], },
			{ id: 41, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(41), akalaDex(18), ulaulaDex(17), poniDex(17),], },
			{ id: 42, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [melemeleDex(42)], },
			{ id: 43, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [melemeleDex(43)], },
			{ id: 44, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [melemeleDex(44), ulaulaDex(18),], },
			{ id: 45, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [melemeleDex(45), ulaulaDex(19),], },
			{ id: 46, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [melemeleDex(46), ulaulaDex(20),], },
			{ id: 47, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(47), akalaDex(19), ulaulaDex(21), poniDex(18),], },
			{ id: 48, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(48), akalaDex(20), ulaulaDex(22), poniDex(19),], },
			{ id: 49, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: [melemeleDex(49)], },
			{
				id: 50, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: [melemeleDex(50)], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: [melemeleDexForm(50, "Male")], },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: [melemeleDexForm(50, "Female")], },],
			},
			{
				id: 51, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: [melemeleDex(51)], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: [melemeleDexForm(51, "Male")], },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: [melemeleDexForm(51, "Female")], },],
			},
			{
				id: 52, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDex(52), ulaulaDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [melemeleDexForm(52, "Kantonian"), ulaulaDexForm(23, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [melemeleDexForm(52, "Alolan"), ulaulaDexForm(23, "Alolan"),], },],
			},
			{
				id: 53, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDex(53), ulaulaDex(24),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [melemeleDexForm(53, "Kantonian"), ulaulaDexForm(24, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [melemeleDexForm(53, "Alolan"), ulaulaDexForm(24, "Alolan"),], },],
			},
			{ id: 54, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [melemeleDex(54), ulaulaDex(25),], },
			{ id: 55, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [melemeleDex(55), ulaulaDex(26),], },
			{ id: 56, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [melemeleDex(56), ulaulaDex(27),], },
			{
				id: 57, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDex(57), ulaulaDex(28),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [melemeleDexForm(57, "Kantonian"), ulaulaDexForm(28, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [melemeleDexForm(57, "Alolan"), ulaulaDexForm(28, "Alolan"),], },],
			},
			{
				id: 58, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDex(58), ulaulaDex(29),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [melemeleDexForm(58, "Kantonian"), ulaulaDexForm(29, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [melemeleDexForm(58, "Alolan"), ulaulaDexForm(29, "Alolan"),], },],
			},
			{ id: 59, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), dexSync: [melemeleDex(59)], },
			{ id: 60, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), dexSync: [melemeleDex(60)], },
			{ id: 61, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), dexSync: [melemeleDex(61)], },
			{ id: 62, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), dexSync: [melemeleDex(62)], },
			{ id: 63, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: [melemeleDex(63)], },
			{ id: 64, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: [melemeleDex(64)], },
			{ id: 65, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: [melemeleDex(65)], },
			{ id: 66, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [melemeleDex(66), poniDex(20),], },
			{
				id: 67, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDex(67), poniDex(21),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [melemeleDexForm(67, "Male"), poniDexForm(21, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [melemeleDexForm(67, "Female"), poniDexForm(21, "Female"),], },],
			},
			{ id: 68, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [melemeleDex(68), poniDex(22),], },
			{ id: 69, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [melemeleDex(69), poniDex(23),], },
			{ id: 70, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: [melemeleDex(70)], },
			{ id: 71, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(71), akalaDex(21), ulaulaDex(30), poniDex(24),], },
			{ id: 72, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(72), akalaDex(22), ulaulaDex(31), poniDex(25),], },
			{ id: 73, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(73), akalaDex(23), ulaulaDex(32),], },
			{ id: 74, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(74), akalaDex(24), ulaulaDex(33),], },
			{ id: 75, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(75), akalaDex(25), ulaulaDex(34),], },
			{ id: 76, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [melemeleDex(76)], },
			{ id: 77, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [melemeleDex(77)], },
			{
				id: 78, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [melemeleDex(78)], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: [melemeleDexForm(78, "Male")], },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: [melemeleDexForm(78, "Female")], },],
			},
			{ id: 79, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [melemeleDex(79)], },
			{
				id: 80, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(80), akalaDex(26), ulaulaDex(35), poniDex(26),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(80, "Male"), akalaDexForm(26, "Male"), ulaulaDexForm(35, "Male"), poniDexForm(26, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(80, "Female"), akalaDexForm(26, "Female"), ulaulaDexForm(35, "Female"), poniDexForm(26, "Female"),], },],
			},
			{
				id: 81, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(81), akalaDex(27), ulaulaDex(36), poniDex(27),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(81, "Male"), akalaDexForm(27, "Male"), ulaulaDexForm(36, "Male"), poniDexForm(27, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(81, "Female"), akalaDexForm(27, "Female"), ulaulaDexForm(36, "Female"), poniDexForm(27, "Female"),], },],
			},
			{ id: 82, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(82), akalaDex(28), ulaulaDex(37), poniDex(28),], },
			{ id: 83, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [melemeleDex(83), poniDex(29),], },
			{ id: 84, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [melemeleDex(84), poniDex(30),], },
			{
				id: 85, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(85), akalaDex(29), ulaulaDex(38), poniDex(31),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(85, "Kantonian"), akalaDexForm(29, "Kantonian"), ulaulaDexForm(38, "Kantonian"), poniDexForm(31, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(85, "Alolan"), akalaDexForm(29, "Alolan"), ulaulaDexForm(38, "Alolan"), poniDexForm(31, "Alolan"),], },],
			},
			{
				id: 86, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(86), akalaDex(30), ulaulaDex(39), poniDex(32),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(86, "Kantonian"), akalaDexForm(30, "Kantonian"), ulaulaDexForm(39, "Kantonian"), poniDexForm(32, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(86, "Alolan"), akalaDexForm(30, "Alolan"), ulaulaDexForm(39, "Alolan"), poniDexForm(32, "Alolan"),], },],
			},
			{ id: 87, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [melemeleDex(87), ulaulaDex(40), poniDex(33),], },
			{ id: 88, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [melemeleDex(88), ulaulaDex(41), poniDex(34),], },
			{ id: 89, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [melemeleDex(89), poniDex(35),], },
			{ id: 90, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [melemeleDex(90), poniDex(36),], },
			{ id: 91, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [melemeleDex(91), poniDex(37),], },
			{ id: 92, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [melemeleDex(92), poniDex(38),], },
			{ id: 93, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [melemeleDex(93), poniDex(39),], },
			{ id: 94, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [melemeleDex(94), poniDex(40),], },
			{ id: 95, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: [melemeleDex(95)], },
			{ id: 96, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701), dexSync: [melemeleDex(96)], },
			{
				id: 97, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDex(97), akalaDex(31), ulaulaDex(42), poniDex(41),], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDexForm(97, "Baile Style"), akalaDexForm(31, "Baile Style"), ulaulaDexForm(42, "Baile Style"), poniDexForm(41, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDexForm(97, "Pa'u Style"), akalaDexForm(31, "Pa'u Style"), ulaulaDexForm(42, "Pa'u Style"), poniDexForm(41, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [melemeleDexForm(97, "Pom-Pom Style"), akalaDexForm(31, "Pom-Pom Style"), ulaulaDexForm(42, "Pom-Pom Style"), poniDexForm(41, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(97, "Sensu Style"), akalaDexForm(31, "Sensu Style"), ulaulaDexForm(42, "Sensu Style"), poniDexForm(41, "Sensu Style"),], },],
			},
			{ id: 98, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [melemeleDex(98), ulaulaDex(43), poniDex(42),], },
			{ id: 99, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [melemeleDex(99), ulaulaDex(44), poniDex(43),], },
			{
				id: 100, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDex(100), ulaulaDex(45), poniDex(44),], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), dexSync: [melemeleDexForm(100, "Red Flower"), ulaulaDexForm(45, "Red Flower"), poniDexForm(44, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), dexSync: [melemeleDexForm(100, "Orange Flower"), ulaulaDexForm(45, "Orange Flower"), poniDexForm(44, "Orange Flowerale"),], },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), dexSync: [melemeleDexForm(100, "Yellow Flower"), ulaulaDexForm(45, "Yellow Flower"), poniDexForm(44, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), dexSync: [melemeleDexForm(100, "Blue Flower"), ulaulaDexForm(45, "Blue Flower"), poniDexForm(44, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), dexSync: [melemeleDexForm(100, "White Flower"), ulaulaDexForm(45, "White Flower"), poniDexForm(44, "White Flower"),], },],
			},
			{
				id: 101, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDex(101), ulaulaDex(46), poniDex(45),], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), dexSync: [melemeleDexForm(101, "Red Flower"), ulaulaDexForm(46, "Red Flower"), poniDexForm(45, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), dexSync: [melemeleDexForm(101, "Orange Flower"), ulaulaDexForm(46, "Orange Flower"), poniDexForm(45, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), dexSync: [melemeleDexForm(101, "Yellow Flower"), ulaulaDexForm(46, "Yellow Flower"), poniDexForm(45, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), dexSync: [melemeleDexForm(101, "Blue Flower"), ulaulaDexForm(46, "Blue Flower"), poniDexForm(45, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), dexSync: [melemeleDexForm(101, "White Flower"), ulaulaDexForm(46, "White Flower"), poniDexForm(45, "White Flower"),], },],
			},
			{
				id: 102, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDex(102), ulaulaDex(47), poniDex(46),], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), dexSync: [melemeleDexForm(102, "Red Flower"), ulaulaDexForm(47, "Red Flower"), poniDexForm(46, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), dexSync: [melemeleDexForm(102, "Orange Flower"), ulaulaDexForm(47, "Orange Flower"), poniDexForm(46, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), dexSync: [melemeleDexForm(102, "Yellow Flower"), ulaulaDexForm(47, "Yellow Flower"), poniDexForm(46, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), dexSync: [melemeleDexForm(102, "Blue Flower"), ulaulaDexForm(47, "Blue Flower"), poniDexForm(46, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), dexSync: [melemeleDexForm(102, "White Flower"), ulaulaDexForm(47, "White Flower"), poniDexForm(46, "White Flower"),], },],
			},
			{ id: 103, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [melemeleDex(103), ulaulaDex(48), poniDex(47),], },
			{ id: 104, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [melemeleDex(104), ulaulaDex(49), poniDex(48),], },
			{ id: 105, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [melemeleDex(105), ulaulaDex(50), poniDex(49),], },
			{ id: 106, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [melemeleDex(106), ulaulaDex(51), poniDex(50),], },
			{ id: 107, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(107), akalaDex(32), ulaulaDex(52), poniDex(51),], },
			{ id: 108, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(108), akalaDex(33), ulaulaDex(53), poniDex(52),], },
			{ id: 109, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), dexSync: [melemeleDex(109)], },
			{ id: 110, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), dexSync: [melemeleDex(110)], },
			{
				id: 111, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(111), akalaDex(34), ulaulaDex(54), poniDex(53),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(111, "Male"), akalaDexForm(34, "Male"), ulaulaDexForm(54, "Male"), poniDexForm(53, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(111, "Female"), akalaDexForm(34, "Female"), ulaulaDexForm(54, "Female"), poniDexForm(53, "Female"),], },],
			},
			{
				id: 112, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(112), akalaDex(35), ulaulaDex(55), poniDex(54),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(112, "Male"), akalaDexForm(35, "Male"), ulaulaDexForm(55, "Male"), poniDexForm(54, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(112, "Female"), akalaDexForm(35, "Female"), ulaulaDexForm(55, "Female"), poniDexForm(54, "Female"),], },],
			},
			{ id: 113, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(113), akalaDex(36), ulaulaDex(1000), poniDex(55),], },
			{ id: 114, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(114), akalaDex(37), poniDex(56),], },
			{ id: 115, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), dexSync: [melemeleDex(115)], },
			{ id: 116, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), dexSync: [melemeleDex(116)], },
			{ id: 117, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [melemeleDex(117), poniDex(57),], },
			{ id: 118, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [melemeleDex(118), poniDex(58),], },
			{ id: 119, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [melemeleDex(119), poniDex(59),], },
			{ id: 120, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [melemeleDex(120), poniDex(60),], },
			{ id: 121, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [melemeleDex(121), poniDex(61),], },
			{ id: 122, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [melemeleDex(122), poniDex(62),], },
			{ id: 123, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [melemeleDex(123), poniDex(63),], },
			{ id: 124, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [melemeleDex(124), poniDex(64),], },
			{ id: 125, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), dexSync: [melemeleDex(125)], },
			{ id: 126, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [melemeleDex(126), poniDex(65),], },
			{
				id: 127, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDex(127), poniDex(66),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [melemeleDexForm(127, "Midday"), poniDexForm(66, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [melemeleDexForm(127, "Midnight"), poniDexForm(66, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [melemeleDexForm(127, "Dusk"), poniDexForm(66, "Dusk"),], },],
			},
			{ id: 128, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: [melemeleDex(128)], },
			{ id: 129, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(129), akalaDex(38), ulaulaDex(56), poniDex(67),], },
			{ id: 130, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(130), akalaDex(39), ulaulaDex(57), poniDex(68),], },
			{
				id: 131, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(131), akalaDex(40), ulaulaDex(58), poniDex(69),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(131, "Male"), akalaDexForm(40, "Male"), ulaulaDexForm(58, "Male"), poniDexForm(69, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(131, "Female"), akalaDexForm(40, "Female"), ulaulaDexForm(58, "Female"), poniDexForm(69, "Female"),], },],
			},
			{
				id: 132, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(132), akalaDex(41), ulaulaDex(59), poniDex(70),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(132, "Male"), akalaDexForm(41, "Male"), ulaulaDexForm(59, "Male"), poniDexForm(70, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(132, "Female"), akalaDexForm(41, "Female"), ulaulaDexForm(59, "Female"), poniDexForm(70, "Female"),], },],
			},
			{ id: 133, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(133), akalaDex(42), ulaulaDex(60),], },
			{ id: 134, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [melemeleDex(134), akalaDex(43),], },
			{ id: 135, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [melemeleDex(135), akalaDex(44),], },
			{ id: 136, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [melemeleDex(136), akalaDex(45),], },
			{ id: 137, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [melemeleDex(137), akalaDex(46),], },
			{ id: 138, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: [melemeleDex(138)], },
			{ id: 139, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: [melemeleDex(139)], },
			{ id: 140, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), dexSync: [melemeleDex(140), ulaulaDex(61),], },
			{ id: 141, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), dexSync: [melemeleDex(141), ulaulaDex(62),], },
			{ id: 142, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), dexSync: [melemeleDex(142), ulaulaDex(63),], },
			{ id: 143, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [melemeleDex(143), akalaDex(47),], },
			{
				id: 144, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [melemeleDex(144), akalaDex(48),], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: [melemeleDexForm(144, "Male"), akalaDexForm(48, "Male"),], },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: [melemeleDexForm(144, "Female"), akalaDexForm(48, "Female"),], },],
			},
			{ id: 145, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [melemeleDex(145), akalaDex(49),], },
			{ id: 146, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [melemeleDex(146), akalaDex(50),], },
			{ id: 147, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), dexSync: [melemeleDex(147)], },
			{ id: 148, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), dexSync: [melemeleDex(148)], },
			{ id: 149, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), dexSync: [melemeleDex(149)], },
			{ id: 150, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), dexSync: [akalaDex(51)], },
			{ id: 151, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), dexSync: [akalaDex(52)], },
			{ id: 152, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), dexSync: [akalaDex(53)], },
			{ id: 153, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: [akalaDex(54)], },
			{ id: 154, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: [akalaDex(55)], },
			{ id: 155, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: [akalaDex(56)], },
			{ id: 156, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: [akalaDex(57)], },
			{ id: 157, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: [akalaDex(58)], },
			{ id: 158, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: [akalaDex(59)], },
			{ id: 159, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), dexSync: [akalaDex(60)], },
			{ id: 160, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), dexSync: [akalaDex(61)], },
			{ id: 161, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), dexSync: [akalaDex(62)], },
			{ id: 162, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), dexSync: [akalaDex(63)], },
			{ id: 163, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), dexSync: [akalaDex(64)], },
			{ id: 164, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), dexSync: [akalaDex(65)], },
			{ id: 165, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [akalaDex(66), ulaulaDex(64), poniDex(71),], },
			{ id: 166, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [akalaDex(67), ulaulaDex(65), poniDex(72),], },
			{ id: 167, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: [akalaDex(68)], },
			{ id: 168, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: [akalaDex(69)], },
			{ id: 169, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: [akalaDex(70)], },
			{ id: 170, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [akalaDex(71), poniDex(73),], },
			{ id: 171, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [akalaDex(72), poniDex(74),], },
			{ id: 172, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [akalaDex(73), ulaulaDex(66),], },
			{ id: 173, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [akalaDex(74), ulaulaDex(67),], },
			{ id: 174, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [akalaDex(75), ulaulaDex(68),], },
			{ id: 175, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [akalaDex(76), ulaulaDex(69),], },
			{ id: 176, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [akalaDex(77)], },
			{ id: 177, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [akalaDex(78)], },
			{ id: 178, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [akalaDex(79), ulaulaDex(70),], },
			{ id: 179, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [akalaDex(80), ulaulaDex(71),], },
			{ id: 180, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [akalaDex(81), ulaulaDex(72),], },
			{ id: 181, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [akalaDex(82), ulaulaDex(73),], },
			{ id: 182, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [akalaDex(83), ulaulaDex(74),], },
			{ id: 183, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [akalaDex(84), ulaulaDex(75),], },
			{ id: 184, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [akalaDex(85), ulaulaDex(76),], },
			{
				id: 185, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDex(86), ulaulaDex(77),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [akalaDexForm(86, "Male"), ulaulaDexForm(77, "Male"),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [akalaDexForm(86, "Female"), ulaulaDexForm(77, "Female"),], },],
			},
			{
				id: 186, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDex(87), ulaulaDex(78),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [akalaDexForm(87, "Male"), ulaulaDexForm(78, "Male"),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [akalaDexForm(87, "Female"), ulaulaDexForm(78, "Female"),], },],
			},
			{
				id: 187, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDex(88), ulaulaDex(79),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [akalaDexForm(88, "Male"), ulaulaDexForm(79, "Male"),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [akalaDexForm(88, "Female"), ulaulaDexForm(79, "Female"),], },],
			},
			{
				id: 188, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDex(89), ulaulaDex(80), poniDex(75),], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [akalaDexForm(89, "Blue-Striped"), ulaulaDexForm(80, "Blue-Striped"), poniDexForm(75, "Blue-Striped"),], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [akalaDexForm(89, "Red-Striped"), ulaulaDexForm(80, "Red-Striped"), poniDexForm(75, "Red-Striped"),], },],
			},
			{ id: 189, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [akalaDex(90)], },
			{
				id: 190, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [akalaDex(91)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [akalaDexForm(91, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [akalaDexForm(91, "Female")], },],
			},
			{ id: 191, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [akalaDex(92)], },
			{ id: 192, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [akalaDex(93)], },
			{ id: 193, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [akalaDex(94)], },
			{ id: 194, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [akalaDex(95)], },
			{ id: 195, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [akalaDex(96)], },
			{ id: 196, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [akalaDex(97)], },
			{ id: 197, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), dexSync: [akalaDex(98)], },
			{
				id: 198, name: "Marowak", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [akalaDex(99)], forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), dexSync: [akalaDexForm(99, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [akalaDexForm(99, "Alolan")], },],
			},
			{ id: 199, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), dexSync: [akalaDex(100)], },
			{ id: 200, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), dexSync: [akalaDex(101)], },
			{ id: 201, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), dexSync: [akalaDex(102)], },
			{ id: 202, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), dexSync: [akalaDex(103)], },
			{ id: 203, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), dexSync: [akalaDex(104)], },
			{ id: 204, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), dexSync: [akalaDex(105)], },
			{ id: 205, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [akalaDex(106), poniDex(76),], },
			{ id: 206, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [akalaDex(107), poniDex(77),], },
			{ id: 207, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), dexSync: [akalaDex(108)], },
			{ id: 208, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), dexSync: [akalaDex(109)], },
			{ id: 209, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), dexSync: [akalaDex(110)], },
			{ id: 210, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), dexSync: [akalaDex(111)], },
			{ id: 211, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [akalaDex(112), poniDex(78),], },
			{ id: 212, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: [akalaDex(113)], },
			{ id: 213, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: [akalaDex(114)], },
			{ id: 214, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), dexSync: [akalaDex(115)], },
			{ id: 215, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), dexSync: [akalaDex(116)], },
			{ id: 216, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), dexSync: [akalaDex(117)], },
			{ id: 217, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [akalaDex(118), ulaulaDex(81), poniDex(79),], },
			{ id: 218, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [akalaDex(119), ulaulaDex(82), poniDex(80),], },
			{ id: 219, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [akalaDex(120), ulaulaDex(83), poniDex(81),], },
			{
				id: 220, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDex(121), ulaulaDex(84), poniDex(82),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [akalaDexForm(121, "Normal"), ulaulaDexForm(84, "Normal"), poniDexForm(82, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [akalaDexForm(121, "Rainy"), ulaulaDexForm(84, "Rainy"), poniDexForm(82, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [akalaDexForm(121, "Snowy"), ulaulaDexForm(84, "Snowy"), poniDexForm(82, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [akalaDexForm(121, "Sunny"), ulaulaDexForm(84, "Sunny"), poniDexForm(82, "Sunny"),], },],
			},
			{ id: 221, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [akalaDex(122), poniDex(83),], },
			{ id: 222, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [akalaDex(123), poniDex(84),], },
			{ id: 223, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: [akalaDex(124)], },
			{ id: 224, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: [akalaDex(125)], },
			{ id: 225, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), dexSync: [akalaDex(126)], },
			{ id: 226, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), dexSync: [akalaDex(127)], },
			{ id: 227, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), dexSync: [akalaDex(128)], },
			{ id: 228, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), dexSync: [akalaDex(129)], },
			{ id: 229, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), dexSync: [akalaDex(130)], },
			{ id: 230, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), dexSync: [akalaDex(131)], },
			{ id: 231, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), dexSync: [akalaDex(132)], },
			{ id: 232, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), dexSync: [akalaDex(133)], },
			{ id: 233, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), dexSync: [akalaDex(134)], },
			{ id: 234, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), dexSync: [akalaDex(135)], },
			{ id: 235, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [akalaDex(136)], },
			{ id: 236, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [akalaDex(137)], },
			{ id: 237, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [akalaDex(138)], },
			{ id: 238, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [akalaDex(139)], },
			{ id: 239, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), dexSync: [akalaDex(140)], },
			{ id: 240, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), dexSync: [akalaDex(141)], },
			{ id: 241, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), dexSync: [akalaDex(142)], },
			{ id: 242, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), dexSync: [akalaDex(143)], },
			{ id: 243, name: "Tyrunt", img: baseSprite(696), imgS: shinySprite(696), dexSync: [akalaDex(144)], },
			{ id: 244, name: "Tyrantrum", img: baseSprite(697), imgS: shinySprite(697), dexSync: [akalaDex(145)], },
			{ id: 245, name: "Amaura", img: baseSprite(698), imgS: shinySprite(698), dexSync: [akalaDex(146)], },
			{ id: 246, name: "Aurorus", img: baseSprite(699), imgS: shinySprite(699), dexSync: [akalaDex(147)], },
			{ id: 247, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), dexSync: [akalaDex(148)], },
			{ id: 248, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), dexSync: [akalaDex(149)], },
			{ id: 249, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), dexSync: [akalaDex(150)], },
			{ id: 250, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: [akalaDex(151)], },
			{ id: 251, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: [akalaDex(152)], },
			{ id: 252, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), dexSync: [akalaDex(153)], },
			{
				id: 253, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), dexSync: [akalaDex(154)], forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), dexSync: [akalaDexForm(154, "Male")], },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), dexSync: [akalaDexForm(154, "Female")], },],
			},
			{ id: 254, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), dexSync: [akalaDex(155)], },
			{ id: 255, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), dexSync: [akalaDex(156)], },
			{ id: 256, name: "Pyukumuku", img: baseSprite(771), imgS: shinySprite(771), dexSync: [akalaDex(157)], },
			{ id: 257, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: [akalaDex(158)], },
			{ id: 258, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: [akalaDex(159)], },
			{ id: 259, name: "Type: Null", img: baseSprite(772), imgS: shinySprite(772), legendary: true, },
			{ id: 260, name: "Silvally", img: baseSprite(773), imgS: shinySprite(773), legendary: true, },
			{ id: 261, name: "Poipole", img: baseSprite(803), imgS: shinySprite(803), legendary: true, },
			{ id: 262, name: "Naganadel", img: baseSprite(804), imgS: shinySprite(804), legendary: true, },
			{
				id: 263, name: "Zygarde", img: baseSprite(718), imgS: shinySprite(718), legendary: true, forms: [
					{ name: "10%", img: baseSprite("718-10"), imgS: shinySprite("718-10"), legendary: true, },
					{ name: "50%", img: baseSprite(718), imgS: shinySprite(718), legendary: true, },],
			},
			{ id: 264, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: [ulaulaDex(85)], },
			{ id: 265, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: [ulaulaDex(86)], },
			{ id: 266, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572), dexSync: [ulaulaDex(87)], },
			{ id: 267, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573), dexSync: [ulaulaDex(88)], },
			{ id: 268, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), dexSync: [ulaulaDex(89)], },
			{ id: 269, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), dexSync: [ulaulaDex(90)], },
			{ id: 270, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: [ulaulaDex(91), poniDex(85),], },
			{ id: 271, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: [ulaulaDex(92)], },
			{ id: 272, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [ulaulaDex(93)], },
			{ id: 273, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [ulaulaDex(94)], },
			{ id: 274, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [ulaulaDex(95)], },
			{ id: 275, name: "Elgyem", img: baseSprite(605), imgS: shinySprite(605), dexSync: [ulaulaDex(96)], },
			{ id: 276, name: "Beheeyem", img: baseSprite(606), imgS: shinySprite(606), dexSync: [ulaulaDex(97)], },
			{
				id: 277, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), dexSync: [ulaulaDex(98)], forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), dexSync: [ulaulaDexForm(98, "Blue Core")], },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), dexSync: [ulaulaDexForm(98, "Green Core")], },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), dexSync: [ulaulaDexForm(98, "Indigo Core")], },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), dexSync: [ulaulaDexForm(98, "Orange Core")], },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), dexSync: [ulaulaDexForm(98, "Red Core")], },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), dexSync: [ulaulaDexForm(98, "Violet Core")], },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), dexSync: [ulaulaDexForm(98, "Yellow Core")], },],
			},
			{ id: 278, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), dexSync: [ulaulaDex(99)], },
			{ id: 279, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), dexSync: [ulaulaDex(100)], },
			{ id: 280, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), dexSync: [ulaulaDex(101)], },
			{ id: 281, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), dexSync: [ulaulaDex(102)], },
			{ id: 282, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), dexSync: [ulaulaDex(103)], },
			{ id: 283, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), dexSync: [ulaulaDex(104)], },
			{ id: 284, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), dexSync: [ulaulaDex(105)], },
			{ id: 285, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), dexSync: [ulaulaDex(106)], },
			{ id: 286, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), dexSync: [ulaulaDex(107)], },
			{ id: 287, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [ulaulaDex(108)], },
			{ id: 288, name: "Turtonator", img: baseSprite(776), imgS: shinySprite(776), dexSync: [ulaulaDex(109)], },
			{ id: 289, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), dexSync: [ulaulaDex(110)], },
			{
				id: 290, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), dexSync: [ulaulaDex(111)], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), dexSync: [ulaulaDexForm(111, "Male")], },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), dexSync: [ulaulaDexForm(111, "Female")], },],
			},
			{ id: 291, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), dexSync: [ulaulaDex(112)], },
			{ id: 292, name: "Togedemaru", img: baseSprite(777), imgS: shinySprite(777), dexSync: [ulaulaDex(113)], },
			{ id: 293, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), dexSync: [ulaulaDex(114)], },
			{ id: 294, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), dexSync: [ulaulaDex(115)], },
			{ id: 295, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), dexSync: [ulaulaDex(116)], },
			{ id: 296, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), dexSync: [ulaulaDex(117)], },
			{ id: 297, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), dexSync: [ulaulaDex(118)], },
			{
				id: 298, name: "Geodude", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [ulaulaDex(119)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [ulaulaDexForm(119, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [ulaulaDexForm(119, "Alolan")], },],
			},
			{
				id: 299, name: "Graveler", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [ulaulaDex(120)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [ulaulaDexForm(120, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [ulaulaDexForm(120, "Alolan")], },],
			},
			{
				id: 300, name: "Golem", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [ulaulaDex(121)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [ulaulaDexForm(121, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [ulaulaDexForm(121, "Alolan")], },],
			},
			{ id: 301, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [ulaulaDex(122)], },
			{ id: 302, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [ulaulaDex(123)], },
			{ id: 303, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [ulaulaDex(124)], },
			{ id: 304, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: [ulaulaDex(125)], },
			{ id: 305, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: [ulaulaDex(126)], },
			{ id: 306, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: [ulaulaDex(127)], },
			{
				id: 307, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [ulaulaDex(128)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [ulaulaDexForm(128, "Male")], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [ulaulaDexForm(128, "Female")], },],
			},
			{
				id: 308, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [ulaulaDex(129)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [ulaulaDexForm(129, "Male")], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [ulaulaDexForm(129, "Female")], },],
			},
			{
				id: 309, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [ulaulaDex(130)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [ulaulaDexForm(130, "Male")], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [ulaulaDexForm(130, "Female")], },],
			},
			{ id: 310, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), dexSync: [ulaulaDex(131)], },
			{ id: 311, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), dexSync: [ulaulaDex(132)], },
			{ id: 312, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), dexSync: [ulaulaDex(133)], },
			{ id: 313, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), dexSync: [ulaulaDex(134)], },
			{ id: 314, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), dexSync: [ulaulaDex(135)], },
			{ id: 315, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [ulaulaDex(136)], },
			{ id: 316, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), dexSync: [ulaulaDex(137)], },
			{ id: 317, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), dexSync: [ulaulaDex(138)], },
			{
				id: 318, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), dexSync: [ulaulaDex(139)], forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), dexSync: [ulaulaDexForm(139, "Male")], },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), dexSync: [ulaulaDexForm(139, "Female")], },],
			},
			{
				id: 319, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), dexSync: [ulaulaDex(140)], forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), dexSync: [ulaulaDexForm(140, "Male")], },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), dexSync: [ulaulaDexForm(140, "Female")], },],
			},
			{ id: 320, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [ulaulaDex(141)], },
			{ id: 321, name: "Drampa", img: baseSprite(780), imgS: shinySprite(780), dexSync: [ulaulaDex(142)], },
			{ id: 322, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), dexSync: [ulaulaDex(143)], },
			{ id: 323, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [ulaulaDex(144)], },
			{ id: 324, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [ulaulaDex(145)], },
			{ id: 325, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [ulaulaDex(146)], },
			{
				id: 326, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [ulaulaDex(147)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [ulaulaDexForm(147, "Male")], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [ulaulaDexForm(147, "Female")], },],
			},
			{
				id: 327, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [ulaulaDex(148)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [ulaulaDexForm(148, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [ulaulaDexForm(148, "Female")], },],
			},
			{
				id: 328, name: "Sandshrew", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [ulaulaDex(149)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [ulaulaDexForm(149, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [ulaulaDexForm(149, "Alolan")], },],
			},
			{
				id: 329, name: "Sandslash", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [ulaulaDex(150)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [ulaulaDexForm(150, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [ulaulaDexForm(150, "Alolan")], },],
			},
			{
				id: 330, name: "Vulpix", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [ulaulaDex(151)], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [ulaulaDexForm(151, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [ulaulaDexForm(151, "Alolan")], },],
			},
			{
				id: 331, name: "Ninetales", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [ulaulaDex(152)], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [ulaulaDexForm(152, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [ulaulaDexForm(152, "Alolan")], },],
			},
			{ id: 332, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [ulaulaDex(153)], },
			{ id: 333, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [ulaulaDex(154)], },
			{ id: 334, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [ulaulaDex(155)], },
			{ id: 335, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), dexSync: [ulaulaDex(156)], },
			{ id: 336, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), dexSync: [ulaulaDex(157)], },
			{ id: 337, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [ulaulaDex(158)], },
			{ id: 338, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [ulaulaDex(159)], },
			{ id: 339, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), dexSync: [poniDex(86)], },
			{ id: 340, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), dexSync: [poniDex(87),], },
			{
				id: 341, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [poniDex(88)], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), dexSync: [poniDexForm(88, "West Sea")], },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: [poniDexForm(88, "East Sea")], },],
			},
			{
				id: 342, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [poniDex(89)], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), dexSync: [poniDexForm(89, "West Sea")], },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: [poniDexForm(89, "East Sea")], },],
			},
			{
				id: 343, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), dexSync: [poniDex(90)], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), dexSync: [poniDexForm(90, "Male")], },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), dexSync: [poniDexForm(90, "Female")], },],
			},
			{ id: 344, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), dexSync: [poniDex(91)], },
			{ id: 345, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: [poniDex(92)], },
			{ id: 346, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: [poniDex(93)], },
			{ id: 347, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), dexSync: [poniDex(94)], },
			{ id: 348, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), dexSync: [poniDex(95)], },
			{ id: 349, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), dexSync: [poniDex(96)], },
			{ id: 350, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), dexSync: [poniDex(97)], },
			{ id: 351, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: [poniDex(98)], },
			{ id: 352, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: [poniDex(99)], },
			{ id: 353, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: [poniDex(100)], },
			{ id: 354, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), dexSync: [poniDex(101)], },
			{ id: 355, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), dexSync: [poniDex(102)], },
			{
				id: 356, name: "Exeggutor", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [poniDex(103)], forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), dexSync: [poniDexForm(103, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), dexSync: [poniDexForm(103, "Alolan")], },],
			},
			{ id: 357, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), dexSync: [poniDex(104)], },
			{ id: 358, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), dexSync: [poniDex(105)], },
			{ id: 359, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), dexSync: [poniDex(106)], },
			{ id: 360, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), dexSync: [poniDex(107)], },
			{ id: 361, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), dexSync: [poniDex(108)], },
			{ id: 362, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), dexSync: [poniDex(109)], },
			{ id: 363, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), dexSync: [poniDex(110)], },
			{ id: 364, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), dexSync: [poniDex(111)], },
			{
				id: 365, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [poniDex(112)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [poniDexForm(112, "Male")], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [poniDexForm(112, "Female")], },],
			},
			{
				id: 366, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [poniDex(113)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [poniDexForm(113, "Male")], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [poniDexForm(113, "Female")], },],
			},
			{
				id: 367, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [poniDex(114)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: [poniDexForm(114, "Male")], },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: [poniDexForm(114, "Female")], },],
			},
			{
				id: 368, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), dexSync: [poniDex(115)], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), dexSync: [poniDexForm(115, "Male")], },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), dexSync: [poniDexForm(115, "Female")], },],
			},
			{
				id: 369, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), dexSync: [poniDex(116)], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), dexSync: [poniDexForm(116, "Male")], },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), dexSync: [poniDexForm(116, "Female")], },],
			},
			{ id: 370, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), dexSync: [poniDex(117)], },
			{
				id: 371, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), dexSync: [poniDex(118)], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), dexSync: [poniDexForm(118, "Male")], },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), dexSync: [poniDexForm(118, "Female")], },],
			},
			{ id: 372, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: [poniDex(119)], },
			{ id: 373, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: [poniDex(120)], },
			{ id: 374, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: [poniDex(121)], },
			{ id: 375, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), dexSync: [poniDex(122)], },
			{ id: 376, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), dexSync: [poniDex(123)], },
			{ id: 377, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [poniDex(124)], },
			{ id: 378, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [poniDex(125)], },
			{ id: 379, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: [poniDex(126)], },
			{ id: 380, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: [poniDex(127)], },
			{ id: 381, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: [poniDex(128)], },
			{ id: 382, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), dexSync: [poniDex(129)], },
			{ id: 383, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, dexSync: [melemeleDex(150)], },
			{ id: 384, name: "Tapu Lele", img: baseSprite(786), imgS: shinySprite(786), legendary: true, dexSync: [akalaDex(160)], },
			{ id: 385, name: "Tapu Bulu", img: baseSprite(787), imgS: shinySprite(787), legendary: true, dexSync: [ulaulaDex(160)], },
			{ id: 386, name: "Tapu Fini", img: baseSprite(788), imgS: shinySprite(788), legendary: true, dexSync: [poniDex(130)], },
			{ id: 387, name: "Cosmog", img: baseSprite(789), imgS: shinySprite(789), maxStatus: "caught", legendary: true, },
			{ id: 388, name: "Cosmoem", img: baseSprite(790), imgS: shinySprite(790), maxStatus: "caught", legendary: true, },
			{ id: 389, name: "Solgaleo", img: baseSprite(791), imgS: shinySprite(791), legendary: true, },
			{ id: 390, name: "Lunala", img: baseSprite(792), imgS: shinySprite(792), legendary: true, },
			{ id: 391, name: "Stakataka", img: baseSprite(805), imgS: shinySprite(805), },
			{ id: 392, name: "Blacephalon", img: baseSprite(806), imgS: shinySprite(806), },
			{ id: 393, name: "Nihilego", img: baseSprite(793), imgS: shinySprite(793), },
			{ id: 394, name: "Buzzwole", img: baseSprite(794), imgS: shinySprite(794), },
			{ id: 395, name: "Pheromosa", img: baseSprite(795), imgS: shinySprite(795), },
			{ id: 396, name: "Xurkitree", img: baseSprite(796), imgS: shinySprite(796), },
			{ id: 397, name: "Celesteela", img: baseSprite(797), imgS: shinySprite(797), },
			{ id: 398, name: "Kartana", img: baseSprite(798), imgS: shinySprite(798), },
			{ id: 399, name: "Guzzlord", img: baseSprite(799), imgS: shinySprite(799), },
			{ id: 400, name: "Necrozma", img: baseSprite(800), imgS: shinySprite(800), legendary: true, },
			{
				id: 401, name: "Magearna", img: baseSprite(801), imgS: shinySprite(801), maxStatus: "caught", mythical: true, forms: [
					{ name: "Normal", img: baseSprite(801), imgS: shinySprite(801), maxStatus: "caught", mythical: true, },
					{ name: "Original Color", img: baseSprite("801-o"), imgS: shinySprite("801-o"), maxStatus: "caught", mythical: true, },],
			},
			{ id: 402, name: "Marshadow", img: baseSprite(802), imgS: shinySprite(802), maxStatus: "caught", mythical: true, },
			{ id: 403, name: "Zeraora", img: baseSprite(807), imgS: shinySprite(807), maxStatus: "caught", mythical: true, },
		],
	},
});