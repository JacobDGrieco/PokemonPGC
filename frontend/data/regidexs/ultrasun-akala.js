const game = "ultrasun";
const sub = game + "-akala";
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
	[sub]: "Akala Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), dexSync: [melemeleDex(10), { game: "ultramoon", dexType: "alola", id: 10 }, ulaulaDex(1), poniDex(1),], },
			{ id: 2, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), dexSync: [melemeleDex(11), { game: "ultramoon", dexType: "alola", id: 11 }, ulaulaDex(2), poniDex(2),], },
			{ id: 3, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), dexSync: [melemeleDex(12), { game: "ultramoon", dexType: "alola", id: 12 }, ulaulaDex(3), poniDex(3),], },
			{ id: 4, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), dexSync: [melemeleDex(13), { game: "ultramoon", dexType: "alola", id: 13 }, ulaulaDex(4), poniDex(4),], },
			{ id: 5, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), dexSync: [melemeleDex(14), { game: "ultramoon", dexType: "alola", id: 14 }, ulaulaDex(5), poniDex(5),], },
			{
				id: 6, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDex(15), { game: "ultramoon", dexType: "alola", id: 15 }, ulaulaDex(6), poniDex(6),], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), dexSync: [melemeleDexForm(15, "Kantonian Male"), alolaDexForm(15, "Kantonian Male"), ulaulaDexForm(6, "Kantonian Male"), poniDexForm(6, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), dexSync: [melemeleDexForm(15, "Kantonian Female"), alolaDexForm(15, "Kantonian Female"), ulaulaDexForm(6, "Kantonian Female"), poniDexForm(6, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), dexSync: [melemeleDexForm(15, "Alolan"), alolaDexForm(15, "Alolan"), ulaulaDexForm(6, "Alolan"), poniDexForm(6, "Alolan"),], },],
			},
			{
				id: 7, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDex(16), { game: "ultramoon", dexType: "alola", id: 16 }, ulaulaDex(7), poniDex(7),], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), dexSync: [melemeleDexForm(16, "Kantonian Male"), alolaDexForm(16, "Kantonian Male"), ulaulaDexForm(7, "Kantonian Male"), poniDexForm(7, "Kantonian Male"),], },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), dexSync: [melemeleDexForm(16, "Kantonian Female"), alolaDexForm(16, "Kantonian Female"), ulaulaDexForm(7, "Kantonian Female"), poniDexForm(7, "Kantonian Female"),], },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), dexSync: [melemeleDexForm(16, "Alolan"), alolaDexForm(16, "Alolan"), ulaulaDexForm(7, "Alolan"), poniDexForm(7, "Alolan"),], },],
			},
			{ id: 8, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: [melemeleDex(17), { game: "ultramoon", dexType: "alola", id: 17 },], },
			{ id: 9, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: [melemeleDex(18), { game: "ultramoon", dexType: "alola", id: 18 },], },
			{
				id: 10, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDex(19), { game: "ultramoon", dexType: "alola", id: 19 },], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: [melemeleDexForm(19, "Male"), alolaDexForm(19, "Male"),], },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: [melemeleDexForm(19, "Female"), alolaDexForm(19, "Female"),], },],
			},
			{ id: 11, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), dexSync: [melemeleDex(34), { game: "ultramoon", dexType: "alola", id: 34 }, ulaulaDex(12),], },
			{ id: 12, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), dexSync: [melemeleDex(35), { game: "ultramoon", dexType: "alola", id: 35 }, ulaulaDex(13),], },
			{ id: 13, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), dexSync: [melemeleDex(36), { game: "ultramoon", dexType: "alola", id: 36 }, ulaulaDex(14),], },
			{ id: 14, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [melemeleDex(37), { game: "ultramoon", dexType: "alola", id: 37 },], },
			{
				id: 15, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDex(38), { game: "ultramoon", dexType: "alola", id: 38 },], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [melemeleDexForm(38, "Male"), alolaDexForm(38, "Male"),], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [melemeleDexForm(38, "Female"), alolaDexForm(38, "Female"),], },],
			},
			{ id: 16, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [melemeleDex(39), { game: "ultramoon", dexType: "alola", id: 39 }, ulaulaDex(15), poniDex(15),], },
			{ id: 17, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [melemeleDex(40), { game: "ultramoon", dexType: "alola", id: 40 }, ulaulaDex(16), poniDex(16),], },
			{ id: 18, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [melemeleDex(41), { game: "ultramoon", dexType: "alola", id: 41 }, ulaulaDex(17), poniDex(17),], },
			{ id: 19, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [melemeleDex(47), { game: "ultramoon", dexType: "alola", id: 47 }, ulaulaDex(21), poniDex(18),], },
			{ id: 20, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [melemeleDex(48), { game: "ultramoon", dexType: "alola", id: 48 }, ulaulaDex(22), poniDex(19),], },
			{ id: 21, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [melemeleDex(71), { game: "ultramoon", dexType: "alola", id: 71 }, ulaulaDex(30), poniDex(24),], },
			{ id: 22, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [melemeleDex(72), { game: "ultramoon", dexType: "alola", id: 72 }, ulaulaDex(31), poniDex(25),], },
			{ id: 23, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [melemeleDex(73), { game: "ultramoon", dexType: "alola", id: 73 }, ulaulaDex(32),], },
			{ id: 24, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [melemeleDex(74), { game: "ultramoon", dexType: "alola", id: 74 }, ulaulaDex(33),], },
			{ id: 25, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [melemeleDex(75), { game: "ultramoon", dexType: "alola", id: 75 }, ulaulaDex(34),], },
			{
				id: 26, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDex(80), { game: "ultramoon", dexType: "alola", id: 80 }, ulaulaDex(35), poniDex(26),], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: [melemeleDexForm(80, "Male"), alolaDexForm(80, "Male"), ulaulaDexForm(35, "Male"), poniDexForm(26, "Male"),], },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: [melemeleDexForm(80, "Female"), alolaDexForm(80, "Female"), ulaulaDexForm(35, "Female"), poniDexForm(26, "Female"),], },],
			},
			{
				id: 27, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDex(81), { game: "ultramoon", dexType: "alola", id: 81 }, ulaulaDex(36), poniDex(27),], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: [melemeleDexForm(81, "Male"), alolaDexForm(81, "Male"), ulaulaDexForm(36, "Male"), poniDexForm(27, "Male"),], },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: [melemeleDexForm(81, "Female"), alolaDexForm(81, "Female"), ulaulaDexForm(36, "Female"), poniDexForm(27, "Female"),], },],
			},
			{ id: 28, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [melemeleDex(82), { game: "ultramoon", dexType: "alola", id: 82 }, ulaulaDex(37), poniDex(28),], },
			{
				id: 29, name: "Diglett", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDex(85), { game: "ultramoon", dexType: "alola", id: 85 }, ulaulaDex(38), poniDex(31),], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [melemeleDexForm(85, "Kantonian"), alolaDexForm(85, "Kantonian"), ulaulaDexForm(38, "Kantonian"), poniDexForm(31, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [melemeleDexForm(85, "Alolan"), alolaDexForm(85, "Alolan"), ulaulaDexForm(38, "Alolan"), poniDexForm(31, "Alolan"),], },],
			},
			{
				id: 30, name: "Dugtrio", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDex(86), { game: "ultramoon", dexType: "alola", id: 86 }, ulaulaDex(39), poniDex(32),], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [melemeleDexForm(86, "Kantonian"), alolaDexForm(86, "Kantonian"), ulaulaDexForm(39, "Kantonian"), poniDexForm(32, "Kantonian"),], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [melemeleDexForm(86, "Alolan"), alolaDexForm(86, "Alolan"), ulaulaDexForm(39, "Alolan"), poniDexForm(32, "Alolan"),], },],
			},
			{
				id: 31, name: "Oricorio", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDex(97), { game: "ultramoon", dexType: "alola", id: 97 }, ulaulaDex(42), poniDex(41),], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [melemeleDexForm(97, "Baile Style"), alolaDexForm(97, "Baile Style"), ulaulaDexForm(42, "Baile Style"), poniDexForm(41, "Baile Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), dexSync: [melemeleDexForm(97, "Pa'u Style"), alolaDexForm(97, "Pa'u Style"), ulaulaDexForm(42, "Pa'u Style"), poniDexForm(41, "Pa'u Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-po"), imgS: shinySprite("741-po"), dexSync: [melemeleDexForm(97, "Pom-Pom Style"), alolaDexForm(97, "Pom-Pom Style"), ulaulaDexForm(42, "Pom-Pom Style"), poniDexForm(41, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [melemeleDexForm(97, "Sensu Style"), alolaDexForm(97, "Sensu Style"), ulaulaDexForm(42, "Sensu Style"), poniDexForm(41, "Sensu Style"),], },],
			},
			{ id: 32, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [melemeleDex(107), { game: "ultramoon", dexType: "alola", id: 107 }, ulaulaDex(52), poniDex(51),], },
			{ id: 33, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [melemeleDex(108), { game: "ultramoon", dexType: "alola", id: 108 }, ulaulaDex(53), poniDex(52),], },
			{
				id: 34, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDex(111), { game: "ultramoon", dexType: "alola", id: 111 }, ulaulaDex(54), poniDex(53),], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [melemeleDexForm(111, "Male"), alolaDexForm(111, "Male"), ulaulaDexForm(54, "Male"), poniDexForm(53, "Male"),], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [melemeleDexForm(111, "Female"), alolaDexForm(111, "Female"), ulaulaDexForm(54, "Female"), poniDexForm(53, "Female"),], },],
			},
			{
				id: 35, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDex(112), { game: "ultramoon", dexType: "alola", id: 112 }, ulaulaDex(55), poniDex(54),], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [melemeleDexForm(112, "Male"), alolaDexForm(112, "Male"), ulaulaDexForm(55, "Male"), poniDexForm(54, "Male"),], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [melemeleDexForm(112, "Female"), alolaDexForm(112, "Female"), ulaulaDexForm(55, "Female"), poniDexForm(54, "Female"),], },],
			},
			{ id: 36, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [melemeleDex(113), { game: "ultramoon", dexType: "alola", id: 113 }, ulaulaDex(1000), poniDex(55),], },
			{ id: 37, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [melemeleDex(114), { game: "ultramoon", dexType: "alola", id: 114 }, poniDex(56),], },
			{ id: 38, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [melemeleDex(129), { game: "ultramoon", dexType: "alola", id: 129 }, ulaulaDex(56), poniDex(67),], },
			{ id: 39, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [melemeleDex(130), { game: "ultramoon", dexType: "alola", id: 130 }, ulaulaDex(57), poniDex(68),], },
			{
				id: 40, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDex(131), { game: "ultramoon", dexType: "alola", id: 131 }, ulaulaDex(58), poniDex(69),], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [melemeleDexForm(131, "Male"), alolaDexForm(131, "Male"), ulaulaDexForm(58, "Male"), poniDexForm(69, "Male"),], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [melemeleDexForm(131, "Female"), alolaDexForm(131, "Female"), ulaulaDexForm(58, "Female"), poniDexForm(69, "Female"),], },],
			},
			{
				id: 41, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDex(132), { game: "ultramoon", dexType: "alola", id: 132 }, ulaulaDex(59), poniDex(70),], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [melemeleDexForm(132, "Male"), alolaDexForm(132, "Male"), ulaulaDexForm(59, "Male"), poniDexForm(70, "Male"),], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [melemeleDexForm(132, "Female"), alolaDexForm(132, "Female"), ulaulaDexForm(59, "Female"), poniDexForm(70, "Female"),], },],
			},
			{ id: 42, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [melemeleDex(133), { game: "ultramoon", dexType: "alola", id: 113 }, ulaulaDex(60),], },
			{ id: 43, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [melemeleDex(134), { game: "ultramoon", dexType: "alola", id: 134 },], },
			{ id: 44, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: [melemeleDex(135), { game: "ultramoon", dexType: "alola", id: 135 },], },
			{ id: 45, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [melemeleDex(136), { game: "ultramoon", dexType: "alola", id: 136 },], },
			{ id: 46, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [melemeleDex(137), { game: "ultramoon", dexType: "alola", id: 137 },], },
			{ id: 47, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [melemeleDex(143), { game: "ultramoon", dexType: "alola", id: 143 },], },
			{
				id: 48, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [melemeleDex(144), { game: "ultramoon", dexType: "alola", id: 144 },], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: [melemeleDexForm(144, "Male"), alolaDexForm(144, "Male"),], },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: [melemeleDexForm(144, "Female"), alolaDexForm(144, "Female"),], },],
			},
			{ id: 49, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [melemeleDex(145), { game: "ultramoon", dexType: "alola", id: 145 },], },
			{ id: 50, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [melemeleDex(146), { game: "ultramoon", dexType: "alola", id: 146 },], },
			{ id: 51, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), dexSync: [{ game: "ultramoon", dexType: "alola", id: 150 }], },
			{ id: 52, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), dexSync: [{ game: "ultramoon", dexType: "alola", id: 151 }], },
			{ id: 53, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), dexSync: [{ game: "ultramoon", dexType: "alola", id: 152 }], },
			{ id: 54, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: [{ game: "ultramoon", dexType: "alola", id: 153 }], },
			{ id: 55, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: [{ game: "ultramoon", dexType: "alola", id: 154 }], },
			{ id: 56, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: [{ game: "ultramoon", dexType: "alola", id: 155 }], },
			{ id: 57, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: [{ game: "ultramoon", dexType: "alola", id: 156 }], },
			{ id: 58, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: [{ game: "ultramoon", dexType: "alola", id: 157 }], },
			{ id: 59, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: [{ game: "ultramoon", dexType: "alola", id: 158 }], },
			{ id: 60, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), dexSync: [{ game: "ultramoon", dexType: "alola", id: 159 }], },
			{ id: 61, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), dexSync: [{ game: "ultramoon", dexType: "alola", id: 160 }], },
			{ id: 62, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), dexSync: [{ game: "ultramoon", dexType: "alola", id: 161 }], },
			{ id: 63, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), dexSync: [{ game: "ultramoon", dexType: "alola", id: 162 }], },
			{ id: 64, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), dexSync: [{ game: "ultramoon", dexType: "alola", id: 163 }], },
			{ id: 65, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), dexSync: [{ game: "ultramoon", dexType: "alola", id: 164 }], },
			{ id: 66, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [{ game: "ultramoon", dexType: "alola", id: 165 }, ulaulaDex(64), poniDex(71),], },
			{ id: 67, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [{ game: "ultramoon", dexType: "alola", id: 166 }, ulaulaDex(65), poniDex(72),], },
			{ id: 68, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: [{ game: "ultramoon", dexType: "alola", id: 167 }], },
			{ id: 69, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: [{ game: "ultramoon", dexType: "alola", id: 168 }], },
			{ id: 70, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: [{ game: "ultramoon", dexType: "alola", id: 169 }], },
			{ id: 71, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), dexSync: [{ game: "ultramoon", dexType: "alola", id: 170 }, poniDex(73),], },
			{ id: 72, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), dexSync: [{ game: "ultramoon", dexType: "alola", id: 171 }, poniDex(74),], },
			{ id: 73, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [{ game: "ultramoon", dexType: "alola", id: 172 }, ulaulaDex(66),], },
			{ id: 74, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [{ game: "ultramoon", dexType: "alola", id: 173 }, ulaulaDex(67),], },
			{ id: 75, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [{ game: "ultramoon", dexType: "alola", id: 174 }, ulaulaDex(68),], },
			{ id: 76, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [{ game: "ultramoon", dexType: "alola", id: 175 }, ulaulaDex(69),], },
			{ id: 77, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [{ game: "ultramoon", dexType: "alola", id: 176 }], },
			{ id: 78, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [{ game: "ultramoon", dexType: "alola", id: 177 }], },
			{ id: 79, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), dexSync: [{ game: "ultramoon", dexType: "alola", id: 178 }, ulaulaDex(70),], },
			{ id: 80, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), dexSync: [{ game: "ultramoon", dexType: "alola", id: 179 }, ulaulaDex(71),], },
			{ id: 81, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), dexSync: [{ game: "ultramoon", dexType: "alola", id: 180 }, ulaulaDex(72),], },
			{ id: 82, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), dexSync: [{ game: "ultramoon", dexType: "alola", id: 181 }, ulaulaDex(73),], },
			{ id: 83, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: [{ game: "ultramoon", dexType: "alola", id: 182 }, ulaulaDex(74),], },
			{ id: 84, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: [{ game: "ultramoon", dexType: "alola", id: 183 }, ulaulaDex(75),], },
			{ id: 85, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: [{ game: "ultramoon", dexType: "alola", id: 184 }, ulaulaDex(76),], },
			{
				id: 86, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: [{ game: "ultramoon", dexType: "alola", id: 185 }, ulaulaDex(77),], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: [alolaDexForm(185, "Male"), ulaulaDexForm(77, "Male"),], },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: [alolaDexForm(185, "Female"), ulaulaDexForm(77, "Female"),], },],
			},
			{
				id: 87, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [{ game: "ultramoon", dexType: "alola", id: 186 }, ulaulaDex(78),], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [alolaDexForm(186, "Male"), ulaulaDexForm(78, "Male"),], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [alolaDexForm(186, "Female"), ulaulaDexForm(78, "Female"),], },],
			},
			{
				id: 88, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [{ game: "ultramoon", dexType: "alola", id: 187 }, ulaulaDex(79),], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [alolaDexForm(187, "Male"), ulaulaDexForm(79, "Male"),], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [alolaDexForm(187, "Female"), ulaulaDexForm(79, "Female"),], },],
			},
			{
				id: 89, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [{ game: "ultramoon", dexType: "alola", id: 188 }, ulaulaDex(80), poniDex(75),], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [alolaDexForm(188, "Blue-Striped"), ulaulaDexForm(80, "Blue-Striped"), poniDexForm(75, "Blue-Striped"),], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [alolaDexForm(188, "Red-Striped"), ulaulaDexForm(80, "Red-Striped"), poniDexForm(75, "Red-Striped"),], },],
			},
			{ id: 90, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [{ game: "ultramoon", dexType: "alola", id: 189 }], },
			{
				id: 91, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [{ game: "ultramoon", dexType: "alola", id: 190 }], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [alolaDexForm(190, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [alolaDexForm(190, "Female")], },],
			},
			{ id: 92, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [{ game: "ultramoon", dexType: "alola", id: 191 }], },
			{ id: 93, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [{ game: "ultramoon", dexType: "alola", id: 192 }], },
			{ id: 94, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [{ game: "ultramoon", dexType: "alola", id: 193 }], },
			{ id: 95, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [{ game: "ultramoon", dexType: "alola", id: 194 }], },
			{ id: 96, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [{ game: "ultramoon", dexType: "alola", id: 195 }], },
			{ id: 97, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [{ game: "ultramoon", dexType: "alola", id: 196 }], },
			{ id: 98, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), dexSync: [{ game: "ultramoon", dexType: "alola", id: 197 }], },
			{
				id: 99, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), dexSync: [{ game: "ultramoon", dexType: "alola", id: 198 }], forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), dexSync: [alolaDexForm(198, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), dexSync: [alolaDexForm(198, "Alolan")], },],
			},
			{ id: 100, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), dexSync: [{ game: "ultramoon", dexType: "alola", id: 199 }], },
			{ id: 101, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), dexSync: [{ game: "ultramoon", dexType: "alola", id: 200 }], },
			{ id: 102, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), dexSync: [{ game: "ultramoon", dexType: "alola", id: 201 }], },
			{ id: 103, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), dexSync: [{ game: "ultramoon", dexType: "alola", id: 202 }], },
			{ id: 104, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), dexSync: [{ game: "ultramoon", dexType: "alola", id: 203 }], },
			{ id: 105, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), dexSync: [{ game: "ultramoon", dexType: "alola", id: 204 }], },
			{ id: 106, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), dexSync: [{ game: "ultramoon", dexType: "alola", id: 205 }, poniDex(76),], },
			{ id: 107, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), dexSync: [{ game: "ultramoon", dexType: "alola", id: 206 }, poniDex(77),], },
			{ id: 108, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), dexSync: [{ game: "ultramoon", dexType: "alola", id: 207 }], },
			{ id: 109, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), dexSync: [{ game: "ultramoon", dexType: "alola", id: 208 }], },
			{ id: 110, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), dexSync: [{ game: "ultramoon", dexType: "alola", id: 209 }], },
			{ id: 111, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), dexSync: [{ game: "ultramoon", dexType: "alola", id: 210 }], },
			{ id: 112, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: [{ game: "ultramoon", dexType: "alola", id: 211 }, poniDex(78),], },
			{ id: 113, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: [{ game: "ultramoon", dexType: "alola", id: 212 }], },
			{ id: 114, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: [{ game: "ultramoon", dexType: "alola", id: 213 }], },
			{ id: 115, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), dexSync: [{ game: "ultramoon", dexType: "alola", id: 214 }], },
			{ id: 116, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), dexSync: [{ game: "ultramoon", dexType: "alola", id: 215 }], },
			{ id: 117, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), dexSync: [{ game: "ultramoon", dexType: "alola", id: 216 }], },
			{ id: 118, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [{ game: "ultramoon", dexType: "alola", id: 217 }, ulaulaDex(81), poniDex(79),], },
			{ id: 119, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [{ game: "ultramoon", dexType: "alola", id: 218 }, ulaulaDex(82), poniDex(80),], },
			{ id: 120, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [{ game: "ultramoon", dexType: "alola", id: 219 }, ulaulaDex(83), poniDex(81),], },
			{
				id: 121, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: [{ game: "ultramoon", dexType: "alola", id: 220 }, ulaulaDex(84), poniDex(82),], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: [alolaDexForm(220, "Normal"), ulaulaDexForm(84, "Normal"), poniDexForm(82, "Normal"),], },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: [alolaDexForm(220, "Rainy"), ulaulaDexForm(84, "Rainy"), poniDexForm(82, "Rainy"),], },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: [alolaDexForm(220, "Snowy"), ulaulaDexForm(84, "Snowy"), poniDexForm(82, "Snowy"),], },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: [alolaDexForm(220, "Sunny"), ulaulaDexForm(84, "Sunny"), poniDexForm(82, "Sunny"),], },],
			},
			{ id: 122, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [{ game: "ultramoon", dexType: "alola", id: 221 }, poniDex(83),], },
			{ id: 123, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [{ game: "ultramoon", dexType: "alola", id: 222 }, poniDex(84),], },
			{ id: 124, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: [{ game: "ultramoon", dexType: "alola", id: 223 }], },
			{ id: 125, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: [{ game: "ultramoon", dexType: "alola", id: 224 }], },
			{ id: 126, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), dexSync: [{ game: "ultramoon", dexType: "alola", id: 225 }], },
			{ id: 127, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), dexSync: [{ game: "ultramoon", dexType: "alola", id: 226 }], },
			{ id: 128, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), dexSync: [{ game: "ultramoon", dexType: "alola", id: 227 }], },
			{ id: 129, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), dexSync: [{ game: "ultramoon", dexType: "alola", id: 228 }], },
			{ id: 130, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), dexSync: [{ game: "ultramoon", dexType: "alola", id: 229 }], },
			{ id: 131, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), dexSync: [{ game: "ultramoon", dexType: "alola", id: 230 }], },
			{ id: 132, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), dexSync: [{ game: "ultramoon", dexType: "alola", id: 231 }], },
			{ id: 133, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), dexSync: [{ game: "ultramoon", dexType: "alola", id: 232 }], },
			{ id: 134, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), dexSync: [{ game: "ultramoon", dexType: "alola", id: 233 }], },
			{ id: 135, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), dexSync: [{ game: "ultramoon", dexType: "alola", id: 234 }], },
			{ id: 136, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [{ game: "ultramoon", dexType: "alola", id: 235 }], },
			{ id: 137, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [{ game: "ultramoon", dexType: "alola", id: 236 }], },
			{ id: 138, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [{ game: "ultramoon", dexType: "alola", id: 237 }], },
			{ id: 139, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [{ game: "ultramoon", dexType: "alola", id: 238 }], },
			{ id: 140, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), dexSync: [{ game: "ultramoon", dexType: "alola", id: 239 }], },
			{ id: 141, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), dexSync: [{ game: "ultramoon", dexType: "alola", id: 240 }], },
			{ id: 142, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), dexSync: [{ game: "ultramoon", dexType: "alola", id: 241 }], },
			{ id: 143, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), dexSync: [{ game: "ultramoon", dexType: "alola", id: 242 }], },
			{ id: 144, name: "Tyrunt", img: baseSprite(696), imgS: shinySprite(696), dexSync: [{ game: "ultramoon", dexType: "alola", id: 243 }], },
			{ id: 145, name: "Tyrantrum", img: baseSprite(697), imgS: shinySprite(697), dexSync: [{ game: "ultramoon", dexType: "alola", id: 244 }], },
			{ id: 146, name: "Amaura", img: baseSprite(698), imgS: shinySprite(698), dexSync: [{ game: "ultramoon", dexType: "alola", id: 245 }], },
			{ id: 147, name: "Aurorus", img: baseSprite(699), imgS: shinySprite(699), dexSync: [{ game: "ultramoon", dexType: "alola", id: 246 }], },
			{ id: 148, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), dexSync: [{ game: "ultramoon", dexType: "alola", id: 247 }], },
			{ id: 149, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), dexSync: [{ game: "ultramoon", dexType: "alola", id: 248 }], },
			{ id: 150, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), dexSync: [{ game: "ultramoon", dexType: "alola", id: 249 }], },
			{ id: 151, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: [{ game: "ultramoon", dexType: "alola", id: 250 }], },
			{ id: 152, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: [{ game: "ultramoon", dexType: "alola", id: 251 }], },
			{ id: 153, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), dexSync: [{ game: "ultramoon", dexType: "alola", id: 252 }], },
			{
				id: 154, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), dexSync: [{ game: "ultramoon", dexType: "alola", id: 253 }], forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), dexSync: [alolaDexForm(253, "Male")], },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), dexSync: [alolaDexForm(253, "Female")], },],
			},
			{ id: 155, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), dexSync: [{ game: "ultramoon", dexType: "alola", id: 254 }], },
			{ id: 156, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), dexSync: [{ game: "ultramoon", dexType: "alola", id: 255 }], },
			{ id: 157, name: "Pyukumuku", img: baseSprite(771), imgS: shinySprite(771), dexSync: [{ game: "ultramoon", dexType: "alola", id: 256 }], },
			{ id: 158, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: [{ game: "ultramoon", dexType: "alola", id: 257 }], },
			{ id: 159, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: [{ game: "ultramoon", dexType: "alola", id: 258 }], },
			{ id: 160, name: "Tapu Lele", img: baseSprite(786), imgS: shinySprite(786), legendary: true, dexSync: [{ game: "ultramoon", dexType: "alola", id: 384 }], },
		],
	},
});