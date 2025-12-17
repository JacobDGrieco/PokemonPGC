const gen = 9;
const game = "scarlet";
const sub = game + "tm";

const baseSprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteAnimated(gen, game, natiId)
		: _frontSprite(gen, game, natiId);

const shinySprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteShinyAnimated(gen, game, natiId)
		: _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Kitakami Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 167, name: "Spinarak", img: () => baseSprite(167), imgS: () => shinySprite(167), },
			{ id: 2, natiId: 168, name: "Ariados", img: () => baseSprite(168), imgS: () => shinySprite(168), },
			{ id: 3, natiId: 193, name: "Yanma", img: () => baseSprite(193), imgS: () => shinySprite(193), },
			{ id: 4, natiId: 469, name: "Yanmega", img: () => baseSprite(469), imgS: () => shinySprite(469), },
			{
				id: 5, natiId: 194, name: "Wooper", img: () => baseSprite("0194-p"), imgS: () => shinySprite("0194-p"), tags: ["gender"], forms: [
					{ name: "Johtonian Male", img: () => baseSprite(194), imgS: () => shinySprite(194), },
					{ name: "Johtonian Female", img: () => baseSprite("0194-f"), imgS: () => shinySprite("0194-f"), },
					{ name: "Paldean", img: () => baseSprite("0194-p"), imgS: () => shinySprite("0194-p"), }
				],
			},
			{
				id: 6, natiId: 195, name: "Quagsire", img: () => baseSprite(195), imgS: () => shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(195), imgS: () => shinySprite(195) },
					{ name: "Female", img: () => baseSprite("0195-f"), imgS: () => shinySprite("0195-f") },
				],
			},
			{ id: 7, natiId: 261, name: "Poochyena", img: () => baseSprite(261), imgS: () => shinySprite(261), },
			{ id: 8, natiId: 262, name: "Mightyena", img: () => baseSprite(262), imgS: () => shinySprite(262), },
			{ id: 9, natiId: 313, name: "Volbeat", img: () => baseSprite(313), imgS: () => shinySprite(313), },
			{ id: 10, natiId: 314, name: "Illumise", img: () => baseSprite(314), imgS: () => shinySprite(314), },
			{ id: 11, natiId: 341, name: "Corphish", img: () => baseSprite(341), imgS: () => shinySprite(341), },
			{ id: 12, natiId: 342, name: "Crawdaunt", img: () => baseSprite(342), imgS: () => shinySprite(342), },
			{ id: 13, natiId: 540, name: "Sewaddle", img: () => baseSprite(540), imgS: () => shinySprite(540), },
			{ id: 14, natiId: 541, name: "Swadloon", img: () => baseSprite(541), imgS: () => shinySprite(541), },
			{ id: 15, natiId: 542, name: "Leavanny", img: () => baseSprite(542), imgS: () => shinySprite(542), },
			{ id: 16, natiId: 742, name: "Cutiefly", img: () => baseSprite(742), imgS: () => shinySprite(742), },
			{ id: 17, natiId: 743, name: "Ribombee", img: () => baseSprite(743), imgS: () => shinySprite(743), },
			{ id: 18, natiId: 23, name: "Ekans", img: () => baseSprite(23), imgS: () => shinySprite(23), },
			{ id: 19, natiId: 24, name: "Arbok", img: () => baseSprite(24), imgS: () => shinySprite(24), },
			{ id: 20, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172), },
			{
				id: 21, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(25), imgS: () => shinySprite(25), },
					{ name: "Female", img: () => baseSprite("0025-f"), imgS: () => shinySprite("0025-f"), },
					{ name: "Alola Cap", img: () => baseSprite("0025-a"), imgS: () => shinySprite("0025-a"), tags: ["mythical"], },
					{ name: "Hoenn Cap", img: () => baseSprite("0025-h"), imgS: () => shinySprite("0025-h"), tags: ["mythical"], },
					{ name: "Kalos Cap", img: () => baseSprite("0025-k"), imgS: () => shinySprite("0025-k"), tags: ["mythical"], },
					{ name: "Original Cap", img: () => baseSprite("0025-o"), imgS: () => shinySprite("0025-o"), tags: ["mythical"], },
					{ name: "Partner Cap", img: () => baseSprite("0025-p"), imgS: () => shinySprite("0025-p"), tags: ["mythical"], },
					{ name: "Sinnoh Cap", img: () => baseSprite("0025-s"), imgS: () => shinySprite("0025-s"), tags: ["mythical"], },
					{ name: "Unova Cap", img: () => baseSprite("0025-u"), imgS: () => shinySprite("0025-u"), tags: ["mythical"], },
					{ name: "World Cap", img: () => baseSprite("0025-w"), imgS: () => shinySprite("0025-w"), tags: ["mythical"], }
				],
			},
			{
				id: 22, natiId: 26, name: "Raichu", img: () => baseSprite(26), imgS: () => shinySprite(26), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: () => baseSprite(26), imgS: () => shinySprite(26), },
					{ name: "Kantonian Female", img: () => baseSprite("0026-f"), imgS: () => shinySprite("0026-f"), },
					{ name: "Alolan", img: () => baseSprite("0026-a"), imgS: () => shinySprite("0026-a"), tags: ["alolan"], }
				],
			},
			{ id: 23, natiId: 69, name: "Bellsprout", img: () => baseSprite(69), imgS: () => shinySprite(69), },
			{ id: 24, natiId: 70, name: "Weepinbell", img: () => baseSprite(70), imgS: () => shinySprite(70), },
			{ id: 25, natiId: 71, name: "Victreebel", img: () => baseSprite(71), imgS: () => shinySprite(71), },
			{ id: 26, natiId: 161, name: "Sentret", img: () => baseSprite(161), imgS: () => shinySprite(161), },
			{ id: 27, natiId: 162, name: "Furret", img: () => baseSprite(162), imgS: () => shinySprite(162), },
			{
				id: 28, natiId: 396, name: "Starly", img: () => baseSprite(396), imgS: () => shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(396), imgS: () => shinySprite(396), },
					{ name: "Female", img: () => baseSprite("0396-f"), imgS: () => shinySprite("0396-f"), }
				],
			},
			{
				id: 29, natiId: 397, name: "Staravia", img: () => baseSprite(397), imgS: () => shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(397), imgS: () => shinySprite(397), },
					{ name: "Female", img: () => baseSprite("0397-f"), imgS: () => shinySprite("0397-f"), }
				],
			},
			{
				id: 30, natiId: 398, name: "Staraptor", img: () => baseSprite(398), imgS: () => shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(398), imgS: () => shinySprite(398), },
					{ name: "Female", img: () => baseSprite("0398-f"), imgS: () => shinySprite("0398-f"), }
				],
			},
			{ id: 31, natiId: 753, name: "Fomantis", img: () => baseSprite(753), imgS: () => shinySprite(753), },
			{ id: 32, natiId: 754, name: "Lurantis", img: () => baseSprite(754), imgS: () => shinySprite(754), },
			{ id: 33, natiId: 840, name: "Applin", img: () => baseSprite(840), imgS: () => shinySprite(840), },
			{ id: 34, natiId: 841, name: "Flapple", img: () => baseSprite(841), imgS: () => shinySprite(841), },
			{ id: 35, natiId: 842, name: "Appletun", img: () => baseSprite(842), imgS: () => shinySprite(842), },
			{ id: 36, natiId: 1011, name: "Dipplin", img: () => baseSprite(1011), imgS: () => shinySprite(1011), },
			{
				id: 37, natiId: 37, name: "Vulpix", img: () => baseSprite(37), imgS: () => shinySprite(37), forms: [
					{ name: "Kantonian", img: () => baseSprite(37), imgS: () => shinySprite(37), },
					{ name: "Alolan", img: () => baseSprite("0037-a"), imgS: () => shinySprite("0037-a"), tags: ["alolan"], }
				],
			},
			{
				id: 38, natiId: 38, name: "Ninetales", img: () => baseSprite(38), imgS: () => shinySprite(38), forms: [
					{ name: "Kantonian", img: () => baseSprite(38), imgS: () => shinySprite(38), },
					{ name: "Alolan", img: () => baseSprite("0038-a"), imgS: () => shinySprite("0038-a"), tags: ["alolan"], }
				],
			},
			{ id: 39, natiId: 60, name: "Poliwag", img: () => baseSprite(60), imgS: () => shinySprite(60), },
			{ id: 40, natiId: 61, name: "Poliwhirl", img: () => baseSprite(61), imgS: () => shinySprite(61), },
			{ id: 41, natiId: 62, name: "Poliwrath", img: () => baseSprite(62), imgS: () => shinySprite(62), },
			{
				id: 42, natiId: 186, name: "Politoed", img: () => baseSprite(186), imgS: () => shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(186), imgS: () => shinySprite(186) },
					{ name: "Female", img: () => baseSprite("0186-f"), imgS: () => shinySprite("0186-f") },
				],
			},
			{
				id: 43, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
					{ name: "Female", img: () => baseSprite("0129-f"), imgS: () => shinySprite("0129-f"), }
				],
			},
			{
				id: 44, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
					{ name: "Female", img: () => baseSprite("0130-f"), imgS: () => shinySprite("0130-f"), },],
			},
			{ id: 45, natiId: 163, name: "Hoothoot", img: () => baseSprite(163), imgS: () => shinySprite(163), },
			{ id: 46, natiId: 164, name: "Noctowl", img: () => baseSprite(164), imgS: () => shinySprite(164), },
			{
				id: 47, natiId: 190, name: "Aipom", img: () => baseSprite(190), imgS: () => shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(190), imgS: () => shinySprite(190) },
					{ name: "Female", img: () => baseSprite("0190-f"), imgS: () => shinySprite("0190-f") },
				],
			},
			{
				id: 48, natiId: 424, name: "Ambipom", img: () => baseSprite(424), imgS: () => shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(424), imgS: () => shinySprite(424) },
					{ name: "Female", img: () => baseSprite("0424-f"), imgS: () => shinySprite("0424-f") },
				],
			},
			{
				id: 49, natiId: 214, name: "Heracross", img: () => baseSprite(214), imgS: () => shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(214), imgS: () => shinySprite(214), },
					{ name: "Female", img: () => baseSprite("0214-f"), imgS: () => shinySprite("0214-f"), },],
			},
			{ id: 50, natiId: 220, name: "Swinub", img: () => baseSprite(220), imgS: () => shinySprite(220), },
			{
				id: 51, natiId: 221, name: "Piloswine", img: () => baseSprite(221), imgS: () => shinySprite(221), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(221), imgS: () => shinySprite(221) },
					{ name: "Female", img: () => baseSprite("0221-f"), imgS: () => shinySprite("0221-f") },
				],
			},
			{
				id: 52, natiId: 473, name: "Mamoswine", img: () => baseSprite(473), imgS: () => shinySprite(473), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(473), imgS: () => shinySprite(473) },
					{ name: "Female", img: () => baseSprite("0473-f"), imgS: () => shinySprite("0473-f") },
				],
			},
			{ id: 53, natiId: 234, name: "Stantler", img: () => baseSprite(234), imgS: () => shinySprite(234), },
			{ id: 54, natiId: 273, name: "Seedot", img: () => baseSprite(273), imgS: () => shinySprite(273), },
			{
				id: 55, natiId: 274, name: "Nuzleaf", img: () => baseSprite(274), imgS: () => shinySprite(274), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(274), imgS: () => shinySprite(274) },
					{ name: "Female", img: () => baseSprite("0274-f"), imgS: () => shinySprite("0274-f") },
				],
			},
			{
				id: 56, natiId: 275, name: "Shiftry", img: () => baseSprite(275), imgS: () => shinySprite(275), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(275), imgS: () => shinySprite(275) },
					{ name: "Female", img: () => baseSprite("0275-f"), imgS: () => shinySprite("0275-f") },
				],
			},
			{ id: 57, natiId: 280, name: "Ralts", img: () => baseSprite(280), imgS: () => shinySprite(280), },
			{ id: 58, natiId: 281, name: "Kirlia", img: () => baseSprite(281), imgS: () => shinySprite(281), },
			{ id: 59, natiId: 282, name: "Gardevoir", img: () => baseSprite(282), imgS: () => shinySprite(282), },
			{ id: 60, natiId: 475, name: "Gallade", img: () => baseSprite(475), imgS: () => shinySprite(475), },
			{
				id: 61, natiId: 401, name: "Kricketot", img: () => baseSprite(401), imgS: () => shinySprite(401), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(401), imgS: () => shinySprite(401), },
					{ name: "Female", img: () => baseSprite("0401-f"), imgS: () => shinySprite("0401-f"), }
				],
			},
			{
				id: 62, natiId: 402, name: "Kricketune", img: () => baseSprite(402), imgS: () => shinySprite(402), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(402), imgS: () => shinySprite(402), },
					{ name: "Female", img: () => baseSprite("0402-f"), imgS: () => shinySprite("0402-f"), }
				],
			},
			{
				id: 63, natiId: 417, name: "Pachirisu", img: () => baseSprite(417), imgS: () => shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(417), imgS: () => shinySprite(417), },
					{ name: "Female", img: () => baseSprite("0417-f"), imgS: () => shinySprite("0417-f"), }
				],
			},
			{ id: 64, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447), },
			{ id: 65, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448), },
			{ id: 66, natiId: 548, name: "Petilil", img: () => baseSprite(548), imgS: () => shinySprite(548), },
			{
				id: 67, natiId: 549, name: "Lilligant", img: () => baseSprite(549), imgS: () => shinySprite(549), forms: [
					{ name: "Unovian", img: () => baseSprite(549), imgS: () => shinySprite(549), },
					{ name: "Hisuian", img: () => baseSprite("0549-h"), imgS: () => shinySprite("0549-h"), tags: ["hisuian"], }
				],
			},
			{ id: 68, natiId: 708, name: "Phantump", img: () => baseSprite(708), imgS: () => shinySprite(708), },
			{ id: 69, natiId: 709, name: "Trevenant", img: () => baseSprite(709), imgS: () => shinySprite(709), },
			{ id: 70, natiId: 744, name: "Rockruff", img: () => baseSprite(744), imgS: () => shinySprite(744), },
			{
				id: 71, natiId: 745, name: "Lycanroc", img: () => baseSprite(745), imgS: () => shinySprite(745), tags: ["other"], forms: [
					{ name: "Midday", img: () => baseSprite(745), imgS: () => shinySprite(745), },
					{ name: "Midnight", img: () => baseSprite("0745-m"), imgS: () => shinySprite("0745-m"), },
					{ name: "Dusk", img: () => baseSprite("0745-d"), imgS: () => shinySprite("0745-d"), },],
			},
			{ id: 72, natiId: 819, name: "Skwovet", img: () => baseSprite(819), imgS: () => shinySprite(819), },
			{ id: 73, natiId: 820, name: "Greedent", img: () => baseSprite(820), imgS: () => shinySprite(820), },
			{ id: 74, natiId: 948, name: "Toedscool", img: () => baseSprite(948), imgS: () => shinySprite(948), },
			{ id: 75, natiId: 949, name: "Toedscruel", img: () => baseSprite(949), imgS: () => shinySprite(949), },
			{
				id: 76, natiId: 1012, name: "Poltchageist", img: () => baseSprite(1012), imgS: () => shinySprite(1012), tags: ["other"], forms: [
					{ name: "Unremarkable", img: () => baseSprite(1012), imgS: () => shinySprite(1012), },
					{ name: "Masterpiece", img: () => baseSprite("01012-m"), imgS: () => shinySprite("01012-m"), },]
			},
			{
				id: 77, natiId: 1013, name: "Sinistcha", img: () => baseSprite(1013), imgS: () => shinySprite(1013), tags: ["other"], forms: [
					{ name: "Unremarkable", img: () => baseSprite(1013), imgS: () => shinySprite(1013), },
					{ name: "Masterpiece", img: () => baseSprite("01013-m"), imgS: () => shinySprite("01013-m"), },]
			},
			{
				id: 78, natiId: 58, name: "Growlithe", img: () => baseSprite(58), imgS: () => shinySprite(58), forms: [
					{ name: "Kantonian", img: () => baseSprite(58), imgS: () => shinySprite(58), },
					{ name: "Hisuian", img: () => baseSprite("0058-h"), imgS: () => shinySprite("0058-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 79, natiId: 59, name: "Arcanine", img: () => baseSprite(59), imgS: () => shinySprite(59), forms: [
					{ name: "Kantonian", img: () => baseSprite(59), imgS: () => shinySprite(59), },
					{ name: "Hisuian", img: () => baseSprite("0059-h"), imgS: () => shinySprite("0059-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 80, natiId: 74, name: "Geodude", img: () => baseSprite(74), imgS: () => shinySprite(74), forms: [
					{ name: "Kantonian", img: () => baseSprite(74), imgS: () => shinySprite(74), },
					{ name: "Alolan", img: () => baseSprite("0074-a"), imgS: () => shinySprite("0074-a"), tags: ["alolan"], }
				],
			},
			{
				id: 81, natiId: 75, name: "Graveler", img: () => baseSprite(75), imgS: () => shinySprite(75), forms: [
					{ name: "Kantonian", img: () => baseSprite(75), imgS: () => shinySprite(75), },
					{ name: "Alolan", img: () => baseSprite("0075-a"), imgS: () => shinySprite("0075-a"), tags: ["alolan"], }
				],
			},
			{
				id: 82, natiId: 76, name: "Golem", img: () => baseSprite(76), imgS: () => shinySprite(76), forms: [
					{ name: "Kantonian", img: () => baseSprite(76), imgS: () => shinySprite(76), },
					{ name: "Alolan", img: () => baseSprite("0076-a"), imgS: () => shinySprite("0076-a"), tags: ["alolan"], }
				],
			},
			{ id: 83, natiId: 438, name: "Bonsly", img: () => baseSprite(438), imgS: () => shinySprite(438), },
			{
				id: 84, natiId: 185, name: "Sudowoodo", img: () => baseSprite(185), imgS: () => shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(185), imgS: () => shinySprite(185), },
					{ name: "Female", img: () => baseSprite("0185-f"), imgS: () => shinySprite("0185-f"), }
				],
			},
			{ id: 85, natiId: 532, name: "Timburr", img: () => baseSprite(532), imgS: () => shinySprite(532), },
			{ id: 86, natiId: 533, name: "Gurdurr", img: () => baseSprite(533), imgS: () => shinySprite(533), },
			{ id: 87, natiId: 534, name: "Conkeldurr", img: () => baseSprite(534), imgS: () => shinySprite(534), },
			{ id: 88, natiId: 714, name: "Noibat", img: () => baseSprite(714), imgS: () => shinySprite(714), },
			{ id: 89, natiId: 715, name: "Noivern", img: () => baseSprite(715), imgS: () => shinySprite(715), },
			{ id: 90, natiId: 846, name: "Arrokuda", img: () => baseSprite(846), imgS: () => shinySprite(846), },
			{ id: 91, natiId: 847, name: "Barraskewda", img: () => baseSprite(847), imgS: () => shinySprite(847), },
			{ id: 92, natiId: 856, name: "Hatenna", img: () => baseSprite(856), imgS: () => shinySprite(856), },
			{ id: 93, natiId: 857, name: "Hattrem", img: () => baseSprite(857), imgS: () => shinySprite(857), },
			{ id: 94, natiId: 858, name: "Hatterene", img: () => baseSprite(858), imgS: () => shinySprite(858), },
			{ id: 95, natiId: 877, name: "Morpeko", img: () => baseSprite(877), imgS: () => shinySprite(877), },
			{ id: 96, natiId: 968, name: "Orthworm", img: () => baseSprite(968), imgS: () => shinySprite(968), },
			{ id: 97, natiId: 924, name: "Tandemaus", img: () => baseSprite(924), imgS: () => shinySprite(924), },
			{
				id: 98, natiId: 925, name: "Maushold", img: () => baseSprite(925), imgS: () => shinySprite(925), tags: ["other"], forms: [
					{ name: "Family of Four", img: () => baseSprite(925), imgS: () => shinySprite(925), },
					{ name: "Family of Three", img: () => baseSprite("0925-3"), imgS: () => shinySprite("0925-3"), }
				],
			},
			{ id: 99, natiId: 56, name: "Mankey", img: () => baseSprite(56), imgS: () => shinySprite(56), },
			{ id: 100, natiId: 57, name: "Primeape", img: () => baseSprite(57), imgS: () => shinySprite(57), },
			{ id: 101, natiId: 979, name: "Annihilape", img: () => baseSprite(979), imgS: () => shinySprite(979), },
			{ id: 102, natiId: 446, name: "Munchlax", img: () => baseSprite(446), imgS: () => shinySprite(446), },
			{ id: 103, natiId: 143, name: "Snorlax", img: () => baseSprite(143), imgS: () => shinySprite(143), },
			{ id: 104, natiId: 270, name: "Lotad", img: () => baseSprite(270), imgS: () => shinySprite(270), },
			{ id: 105, natiId: 271, name: "Lombre", img: () => baseSprite(271), imgS: () => shinySprite(271), },
			{
				id: 106, natiId: 272, name: "Ludicolo", img: () => baseSprite(272), imgS: () => shinySprite(272), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(272), imgS: () => shinySprite(272) },
					{ name: "Female", img: () => baseSprite("0272-f"), imgS: () => shinySprite("0272-f") },
				],
			},
			{ id: 107, natiId: 299, name: "Nosepass", img: () => baseSprite(299), imgS: () => shinySprite(299), },
			{ id: 108, natiId: 476, name: "Probopass", img: () => baseSprite(476), imgS: () => shinySprite(476), },
			{
				id: 109, natiId: 403, name: "Shinx", img: () => baseSprite(403), imgS: () => shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(403), imgS: () => shinySprite(403), },
					{ name: "Female", img: () => baseSprite("0403-f"), imgS: () => shinySprite("0403-f"), }
				],
			},
			{
				id: 110, natiId: 404, name: "Luxio", img: () => baseSprite(404), imgS: () => shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(404), imgS: () => shinySprite(404), },
					{ name: "Female", img: () => baseSprite("0404-f"), imgS: () => shinySprite("0404-f"), }
				],
			},
			{
				id: 111, natiId: 405, name: "Luxray", img: () => baseSprite(405), imgS: () => shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(405), imgS: () => shinySprite(405), },
					{ name: "Female", img: () => baseSprite("0405-f"), imgS: () => shinySprite("0405-f"), }
				],
			},
			{ id: 112, natiId: 736, name: "Grubbin", img: () => baseSprite(736), imgS: () => shinySprite(736), },
			{ id: 113, natiId: 737, name: "Charjabug", img: () => baseSprite(737), imgS: () => shinySprite(737), },
			{ id: 114, natiId: 738, name: "Vikavolt", img: () => baseSprite(738), imgS: () => shinySprite(738), },
			{
				id: 115, natiId: 741, name: "Oricorio", img: () => baseSprite(741), imgS: () => shinySprite(741), tags: ["other"], forms: [
					{ name: "Baile Style", img: () => baseSprite(741), imgS: () => shinySprite(741), },
					{ name: "Pa'u Style", img: () => baseSprite("0741-p"), imgS: () => shinySprite("0741-p"), },
					{ name: "Pom-Pom Style", img: () => baseSprite("0741-p"), imgS: () => shinySprite("0741-p"), },
					{ name: "Sensu Style", img: () => baseSprite("0741-s"), imgS: () => shinySprite("0741-s"), }
				],
			},
			{
				id: 116, natiId: 27, name: "Sandshrew", img: () => baseSprite(27), imgS: () => shinySprite(27), forms: [
					{ name: "Kantonian", img: () => baseSprite(27), imgS: () => shinySprite(27), },
					{ name: "Alolan", img: () => baseSprite("0027-a"), imgS: () => shinySprite("0027-a"), tags: ["alolan"], }
				],
			},
			{
				id: 117, natiId: 28, name: "Sandslash", img: () => baseSprite(28), imgS: () => shinySprite(28), forms: [
					{ name: "Kantonian", img: () => baseSprite(28), imgS: () => shinySprite(28), },
					{ name: "Alolan", img: () => baseSprite("0028-a"), imgS: () => shinySprite("0028-a"), tags: ["alolan"], }
				],
			},
			{ id: 118, natiId: 92, name: "Gastly", img: () => baseSprite(92), imgS: () => shinySprite(92), },
			{ id: 119, natiId: 93, name: "Haunter", img: () => baseSprite(93), imgS: () => shinySprite(93), },
			{ id: 120, natiId: 94, name: "Gengar", img: () => baseSprite(94), imgS: () => shinySprite(94), },
			{
				id: 121, natiId: 207, name: "Gligar", img: () => baseSprite(207), imgS: () => shinySprite(207), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(207), imgS: () => shinySprite(207) },
					{ name: "Female", img: () => baseSprite("0207-f"), imgS: () => shinySprite("0207-f") },
				],
			},
			{ id: 122, natiId: 472, name: "Gliscor", img: () => baseSprite(472), imgS: () => shinySprite(472), },
			{ id: 123, natiId: 228, name: "Houndour", img: () => baseSprite(228), imgS: () => shinySprite(228), },
			{
				id: 124, natiId: 229, name: "Houndoom", img: () => baseSprite(229), imgS: () => shinySprite(229), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(229), imgS: () => shinySprite(229), },
					{ name: "Female", img: () => baseSprite("0229-f"), imgS: () => shinySprite("0229-f"), },],
			},
			{ id: 125, natiId: 325, name: "Spoink", img: () => baseSprite(325), imgS: () => shinySprite(325), },
			{ id: 126, natiId: 326, name: "Grumpig", img: () => baseSprite(326), imgS: () => shinySprite(326), },
			{ id: 127, natiId: 629, name: "Vullaby", img: () => baseSprite(629), imgS: () => shinySprite(629), },
			{ id: 128, natiId: 630, name: "Mandibuzz", img: () => baseSprite(630), imgS: () => shinySprite(630), },
			{ id: 129, natiId: 749, name: "Mudbray", img: () => baseSprite(749), imgS: () => shinySprite(749), },
			{ id: 130, natiId: 750, name: "Mudsdale", img: () => baseSprite(750), imgS: () => shinySprite(750), },
			{ id: 131, natiId: 782, name: "Jangmo-o", img: () => baseSprite(782), imgS: () => shinySprite(782), tags: ["pseudo"] },
			{ id: 132, natiId: 783, name: "Hakamo-o", img: () => baseSprite(783), imgS: () => shinySprite(783), tags: ["pseudo"] },
			{ id: 133, natiId: 784, name: "Kommo-o", img: () => baseSprite(784), imgS: () => shinySprite(784), tags: ["pseudo"] },
			{ id: 134, natiId: 962, name: "Bombirdier", img: () => baseSprite(962), imgS: () => shinySprite(962), },
			{ id: 135, natiId: 109, name: "Koffing", img: () => baseSprite(109), imgS: () => shinySprite(109), },
			{
				id: 136, natiId: 110, name: "Weezing", img: () => baseSprite(110), imgS: () => shinySprite(110), forms: [
					{ name: "Kantonian", img: () => baseSprite(110), imgS: () => shinySprite(110) },
					{ name: "Galarian", img: () => baseSprite("0110-g"), imgS: () => shinySprite("0110-g"), tags: ["galarian"], },
				],
			},
			{ id: 137, natiId: 619, name: "Mienfoo", img: () => baseSprite(619), imgS: () => shinySprite(619), },
			{ id: 138, natiId: 620, name: "Mienshao", img: () => baseSprite(620), imgS: () => shinySprite(620), },
			{ id: 139, natiId: 355, name: "Duskull", img: () => baseSprite(355), imgS: () => shinySprite(355), },
			{ id: 140, natiId: 356, name: "Dusclops", img: () => baseSprite(356), imgS: () => shinySprite(356), },
			{ id: 141, natiId: 477, name: "Dusknoir", img: () => baseSprite(477), imgS: () => shinySprite(477), },
			{ id: 142, natiId: 433, name: "Chingling", img: () => baseSprite(433), imgS: () => shinySprite(433), },
			{ id: 143, natiId: 358, name: "Chimecho", img: () => baseSprite(358), imgS: () => shinySprite(358), },
			{ id: 144, natiId: 218, name: "Slugma", img: () => baseSprite(218), imgS: () => shinySprite(218), },
			{ id: 145, natiId: 219, name: "Magcargo", img: () => baseSprite(219), imgS: () => shinySprite(219), },
			{ id: 146, natiId: 607, name: "Litwick", img: () => baseSprite(607), imgS: () => shinySprite(607), },
			{ id: 147, natiId: 608, name: "Lampent", img: () => baseSprite(608), imgS: () => shinySprite(608), },
			{ id: 148, natiId: 609, name: "Chandelure", img: () => baseSprite(609), imgS: () => shinySprite(609), },
			{ id: 149, natiId: 283, name: "Surskit", img: () => baseSprite(283), imgS: () => shinySprite(283), },
			{ id: 150, natiId: 284, name: "Masquerain", img: () => baseSprite(284), imgS: () => shinySprite(284), },
			{ id: 151, natiId: 173, name: "Cleffa", img: () => baseSprite(173), imgS: () => shinySprite(173), },
			{ id: 152, natiId: 35, name: "Clefairy", img: () => baseSprite(35), imgS: () => shinySprite(35), },
			{ id: 153, natiId: 36, name: "Clefable", img: () => baseSprite(36), imgS: () => shinySprite(36), },
			{ id: 154, natiId: 436, name: "Bronzor", img: () => baseSprite(436), imgS: () => shinySprite(436), },
			{ id: 155, natiId: 437, name: "Bronzong", img: () => baseSprite(437), imgS: () => shinySprite(437), },
			{ id: 156, natiId: 969, name: "Glimmet", img: () => baseSprite(969), imgS: () => shinySprite(969), },
			{ id: 157, natiId: 970, name: "Glimmora", img: () => baseSprite(970), imgS: () => shinySprite(970), },
			{ id: 158, natiId: 349, name: "Feebas", img: () => baseSprite(349), imgS: () => shinySprite(349), },
			{
				id: 159, natiId: 350, name: "Milotic", img: () => baseSprite(350), imgS: () => shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(350), imgS: () => shinySprite(350) },
					{ name: "Female", img: () => baseSprite("0350-f"), imgS: () => shinySprite("0350-f") },
				],
			},
			{ id: 160, natiId: 206, name: "Dunsparce", img: () => baseSprite(206), imgS: () => shinySprite(206), },
			{
				id: 161, natiId: 982, name: "Dudunsparce", img: () => baseSprite(982), imgS: () => shinySprite(982), tags: ["other"], forms: [
					{ name: "Three-Segment", img: () => baseSprite(982), imgS: () => shinySprite(982), },
					{ name: "Two-Segment", img: () => baseSprite("0982-2"), imgS: () => shinySprite("0982-2"), }
				],
			},
			{ id: 162, natiId: 339, name: "Barboach", img: () => baseSprite(339), imgS: () => shinySprite(339), },
			{ id: 163, natiId: 340, name: "Whiscash", img: () => baseSprite(340), imgS: () => shinySprite(340), },
			{
				id: 164, natiId: 443, name: "Gible", img: () => baseSprite(443), imgS: () => shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(443), imgS: () => shinySprite(443), },
					{ name: "Female", img: () => baseSprite("0443-f"), imgS: () => shinySprite("0443-f"), }
				],
			},
			{
				id: 165, natiId: 444, name: "Gabite", img: () => baseSprite(444), imgS: () => shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(444), imgS: () => shinySprite(444), },
					{ name: "Female", img: () => baseSprite("0444-f"), imgS: () => shinySprite("0444-f"), }
				],
			},
			{
				id: 166, natiId: 445, name: "Garchomp", img: () => baseSprite(445), imgS: () => shinySprite(445), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(445), imgS: () => shinySprite(445), },
					{ name: "Female", img: () => baseSprite("0445-f"), imgS: () => shinySprite("0445-f"), },],
			},
			{ id: 167, natiId: 703, name: "Carbink", img: () => baseSprite(703), imgS: () => shinySprite(703), },
			{ id: 168, natiId: 757, name: "Salandit", img: () => baseSprite(757), imgS: () => shinySprite(757), },
			{ id: 169, natiId: 758, name: "Salazzle", img: () => baseSprite(758), imgS: () => shinySprite(758), },
			{
				id: 170, natiId: 215, name: "Sneasel", img: () => baseSprite(215), imgS: () => shinySprite(215), tags: ["gender"], forms: [
					{ name: "Johtonian Male", img: () => baseSprite(215), imgS: () => shinySprite(215), },
					{ name: "Johtonian Female", img: () => baseSprite("0215-f"), imgS: () => shinySprite("0215-f"), },
					{ name: "Hisuian Male", img: () => baseSprite("0215-h"), imgS: () => shinySprite("0215-h"), tags: ["hisuian"], },
					{ name: "Hisuian Female", img: () => baseSprite("0215-h-f"), imgS: () => shinySprite("0215-h-f"), tags: ["hisuian"], }
				],
			},
			{
				id: 171, natiId: 461, name: "Weavile", img: () => baseSprite(461), imgS: () => shinySprite(461), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(461), imgS: () => shinySprite(461), },
					{ name: "Female", img: () => baseSprite("0461-f"), imgS: () => shinySprite("0461-f"), }
				],
			},
			{ id: 172, natiId: 361, name: "Snorunt", img: () => baseSprite(361), imgS: () => shinySprite(361), },
			{ id: 173, natiId: 362, name: "Glalie", img: () => baseSprite(362), imgS: () => shinySprite(362), },
			{ id: 174, natiId: 478, name: "Froslass", img: () => baseSprite(478), imgS: () => shinySprite(478), },
			{ id: 175, natiId: 602, name: "Tynamo", img: () => baseSprite(602), imgS: () => shinySprite(602), },
			{ id: 176, natiId: 603, name: "Eelektrik", img: () => baseSprite(603), imgS: () => shinySprite(603), },
			{ id: 177, natiId: 604, name: "Eelektross", img: () => baseSprite(604), imgS: () => shinySprite(604), },
			{ id: 178, natiId: 704, name: "Goomy", img: () => baseSprite(704), imgS: () => shinySprite(704), tags: ["pseudo"] },
			{
				id: 179, natiId: 705, name: "Sliggoo", img: () => baseSprite(705), imgS: () => shinySprite(705), forms: [
					{ name: "Kalosian", img: () => baseSprite(705), imgS: () => shinySprite(705), },
					{ name: "Hisuian", img: () => baseSprite("0705-h"), imgS: () => shinySprite("0705-h"), tags: ["hisuian", "pseudo"], }
				],
			},
			{
				id: 180, natiId: 706, name: "Goodra", img: () => baseSprite(706), imgS: () => shinySprite(706), forms: [
					{ name: "Kalosian", img: () => baseSprite(706), imgS: () => shinySprite(706), },
					{ name: "Hisuian", img: () => baseSprite("0706-h"), imgS: () => shinySprite("0706-h"), tags: ["hisuian", "pseudo"], }
				],
			},
			{ id: 181, natiId: 580, name: "Ducklett", img: () => baseSprite(580), imgS: () => shinySprite(580), },
			{ id: 182, natiId: 581, name: "Swanna", img: () => baseSprite(581), imgS: () => shinySprite(581), },
			{ id: 183, natiId: 833, name: "Chewtle", img: () => baseSprite(833), imgS: () => shinySprite(833), },
			{ id: 184, natiId: 834, name: "Drednaw", img: () => baseSprite(834), imgS: () => shinySprite(834), },
			{ id: 185, natiId: 845, name: "Cramorant", img: () => baseSprite(845), imgS: () => shinySprite(845), },
			{ id: 186, natiId: 624, name: "Pawniard", img: () => baseSprite(624), imgS: () => shinySprite(624), },
			{ id: 187, natiId: 625, name: "Bisharp", img: () => baseSprite(625), imgS: () => shinySprite(625), },
			{ id: 188, natiId: 983, name: "Kingambit", img: () => baseSprite(983), imgS: () => shinySprite(983), },
			{ id: 189, natiId: 778, name: "Mimikyu", img: () => baseSprite(778), imgS: () => shinySprite(778), },
			{ id: 190, natiId: 859, name: "Impidimp", img: () => baseSprite(859), imgS: () => shinySprite(859), },
			{ id: 191, natiId: 860, name: "Morgrem", img: () => baseSprite(860), imgS: () => shinySprite(860), },
			{ id: 192, natiId: 861, name: "Grimmsnarl", img: () => baseSprite(861), imgS: () => shinySprite(861), },
			{
				id: 193, natiId: 876, name: "Indeedee", img: () => baseSprite(876), imgS: () => shinySprite(876), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(876), imgS: () => shinySprite(876), },
					{ name: "Female", img: () => baseSprite("0876-f"), imgS: () => shinySprite("0876-f"), }
				],
			},
			{
				id: 194, natiId: 550, name: "Basculin", img: () => baseSprite(550), imgS: () => shinySprite(550), tags: ["other"], forms: [
					{ name: "Blue-Striped", img: () => baseSprite(550), imgS: () => shinySprite(550), },
					{ name: "Red-Striped", img: () => baseSprite("0550-r"), imgS: () => shinySprite("0550-r"), },
					{ name: "White-Striped", img: () => baseSprite("0550-w"), imgS: () => shinySprite("0550-w"), }
				],
			},
			{
				id: 195, natiId: 902, name: "Basculegion", img: () => baseSprite(902), imgS: () => shinySprite(902), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(902), imgS: () => shinySprite(902) },
					{ name: "Female", img: () => baseSprite("0902-f"), imgS: () => shinySprite("0902-f") },
				],
			},
			{
				id: 196, natiId: 901, name: "Ursaluna", img: () => baseSprite(901), imgS: () => shinySprite(901), tags: ["other"], forms: [
					{ name: "Normal", img: () => baseSprite(901), imgS: () => shinySprite(901) },
					{ name: "Bloodmoon", img: () => baseSprite("0901-b"), imgS: () => shinySprite("0901-b"), maxStatus: "caught", }
				],
			},
			{ id: 197, natiId: 1014, name: "Okidogi", img: () => baseSprite(1014), imgS: () => shinySprite(1014), maxStatus: "caught", tags: ["legendary"], },
			{ id: 198, natiId: 1015, name: "Munkidori", img: () => baseSprite(1015), imgS: () => shinySprite(1015), maxStatus: "caught", tags: ["legendary"], },
			{ id: 199, natiId: 1016, name: "Fezandipiti", img: () => baseSprite(1016), imgS: () => shinySprite(1016), maxStatus: "caught", tags: ["legendary"], },
			{ id: 200, natiId: 1017, name: "Ogerpon", img: () => baseSprite(1017), imgS: () => shinySprite(1017), maxStatus: "caught", tags: ["legendary"], }
		],
	},
});