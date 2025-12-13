const game = "alphasapphire";
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Hoenn Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, natiId: 252, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), tags: ["starter"], },
			{ id: 2, natiId: 253, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), tags: ["starter"], },
			{ id: 3, natiId: 254, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), tags: ["starter", "mega"], },
			{
				id: 4, natiId: 255, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 5, natiId: 256, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 6, natiId: 257, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), tags: ["gender", "starter", "mega"], forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },],
			},
			{ id: 7, natiId: 258, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), tags: ["starter"], },
			{ id: 8, natiId: 259, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), tags: ["starter"], },
			{ id: 9, natiId: 260, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), tags: ["starter", "mega"], },
			{ id: 10, natiId: 261, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), },
			{ id: 11, natiId: 262, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), },
			{ id: 12, natiId: 263, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), },
			{ id: 13, natiId: 264, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), },
			{ id: 14, natiId: 265, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), },
			{ id: 15, natiId: 266, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), },
			{
				id: 16, natiId: 267, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), },
				],
			},
			{ id: 17, natiId: 268, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), },
			{
				id: 18, natiId: 269, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), },
				],
			},
			{ id: 19, natiId: 270, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), },
			{ id: 20, natiId: 271, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), },
			{
				id: 21, natiId: 272, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), },
				],
			},
			{ id: 22, natiId: 273, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), },
			{
				id: 23, natiId: 274, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274), },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f"), },
				],
			},
			{
				id: 24, natiId: 275, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275), },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f"), },
				],
			},
			{ id: 25, natiId: 276, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276), },
			{ id: 26, natiId: 277, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277), },
			{ id: 27, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), },
			{ id: 28, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), },
			{ id: 29, natiId: 280, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), },
			{ id: 30, natiId: 281, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), },
			{ id: 31, natiId: 282, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), tags: ["mega"], },
			{ id: 32, natiId: 475, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), },
			{ id: 33, natiId: 283, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), },
			{ id: 34, natiId: 284, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), },
			{ id: 35, natiId: 285, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), },
			{ id: 36, natiId: 286, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), },
			{ id: 37, natiId: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), },
			{ id: 38, natiId: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), },
			{ id: 39, natiId: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), },
			{ id: 40, natiId: 63, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), },
			{
				id: 41, natiId: 64, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), },
				],
			},
			{
				id: 42, natiId: 65, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), },],
			},
			{ id: 43, natiId: 290, name: "Nincada", img: baseSprite(290), imgS: shinySprite(290), },
			{ id: 44, natiId: 291, name: "Ninjask", img: baseSprite(291), imgS: shinySprite(291), },
			{ id: 45, natiId: 292, name: "Shedinja", img: baseSprite(292), imgS: shinySprite(292), },
			{ id: 46, natiId: 293, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), },
			{ id: 47, natiId: 294, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), },
			{ id: 48, natiId: 295, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), },
			{ id: 49, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), },
			{ id: 50, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), },
			{
				id: 51, natiId: 118, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), },
				],
			},
			{
				id: 52, natiId: 119, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), },
				],
			},
			{
				id: 53, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 54, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },],
			},
			{ id: 55, natiId: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), },
			{ id: 56, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), },
			{ id: 57, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), },
			{ id: 58, natiId: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), },
			{ id: 59, natiId: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), },
			{ id: 60, natiId: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), },
			{ id: 61, natiId: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), },
			{ id: 62, natiId: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), },
			{ id: 63, natiId: 300, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), },
			{ id: 64, natiId: 301, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), },
			{
				id: 65, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 66, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 67, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 68, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 69, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{ id: 70, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), tags: ["mega"], },
			{ id: 71, natiId: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), tags: ["mega"], },
			{ id: 72, natiId: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 73, natiId: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 74, natiId: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), tags: ["mega"], },
			{ id: 75, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), },
			{ id: 76, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), },
			{ id: 77, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), },
			{
				id: 78, natiId: 307, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), },
				],
			},
			{
				id: 79, natiId: 308, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), },],
			},
			{ id: 80, natiId: 309, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), },
			{ id: 81, natiId: 310, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), tags: ["mega"], },
			{ id: 82, natiId: 311, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 83, natiId: 312, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 84, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 85, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 86, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 87, natiId: 100, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), },
			{ id: 88, natiId: 101, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), },
			{ id: 89, natiId: 313, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), },
			{ id: 90, natiId: 314, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), },
			{ id: 91, natiId: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 92, natiId: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 93, natiId: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				],
			},
			{ id: 94, natiId: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{
				id: 95, natiId: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 96, natiId: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 97, natiId: 406, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), },
			{
				id: 98, natiId: 315, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), },
				],
			},
			{
				id: 99, natiId: 407, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), },
				],
			},
			{
				id: 100, natiId: 316, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), },
				],
			},
			{
				id: 101, natiId: 317, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), },
				],
			},
			{ id: 102, natiId: 318, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), },
			{ id: 103, natiId: 319, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), tags: ["mega"], },
			{ id: 104, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), },
			{ id: 105, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), },
			{
				id: 106, natiId: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), },
				],
			},
			{
				id: 107, natiId: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },],
			},
			{ id: 108, natiId: 218, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), },
			{ id: 109, natiId: 219, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), },
			{ id: 110, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 111, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), },
			{ id: 112, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), },
			{ id: 113, natiId: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), },
			{ id: 114, natiId: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), },
			{ id: 115, natiId: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), },
			{ id: 116, natiId: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), },
			{ id: 117, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), },
			{ id: 118, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), },
			{ id: 119, natiId: 327, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), },
			{ id: 120, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 121, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 122, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 123, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{ id: 124, natiId: 331, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), },
			{
				id: 125, natiId: 332, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), },
				],
			},
			{ id: 126, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 127, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), tags: ["mega"], },
			{ id: 128, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 129, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 130, natiId: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337), },
			{ id: 131, natiId: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338), },
			{ id: 132, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 133, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{ id: 134, natiId: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), },
			{ id: 135, natiId: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), },
			{ id: 136, natiId: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), },
			{ id: 137, natiId: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), },
			{ id: 138, natiId: 345, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), tags: ["fossil"], },
			{ id: 139, natiId: 346, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), tags: ["fossil"], },
			{ id: 140, natiId: 347, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), tags: ["fossil"], },
			{ id: 141, natiId: 348, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), tags: ["fossil"], },
			{ id: 142, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 143, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 144, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 145, natiId: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 146, natiId: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), },
				],
			},
			{
				id: 147, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				],
			},
			{ id: 148, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), },
			{ id: 149, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), },
			{ id: 150, natiId: 352, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), },
			{ id: 151, natiId: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), },
			{ id: 152, natiId: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), tags: ["mega"], },
			{ id: 153, natiId: 355, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), },
			{ id: 154, natiId: 356, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), },
			{ id: 155, natiId: 477, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), },
			{ id: 156, natiId: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), },
			{ id: 157, natiId: 433, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), },
			{ id: 158, natiId: 358, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), },
			{ id: 159, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), tags: ["mega"], },
			{ id: 160, natiId: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), },
			{ id: 161, natiId: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), },
			{ id: 162, natiId: 172, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), },
			{
				id: 163, natiId: 25, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), },
				],
			},
			{
				id: 164, natiId: 26, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), },
				],
			},
			{ id: 165, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), },
			{ id: 166, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), },
			{ id: 167, natiId: 360, name: "Wynaut", img: baseSprite(360), imgS: shinySprite(360), },
			{
				id: 168, natiId: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), },
				],
			},
			{ id: 169, natiId: 177, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), },
			{
				id: 170, natiId: 178, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), },
				],
			},
			{
				id: 171, natiId: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), },
				],
			},
			{ id: 172, natiId: 231, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), },
			{
				id: 173, natiId: 232, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), },
				],
			},
			{ id: 174, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), tags: ["mega"], },
			{
				id: 175, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },],
			},
			{
				id: 176, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 177, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{
				id: 178, natiId: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{ id: 179, natiId: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 180, natiId: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), tags: ["mega"], },
			{ id: 181, natiId: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{ id: 182, natiId: 363, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), },
			{ id: 183, natiId: 364, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), },
			{ id: 184, natiId: 365, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), },
			{ id: 185, natiId: 366, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), },
			{ id: 186, natiId: 367, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), },
			{ id: 187, natiId: 368, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), },
			{
				id: 188, natiId: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				],
			},
			{ id: 189, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), },
			{ id: 190, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 191, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 192, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{ id: 193, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 194, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{ id: 195, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 196, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), tags: ["pseudo"], },
			{ id: 197, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), tags: ["pseudo"], },
			{ id: 198, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), tags: ["pseudo", "mega"], },
			{ id: 199, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), tags: ["pseudo"], },
			{ id: 200, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), tags: ["pseudo"], },
			{ id: 201, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), tags: ["pseudo", "mega"], },
			{ id: 202, natiId: 377, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), tags: ["legendary"], },
			{ id: 203, natiId: 378, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), tags: ["legendary"], },
			{ id: 204, natiId: 379, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), tags: ["legendary"], },
			{ id: 205, natiId: 380, name: "Latias", img: baseSprite(380), imgS: shinySprite(380), tags: ["legendary", "legendary"], },
			{ id: 206, natiId: 381, name: "Latios", img: baseSprite(381), imgS: shinySprite(381), tags: ["legendary", "legendary"], },
			{ id: 207, natiId: 382, name: "Kyogre", img: baseSprite(382), imgS: shinySprite(382), tags: ["legendary"], },
			{ id: 208, natiId: 383, name: "Groudon", img: baseSprite(383), imgS: shinySprite(383), tags: ["legendary"], },
			{ id: 209, natiId: 384, name: "Rayquaza", img: baseSprite(384), imgS: shinySprite(384), tags: ["mega", "legendary"], },
			{ id: 210, natiId: 385, name: "Jirachi", img: baseSprite(385), imgS: shinySprite(385), tags: ["mythical"], },
			{
				id: 211, natiId: 386, name: "Deoxys", img: baseSprite(386), imgS: shinySprite(386), tags: ["other", "legendary"], forms: [
					{ name: "Normal", img: baseSprite(386), imgS: shinySprite(386), },
					{ name: "Attack", img: baseSprite("386-a"), imgS: shinySprite("386-a"), },
					{ name: "Defense", img: baseSprite("386-d"), imgS: shinySprite("386-d"), },
					{ name: "Speed", img: baseSprite("386-s"), imgS: shinySprite("386-s"), },
				],
			}
		],
	},
});
