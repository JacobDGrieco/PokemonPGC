const game = "violet";
const sub = game + "";
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Paldea Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 906, name: "Sprigatito", img: baseSprite(906), imgS: shinySprite(906), tags: ["starter"], },
			{ id: 2, natiId: 907, name: "Floragato", img: baseSprite(907), imgS: shinySprite(907), tags: ["starter"], },
			{ id: 3, natiId: 908, name: "Meowscarada", img: baseSprite(908), imgS: shinySprite(908), tags: ["starter"], },
			{ id: 4, natiId: 909, name: "Fuecoco", img: baseSprite(909), imgS: shinySprite(909), tags: ["starter"], },
			{ id: 5, natiId: 910, name: "Crocalor", img: baseSprite(910), imgS: shinySprite(910), tags: ["starter"], },
			{ id: 6, natiId: 911, name: "Skeledirge", img: baseSprite(911), imgS: shinySprite(911), tags: ["starter"], },
			{ id: 7, natiId: 912, name: "Quaxly", img: baseSprite(912), imgS: shinySprite(912), tags: ["starter"], },
			{ id: 8, natiId: 913, name: "Quaxwell", img: baseSprite(913), imgS: shinySprite(913), tags: ["starter"], },
			{ id: 9, natiId: 914, name: "Quaquaval", img: baseSprite(914), imgS: shinySprite(914), tags: ["starter"], },
			{ id: 10, natiId: 915, name: "Lechonk", img: baseSprite(915), imgS: shinySprite(915), },
			{
				id: 11, natiId: 916, name: "Oinkologne", img: baseSprite(916), imgS: shinySprite(916), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(916), imgS: shinySprite(916), },
					{ name: "Female", img: baseSprite("916-f"), imgS: shinySprite("916-f"), }
				],
			},
			{ id: 12, natiId: 917, name: "Tarountula", img: baseSprite(917), imgS: shinySprite(917), },
			{ id: 13, natiId: 918, name: "Spidops", img: baseSprite(918), imgS: shinySprite(918), },
			{ id: 14, natiId: 919, name: "Nymble", img: baseSprite(919), imgS: shinySprite(919), },
			{ id: 15, natiId: 920, name: "Lokix", img: baseSprite(920), imgS: shinySprite(920), },
			{ id: 16, natiId: 187, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), },
			{ id: 17, natiId: 188, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), },
			{ id: 18, natiId: 189, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), },
			{ id: 19, natiId: 661, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), },
			{ id: 20, natiId: 662, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), },
			{ id: 21, natiId: 663, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), },
			{ id: 22, natiId: 921, name: "Pawmi", img: baseSprite(921), imgS: shinySprite(921), },
			{ id: 23, natiId: 922, name: "Pawmo", img: baseSprite(922), imgS: shinySprite(922), },
			{ id: 24, natiId: 923, name: "Pawmot", img: baseSprite(923), imgS: shinySprite(923), },
			{ id: 25, natiId: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), },
			{
				id: 26, natiId: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), },],
			},
			{ id: 27, natiId: 734, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), },
			{ id: 28, natiId: 735, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), },
			{ id: 29, natiId: 819, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), },
			{ id: 30, natiId: 820, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), },
			{ id: 31, natiId: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), },
			{ id: 32, natiId: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), },
			{
				id: 33, natiId: 401, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), }
				],
			},
			{
				id: 34, natiId: 402, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), }
				],
			},
			{ id: 35, natiId: 664, name: "Scatterbug", img: baseSprite(664), imgS: shinySprite(664), },
			{ id: 36, natiId: 665, name: "Spewpa", img: baseSprite(665), imgS: shinySprite(665), },
			{
				id: 37, natiId: 666, name: "Vivillon", img: baseSprite(666), imgS: shinySprite(666), tags: ["other"], forms: [
					{ name: "Archipelago Pattern", img: baseSprite("666-arc"), imgS: shinySprite("666-arc"), },
					{ name: "Continental Pattern", img: baseSprite("666-con"), imgS: shinySprite("666-con"), },
					{ name: "Elegant Pattern", img: baseSprite("666-ele"), imgS: shinySprite("666-ele"), },
					{ name: "Garden Pattern", img: baseSprite("666-gar"), imgS: shinySprite("666-gar"), },
					{ name: "High Plains Pattern", img: baseSprite("666-hig"), imgS: shinySprite("666-hig"), },
					{ name: "Icy Snow Pattern", img: baseSprite("666-icy"), imgS: shinySprite("666-icy"), },
					{ name: "Jungle Pattern", img: baseSprite("666-jun"), imgS: shinySprite("666-jun"), },
					{ name: "Marine Pattern", img: baseSprite("666-mar"), imgS: shinySprite("666-mar"), },
					{ name: "Meadow Pattern", img: baseSprite("666-mea"), imgS: shinySprite("666-mea"), },
					{ name: "Modern Pattern", img: baseSprite("666-mod"), imgS: shinySprite("666-mod"), },
					{ name: "Monsoon Pattern", img: baseSprite("666-mon"), imgS: shinySprite("666-mon"), },
					{ name: "Ocean Pattern", img: baseSprite("666-oce"), imgS: shinySprite("666-oce"), },
					{ name: "Polar Pattern", img: baseSprite("666-pol"), imgS: shinySprite("666-pol"), },
					{ name: "River Pattern", img: baseSprite("666-riv"), imgS: shinySprite("666-riv"), },
					{ name: "Sandstorm Pattern", img: baseSprite("666-san"), imgS: shinySprite("666-san"), },
					{ name: "Savanna Pattern", img: baseSprite("666-sav"), imgS: shinySprite("666-sav"), },
					{ name: "Sun Pattern", img: baseSprite("666-sun"), imgS: shinySprite("666-sun"), },
					{ name: "Tundra Pattern", img: baseSprite("666-tun"), imgS: shinySprite("666-tun"), },
					{ name: "Fancy Pattern", img: baseSprite("666-fan"), imgS: shinySprite("666-fan"), },
					{ name: "Poke Ball Pattern", img: baseSprite("666-pok"), imgS: shinySprite("666-pok"), },],
			},
			{
				id: 38, natiId: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), }
				],
			},
			{ id: 39, natiId: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), },
			{ id: 40, natiId: 821, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), },
			{ id: 41, natiId: 822, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), },
			{ id: 42, natiId: 823, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), },
			{ id: 43, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 44, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 45, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{ id: 46, natiId: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 47, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 48, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{ id: 49, natiId: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 50, natiId: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{
				id: 51, natiId: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), }
				],
			},
			{
				id: 52, natiId: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), }
				],
			},
			{
				id: 53, natiId: 194, name: "Wooper", img: baseSprite("194-p"), imgS: shinySprite("194-p"), tags: ["gender"], forms: [
					{ name: "Johtonian Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Johtonian Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), },
					{ name: "Paldean", img: baseSprite("194-p"), imgS: shinySprite("194-p"), tags: ["paldean"], }
				],
			},
			{ id: 54, natiId: 980, name: "Clodsire", img: baseSprite(980), imgS: shinySprite(980), },
			{ id: 55, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 56, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 57, natiId: 833, name: "Chewtle", img: baseSprite(833), imgS: shinySprite(833), },
			{ id: 58, natiId: 834, name: "Drednaw", img: baseSprite(834), imgS: shinySprite(834), },
			{ id: 59, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 60, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 61, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 62, natiId: 280, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), },
			{ id: 63, natiId: 281, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), },
			{ id: 64, natiId: 282, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), },
			{ id: 65, natiId: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 66, natiId: 96, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 67, natiId: 97, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), }
				],
			},
			{ id: 68, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), },
			{ id: 69, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), },
			{ id: 70, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), },
			{ id: 71, natiId: 924, name: "Tandemaus", img: baseSprite(924), imgS: shinySprite(924), },
			{
				id: 72, natiId: 925, name: "Maushold", img: baseSprite(925), imgS: shinySprite(925), tags: ["other"], forms: [
					{ name: "Family of Four", img: baseSprite(925), imgS: shinySprite(925), },
					{ name: "Family of Three", img: baseSprite("925-3"), imgS: shinySprite("925-3"), }
				],
			},
			{ id: 73, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{
				id: 74, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender", "other"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), tags: ["mythical"], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), tags: ["mythical"], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), tags: ["mythical"], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), tags: ["mythical"], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), tags: ["mythical"], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), tags: ["mythical"], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), tags: ["mythical"], },
					{ name: "World Cap", img: baseSprite("025-w"), imgS: shinySprite("025-w"), tags: ["mythical"], }
				],
			},
			{
				id: 75, natiId: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), tags: ["alolan"], }
				],
			},
			{ id: 76, natiId: 926, name: "Fidough", img: baseSprite(926), imgS: shinySprite(926), },
			{ id: 77, natiId: 927, name: "Dachsbun", img: baseSprite(927), imgS: shinySprite(927), },
			{ id: 78, natiId: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), },
			{ id: 79, natiId: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), },
			{ id: 80, natiId: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), },
			{ id: 81, natiId: 761, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), },
			{ id: 82, natiId: 762, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), },
			{ id: 83, natiId: 763, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), },
			{ id: 84, natiId: 928, name: "Smoliv", img: baseSprite(928), imgS: shinySprite(928), },
			{ id: 85, natiId: 929, name: "Dolliv", img: baseSprite(929), imgS: shinySprite(929), },
			{ id: 86, natiId: 930, name: "Arboliva", img: baseSprite(930), imgS: shinySprite(930), },
			{ id: 87, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), },
			{
				id: 88, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), }
				],
			},
			{ id: 89, natiId: 744, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), },
			{
				id: 90, natiId: 745, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), tags: ["other"], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), },],
			},
			{ id: 91, natiId: 837, name: "Rolycoly", img: baseSprite(837), imgS: shinySprite(837), },
			{ id: 92, natiId: 838, name: "Carkol", img: baseSprite(838), imgS: shinySprite(838), },
			{ id: 93, natiId: 839, name: "Coalossal", img: baseSprite(839), imgS: shinySprite(839), },
			{
				id: 94, natiId: 403, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), }
				],
			},
			{
				id: 95, natiId: 404, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), }
				],
			},
			{
				id: 96, natiId: 405, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), }
				],
			},
			{
				id: 97, natiId: 396, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), }
				],
			},
			{
				id: 98, natiId: 397, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), }
				],
			},
			{
				id: 99, natiId: 398, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), }
				],
			},
			{
				id: 100, natiId: 741, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), tags: ["other"], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), }
				],
			},
			{ id: 101, natiId: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), },
			{ id: 102, natiId: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), },
			{ id: 103, natiId: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), },
			{ id: 104, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), },
			{
				id: 105, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), forms: [
					{ name: "Unovian", img: baseSprite(549), imgS: shinySprite(549), },
					{ name: "Hisuian", img: baseSprite("549-h"), imgS: shinySprite("549-h"), tags: ["hisuian"], }
				],
			},
			{ id: 106, natiId: 285, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), },
			{ id: 107, natiId: 286, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), },
			{ id: 108, natiId: 840, name: "Applin", img: baseSprite(840), imgS: shinySprite(840), },
			{ id: 109, natiId: 841, name: "Flapple", img: baseSprite(841), imgS: shinySprite(841), },
			{ id: 110, natiId: 842, name: "Appletun", img: baseSprite(842), imgS: shinySprite(842), },
			{ id: 111, natiId: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), },
			{ id: 112, natiId: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), },
			{
				id: 113, natiId: 931, name: "Squawkabilly", img: baseSprite(931), imgS: shinySprite(931), tags: ["other"], forms: [
					{ name: "Green Plumage", img: baseSprite(931), imgS: shinySprite(931), },
					{ name: "Blue Plumage", img: baseSprite("931-b"), imgS: shinySprite("931-b"), },
					{ name: "White Plumage", img: baseSprite("931-w"), imgS: shinySprite("931-w"), },
					{ name: "Yellow Plumage", img: baseSprite("931-y"), imgS: shinySprite("931-y"), }
				],
			},
			{ id: 114, natiId: 200, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{ id: 115, natiId: 429, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{ id: 116, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 117, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 118, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 119, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{ id: 120, natiId: 757, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), },
			{ id: 121, natiId: 758, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), },
			{ id: 122, natiId: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 123, natiId: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), }
				],
			},
			{ id: 124, natiId: 878, name: "Cufant", img: baseSprite(878), imgS: shinySprite(878), },
			{ id: 125, natiId: 879, name: "Copperajah", img: baseSprite(879), imgS: shinySprite(879), },
			{
				id: 126, natiId: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), }
				],
			},
			{
				id: 127, natiId: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), }
				],
			},
			{
				id: 128, natiId: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },],
			},
			{ id: 129, natiId: 932, name: "Nacli", img: baseSprite(932), imgS: shinySprite(932), },
			{ id: 130, natiId: 933, name: "Naclstack", img: baseSprite(933), imgS: shinySprite(933), },
			{ id: 131, natiId: 934, name: "Garganacl", img: baseSprite(934), imgS: shinySprite(934), },
			{ id: 132, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 133, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{
				id: 134, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), }
				],
			},
			{
				id: 135, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },],
			},
			{ id: 136, natiId: 846, name: "Arrokuda", img: baseSprite(846), imgS: shinySprite(846), },
			{ id: 137, natiId: 847, name: "Barraskewda", img: baseSprite(847), imgS: shinySprite(847), },
			{
				id: 138, natiId: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), tags: ["other"], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), },
					{ name: "White-Striped", img: baseSprite("550-w"), imgS: shinySprite("550-w"), }
				],
			},
			{
				id: 139, natiId: 316, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), }
				],
			},
			{
				id: 140, natiId: 317, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), }
				],
			},
			{
				id: 141, natiId: 52, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), tags: ["gender"], forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), tags: ["alolan"], },
					{ name: "Galarian", img: baseSprite("052-g"), imgS: shinySprite("052-g"), tags: ["galarian"], }
				],
			},
			{
				id: 142, natiId: 53, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), tags: ["alolan"], }
				],
			},
			{ id: 143, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 144, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{
				id: 145, natiId: 669, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), },],
			},
			{
				id: 146, natiId: 670, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), },],
			},
			{
				id: 147, natiId: 671, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), tags: ["other"], forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), },],
			},
			{
				id: 148, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), }
				],
			},
			{
				id: 149, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), }
				],
			},
			{ id: 150, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{
				id: 151, natiId: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), }
				],
			},
			{
				id: 152, natiId: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },],
			},
			{ id: 153, natiId: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), },
			{ id: 154, natiId: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), },
			{ id: 155, natiId: 610, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), },
			{ id: 156, natiId: 611, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), },
			{ id: 157, natiId: 612, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), },
			{ id: 158, natiId: 56, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 159, natiId: 57, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 160, natiId: 979, name: "Annihilape", img: baseSprite(979), imgS: shinySprite(979), },
			{
				id: 161, natiId: 307, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), }
				],
			},
			{
				id: 162, natiId: 308, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), },],
			},
			{ id: 163, natiId: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), },
			{ id: 164, natiId: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), },
			{ id: 165, natiId: 935, name: "Charcadet", img: baseSprite(935), imgS: shinySprite(935), },
			{ id: 166, natiId: 936, name: "Armarouge", img: baseSprite(936), imgS: shinySprite(936), },
			{ id: 167, natiId: 937, name: "Ceruledge", img: baseSprite(937), imgS: shinySprite(937), },
			{ id: 168, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 169, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 170, natiId: 938, name: "Tadbulb", img: baseSprite(938), imgS: shinySprite(938), },
			{ id: 171, natiId: 939, name: "Bellibolt", img: baseSprite(939), imgS: shinySprite(939), },
			{ id: 172, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), tags: ["pseudo"], },
			{
				id: 173, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), tags: ["pseudo"], forms: [
					{ name: "Kalosian", img: baseSprite(705), imgS: shinySprite(705), },
					{ name: "Hisuian", img: baseSprite("705-h"), imgS: shinySprite("705-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 174, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), tags: ["pseudo"], forms: [
					{ name: "Kalosian", img: baseSprite(706), imgS: shinySprite(706), },
					{ name: "Hisuian", img: baseSprite("706-h"), imgS: shinySprite("706-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 175, natiId: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), }
				],
			},
			{
				id: 176, natiId: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), }
				],
			},
			{ id: 177, natiId: 940, name: "Wattrel", img: baseSprite(940), imgS: shinySprite(940), },
			{ id: 178, natiId: 941, name: "Kilowattrel", img: baseSprite(941), imgS: shinySprite(941), },
			{
				id: 179, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(133), imgS: shinySprite(133), },
					{ name: "Female", img: baseSprite("133-f"), imgS: shinySprite("133-f"), },],
			},
			{ id: 180, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 181, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 182, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 183, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 184, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{ id: 185, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 186, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 187, natiId: 700, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), },
			{ id: 188, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), },
			{
				id: 189, natiId: 982, name: "Dudunsparce", img: baseSprite(982), imgS: shinySprite(982), tags: ["other"], forms: [
					{ name: "Three-Segment", img: baseSprite(982), imgS: shinySprite(982), },
					{ name: "Two-Segment", img: baseSprite("982-2"), imgS: shinySprite("982-2"), }
				],
			},
			{
				id: 190, natiId: 585, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), tags: ["other"], forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), }
				],
			},
			{
				id: 191, natiId: 586, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), tags: ["other"], forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), }
				],
			},
			{
				id: 192, natiId: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), }
				],
			},
			{ id: 193, natiId: 981, name: "Farigiraf", img: baseSprite(981), imgS: shinySprite(981), },
			{
				id: 194, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), tags: ["alolan"], }
				],
			},
			{
				id: 195, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), tags: ["alolan"], }
				],
			},
			{ id: 196, natiId: 942, name: "Maschiff", img: baseSprite(942), imgS: shinySprite(942), },
			{ id: 197, natiId: 943, name: "Mabosstiff", img: baseSprite(943), imgS: shinySprite(943), },
			{ id: 198, natiId: 848, name: "Toxel", img: baseSprite(848), imgS: shinySprite(848), },
			{
				id: 199, natiId: 849, name: "Toxtricity", img: baseSprite(849), imgS: shinySprite(849), tags: ["other"], forms: [
					{ name: "Amped", img: baseSprite("849-a"), imgS: shinySprite("849-a"), },
					{ name: "Low Key", img: baseSprite("849-l"), imgS: shinySprite("849-l"), }
				],
			},
			{ id: 200, natiId: 702, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), },
			{
				id: 201, natiId: 417, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), }
				],
			},
			{ id: 202, natiId: 944, name: "Shroodle", img: baseSprite(944), imgS: shinySprite(944), },
			{ id: 203, natiId: 945, name: "Grafaiai", img: baseSprite(945), imgS: shinySprite(945), },
			{ id: 204, natiId: 234, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), },
			{ id: 205, natiId: 590, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), },
			{ id: 206, natiId: 591, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), },
			{
				id: 207, natiId: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), forms: [
					{ name: "Kantonian", img: baseSprite(100), imgS: shinySprite(100), },
					{ name: "Hisuian", img: baseSprite("100-h"), imgS: shinySprite("100-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 208, natiId: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), forms: [
					{ name: "Kantonian", img: baseSprite(101), imgS: shinySprite(101), },
					{ name: "Hisuian", img: baseSprite("101-h"), imgS: shinySprite("101-h"), tags: ["hisuian"], }
				],
			},
			{ id: 209, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 210, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 211, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 212, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{
				id: 213, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), forms: [
					{ name: "Kantonian", img: baseSprite(58), imgS: shinySprite(58), },
					{ name: "Hisuian", img: baseSprite("058-h"), imgS: shinySprite("058-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 214, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), forms: [
					{ name: "Kantonian", img: baseSprite(59), imgS: shinySprite(59), },
					{ name: "Hisuian", img: baseSprite("059-h"), imgS: shinySprite("059-h"), tags: ["hisuian"], }
				],
			},
			{ id: 215, natiId: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), },
			{
				id: 216, natiId: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), }
				],
			},
			{ id: 217, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 218, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 219, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 220, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 221, natiId: 672, name: "Skiddo", img: baseSprite(672), imgS: shinySprite(672), },
			{ id: 222, natiId: 673, name: "Gogoat", img: baseSprite(673), imgS: shinySprite(673), },
			{
				id: 223, natiId: 128, name: "Tauros", img: baseSprite("128-c"), imgS: shinySprite("128-c"), forms: [
					{ name: "Kantonian", img: baseSprite("128-a"), imgS: shinySprite("128-a"), },
					{ name: "Paldean (Aqua Breed)", img: baseSprite("128-a"), imgS: shinySprite("128-a"), tags: ["paldean"], },
					{ name: "Paldean (Blaze Breed)", img: baseSprite("128-b"), imgS: shinySprite("128-b"), tags: ["paldean"], },
					{ name: "Paldean (Combat Breed)", img: baseSprite("128-c"), imgS: shinySprite("128-c"), tags: ["paldean"], }
				],
			},
			{ id: 224, natiId: 667, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), },
			{
				id: 225, natiId: 668, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), }
				],
			},
			{ id: 226, natiId: 434, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), },
			{ id: 227, natiId: 435, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), },
			{
				id: 228, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), forms: [
					{ name: "Unovian", img: baseSprite(570), imgS: shinySprite(570), },
					{ name: "Hisuian", img: baseSprite("570-h"), imgS: shinySprite("570-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 229, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), forms: [
					{ name: "Unovian", img: baseSprite(571), imgS: shinySprite(571), },
					{ name: "Hisuian", img: baseSprite("571-h"), imgS: shinySprite("571-h"), tags: ["hisuian"], }
				],
			},
			{
				id: 230, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), tags: ["gender"], forms: [
					{ name: "Johtonian Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Johtonian Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
					{ name: "Hisuian Male", img: baseSprite("215-h"), imgS: shinySprite("215-h"), tags: ["hisuian"], },
					{ name: "Hisuian Female", img: baseSprite("215-h-f"), imgS: shinySprite("215-h-f"), tags: ["hisuian"], }
				],
			},
			{
				id: 231, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), }
				],
			},
			{
				id: 232, natiId: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), }
				],
			},
			{ id: 233, natiId: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), },
			{ id: 234, natiId: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), },
			{ id: 235, natiId: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), },
			{ id: 236, natiId: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), },
			{
				id: 237, natiId: 854, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), tags: ["other"], forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), },]
			},
			{
				id: 238, natiId: 855, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), tags: ["other"], forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), },]
			},
			{ id: 239, natiId: 778, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), },
			{ id: 240, natiId: 707, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), },
			{
				id: 241, natiId: 876, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), }
				],
			},
			{ id: 242, natiId: 946, name: "Bramblin", img: baseSprite(946), imgS: shinySprite(946), },
			{ id: 243, natiId: 947, name: "Brambleghast", img: baseSprite(947), imgS: shinySprite(947), },
			{ id: 244, natiId: 948, name: "Toedscool", img: baseSprite(948), imgS: shinySprite(948), },
			{ id: 245, natiId: 949, name: "Toedscruel", img: baseSprite(949), imgS: shinySprite(949), },
			{ id: 246, natiId: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 247, natiId: 753, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), },
			{ id: 248, natiId: 754, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), },
			{ id: 249, natiId: 950, name: "Klawf", img: baseSprite(950), imgS: shinySprite(950), },
			{ id: 250, natiId: 951, name: "Capsakid", img: baseSprite(951), imgS: shinySprite(951), },
			{ id: 251, natiId: 952, name: "Scovillain", img: baseSprite(952), imgS: shinySprite(952), },
			{ id: 252, natiId: 331, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), },
			{
				id: 253, natiId: 332, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), }
				],
			},
			{ id: 254, natiId: 953, name: "Rellor", img: baseSprite(953), imgS: shinySprite(953), },
			{ id: 255, natiId: 954, name: "Rabsca", img: baseSprite(954), imgS: shinySprite(954), },
			{ id: 256, natiId: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), },
			{ id: 257, natiId: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), },
			{ id: 258, natiId: 204, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), },
			{ id: 259, natiId: 205, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), },
			{
				id: 260, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), }
				],
			},
			{
				id: 261, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },],
			},
			{
				id: 262, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },],
			},
			{ id: 263, natiId: 955, name: "Flittle", img: baseSprite(955), imgS: shinySprite(955), },
			{ id: 264, natiId: 956, name: "Espathra", img: baseSprite(956), imgS: shinySprite(956), },
			{
				id: 265, natiId: 449, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), }
				],
			},
			{
				id: 266, natiId: 450, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), }
				],
			},
			{ id: 267, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), },
			{ id: 268, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), },
			{ id: 269, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), },
			{ id: 270, natiId: 843, name: "Silicobra", img: baseSprite(843), imgS: shinySprite(843), },
			{ id: 271, natiId: 844, name: "Sandaconda", img: baseSprite(844), imgS: shinySprite(844), },
			{ id: 272, natiId: 749, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), },
			{ id: 273, natiId: 750, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), },
			{ id: 274, natiId: 636, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), },
			{ id: 275, natiId: 637, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), },
			{ id: 276, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), tags: ["pseudo"], },
			{ id: 277, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), tags: ["pseudo"], },
			{ id: 278, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), tags: ["pseudo"], },
			{ id: 279, natiId: 957, name: "Tinkatink", img: baseSprite(957), imgS: shinySprite(957), },
			{ id: 280, natiId: 958, name: "Tinkatuff", img: baseSprite(958), imgS: shinySprite(958), },
			{ id: 281, natiId: 959, name: "Tinkaton", img: baseSprite(959), imgS: shinySprite(959), },
			{ id: 282, natiId: 856, name: "Hatenna", img: baseSprite(856), imgS: shinySprite(856), },
			{ id: 283, natiId: 857, name: "Hattrem", img: baseSprite(857), imgS: shinySprite(857), },
			{ id: 284, natiId: 858, name: "Hatterene", img: baseSprite(858), imgS: shinySprite(858), },
			{ id: 285, natiId: 859, name: "Impidimp", img: baseSprite(859), imgS: shinySprite(859), },
			{ id: 286, natiId: 860, name: "Morgrem", img: baseSprite(860), imgS: shinySprite(860), },
			{ id: 287, natiId: 861, name: "Grimmsnarl", img: baseSprite(861), imgS: shinySprite(861), },
			{ id: 288, natiId: 960, name: "Wiglett", img: baseSprite(960), imgS: shinySprite(960), },
			{ id: 289, natiId: 961, name: "Wugtrio", img: baseSprite(961), imgS: shinySprite(961), },
			{ id: 290, natiId: 962, name: "Bombirdier", img: baseSprite(962), imgS: shinySprite(962), },
			{ id: 291, natiId: 963, name: "Finizen", img: baseSprite(963), imgS: shinySprite(963), },
			{ id: 292, natiId: 964, name: "Palafin", img: baseSprite(964), imgS: shinySprite(964), },
			{ id: 293, natiId: 965, name: "Varoom", img: baseSprite(965), imgS: shinySprite(965), },
			{ id: 294, natiId: 966, name: "Revavroom", img: baseSprite(966), imgS: shinySprite(966), },
			{ id: 295, natiId: 967, name: "Cyclizar", img: baseSprite(967), imgS: shinySprite(967), },
			{ id: 296, natiId: 968, name: "Orthworm", img: baseSprite(968), imgS: shinySprite(968), },
			{ id: 297, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 298, natiId: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 299, natiId: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), },
			{ id: 300, natiId: 870, name: "Falinks", img: baseSprite(870), imgS: shinySprite(870), },
			{ id: 301, natiId: 701, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701), },
			{ id: 302, natiId: 442, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{ id: 303, natiId: 714, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), },
			{ id: 304, natiId: 715, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), },
			{ id: 305, natiId: 885, name: "Dreepy", img: baseSprite(885), imgS: shinySprite(885), tags: ["pseudo"], },
			{ id: 306, natiId: 886, name: "Drakloak", img: baseSprite(886), imgS: shinySprite(886), tags: ["pseudo"], },
			{ id: 307, natiId: 887, name: "Dragapult", img: baseSprite(887), imgS: shinySprite(887), tags: ["pseudo"], },
			{ id: 308, natiId: 969, name: "Glimmet", img: baseSprite(969), imgS: shinySprite(969), },
			{ id: 309, natiId: 970, name: "Glimmora", img: baseSprite(970), imgS: shinySprite(970), },
			{
				id: 310, natiId: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), }
				],
			},
			{ id: 311, natiId: 971, name: "Greavard", img: baseSprite(971), imgS: shinySprite(971), },
			{ id: 312, natiId: 972, name: "Houndstone", img: baseSprite(972), imgS: shinySprite(972), },
			{ id: 313, natiId: 765, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), },
			{ id: 314, natiId: 766, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), },
			{ id: 315, natiId: 775, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), },
			{ id: 316, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), tags: ["pseudo"], },
			{ id: 317, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), tags: ["pseudo"], },
			{ id: 318, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), tags: ["pseudo"], },
			{ id: 319, natiId: 874, name: "Stonjourner", img: baseSprite(874), imgS: shinySprite(874), },
			{ id: 320, natiId: 875, name: "Eiscue", img: baseSprite(875), imgS: shinySprite(875), },
			{ id: 321, natiId: 871, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), },
			{ id: 322, natiId: 769, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 323, natiId: 770, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{
				id: 324, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), tags: ["galarian"], }
				],
			},
			{
				id: 325, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), tags: ["galarian"], },],
			},
			{
				id: 326, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), tags: ["galarian"], }
				],
			},
			{
				id: 327, natiId: 422, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), tags: ["other"], forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), },],
			},
			{
				id: 328, natiId: 423, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), tags: ["other"], forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), },],
			},
			{ id: 329, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 330, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{
				id: 331, natiId: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), forms: [
					{ name: "Johtonian", img: baseSprite(211), imgS: shinySprite(211), },
					{ name: "Hisuian", img: baseSprite("211-h"), imgS: shinySprite("211-h"), tags: ["hisuian"], }
				],
			},
			{ id: 332, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{
				id: 333, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), }
				],
			},
			{
				id: 334, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), }
				],
			},
			{ id: 335, natiId: 779, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), },
			{ id: 336, natiId: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), },
			{ id: 337, natiId: 690, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), },
			{ id: 338, natiId: 691, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), },
			{ id: 339, natiId: 692, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), },
			{ id: 340, natiId: 693, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), },
			{ id: 341, natiId: 602, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), },
			{ id: 342, natiId: 603, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), },
			{ id: 343, natiId: 604, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), },
			{ id: 344, natiId: 747, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), },
			{ id: 345, natiId: 748, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), },
			{ id: 346, natiId: 973, name: "Flamigo", img: baseSprite(973), imgS: shinySprite(973), },
			{ id: 347, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["pseudo"], },
			{ id: 348, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["pseudo"], },
			{ id: 349, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["pseudo"], },
			{ id: 350, natiId: 872, name: "Snom", img: baseSprite(872), imgS: shinySprite(872), },
			{ id: 351, natiId: 873, name: "Frosmoth", img: baseSprite(873), imgS: shinySprite(873), },
			{
				id: 352, natiId: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), }
				],
			},
			{
				id: 353, natiId: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), },],
			},
			{ id: 354, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 355, natiId: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), },
			{ id: 356, natiId: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), },
			{ id: 357, natiId: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 358, natiId: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), },
			{ id: 359, natiId: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{ id: 360, natiId: 615, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), },
			{ id: 361, natiId: 974, name: "Cetoddle", img: baseSprite(974), imgS: shinySprite(974), },
			{ id: 362, natiId: 975, name: "Cetitan", img: baseSprite(975), imgS: shinySprite(975), },
			{ id: 363, natiId: 712, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712), },
			{
				id: 364, natiId: 713, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713), forms: [
					{ name: "Kalosian", img: baseSprite(713), imgS: shinySprite(713), },
					{ name: "Hisuian", img: baseSprite("713-h"), imgS: shinySprite("713-h"), tags: ["hisuian"], }
				],
			},
			{ id: 365, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), },
			{
				id: 366, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), forms: [
					{ name: "Unovian", img: baseSprite(628), imgS: shinySprite(628), },
					{ name: "Hisuian", img: baseSprite("628-h"), imgS: shinySprite("628-h"), tags: ["hisuian"], }
				],
			},
			{ id: 367, natiId: 624, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), },
			{ id: 368, natiId: 625, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), },
			{ id: 369, natiId: 983, name: "Kingambit", img: baseSprite(983), imgS: shinySprite(983), },
			{ id: 370, natiId: 633, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), tags: ["pseudo"], },
			{ id: 371, natiId: 634, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), tags: ["pseudo"], },
			{ id: 372, natiId: 635, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), tags: ["pseudo"], },
			{ id: 373, natiId: 976, name: "Veluza", img: baseSprite(976), imgS: shinySprite(976), },
			{ id: 374, natiId: 977, name: "Dondozo", img: baseSprite(977), imgS: shinySprite(977), },
			{
				id: 375, natiId: 978, name: "Tatsugiri", img: baseSprite(978), imgS: shinySprite(978), tags: ["other"], forms: [
					{ name: "Curly", img: baseSprite(978), imgS: shinySprite(978), },
					{ name: "Droopy", img: baseSprite("978-d"), imgS: shinySprite("978-d"), },
					{ name: "Stretchy", img: baseSprite("978-s"), imgS: shinySprite("978-s"), }
				],
			},
			{ id: 376, natiId: 984, name: "Great Tusk", img: baseSprite(984), imgS: shinySprite(984), tags: ["paradox"], },
			{ id: 377, natiId: 985, name: "Scream Tail", img: baseSprite(985), imgS: shinySprite(985), tags: ["paradox"], },
			{ id: 378, natiId: 986, name: "Brute Bonnet", img: baseSprite(986), imgS: shinySprite(986), tags: ["paradox"], },
			{ id: 379, natiId: 987, name: "Flutter Mane", img: baseSprite(987), imgS: shinySprite(987), tags: ["paradox"], },
			{ id: 380, natiId: 988, name: "Slither Wing", img: baseSprite(988), imgS: shinySprite(988), tags: ["paradox"], },
			{ id: 381, natiId: 989, name: "Sandy Shocks", img: baseSprite(989), imgS: shinySprite(989), tags: ["paradox"], },
			{ id: 382, natiId: 990, name: "Iron Treads", img: baseSprite(990), imgS: shinySprite(990), tags: ["paradox"], },
			{ id: 383, natiId: 991, name: "Iron Bundle", img: baseSprite(991), imgS: shinySprite(991), tags: ["paradox"], },
			{ id: 384, natiId: 992, name: "Iron Hands", img: baseSprite(992), imgS: shinySprite(992), tags: ["paradox"], },
			{ id: 385, natiId: 993, name: "Iron Jugulis", img: baseSprite(993), imgS: shinySprite(993), tags: ["paradox"], },
			{ id: 386, natiId: 994, name: "Iron Moth", img: baseSprite(994), imgS: shinySprite(994), tags: ["paradox"], },
			{ id: 387, natiId: 995, name: "Iron Thorns", img: baseSprite(995), imgS: shinySprite(995), tags: ["paradox"], },
			{ id: 388, natiId: 996, name: "Frigibax", img: baseSprite(996), imgS: shinySprite(996), tags: ["pseudo"], },
			{ id: 389, natiId: 997, name: "Arctibax", img: baseSprite(997), imgS: shinySprite(997), tags: ["pseudo"], },
			{ id: 390, natiId: 998, name: "Baxcalibur", img: baseSprite(998), imgS: shinySprite(998), tags: ["pseudo"], },
			{
				id: 391, natiId: 999, name: "Gimmighoul", img: baseSprite(999), imgS: shinySprite(999), tags: ["other"], forms: [
					{ name: "Chest", img: baseSprite(999), imgS: shinySprite(999), },
					{ name: "Roaming", img: baseSprite("999-r"), imgS: shinySprite("999-r"), }
				],
			},
			{ id: 392, natiId: 1000, name: "Gholdengo", img: baseSprite(1000), imgS: shinySprite(1000), },
			{ id: 393, natiId: 1001, name: "Wo-Chien", img: baseSprite(1001), imgS: shinySprite(1001), tags: ["legendary"], },
			{ id: 394, natiId: 1002, name: "Chien-Pao", img: baseSprite(1002), imgS: shinySprite(1002), tags: ["legendary"], },
			{ id: 395, natiId: 1003, name: "Ting-Lu", img: baseSprite(1003), imgS: shinySprite(1003), tags: ["legendary"], },
			{ id: 396, natiId: 1004, name: "Chi-Yu", img: baseSprite(1004), imgS: shinySprite(1004), tags: ["legendary"], },
			{ id: 397, natiId: 1005, name: "Roaring Moon", img: baseSprite(1005), imgS: shinySprite(1005), tags: ["paradox"], },
			{ id: 398, natiId: 1006, name: "Iron Valiant", img: baseSprite(1006), imgS: shinySprite(1006), tags: ["paradox"], },
			{ id: 399, natiId: 1007, name: "Koraidon", img: baseSprite(1007), imgS: shinySprite(1007), tags: ["legendary"], },
			{ id: 400, natiId: 1008, name: "Miraidon", img: baseSprite(1008), imgS: shinySprite(1008), tags: ["legendary"], }
		],
	},
});