const game = "violet";
const sub = game + "tm";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const paldeaDex = (id) => _dex(game, "regional", id);
const tmDex = (id) => _dex(game + "tm", "regional", id);
const idDex = (id) => _dex(game + "id", "regional", id);
const paldeaDexForm = (id, form) => _dex(game, "regional", id, form);
const tmDexForm = (id, form) => _dex(game + "tm", "regional", id, form);
const idDexForm = (id, form) => _dex(game + "id", "regional", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Kitakami Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), },
			{ id: 2, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), },
			{ id: 3, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193), },
			{ id: 4, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469), },
			{
				id: 5, name: "Wooper", img: baseSprite("194-p"), imgS: shinySprite("194-p"), dexSync: [paldeaDex(53)], forms: [
					{ name: "Johtonian Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: [paldeaDexForm(53, "Johtonian Male")], },
					{ name: "Johtonian Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: [paldeaDexForm(53, "Johtonian Female")], },
					{ name: "Paldean", img: baseSprite("194-p"), imgS: shinySprite("194-p"), dexSync: [paldeaDexForm(53, "Paldean")], }
				],
			},
			{
				id: 6, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195) },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f") },
				],
			},
			{ id: 7, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), },
			{ id: 8, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), },
			{ id: 9, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), },
			{ id: 10, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), },
			{ id: 11, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 12, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 13, name: "Sewaddle", img: baseSprite(540), imgS: shinySprite(540), },
			{ id: 14, name: "Swadloon", img: baseSprite(541), imgS: shinySprite(541), },
			{ id: 15, name: "Leavanny", img: baseSprite(542), imgS: shinySprite(542), },
			{ id: 16, name: "Cutiefly", img: baseSprite(742), imgS: shinySprite(742), },
			{ id: 17, name: "Ribombee", img: baseSprite(743), imgS: shinySprite(743), },
			{ id: 18, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), },
			{ id: 19, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), },
			{ id: 20, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [paldeaDex(73)], },
			{
				id: 21, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [paldeaDex(74)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [paldeaDexForm(74, "Male")], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [paldeaDexForm(74, "Female")], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), dexSync: [paldeaDexForm(74, "Alola Cap")], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), dexSync: [paldeaDexForm(74, "Hoenn Cap")], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), dexSync: [paldeaDexForm(74, "Kalos Cap")], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), dexSync: [paldeaDexForm(74, "Original Cap")], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), dexSync: [paldeaDexForm(74, "Partner Cap")], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), dexSync: [paldeaDexForm(74, "Sinnoh Cap")], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), dexSync: [paldeaDexForm(74, "Unova Cap")], },
					{ name: "World Cap", img: baseSprite("025-w"), imgS: shinySprite("025-w"), dexSync: [paldeaDexForm(74, "World Cap")], }
				],
			},
			{
				id: 22, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: [paldeaDex(75)], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [paldeaDexForm(75, "Kantonian Male")], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [paldeaDexForm(75, "Kantonian Female")], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [paldeaDexForm(75, "Alolan")], }
				],
			},
			{ id: 23, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), },
			{ id: 24, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), },
			{ id: 25, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), },
			{ id: 26, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161), },
			{ id: 27, name: "Furret", img: baseSprite(162), imgS: shinySprite(162), },
			{
				id: 28, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), dexSync: [paldeaDex(97)], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), dexSync: [paldeaDexForm(97, "Male")], },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), dexSync: [paldeaDexForm(97, "Female")], }
				],
			},
			{
				id: 29, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), dexSync: [paldeaDex(98)], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), dexSync: [paldeaDexForm(98, "Male")], },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), dexSync: [paldeaDexForm(98, "Female")], }
				],
			},
			{
				id: 30, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), dexSync: [paldeaDex(99)], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), dexSync: [paldeaDexForm(99, "Male")], },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), dexSync: [paldeaDexForm(99, "Female")], }
				],
			},
			{ id: 31, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [paldeaDex(247)], },
			{ id: 32, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [paldeaDex(248)], },
			{ id: 33, name: "Applin", img: baseSprite(840), imgS: shinySprite(840), dexSync: [paldeaDex(108)], },
			{ id: 34, name: "Flapple", img: baseSprite(841), imgS: shinySprite(841), dexSync: [paldeaDex(109)], },
			{ id: 35, name: "Appletun", img: baseSprite(842), imgS: shinySprite(842), dexSync: [paldeaDex(110)], },
			{ id: 36, name: "Dipplin", img: baseSprite(1011), imgS: shinySprite(1011), },
			{
				id: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), dexSync: [idDex(157)], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [idDexForm(157, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [idDexForm(157, "Alolan")], }
				],
			},
			{
				id: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), dexSync: [idDex(158)], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [idDexForm(158, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [idDexForm(158, "Alolan")], }
				],
			},
			{ id: 39, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), },
			{ id: 40, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), },
			{ id: 41, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), },
			{
				id: 42, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186) },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f") },
				],
			},
			{
				id: 43, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [paldeaDex(134)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [paldeaDexForm(134, "Male")], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [paldeaDexForm(134, "Female")], }
				],
			},
			{
				id: 44, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [paldeaDex(135)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [paldeaDexForm(135, "Male")], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [paldeaDexForm(135, "Female")], },],
			},
			{ id: 45, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), },
			{ id: 46, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), },
			{
				id: 47, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190) },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f") },
				],
			},
			{
				id: 48, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424) },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f") },
				],
			},
			{
				id: 49, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [paldeaDex(262)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: [paldeaDexForm(262, "Male")], },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: [paldeaDexForm(262, "Female")], },],
			},
			{ id: 50, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), },
			{
				id: 51, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221) },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f") },
				],
			},
			{
				id: 52, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473) },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f") },
				],
			},
			{ id: 53, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), dexSync: [paldeaDex(204)], },
			{ id: 54, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), },
			{
				id: 55, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274) },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f") },
				],
			},
			{
				id: 56, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275) },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f") },
				],
			},
			{ id: 57, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), dexSync: [paldeaDex(62)], },
			{ id: 58, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), dexSync: [paldeaDex(63)], },
			{ id: 59, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), dexSync: [paldeaDex(64)], },
			{ id: 60, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), dexSync: [paldeaDex(65)], },
			{
				id: 61, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), dexSync: [paldeaDex(33)], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), dexSync: [paldeaDexForm(33, "Male")], },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), dexSync: [paldeaDexForm(33, "Female")], }
				],
			},
			{
				id: 62, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), dexSync: [paldeaDex(34)], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), dexSync: [paldeaDexForm(34, "Male")], },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), dexSync: [paldeaDexForm(34, "Female")], }
				],
			},
			{
				id: 63, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), dexSync: [paldeaDex(201)], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), dexSync: [paldeaDexForm(201, "Male")], },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), dexSync: [paldeaDexForm(201, "Female")], }
				],
			},
			{ id: 64, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [paldeaDex(163)], },
			{ id: 65, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [paldeaDex(164)], },
			{ id: 66, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [paldeaDex(104)], },
			{
				id: 67, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [paldeaDex(105)], forms: [
					{ name: "Unovian", img: baseSprite(549), imgS: shinySprite(549), dexSync: [paldeaDexForm(105, "Male")], },
					{ name: "Hisuian", img: baseSprite("549-h"), imgS: shinySprite("549-h"), dexSync: [paldeaDexForm(105, "Female")], }
				],
			},
			{ id: 68, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), },
			{ id: 69, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), },
			{ id: 70, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [paldeaDex(89)], },
			{
				id: 71, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [paldeaDex(90)], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [paldeaDexForm(90, "Midday")], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [paldeaDexForm(90, "Midnight")], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [paldeaDexForm(90, "Dusk")], },],
			},
			{ id: 72, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), dexSync: [paldeaDex(29)], },
			{ id: 73, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), dexSync: [paldeaDex(30)], },
			{ id: 74, name: "Toedscool", img: baseSprite(948), imgS: shinySprite(948), dexSync: [paldeaDex(244)], },
			{ id: 75, name: "Toedscruel", img: baseSprite(949), imgS: shinySprite(949), dexSync: [paldeaDex(245)], },
			{
				id: 76, name: "Poltchageist", img: baseSprite(1012), imgS: shinySprite(1012), forms: [
					{ name: "Unremarkable", img: baseSprite(1012), imgS: shinySprite(1012), },
					{ name: "Masterpiece", img: baseSprite("1012-m"), imgS: shinySprite("1012-m"), },]
			},
			{
				id: 77, name: "Sinistcha", img: baseSprite(1013), imgS: shinySprite(1013), forms: [
					{ name: "Unremarkable", img: baseSprite(1013), imgS: shinySprite(1013), },
					{ name: "Masterpiece", img: baseSprite("1013-m"), imgS: shinySprite("1013-m"), },]
			},
			{
				id: 78, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: [paldeaDex(213)], forms: [
					{ name: "Kantonian", img: baseSprite(58), imgS: shinySprite(58), dexSync: [paldeaDexForm(213, "Male")], },
					{ name: "Hisuian", img: baseSprite("058-h"), imgS: shinySprite("058-h"), dexSync: [paldeaDexForm(213, "Female")], }
				],
			},
			{
				id: 79, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: [paldeaDex(214)], forms: [
					{ name: "Kantonian", img: baseSprite(59), imgS: shinySprite(59), dexSync: [paldeaDexForm(214, "Male")], },
					{ name: "Hisuian", img: baseSprite("059-h"), imgS: shinySprite("059-h"), dexSync: [paldeaDexForm(214, "Female")], }
				],
			},
			{
				id: 80, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: [idDex(96)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [idDexForm(96, "Male")], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [idDexForm(96, "Alolan")], }
				],
			},
			{
				id: 81, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: [idDex(97)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [idDexForm(97, "Male")], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [idDexForm(97, "Alolan")], }
				],
			},
			{
				id: 82, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: [idDex(98)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [idDexForm(98, "Male")], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [idDexForm(98, "Alolan")], }
				],
			},
			{ id: 83, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [paldeaDex(87)], },
			{
				id: 84, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [paldeaDex(88)], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [paldeaDexForm(88, "Male")], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [paldeaDexForm(88, "Female")], }
				],
			},
			{ id: 85, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532), },
			{ id: 86, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533), },
			{ id: 87, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534), },
			{ id: 88, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [paldeaDex(303)], },
			{ id: 89, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [paldeaDex(304)], },
			{ id: 90, name: "Arrokuda", img: baseSprite(846), imgS: shinySprite(846), dexSync: [paldeaDex(136)], },
			{ id: 91, name: "Barraskewda", img: baseSprite(847), imgS: shinySprite(847), dexSync: [paldeaDex(137)], },
			{ id: 92, name: "Hatenna", img: baseSprite(856), imgS: shinySprite(856), dexSync: [paldeaDex(282)], },
			{ id: 93, name: "Hattrem", img: baseSprite(857), imgS: shinySprite(857), dexSync: [paldeaDex(283)], },
			{ id: 94, name: "Hatterene", img: baseSprite(858), imgS: shinySprite(858), dexSync: [paldeaDex(284)], },
			{ id: 95, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), },
			{ id: 96, name: "Orthworm", img: baseSprite(968), imgS: shinySprite(968), dexSync: [paldeaDex(296)], },
			{ id: 97, name: "Tandemaus", img: baseSprite(924), imgS: shinySprite(924), dexSync: [paldeaDex(71)], },
			{
				id: 98, name: "Maushold", img: baseSprite(925), imgS: shinySprite(925), dexSync: [paldeaDex(72)], forms: [
					{ name: "Family of Four", img: baseSprite(925), imgS: shinySprite(925), dexSync: [paldeaDexForm(72, "Family of Four")], },
					{ name: "Family of Three", img: baseSprite("925-3"), imgS: shinySprite("925-3"), dexSync: [paldeaDexForm(72, "Family of Three")], }
				],
			},
			{ id: 99, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [paldeaDex(158)], },
			{ id: 100, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [paldeaDex(159)], },
			{ id: 101, name: "Annihilape", img: baseSprite(979), imgS: shinySprite(979), dexSync: [paldeaDex(160)], },
			{ id: 102, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 103, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 104, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), },
			{ id: 105, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), },
			{
				id: 106, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272) },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f") },
				],
			},
			{ id: 107, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 108, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{
				id: 109, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), dexSync: [paldeaDex(94)], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), dexSync: [paldeaDexForm(94, "Male")], },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), dexSync: [paldeaDexForm(94, "Female")], }
				],
			},
			{
				id: 110, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), dexSync: [paldeaDex(95)], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), dexSync: [paldeaDexForm(95, "Male")], },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), dexSync: [paldeaDexForm(95, "Female")], }
				],
			},
			{
				id: 111, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), dexSync: [paldeaDex(96)], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), dexSync: [paldeaDexForm(96, "Male")], },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), dexSync: [paldeaDexForm(96, "Female")], }
				],
			},
			{ id: 112, name: "Grubbin", img: baseSprite(736), imgS: shinySprite(736), },
			{ id: 113, name: "Charjabug", img: baseSprite(737), imgS: shinySprite(737), },
			{ id: 114, name: "Vikavolt", img: baseSprite(738), imgS: shinySprite(738), },
			{
				id: 115, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [paldeaDex(100), idDex(74)], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [paldeaDexForm(100, "Balie Style"), idDexForm(74, "Balie Style")], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [paldeaDexForm(100, "Pa'U Style"), idDexForm(74, "Pa'U Style")], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [paldeaDexForm(100, "Pom-Pom Style"), idDexForm(74, "Pom-Pom Style")], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [paldeaDexForm(100, "Sensu Style"), idDexForm(74, "Sensu Style")], }
				],
			},
			{
				id: 116, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: [idDex(155)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [idDexForm(155, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [idDexForm(155, "Alolan")], }
				],
			},
			{
				id: 117, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: [idDex(156)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [idDexForm(156, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [idDexForm(156, "Alolan")], }
				],
			},
			{ id: 118, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [paldeaDex(68)], },
			{ id: 119, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [paldeaDex(69)], },
			{ id: 120, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [paldeaDex(70)], },
			{
				id: 121, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207) },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f") },
				],
			},
			{ id: 122, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472), },
			{ id: 123, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), dexSync: [paldeaDex(25)], },
			{
				id: 124, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), dexSync: [paldeaDex(26)], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), dexSync: [paldeaDexForm(26, "Male")], },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), dexSync: [paldeaDexForm(26, "Female")], },],
			},
			{ id: 125, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), dexSync: [paldeaDex(111)], },
			{ id: 126, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), dexSync: [paldeaDex(112)], },
			{ id: 127, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [idDex(34)], },
			{ id: 128, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [idDex(35)], },
			{ id: 129, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [paldeaDex(272)], },
			{ id: 130, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [paldeaDex(273)], },
			{ id: 131, name: "Jangmo-o", img: baseSprite(782), imgS: shinySprite(782), },
			{ id: 132, name: "Hakamo-o", img: baseSprite(783), imgS: shinySprite(783), },
			{ id: 133, name: "Kommo-o", img: baseSprite(784), imgS: shinySprite(784), },
			{ id: 134, name: "Bombirdier", img: baseSprite(962), imgS: shinySprite(962), dexSync: [paldeaDex(290)], },
			{ id: 135, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), },
			{
				id: 136, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), forms: [
					{ name: "Kantonian", img: baseSprite(110), imgS: shinySprite(110) },
					{ name: "Galarian", img: baseSprite("110-g"), imgS: shinySprite("110-g") },
				],
			},
			{ id: 137, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619), },
			{ id: 138, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620), },
			{ id: 139, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), },
			{ id: 140, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), },
			{ id: 141, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), },
			{ id: 142, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), },
			{ id: 143, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), },
			{ id: 144, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), },
			{ id: 145, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), },
			{ id: 146, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607), },
			{ id: 147, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608), },
			{ id: 148, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609), },
			{ id: 149, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [paldeaDex(49)], },
			{ id: 150, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [paldeaDex(50)], },
			{ id: 151, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), },
			{ id: 152, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 153, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{ id: 154, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), dexSync: [paldeaDex(153)], },
			{ id: 155, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), dexSync: [paldeaDex(154)], },
			{ id: 156, name: "Glimmet", img: baseSprite(969), imgS: shinySprite(969), dexSync: [paldeaDex(308)], },
			{ id: 157, name: "Glimmora", img: baseSprite(970), imgS: shinySprite(970), dexSync: [paldeaDex(309)], },
			{ id: 158, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 159, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350) },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f") },
				],
			},
			{ id: 160, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: [paldeaDex(188)], },
			{
				id: 161, name: "Dudunsparce", img: baseSprite(982), imgS: shinySprite(982), dexSync: [paldeaDex(189)], forms: [
					{ name: "Three-Segment", img: baseSprite(982), imgS: shinySprite(982), dexSync: [paldeaDexForm(189, "Three-Segment")], },
					{ name: "Two-Segment", img: baseSprite("982-2"), imgS: shinySprite("982-2"), dexSync: [paldeaDexForm(189, "Two-Segment")], }
				],
			},
			{ id: 162, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [paldeaDex(168)], },
			{ id: 163, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [paldeaDex(169)], },
			{
				id: 164, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [paldeaDex(126)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [paldeaDexForm(126, "Male")], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [paldeaDexForm(126, "Female")], }
				],
			},
			{
				id: 165, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [paldeaDex(127)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [paldeaDexForm(127, "Male")], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [paldeaDexForm(127, "Female")], }
				],
			},
			{
				id: 166, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [paldeaDex(128)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [paldeaDexForm(128, "Male")], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [paldeaDexForm(128, "Female")], },],
			},
			{ id: 167, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), },
			{ id: 168, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [paldeaDex(120)], },
			{ id: 169, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [paldeaDex(121)], },
			{
				id: 170, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [paldeaDex(230)], forms: [
					{ name: "Johtonian Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [paldeaDexForm(230, "Johtonian Male")], },
					{ name: "Johtonian Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [paldeaDexForm(230, "Johtonian Female")], },
					{ name: "Hisuian Male", img: baseSprite("215-h"), imgS: shinySprite("215-h"), dexSync: [paldeaDexForm(230, "Hisuian Male")], },
					{ name: "Hisuian Female", img: baseSprite("215-h-f"), imgS: shinySprite("215-h-f"), dexSync: [paldeaDexForm(230, "Hisuian Female")], }
				],
			},
			{
				id: 171, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [paldeaDex(231)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [paldeaDexForm(231, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [paldeaDexForm(231, "Female")], }
				],
			},
			{ id: 172, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [paldeaDex(357)], },
			{ id: 173, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [paldeaDex(358)], },
			{ id: 174, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [paldeaDex(359)], },
			{ id: 175, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), dexSync: [paldeaDex(341), idDex(134)], },
			{ id: 176, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), dexSync: [paldeaDex(342), idDex(135)], },
			{ id: 177, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), dexSync: [paldeaDex(343), idDex(136)], },
			{ id: 178, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [paldeaDex(172)], },
			{
				id: 179, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [paldeaDex(173)], forms: [
					{ name: "Kalosian", img: baseSprite(705), imgS: shinySprite(705), dexSync: [paldeaDexForm(173, "Kalosian")], },
					{ name: "Hisuian", img: baseSprite("705-h"), imgS: shinySprite("705-h"), dexSync: [paldeaDexForm(173, "Hisuian")], }
				],
			},
			{
				id: 180, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [paldeaDex(174)], forms: [
					{ name: "Kalosian", img: baseSprite(706), imgS: shinySprite(706), dexSync: [paldeaDexForm(174, "Kalosian")], },
					{ name: "Hisuian", img: baseSprite("706-h"), imgS: shinySprite("706-h"), dexSync: [paldeaDexForm(174, "Hisuian")], }
				],
			},
			{ id: 181, name: "Ducklett", img: baseSprite(580), imgS: shinySprite(580), },
			{ id: 182, name: "Swanna", img: baseSprite(581), imgS: shinySprite(581), },
			{ id: 183, name: "Chewtle", img: baseSprite(833), imgS: shinySprite(833), dexSync: [paldeaDex(57)], },
			{ id: 184, name: "Drednaw", img: baseSprite(834), imgS: shinySprite(834), dexSync: [paldeaDex(58)], },
			{ id: 185, name: "Cramorant", img: baseSprite(845), imgS: shinySprite(845), },
			{ id: 186, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [paldeaDex(367)], },
			{ id: 187, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [paldeaDex(368)], },
			{ id: 188, name: "Kingambit", img: baseSprite(983), imgS: shinySprite(983), dexSync: [paldeaDex(369)], },
			{ id: 189, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [paldeaDex(239)], },
			{ id: 190, name: "Impidimp", img: baseSprite(859), imgS: shinySprite(859), dexSync: [paldeaDex(285)], },
			{ id: 191, name: "Morgrem", img: baseSprite(860), imgS: shinySprite(860), dexSync: [paldeaDex(286)], },
			{ id: 192, name: "Grimmsnarl", img: baseSprite(861), imgS: shinySprite(861), dexSync: [paldeaDex(287)], },
			{
				id: 193, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), dexSync: [paldeaDex(241)], forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), dexSync: [paldeaDexForm(241, "Male")], },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), dexSync: [paldeaDexForm(241, "Female")], }
				],
			},
			{
				id: 194, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [paldeaDex(138)], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [paldeaDexForm(138, "Blue-Striped")], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [paldeaDexForm(138, "Red-Striped")], },
					{ name: "White-Striped", img: baseSprite("550-w"), imgS: shinySprite("550-w"), dexSync: [paldeaDexForm(138, "White-Striped")], }
				],
			},
			{
				id: 195, name: "Basculegion", img: baseSprite(902), imgS: shinySprite(902), forms: [
					{ name: "Male", img: baseSprite(902), imgS: shinySprite(902) },
					{ name: "Female", img: baseSprite("902-f"), imgS: shinySprite("902-f") },
				],
			},
			{
				id: 196, name: "Ursaluna", img: baseSprite(901), imgS: shinySprite(901), forms: [
					{ name: "Normal", img: baseSprite(901), imgS: shinySprite(901) },
					{ name: "Bloodmoon", img: baseSprite("901-b"), imgS: shinySprite("901-b"), maxStatus: "caught", }
				],
			},
			{ id: 197, name: "Okidogi", img: baseSprite(1014), imgS: shinySprite(1014), maxStatus: "caught", legendary: true, },
			{ id: 198, name: "Munkidori", img: baseSprite(1015), imgS: shinySprite(1015), maxStatus: "caught", legendary: true, },
			{ id: 199, name: "Fezandipiti", img: baseSprite(1016), imgS: shinySprite(1016), maxStatus: "caught", legendary: true, },
			{ id: 200, name: "Ogerpon", img: baseSprite(1017), imgS: shinySprite(1017), maxStatus: "caught", legendary: true, }
		],
	},
});