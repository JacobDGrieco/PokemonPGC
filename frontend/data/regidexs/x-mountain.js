const game = "x-mountain";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const nationalDex = (id) => _dex(game, "national", id);
const nationalDexForm = (id, form) => _dex(game, "national", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Mountain Kalos Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: nationalDex(50), },
			{ id: 2, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: nationalDex(51), },
			{ id: 3, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: nationalDex(328), },
			{ id: 4, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: nationalDex(329), },
			{ id: 5, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: nationalDex(330), },
			{
				id: 6, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: nationalDex(443), forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: nationalDex(443, "Male"), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: nationalDex(443, "Female"), },
				],
			},
			{
				id: 7, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: nationalDex(444), forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: nationalDex(444, "Male"), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: nationalDex(444, "Female"), },
				],
			},
			{
				id: 8, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: nationalDex(445), forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: nationalDex(445, "Male"), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: nationalDex(445, "Female"), },],
			},
			{ id: 9, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: nationalDex(74), },
			{ id: 10, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: nationalDex(75), },
			{ id: 11, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: nationalDex(76), },
			{ id: 12, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), dexSync: nationalDex(218), },
			{ id: 13, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), dexSync: nationalDex(219), },
			{ id: 14, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), dexSync: nationalDex(213), },
			{ id: 15, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), dexSync: nationalDex(451), },
			{ id: 16, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), dexSync: nationalDex(452), },
			{
				id: 17, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), dexSync: nationalDex(194), forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: nationalDex(194, "Male"), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: nationalDex(194, "Female"), },
				],
			},
			{
				id: 18, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), dexSync: nationalDex(195), forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), dexSync: nationalDex(195, "Male"), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), dexSync: nationalDex(195, "Female"), },
				],
			},
			{ id: 19, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), dexSync: nationalDex(704), },
			{ id: 20, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), dexSync: nationalDex(705), },
			{ id: 21, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), dexSync: nationalDex(706), },
			{ id: 22, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), dexSync: nationalDex(588), },
			{ id: 23, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), dexSync: nationalDex(589), },
			{ id: 24, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), dexSync: nationalDex(616), },
			{ id: 25, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), dexSync: nationalDex(617), },
			{ id: 26, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69), dexSync: nationalDex(69), },
			{ id: 27, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70), dexSync: nationalDex(70), },
			{ id: 28, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71), dexSync: nationalDex(71), },
			{ id: 29, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455), dexSync: nationalDex(455), },
			{ id: 30, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: nationalDex(92), },
			{ id: 31, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: nationalDex(93), },
			{ id: 32, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: nationalDex(94), },
			{ id: 33, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60), dexSync: nationalDex(60), },
			{ id: 34, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61), dexSync: nationalDex(61), },
			{ id: 35, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62), dexSync: nationalDex(62), },
			{
				id: 36, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), dexSync: nationalDex(186), forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), dexSync: nationalDex(186, "Male"), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), dexSync: nationalDex(186, "Female"), },
				],
			},
			{ id: 37, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23), dexSync: nationalDex(23), },
			{ id: 38, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24), dexSync: nationalDex(24), },
			{ id: 39, name: "Stunfisk", img: baseSprite(618), imgS: shinySprite(618), dexSync: nationalDex(618), },
			{ id: 40, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: nationalDex(339), },
			{ id: 41, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: nationalDex(340), },
			{ id: 42, name: "Purrloin", img: baseSprite(509), imgS: shinySprite(509), dexSync: nationalDex(509), },
			{ id: 43, name: "Liepard", img: baseSprite(510), imgS: shinySprite(510), dexSync: nationalDex(510), },
			{ id: 44, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), dexSync: nationalDex(261), },
			{ id: 45, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), dexSync: nationalDex(262), },
			{ id: 46, name: "Patrat", img: baseSprite(504), imgS: shinySprite(504), dexSync: nationalDex(504), },
			{ id: 47, name: "Watchog", img: baseSprite(505), imgS: shinySprite(505), dexSync: nationalDex(505), },
			{ id: 48, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624), dexSync: nationalDex(624), },
			{ id: 49, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625), dexSync: nationalDex(625), },
			{ id: 50, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707), dexSync: nationalDex(707), },
			{
				id: 51, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: nationalDex(198), forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: nationalDex(198, "Male"), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: nationalDex(198, "Female"), },
				],
			},
			{ id: 52, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: nationalDex(430), },
			{ id: 53, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), dexSync: nationalDex(590), },
			{ id: 54, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), dexSync: nationalDex(591), },
			{ id: 55, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), dexSync: nationalDex(270), },
			{ id: 56, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), dexSync: nationalDex(271), },
			{
				id: 57, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), dexSync: nationalDex(272), forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), dexSync: nationalDex(272, "Male"), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), dexSync: nationalDex(272, "Female"), },
				],
			},
			{ id: 58, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), dexSync: nationalDex(418), },
			{ id: 59, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), dexSync: nationalDex(419), },
			{
				id: 60, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: nationalDex(550), forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: nationalDex(550, "Blue-Striped"), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: nationalDex(550, "Red-Striped"), },
				],
			},
			{ id: 61, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: nationalDex(708), },
			{ id: 62, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: nationalDex(709), },
			{
				id: 63, name: "Pumpkaboo", img: baseSprite(710), imgS: shinySprite(710), dexSync: nationalDex(710), forms: [
					{ name: "Small Size", img: baseSprite("710-s"), imgS: shinySprite("710-s"), dexSync: nationalDex(710, "Small Size"), },
					{ name: "Average Size", img: baseSprite(710), imgS: shinySprite(710), dexSync: nationalDex(710, "Average Size"), },
					{ name: "Large Size", img: baseSprite("710-l"), imgS: shinySprite("710-l"), dexSync: nationalDex(710, "Large Size"), },
					{ name: "Super Size", img: baseSprite("710-s"), imgS: shinySprite("710-s"), dexSync: nationalDex(710, "Super Size"), },
				],
			},
			{
				id: 64, name: "Gourgeist", img: baseSprite(711), imgS: shinySprite(711), dexSync: nationalDex(711), forms: [
					{ name: "Small Size", img: baseSprite("711-s"), imgS: shinySprite("711-s"), dexSync: nationalDex(711, "Small Size"), },
					{ name: "Average Size", img: baseSprite(711), imgS: shinySprite(711), dexSync: nationalDex(711, "Average Size"), },
					{ name: "Large Size", img: baseSprite("711-l"), imgS: shinySprite("711-l"), dexSync: nationalDex(711, "Large Size"), },
					{ name: "Super Size", img: baseSprite("711-s"), imgS: shinySprite("711-s"), dexSync: nationalDex(711, "Super Size"), },
				],
			},
			{ id: 65, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607), dexSync: nationalDex(607), },
			{ id: 66, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608), dexSync: nationalDex(608), },
			{ id: 67, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609), dexSync: nationalDex(609), },
			{
				id: 68, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), dexSync: nationalDex(479), forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), dexSync: nationalDex(479, "Normal"), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), dexSync: nationalDex(479, "Fan"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), dexSync: nationalDex(479, "Frost"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), dexSync: nationalDex(479, "Heat"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), dexSync: nationalDex(479, "Mow"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), dexSync: nationalDex(479, "Wash"), },
				],
			},
			{ id: 69, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: nationalDex(81), },
			{ id: 70, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: nationalDex(82), },
			{ id: 71, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: nationalDex(462), },
			{ id: 72, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), dexSync: nationalDex(100), },
			{ id: 73, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), dexSync: nationalDex(101), },
			{ id: 74, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568), dexSync: nationalDex(568), },
			{ id: 75, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569), dexSync: nationalDex(569), },
			{ id: 76, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), dexSync: nationalDex(220), },
			{
				id: 77, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), dexSync: nationalDex(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), dexSync: nationalDex(221, "Male"), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), dexSync: nationalDex(221, "Female"), },
				],
			},
			{
				id: 78, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), dexSync: nationalDex(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), dexSync: nationalDex(473, "Male"), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), dexSync: nationalDex(473, "Female"), },
				],
			},
			{ id: 79, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712), dexSync: nationalDex(712), },
			{ id: 80, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713), dexSync: nationalDex(713), },
			{ id: 81, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), dexSync: nationalDex(613), },
			{ id: 82, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), dexSync: nationalDex(614), },
			{ id: 83, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), dexSync: nationalDex(238), },
			{ id: 84, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), dexSync: nationalDex(124), },
			{ id: 85, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: nationalDex(582), },
			{ id: 86, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: nationalDex(583), },
			{ id: 87, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: nationalDex(584), },
			{
				id: 88, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: nationalDex(459), forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: nationalDex(459, "Male"), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: nationalDex(459, "Female"), },
				],
			},
			{
				id: 89, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: nationalDex(460), forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: nationalDex(460, "Male"), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: nationalDex(460, "Female"), },],
			},
			{ id: 90, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: nationalDex(225), },
			{
				id: 91, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: nationalDex(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: nationalDex(215, "Male"), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: nationalDex(215, "Female"), },
				],
			},
			{
				id: 92, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: nationalDex(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: nationalDex(461, "Male"), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: nationalDex(461, "Female"), },
				],
			},
			{ id: 93, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532), dexSync: nationalDex(532), },
			{ id: 94, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533), dexSync: nationalDex(533), },
			{ id: 95, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534), dexSync: nationalDex(534), },
			{ id: 96, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: nationalDex(324), },
			{ id: 97, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: nationalDex(27), },
			{ id: 98, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: nationalDex(28), },
			{ id: 99, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), dexSync: nationalDex(304), },
			{ id: 100, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), dexSync: nationalDex(305), },
			{ id: 101, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), dexSync: nationalDex(306), },
			{ id: 102, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), dexSync: nationalDex(246), },
			{ id: 103, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), dexSync: nationalDex(247), },
			{ id: 104, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), dexSync: nationalDex(248), },
			{ id: 105, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631), dexSync: nationalDex(631), },
			{ id: 106, name: "Durant", img: baseSprite(632), imgS: shinySprite(632), dexSync: nationalDex(632), },
			{ id: 107, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167), dexSync: nationalDex(167), },
			{ id: 108, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168), dexSync: nationalDex(168), },
			{ id: 109, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21), dexSync: nationalDex(21), },
			{ id: 110, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22), dexSync: nationalDex(22), },
			{ id: 111, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), dexSync: nationalDex(615), },
			{ id: 112, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: nationalDex(227), },
			{ id: 113, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: nationalDex(714), },
			{ id: 114, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: nationalDex(715), },
			{
				id: 115, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), dexSync: nationalDex(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), dexSync: nationalDex(207, "Male"), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), dexSync: nationalDex(207, "Female"), },
				],
			},
			{ id: 116, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472), dexSync: nationalDex(472), },
			{ id: 117, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: nationalDex(163), },
			{ id: 118, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: nationalDex(164), },
			{ id: 119, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: nationalDex(174), },
			{ id: 120, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: nationalDex(39), },
			{ id: 121, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: nationalDex(40), },
			{ id: 122, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), dexSync: nationalDex(353), },
			{ id: 123, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), dexSync: nationalDex(354), },
			{ id: 124, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570), dexSync: nationalDex(570), },
			{ id: 125, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571), dexSync: nationalDex(571), },
			{ id: 126, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), dexSync: nationalDex(574), },
			{ id: 127, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), dexSync: nationalDex(575), },
			{ id: 128, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), dexSync: nationalDex(576), },
			{ id: 129, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: nationalDex(438), },
			{
				id: 130, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: nationalDex(185), forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: nationalDex(185, "Male"), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: nationalDex(185, "Female"), },
				],
			},
			{ id: 131, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: nationalDex(327), },
			{ id: 132, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216), dexSync: nationalDex(216), },
			{
				id: 133, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), dexSync: nationalDex(217), forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), dexSync: nationalDex(217, "Male"), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), dexSync: nationalDex(217, "Female"), },
				],
			},
			{ id: 134, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108), dexSync: nationalDex(108), },
			{ id: 135, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463), dexSync: nationalDex(463), },
			{
				id: 136, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: nationalDex(123), forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: nationalDex(123, "Male"), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: nationalDex(123, "Female"), },],
			},
			{
				id: 137, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: nationalDex(212), forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: nationalDex(212, "Male"), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: nationalDex(212, "Female"), },],
			},
			{ id: 138, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132), dexSync: nationalDex(132), },
			{ id: 139, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), dexSync: nationalDex(333), },
			{ id: 140, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), dexSync: nationalDex(334), },
			{ id: 141, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: nationalDex(621), },
			{ id: 142, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), dexSync: nationalDex(633), },
			{ id: 143, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), dexSync: nationalDex(634), },
			{ id: 144, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), dexSync: nationalDex(635), },
			{ id: 145, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), dexSync: nationalDex(147), },
			{ id: 146, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), dexSync: nationalDex(148), },
			{ id: 147, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), dexSync: nationalDex(149), },
			{ id: 148, name: "Xerneas", img: baseSprite(716), imgS: shinySprite(716), legendary: true, dexSync: nationalDex(716), },
			{ id: 149, name: "Yveltal", img: baseSprite(717), imgS: shinySprite(717), legendary: true, dexSync: nationalDex(717), },
			{ id: 150, name: "Zygarde", img: baseSprite(718), imgS: shinySprite(718), maxStatus: "caught", legendary: true, dexSync: nationalDex(718), },
			{
				id: 151, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), legendary: true, dexSync: nationalDex(150),
			}
		]
	},
});
