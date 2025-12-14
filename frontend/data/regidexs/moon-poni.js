const gen = 7;
const game = "moon";
const sub = game + "-poni";

const baseSprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteAnimated(gen, game, natiId)
		: _frontSprite(gen, game, natiId);

const shinySprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteShinyAnimated(gen, game, natiId)
		: _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Poni Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 731, name: "Pikipek", img: () => baseSprite(731), imgS: () => shinySprite(731), },
			{ id: 2, natiId: 732, name: "Trumbeak", img: () => baseSprite(732), imgS: () => shinySprite(732), },
			{ id: 3, natiId: 733, name: "Toucannon", img: () => baseSprite(733), imgS: () => shinySprite(733), },
			{ id: 4, natiId: 734, name: "Yungoos", img: () => baseSprite(734), imgS: () => shinySprite(734), },
			{ id: 5, natiId: 735, name: "Gumshoos", img: () => baseSprite(735), imgS: () => shinySprite(735), },
			{
				id: 6, natiId: 19, name: "Rattata", img: () => baseSprite("019-a"), imgS: () => shinySprite("019-a"), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: () => baseSprite(19), imgS: () => shinySprite(19), },
					{ name: "Kantonian Female", img: () => baseSprite("019-f"), imgS: () => shinySprite("019-f"), },
					{ name: "Alolan", img: () => baseSprite("019-a"), imgS: () => shinySprite("019-a"), tags: ["alolan"], },
				],
			},
			{
				id: 7, natiId: 20, name: "Raticate", img: () => baseSprite("20-a"), imgS: () => shinySprite("20-a"), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: () => baseSprite(20), imgS: () => shinySprite(20), },
					{ name: "Kantonian Female", img: () => baseSprite("020-f"), imgS: () => shinySprite("020-f"), },
					{ name: "Alolan", img: () => baseSprite("020-a"), imgS: () => shinySprite("020-a"), tags: ["alolan"], },
				],
			},
			{ id: 8, natiId: 440, name: "Happiny", img: () => baseSprite(440), imgS: () => shinySprite(440), },
			{ id: 9, natiId: 113, name: "Chansey", img: () => baseSprite(113), imgS: () => shinySprite(113), },
			{ id: 10, natiId: 242, name: "Blissey", img: () => baseSprite(242), imgS: () => shinySprite(242), },
			{ id: 11, natiId: 278, name: "Wingull", img: () => baseSprite(278), imgS: () => shinySprite(278), },
			{ id: 12, natiId: 279, name: "Pelipper", img: () => baseSprite(279), imgS: () => shinySprite(279), },
			{ id: 13, natiId: 96, name: "Drowzee", img: () => baseSprite(96), imgS: () => shinySprite(96), },
			{
				id: 14, natiId: 97, name: "Hypno", img: () => baseSprite(97), imgS: () => shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(97), imgS: () => shinySprite(97), },
					{ name: "Female", img: () => baseSprite("097-f"), imgS: () => shinySprite("097-f"), },
				],
			},
			{ id: 15, natiId: 296, name: "Makuhita", img: () => baseSprite(296), imgS: () => shinySprite(296), },
			{ id: 16, natiId: 297, name: "Hariyama", img: () => baseSprite(297), imgS: () => shinySprite(297), },
			{ id: 17, natiId: 739, name: "Crabrawler", img: () => baseSprite(739), imgS: () => shinySprite(739), },
			{ id: 18, natiId: 740, name: "Crabominable", img: () => baseSprite(740), imgS: () => shinySprite(740), },
			{
				id: 19, natiId: 41, name: "Zubat", img: () => baseSprite(41), imgS: () => shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(41), imgS: () => shinySprite(41), },
					{ name: "Female", img: () => baseSprite("041-f"), imgS: () => shinySprite("041-f"), },
				],
			},
			{
				id: 20, natiId: 42, name: "Golbat", img: () => baseSprite(42), imgS: () => shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(42), imgS: () => shinySprite(42), },
					{ name: "Female", img: () => baseSprite("042-f"), imgS: () => shinySprite("042-f"), },
				],
			},
			{ id: 21, natiId: 169, name: "Crobat", img: () => baseSprite(169), imgS: () => shinySprite(169), },
			{
				id: 22, natiId: 50, name: "Diglett", img: () => baseSprite(50), imgS: () => shinySprite(50), forms: [
					{ name: "Kantonian", img: () => baseSprite(50), imgS: () => shinySprite(50), },
					{ name: "Alolan", img: () => baseSprite("050-a"), imgS: () => shinySprite("050-a"), tags: ["alolan"], },
				],
			},
			{
				id: 23, natiId: 51, name: "Dugtrio", img: () => baseSprite(51), imgS: () => shinySprite(51), forms: [
					{ name: "Kantonian", img: () => baseSprite(51), imgS: () => shinySprite(51), },
					{ name: "Alolan", img: () => baseSprite("051-a"), imgS: () => shinySprite("051-a"), tags: ["alolan"], },
				],
			},
			{ id: 24, natiId: 21, name: "Spearow", img: () => baseSprite(21), imgS: () => shinySprite(21), },
			{ id: 25, natiId: 22, name: "Fearow", img: () => baseSprite(22), imgS: () => shinySprite(22), },
			{ id: 26, natiId: 627, name: "Rufflet", img: () => baseSprite(627), imgS: () => shinySprite(627), },
			{ id: 27, natiId: 628, name: "Braviary", img: () => baseSprite(628), imgS: () => shinySprite(628), },
			{ id: 28, natiId: 629, name: "Vullaby", img: () => baseSprite(629), imgS: () => shinySprite(629), },
			{ id: 29, natiId: 630, name: "Mandibuzz", img: () => baseSprite(630), imgS: () => shinySprite(630), },
			{ id: 30, natiId: 56, name: "Mankey", img: () => baseSprite(56), imgS: () => shinySprite(56), },
			{ id: 31, natiId: 57, name: "Primeape", img: () => baseSprite(57), imgS: () => shinySprite(57), },
			{
				id: 32, natiId: 741, name: "Oricorio", img: () => baseSprite("741-s"), imgS: () => shinySprite("741-s"), tags: ["other"], forms: [
					{ name: "Baile Style", img: () => baseSprite("741-b"), imgS: () => shinySprite("741-b"), },
					{ name: "Pa'u Style", img: () => baseSprite("741-p"), imgS: () => shinySprite("741-p"), },
					{ name: "Pom-Pom Style", img: () => baseSprite("741-p"), imgS: () => shinySprite("741-p"), },
					{ name: "Sensu Style", img: () => baseSprite("741-s"), imgS: () => shinySprite("741-s"), },
				],
			},
			{ id: 33, natiId: 742, name: "Cutiefly", img: () => baseSprite(742), imgS: () => shinySprite(742), },
			{ id: 34, natiId: 743, name: "Ribombee", img: () => baseSprite(743), imgS: () => shinySprite(743), },
			{ id: 35, natiId: 548, name: "Petilil", img: () => baseSprite(548), imgS: () => shinySprite(548), },
			{ id: 36, natiId: 549, name: "Lilligant", img: () => baseSprite(549), imgS: () => shinySprite(549), },
			{ id: 37, natiId: 546, name: "Cottonee", img: () => baseSprite(546), imgS: () => shinySprite(546), },
			{ id: 38, natiId: 547, name: "Whimsicott", img: () => baseSprite(547), imgS: () => shinySprite(547), },
			{ id: 39, natiId: 54, name: "Psyduck", img: () => baseSprite(54), imgS: () => shinySprite(54), },
			{ id: 40, natiId: 55, name: "Golduck", img: () => baseSprite(55), imgS: () => shinySprite(55), },
			{
				id: 41, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
					{ name: "Female", img: () => baseSprite("129-f"), imgS: () => shinySprite("129-f"), },
				],
			},
			{
				id: 42, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
					{ name: "Female", img: () => baseSprite("130-f"), imgS: () => shinySprite("130-f"), },
				],
			},
			{ id: 43, natiId: 339, name: "Barboach", img: () => baseSprite(339), imgS: () => shinySprite(339), },
			{ id: 44, natiId: 340, name: "Whiscash", img: () => baseSprite(340), imgS: () => shinySprite(340), },
			{ id: 45, natiId: 66, name: "Machop", img: () => baseSprite(66), imgS: () => shinySprite(66), },
			{ id: 46, natiId: 67, name: "Machoke", img: () => baseSprite(67), imgS: () => shinySprite(67), },
			{ id: 47, natiId: 68, name: "Machamp", img: () => baseSprite(68), imgS: () => shinySprite(68), },
			{ id: 48, natiId: 524, name: "Roggenrola", img: () => baseSprite(524), imgS: () => shinySprite(524), },
			{ id: 49, natiId: 525, name: "Boldore", img: () => baseSprite(525), imgS: () => shinySprite(525), },
			{ id: 50, natiId: 526, name: "Gigalith", img: () => baseSprite(526), imgS: () => shinySprite(526), },
			{ id: 51, natiId: 703, name: "Carbink", img: () => baseSprite(703), imgS: () => shinySprite(703), },
			{ id: 52, natiId: 302, name: "Sableye", img: () => baseSprite(302), imgS: () => shinySprite(302), },
			{ id: 53, natiId: 744, name: "Rockruff", img: () => baseSprite(744), imgS: () => shinySprite(744), },
			{
				id: 54, natiId: 745, name: "Lycanroc", img: () => baseSprite(745), imgS: () => shinySprite(745), tags: ["other"], forms: [
					{ name: "Midday", img: () => baseSprite(745), imgS: () => shinySprite(745), },
					{ name: "Midnight", img: () => baseSprite("745-m"), imgS: () => shinySprite("745-m"), },
					{ name: "Dusk", img: () => baseSprite("745-d"), imgS: () => shinySprite("745-d"), },
				],
			},
			{ id: 55, natiId: 72, name: "Tentacool", img: () => baseSprite(72), imgS: () => shinySprite(72), },
			{ id: 56, natiId: 73, name: "Tentacruel", img: () => baseSprite(73), imgS: () => shinySprite(73), },
			{
				id: 57, natiId: 456, name: "Finneon", img: () => baseSprite(456), imgS: () => shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(456), imgS: () => shinySprite(456), },
					{ name: "Female", img: () => baseSprite("456-f"), imgS: () => shinySprite("456-f"), },
				],
			},
			{
				id: 58, natiId: 457, name: "Lumineon", img: () => baseSprite(457), imgS: () => shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(457), imgS: () => shinySprite(457), },
					{ name: "Female", img: () => baseSprite("457-f"), imgS: () => shinySprite("457-f"), },
				],
			},
			{ id: 59, natiId: 749, name: "Mudbray", img: () => baseSprite(749), imgS: () => shinySprite(749), },
			{ id: 60, natiId: 750, name: "Mudsdale", img: () => baseSprite(750), imgS: () => shinySprite(750), },
			{ id: 61, natiId: 128, name: "Tauros", img: () => baseSprite(128), imgS: () => shinySprite(128), },
			{ id: 62, natiId: 241, name: "Miltank", img: () => baseSprite(241), imgS: () => shinySprite(241), },
			{ id: 63, natiId: 759, name: "Stufful", img: () => baseSprite(759), imgS: () => shinySprite(759), },
			{ id: 64, natiId: 760, name: "Bewear", img: () => baseSprite(760), imgS: () => shinySprite(760), },
			{ id: 65, natiId: 127, name: "Pinsir", img: () => baseSprite(127), imgS: () => shinySprite(127), tags: ["mega"], },
			{ id: 66, natiId: 704, name: "Goomy", img: () => baseSprite(704), imgS: () => shinySprite(704), tags: ["pseudo"], },
			{ id: 67, natiId: 705, name: "Sliggoo", img: () => baseSprite(705), imgS: () => shinySprite(705), tags: ["pseudo"], },
			{ id: 68, natiId: 706, name: "Goodra", img: () => baseSprite(706), imgS: () => shinySprite(706), tags: ["pseudo"], },
			{
				id: 69, natiId: 351, name: "Castform", img: () => baseSprite(351), imgS: () => shinySprite(351), tags: ["other"], forms: [
					{ name: "Normal", img: () => baseSprite(351), imgS: () => shinySprite(351), },
					{ name: "Rainy", img: () => baseSprite("351-r"), imgS: () => shinySprite("351-r"), },
					{ name: "Snowy", img: () => baseSprite("351-i"), imgS: () => shinySprite("351-i"), },
					{ name: "Sunny", img: () => baseSprite("351-s"), imgS: () => shinySprite("351-s"), },
				],
			},
			{ id: 70, natiId: 767, name: "Wimpod", img: () => baseSprite(767), imgS: () => shinySprite(767), },
			{ id: 71, natiId: 768, name: "Golisopod", img: () => baseSprite(768), imgS: () => shinySprite(768), },
			{ id: 72, natiId: 227, name: "Skarmory", img: () => baseSprite(227), imgS: () => shinySprite(227), },
			{ id: 73, natiId: 209, name: "Snubbull", img: () => baseSprite(209), imgS: () => shinySprite(209), },
			{ id: 74, natiId: 210, name: "Granbull", img: () => baseSprite(210), imgS: () => shinySprite(210), },
			{
				id: 75, natiId: 422, name: "Shellos", img: () => baseSprite(422), imgS: () => shinySprite(422), tags: ["other"], forms: [
					{ name: "West Sea", img: () => baseSprite(422), imgS: () => shinySprite(422), },
					{ name: "East Sea", img: () => baseSprite("422-e"), imgS: () => shinySprite("422-e"), },
				],
			},
			{
				id: 76, natiId: 423, name: "Gastrodon", img: () => baseSprite(423), imgS: () => shinySprite(423), tags: ["other"], forms: [
					{ name: "West Sea", img: () => baseSprite(423), imgS: () => shinySprite(423), },
					{ name: "East Sea", img: () => baseSprite("423-e"), imgS: () => shinySprite("423-e"), },
				],
			},
			{
				id: 77, natiId: 369, name: "Relicanth", img: () => baseSprite(369), imgS: () => shinySprite(369), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(369), imgS: () => shinySprite(369), },
					{ name: "Female", img: () => baseSprite("369-f"), imgS: () => shinySprite("369-f"), },
				],
			},
			{ id: 78, natiId: 781, name: "Dhelmise", img: () => baseSprite(781), imgS: () => shinySprite(781), },
			{ id: 79, natiId: 318, name: "Carvanha", img: () => baseSprite(318), imgS: () => shinySprite(318), },
			{ id: 80, natiId: 319, name: "Sharpedo", img: () => baseSprite(319), imgS: () => shinySprite(319), tags: ["mega"], },
			{ id: 81, natiId: 320, name: "Wailmer", img: () => baseSprite(320), imgS: () => shinySprite(320), },
			{ id: 82, natiId: 321, name: "Wailord", img: () => baseSprite(321), imgS: () => shinySprite(321), },
			{ id: 83, natiId: 131, name: "Lapras", img: () => baseSprite(131), imgS: () => shinySprite(131), },
			{ id: 84, natiId: 102, name: "Exeggcute", img: () => baseSprite(102), imgS: () => shinySprite(102), },
			{
				id: 85, natiId: 103, name: "Exeggutor", img: () => baseSprite("103-a"), imgS: () => shinySprite("103-a"), forms: [
					{ name: "Kantonian", img: () => baseSprite(103), imgS: () => shinySprite(103), },
					{ name: "Alolan", img: () => baseSprite("103-a"), imgS: () => shinySprite("103-a"), tags: ["alolan"], },
				],
			},
			{ id: 86, natiId: 782, name: "Jangmo-o", img: () => baseSprite(782), imgS: () => shinySprite(782), tags: ["pseudo"], },
			{ id: 87, natiId: 783, name: "Hakamo-o", img: () => baseSprite(783), imgS: () => shinySprite(783), tags: ["pseudo"], },
			{ id: 88, natiId: 784, name: "Kommo-o", img: () => baseSprite(784), imgS: () => shinySprite(784), tags: ["pseudo"], },
			{ id: 89, natiId: 587, name: "Emolga", img: () => baseSprite(587), imgS: () => shinySprite(587), },
			{
				id: 90, natiId: 123, name: "Scyther", img: () => baseSprite(123), imgS: () => shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(123), imgS: () => shinySprite(123), },
					{ name: "Female", img: () => baseSprite("123-f"), imgS: () => shinySprite("123-f"), },
				],
			},
			{
				id: 91, natiId: 212, name: "Scizor", img: () => baseSprite(212), imgS: () => shinySprite(212), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: () => baseSprite(212), imgS: () => shinySprite(212), },
					{ name: "Female", img: () => baseSprite("212-f"), imgS: () => shinySprite("212-f"), },
				],
			},
			{
				id: 92, natiId: 198, name: "Murkrow", img: () => baseSprite(198), imgS: () => shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(198), imgS: () => shinySprite(198), },
					{ name: "Female", img: () => baseSprite("198-f"), imgS: () => shinySprite("198-f"), },
				],
			},
			{ id: 93, natiId: 430, name: "Honchkrow", img: () => baseSprite(430), imgS: () => shinySprite(430), },
			{ id: 94, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447), },
			{ id: 95, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448), tags: ["mega"], },
			{ id: 96, natiId: 147, name: "Dratini", img: () => baseSprite(147), imgS: () => shinySprite(147), tags: ["pseudo"], },
			{ id: 97, natiId: 148, name: "Dragonair", img: () => baseSprite(148), imgS: () => shinySprite(148), tags: ["pseudo"], },
			{ id: 98, natiId: 149, name: "Dragonite", img: () => baseSprite(149), imgS: () => shinySprite(149), tags: ["pseudo"], },
			{ id: 99, natiId: 142, name: "Aerodactyl", img: () => baseSprite(142), imgS: () => shinySprite(142), tags: ["fossil", "mega"], },
			{ id: 100, natiId: 788, name: "Tapu Fini", img: () => baseSprite(788), imgS: () => shinySprite(788), tags: ["zcrystal", "legendary"], }
		],
	},
});