const game = "sword";
const sub = game + "ioa";
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Isle of Armor Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{
				id: 1, natiId: 79, name: "Slowpoke", img: baseSprite("079-g"), imgS: shinySprite("079-g"), forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), tags: ["galarian"], },
				],
			},
			{
				id: 2, natiId: 80, name: "Slowbro", img: baseSprite("080-g"), imgS: shinySprite("080-g"), forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), tags: ["galarian"], },
				],
			},
			{
				id: 3, natiId: 199, name: "Slowking", img: baseSprite("199-g"), imgS: shinySprite("199-g"), forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), tags: ["galarian"], },
				],
			},
			{ id: 4, natiId: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), },
			{ id: 5, natiId: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), },
			{ id: 6, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 7, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 8, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 9, natiId: 819, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), },
			{ id: 10, natiId: 820, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), },
			{ id: 11, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 12, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 13, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 14, natiId: 824, name: "Blipbug", img: baseSprite(824), imgS: shinySprite(824), },
			{ id: 15, natiId: 825, name: "Dottler", img: baseSprite(825), imgS: shinySprite(825), },
			{ id: 16, natiId: 826, name: "Orbeetle", img: baseSprite(826), imgS: shinySprite(826), tags: ["gigantamax"] },
			{ id: 17, natiId: 753, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), },
			{ id: 18, natiId: 754, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), },
			{ id: 19, natiId: 840, name: "Applin", img: baseSprite(840), imgS: shinySprite(840), },
			{ id: 20, natiId: 841, name: "Flapple", img: baseSprite(841), imgS: shinySprite(841), tags: ["gigantamax"], },
			{ id: 21, natiId: 842, name: "Appletun", img: baseSprite(842), imgS: shinySprite(842), tags: ["gigantamax"], },
			{ id: 22, natiId: 661, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), },
			{ id: 23, natiId: 662, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), },
			{ id: 24, natiId: 663, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), },
			{
				id: 25, natiId: 403, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), },
				],
			},
			{
				id: 26, natiId: 404, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), },
				],
			},
			{
				id: 27, natiId: 405, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), },
				],
			},
			{ id: 28, natiId: 707, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), },
			{ id: 29, natiId: 624, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), },
			{ id: 30, natiId: 625, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), },
			{ id: 31, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 32, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 33, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },
				],
			},
			{ id: 34, natiId: 280, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), },
			{ id: 35, natiId: 281, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), },
			{ id: 36, natiId: 282, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), },
			{ id: 37, natiId: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 38, natiId: 98, name: "Krabby", img: baseSprite(98), imgS: shinySprite(98), },
			{ id: 39, natiId: 99, name: "Kingler", img: baseSprite(99), imgS: shinySprite(99), tags: ["gigantamax"], },
			{ id: 40, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 41, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 42, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 43, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 44, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), },
			{
				id: 45, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },
				],
			},
			{ id: 46, natiId: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), },
			{ id: 47, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), },
			{ id: 48, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 49, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 50, natiId: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), },
			{ id: 51, natiId: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), },
			{ id: 52, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{ id: 53, natiId: 626, name: "Bouffalant", img: baseSprite(626), imgS: shinySprite(626), },
			{ id: 54, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), },
			{ id: 55, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), },
			{ id: 56, natiId: 833, name: "Chewtle", img: baseSprite(833), imgS: shinySprite(833), },
			{ id: 57, natiId: 834, name: "Drednaw", img: baseSprite(834), imgS: shinySprite(834), tags: ["gigantamax"], },
			{
				id: 58, natiId: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), },
				],
			},
			{
				id: 59, natiId: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), },
				],
			},
			{ id: 60, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), tags: ["pseudo"], },
			{ id: 61, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), tags: ["pseudo"], },
			{ id: 62, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), tags: ["pseudo"], },
			{ id: 63, natiId: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), },
			{ id: 64, natiId: 616, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), },
			{ id: 65, natiId: 617, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), },
			{ id: 66, natiId: 588, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), },
			{ id: 67, natiId: 589, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), },
			{ id: 68, natiId: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), tags: ["starter"], },
			{ id: 69, natiId: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), tags: ["starter"], },
			{
				id: 70, natiId: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), tags: ["gender", "starter", "gigantamax"], forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },
				],
			},
			{ id: 71, natiId: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), tags: ["starter"], },
			{ id: 72, natiId: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), tags: ["starter"], },
			{ id: 73, natiId: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), tags: ["starter", "gigantamax"], },
			{ id: 74, natiId: 543, name: "Venipede", img: baseSprite(543), imgS: shinySprite(543), },
			{ id: 75, natiId: 544, name: "Whirlipede", img: baseSprite(544), imgS: shinySprite(544), },
			{ id: 76, natiId: 545, name: "Scolipede", img: baseSprite(545), imgS: shinySprite(545), },
			{ id: 77, natiId: 590, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), },
			{ id: 78, natiId: 591, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), },
			{ id: 79, natiId: 764, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), },
			{ id: 80, natiId: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114), },
			{
				id: 81, natiId: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
				],
			},
			{
				id: 82, natiId: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), },
				],
			},
			{
				id: 83, natiId: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), },
				],
			},
			{ id: 84, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{
				id: 85, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender", "other", "gigantamax"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), maxStatus: "caught", tags: ["mythical"], },
					{ name: "World Cap", img: baseSprite("025-w"), imgS: shinySprite("025-w"), maxStatus: "caught", tags: ["mythical"], },
				],
			},
			{
				id: 86, natiId: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), tags: ["alolan"], },
				],
			},
			{ id: 87, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), },
			{ id: 88, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), },
			{ id: 89, natiId: 765, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), },
			{ id: 90, natiId: 766, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), },
			{ id: 91, natiId: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 92, natiId: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 93, natiId: 845, name: "Cramorant", img: baseSprite(845), imgS: shinySprite(845), },
			{
				id: 94, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 95, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{ id: 96, natiId: 846, name: "Arrokuda", img: baseSprite(846), imgS: shinySprite(846), },
			{ id: 97, natiId: 847, name: "Barraskewda", img: baseSprite(847), imgS: shinySprite(847), },
			{ id: 98, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 99, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 100, natiId: 891, name: "Kubfu", img: baseSprite(891), imgS: shinySprite(891), maxStatus: "caught", tags: ["legendary"], },
			{
				id: 101, natiId: 892, name: "Urshifu", img: baseSprite(892), imgS: shinySprite(892), maxStatus: "caught", tags: ["other", "gigantamax", "legendary"], forms: [
					{ name: "Single Strike Style", img: baseSprite(892), imgS: shinySprite(892), maxStatus: "caught", },
					{ name: "Rapid Strike Style", img: baseSprite("892-r"), imgS: shinySprite("892-r"), maxStatus: "caught", },
				],
			},
			{ id: 102, natiId: 587, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587), },
			{ id: 103, natiId: 702, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), },
			{ id: 104, natiId: 877, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), },
			{ id: 105, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 106, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 107, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 108, natiId: 686, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), },
			{ id: 109, natiId: 687, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), },
			{ id: 110, natiId: 746, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), },
			{ id: 111, natiId: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 112, natiId: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), },
			{ id: 113, natiId: 506, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), },
			{ id: 114, natiId: 507, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), },
			{ id: 115, natiId: 508, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), },
			{ id: 116, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{ id: 117, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{
				id: 118, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },
				],
			},
			{
				id: 119, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },
				],
			},
			{ id: 120, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), },
			{
				id: 121, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				],
			},
			{ id: 122, natiId: 557, name: "Dwebble", img: baseSprite(557), imgS: shinySprite(557), },
			{ id: 123, natiId: 558, name: "Crustle", img: baseSprite(558), imgS: shinySprite(558), },
			{ id: 124, natiId: 767, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), },
			{ id: 125, natiId: 768, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), },
			{ id: 126, natiId: 871, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), },
			{ id: 127, natiId: 747, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), },
			{ id: 128, natiId: 748, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), },
			{ id: 129, natiId: 852, name: "Clobbopus", img: baseSprite(852), imgS: shinySprite(852), },
			{ id: 130, natiId: 853, name: "Grapploct", img: baseSprite(853), imgS: shinySprite(853), },
			{ id: 131, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 132, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{ id: 133, natiId: 769, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 134, natiId: 770, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{ id: 135, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 136, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{ id: 137, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 138, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 139, natiId: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 140, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 141, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{ id: 142, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 143, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 144, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{
				id: 145, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{ id: 146, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 147, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 148, natiId: 293, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), },
			{ id: 149, natiId: 294, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), },
			{ id: 150, natiId: 295, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), },
			{ id: 151, natiId: 527, name: "Woobat", img: baseSprite(527), imgS: shinySprite(527), },
			{ id: 152, natiId: 528, name: "Swoobat", img: baseSprite(528), imgS: shinySprite(528), },
			{ id: 153, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 154, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524), },
			{ id: 155, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525), },
			{ id: 156, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526), },
			{ id: 157, natiId: 744, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), },
			{
				id: 158, natiId: 745, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), tags: ["other"], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), },
				],
			},
			{ id: 159, natiId: 757, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), },
			{ id: 160, natiId: 758, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), },
			{ id: 161, natiId: 559, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), },
			{ id: 162, natiId: 560, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), },
			{ id: 163, natiId: 619, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), },
			{ id: 164, natiId: 620, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), },
			{ id: 165, natiId: 782, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), tags: ["pseudo"], },
			{ id: 166, natiId: 783, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), tags: ["pseudo"], },
			{ id: 167, natiId: 784, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), tags: ["pseudo"], },
			{
				id: 168, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), tags: ["alolan"], },
				],
			},
			{
				id: 169, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), tags: ["alolan"], },
				],
			},
			{ id: 170, natiId: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 171, natiId: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), tags: ["alolan"], },
				],
			},
			{ id: 172, natiId: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), },
			{ id: 173, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 174, natiId: 843, name: "Silicobra", img: baseSprite(843), imgS: shinySprite(843), },
			{ id: 175, natiId: 844, name: "Sandaconda", img: baseSprite(844), imgS: shinySprite(844), tags: ["gigantamax"], },
			{ id: 176, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), },
			{ id: 177, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), },
			{ id: 178, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), },
			{ id: 179, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), },
			{ id: 180, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), },
			{ id: 181, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), },
			{ id: 182, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), },
			{
				id: 183, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 184, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{
				id: 185, natiId: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{ id: 186, natiId: 636, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), },
			{ id: 187, natiId: 637, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), },
			{ id: 188, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 189, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 190, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 191, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{
				id: 192, natiId: 592, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), },
				],
			},
			{
				id: 193, natiId: 593, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), },
				],
			},
			{ id: 194, natiId: 690, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), },
			{ id: 195, natiId: 691, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), },
			{ id: 196, natiId: 692, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), },
			{ id: 197, natiId: 693, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), },
			{ id: 198, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 199, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{ id: 200, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 201, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{ id: 202, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), },
			{
				id: 203, natiId: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), },
				],
			},
			{ id: 204, natiId: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), },
			{ id: 205, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 206, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), tags: ["alolan"], },
				],
			},
			{ id: 207, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{ id: 208, natiId: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 209, natiId: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 210, natiId: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{
				id: 211, natiId: 893, name: "Zarude", img: baseSprite(893), imgS: shinySprite(893), maxStatus: "caught", tags: ["other", "mythical"], forms: [
					{ name: "Normal", img: baseSprite(893), imgS: shinySprite(893), maxStatus: "caught", },
					{ name: "Dada", img: baseSprite("893-d"), imgS: shinySprite("893-d"), maxStatus: "caught", },
				],
			}
		],
	},
});