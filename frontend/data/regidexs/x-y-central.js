(() => {
	const gen = 6;
	const GAME_KEYS = ["x", "y"];
	const SUB = "-central";
	const DEX_NAME = "Central Kalos Dex";

	const BASE_DEX = [
		{ id: 1, natiId: 650, name: "Chespin", img: () => baseSprite(650), imgS: () => shinySprite(650), tags: ["starter"] },
		{ id: 2, natiId: 651, name: "Quilladin", img: () => baseSprite(651), imgS: () => shinySprite(651), tags: ["starter"] },
		{ id: 3, natiId: 652, name: "Chesnaught", img: () => baseSprite(652), imgS: () => shinySprite(652), tags: ["starter"] },
		{ id: 4, natiId: 653, name: "Fennekin", img: () => baseSprite(653), imgS: () => shinySprite(653), tags: ["starter"] },
		{ id: 5, natiId: 654, name: "Braixen", img: () => baseSprite(654), imgS: () => shinySprite(654), tags: ["starter"] },
		{ id: 6, natiId: 655, name: "Delphox", img: () => baseSprite(655), imgS: () => shinySprite(655), tags: ["starter"] },
		{ id: 7, natiId: 656, name: "Froakie", img: () => baseSprite(656), imgS: () => shinySprite(656), tags: ["starter"] },
		{ id: 8, natiId: 657, name: "Frogadier", img: () => baseSprite(657), imgS: () => shinySprite(657), tags: ["starter"] },
		{ id: 9, natiId: 658, name: "Greninja", img: () => baseSprite(658), imgS: () => shinySprite(658), tags: ["starter"] },
		{ id: 10, natiId: 659, name: "Bunnelby", img: () => baseSprite(659), imgS: () => shinySprite(659) },
		{ id: 11, natiId: 660, name: "Diggersby", img: () => baseSprite(660), imgS: () => shinySprite(660) },
		{ id: 12, natiId: 263, name: "Zigzagoon", img: () => baseSprite(263), imgS: () => shinySprite(263) },
		{ id: 13, natiId: 264, name: "Linoone", img: () => baseSprite(264), imgS: () => shinySprite(264) },
		{ id: 14, natiId: 661, name: "Fletchling", img: () => baseSprite(661), imgS: () => shinySprite(661) },
		{ id: 15, natiId: 662, name: "Fletchinder", img: () => baseSprite(662), imgS: () => shinySprite(662) },
		{ id: 16, natiId: 663, name: "Talonflame", img: () => baseSprite(663), imgS: () => shinySprite(663) },
		{ id: 17, natiId: 16, name: "Pidgey", img: () => baseSprite(16), imgS: () => shinySprite(16) },
		{ id: 18, natiId: 17, name: "Pidgeotto", img: () => baseSprite(17), imgS: () => shinySprite(17) },
		{ id: 19, natiId: 18, name: "Pidgeot", img: () => baseSprite(18), imgS: () => shinySprite(18) },
		{ id: 20, natiId: 664, name: "Scatterbug", img: () => baseSprite(664), imgS: () => shinySprite(664) },
		{ id: 21, natiId: 665, name: "Spewpa", img: () => baseSprite(665), imgS: () => shinySprite(665) },
		{
			id: 22, natiId: 666, name: "Vivillon", img: () => baseSprite(666), imgS: () => shinySprite(666), tags: ["other"], forms: [
				{ name: "Archipelago Pattern", img: () => baseSprite("0666-arc"), imgS: () => shinySprite("0666-arc"), },
				{ name: "Continental Pattern", img: () => baseSprite("0666-con"), imgS: () => shinySprite("0666-con"), },
				{ name: "Elegant Pattern", img: () => baseSprite("0666-ele"), imgS: () => shinySprite("0666-ele"), },
				{ name: "Garden Pattern", img: () => baseSprite("0666-gar"), imgS: () => shinySprite("0666-gar"), },
				{ name: "High Plains Pattern", img: () => baseSprite("0666-hig"), imgS: () => shinySprite("0666-hig"), },
				{ name: "Icy Snow Pattern", img: () => baseSprite("0666-icy"), imgS: () => shinySprite("0666-icy"), },
				{ name: "Jungle Pattern", img: () => baseSprite("0666-jun"), imgS: () => shinySprite("0666-jun"), },
				{ name: "Marine Pattern", img: () => baseSprite("0666-mar"), imgS: () => shinySprite("0666-mar"), },
				{ name: "Meadow Pattern", img: () => baseSprite("0666-mea"), imgS: () => shinySprite("0666-mea"), },
				{ name: "Modern Pattern", img: () => baseSprite("0666-mod"), imgS: () => shinySprite("0666-mod"), },
				{ name: "Monsoon Pattern", img: () => baseSprite("0666-mon"), imgS: () => shinySprite("0666-mon"), },
				{ name: "Ocean Pattern", img: () => baseSprite("0666-oce"), imgS: () => shinySprite("0666-oce"), },
				{ name: "Polar Pattern", img: () => baseSprite("0666-pol"), imgS: () => shinySprite("0666-pol"), },
				{ name: "River Pattern", img: () => baseSprite("0666-riv"), imgS: () => shinySprite("0666-riv"), },
				{ name: "Sandstorm Pattern", img: () => baseSprite("0666-san"), imgS: () => shinySprite("0666-san"), },
				{ name: "Savanna Pattern", img: () => baseSprite("0666-sav"), imgS: () => shinySprite("0666-sav"), },
				{ name: "Sun Pattern", img: () => baseSprite("0666-sun"), imgS: () => shinySprite("0666-sun"), },
				{ name: "Tundra Pattern", img: () => baseSprite("0666-tun"), imgS: () => shinySprite("0666-tun"), },
				{ name: "Fancy Pattern", img: () => baseSprite("0666-fan"), imgS: () => shinySprite("0666-fan"), },
				{ name: "Poké Ball Pattern", img: () => baseSprite("0666-pok"), imgS: () => shinySprite("0666-pok"), },]
		},
		{ id: 23, natiId: 10, name: "Caterpie", img: () => baseSprite(10), imgS: () => shinySprite(10) },
		{ id: 24, natiId: 11, name: "Metapod", img: () => baseSprite(11), imgS: () => shinySprite(11) },
		{
			id: 25, natiId: 12, name: "Butterfree", img: () => baseSprite(12), imgS: () => shinySprite(12), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(12), imgS: () => shinySprite(12), },
				{ name: "Female", img: () => baseSprite("0012-f"), imgS: () => shinySprite("0012-f"), },]
		},
		{ id: 26, natiId: 13, name: "Weedle", img: () => baseSprite(13), imgS: () => shinySprite(13) },
		{ id: 27, natiId: 14, name: "Kakuna", img: () => baseSprite(14), imgS: () => shinySprite(14) },
		{ id: 28, natiId: 15, name: "Beedrill", img: () => baseSprite(15), imgS: () => shinySprite(15) },
		{ id: 29, natiId: 511, name: "Pansage", img: () => baseSprite(511), imgS: () => shinySprite(511) },
		{ id: 30, natiId: 512, name: "Simisage", img: () => baseSprite(512), imgS: () => shinySprite(512) },
		{ id: 31, natiId: 513, name: "Pansear", img: () => baseSprite(513), imgS: () => shinySprite(513) },
		{ id: 32, natiId: 514, name: "Simisear", img: () => baseSprite(514), imgS: () => shinySprite(514) },
		{ id: 33, natiId: 515, name: "Panpour", img: () => baseSprite(515), imgS: () => shinySprite(515) },
		{ id: 34, natiId: 516, name: "Simipour", img: () => baseSprite(516), imgS: () => shinySprite(516) },
		{ id: 35, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172) },
		{
			id: 36, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(25), imgS: () => shinySprite(25), },
				{ name: "Female", img: () => baseSprite("0025-f"), imgS: () => shinySprite("0025-f"), },]
		},
		{
			id: 37, natiId: 26, name: "Raichu", img: () => baseSprite(26), imgS: () => shinySprite(26), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(26), imgS: () => shinySprite(26), },
				{ name: "Female", img: () => baseSprite("0026-f"), imgS: () => shinySprite("0026-f"), },]
		},
		{
			id: 38, natiId: 399, name: "Bidoof", img: () => baseSprite(399), imgS: () => shinySprite(399), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(399), imgS: () => shinySprite(399), },
				{ name: "Female", img: () => baseSprite("0399-f"), imgS: () => shinySprite("0399-f"), },
			]
		},
		{
			id: 39, natiId: 400, name: "Bibarel", img: () => baseSprite(400), imgS: () => shinySprite(400), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(400), imgS: () => shinySprite(400), },
				{ name: "Female", img: () => baseSprite("0400-f"), imgS: () => shinySprite("0400-f"), },
			]
		},
		{ id: 40, natiId: 206, name: "Dunsparce", img: () => baseSprite(206), imgS: () => shinySprite(206) },
		{ id: 41, natiId: 298, name: "Azurill", img: () => baseSprite(298), imgS: () => shinySprite(298) },
		{ id: 42, natiId: 183, name: "Marill", img: () => baseSprite(183), imgS: () => shinySprite(183) },
		{ id: 43, natiId: 184, name: "Azumarill", img: () => baseSprite(184), imgS: () => shinySprite(184) },
		{
			id: 44, natiId: 412, name: "Burmy", img: () => baseSprite(412), imgS: () => shinySprite(412), tags: ["other"], forms: [
				{ name: "Plant Cloak", img: () => baseSprite(412), imgS: () => shinySprite(412), },
				{ name: "Sandy Cloak", img: () => baseSprite("0412-s"), imgS: () => shinySprite("0412-s"), },
				{ name: "Trash Cloak", img: () => baseSprite("0412-t"), imgS: () => shinySprite("0412-t"), },
			]
		},
		{
			id: 45, natiId: 413, name: "Wormadam", img: () => baseSprite(413), imgS: () => shinySprite(413), tags: ["other"], forms: [
				{ name: "Plant Cloak", img: () => baseSprite(413), imgS: () => shinySprite(413), },
				{ name: "Sandy Cloak", img: () => baseSprite("0413-s"), imgS: () => shinySprite("0413-s"), },
				{ name: "Trash Cloak", img: () => baseSprite("0413-t"), imgS: () => shinySprite("0413-t"), },
			]
		},
		{ id: 46, natiId: 414, name: "Mothim", img: () => baseSprite(414), imgS: () => shinySprite(414) },
		{ id: 47, natiId: 283, name: "Surskit", img: () => baseSprite(283), imgS: () => shinySprite(283) },
		{ id: 48, natiId: 284, name: "Masquerain", img: () => baseSprite(284), imgS: () => shinySprite(284) },
		{
			id: 49, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
				{ name: "Female", img: () => baseSprite("0129-f"), imgS: () => shinySprite("0129-f"), },]
		},
		{
			id: 50, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
				{ name: "Female", img: () => baseSprite("0130-f"), imgS: () => shinySprite("0130-f"), },]
		},
		{ id: 51, natiId: 341, name: "Corphish", img: () => baseSprite(341), imgS: () => shinySprite(341) },
		{ id: 52, natiId: 342, name: "Crawdaunt", img: () => baseSprite(342), imgS: () => shinySprite(342) },
		{
			id: 53, natiId: 118, name: "Goldeen", img: () => baseSprite(118), imgS: () => shinySprite(118), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(118), imgS: () => shinySprite(118), },
				{ name: "Female", img: () => baseSprite("0118-f"), imgS: () => shinySprite("0118-f"), },]
		},
		{
			id: 54, natiId: 119, name: "Seaking", img: () => baseSprite(119), imgS: () => shinySprite(119), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(119), imgS: () => shinySprite(119), },
				{ name: "Female", img: () => baseSprite("0119-f"), imgS: () => shinySprite("0119-f"), },]
		},
		{ id: 55, natiId: 318, name: "Carvanha", img: () => baseSprite(318), imgS: () => shinySprite(318) },
		{ id: 56, natiId: 319, name: "Sharpedo", img: () => baseSprite(319), imgS: () => shinySprite(319) },
		{ id: 57, natiId: 667, name: "Litleo", img: () => baseSprite(667), imgS: () => shinySprite(667) },
		{
			id: 58, natiId: 668, name: "Pyroar", img: () => baseSprite(668), imgS: () => shinySprite(668), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(668), imgS: () => shinySprite(668), },
				{ name: "Female", img: () => baseSprite("0668-f"), imgS: () => shinySprite("0668-f"), },
			]
		},
		{ id: 59, natiId: 54, name: "Psyduck", img: () => baseSprite(54), imgS: () => shinySprite(54) },
		{ id: 60, natiId: 55, name: "Golduck", img: () => baseSprite(55), imgS: () => shinySprite(55) },
		{ id: 61, natiId: 83, name: "Farfetch'd", img: () => baseSprite(83), imgS: () => shinySprite(83) },
		{ id: 62, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447) },
		{ id: 63, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448), tags: ["mega"] },
		{ id: 64, natiId: 280, name: "Ralts", img: () => baseSprite(280), imgS: () => shinySprite(280) },
		{ id: 65, natiId: 281, name: "Kirlia", img: () => baseSprite(281), imgS: () => shinySprite(281) },
		{ id: 66, natiId: 282, name: "Gardevoir", img: () => baseSprite(282), imgS: () => shinySprite(282), tags: ["mega"] },
		{ id: 67, natiId: 475, name: "Gallade", img: () => baseSprite(475), imgS: () => shinySprite(475) },
		{
			id: 68, natiId: 669, name: "Flabébé", img: () => baseSprite(669), imgS: () => shinySprite(669), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(669), imgS: () => shinySprite(669), },
				{ name: "Orange Flower", img: () => baseSprite("0669-o"), imgS: () => shinySprite("0669-o"), },
				{ name: "Yellow Flower", img: () => baseSprite("0669-y"), imgS: () => shinySprite("0669-y"), },
				{ name: "Blue Flower", img: () => baseSprite("0669-b"), imgS: () => shinySprite("0669-b"), },
				{ name: "White Flower", img: () => baseSprite("0669-w"), imgS: () => shinySprite("0669-w"), },]
		},
		{
			id: 69, natiId: 670, name: "Floette", img: () => baseSprite(670), imgS: () => shinySprite(670), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(670), imgS: () => shinySprite(670), },
				{ name: "Orange Flower", img: () => baseSprite("0670-o"), imgS: () => shinySprite("0670-o"), },
				{ name: "Yellow Flower", img: () => baseSprite("0670-y"), imgS: () => shinySprite("0670-y"), },
				{ name: "Blue Flower", img: () => baseSprite("0670-b"), imgS: () => shinySprite("0670-b"), },
				{ name: "White Flower", img: () => baseSprite("0670-w"), imgS: () => shinySprite("0670-w"), },]
		},
		{
			id: 70, natiId: 671, name: "Florges", img: () => baseSprite(671), imgS: () => shinySprite(671), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(671), imgS: () => shinySprite(671), },
				{ name: "Orange Flower", img: () => baseSprite("0671-o"), imgS: () => shinySprite("0671-o"), },
				{ name: "Yellow Flower", img: () => baseSprite("0671-y"), imgS: () => shinySprite("0671-y"), },
				{ name: "Blue Flower", img: () => baseSprite("0671-b"), imgS: () => shinySprite("0671-b"), },
				{ name: "White Flower", img: () => baseSprite("0671-w"), imgS: () => shinySprite("0671-w"), },]
		},
		{ id: 71, natiId: 406, name: "Budew", img: () => baseSprite(406), imgS: () => shinySprite(406) },
		{
			id: 72, natiId: 315, name: "Roselia", img: () => baseSprite(315), imgS: () => shinySprite(315), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(315), imgS: () => shinySprite(315), },
				{ name: "Female", img: () => baseSprite("0315-f"), imgS: () => shinySprite("0315-f"), },
			]
		},
		{
			id: 73, natiId: 407, name: "Roserade", img: () => baseSprite(407), imgS: () => shinySprite(407), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(407), imgS: () => shinySprite(407), },
				{ name: "Female", img: () => baseSprite("0407-f"), imgS: () => shinySprite("0407-f"), },
			]
		},
		{
			id: 74, natiId: 165, name: "Ledyba", img: () => baseSprite(165), imgS: () => shinySprite(165), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(165), imgS: () => shinySprite(165), },
				{ name: "Female", img: () => baseSprite("0165-f"), imgS: () => shinySprite("0165-f"), },
			]
		},
		{
			id: 75, natiId: 166, name: "Ledian", img: () => baseSprite(166), imgS: () => shinySprite(166), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(166), imgS: () => shinySprite(166), },
				{ name: "Female", img: () => baseSprite("0166-f"), imgS: () => shinySprite("0166-f"), },
			]
		},
		{
			id: 76, natiId: 415, name: "Combee", img: () => baseSprite(415), imgS: () => shinySprite(415), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(415), imgS: () => shinySprite(415), },
				{ name: "Female", img: () => baseSprite("0415-f"), imgS: () => shinySprite("0415-f"), },
			]
		},
		{ id: 77, natiId: 416, name: "Vespiquen", img: () => baseSprite(416), imgS: () => shinySprite(416) },
		{ id: 78, natiId: 300, name: "Skitty", img: () => baseSprite(300), imgS: () => shinySprite(300) },
		{ id: 79, natiId: 301, name: "Delcatty", img: () => baseSprite(301), imgS: () => shinySprite(301) },
		{ id: 80, natiId: 1, name: "Bulbasaur", img: () => baseSprite(1), imgS: () => shinySprite(1) },
		{ id: 81, natiId: 2, name: "Ivysaur", img: () => baseSprite(2), imgS: () => shinySprite(2) },
		{
			id: 82, natiId: 3, name: "Venusaur", img: () => baseSprite(3), imgS: () => shinySprite(3), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(3), imgS: () => shinySprite(3), },
				{ name: "Female", img: () => baseSprite("0003-f"), imgS: () => shinySprite("0003-f"), },]
		},
		{ id: 83, natiId: 4, name: "Charmander", img: () => baseSprite(4), imgS: () => shinySprite(4) },
		{ id: 84, natiId: 5, name: "Charmeleon", img: () => baseSprite(5), imgS: () => shinySprite(5) },
		{ id: 85, natiId: 6, name: "Charizard", img: () => baseSprite(6), imgS: () => shinySprite(6), tags: ["mega"] },
		{ id: 86, natiId: 7, name: "Squirtle", img: () => baseSprite(7), imgS: () => shinySprite(7) },
		{ id: 87, natiId: 8, name: "Wartortle", img: () => baseSprite(8), imgS: () => shinySprite(8) },
		{ id: 88, natiId: 9, name: "Blastoise", img: () => baseSprite(9), imgS: () => shinySprite(9), tags: ["mega"] },
		{ id: 89, natiId: 672, name: "Skiddo", img: () => baseSprite(672), imgS: () => shinySprite(672) },
		{ id: 90, natiId: 673, name: "Gogoat", img: () => baseSprite(673), imgS: () => shinySprite(673) },
		{ id: 91, natiId: 674, name: "Pancham", img: () => baseSprite(674), imgS: () => shinySprite(674) },
		{ id: 92, natiId: 675, name: "Pangoro", img: () => baseSprite(675), imgS: () => shinySprite(675) },
		{
			id: 93, natiId: 676, name: "Furfrou", img: () => baseSprite(676), imgS: () => shinySprite(676), tags: ["other"], forms: [
				{ name: "Natural Trim", img: () => baseSprite(676), imgS: () => shinySprite(676), },
				{ name: "Heart Trim", img: () => baseSprite("0676-he"), imgS: () => shinySprite("0676-he"), },
				{ name: "Star Trim", img: () => baseSprite("0676-st"), imgS: () => shinySprite("0676-st"), },
				{ name: "Diamond Trim", img: () => baseSprite("0676-di"), imgS: () => shinySprite("0676-di"), },
				{ name: "Debutante Trim", img: () => baseSprite("0676-de"), imgS: () => shinySprite("0676-de"), },
				{ name: "Matron Trim", img: () => baseSprite("0676-ma"), imgS: () => shinySprite("0676-ma"), },
				{ name: "Dandy Trim", img: () => baseSprite("0676-da"), imgS: () => shinySprite("0676-da"), },
				{ name: "Le Reine Trim", img: () => baseSprite("0676-la"), imgS: () => shinySprite("0676-la"), },
				{ name: "Kabuki Trim", img: () => baseSprite("0676-ka"), imgS: () => shinySprite("0676-ka"), },
				{ name: "Pharaoh Trim", img: () => baseSprite("0676-ph"), imgS: () => shinySprite("0676-ph"), },]
		},
		{
			id: 94, natiId: 84, name: "Doduo", img: () => baseSprite(84), imgS: () => shinySprite(84), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(84), imgS: () => shinySprite(84), },
				{ name: "Female", img: () => baseSprite("0084-f"), imgS: () => shinySprite("0084-f"), },]
		},
		{
			id: 95, natiId: 85, name: "Dodrio", img: () => baseSprite(85), imgS: () => shinySprite(85), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(85), imgS: () => shinySprite(85), },
				{ name: "Female", img: () => baseSprite("0085-f"), imgS: () => shinySprite("0085-f"), },]
		},
		{ id: 96, natiId: 311, name: "Plusle", img: () => baseSprite(311), imgS: () => shinySprite(311) },
		{ id: 97, natiId: 312, name: "Minun", img: () => baseSprite(312), imgS: () => shinySprite(312) },
		{
			id: 98, natiId: 316, name: "Gulpin", img: () => baseSprite(316), imgS: () => shinySprite(316), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(316), imgS: () => shinySprite(316), },
				{ name: "Female", img: () => baseSprite("0316-f"), imgS: () => shinySprite("0316-f"), },
			]
		},
		{
			id: 99, natiId: 317, name: "Swalot", img: () => baseSprite(317), imgS: () => shinySprite(317), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(317), imgS: () => shinySprite(317), },
				{ name: "Female", img: () => baseSprite("0317-f"), imgS: () => shinySprite("0317-f"), },
			]
		},
		{ id: 100, natiId: 559, name: "Scraggy", img: () => baseSprite(559), imgS: () => shinySprite(559) },
		{ id: 101, natiId: 560, name: "Scrafty", img: () => baseSprite(560), imgS: () => shinySprite(560) },
		{ id: 102, natiId: 63, name: "Abra", img: () => baseSprite(63), imgS: () => shinySprite(63) },
		{
			id: 103, natiId: 64, name: "Kadabra", img: () => baseSprite(64), imgS: () => shinySprite(64), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(64), imgS: () => shinySprite(64), },
				{ name: "Female", img: () => baseSprite("0064-f"), imgS: () => shinySprite("0064-f"), },]
		},
		{
			id: 104, natiId: 65, name: "Alakazam", img: () => baseSprite(65), imgS: () => shinySprite(65), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(65), imgS: () => shinySprite(65), },
				{ name: "Female", img: () => baseSprite("0065-f"), imgS: () => shinySprite("0065-f"), },]
		},
		{ id: 105, natiId: 43, name: "Oddish", img: () => baseSprite(43), imgS: () => shinySprite(43) },
		{
			id: 106, natiId: 44, name: "Gloom", img: () => baseSprite(44), imgS: () => shinySprite(44), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(44), imgS: () => shinySprite(44), },
				{ name: "Female", img: () => baseSprite("0044-f"), imgS: () => shinySprite("0044-f"), },]
		},
		{
			id: 107, natiId: 45, name: "Vileplume", img: () => baseSprite(45), imgS: () => shinySprite(45), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(45), imgS: () => shinySprite(45), },
				{ name: "Female", img: () => baseSprite("0045-f"), imgS: () => shinySprite("0045-f"), },]
		},
		{ id: 108, natiId: 182, name: "Bellossom", img: () => baseSprite(182), imgS: () => shinySprite(182) },
		{ id: 109, natiId: 161, name: "Sentret", img: () => baseSprite(161), imgS: () => shinySprite(161) },
		{ id: 110, natiId: 162, name: "Furret", img: () => baseSprite(162), imgS: () => shinySprite(162) },
		{ id: 111, natiId: 290, name: "Nincada", img: () => baseSprite(290), imgS: () => shinySprite(290) },
		{ id: 112, natiId: 291, name: "Ninjask", img: () => baseSprite(291), imgS: () => shinySprite(291) },
		{ id: 113, natiId: 292, name: "Shedinja", img: () => baseSprite(292), imgS: () => shinySprite(292) },
		{ id: 114, natiId: 677, name: "Espurr", img: () => baseSprite(677), imgS: () => shinySprite(677) },
		{
			id: 115, natiId: 678, name: "Meowstic", img: () => baseSprite(678), imgS: () => shinySprite(678), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(678), imgS: () => shinySprite(678), },
				{ name: "Female", img: () => baseSprite("0678-f"), imgS: () => shinySprite("0678-f"), },
			]
		},
		{ id: 116, natiId: 352, name: "Kecleon", img: () => baseSprite(352), imgS: () => shinySprite(352) },
		{ id: 117, natiId: 679, name: "Honedge", img: () => baseSprite(679), imgS: () => shinySprite(679) },
		{ id: 118, natiId: 680, name: "Doublade", img: () => baseSprite(680), imgS: () => shinySprite(680) },
		{ id: 119, natiId: 681, name: "Aegislash", img: () => baseSprite(681), imgS: () => shinySprite(681) },
		{ id: 120, natiId: 543, name: "Venipede", img: () => baseSprite(543), imgS: () => shinySprite(543) },
		{ id: 121, natiId: 544, name: "Whirlipede", img: () => baseSprite(544), imgS: () => shinySprite(544) },
		{ id: 122, natiId: 545, name: "Scolipede", img: () => baseSprite(545), imgS: () => shinySprite(545) },
		{ id: 123, natiId: 531, name: "Audino", img: () => baseSprite(531), imgS: () => shinySprite(531) },
		{ id: 124, natiId: 235, name: "Smeargle", img: () => baseSprite(235), imgS: () => shinySprite(235) },
		{
			id: 125, natiId: 453, name: "Croagunk", img: () => baseSprite(453), imgS: () => shinySprite(453), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(453), imgS: () => shinySprite(453), },
				{ name: "Female", img: () => baseSprite("0453-f"), imgS: () => shinySprite("0453-f"), },
			]
		},
		{
			id: 126, natiId: 454, name: "Toxicroak", img: () => baseSprite(454), imgS: () => shinySprite(454), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(454), imgS: () => shinySprite(454), },
				{ name: "Female", img: () => baseSprite("0454-f"), imgS: () => shinySprite("0454-f"), },
			]
		},
		{ id: 127, natiId: 580, name: "Ducklett", img: () => baseSprite(580), imgS: () => shinySprite(580) },
		{ id: 128, natiId: 581, name: "Swanna", img: () => baseSprite(581), imgS: () => shinySprite(581) },
		{ id: 129, natiId: 682, name: "Spritzee", img: () => baseSprite(682), imgS: () => shinySprite(682) },
		{ id: 130, natiId: 683, name: "Aromatisse", img: () => baseSprite(683), imgS: () => shinySprite(683) },
		{ id: 131, natiId: 684, name: "Swirlix", img: () => baseSprite(684), imgS: () => shinySprite(684) },
		{ id: 132, natiId: 685, name: "Slurpuff", img: () => baseSprite(685), imgS: () => shinySprite(685) },
		{ id: 133, natiId: 313, name: "Volbeat", img: () => baseSprite(313), imgS: () => shinySprite(313) },
		{ id: 134, natiId: 314, name: "Illumise", img: () => baseSprite(314), imgS: () => shinySprite(314) },
		{ id: 135, natiId: 187, name: "Hoppip", img: () => baseSprite(187), imgS: () => shinySprite(187) },
		{ id: 136, natiId: 188, name: "Skiploom", img: () => baseSprite(188), imgS: () => shinySprite(188) },
		{ id: 137, natiId: 189, name: "Jumpluff", img: () => baseSprite(189), imgS: () => shinySprite(189) },
		{ id: 138, natiId: 446, name: "Munchlax", img: () => baseSprite(446), imgS: () => shinySprite(446) },
		{ id: 139, natiId: 143, name: "Snorlax", img: () => baseSprite(143), imgS: () => shinySprite(143) },
		{ id: 140, natiId: 293, name: "Whismur", img: () => baseSprite(293), imgS: () => shinySprite(293) },
		{ id: 141, natiId: 294, name: "Loudred", img: () => baseSprite(294), imgS: () => shinySprite(294) },
		{ id: 142, natiId: 295, name: "Exploud", img: () => baseSprite(295), imgS: () => shinySprite(295) },
		{
			id: 143, natiId: 307, name: "Meditite", img: () => baseSprite(307), imgS: () => shinySprite(307), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(307), imgS: () => shinySprite(307), },
				{ name: "Female", img: () => baseSprite("0307-f"), imgS: () => shinySprite("0307-f"), },
			]
		},
		{
			id: 144, natiId: 308, name: "Medicham", img: () => baseSprite(308), imgS: () => shinySprite(308), tags: ["gender", "mega"], forms: [
				{ name: "Male", img: () => baseSprite(308), imgS: () => shinySprite(308), },
				{ name: "Female", img: () => baseSprite("0308-f"), imgS: () => shinySprite("0308-f"), },]
		},
		{
			id: 145, natiId: 41, name: "Zubat", img: () => baseSprite(41), imgS: () => shinySprite(41), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(41), imgS: () => shinySprite(41), },
				{ name: "Female", img: () => baseSprite("0041-f"), imgS: () => shinySprite("0041-f"), },]
		},
		{
			id: 146, natiId: 42, name: "Golbat", img: () => baseSprite(42), imgS: () => shinySprite(42), tags: ["gender"], forms: [
				{ name: "Male", img: () => baseSprite(42), imgS: () => shinySprite(42), },
				{ name: "Female", img: () => baseSprite("0042-f"), imgS: () => shinySprite("0042-f"), },]
		},
		{ id: 147, natiId: 169, name: "Crobat", img: () => baseSprite(169), imgS: () => shinySprite(169) },
		{ id: 148, natiId: 610, name: "Axew", img: () => baseSprite(610), imgS: () => shinySprite(610) },
		{ id: 149, natiId: 611, name: "Fraxure", img: () => baseSprite(611), imgS: () => shinySprite(611) },
		{ id: 150, natiId: 612, name: "Haxorus", img: () => baseSprite(612), imgS: () => shinySprite(612) },
		{ id: 151, natiId: 719, name: "Diancie", img: () => baseSprite(719), imgS: () => shinySprite(719), maxStatus: "caught", tags: ["mythical"] },
		{
			id: 152, natiId: 720, name: "Hoopa", img: () => baseSprite(720), imgS: () => shinySprite(720), maxStatus: "caught", tags: ["other", "mythical"], forms: [
				{ name: "Confined", img: () => baseSprite(720), imgS: () => shinySprite(720), maxStatus: "caught", tags: ["mythical"] },
				{ name: "Unbound", img: () => baseSprite("0720-u"), imgS: () => shinySprite("0720-u"), maxStatus: "caught", tags: ["mythical"] },
			]
		},
		{ id: 153, natiId: 721, name: "Volcanion", img: () => baseSprite(721), imgS: () => shinySprite(721), maxStatus: "caught", tags: ["mythical"] },
	];

	window.DATA = window.DATA || {};
	window.DATA.dex = window.DATA.dex || {};
	window.DATA.dexNames = window.DATA.dexNames || {};

	function buildDexFor(gameKey) {
		const baseSprite = (natiId) =>
			wantAnimatedDexSprites(gen)
				? _frontSpriteAnimated(gen, gameKey, natiId)
				: _frontSprite(gen, gameKey, natiId);

		const shinySprite = (natiId) =>
			wantAnimatedDexSprites(gen)
				? _frontSpriteShinyAnimated(gen, gameKey, natiId)
				: _frontSpriteShiny(gen, gameKey, natiId);

		return BASE_DEX.map((m) => ({
			...m,
			img: () => baseSprite(m.natiId),
			imgS: () => shinySprite(m.natiId),
		}));
	}

	for (const gk of GAME_KEYS) {
		window.DATA.dexNames[gk + SUB] = DEX_NAME;
		window.DATA.dex[gk + SUB] = buildDexFor(gk + SUB);
	}

	try {
		window.PPGC = window.PPGC || {};
		if (typeof window.PPGC.rebuildNatDexIndex === "function") {
			window.PPGC.rebuildNatDexIndex();
		} else if (typeof window.PPGC._natDexIndex !== "undefined") {
			window.PPGC._natDexIndex = null;
		}
	} catch { }
})();