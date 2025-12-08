const game = "ultramoon";
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
			{ id: 1, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), dexSync: [{ game: "ultrasun", dexType: "alola", id: 1 }], },
			{ id: 2, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), dexSync: [{ game: "ultrasun", dexType: "alola", id: 2 }], },
			{ id: 3, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), dexSync: [{ game: "ultrasun", dexType: "alola", id: 3 }], },
			{ id: 4, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), dexSync: [{ game: "ultrasun", dexType: "alola", id: 4 }], },
			{ id: 5, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), dexSync: [{ game: "ultrasun", dexType: "alola", id: 5 }], },
			{ id: 6, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), dexSync: [{ game: "ultrasun", dexType: "alola", id: 6 }], },
			{ id: 7, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), dexSync: [{ game: "ultrasun", dexType: "alola", id: 7 }], },
			{ id: 8, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), dexSync: [{ game: "ultrasun", dexType: "alola", id: 8 }], },
			{ id: 9, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), dexSync: [{ game: "ultrasun", dexType: "alola", id: 9 }], },
			{ id: 10, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [{ game: "ultrasun", dexType: "alola", id: 10 }, akalaDex(1), ulaulaDex(1), poniDex(1),], },
			{ id: 11, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [{ game: "ultrasun", dexType: "alola", id: 11 }, akalaDex(2), ulaulaDex(2), poniDex(2),], },
			{ id: 12, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [{ game: "ultrasun", dexType: "alola", id: 12 }, akalaDex(3), ulaulaDex(3), poniDex(3),], },
			{ id: 13, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [{ game: "ultrasun", dexType: "alola", id: 13 }, akalaDex(4), ulaulaDex(4), poniDex(4),], },
			{ id: 14, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [{ game: "ultrasun", dexType: "alola", id: 14 }, akalaDex(5), ulaulaDex(5), poniDex(5),], },
			{
				id: 15, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 15 }, akalaDex(6), ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [alolaDexForm(15, "Kantonian Male"), akalaDex(6, "Kantonian Male"), ulaulaDex(6, "Kantonian Male"), poniDex(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [alolaDexForm(15, "Kantonian Female"), akalaDex(6, "Kantonian Female"), ulaulaDex(6, "Kantonian Female"), poniDex(6, "Kantonian Female"),], },
					{ name: "alola", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [alolaDexForm(15, "alola"), akalaDex(6, "alola"), ulaulaDex(6, "alola"), poniDex(6, "alola"),], },],
			},
			{
				id: 16, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 16 }, akalaDex(7), ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [alolaDexForm(16, "Kantonian Male"), akalaDex(7, "Kantonian Male"), ulaulaDex(7, "Kantonian Male"), poniDex(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [alolaDexForm(16, "Kantonian Female"), akalaDex(7, "Kantonian Female"), ulaulaDex(7, "Kantonian Female"), poniDex(7, "Kantonian Female"),], },
					{ name: "alola", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [alolaDexForm(16, "alola"), akalaDex(7, "alola"), ulaulaDex(7, "alola"), poniDex(7, "alola"),], },],
			},
			{ id: 17, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [{ game: "ultrasun", dexType: "alola", id: 17 }, akalaDex(8),], },
			{ id: 18, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [{ game: "ultrasun", dexType: "alola", id: 18 }, akalaDex(9),], },
			{
				id: 19, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [{ game: "ultrasun", dexType: "alola", id: 19 }, akalaDex(10),], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [alolaDexForm(19, "Male"), akalaDex(10, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [alolaDexForm(19, "Female"), akalaDex(10, "Female"),], },],
			},
			{
				id: 20, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), dexSync: [{ game: "ultrasun", dexType: "alola", id: 20 }, ulaulaDex(8),], forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: [alolaDexForm(20, "Male"), ulaulaDex(8, "Male"),], },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: [alolaDexForm(20, "Female"), ulaulaDex(8, "Female"),], },],
			},
			{
				id: 21, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), dexSync: [{ game: "ultrasun", dexType: "alola", id: 21 }, ulaulaDex(9),], forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: [alolaDexForm(21, "Male"), ulaulaDex(9, "Male"),], },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: [alolaDexForm(21, "Female"), ulaulaDex(9, "Female"),], },],
			},
			{ id: 22, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: [{ game: "ultrasun", dexType: "alola", id: 22 }, ulaulaDex(10),], },
			{ id: 23, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: [{ game: "ultrasun", dexType: "alola", id: 23 }, ulaulaDex(11),], },
			{ id: 24, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), dexSync: [{ game: "ultrasun", dexType: "alola", id: 24 }, poniDex(8),], },
			{ id: 25, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), dexSync: [{ game: "ultrasun", dexType: "alola", id: 25 }, poniDex(9),], },
			{ id: 26, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), dexSync: [{ game: "ultrasun", dexType: "alola", id: 26 }, poniDex(10),], },
			{ id: 27, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), dexSync: [{ game: "ultrasun", dexType: "alola", id: 27 }, poniDex(11),], },
			{ id: 28, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), dexSync: [{ game: "ultrasun", dexType: "alola", id: 28 }, poniDex(12),], },
			{ id: 29, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), dexSync: [{ game: "ultrasun", dexType: "alola", id: 29 }, poniDex(13),], },
			{
				id: 30, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), dexSync: [{ game: "ultrasun", dexType: "alola", id: 30 }, poniDex(14),], forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), dexSync: [alolaDexForm(30, "Natural Trim"), poniDex(14, "Natural Trim"),], },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), dexSync: [alolaDexForm(30, "Heart Trim"), poniDex(14, "Heart Trim"),], },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), dexSync: [alolaDexForm(30, "Star Trim"), poniDex(14, "Star Trim"),], },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), dexSync: [alolaDexForm(30, "Diamond Trim"), poniDex(14, "Diamond Trim"),], },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), dexSync: [alolaDexForm(30, "Debutante Trim"), poniDex(14, "Debutante Trim"),], },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), dexSync: [alolaDexForm(30, "Matron Trim"), poniDex(14, "Matron Trim"),], },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), dexSync: [alolaDexForm(30, "Dandy Trim"), poniDex(14, "Dandy Trim"),], },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), dexSync: [alolaDexForm(30, "Le Reine Trim"), poniDex(14, "Le Reine Trim"),], },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), dexSync: [alolaDexForm(30, "Kabuki Trim"), poniDex(14, "Kabuki Trim"),], },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), dexSync: [alolaDexForm(30, "Pharaoh Trim"), poniDex(14, "Pharaoh Trim"),], },],
			},
			{ id: 31, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [{ game: "ultrasun", dexType: "alola", id: 31 }], },
			{
				id: 32, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [{ game: "ultrasun", dexType: "alola", id: 32 }], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [alolaDexForm(32, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [alolaDexForm(32, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Alola Cap")], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Hoenn Cap")], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Kalos Cap")], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Original Cap")], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Partner Cap")], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Sinnoh Cap")], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", mythical: true, dexSync: [alolaDexForm(32, "Unova Cap")], },],
			},
			{
				id: 33, name: "Raichu", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 33 }], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [alolaDexForm(33, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [alolaDexForm(33, "Kantonian Female")], },
					{ name: "alola", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [alolaDexForm(33, "alola")], },],
			},
			{ id: 34, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [{ game: "ultrasun", dexType: "alola", id: 34 }, akalaDex(11), ulaulaDex(12),], },
			{ id: 35, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [{ game: "ultrasun", dexType: "alola", id: 35 }, akalaDex(12), ulaulaDex(13),], },
			{ id: 36, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [{ game: "ultrasun", dexType: "alola", id: 36 }, akalaDex(13), ulaulaDex(14),], },
			{ id: 37, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [{ game: "ultrasun", dexType: "alola", id: 37 }, akalaDex(13),], },
			{
				id: 38, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [{ game: "ultrasun", dexType: "alola", id: 38 }, akalaDex(14),], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [alolaDexForm(38, "Male"), akalaDex(14, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [alolaDexForm(38, "Female"), akalaDex(14, "Female"),], },],
			},
			{ id: 39, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [{ game: "ultrasun", dexType: "alola", id: 39 }, akalaDex(15), ulaulaDex(15), poniDex(15),], },
			{ id: 40, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [{ game: "ultrasun", dexType: "alola", id: 40 }, akalaDex(16), ulaulaDex(16), poniDex(16),], },
			{ id: 41, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [{ game: "ultrasun", dexType: "alola", id: 41 }, akalaDex(17), ulaulaDex(17), poniDex(17),], },
			{ id: 42, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [{ game: "ultrasun", dexType: "alola", id: 42 }], },
			{ id: 43, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [{ game: "ultrasun", dexType: "alola", id: 43 }], },
			{ id: 44, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [{ game: "ultrasun", dexType: "alola", id: 44 }, ulaulaDex(18),], },
			{ id: 45, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [{ game: "ultrasun", dexType: "alola", id: 45 }, ulaulaDex(19),], },
			{ id: 46, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [{ game: "ultrasun", dexType: "alola", id: 46 }, ulaulaDex(20),], },
			{ id: 47, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [{ game: "ultrasun", dexType: "alola", id: 47 }, akalaDex(19), ulaulaDex(21), poniDex(18),], },
			{ id: 48, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [{ game: "ultrasun", dexType: "alola", id: 48 }, akalaDex(20), ulaulaDex(22), poniDex(19),], },
			{ id: 49, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: [{ game: "ultrasun", dexType: "alola", id: 49 }], },
			{
				id: 50, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: [{ game: "ultrasun", dexType: "alola", id: 50 }], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: [alolaDexForm(50, "Male")], },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: [alolaDexForm(50, "Female")], },],
			},
			{
				id: 51, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: [{ game: "ultrasun", dexType: "alola", id: 51 }], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: [alolaDexForm(51, "Male")], },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: [alolaDexForm(51, "Female")], },],
			},
			{
				id: 52, name: "Meowth", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 52 }, ulaulaDex(23),], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), dexSync: [alolaDexForm(52, "Kantonian"), ulaulaDex(23, "Kantonian"),], },
					{ name: "alola", img: baseSprite("052-a"), imgS: shinySprite("052-a"), dexSync: [alolaDexForm(52, "alola"), ulaulaDex(23, "alola"),], },],
			},
			{
				id: 53, name: "Persian", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 53 }, ulaulaDex(24),], forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), dexSync: [alolaDexForm(53, "Kantonian"), ulaulaDex(24, "Kantonian"),], },
					{ name: "alola", img: baseSprite("053-a"), imgS: shinySprite("053-a"), dexSync: [alolaDexForm(53, "alola"), ulaulaDex(24, "alola"),], },],
			},
			{ id: 54, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [{ game: "ultrasun", dexType: "alola", id: 54 }, ulaulaDex(25),], },
			{ id: 55, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [{ game: "ultrasun", dexType: "alola", id: 55 }, ulaulaDex(26),], },
			{ id: 56, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [{ game: "ultrasun", dexType: "alola", id: 56 }, ulaulaDex(27),], },
			{
				id: 57, name: "Grimer", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 57 }, ulaulaDex(28),], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [alolaDexForm(57, "Kantonian"), ulaulaDex(28, "Kantonian"),], },
					{ name: "alola", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [alolaDexForm(57, "alola"), ulaulaDex(28, "alola"),], },],
			},
			{
				id: 58, name: "Muk", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 58 }, ulaulaDex(29),], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [alolaDexForm(58, "Kantonian"), ulaulaDex(29, "Kantonian"),], },
					{ name: "alola", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [alolaDexForm(58, "alola"), ulaulaDex(29, "alola"),], },],
			},
			{ id: 59, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), dexSync: [{ game: "ultrasun", dexType: "alola", id: 59 }], },
			{ id: 60, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), dexSync: [{ game: "ultrasun", dexType: "alola", id: 60 }], },
			{ id: 61, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), dexSync: [{ game: "ultrasun", dexType: "alola", id: 61 }], },
			{ id: 62, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), dexSync: [{ game: "ultrasun", dexType: "alola", id: 62 }], },
			{ id: 63, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: [{ game: "ultrasun", dexType: "alola", id: 63 }], },
			{ id: 64, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: [{ game: "ultrasun", dexType: "alola", id: 64 }], },
			{ id: 65, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: [{ game: "ultrasun", dexType: "alola", id: 65 }], },
			{ id: 66, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), dexSync: [{ game: "ultrasun", dexType: "alola", id: 66 }, poniDex(20),], },
			{
				id: 67, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), dexSync: [{ game: "ultrasun", dexType: "alola", id: 67 }, poniDex(21),], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), dexSync: [alolaDexForm(67, "Male"), poniDex(21, "Male"),], },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), dexSync: [alolaDexForm(67, "Female"), poniDex(21, "Female"),], },],
			},
			{ id: 68, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: [{ game: "ultrasun", dexType: "alola", id: 68 }, poniDex(22),], },
			{ id: 69, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: [{ game: "ultrasun", dexType: "alola", id: 69 }, poniDex(23),], },
			{ id: 70, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: [{ game: "ultrasun", dexType: "alola", id: 70 }], },
			{ id: 71, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [{ game: "ultrasun", dexType: "alola", id: 71 }, akalaDex(21), ulaulaDex(30), poniDex(24),], },
			{ id: 72, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [{ game: "ultrasun", dexType: "alola", id: 72 }, akalaDex(22), ulaulaDex(31), poniDex(25),], },
			{ id: 73, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [{ game: "ultrasun", dexType: "alola", id: 73 }, akalaDex(23), ulaulaDex(32),], },
			{ id: 74, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [{ game: "ultrasun", dexType: "alola", id: 74 }, akalaDex(24), ulaulaDex(33),], },
			{ id: 75, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [{ game: "ultrasun", dexType: "alola", id: 75 }, akalaDex(25), ulaulaDex(34),], },
			{ id: 76, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [{ game: "ultrasun", dexType: "alola", id: 76 }], },
			{ id: 77, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [{ game: "ultrasun", dexType: "alola", id: 77 }], },
			{
				id: 78, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [{ game: "ultrasun", dexType: "alola", id: 78 }], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: [alolaDexForm(78, "Male")], },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: [alolaDexForm(78, "Female")], },],
			},
			{ id: 79, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [{ game: "ultrasun", dexType: "alola", id: 79 }], },
			{
				id: 80, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [{ game: "ultrasun", dexType: "alola", id: 80 }, akalaDex(26), ulaulaDex(35), poniDex(26),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [alolaDexForm(80, "Male"), akalaDex(26, "Male"), ulaulaDex(35, "Male"), poniDex(26, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [alolaDexForm(80, "Female"), akalaDex(26, "Female"), ulaulaDex(35, "Female"), poniDex(26, "Female"),], },],
			},
			{
				id: 81, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [{ game: "ultrasun", dexType: "alola", id: 81 }, akalaDex(27), ulaulaDex(36), poniDex(27),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [alolaDexForm(81, "Male"), akalaDex(27, "Male"), ulaulaDex(36, "Male"), poniDex(27, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [alolaDexForm(81, "Female"), akalaDex(27, "Female"), ulaulaDex(36, "Female"), poniDex(27, "Female"),], },],
			},
			{ id: 82, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [{ game: "ultrasun", dexType: "alola", id: 82 }, akalaDex(28), ulaulaDex(37), poniDex(28),], },
			{ id: 83, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [{ game: "ultrasun", dexType: "alola", id: 83 }, poniDex(29),], },
			{ id: 84, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [{ game: "ultrasun", dexType: "alola", id: 84 }, poniDex(30),], },
			{
				id: 85, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 85 }, akalaDex(29), ulaulaDex(38), poniDex(31),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [alolaDexForm(85, "Kantonian"), akalaDex(29, "Kantonian"), ulaulaDex(38, "Kantonian"), poniDex(31, "Kantonian"),], },
					{ name: "alola", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [alolaDexForm(85, "alola"), akalaDex(29, "alola"), ulaulaDex(38, "alola"), poniDex(31, "alola"),], },],
			},
			{
				id: 86, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 86 }, akalaDex(30), ulaulaDex(39), poniDex(32),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [alolaDexForm(86, "Kantonian"), akalaDex(30, "Kantonian"), ulaulaDex(39, "Kantonian"), poniDex(32, "Kantonian"),], },
					{ name: "alola", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [alolaDexForm(86, "alola"), akalaDex(30, "alola"), ulaulaDex(39, "alola"), poniDex(32, "alola"),], },],
			},
			{ id: 87, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: [{ game: "ultrasun", dexType: "alola", id: 87 }, ulaulaDex(40), poniDex(33),], },
			{ id: 88, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: [{ game: "ultrasun", dexType: "alola", id: 88 }, ulaulaDex(41), poniDex(34),], },
			{ id: 89, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [{ game: "ultrasun", dexType: "alola", id: 89 }, poniDex(35),], },
			{ id: 90, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [{ game: "ultrasun", dexType: "alola", id: 90 }, poniDex(36),], },
			{ id: 91, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [{ game: "ultrasun", dexType: "alola", id: 91 }, poniDex(37),], },
			{ id: 92, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [{ game: "ultrasun", dexType: "alola", id: 92 }, poniDex(38),], },
			{ id: 93, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [{ game: "ultrasun", dexType: "alola", id: 93 }, poniDex(39),], },
			{ id: 94, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [{ game: "ultrasun", dexType: "alola", id: 94 }, poniDex(40),], },
			{ id: 95, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: [{ game: "ultrasun", dexType: "alola", id: 95 }], },
			{ id: 96, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701), dexSync: [{ game: "ultrasun", dexType: "alola", id: 96 }], },
			{
				id: 97, name: "Oricorio", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [{ game: "ultrasun", dexType: "alola", id: 97 }, akalaDex(31), ulaulaDex(42), poniDex(41),], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [alolaDexForm(97, "Baile Style"), akalaDex(31, "Baile Style"), ulaulaDex(42, "Baile Style"), poniDex(41, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [alolaDexForm(97, "Pa'u Style"), akalaDex(31, "Pa'u Style"), ulaulaDex(42, "Pa'u Style"), poniDex(41, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [alolaDexForm(97, "Pom-Pom Style"), akalaDex(31, "Pom-Pom Style"), ulaulaDex(42, "Pom-Pom Style"), poniDex(41, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [alolaDexForm(97, "Sensu Style"), akalaDex(31, "Sensu Style"), ulaulaDex(42, "Sensu Style"), poniDex(41, "Sensu Style"),], },],
			},
			{ id: 98, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), dexSync: [{ game: "ultrasun", dexType: "alola", id: 98 }, ulaulaDex(43), poniDex(42),], },
			{ id: 99, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), dexSync: [{ game: "ultrasun", dexType: "alola", id: 99 }, ulaulaDex(44), poniDex(43),], },
			{
				id: 100, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), dexSync: [{ game: "ultrasun", dexType: "alola", id: 100 }, ulaulaDex(45), poniDex(44),], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), dexSync: [alolaDexForm(100, "Red Flower"), ulaulaDex(45, "Red Flower"), poniDex(44, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), dexSync: [alolaDexForm(100, "Orange Flower"), ulaulaDex(45, "Orange Flower"), poniDex(44, "Orange Flowerale"),], },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), dexSync: [alolaDexForm(100, "Yellow Flower"), ulaulaDex(45, "Yellow Flower"), poniDex(44, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), dexSync: [alolaDexForm(100, "Blue Flower"), ulaulaDex(45, "Blue Flower"), poniDex(44, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), dexSync: [alolaDexForm(100, "White Flower"), ulaulaDex(45, "White Flower"), poniDex(44, "White Flower"),], },],
			},
			{
				id: 101, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), dexSync: [{ game: "ultrasun", dexType: "alola", id: 101 }, ulaulaDex(46), poniDex(45),], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), dexSync: [alolaDexForm(101, "Red Flower"), ulaulaDex(46, "Red Flower"), poniDex(45, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), dexSync: [alolaDexForm(101, "Orange Flower"), ulaulaDex(46, "Orange Flower"), poniDex(45, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), dexSync: [alolaDexForm(101, "Yellow Flower"), ulaulaDex(46, "Yellow Flower"), poniDex(45, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), dexSync: [alolaDexForm(101, "Blue Flower"), ulaulaDex(46, "Blue Flower"), poniDex(45, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), dexSync: [alolaDexForm(101, "White Flower"), ulaulaDex(46, "White Flower"), poniDex(45, "White Flower"),], },],
			},
			{
				id: 102, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), dexSync: [{ game: "ultrasun", dexType: "alola", id: 102 }, ulaulaDex(47), poniDex(46),], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), dexSync: [alolaDexForm(102, "Red Flower"), ulaulaDex(47, "Red Flower"), poniDex(46, "Red Flower"),], },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), dexSync: [alolaDexForm(102, "Orange Flower"), ulaulaDex(47, "Orange Flower"), poniDex(46, "Orange Flower"),], },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), dexSync: [alolaDexForm(102, "Yellow Flower"), ulaulaDex(47, "Yellow Flower"), poniDex(46, "Yellow Flower"),], },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), dexSync: [alolaDexForm(102, "Blue Flower"), ulaulaDex(47, "Blue Flower"), poniDex(46, "Blue Flower"),], },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), dexSync: [alolaDexForm(102, "White Flower"), ulaulaDex(47, "White Flower"), poniDex(46, "White Flower"),], },],
			},
			{ id: 103, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [{ game: "ultrasun", dexType: "alola", id: 103 }, ulaulaDex(48), poniDex(47),], },
			{ id: 104, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [{ game: "ultrasun", dexType: "alola", id: 104 }, ulaulaDex(49), poniDex(48),], },
			{ id: 105, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [{ game: "ultrasun", dexType: "alola", id: 105 }, ulaulaDex(50), poniDex(49),], },
			{ id: 106, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [{ game: "ultrasun", dexType: "alola", id: 106 }, ulaulaDex(51), poniDex(50),], },
			{ id: 107, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [{ game: "ultrasun", dexType: "alola", id: 107 }, akalaDex(32), ulaulaDex(52), poniDex(51),], },
			{ id: 108, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [{ game: "ultrasun", dexType: "alola", id: 108 }, akalaDex(33), ulaulaDex(53), poniDex(52),], },
			{ id: 109, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), dexSync: [{ game: "ultrasun", dexType: "alola", id: 109 }], },
			{ id: 110, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), dexSync: [{ game: "ultrasun", dexType: "alola", id: 110 }], },
			{
				id: 111, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [{ game: "ultrasun", dexType: "alola", id: 111 }, akalaDex(34), ulaulaDex(54), poniDex(53),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [alolaDexForm(111, "Male"), akalaDex(34, "Male"), ulaulaDex(54, "Male"), poniDex(53, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [alolaDexForm(111, "Female"), akalaDex(34, "Female"), ulaulaDex(54, "Female"), poniDex(53, "Female"),], },],
			},
			{
				id: 112, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [{ game: "ultrasun", dexType: "alola", id: 112 }, akalaDex(35), ulaulaDex(55), poniDex(54),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [alolaDexForm(112, "Male"), akalaDex(35, "Male"), ulaulaDex(55, "Male"), poniDex(54, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [alolaDexForm(112, "Female"), akalaDex(35, "Female"), ulaulaDex(55, "Female"), poniDex(54, "Female"),], },],
			},
			{ id: 113, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [{ game: "ultrasun", dexType: "alola", id: 113 }, akalaDex(36), ulaulaDex(1000), poniDex(55),], },
			{ id: 114, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [{ game: "ultrasun", dexType: "alola", id: 114 }, akalaDex(37), poniDex(56),], },
			{ id: 115, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), dexSync: [{ game: "ultrasun", dexType: "alola", id: 115 }], },
			{ id: 116, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), dexSync: [{ game: "ultrasun", dexType: "alola", id: 116 }], },
			{ id: 117, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [{ game: "ultrasun", dexType: "alola", id: 117 }, poniDex(57),], },
			{ id: 118, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [{ game: "ultrasun", dexType: "alola", id: 118 }, poniDex(58),], },
			{ id: 119, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [{ game: "ultrasun", dexType: "alola", id: 119 }, poniDex(59),], },
			{ id: 120, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [{ game: "ultrasun", dexType: "alola", id: 120 }, poniDex(60),], },
			{ id: 121, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [{ game: "ultrasun", dexType: "alola", id: 121 }, poniDex(61),], },
			{ id: 122, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [{ game: "ultrasun", dexType: "alola", id: 122 }, poniDex(62),], },
			{ id: 123, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), dexSync: [{ game: "ultrasun", dexType: "alola", id: 123 }, poniDex(63),], },
			{ id: 124, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [{ game: "ultrasun", dexType: "alola", id: 124 }, poniDex(64),], },
			{ id: 125, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), dexSync: [{ game: "ultrasun", dexType: "alola", id: 125 }], },
			{ id: 126, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [{ game: "ultrasun", dexType: "alola", id: 126 }, poniDex(65),], },
			{
				id: 127, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [{ game: "ultrasun", dexType: "alola", id: 127 }, poniDex(66),], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [alolaDexForm(127, "Midday"), poniDex(66, "Midday"),], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [alolaDexForm(127, "Midnight"), poniDex(66, "Midnight"),], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [alolaDexForm(127, "Dusk"), poniDex(66, "Dusk"),], },],
			},
			{ id: 128, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: [{ game: "ultrasun", dexType: "alola", id: 128 }], },
			{ id: 129, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [{ game: "ultrasun", dexType: "alola", id: 129 }, akalaDex(38), ulaulaDex(56), poniDex(67),], },
			{ id: 130, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [{ game: "ultrasun", dexType: "alola", id: 130 }, akalaDex(39), ulaulaDex(57), poniDex(68),], },
			{
				id: 131, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [{ game: "ultrasun", dexType: "alola", id: 131 }, akalaDex(40), ulaulaDex(58), poniDex(69),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [alolaDexForm(131, "Male"), akalaDex(40, "Male"), ulaulaDex(58, "Male"), poniDex(69, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [alolaDexForm(131, "Female"), akalaDex(40, "Female"), ulaulaDex(58, "Female"), poniDex(69, "Female"),], },],
			},
			{
				id: 132, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [{ game: "ultrasun", dexType: "alola", id: 132 }, akalaDex(41), ulaulaDex(59), poniDex(70),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [alolaDexForm(132, "Male"), akalaDex(41, "Male"), ulaulaDex(59, "Male"), poniDex(70, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [alolaDexForm(132, "Female"), akalaDex(41, "Female"), ulaulaDex(59, "Female"), poniDex(70, "Female"),], },],
			},
			{ id: 133, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [{ game: "ultrasun", dexType: "alola", id: 133 }, akalaDex(42), ulaulaDex(60),], },
			{ id: 134, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [{ game: "ultrasun", dexType: "alola", id: 134 }, akalaDex(43),], },
			{ id: 135, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [{ game: "ultrasun", dexType: "alola", id: 135 }, akalaDex(44),], },
			{ id: 136, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [{ game: "ultrasun", dexType: "alola", id: 136 }, akalaDex(45),], },
			{ id: 137, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [{ game: "ultrasun", dexType: "alola", id: 137 }, akalaDex(46),], },
			{ id: 138, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: [{ game: "ultrasun", dexType: "alola", id: 138 }], },
			{ id: 139, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: [{ game: "ultrasun", dexType: "alola", id: 139 }], },
			{ id: 140, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), dexSync: [{ game: "ultrasun", dexType: "alola", id: 140 }, ulaulaDex(61),], },
			{ id: 141, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), dexSync: [{ game: "ultrasun", dexType: "alola", id: 141 }, ulaulaDex(62),], },
			{ id: 142, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), dexSync: [{ game: "ultrasun", dexType: "alola", id: 142 }, ulaulaDex(63),], },
			{ id: 143, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [{ game: "ultrasun", dexType: "alola", id: 143 }, akalaDex(47),], },
			{
				id: 144, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [{ game: "ultrasun", dexType: "alola", id: 144 }, akalaDex(48),], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: [alolaDexForm(144, "Male"), akalaDex(48, "Male"),], },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: [alolaDexForm(144, "Female"), akalaDex(48, "Female"),], },],
			},
			{ id: 145, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [{ game: "ultrasun", dexType: "alola", id: 145 }, akalaDex(49),], },
			{ id: 146, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [{ game: "ultrasun", dexType: "alola", id: 146 }, akalaDex(50),], },
			{ id: 147, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), dexSync: [{ game: "ultrasun", dexType: "alola", id: 147 }], },
			{ id: 148, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), dexSync: [{ game: "ultrasun", dexType: "alola", id: 148 }], },
			{ id: 149, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), dexSync: [{ game: "ultrasun", dexType: "alola", id: 149 }], },
			{ id: 150, name: "Tapu Koko", img: baseSprite(785), imgS: shinySprite(785), legendary: true, dexSync: [{ game: "ultrasun", dexType: "alola", id: 383 }], },
		],
	},
});