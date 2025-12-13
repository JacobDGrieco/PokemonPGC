const game = "moon";
const sub = game + "-akala";
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Akala Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 731, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), },
			{ id: 2, natiId: 732, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), },
			{ id: 3, natiId: 733, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), },
			{ id: 4, natiId: 734, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), },
			{ id: 5, natiId: 735, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), },
			{
				id: 6, natiId: 19, name: "Rattata", img: baseSprite("019-a"), imgS: shinySprite("019-a"), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Kantonian Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
					{ name: "Alolan", img: baseSprite("019-a"), imgS: shinySprite("019-a"), tags: ["alolan"], },
				],
			},
			{
				id: 7, natiId: 20, name: "Raticate", img: baseSprite("020-a"), imgS: shinySprite("020-a"), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Kantonian Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
					{ name: "Alolan", img: baseSprite("020-a"), imgS: shinySprite("020-a"), tags: ["alolan"], },
				],
			},
			{ id: 8, natiId: 10, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), },
			{ id: 9, natiId: 11, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), },
			{
				id: 10, natiId: 12, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), },
				],
			},
			{ id: 11, natiId: 736, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), },
			{ id: 12, natiId: 737, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), },
			{ id: 13, natiId: 738, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), },
			{ id: 14, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), },
			{
				id: 15, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), },
				],
			},
			{ id: 16, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 17, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 18, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 19, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 20, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 21, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 22, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{ id: 23, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 24, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 25, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), tags: ["mega"], },
			{
				id: 26, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 27, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 28, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{
				id: 29, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), tags: ["alolan"], },
				],
			},
			{
				id: 30, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), tags: ["alolan"], },
				],
			},
			{
				id: 31, natiId: 741, name: "Oricorio", img: baseSprite("741-pa"), imgS: shinySprite("741-pa"), tags: ["other"], forms: [
					{ name: "Baile Style", img: baseSprite("741-b"), imgS: shinySprite("741-b"), },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), },
				],
			},
			{ id: 32, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 33, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{
				id: 34, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 35, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{ id: 36, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 37, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 38, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 39, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{
				id: 40, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), },
				],
			},
			{
				id: 41, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), },
				],
			},
			{ id: 42, natiId: 746, name: "Wishiwashi", img: baseSprite(746), imgS: shinySprite(746), },
			{ id: 43, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{ id: 44, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 45, natiId: 747, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), },
			{ id: 46, natiId: 748, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), },
			{ id: 47, natiId: 506, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506), },
			{ id: 48, natiId: 507, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507), },
			{ id: 49, natiId: 508, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508), },
			{ id: 50, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), tags: ["zcrystal"], },
			{ id: 51, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 52, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 53, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 54, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 55, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{ id: 56, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 57, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 58, natiId: 700, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), },
			{ id: 59, natiId: 749, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), },
			{ id: 60, natiId: 750, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), },
			{ id: 61, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 62, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 63, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 64, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128), },
			{ id: 65, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241), },
			{ id: 66, natiId: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 67, natiId: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{ id: 68, natiId: 751, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), },
			{ id: 69, natiId: 752, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), },
			{ id: 70, natiId: 753, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), },
			{ id: 71, natiId: 754, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), },
			{ id: 72, natiId: 755, name: "Morelull", img: baseSprite(755), imgS: shinySprite(755), },
			{ id: 73, natiId: 756, name: "Shiinotic", img: baseSprite(756), imgS: shinySprite(756), },
			{ id: 74, natiId: 46, name: "Paras", img: baseSprite(46), imgS: shinySprite(46), },
			{ id: 75, natiId: 47, name: "Parasect", img: baseSprite(47), imgS: shinySprite(47), },
			{ id: 76, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 77, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 78, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{
				id: 79, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				],
			},
			{
				id: 80, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 81, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{ id: 82, natiId: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 83, natiId: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), },
				],
			},
			{ id: 84, natiId: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), },
			{ id: 85, natiId: 661, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), },
			{ id: 86, natiId: 662, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), },
			{ id: 87, natiId: 663, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), },
			{ id: 88, natiId: 757, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), },
			{ id: 89, natiId: 758, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), },
			{ id: 90, natiId: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 91, natiId: 105, name: "Marowak", img: baseSprite("105-a"), imgS: shinySprite("105-a"), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), tags: ["national"], },
				],
			},
			{ id: 92, natiId: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), tags: ["mega"], },
			{ id: 93, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 94, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 95, natiId: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 96, natiId: 759, name: "Stufful", img: baseSprite(759), imgS: shinySprite(759), },
			{ id: 97, natiId: 760, name: "Bewear", img: baseSprite(760), imgS: shinySprite(760), },
			{ id: 98, natiId: 761, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), },
			{ id: 99, natiId: 762, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), },
			{ id: 100, natiId: 763, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), },
			{ id: 101, natiId: 764, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), },
			{ id: 102, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), tags: ["mega"], },
			{ id: 103, natiId: 765, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), },
			{ id: 104, natiId: 766, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), },
			{ id: 105, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), tags: ["psuedo"], },
			{ id: 106, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), tags: ["psuedo"], },
			{ id: 107, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), tags: ["psuedo"], },
			{
				id: 108, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 109, natiId: 767, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), },
			{ id: 110, natiId: 768, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), },
			{ id: 111, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 112, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 113, natiId: 769, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 114, natiId: 770, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{ id: 115, natiId: 408, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), tags: ["fossil"], },
			{ id: 116, natiId: 409, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), tags: ["fossil"], },
			{ id: 117, natiId: 410, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), tags: ["fossil"], },
			{ id: 118, natiId: 411, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), tags: ["fossil"], },
			{ id: 119, natiId: 566, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), tags: ["fossil"], },
			{ id: 120, natiId: 567, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), tags: ["fossil"], },
			{ id: 121, natiId: 564, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), tags: ["fossil"], },
			{ id: 122, natiId: 565, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), tags: ["fossil"], },
			{ id: 123, natiId: 708, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), },
			{ id: 124, natiId: 709, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), },
			{ id: 125, natiId: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 126, natiId: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{ id: 127, natiId: 771, name: "Pyukumuku", img: baseSprite(771), imgS: shinySprite(771), },
			{ id: 128, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 129, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 130, natiId: 786, name: "Tapu Lele", img: baseSprite(786), imgS: shinySprite(786), tags: ["legendary", "zcrystal"], },
		],
	},
});