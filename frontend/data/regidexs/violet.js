const game = "violet";
const sub = game + "";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const paldeaDex = (...args) => _dex(game, "regional", ...args);
const tmDex = (...args) => _dex(game + "tm", "regional", ...args);
const idDex = (...args) => _dex(game + "id", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Paldea Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Sprigatito", img: baseSprite(906), imgS: shinySprite(906), },
			{ id: 2, name: "Floragato", img: baseSprite(907), imgS: shinySprite(907), },
			{ id: 3, name: "Meowscarada", img: baseSprite(908), imgS: shinySprite(908), },
			{ id: 4, name: "Fuecoco", img: baseSprite(909), imgS: shinySprite(909), },
			{ id: 5, name: "Crocalor", img: baseSprite(910), imgS: shinySprite(910), },
			{ id: 6, name: "Skeledirge", img: baseSprite(911), imgS: shinySprite(911), },
			{ id: 7, name: "Quaxly", img: baseSprite(912), imgS: shinySprite(912), },
			{ id: 8, name: "Quaxwell", img: baseSprite(913), imgS: shinySprite(913), },
			{ id: 9, name: "Quaquaval", img: baseSprite(914), imgS: shinySprite(914), },
			{ id: 10, name: "Lechonk", img: baseSprite(915), imgS: shinySprite(915), },
			{
				id: 11, name: "Oinkologne", img: baseSprite(916), imgS: shinySprite(916), forms: [
					{ name: "Male", img: baseSprite(916), imgS: shinySprite(916), },
					{ name: "Female", img: baseSprite("916-f"), imgS: shinySprite("916-f"), }
				],
			},
			{ id: 12, name: "Tarountula", img: baseSprite(917), imgS: shinySprite(917), },
			{ id: 13, name: "Spidops", img: baseSprite(918), imgS: shinySprite(918), },
			{ id: 14, name: "Nymble", img: baseSprite(919), imgS: shinySprite(919), },
			{ id: 15, name: "Lokix", img: baseSprite(920), imgS: shinySprite(920), },
			{ id: 16, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), },
			{ id: 17, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), },
			{ id: 18, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), },
			{ id: 19, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [idDex(87)], },
			{ id: 20, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [idDex(88)], },
			{ id: 21, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [idDex(89)], },
			{ id: 22, name: "Pawmi", img: baseSprite(921), imgS: shinySprite(921), },
			{ id: 23, name: "Pawmo", img: baseSprite(922), imgS: shinySprite(922), },
			{ id: 24, name: "Pawmot", img: baseSprite(923), imgS: shinySprite(923), },
			{ id: 25, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228), dexSync: [tmDex(123)], },
			{
				id: 26, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), dexSync: [tmDex(124)], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), dexSync: [tmDex(124)], },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), dexSync: [tmDex(124)], },],
			},
			{ id: 27, name: "Yungoos", img: baseSprite(734), imgS: shinySprite(734), },
			{ id: 28, name: "Gumshoos", img: baseSprite(735), imgS: shinySprite(735), },
			{ id: 29, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), dexSync: [tmDex(72)], },
			{ id: 30, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), dexSync: [tmDex(73)], },
			{ id: 31, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191), },
			{ id: 32, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192), },
			{
				id: 33, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), dexSync: [tmDex(61)], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), dexSync: [tmDex(61)], },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), dexSync: [tmDex(61)], }
				],
			},
			{
				id: 34, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), dexSync: [tmDex(62)], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), dexSync: [tmDex(62)], },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), dexSync: [tmDex(62)], }
				],
			},
			{ id: 35, name: "Scatterbug", img: baseSprite(664), imgS: shinySprite(664), },
			{ id: 36, name: "Spewpa", img: baseSprite(665), imgS: shinySprite(665), },
			{
				id: 37, name: "Vivillon", img: baseSprite(666), imgS: shinySprite(666), forms: [
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
				id: 38, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), }
				],
			},
			{ id: 39, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), },
			{ id: 40, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), },
			{ id: 41, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), },
			{ id: 42, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), },
			{ id: 43, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [idDex(16)], },
			{ id: 44, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [idDex(17)], },
			{ id: 45, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [idDex(18)], },
			{ id: 46, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 47, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 48, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{ id: 49, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: [tmDex(149)], },
			{ id: 50, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: [tmDex(150)], },
			{
				id: 51, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), }
				],
			},
			{
				id: 52, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), }
				],
			},
			{
				id: 53, name: "Wooper", img: baseSprite("194-p"), imgS: shinySprite("194-p"), dexSync: [tmDex(5)], forms: [
					{ name: "Johtonian Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: [tmDex(5)], },
					{ name: "Johtonian Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: [tmDex(5)], },
					{ name: "Paldean", img: baseSprite("194-p"), imgS: shinySprite("194-p"), dexSync: [tmDex(5)], }
				],
			},
			{ id: 54, name: "Clodsire", img: baseSprite(980), imgS: shinySprite(980), },
			{ id: 55, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 56, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 57, name: "Chewtle", img: baseSprite(833), imgS: shinySprite(833), dexSync: [tmDex(183)], },
			{ id: 58, name: "Drednaw", img: baseSprite(834), imgS: shinySprite(834), dexSync: [tmDex(184)], },
			{ id: 59, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 60, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 61, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 62, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), dexSync: [tmDex(57)], },
			{ id: 63, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), dexSync: [tmDex(58)], },
			{ id: 64, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), dexSync: [tmDex(59)], },
			{ id: 65, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), dexSync: [tmDex(60)], },
			{ id: 66, name: "Drowzee", img: baseSprite(96), imgS: shinySprite(96), },
			{
				id: 67, name: "Hypno", img: baseSprite(97), imgS: shinySprite(97), forms: [
					{ name: "Male", img: baseSprite(97), imgS: shinySprite(97), },
					{ name: "Female", img: baseSprite("097-f"), imgS: shinySprite("097-f"), }
				],
			},
			{ id: 68, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [tmDex(118)], },
			{ id: 69, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [tmDex(119)], },
			{ id: 70, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [tmDex(120)], },
			{ id: 71, name: "Tandemaus", img: baseSprite(924), imgS: shinySprite(924), dexSync: [tmDex(97)], },
			{
				id: 72, name: "Maushold", img: baseSprite(925), imgS: shinySprite(925), dexSync: [tmDex(98)], forms: [
					{ name: "Family of Four", img: baseSprite(925), imgS: shinySprite(925), dexSync: [tmDex(98)], },
					{ name: "Family of Three", img: baseSprite("925-3"), imgS: shinySprite("925-3"), dexSync: [tmDex(98)], }
				],
			},
			{ id: 73, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [tmDex(20)], },
			{
				id: 74, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [tmDex(21)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: [tmDex(21)], },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: [tmDex(21)], },
					{ name: "Alola Cap", img: baseSprite("025-a"), imgS: shinySprite("025-a"), dexSync: [tmDex(21)], },
					{ name: "Hoenn Cap", img: baseSprite("025-h"), imgS: shinySprite("025-h"), dexSync: [tmDex(21)], },
					{ name: "Kalos Cap", img: baseSprite("025-k"), imgS: shinySprite("025-k"), dexSync: [tmDex(21)], },
					{ name: "Original Cap", img: baseSprite("025-o"), imgS: shinySprite("025-o"), dexSync: [tmDex(21)], },
					{ name: "Partner Cap", img: baseSprite("025-p"), imgS: shinySprite("025-p"), dexSync: [tmDex(21)], },
					{ name: "Sinnoh Cap", img: baseSprite("025-s"), imgS: shinySprite("025-s"), dexSync: [tmDex(21)], },
					{ name: "Unova Cap", img: baseSprite("025-u"), imgS: shinySprite("025-u"), dexSync: [tmDex(21)], },
					{ name: "World Cap", img: baseSprite("025-w"), imgS: shinySprite("025-w"), dexSync: [tmDex(21)], }
				],
			},
			{
				id: 75, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: [tmDex(22)], forms: [
					{ name: "Kantonian Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: [tmDex(22)], },
					{ name: "Kantonian Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: [tmDex(22)], },
					{ name: "Alolan", img: baseSprite("026-a"), imgS: shinySprite("026-a"), dexSync: [tmDex(22)], }
				],
			},
			{ id: 76, name: "Fidough", img: baseSprite(926), imgS: shinySprite(926), },
			{ id: 77, name: "Dachsbun", img: baseSprite(927), imgS: shinySprite(927), },
			{ id: 78, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), dexSync: [idDex(59)], },
			{ id: 79, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), dexSync: [idDex(60)], },
			{ id: 80, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), dexSync: [idDex(61)], },
			{ id: 81, name: "Bounsweet", img: baseSprite(761), imgS: shinySprite(761), },
			{ id: 82, name: "Steenee", img: baseSprite(762), imgS: shinySprite(762), },
			{ id: 83, name: "Tsareena", img: baseSprite(763), imgS: shinySprite(763), },
			{ id: 84, name: "Smoliv", img: baseSprite(928), imgS: shinySprite(928), },
			{ id: 85, name: "Dolliv", img: baseSprite(929), imgS: shinySprite(929), },
			{ id: 86, name: "Arboliva", img: baseSprite(930), imgS: shinySprite(930), },
			{ id: 87, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [tmDex(83)], },
			{
				id: 88, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [tmDex(84)], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: [tmDex(84)], },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: [tmDex(84)], }
				],
			},
			{ id: 89, name: "Rockruff", img: baseSprite(744), imgS: shinySprite(744), dexSync: [tmDex(70)], },
			{
				id: 90, name: "Lycanroc", img: baseSprite(745), imgS: shinySprite(745), dexSync: [tmDex(71)], forms: [
					{ name: "Midday", img: baseSprite(745), imgS: shinySprite(745), dexSync: [tmDex(71)], },
					{ name: "Midnight", img: baseSprite("745-m"), imgS: shinySprite("745-m"), dexSync: [tmDex(71)], },
					{ name: "Dusk", img: baseSprite("745-d"), imgS: shinySprite("745-d"), dexSync: [tmDex(71)], },],
			},
			{ id: 91, name: "Rolycoly", img: baseSprite(837), imgS: shinySprite(837), },
			{ id: 92, name: "Carkol", img: baseSprite(838), imgS: shinySprite(838), },
			{ id: 93, name: "Coalossal", img: baseSprite(839), imgS: shinySprite(839), },
			{
				id: 94, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), dexSync: [tmDex(109)], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), dexSync: [tmDex(109)], },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), dexSync: [tmDex(109)], }
				],
			},
			{
				id: 95, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), dexSync: [tmDex(110)], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), dexSync: [tmDex(110)], },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), dexSync: [tmDex(110)], }
				],
			},
			{
				id: 96, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), dexSync: [tmDex(111)], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), dexSync: [tmDex(111)], },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), dexSync: [tmDex(111)], }
				],
			},
			{
				id: 97, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), dexSync: [tmDex(28)], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), dexSync: [tmDex(28)], },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), dexSync: [tmDex(28)], }
				],
			},
			{
				id: 98, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), dexSync: [tmDex(29)], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), dexSync: [tmDex(29)], },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), dexSync: [tmDex(29)], }
				],
			},
			{
				id: 99, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), dexSync: [tmDex(30)], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), dexSync: [tmDex(30)], },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), dexSync: [tmDex(30)], }
				],
			},
			{
				id: 100, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [tmDex(115), idDex(74)], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [tmDex(115), idDex(74)], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [tmDex(115), idDex(74)], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [tmDex(115), idDex(74)], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [tmDex(115), idDex(74)], }
				],
			},
			{ id: 101, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179), },
			{ id: 102, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180), },
			{ id: 103, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), },
			{ id: 104, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548), dexSync: [tmDex(66)], },
			{
				id: 105, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549), dexSync: [tmDex(67)], forms: [
					{ name: "Unovian", img: baseSprite(549), imgS: shinySprite(549), dexSync: [tmDex(67)], },
					{ name: "Hisuian", img: baseSprite("549-h"), imgS: shinySprite("549-h"), dexSync: [tmDex(67)], }
				],
			},
			{ id: 106, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), },
			{ id: 107, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), },
			{ id: 108, name: "Applin", img: baseSprite(840), imgS: shinySprite(840), dexSync: [tmDex(33)], },
			{ id: 109, name: "Flapple", img: baseSprite(841), imgS: shinySprite(841), dexSync: [tmDex(34)], },
			{ id: 110, name: "Appletun", img: baseSprite(842), imgS: shinySprite(842), dexSync: [tmDex(35)], },
			{ id: 111, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), dexSync: [tmDex(125)], },
			{ id: 112, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), dexSync: [tmDex(126)], },
			{
				id: 113, name: "Squawkabilly", img: baseSprite(931), imgS: shinySprite(931), forms: [
					{ name: "Green Plumage", img: baseSprite(931), imgS: shinySprite(931), },
					{ name: "Blue Plumage", img: baseSprite("931-b"), imgS: shinySprite("931-b"), },
					{ name: "White Plumage", img: baseSprite("931-w"), imgS: shinySprite("931-w"), },
					{ name: "Yellow Plumage", img: baseSprite("931-y"), imgS: shinySprite("931-y"), }
				],
			},
			{ id: 114, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), },
			{ id: 115, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), },
			{ id: 116, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 117, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{ id: 118, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [idDex(72)], },
			{ id: 119, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [idDex(73)], },
			{ id: 120, name: "Salandit", img: baseSprite(757), imgS: shinySprite(757), dexSync: [tmDex(168)], },
			{ id: 121, name: "Salazzle", img: baseSprite(758), imgS: shinySprite(758), dexSync: [tmDex(169)], },
			{ id: 122, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 123, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), }
				],
			},
			{ id: 124, name: "Cufant", img: baseSprite(878), imgS: shinySprite(878), },
			{ id: 125, name: "Copperajah", img: baseSprite(879), imgS: shinySprite(879), },
			{
				id: 126, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [tmDex(164)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: [tmDex(164)], },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: [tmDex(164)], }
				],
			},
			{
				id: 127, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [tmDex(165)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: [tmDex(165)], },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: [tmDex(165)], }
				],
			},
			{
				id: 128, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [tmDex(166)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: [tmDex(166)], },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: [tmDex(166)], },],
			},
			{ id: 129, name: "Nacli", img: baseSprite(932), imgS: shinySprite(932), },
			{ id: 130, name: "Naclstack", img: baseSprite(933), imgS: shinySprite(933), },
			{ id: 131, name: "Garganacl", img: baseSprite(934), imgS: shinySprite(934), },
			{ id: 132, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 133, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{
				id: 134, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [tmDex(43)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [tmDex(43)], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [tmDex(43)], }
				],
			},
			{
				id: 135, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [tmDex(44)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [tmDex(44)], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [tmDex(44)], },],
			},
			{ id: 136, name: "Arrokuda", img: baseSprite(846), imgS: shinySprite(846), dexSync: [tmDex(90)], },
			{ id: 137, name: "Barraskewda", img: baseSprite(847), imgS: shinySprite(847), dexSync: [tmDex(91)], },
			{
				id: 138, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [tmDex(194)], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [tmDex(194)], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [tmDex(194)], },
					{ name: "White-Striped", img: baseSprite("550-w"), imgS: shinySprite("550-w"), dexSync: [tmDex(194)], }
				],
			},
			{
				id: 139, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), }
				],
			},
			{
				id: 140, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), }
				],
			},
			{
				id: 141, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), },
					{ name: "Galarian", img: baseSprite("052-g"), imgS: shinySprite("052-g"), },],
			},
			{
				id: 142, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), }
				],
			},
			{ id: 143, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), },
			{ id: 144, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), },
			{
				id: 145, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), },],
			},
			{
				id: 146, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), },],
			},
			{
				id: 147, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), },],
			},
			{
				id: 148, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [idDex(66)], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [idDex(66)], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [idDex(66)], }
				],
			},
			{
				id: 149, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [idDex(67)], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [idDex(67)], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [idDex(67)], }
				],
			},
			{ id: 150, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [idDex(86)], },
			{
				id: 151, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), dexSync: [idDex(125)], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), dexSync: [idDex(125)], },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), dexSync: [idDex(125)], }
				],
			},
			{
				id: 152, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), dexSync: [idDex(126)], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), dexSync: [idDex(126)], },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), dexSync: [idDex(126)], },],
			},
			{ id: 153, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), dexSync: [tmDex(154)], },
			{ id: 154, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), dexSync: [tmDex(155)], },
			{ id: 155, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), dexSync: [idDex(140)], },
			{ id: 156, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), dexSync: [idDex(141)], },
			{ id: 157, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), dexSync: [idDex(142)], },
			{ id: 158, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), dexSync: [tmDex(99)], },
			{ id: 159, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), dexSync: [tmDex(100)], },
			{ id: 160, name: "Annihilape", img: baseSprite(979), imgS: shinySprite(979), dexSync: [tmDex(101)], },
			{
				id: 161, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), }
				],
			},
			{
				id: 162, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), },],
			},
			{ id: 163, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [tmDex(64)], },
			{ id: 164, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [tmDex(65)], },
			{ id: 165, name: "Charcadet", img: baseSprite(935), imgS: shinySprite(935), },
			{ id: 166, name: "Armarouge", img: baseSprite(936), imgS: shinySprite(936), },
			{ id: 167, name: "Ceruledge", img: baseSprite(937), imgS: shinySprite(937), },
			{ id: 168, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [tmDex(162)], },
			{ id: 169, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [tmDex(163)], },
			{ id: 170, name: "Tadbulb", img: baseSprite(938), imgS: shinySprite(938), },
			{ id: 171, name: "Bellibolt", img: baseSprite(939), imgS: shinySprite(939), },
			{ id: 172, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: [tmDex(178)], },
			{
				id: 173, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: [tmDex(179)], forms: [
					{ name: "Kalosian", img: baseSprite(705), imgS: shinySprite(705), dexSync: [tmDex(179)], },
					{ name: "Hisuian", img: baseSprite("705-h"), imgS: shinySprite("705-h"), dexSync: [tmDex(179)], }
				],
			},
			{
				id: 174, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: [tmDex(180)], forms: [
					{ name: "Kalosian", img: baseSprite(706), imgS: shinySprite(706), dexSync: [tmDex(180)], },
					{ name: "Hisuian", img: baseSprite("706-h"), imgS: shinySprite("706-h"), dexSync: [tmDex(180)], }
				],
			},
			{
				id: 175, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), }
				],
			},
			{
				id: 176, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), }
				],
			},
			{ id: 177, name: "Wattrel", img: baseSprite(940), imgS: shinySprite(940), },
			{ id: 178, name: "Kilowattrel", img: baseSprite(941), imgS: shinySprite(941), },
			{
				id: 179, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), forms: [
					{ name: "Male", img: baseSprite(133), imgS: shinySprite(133), },
					{ name: "Female", img: baseSprite("133-f"), imgS: shinySprite("133-f"), },],
			},
			{ id: 180, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 181, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 182, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 183, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 184, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{ id: 185, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 186, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 187, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), },
			{ id: 188, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: [tmDex(160)], },
			{
				id: 189, name: "Dudunsparce", img: baseSprite(982), imgS: shinySprite(982), dexSync: [tmDex(161)], forms: [
					{ name: "Three-Segment", img: baseSprite(982), imgS: shinySprite(982), dexSync: [tmDex(161)], },
					{ name: "Two-Segment", img: baseSprite("982-2"), imgS: shinySprite("982-2"), dexSync: [tmDex(161)], }
				],
			},
			{
				id: 190, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), dexSync: [idDex(38)], forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), dexSync: [idDex(38)], },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [idDex(38)], },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [idDex(38)], },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), dexSync: [idDex(38)], }
				],
			},
			{
				id: 191, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), dexSync: [idDex(39)], forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), dexSync: [idDex(39)], },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [idDex(39)], },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [idDex(39)], },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), dexSync: [idDex(39)], }
				],
			},
			{
				id: 192, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: [idDex(25)], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: [idDex(25)], },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: [idDex(25)], }
				],
			},
			{ id: 193, name: "Farigiraf", img: baseSprite(981), imgS: shinySprite(981), dexSync: [idDex(26)], },
			{
				id: 194, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), dexSync: [idDex(68)], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [idDex(68)], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [idDex(68)], }
				],
			},
			{
				id: 195, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), dexSync: [idDex(69)], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [idDex(69)], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [idDex(69)], }
				],
			},
			{ id: 196, name: "Maschiff", img: baseSprite(942), imgS: shinySprite(942), },
			{ id: 197, name: "Mabosstiff", img: baseSprite(943), imgS: shinySprite(943), },
			{ id: 198, name: "Toxel", img: baseSprite(848), imgS: shinySprite(848), },
			{
				id: 199, name: "Toxtricity", img: baseSprite(849), imgS: shinySprite(849), forms: [
					{ name: "Amped", img: baseSprite("849-a"), imgS: shinySprite("849-a"), },
					{ name: "Low Key", img: baseSprite("849-l"), imgS: shinySprite("849-l"), }
				],
			},
			{ id: 200, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702), },
			{
				id: 201, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), dexSync: [tmDex(63)], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), dexSync: [tmDex(63)], },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), dexSync: [tmDex(63)], }
				],
			},
			{ id: 202, name: "Shroodle", img: baseSprite(944), imgS: shinySprite(944), },
			{ id: 203, name: "Grafaiai", img: baseSprite(945), imgS: shinySprite(945), },
			{ id: 204, name: "Stantler", img: baseSprite(234), imgS: shinySprite(234), dexSync: [tmDex(53)], },
			{ id: 205, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), },
			{ id: 206, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), },
			{
				id: 207, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), forms: [
					{ name: "Kantonian", img: baseSprite(100), imgS: shinySprite(100), },
					{ name: "Hisuian Voltorb", img: baseSprite("100-h"), imgS: shinySprite("100-h"), }
				],
			},
			{
				id: 208, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), forms: [
					{ name: "Kantonian", img: baseSprite(101), imgS: shinySprite(101), },
					{ name: "Hisuian", img: baseSprite("101-h"), imgS: shinySprite("101-h"), }
				],
			},
			{ id: 209, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [idDex(117)], },
			{ id: 210, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [idDex(118)], },
			{ id: 211, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [idDex(119)], },
			{ id: 212, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), },
			{
				id: 213, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58), dexSync: [tmDex(78)], forms: [
					{ name: "Kantonian", img: baseSprite(58), imgS: shinySprite(58), dexSync: [tmDex(78)], },
					{ name: "Hisuian", img: baseSprite("058-h"), imgS: shinySprite("058-h"), dexSync: [tmDex(78)], }
				],
			},
			{
				id: 214, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59), dexSync: [tmDex(79)], forms: [
					{ name: "Kantonian", img: baseSprite(59), imgS: shinySprite(59), dexSync: [tmDex(79)], },
					{ name: "Hisuian", img: baseSprite("059-h"), imgS: shinySprite("059-h"), dexSync: [tmDex(79)], }
				],
			},
			{ id: 215, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), },
			{
				id: 216, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), }
				],
			},
			{ id: 217, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), dexSync: [idDex(70)], },
			{ id: 218, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), dexSync: [idDex(71)], },
			{ id: 219, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), dexSync: [idDex(114)], },
			{ id: 220, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), dexSync: [idDex(115)], },
			{ id: 221, name: "Skiddo", img: baseSprite(672), imgS: shinySprite(672), },
			{ id: 222, name: "Gogoat", img: baseSprite(673), imgS: shinySprite(673), },
			{
				id: 223, name: "Tauros", img: baseSprite("128-c"), imgS: shinySprite("128-c"), dexSync: [idDex(22)], forms: [
					{ name: "Kantonian", img: baseSprite("128-a"), imgS: shinySprite("128-a"), dexSync: [idDex(22)], },
					{ name: "Paldean (Aqua Breed)", img: baseSprite("128-a"), imgS: shinySprite("128-a"), dexSync: [idDex(22)], },
					{ name: "Paldean (Blaze Breed)", img: baseSprite("128-b"), imgS: shinySprite("128-b"), dexSync: [idDex(22)], },
					{ name: "Paldean (Combat Breed)", img: baseSprite("128-c"), imgS: shinySprite("128-c"), dexSync: [idDex(22)], }
				],
			},
			{ id: 224, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), dexSync: [idDex(36)], },
			{
				id: 225, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), dexSync: [idDex(37)], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), dexSync: [idDex(37)], },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), dexSync: [idDex(37)], }
				],
			},
			{ id: 226, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), },
			{ id: 227, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), },
			{
				id: 228, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), forms: [
					{ name: "Unovian", img: baseSprite(570), imgS: shinySprite(570), },
					{ name: "Hisuian", img: baseSprite("570-h"), imgS: shinySprite("570-h"), }
				],
			},
			{
				id: 229, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), forms: [
					{ name: "Unovian", img: baseSprite(571), imgS: shinySprite(571), },
					{ name: "Hisuian", img: baseSprite("571-h"), imgS: shinySprite("571-h"), }
				],
			},
			{
				id: 230, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [tmDex(170)], forms: [
					{ name: "Johtonian Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [tmDex(170)], },
					{ name: "Johtonian Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [tmDex(170, "Johtonian Female")], },
					{ name: "Hisuian Male", img: baseSprite("215-h"), imgS: shinySprite("215-h"), dexSync: [tmDex(170, "Hisuian Male")], },
					{ name: "Hisuian Female", img: baseSprite("215-h-f"), imgS: shinySprite("215-h-f"), dexSync: [tmDex(170, "Hisuian Female")], }
				],
			},
			{
				id: 231, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [tmDex(171)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [tmDex(171, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [tmDex(171, "Female")], }
				],
			},
			{
				id: 232, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), }
				],
			},
			{ id: 233, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), },
			{ id: 234, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), dexSync: [idDex(101)], },
			{ id: 235, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), dexSync: [idDex(102)], },
			{ id: 236, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), dexSync: [idDex(103)], },
			{
				id: 237, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), dexSync: [idDex(127)], forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), dexSync: [idDex(127)], },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), dexSync: [idDex(127)], },]
			},
			{
				id: 238, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), dexSync: [idDex(128)], forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), dexSync: [idDex(127)], },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), dexSync: [idDex(127)], },]
			},
			{ id: 239, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [tmDex(189)], },
			{ id: 240, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), },
			{
				id: 241, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), dexSync: [tmDex(193)], forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), dexSync: [tmDex(193)], },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), dexSync: [tmDex(193)], }
				],
			},
			{ id: 242, name: "Bramblin", img: baseSprite(946), imgS: shinySprite(946), },
			{ id: 243, name: "Brambleghast", img: baseSprite(947), imgS: shinySprite(947), },
			{ id: 244, name: "Toedscool", img: baseSprite(948), imgS: shinySprite(948), dexSync: [tmDex(74)], },
			{ id: 245, name: "Toedscruel", img: baseSprite(949), imgS: shinySprite(949), dexSync: [tmDex(75)], },
			{ id: 246, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 247, name: "Fomantis", img: baseSprite(753), imgS: shinySprite(753), dexSync: [tmDex(31)], },
			{ id: 248, name: "Lurantis", img: baseSprite(754), imgS: shinySprite(754), dexSync: [tmDex(32)], },
			{ id: 249, name: "Klawf", img: baseSprite(950), imgS: shinySprite(950), },
			{ id: 250, name: "Capsakid", img: baseSprite(951), imgS: shinySprite(951), },
			{ id: 251, name: "Scovillain", img: baseSprite(952), imgS: shinySprite(952), },
			{ id: 252, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), },
			{
				id: 253, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), }
				],
			},
			{ id: 254, name: "Rellor", img: baseSprite(953), imgS: shinySprite(953), dexSync: [idDex(30)], },
			{ id: 255, name: "Rabsca", img: baseSprite(954), imgS: shinySprite(954), dexSync: [idDex(31)], },
			{ id: 256, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), dexSync: [idDex(8)], },
			{ id: 257, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), dexSync: [idDex(9)], },
			{ id: 258, name: "Pineco", img: baseSprite(204), imgS: shinySprite(204), },
			{ id: 259, name: "Forretress", img: baseSprite(205), imgS: shinySprite(205), },
			{
				id: 260, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [idDex(19)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [idDex(19)], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [idDex(19)], }
				],
			},
			{
				id: 261, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [idDex(20)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [idDex(20)], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [idDex(20)], },],
			},
			{
				id: 262, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [tmDex(49)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: [tmDex(49)], },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: [tmDex(49)], },],
			},
			{ id: 263, name: "Flittle", img: baseSprite(955), imgS: shinySprite(955), },
			{ id: 264, name: "Espathra", img: baseSprite(956), imgS: shinySprite(956), },
			{
				id: 265, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), }
				],
			},
			{
				id: 266, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), }
				],
			},
			{ id: 267, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [idDex(27)], },
			{ id: 268, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [idDex(28)], },
			{ id: 269, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [idDex(29)], },
			{ id: 270, name: "Silicobra", img: baseSprite(843), imgS: shinySprite(843), },
			{ id: 271, name: "Sandaconda", img: baseSprite(844), imgS: shinySprite(844), },
			{ id: 272, name: "Mudbray", img: baseSprite(749), imgS: shinySprite(749), dexSync: [tmDex(129)], },
			{ id: 273, name: "Mudsdale", img: baseSprite(750), imgS: shinySprite(750), dexSync: [tmDex(130)], },
			{ id: 274, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636), },
			{ id: 275, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637), },
			{ id: 276, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 277, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 278, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{ id: 279, name: "Tinkatink", img: baseSprite(957), imgS: shinySprite(957), },
			{ id: 280, name: "Tinkatuff", img: baseSprite(958), imgS: shinySprite(958), },
			{ id: 281, name: "Tinkaton", img: baseSprite(959), imgS: shinySprite(959), },
			{ id: 282, name: "Hatenna", img: baseSprite(856), imgS: shinySprite(856), dexSync: [tmDex(92)], },
			{ id: 283, name: "Hattrem", img: baseSprite(857), imgS: shinySprite(857), dexSync: [tmDex(93)], },
			{ id: 284, name: "Hatterene", img: baseSprite(858), imgS: shinySprite(858), dexSync: [tmDex(94)], },
			{ id: 285, name: "Impidimp", img: baseSprite(859), imgS: shinySprite(859), dexSync: [tmDex(190)], },
			{ id: 286, name: "Morgrem", img: baseSprite(860), imgS: shinySprite(860), dexSync: [tmDex(191)], },
			{ id: 287, name: "Grimmsnarl", img: baseSprite(861), imgS: shinySprite(861), dexSync: [tmDex(192)], },
			{ id: 288, name: "Wiglett", img: baseSprite(960), imgS: shinySprite(960), },
			{ id: 289, name: "Wugtrio", img: baseSprite(961), imgS: shinySprite(961), },
			{ id: 290, name: "Bombirdier", img: baseSprite(962), imgS: shinySprite(962), dexSync: [tmDex(134)], },
			{ id: 291, name: "Finizen", img: baseSprite(963), imgS: shinySprite(963), },
			{ id: 292, name: "Palafin", img: baseSprite(964), imgS: shinySprite(964), },
			{ id: 293, name: "Varoom", img: baseSprite(965), imgS: shinySprite(965), },
			{ id: 294, name: "Revavroom", img: baseSprite(966), imgS: shinySprite(966), },
			{ id: 295, name: "Cyclizar", img: baseSprite(967), imgS: shinySprite(967), },
			{ id: 296, name: "Orthworm", img: baseSprite(968), imgS: shinySprite(968), dexSync: [tmDex(96)], },
			{ id: 297, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 298, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 299, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), },
			{ id: 300, name: "Falinks", img: baseSprite(870), imgS: shinySprite(870), },
			{ id: 301, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701), },
			{ id: 302, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{ id: 303, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [tmDex(88)], },
			{ id: 304, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [tmDex(89)], },
			{ id: 305, name: "Dreepy", img: baseSprite(885), imgS: shinySprite(885), },
			{ id: 306, name: "Drakloak", img: baseSprite(886), imgS: shinySprite(886), },
			{ id: 307, name: "Dragapult", img: baseSprite(887), imgS: shinySprite(887), },
			{ id: 308, name: "Glimmet", img: baseSprite(969), imgS: shinySprite(969), dexSync: [tmDex(156)], },
			{ id: 309, name: "Glimmora", img: baseSprite(970), imgS: shinySprite(970), dexSync: [tmDex(157)], },
			{
				id: 310, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), dexSync: [idDex(41)], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), dexSync: [idDex(41)], },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), dexSync: [idDex(41)], },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), dexSync: [idDex(41)], },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), dexSync: [idDex(41)], },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), dexSync: [idDex(41)], },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), dexSync: [idDex(41)], }
				],
			},
			{ id: 311, name: "Greavard", img: baseSprite(971), imgS: shinySprite(971), },
			{ id: 312, name: "Houndstone", img: baseSprite(972), imgS: shinySprite(972), },
			{ id: 313, name: "Oranguru", img: baseSprite(765), imgS: shinySprite(765), },
			{ id: 314, name: "Passimian", img: baseSprite(766), imgS: shinySprite(766), },
			{ id: 315, name: "Komala", img: baseSprite(775), imgS: shinySprite(775), },
			{ id: 316, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), },
			{ id: 317, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), },
			{ id: 318, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), },
			{ id: 319, name: "Stonjourner", img: baseSprite(874), imgS: shinySprite(874), },
			{ id: 320, name: "Eiscue", img: baseSprite(875), imgS: shinySprite(875), },
			{ id: 321, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), },
			{ id: 322, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 323, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{
				id: 324, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [idDex(75)], forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), dexSync: [idDex(75)], },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), dexSync: [idDex(75)], }
				],
			},
			{
				id: 325, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [idDex(76)], forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), dexSync: [idDex(76)], },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), dexSync: [idDex(76)], },],
			},
			{
				id: 326, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [idDex(77)], forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), dexSync: [idDex(77)], },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), dexSync: [idDex(77)], }
				],
			},
			{
				id: 327, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), forms: [
					{ name: "West Sea", img: baseSprite(422), imgS: shinySprite(422), },
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), },],
			},
			{
				id: 328, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), forms: [
					{ name: "West Sea", img: baseSprite(423), imgS: shinySprite(423), },
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), },],
			},
			{ id: 329, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90), },
			{ id: 330, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91), },
			{
				id: 331, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), dexSync: [idDex(146)], forms: [
					{ name: "Johtonian", img: baseSprite(211), imgS: shinySprite(211), dexSync: [idDex(146)], },
					{ name: "Hisuian", img: baseSprite("211-h"), imgS: shinySprite("211-h"), dexSync: [idDex(146)], }
				],
			},
			{ id: 332, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [idDex(82)], },
			{
				id: 333, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [idDex(83)], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [idDex(83)], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [idDex(83)], }
				],
			},
			{
				id: 334, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [idDex(84)], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [idDex(84)], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [idDex(84)], }
				],
			},
			{ id: 335, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [idDex(55)], },
			{ id: 336, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [idDex(85)], },
			{ id: 337, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690), },
			{ id: 338, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691), },
			{ id: 339, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692), },
			{ id: 340, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693), },
			{ id: 341, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), dexSync: [tmDex(175), idDex(134)], },
			{ id: 342, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), dexSync: [tmDex(176), idDex(135)], },
			{ id: 343, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), dexSync: [tmDex(177), idDex(136)], },
			{ id: 344, name: "Mareanie", img: baseSprite(747), imgS: shinySprite(747), },
			{ id: 345, name: "Toxapex", img: baseSprite(748), imgS: shinySprite(748), },
			{ id: 346, name: "Flamigo", img: baseSprite(973), imgS: shinySprite(973), },
			{ id: 347, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), },
			{ id: 348, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), },
			{ id: 349, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), },
			{ id: 350, name: "Snom", img: baseSprite(872), imgS: shinySprite(872), },
			{ id: 351, name: "Frosmoth", img: baseSprite(873), imgS: shinySprite(873), },
			{
				id: 352, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: [idDex(159)], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: [idDex(159)], },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: [idDex(159)], }
				],
			},
			{
				id: 353, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: [idDex(160)], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: [idDex(160)], },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: [idDex(160)], },],
			},
			{ id: 354, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 355, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), dexSync: [idDex(153)], },
			{ id: 356, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), dexSync: [idDex(154)], },
			{ id: 357, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [tmDex(172)], },
			{ id: 358, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [tmDex(173)], },
			{ id: 359, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [tmDex(174)], },
			{ id: 360, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), },
			{ id: 361, name: "Cetoddle", img: baseSprite(974), imgS: shinySprite(974), },
			{ id: 362, name: "Cetitan", img: baseSprite(975), imgS: shinySprite(975), },
			{ id: 363, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712), },
			{
				id: 364, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713), forms: [
					{ name: "Kalosian", img: baseSprite(713), imgS: shinySprite(713), },
					{ name: "Hisuian", img: baseSprite("713-h"), imgS: shinySprite("713-h"), }
				],
			},
			{ id: 365, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [idDex(32)], },
			{
				id: 366, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [idDex(33)], forms: [
					{ name: "Unovian", img: baseSprite(628), imgS: shinySprite(628), dexSync: [idDex(33)], },
					{ name: "Hisuian", img: baseSprite("628-h"), imgS: shinySprite("628-h"), dexSync: [idDex(33)], }
				],
			},
			{ id: 367, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: [tmDex(186)], },
			{ id: 368, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: [tmDex(187)], },
			{ id: 369, name: "Kingambit", img: baseSprite(983), imgS: shinySprite(983), dexSync: [tmDex(188)], },
			{ id: 370, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), },
			{ id: 371, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), },
			{ id: 372, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), },
			{ id: 373, name: "Veluza", img: baseSprite(976), imgS: shinySprite(976), },
			{ id: 374, name: "Dondozo", img: baseSprite(977), imgS: shinySprite(977), },
			{
				id: 375, name: "Tatsugiri", img: baseSprite(978), imgS: shinySprite(978), forms: [
					{ name: "Curly", img: baseSprite(978), imgS: shinySprite(978), },
					{ name: "Droopy", img: baseSprite("978-d"), imgS: shinySprite("978-d"), },
					{ name: "Stretchy", img: baseSprite("978-s"), imgS: shinySprite("978-s"), }
				],
			},
			{ id: 376, name: "Great Tusk", img: baseSprite(984), imgS: shinySprite(984), },
			{ id: 377, name: "Scream Tail", img: baseSprite(985), imgS: shinySprite(985), },
			{ id: 378, name: "Brute Bonnet", img: baseSprite(986), imgS: shinySprite(986), },
			{ id: 379, name: "Flutter Mane", img: baseSprite(987), imgS: shinySprite(987), },
			{ id: 380, name: "Slither Wing", img: baseSprite(988), imgS: shinySprite(988), },
			{ id: 381, name: "Sandy Shocks", img: baseSprite(989), imgS: shinySprite(989), },
			{ id: 382, name: "Iron Treads", img: baseSprite(990), imgS: shinySprite(990), },
			{ id: 383, name: "Iron Bundle", img: baseSprite(991), imgS: shinySprite(991), },
			{ id: 384, name: "Iron Hands", img: baseSprite(992), imgS: shinySprite(992), },
			{ id: 385, name: "Iron Jugulis", img: baseSprite(993), imgS: shinySprite(993), },
			{ id: 386, name: "Iron Moth", img: baseSprite(994), imgS: shinySprite(994), },
			{ id: 387, name: "Iron Thorns", img: baseSprite(995), imgS: shinySprite(995), },
			{ id: 388, name: "Frigibax", img: baseSprite(996), imgS: shinySprite(996), },
			{ id: 389, name: "Arctibax", img: baseSprite(997), imgS: shinySprite(997), },
			{ id: 390, name: "Baxcalibur", img: baseSprite(998), imgS: shinySprite(998), },
			{
				id: 391, name: "Gimmighoul", img: baseSprite(999), imgS: shinySprite(999), forms: [
					{ name: "Chest", img: baseSprite(999), imgS: shinySprite(999), },
					{ name: "Roaming", img: baseSprite("999-r"), imgS: shinySprite("999-r"), }
				],
			},
			{ id: 392, name: "Gholdengo", img: baseSprite(1000), imgS: shinySprite(1000), },
			{ id: 393, name: "Wo-Chien", img: baseSprite(1001), imgS: shinySprite(1001), legendary: true, },
			{ id: 394, name: "Chien-Pao", img: baseSprite(1002), imgS: shinySprite(1002), legendary: true, },
			{ id: 395, name: "Ting-Lu", img: baseSprite(1003), imgS: shinySprite(1003), legendary: true, },
			{ id: 396, name: "Chi-Yu", img: baseSprite(1004), imgS: shinySprite(1004), legendary: true, },
			{ id: 397, name: "Roaring Moon", img: baseSprite(1005), imgS: shinySprite(1005), },
			{ id: 398, name: "Iron Valiant", img: baseSprite(1006), imgS: shinySprite(1006), },
			{ id: 399, name: "Koraidon", img: baseSprite(1007), imgS: shinySprite(1007), legendary: true, },
			{ id: 400, name: "Miraidon", img: baseSprite(1008), imgS: shinySprite(1008), legendary: true, }
		],
	},
});