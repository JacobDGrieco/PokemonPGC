const gen = 6;
const game = "x";
const sub = game + "-mountain";
const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Mountain Kalos Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50) },
			{ id: 2, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51) },
			{ id: 3, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328) },
			{ id: 4, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329) },
			{ id: 5, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330) },
			{
				id: 6, natiId: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), },
				]
			},
			{
				id: 7, natiId: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), },
				]
			},
			{
				id: 8, natiId: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), tags: ["gender", "pseudo", "mega"], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },]
			},
			{ id: 9, natiId: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74) },
			{ id: 10, natiId: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75) },
			{ id: 11, natiId: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76) },
			{ id: 12, natiId: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218) },
			{ id: 13, natiId: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219) },
			{ id: 14, natiId: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213) },
			{ id: 15, natiId: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451) },
			{ id: 16, natiId: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452) },
			{
				id: 17, natiId: 194, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), },
				]
			},
			{
				id: 18, natiId: 195, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), },
				]
			},
			{ id: 19, natiId: 704, name: "Goomy", img: baseSprite(704), imgS: shinySprite(704), tags: ["pseudo"] },
			{ id: 20, natiId: 705, name: "Sliggoo", img: baseSprite(705), imgS: shinySprite(705), tags: ["pseudo"] },
			{ id: 21, natiId: 706, name: "Goodra", img: baseSprite(706), imgS: shinySprite(706), tags: ["pseudo"] },
			{ id: 22, natiId: 588, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588) },
			{ id: 23, natiId: 589, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589) },
			{ id: 24, natiId: 616, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616) },
			{ id: 25, natiId: 617, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617) },
			{ id: 26, natiId: 69, name: "Bellsprout", img: baseSprite(69), imgS: shinySprite(69) },
			{ id: 27, natiId: 70, name: "Weepinbell", img: baseSprite(70), imgS: shinySprite(70) },
			{ id: 28, natiId: 71, name: "Victreebel", img: baseSprite(71), imgS: shinySprite(71) },
			{ id: 29, natiId: 455, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455) },
			{ id: 30, natiId: 92, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92) },
			{ id: 31, natiId: 93, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93) },
			{ id: 32, natiId: 94, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), tags: ["mega"] },
			{ id: 33, natiId: 60, name: "Poliwag", img: baseSprite(60), imgS: shinySprite(60) },
			{ id: 34, natiId: 61, name: "Poliwhirl", img: baseSprite(61), imgS: shinySprite(61) },
			{ id: 35, natiId: 62, name: "Poliwrath", img: baseSprite(62), imgS: shinySprite(62) },
			{
				id: 36, natiId: 186, name: "Politoed", img: baseSprite(186), imgS: shinySprite(186), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(186), imgS: shinySprite(186), },
					{ name: "Female", img: baseSprite("186-f"), imgS: shinySprite("186-f"), },
				]
			},
			{ id: 37, natiId: 23, name: "Ekans", img: baseSprite(23), imgS: shinySprite(23) },
			{ id: 38, natiId: 24, name: "Arbok", img: baseSprite(24), imgS: shinySprite(24) },
			{ id: 39, natiId: 618, name: "Stunfisk", img: baseSprite(618), imgS: shinySprite(618) },
			{ id: 40, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339) },
			{ id: 41, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340) },
			{ id: 42, natiId: 509, name: "Purrloin", img: baseSprite(509), imgS: shinySprite(509) },
			{ id: 43, natiId: 510, name: "Liepard", img: baseSprite(510), imgS: shinySprite(510) },
			{ id: 44, natiId: 261, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261) },
			{ id: 45, natiId: 262, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262) },
			{ id: 46, natiId: 504, name: "Patrat", img: baseSprite(504), imgS: shinySprite(504) },
			{ id: 47, natiId: 505, name: "Watchog", img: baseSprite(505), imgS: shinySprite(505) },
			{ id: 48, natiId: 624, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624) },
			{ id: 49, natiId: 625, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625) },
			{ id: 50, natiId: 707, name: "Klefki", img: baseSprite(707), imgS: shinySprite(707) },
			{
				id: 51, natiId: 198, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), },
				]
			},
			{ id: 52, natiId: 430, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430) },
			{ id: 53, natiId: 590, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590) },
			{ id: 54, natiId: 591, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591) },
			{ id: 55, natiId: 270, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270) },
			{ id: 56, natiId: 271, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271) },
			{
				id: 57, natiId: 272, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), },
				]
			},
			{ id: 58, natiId: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418) },
			{ id: 59, natiId: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419) },
			{
				id: 60, natiId: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), tags: ["other"], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), },
				]
			},
			{ id: 61, natiId: 708, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708) },
			{ id: 62, natiId: 709, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709) },
			{
				id: 63, natiId: 710, name: "Pumpkaboo", img: baseSprite(710), imgS: shinySprite(710), tags: ["other"], forms: [
					{ name: "Small Size", img: baseSprite("710-s"), imgS: shinySprite("710-s"), },
					{ name: "Average Size", img: baseSprite(710), imgS: shinySprite(710), },
					{ name: "Large Size", img: baseSprite("710-l"), imgS: shinySprite("710-l"), },
					{ name: "Super Size", img: baseSprite("710-s"), imgS: shinySprite("710-s"), },
				]
			},
			{
				id: 64, natiId: 711, name: "Gourgeist", img: baseSprite(711), imgS: shinySprite(711), tags: ["other"], forms: [
					{ name: "Small Size", img: baseSprite("711-s"), imgS: shinySprite("711-s"), },
					{ name: "Average Size", img: baseSprite(711), imgS: shinySprite(711), },
					{ name: "Large Size", img: baseSprite("711-l"), imgS: shinySprite("711-l"), },
					{ name: "Super Size", img: baseSprite("711-s"), imgS: shinySprite("711-s"), },
				]
			},
			{ id: 65, natiId: 607, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607) },
			{ id: 66, natiId: 608, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608) },
			{ id: 67, natiId: 609, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609) },
			{
				id: 68, natiId: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), },
				]
			},
			{ id: 69, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81) },
			{ id: 70, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82) },
			{ id: 71, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462) },
			{ id: 72, natiId: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100) },
			{ id: 73, natiId: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101) },
			{ id: 74, natiId: 568, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568) },
			{ id: 75, natiId: 569, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569) },
			{ id: 76, natiId: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220) },
			{
				id: 77, natiId: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				]
			},
			{
				id: 78, natiId: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				]
			},
			{ id: 79, natiId: 712, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712) },
			{ id: 80, natiId: 713, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713) },
			{ id: 81, natiId: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613) },
			{ id: 82, natiId: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614) },
			{ id: 83, natiId: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238) },
			{ id: 84, natiId: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124) },
			{ id: 85, natiId: 582, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582) },
			{ id: 86, natiId: 583, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583) },
			{ id: 87, natiId: 584, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584) },
			{
				id: 88, natiId: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), },
				]
			},
			{
				id: 89, natiId: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), },]
			},
			{ id: 90, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225) },
			{
				id: 91, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				]
			},
			{
				id: 92, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), },
				]
			},
			{ id: 93, natiId: 532, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532) },
			{ id: 94, natiId: 533, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533) },
			{ id: 95, natiId: 534, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534) },
			{ id: 96, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324) },
			{ id: 97, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27) },
			{ id: 98, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28) },
			{ id: 99, natiId: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304) },
			{ id: 100, natiId: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305) },
			{ id: 101, natiId: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), tags: ["mega"] },
			{ id: 102, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), tags: ["pseudo"] },
			{ id: 103, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), tags: ["pseudo"] },
			{ id: 104, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), tags: ["pseudo", "mega"] },
			{ id: 105, natiId: 631, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631) },
			{ id: 106, natiId: 632, name: "Durant", img: baseSprite(632), imgS: shinySprite(632) },
			{ id: 107, natiId: 167, name: "Spinarak", img: baseSprite(167), imgS: shinySprite(167) },
			{ id: 108, natiId: 168, name: "Ariados", img: baseSprite(168), imgS: shinySprite(168) },
			{ id: 109, natiId: 21, name: "Spearow", img: baseSprite(21), imgS: shinySprite(21) },
			{ id: 110, natiId: 22, name: "Fearow", img: baseSprite(22), imgS: shinySprite(22) },
			{ id: 111, natiId: 615, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615) },
			{ id: 112, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227) },
			{ id: 113, natiId: 714, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714) },
			{ id: 114, natiId: 715, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715) },
			{
				id: 115, natiId: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), },
				]
			},
			{ id: 116, natiId: 472, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472) },
			{ id: 117, natiId: 163, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163) },
			{ id: 118, natiId: 164, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164) },
			{ id: 119, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174) },
			{ id: 120, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39) },
			{ id: 121, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40) },
			{ id: 122, natiId: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353) },
			{ id: 123, natiId: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), tags: ["mega"] },
			{ id: 124, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570) },
			{ id: 125, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571) },
			{ id: 126, natiId: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574) },
			{ id: 127, natiId: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575) },
			{ id: 128, natiId: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576) },
			{ id: 129, natiId: 438, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438) },
			{
				id: 130, natiId: 185, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), },
				]
			},
			{ id: 131, natiId: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327) },
			{ id: 132, natiId: 216, name: "Teddiursa", img: baseSprite(216), imgS: shinySprite(216) },
			{
				id: 133, natiId: 217, name: "Ursaring", img: baseSprite(217), imgS: shinySprite(217), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(217), imgS: shinySprite(217), },
					{ name: "Female", img: baseSprite("217-f"), imgS: shinySprite("217-f"), },
				]
			},
			{ id: 134, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108) },
			{ id: 135, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463) },
			{
				id: 136, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), },]
			},
			{
				id: 137, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },]
			},
			{ id: 138, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132) },
			{ id: 139, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333) },
			{ id: 140, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334) },
			{ id: 141, natiId: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621) },
			{ id: 142, natiId: 633, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), tags: ["pseudo"] },
			{ id: 143, natiId: 634, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), tags: ["pseudo"] },
			{ id: 144, natiId: 635, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), tags: ["pseudo"] },
			{ id: 145, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), tags: ["pseudo"] },
			{ id: 146, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), tags: ["pseudo"] },
			{ id: 147, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), tags: ["pseudo"] },
			{ id: 148, natiId: 716, name: "Xerneas", img: baseSprite(716), imgS: shinySprite(716), tags: ["legendary"] },
			{ id: 149, natiId: 717, name: "Yveltal", img: baseSprite(717), imgS: shinySprite(717), tags: ["legendary"] },
			{ id: 150, natiId: 718, name: "Zygarde", img: baseSprite(718), imgS: shinySprite(718), maxStatus: "caught", tags: ["legendary"] },
			{ id: 151, natiId: 150, name: "Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tags: ["mega", "legendary"] }
		]
	},
});
