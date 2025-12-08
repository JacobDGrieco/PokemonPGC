const game = "shield";
const sub = game + "ioa";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const galarDex = (id) => _regionalDex(game, id);
const ioaDex = (id) => _regionalDex(game + "ioa", id);
const ctDex = (id) => _regionalDex(game + "ct", id);
const galarDexForm = (id, form) => _regionalDex(game, id, form);
const ioaDexForm = (id, form) => _regionalDex(game + "ioa", id, form);
const ctDexForm = (id, form) => _regionalDex(game + "ct", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Isle of Armor Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{
				id: 1, name: "Slowpoke", img: baseSprite("079-g"), imgS: shinySprite("079-g"), forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), },
				],
			},
			{
				id: 2, name: "Slowbro", img: baseSprite("080-g"), imgS: shinySprite("080-g"), forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), },
				],
			},
			{
				id: 3, name: "Slowking", img: baseSprite("199-g"), imgS: shinySprite("199-g"), forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), },
				],
			},
			{ id: 4, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 5, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), },
			{ id: 6, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 7, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 8, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 9, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), dexSyncs: [galarDex(24), ctDex(5)], },
			{ id: 10, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), dexSyncs: [galarDex(25), ctDex(6)], },
			{ id: 11, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 12, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 13, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 14, name: "Blipbug", img: baseSprite(824), imgS: shinySprite(824), dexSync: [galarDex(10)], },
			{ id: 15, name: "Dottler", img: baseSprite(825), imgS: shinySprite(825), dexSync: [galarDex(11)], },
			{ id: 16, name: "Orbeetle", img: baseSprite(826), imgS: shinySprite(826), dexSync: [galarDex(12)], },
			{ id: 17, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), },
			{ id: 18, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), },
			{ id: 19, name: "Applin", img: baseSprite(840), imgS: shinySprite(840), dexSync: [galarDex(205)], },
			{ id: 20, name: "Flapple", img: baseSprite(841), imgS: shinySprite(841), dexSync: [galarDex(206)], },
			{ id: 21, name: "Appletun", img: baseSprite(842), imgS: shinySprite(842), dexSync: [galarDex(207)], },
			{ id: 22, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), },
			{ id: 23, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), },
			{ id: 24, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), },
			{
				id: 25, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), },
				],
			},
			{
				id: 26, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), },
				],
			},
			{
				id: 27, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), },
				],
			},
			{ id: 28, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), },
			{ id: 29, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [galarDex(246)], },
			{ id: 30, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [galarDex(247)], },
			{ id: 31, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 32, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 33, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
				],
			},
			{ id: 34, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), dexSync: [galarDex(120)], },
			{ id: 35, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), dexSync: [galarDex(121)], },
			{ id: 36, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), dexSync: [galarDex(122)], },
			{ id: 37, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), dexSync: [galarDex(123)], },
			{ id: 38, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), dexSync: [galarDex(98)], },
			{ id: 39, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), dexSync: [galarDex(99)], },
			{ id: 40, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 41, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 42, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSyncs: [galarDex(144), ctDex(62)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSyncs: [galarDexForm(144, "Male"), ctDexForm(62, "Male")], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSyncs: [galarDexForm(144, "Female"), ctDexForm(62, "Female")], },
				],
			},
			{
				id: 43, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSyncs: [galarDex(145), ctDex(63)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSyncs: [galarDexForm(145, "Male"), ctDexForm(63, "Male")], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSyncs: [galarDexForm(145, "Female"), ctDexForm(63, "Female")], },
				],
			},
			{ id: 44, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [galarDex(148)], },
			{
				id: 45, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [galarDex(149)], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: [galarDexForm(149, "Male")], },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: [galarDexForm(149, "Female")], },
				],
			},
			{ id: 46, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [galarDex(354)], },
			{ id: 47, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [galarDex(355)], },
			{ id: 48, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [galarDex(62)], },
			{ id: 49, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [galarDex(63)], },
			{ id: 50, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), dexSync: [galarDex(285)], },
			{ id: 51, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), dexSync: [galarDex(286)], },
			{ id: 52, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{ id: 53, name: "Bouffalant", img: baseSprite(626), imgS: shinySprite(626), },
			{ id: 54, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 55, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{ id: 56, name: "Chewtle", img: baseSprite(833), imgS: shinySprite(833), dexSync: [galarDex(42)], },
			{ id: 57, name: "Drednaw", img: baseSprite(834), imgS: shinySprite(834), dexSync: [galarDex(43)], },
			{
				id: 58, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), dexSync: [galarDex(100)], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: [galarDexForm(100, "Male")], },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: [galarDexForm(100, "Female")], },
				],
			},
			{
				id: 59, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), dexSync: [galarDex(101)], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), dexSync: [galarDexForm(101, "Male")], },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), dexSync: [galarDexForm(101, "Female")], },
				],
			},
			{ id: 60, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [galarDex(389)], },
			{ id: 61, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [galarDex(390)], },
			{ id: 62, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [galarDex(391)], },
			{ id: 63, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: [ctDex(119)], },
			{ id: 64, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), dexSyncs: [galarDex(275), ctDex(97)], },
			{ id: 65, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), dexSyncs: [galarDex(276), ctDex(98)], },
			{ id: 66, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), dexSyncs: [galarDex(273), ctDex(95)], },
			{ id: 67, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), dexSyncs: [galarDex(274), ctDex(96)], },
			{ id: 68, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), },
			{ id: 69, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), },
			{
				id: 70, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
				],
			},
			{ id: 71, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), },
			{ id: 72, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), },
			{ id: 73, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), },
			{ id: 74, name: "Venipede", img: baseSprite(543), imgS: shinySprite(543), },
			{ id: 75, name: "Whirlipede", img: baseSprite(544), imgS: shinySprite(544), },
			{ id: 76, name: "Scolipede", img: baseSprite(545), imgS: shinySprite(545), },
			{ id: 77, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), },
			{ id: 78, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), },
			{ id: 79, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), },
			{ id: 80, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{
				id: 81, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
				],
			},
			{
				id: 82, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), dexSync: [galarDex(222)], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), dexSync: [galarDexForm(222, "Male")], },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), dexSync: [galarDexForm(222, "Female")], },
				],
			},
			{
				id: 83, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), dexSync: [galarDex(223)], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), dexSync: [galarDexForm(223, "Male")], },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), dexSync: [galarDexForm(223, "Female")], },
				],
			},
			{ id: 84, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [galarDex(193)], },
			{
				id: 85, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [galarDex(194)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [galarDexForm(194, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [galarDexForm(194, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Alola Cap")], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Hoenn Cap")], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Kalos Cap")], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Original Cap")], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Partner Cap")], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Sinnoh Cap")], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "Unova Cap")], },
					{ name: "World Cap", img: baseSprite("025-w"), imgS: shinySprite("025-w"), maxStatus: "caught", mythical: true, dexSync: [galarDexForm(194, "World Cap")], },
				],
			},
			{
				id: 86, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: [galarDex(195)], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [galarDexForm(195, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [galarDexForm(195, "Kantonian Female")], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [galarDexForm(195, "Alolan")], },
				],
			},
			{ id: 87, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), },
			{ id: 88, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), },
			{ id: 89, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), dexSync: [galarDex(342)], },
			{ id: 90, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), dexSync: [galarDex(343)], },
			{ id: 91, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 92, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 93, name: "Cramorant", img: baseSprite(845), imgS: shinySprite(845), dexSync: [galarDex(309)], },
			{
				id: 94, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [galarDex(146)], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: [galarDexForm(146, "Male")], },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: [galarDexForm(146, "Female")], },
				],
			},
			{
				id: 95, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [galarDex(147)], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: [galarDexForm(147, "Male")], },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: [galarDexForm(147, "Female")], },
				],
			},
			{ id: 96, name: "Arrokuda", img: baseSprite(846), imgS: shinySprite(846), dexSync: [galarDex(180)], },
			{ id: 97, name: "Barraskewda", img: baseSprite(847), imgS: shinySprite(847), dexSync: [galarDex(181)], },
			{ id: 98, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 99, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 100, name: "Kubfu", img: baseSprite(891), imgS: shinySprite(891), maxStatus: "caught", legendary: true, },
			{
				id: 101, name: "Urshifu", img: baseSprite(892), imgS: shinySprite(892), maxStatus: "caught", legendary: true, forms: [
					{ name: "Single Strike Style", img: baseSprite(892), imgS: shinySprite(892), maxStatus: "caught", legendary: true, },
					{ name: "Rapid Strike Style", img: baseSprite("892-r"), imgS: shinySprite("892-r"), maxStatus: "caught", legendary: true, },
				],
			},
			{ id: 102, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), },
			{ id: 103, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), },
			{ id: 104, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), dexSyncs: [galarDex(344), ctDex(157)], },
			{ id: 105, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 106, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 107, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 108, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), dexSync: [galarDex(290)], },
			{ id: 109, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), dexSync: [galarDex(291)], },
			{ id: 110, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), dexSync: [galarDex(155)], },
			{ id: 111, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 112, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 113, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), },
			{ id: 114, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), },
			{ id: 115, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), },
			{ id: 116, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{ id: 117, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{
				id: 118, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				],
			},
			{
				id: 119, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				],
			},
			{ id: 120, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{
				id: 121, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				],
			},
			{ id: 122, name: "Dwebble", img: baseSprite(557), imgS: shinySprite(557), dexSync: [galarDex(86)], },
			{ id: 123, name: "Crustle", img: baseSprite(558), imgS: shinySprite(558), dexSync: [galarDex(87)], },
			{ id: 124, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), dexSync: [galarDex(232)], },
			{ id: 125, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), dexSync: [galarDex(233)], },
			{ id: 126, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), dexSyncs: [galarDex(353), ctDex(158)], },
			{ id: 127, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), dexSync: [galarDex(307)], },
			{ id: 128, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), dexSync: [galarDex(308)], },
			{ id: 129, name: "Clobbopus", img: baseSprite(852), imgS: shinySprite(852), dexSync: [galarDex(351)], },
			{ id: 130, name: "Grapploct", img: baseSprite(853), imgS: shinySprite(853), dexSync: [galarDex(352)], },
			{ id: 131, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), dexSync: [galarDex(150)], },
			{ id: 132, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), dexSync: [galarDex(151)], },
			{ id: 133, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 134, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{ id: 135, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [galarDex(124)], },
			{ id: 136, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [galarDex(125)], },
			{ id: 137, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSyncs: [galarDex(228), ctDex(60)], },
			{ id: 138, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSyncs: [galarDex(229), ctDex(61)], },
			{ id: 139, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 140, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 141, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{ id: 142, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 143, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 144, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{
				id: 145, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{ id: 146, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 147, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 148, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), },
			{ id: 149, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), },
			{ id: 150, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), },
			{ id: 151, name: "Woobat", img: baseSprite(527), imgS: shinySprite(527), dexSync: [galarDex(174)], },
			{ id: 152, name: "Swoobat", img: baseSprite(528), imgS: shinySprite(528), dexSync: [galarDex(175)], },
			{ id: 153, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 154, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), dexSync: [galarDex(168)], },
			{ id: 155, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), dexSync: [galarDex(169)], },
			{ id: 156, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), dexSync: [galarDex(170)], },
			{ id: 157, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), },
			{
				id: 158, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), },
				],
			},
			{ id: 159, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [galarDex(244)], },
			{ id: 160, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [galarDex(255)], },
			{ id: 161, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), dexSync: [galarDex(224)], },
			{ id: 162, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), dexSync: [galarDex(225)], },
			{ id: 163, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), },
			{ id: 164, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), },
			{ id: 165, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), dexSync: [galarDex(392)], },
			{ id: 166, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), dexSync: [galarDex(393)], },
			{ id: 167, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), dexSync: [galarDex(394)], },
			{
				id: 168, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), },
				],
			},
			{
				id: 169, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), },
				],
			},
			{ id: 170, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 171, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), },
				],
			},
			{ id: 172, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 173, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [galarDex(300)], },
			{ id: 174, name: "Silicobra", img: baseSprite(843), imgS: shinySprite(843), dexSync: [galarDex(312)], },
			{ id: 175, name: "Sandaconda", img: baseSprite(844), imgS: shinySprite(844), dexSync: [galarDex(313)], },
			{ id: 176, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), },
			{ id: 177, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), },
			{ id: 178, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), },
			{ id: 179, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [galarDex(281)], },
			{ id: 180, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [galarDex(282)], },
			{ id: 181, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [galarDex(283)], },
			{ id: 182, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [galarDex(284)], },
			{
				id: 183, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), dexSync: [galarDex(264)], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), dexSync: [galarDexForm(264, "Male")], },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), dexSync: [galarDexForm(264, "Female")], },
				],
			},
			{
				id: 184, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), dexSync: [galarDex(265)], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), dexSync: [galarDexForm(265, "Male")], },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), dexSync: [galarDexForm(265, "Female")], },
				],
			},
			{
				id: 185, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), dexSync: [galarDex(266)], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), dexSync: [galarDexForm(266, "Male")], },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), dexSync: [galarDexForm(266, "Female")], },
				],
			},
			{ id: 186, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), },
			{ id: 187, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), },
			{ id: 188, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: [galarDex(220)], },
			{ id: 189, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: [galarDex(221)], },
			{ id: 190, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: [galarDex(356)], },
			{ id: 191, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: [galarDex(357)], },
			{
				id: 192, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), dexSync: [galarDex(305)], forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), dexSync: [galarDexForm(305, "Male")], },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), dexSync: [galarDexForm(305, "Female")], },
				],
			},
			{
				id: 193, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), dexSync: [galarDex(306)], forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), dexSync: [galarDexForm(306, "Male")], },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), dexSync: [galarDexForm(306, "Female")], },
				],
			},
			{ id: 194, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), },
			{ id: 195, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), },
			{ id: 196, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), },
			{ id: 197, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), },
			{ id: 198, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 199, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{ id: 200, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 201, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{ id: 202, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), },
			{
				id: 203, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), dexSync: [galarDex(116)], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), dexSync: [galarDexForm(116, "Male")], },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), dexSync: [galarDexForm(116, "Female")], },
				],
			},
			{ id: 204, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), dexSync: [galarDex(117)], },
			{ id: 205, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 206, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), },
				],
			},
			{ id: 207, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: [galarDex(373)], },
			{ id: 208, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 209, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 210, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{
				id: 211, name: "Zarude", img: baseSprite(893), imgS: shinySprite(893), maxStatus: "caught", mythical: true, forms: [
					{ name: "Normal", img: baseSprite(893), imgS: shinySprite(893), maxStatus: "caught", mythical: true, },
					{ name: "Dada", img: baseSprite("893-d"), imgS: shinySprite("893-d"), maxStatus: "caught", mythical: true, },
				],
			}
		],
	},
});