const game = "omegaruby";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const nationalDex = (id) => _nationalDex(game, "national", id);
const nationalDexForm = (id, form) => _nationalDex(game, "national", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Hoenn Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), dexSync: nationalDex(252), },
			{ id: 2, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), dexSync: nationalDex(253), },
			{ id: 3, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), dexSync: nationalDex(254), },
			{
				id: 4, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), dexSync: nationalDex(255), forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), dexSync: nationalDex(255, "Male"), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), dexSync: nationalDex(255, "Female"), },
				],
			},
			{
				id: 5, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), dexSync: nationalDex(256), forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), dexSync: nationalDex(256, "Male"), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), dexSync: nationalDex(256, "Female"), },
				],
			},
			{
				id: 6, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), dexSync: nationalDex(257), forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), dexSync: nationalDex(257, "Male"), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), dexSync: nationalDex(257, "Female"), },],
			},
			{ id: 7, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), dexSync: nationalDex(258), },
			{ id: 8, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), dexSync: nationalDex(259), },
			{ id: 9, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), dexSync: nationalDex(260), },
			{ id: 10, name: "Poochyena", img: baseSprite(261), imgS: shinySprite(261), dexSync: nationalDex(261), },
			{ id: 11, name: "Mightyena", img: baseSprite(262), imgS: shinySprite(262), dexSync: nationalDex(262), },
			{ id: 12, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), dexSync: nationalDex(263), },
			{ id: 13, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), dexSync: nationalDex(264), },
			{ id: 14, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), dexSync: nationalDex(265), },
			{ id: 15, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), dexSync: nationalDex(266), },
			{
				id: 16, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), dexSync: nationalDex(267), forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), dexSync: nationalDex(267, "Male"), },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), dexSync: nationalDex(267, "Female"), },
				],
			},
			{ id: 17, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), dexSync: nationalDex(268), },
			{
				id: 18, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), dexSync: nationalDex(269), forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), dexSync: nationalDex(269, "Male"), },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), dexSync: nationalDex(269, "Female"), },
				],
			},
			{ id: 19, name: "Lotad", img: baseSprite(270), imgS: shinySprite(270), dexSync: nationalDex(270), },
			{ id: 20, name: "Lombre", img: baseSprite(271), imgS: shinySprite(271), dexSync: nationalDex(271), },
			{
				id: 21, name: "Ludicolo", img: baseSprite(272), imgS: shinySprite(272), dexSync: nationalDex(272), forms: [
					{ name: "Male", img: baseSprite(272), imgS: shinySprite(272), dexSync: nationalDex(272, "Male"), },
					{ name: "Female", img: baseSprite("272-f"), imgS: shinySprite("272-f"), dexSync: nationalDex(272, "Female"), },
				],
			},
			{ id: 22, name: "Seedot", img: baseSprite(273), imgS: shinySprite(273), dexSync: nationalDex(273), },
			{
				id: 23, name: "Nuzleaf", img: baseSprite(274), imgS: shinySprite(274), dexSync: nationalDex(274), forms: [
					{ name: "Male", img: baseSprite(274), imgS: shinySprite(274), dexSync: nationalDex(274, "Male"), },
					{ name: "Female", img: baseSprite("274-f"), imgS: shinySprite("274-f"), dexSync: nationalDex(274, "Female"), },
				],
			},
			{
				id: 24, name: "Shiftry", img: baseSprite(275), imgS: shinySprite(275), dexSync: nationalDex(275), forms: [
					{ name: "Male", img: baseSprite(275), imgS: shinySprite(275), dexSync: nationalDex(275, "Male"), },
					{ name: "Female", img: baseSprite("275-f"), imgS: shinySprite("275-f"), dexSync: nationalDex(275, "Female"), },
				],
			},
			{ id: 25, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276), dexSync: nationalDex(276), },
			{ id: 26, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277), dexSync: nationalDex(277), },
			{ id: 27, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: nationalDex(278), },
			{ id: 28, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: nationalDex(279), },
			{ id: 29, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), dexSync: nationalDex(280), },
			{ id: 30, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), dexSync: nationalDex(281), },
			{ id: 31, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), dexSync: nationalDex(282), },
			{ id: 32, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), dexSync: nationalDex(475), },
			{ id: 33, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: nationalDex(283), },
			{ id: 34, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: nationalDex(284), },
			{ id: 35, name: "Shroomish", img: baseSprite(285), imgS: shinySprite(285), dexSync: nationalDex(285), },
			{ id: 36, name: "Breloom", img: baseSprite(286), imgS: shinySprite(286), dexSync: nationalDex(286), },
			{ id: 37, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), dexSync: nationalDex(287), },
			{ id: 38, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), dexSync: nationalDex(288), },
			{ id: 39, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), dexSync: nationalDex(289), },
			{ id: 40, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: nationalDex(63), },
			{
				id: 41, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64, "Male"), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: nationalDex(64, "Female"), },
				],
			},
			{
				id: 42, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65, "Male"), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: nationalDex(65, "Female"), },],
			},
			{ id: 43, name: "Nincada", img: baseSprite(290), imgS: shinySprite(290), dexSync: nationalDex(290), },
			{ id: 44, name: "Ninjask", img: baseSprite(291), imgS: shinySprite(291), dexSync: nationalDex(291), },
			{ id: 45, name: "Shedinja", img: baseSprite(292), imgS: shinySprite(292), dexSync: nationalDex(292), },
			{ id: 46, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), dexSync: nationalDex(293), },
			{ id: 47, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), dexSync: nationalDex(294), },
			{ id: 48, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), dexSync: nationalDex(295), },
			{ id: 49, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296), dexSync: nationalDex(296), },
			{ id: 50, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297), dexSync: nationalDex(297), },
			{
				id: 51, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118), forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118, "Male"), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: nationalDex(118, "Female"), },
				],
			},
			{
				id: 52, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119), forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119, "Male"), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: nationalDex(119, "Female"), },
				],
			},
			{
				id: 53, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129, "Male"), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: nationalDex(129, "Female"), },
				],
			},
			{
				id: 54, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130, "Male"), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: nationalDex(130, "Female"), },],
			},
			{ id: 55, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), dexSync: nationalDex(298), },
			{ id: 56, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), dexSync: nationalDex(183), },
			{ id: 57, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), dexSync: nationalDex(184), },
			{ id: 58, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: nationalDex(74), },
			{ id: 59, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: nationalDex(75), },
			{ id: 60, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: nationalDex(76), },
			{ id: 61, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299), dexSync: nationalDex(299), },
			{ id: 62, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476), dexSync: nationalDex(476), },
			{ id: 63, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), dexSync: nationalDex(300), },
			{ id: 64, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), dexSync: nationalDex(301), },
			{
				id: 65, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41, "Male"), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: nationalDex(41, "Female"), },
				],
			},
			{
				id: 66, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42, "Male"), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: nationalDex(42, "Female"), },
				],
			},
			{ id: 67, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: nationalDex(169), },
			{ id: 68, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: nationalDex(72), },
			{ id: 69, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: nationalDex(73), },
			{ id: 70, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: nationalDex(302), },
			{ id: 71, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), dexSync: nationalDex(303), },
			{ id: 72, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), dexSync: nationalDex(304), },
			{ id: 73, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), dexSync: nationalDex(305), },
			{ id: 74, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), dexSync: nationalDex(306), },
			{ id: 75, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: nationalDex(66), },
			{ id: 76, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: nationalDex(67), },
			{ id: 77, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: nationalDex(68), },
			{
				id: 78, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), dexSync: nationalDex(307), forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), dexSync: nationalDex(307, "Male"), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), dexSync: nationalDex(307, "Female"), },
				],
			},
			{
				id: 79, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), dexSync: nationalDex(308), forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), dexSync: nationalDex(308, "Male"), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), dexSync: nationalDex(308, "Female"), },],
			},
			{ id: 80, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309), dexSync: nationalDex(309), },
			{ id: 81, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), dexSync: nationalDex(310), },
			{ id: 82, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), dexSync: nationalDex(311), },
			{ id: 83, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), dexSync: nationalDex(312), },
			{ id: 84, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: nationalDex(81), },
			{ id: 85, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: nationalDex(82), },
			{ id: 86, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: nationalDex(462), },
			{ id: 87, name: "Voltorb", img: baseSprite(100), imgS: shinySprite(100), dexSync: nationalDex(100), },
			{ id: 88, name: "Electrode", img: baseSprite(101), imgS: shinySprite(101), dexSync: nationalDex(101), },
			{ id: 89, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), dexSync: nationalDex(313), },
			{ id: 90, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), dexSync: nationalDex(314), },
			{ id: 91, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), dexSync: nationalDex(43), },
			{
				id: 92, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), dexSync: nationalDex(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), dexSync: nationalDex(44, "Male"), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), dexSync: nationalDex(44, "Female"), },
				],
			},
			{
				id: 93, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), dexSync: nationalDex(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), dexSync: nationalDex(45, "Male"), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), dexSync: nationalDex(45, "Female"), },
				],
			},
			{ id: 94, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), dexSync: nationalDex(182), },
			{
				id: 95, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), dexSync: nationalDex(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), dexSync: nationalDex(84, "Male"), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), dexSync: nationalDex(84, "Female"), },
				],
			},
			{
				id: 96, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), dexSync: nationalDex(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), dexSync: nationalDex(85, "Male"), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), dexSync: nationalDex(85, "Female"), },
				],
			},
			{ id: 97, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), dexSync: nationalDex(406), },
			{
				id: 98, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), dexSync: nationalDex(315), forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), dexSync: nationalDex(315, "Male"), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), dexSync: nationalDex(315, "Female"), },
				],
			},
			{
				id: 99, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), dexSync: nationalDex(407), forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), dexSync: nationalDex(407, "Male"), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), dexSync: nationalDex(407, "Female"), },
				],
			},
			{
				id: 100, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), dexSync: nationalDex(316), forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), dexSync: nationalDex(316, "Male"), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), dexSync: nationalDex(316, "Female"), },
				],
			},
			{
				id: 101, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), dexSync: nationalDex(317), forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), dexSync: nationalDex(317, "Male"), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), dexSync: nationalDex(317, "Female"), },
				],
			},
			{ id: 102, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: nationalDex(318), },
			{ id: 103, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: nationalDex(319), },
			{ id: 104, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320), dexSync: nationalDex(320), },
			{ id: 105, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321), dexSync: nationalDex(321), },
			{
				id: 106, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), dexSync: nationalDex(322), forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), dexSync: nationalDex(322, "Male"), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), dexSync: nationalDex(322, "Female"), },
				],
			},
			{
				id: 107, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), dexSync: nationalDex(323), forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), dexSync: nationalDex(323, "Male"), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), dexSync: nationalDex(323, "Female"), },],
			},
			{ id: 108, name: "Slugma", img: baseSprite(218), imgS: shinySprite(218), dexSync: nationalDex(218), },
			{ id: 109, name: "Magcargo", img: baseSprite(219), imgS: shinySprite(219), dexSync: nationalDex(219), },
			{ id: 110, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: nationalDex(324), },
			{ id: 111, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), dexSync: nationalDex(88), },
			{ id: 112, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), dexSync: nationalDex(89), },
			{ id: 113, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109), dexSync: nationalDex(109), },
			{ id: 114, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110), dexSync: nationalDex(110), },
			{ id: 115, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), dexSync: nationalDex(325), },
			{ id: 116, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), dexSync: nationalDex(326), },
			{ id: 117, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: nationalDex(27), },
			{ id: 118, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: nationalDex(28), },
			{ id: 119, name: "Spinda", img: baseSprite(327), imgS: shinySprite(327), dexSync: nationalDex(327), },
			{ id: 120, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), dexSync: nationalDex(227), },
			{ id: 121, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), dexSync: nationalDex(328), },
			{ id: 122, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), dexSync: nationalDex(329), },
			{ id: 123, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), dexSync: nationalDex(330), },
			{ id: 124, name: "Cacnea", img: baseSprite(331), imgS: shinySprite(331), dexSync: nationalDex(331), },
			{
				id: 125, name: "Cacturne", img: baseSprite(332), imgS: shinySprite(332), dexSync: nationalDex(332), forms: [
					{ name: "Male", img: baseSprite(332), imgS: shinySprite(332), dexSync: nationalDex(332, "Male"), },
					{ name: "Female", img: baseSprite("332-f"), imgS: shinySprite("332-f"), dexSync: nationalDex(332, "Female"), },
				],
			},
			{ id: 126, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), dexSync: nationalDex(333), },
			{ id: 127, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), dexSync: nationalDex(334), },
			{ id: 128, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), dexSync: nationalDex(335), },
			{ id: 129, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), dexSync: nationalDex(336), },
			{ id: 130, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337), dexSync: nationalDex(337), },
			{ id: 131, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338), dexSync: nationalDex(338), },
			{ id: 132, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: nationalDex(339), },
			{ id: 133, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: nationalDex(340), },
			{ id: 134, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), dexSync: nationalDex(341), },
			{ id: 135, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), dexSync: nationalDex(342), },
			{ id: 136, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), dexSync: nationalDex(343), },
			{ id: 137, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), dexSync: nationalDex(344), },
			{ id: 138, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), dexSync: nationalDex(345), },
			{ id: 139, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), dexSync: nationalDex(346), },
			{ id: 140, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), dexSync: nationalDex(347), },
			{ id: 141, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), dexSync: nationalDex(348), },
			{ id: 142, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), dexSync: nationalDex(174), },
			{ id: 143, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), dexSync: nationalDex(39), },
			{ id: 144, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), dexSync: nationalDex(40), },
			{ id: 145, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: nationalDex(349), },
			{
				id: 146, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: nationalDex(350), forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: nationalDex(350, "Male"), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: nationalDex(350, "Female"), },
				],
			},
			{
				id: 147, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), dexSync: nationalDex(351), forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), dexSync: nationalDex(351, "Normal"), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), dexSync: nationalDex(351, "Rainy"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), dexSync: nationalDex(351, "Snowy"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), dexSync: nationalDex(351, "Sunny"), },
				],
			},
			{ id: 148, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120), dexSync: nationalDex(120), },
			{ id: 149, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121), dexSync: nationalDex(121), },
			{ id: 150, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), dexSync: nationalDex(352), },
			{ id: 151, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353), dexSync: nationalDex(353), },
			{ id: 152, name: "Banette", img: baseSprite(354), imgS: shinySprite(354), dexSync: nationalDex(354), },
			{ id: 153, name: "Duskull", img: baseSprite(355), imgS: shinySprite(355), dexSync: nationalDex(355), },
			{ id: 154, name: "Dusclops", img: baseSprite(356), imgS: shinySprite(356), dexSync: nationalDex(356), },
			{ id: 155, name: "Dusknoir", img: baseSprite(477), imgS: shinySprite(477), dexSync: nationalDex(477), },
			{ id: 156, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357), dexSync: nationalDex(357), },
			{ id: 157, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), dexSync: nationalDex(433), },
			{ id: 158, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), dexSync: nationalDex(358), },
			{ id: 159, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), dexSync: nationalDex(359), },
			{ id: 160, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), dexSync: nationalDex(37), },
			{ id: 161, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), dexSync: nationalDex(38), },
			{ id: 162, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: nationalDex(172), },
			{
				id: 163, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25, "Male"), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: nationalDex(25, "Female"), },
				],
			},
			{
				id: 164, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26), forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26, "Male"), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: nationalDex(26, "Female"), },
				],
			},
			{ id: 165, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: nationalDex(54), },
			{ id: 166, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: nationalDex(55), },
			{ id: 167, name: "Wynaut", img: baseSprite(360), imgS: shinySprite(360), dexSync: nationalDex(360), },
			{
				id: 168, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), dexSync: nationalDex(202), forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), dexSync: nationalDex(202, "Male"), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), dexSync: nationalDex(202, "Female"), },
				],
			},
			{ id: 169, name: "Natu", img: baseSprite(177), imgS: shinySprite(177), dexSync: nationalDex(177), },
			{
				id: 170, name: "Xatu", img: baseSprite(178), imgS: shinySprite(178), dexSync: nationalDex(178), forms: [
					{ name: "Male", img: baseSprite(178), imgS: shinySprite(178), dexSync: nationalDex(178, "Male"), },
					{ name: "Female", img: baseSprite("178-f"), imgS: shinySprite("178-f"), dexSync: nationalDex(178, "Female"), },
				],
			},
			{
				id: 171, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: nationalDex(203), forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: nationalDex(203, "Male"), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: nationalDex(203, "Female"), },
				],
			},
			{ id: 172, name: "Phanpy", img: baseSprite(231), imgS: shinySprite(231), dexSync: nationalDex(231), },
			{
				id: 173, name: "Donphan", img: baseSprite(232), imgS: shinySprite(232), dexSync: nationalDex(232), forms: [
					{ name: "Male", img: baseSprite(232), imgS: shinySprite(232), dexSync: nationalDex(232, "Male"), },
					{ name: "Female", img: baseSprite("232-f"), imgS: shinySprite("232-f"), dexSync: nationalDex(232, "Female"), },
				],
			},
			{ id: 174, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), dexSync: nationalDex(127), },
			{
				id: 175, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: nationalDex(214), forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: nationalDex(214, "Male"), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: nationalDex(214, "Female"), },],
			},
			{
				id: 176, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), dexSync: nationalDex(111), forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), dexSync: nationalDex(111, "Male"), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), dexSync: nationalDex(111, "Female"), },
				],
			},
			{
				id: 177, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), dexSync: nationalDex(112), forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), dexSync: nationalDex(112, "Male"), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), dexSync: nationalDex(112, "Female"), },
				],
			},
			{
				id: 178, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), dexSync: nationalDex(464), forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), dexSync: nationalDex(464, "Male"), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), dexSync: nationalDex(464, "Female"), },
				],
			},
			{ id: 179, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: nationalDex(361), },
			{ id: 180, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: nationalDex(362), },
			{ id: 181, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: nationalDex(478), },
			{ id: 182, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), dexSync: nationalDex(363), },
			{ id: 183, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), dexSync: nationalDex(364), },
			{ id: 184, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), dexSync: nationalDex(365), },
			{ id: 185, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366), dexSync: nationalDex(366), },
			{ id: 186, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367), dexSync: nationalDex(367), },
			{ id: 187, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368), dexSync: nationalDex(368), },
			{
				id: 188, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), dexSync: nationalDex(369), forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), dexSync: nationalDex(369, "Male"), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), dexSync: nationalDex(369, "Female"), },
				],
			},
			{ id: 189, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222), dexSync: nationalDex(222), },
			{ id: 190, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), dexSync: nationalDex(170), },
			{ id: 191, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), dexSync: nationalDex(171), },
			{ id: 192, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: nationalDex(370), },
			{ id: 193, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), dexSync: nationalDex(116), },
			{ id: 194, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), dexSync: nationalDex(117), },
			{ id: 195, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), dexSync: nationalDex(230), },
			{ id: 196, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), dexSync: nationalDex(371), },
			{ id: 197, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), dexSync: nationalDex(372), },
			{ id: 198, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), dexSync: nationalDex(373), },
			{ id: 199, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), dexSync: nationalDex(374), },
			{ id: 200, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), dexSync: nationalDex(375), },
			{ id: 201, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), dexSync: nationalDex(376), },
			{ id: 202, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), legendary: true, dexSync: nationalDex(377), },
			{ id: 203, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), legendary: true, dexSync: nationalDex(378), },
			{ id: 204, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), legendary: true, dexSync: nationalDex(379), },
			{ id: 205, name: "Latias", img: baseSprite(380), imgS: shinySprite(380), dexSync: nationalDex(380), },
			{ id: 206, name: "Latios", img: baseSprite(381), imgS: shinySprite(381), legendary: true, dexSync: nationalDex(381), },
			{ id: 207, name: "Kyogre", img: baseSprite(382), imgS: shinySprite(382), legendary: true, dexSync: nationalDex(382), },
			{ id: 208, name: "Groudon", img: baseSprite(383), imgS: shinySprite(383), legendary: true, dexSync: nationalDex(383), },
			{ id: 209, name: "Rayquaza", img: baseSprite(384), imgS: shinySprite(384), legendary: true, dexSync: nationalDex(384), },
			{ id: 210, name: "Jirachi", img: baseSprite(385), imgS: shinySprite(385), mythical: true, dexSync: nationalDex(385), },
			{
				id: 211, name: "Deoxys", img: baseSprite(386), imgS: shinySprite(386), legendary: true, dexSync: nationalDex(386), forms: [
					{ name: "Normal", img: baseSprite(386), imgS: shinySprite(386), legendary: true, dexSync: nationalDex(386, "Normal"), },
					{ name: "Attack", img: baseSprite("386-a"), imgS: shinySprite("386-a"), legendary: true, dexSync: nationalDex(386, "Attack"), },
					{ name: "Defense", img: baseSprite("386-d"), imgS: shinySprite("386-d"), legendary: true, dexSync: nationalDex(386, "Defense"), },
					{ name: "Speed", img: baseSprite("386-s"), imgS: shinySprite("386-s"), legendary: true, dexSync: nationalDex(386, "Speed"), },
				],
			}
		],
	},
});
