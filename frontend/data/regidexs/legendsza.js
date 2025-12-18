(() => {
	const gen = 9.5;
	const GAME_KEYS = ["legendsza"];
	const SUB = "";
	const DEX_NAME = "Lumiose Dex";

	const BASE_DEX = [
		{ id: 1, natiId: 152, name: "Chikorita", img: () => baseSprite(152), imgS: () => shinySprite(152), tags: ["starter"], },
		{ id: 2, natiId: 153, name: "Bayleef", img: () => baseSprite(153), imgS: () => shinySprite(153), tags: ["starter"] },
		{
			id: 3, natiId: 154, name: "Meganium", img: () => baseSprite(154), imgS: () => shinySprite(154), tags: ["gender", "starter", "mega"], forms: [
				{ name: "Male (Longer Antennae)", img: () => baseSprite(154), imgS: () => shinySprite(154) },
				{ name: "Female (Smaller Antennae)", img: () => baseSprite("0154-f"), imgS: () => shinySprite("0154-f") },
			],
		},
		{ id: 4, natiId: 498, name: "Tepig", img: () => baseSprite(498), imgS: () => shinySprite(498), tags: ["starter"] },
		{ id: 5, natiId: 499, name: "Pignite", img: () => baseSprite(499), imgS: () => shinySprite(499), tags: ["starter"] },
		{ id: 6, natiId: 500, name: "Emboar", img: () => baseSprite(500), imgS: () => shinySprite(500), tags: ["starter", "mega"] },
		{ id: 7, natiId: 158, name: "Totodile", img: () => baseSprite(158), imgS: () => shinySprite(158), tags: ["starter"] },
		{ id: 8, natiId: 159, name: "Croconaw", img: () => baseSprite(159), imgS: () => shinySprite(159), tags: ["starter"] },
		{ id: 9, natiId: 160, name: "Feraligatr", img: () => baseSprite(160), imgS: () => shinySprite(160), tags: ["starter", "mega"] },
		{ id: 10, natiId: 661, name: "Fletchling", img: () => baseSprite(661), imgS: () => shinySprite(661) },
		{ id: 11, natiId: 662, name: "Fletchinder", img: () => baseSprite(662), imgS: () => shinySprite(662) },
		{ id: 12, natiId: 663, name: "Talonflame", img: () => baseSprite(663), imgS: () => shinySprite(663) },
		{ id: 13, natiId: 659, name: "Bunnelby", img: () => baseSprite(659), imgS: () => shinySprite(659) },
		{ id: 14, natiId: 660, name: "Diggersby", img: () => baseSprite(660), imgS: () => shinySprite(660) },
		{ id: 15, natiId: 664, name: "Scatterbug", img: () => baseSprite(664), imgS: () => shinySprite(664) },
		{ id: 16, natiId: 665, name: "Spewpa", img: () => baseSprite(665), imgS: () => shinySprite(665) },
		{
			id: 17, natiId: 666, name: "Vivillon", img: () => baseSprite(666), imgS: () => shinySprite(666), tags: ["other"], forms: [
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
				{ name: "Poke Ball Pattern", img: () => baseSprite("0666-pok"), imgS: () => shinySprite("0666-pok"), maxStatus: "caught", },
			],
		},
		{ id: 18, natiId: 13, name: "Weedle", img: () => baseSprite(13), imgS: () => shinySprite(13) },
		{ id: 19, natiId: 14, name: "Kakuna", img: () => baseSprite(14), imgS: () => shinySprite(14) },
		{ id: 20, natiId: 15, name: "Beedrill", img: () => baseSprite(15), imgS: () => shinySprite(15), tags: ["mega"] },
		{ id: 21, natiId: 16, name: "Pidgey", img: () => baseSprite(16), imgS: () => shinySprite(16) },
		{ id: 22, natiId: 17, name: "Pidgeotto", img: () => baseSprite(17), imgS: () => shinySprite(17) },
		{ id: 23, natiId: 18, name: "Pidgeot", img: () => baseSprite(18), imgS: () => shinySprite(18), tags: ["mega"] },
		{ id: 24, natiId: 179, name: "Mareep", img: () => baseSprite(179), imgS: () => shinySprite(179) },
		{ id: 25, natiId: 180, name: "Flaaffy", img: () => baseSprite(180), imgS: () => shinySprite(180) },
		{ id: 26, natiId: 181, name: "Ampharos", img: () => baseSprite(181), imgS: () => shinySprite(181), tags: ["mega"] },
		{ id: 27, natiId: 504, name: "Patrat", img: () => baseSprite(504), imgS: () => shinySprite(504) },
		{ id: 28, natiId: 505, name: "Watchog", img: () => baseSprite(505), imgS: () => shinySprite(505) },
		{ id: 29, natiId: 406, name: "Budew", img: () => baseSprite(406), imgS: () => shinySprite(406) },
		{
			id: 30, natiId: 315, name: "Roselia", img: () => baseSprite(315), imgS: () => shinySprite(315), tags: ["gender"], forms: [
				{ name: "Male (Smaller Body Leaf)", img: () => baseSprite(315), imgS: () => shinySprite(315) },
				{ name: "Female (Larger Body Leaf)", img: () => baseSprite("0315-f"), imgS: () => shinySprite("0315-f") },
			],
		},
		{
			id: 31, natiId: 407, name: "Roserade", img: () => baseSprite(407), imgS: () => shinySprite(407), tags: ["gender"], forms: [
				{ name: "Male (Smaller Cape)", img: () => baseSprite(407), imgS: () => shinySprite(407) },
				{ name: "Female (Longer Cape)", img: () => baseSprite("0407-f"), imgS: () => shinySprite("0407-f") },
			],
		},
		{
			id: 32, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
				{ name: "Male (Yellow Wiskers)", img: () => baseSprite(129), imgS: () => shinySprite(129) },
				{ name: "Female (White Wiskers)", img: () => baseSprite("0129-f"), imgS: () => shinySprite("0129-f") },
			],
		},
		{
			id: 33, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender", "mega"], forms: [
				{ name: "Male (Blue Wiskers)", img: () => baseSprite(130), imgS: () => shinySprite(130) },
				{ name: "Female (White Wiskers)", img: () => baseSprite("0130-f"), imgS: () => shinySprite("0130-f") },
			],
		},
		{ id: 34, natiId: 688, name: "Binacle", img: () => baseSprite(688), imgS: () => shinySprite(688) },
		{ id: 35, natiId: 689, name: "Barbaracle", img: () => baseSprite(689), imgS: () => shinySprite(689), tags: ["mega"] },
		{ id: 36, natiId: 120, name: "Staryu", img: () => baseSprite(120), imgS: () => shinySprite(120) },
		{ id: 37, natiId: 121, name: "Starmie", img: () => baseSprite(121), imgS: () => shinySprite(121), tags: ["mega"] },
		{
			id: 38, natiId: 669, name: "Flabébé", img: () => baseSprite(669), imgS: () => shinySprite(669), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(669), imgS: () => shinySprite(669) },
				{ name: "Orange Flower", img: () => baseSprite("0669-o"), imgS: () => shinySprite("0669-o") },
				{ name: "Yellow Flower", img: () => baseSprite("0669-y"), imgS: () => shinySprite("0669-y") },
				{ name: "Blue Flower", img: () => baseSprite("0669-b"), imgS: () => shinySprite("0669-b") },
				{ name: "White Flower", img: () => baseSprite("0669-w"), imgS: () => shinySprite("0669-w") },
			],
		},
		{
			id: 39, natiId: 670, name: "Floette", img: () => baseSprite(670), imgS: () => shinySprite(670), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(670), imgS: () => shinySprite(670) },
				{ name: "Orange Flower", img: () => baseSprite("0670-o"), imgS: () => shinySprite("0670-o") },
				{ name: "Yellow Flower", img: () => baseSprite("0670-y"), imgS: () => shinySprite("0670-y") },
				{ name: "Blue Flower", img: () => baseSprite("0670-b"), imgS: () => shinySprite("0670-b") },
				{ name: "White Flower", img: () => baseSprite("0670-w"), imgS: () => shinySprite("0670-w") },
				{ name: "Eternal Flower", img: () => baseSprite("0670-e"), imgS: () => shinySprite("0670-e"), maxStatus: "caught", tags: ["mega"] },
			],
		},
		{
			id: 40, natiId: 671, name: "Florges", img: () => baseSprite(671), imgS: () => shinySprite(671), tags: ["other"], forms: [
				{ name: "Red Flower", img: () => baseSprite(671), imgS: () => shinySprite(671) },
				{ name: "Orange Flower", img: () => baseSprite("0671-o"), imgS: () => shinySprite("0671-o") },
				{ name: "Yellow Flower", img: () => baseSprite("0671-y"), imgS: () => shinySprite("0671-y") },
				{ name: "Blue Flower", img: () => baseSprite("0671-b"), imgS: () => shinySprite("0671-b") },
				{ name: "White Flower", img: () => baseSprite("0671-w"), imgS: () => shinySprite("0671-w") },
			],
		},
		{ id: 41, natiId: 672, name: "Skiddo", img: () => baseSprite(672), imgS: () => shinySprite(672) },
		{ id: 42, natiId: 673, name: "Gogoat", img: () => baseSprite(673), imgS: () => shinySprite(673) },
		{ id: 43, natiId: 677, name: "Espurr", img: () => baseSprite(677), imgS: () => shinySprite(677) },
		{
			id: 44, natiId: 678, name: "Meowstic", img: () => baseSprite(678), imgS: () => shinySprite(678), tags: ["gender"], forms: [
				{ name: "Male (Blue-White Pallete)", img: () => baseSprite(678), imgS: () => shinySprite(678) },
				{ name: "Female (White-Blue Pallete)", img: () => baseSprite("0678-f"), imgS: () => shinySprite("0678-f") },
			],
		},
		{ id: 45, natiId: 667, name: "Litleo", img: () => baseSprite(667), imgS: () => shinySprite(667) },
		{
			id: 46, natiId: 668, name: "Pyroar", img: () => baseSprite(668), imgS: () => shinySprite(668), tags: ["gender", "mega"], forms: [
				{ name: "Male (Kanji Mane)", img: () => baseSprite(668), imgS: () => shinySprite(668) },
				{ name: "Female (Ponytail)", img: () => baseSprite("0668-f"), imgS: () => shinySprite("0668-f") },
			],
		},
		{ id: 47, natiId: 674, name: "Pancham", img: () => baseSprite(674), imgS: () => shinySprite(674) },
		{ id: 48, natiId: 675, name: "Pangoro", img: () => baseSprite(675), imgS: () => shinySprite(675) },
		{ id: 49, natiId: 568, name: "Trubbish", img: () => baseSprite(568), imgS: () => shinySprite(568) },
		{ id: 50, natiId: 569, name: "Garbodor", img: () => baseSprite(569), imgS: () => shinySprite(569) },
		{ id: 51, natiId: 702, name: "Dedenne", img: () => baseSprite(702), imgS: () => shinySprite(702) },
		{ id: 52, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172) },
		{
			id: 53, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender"], forms: [
				{ name: "Male (Sharp Tail)", img: () => baseSprite(25), imgS: () => shinySprite(25) },
				{ name: "Female (Heart Tail)", img: () => baseSprite("0025-f"), imgS: () => shinySprite("0025-f") },
			],
		},
		{
			id: 54, natiId: 26, name: "Raichu", img: () => baseSprite(26), imgS: () => shinySprite(26), tags: ["gender"], forms: [
				{ name: "Kantonian Male (Sharp Tail)", img: () => baseSprite(26), imgS: () => shinySprite(26) },
				{ name: "Kantonian Female (Blunt Tail)", img: () => baseSprite("0026-f"), imgS: () => shinySprite("0026-f") },
				{ name: "Alolan", img: () => baseSprite("0026-a"), imgS: () => shinySprite("0026-a"), maxStatus: "caught", tags: ["alolan"] },
			],
		},
		{ id: 55, natiId: 173, name: "Cleffa", img: () => baseSprite(173), imgS: () => shinySprite(173) },
		{ id: 56, natiId: 35, name: "Clefairy", img: () => baseSprite(35), imgS: () => shinySprite(35) },
		{ id: 57, natiId: 36, name: "Clefable", img: () => baseSprite(36), imgS: () => shinySprite(36), tags: ["mega"] },
		{ id: 58, natiId: 167, name: "Spinarak", img: () => baseSprite(167), imgS: () => shinySprite(167) },
		{ id: 59, natiId: 168, name: "Ariados", img: () => baseSprite(168), imgS: () => shinySprite(168) },
		{ id: 60, natiId: 23, name: "Ekans", img: () => baseSprite(23), imgS: () => shinySprite(23) },
		{ id: 61, natiId: 24, name: "Arbok", img: () => baseSprite(24), imgS: () => shinySprite(24) },
		{ id: 62, natiId: 63, name: "Abra", img: () => baseSprite(63), imgS: () => shinySprite(63) },
		{
			id: 63, natiId: 64, name: "Kadabra", img: () => baseSprite(64), imgS: () => shinySprite(64), tags: ["gender"], forms: [
				{ name: "Male (Longer Wiskers)", img: () => baseSprite(64), imgS: () => shinySprite(64) },
				{ name: "Female (Shorter Wiskers)", img: () => baseSprite("0064-f"), imgS: () => shinySprite("0064-f") },
			],
		},
		{
			id: 64, natiId: 65, name: "Alakazam", img: () => baseSprite(65), imgS: () => shinySprite(65), tags: ["gender", "mega"], forms: [
				{ name: "Male (Longer Wiskers)", img: () => baseSprite(65), imgS: () => shinySprite(65) },
				{ name: "Female (Shorter Wiskers)", img: () => baseSprite("0065-f"), imgS: () => shinySprite("0065-f") },
			],
		},
		{ id: 65, natiId: 92, name: "Gastly", img: () => baseSprite(92), imgS: () => shinySprite(92) },
		{ id: 66, natiId: 93, name: "Haunter", img: () => baseSprite(93), imgS: () => shinySprite(93) },
		{ id: 67, natiId: 94, name: "Gengar", img: () => baseSprite(94), imgS: () => shinySprite(94), tags: ["mega"] },
		{ id: 68, natiId: 543, name: "Venipede", img: () => baseSprite(543), imgS: () => shinySprite(543) },
		{ id: 69, natiId: 544, name: "Whirlipede", img: () => baseSprite(544), imgS: () => shinySprite(544) },
		{ id: 70, natiId: 545, name: "Scolipede", img: () => baseSprite(545), imgS: () => shinySprite(545), tags: ["mega"] },
		{ id: 71, natiId: 679, name: "Honedge", img: () => baseSprite(679), imgS: () => shinySprite(679) },
		{ id: 72, natiId: 680, name: "Doublade", img: () => baseSprite(680), imgS: () => shinySprite(680) },
		{ id: 73, natiId: 681, name: "Aegislash", img: () => baseSprite(681), imgS: () => shinySprite(681) },
		{ id: 74, natiId: 69, name: "Bellsprout", img: () => baseSprite(69), imgS: () => shinySprite(69) },
		{ id: 75, natiId: 70, name: "Weepinbell", img: () => baseSprite(70), imgS: () => shinySprite(70) },
		{ id: 76, natiId: 71, name: "Victreebel", img: () => baseSprite(71), imgS: () => shinySprite(71), tags: ["mega"] },
		{ id: 77, natiId: 511, name: "Pansage", img: () => baseSprite(511), imgS: () => shinySprite(511) },
		{ id: 78, natiId: 512, name: "Simisage", img: () => baseSprite(512), imgS: () => shinySprite(512) },
		{ id: 79, natiId: 513, name: "Pansear", img: () => baseSprite(513), imgS: () => shinySprite(513) },
		{ id: 80, natiId: 514, name: "Simisear", img: () => baseSprite(514), imgS: () => shinySprite(514) },
		{ id: 81, natiId: 515, name: "Panpour", img: () => baseSprite(515), imgS: () => shinySprite(515) },
		{ id: 82, natiId: 516, name: "Simipour", img: () => baseSprite(516), imgS: () => shinySprite(516) },
		{
			id: 83, natiId: 307, name: "Meditite", img: () => baseSprite(307), imgS: () => shinySprite(307), tags: ["gender"], forms: [
				{ name: "Male (Higher Ears)", img: () => baseSprite(307), imgS: () => shinySprite(307) },
				{ name: "Female (Lower Ears)", img: () => baseSprite("0307-f"), imgS: () => shinySprite("0307-f") },
			],
		},
		{
			id: 84, natiId: 308, name: "Medicham", img: () => baseSprite(308), imgS: () => shinySprite(308), tags: ["gender", "mega"], forms: [
				{ name: "Male (Larger Head Blub)", img: () => baseSprite(308), imgS: () => shinySprite(308) },
				{ name: "Female (Smaller Head Blub)", img: () => baseSprite("0308-f"), imgS: () => shinySprite("0308-f") },
			],
		},
		{ id: 85, natiId: 309, name: "Electrike", img: () => baseSprite(309), imgS: () => shinySprite(309) },
		{ id: 86, natiId: 310, name: "Manectric", img: () => baseSprite(310), imgS: () => shinySprite(310), tags: ["mega"] },
		{ id: 87, natiId: 280, name: "Ralts", img: () => baseSprite(280), imgS: () => shinySprite(280) },
		{ id: 88, natiId: 281, name: "Kirlia", img: () => baseSprite(281), imgS: () => shinySprite(281) },
		{ id: 89, natiId: 282, name: "Gardevoir", img: () => baseSprite(282), imgS: () => shinySprite(282), tags: ["mega"] },
		{ id: 90, natiId: 475, name: "Gallade", img: () => baseSprite(475), imgS: () => shinySprite(475), tags: ["mega"] },
		{ id: 91, natiId: 228, name: "Houndour", img: () => baseSprite(228), imgS: () => shinySprite(228) },
		{
			id: 92, natiId: 229, name: "Houndoom", img: () => baseSprite(229), imgS: () => shinySprite(229), tags: ["gender", "mega"], forms: [
				{ name: "Male (Larger Horns)", img: () => baseSprite(229), imgS: () => shinySprite(229) },
				{ name: "Female (Smaller Horns)", img: () => baseSprite("0229-f"), imgS: () => shinySprite("0229-f") },
			],
		},
		{ id: 93, natiId: 333, name: "Swablu", img: () => baseSprite(333), imgS: () => shinySprite(333) },
		{ id: 94, natiId: 334, name: "Altaria", img: () => baseSprite(334), imgS: () => shinySprite(334), tags: ["mega"] },
		{ id: 95, natiId: 531, name: "Audino", img: () => baseSprite(531), imgS: () => shinySprite(531), tags: ["mega"] },
		{ id: 96, natiId: 682, name: "Spritzee", img: () => baseSprite(682), imgS: () => shinySprite(682) },
		{ id: 97, natiId: 683, name: "Aromatisse", img: () => baseSprite(683), imgS: () => shinySprite(683) },
		{ id: 98, natiId: 684, name: "Swirlix", img: () => baseSprite(684), imgS: () => shinySprite(684) },
		{ id: 99, natiId: 685, name: "Slurpuff", img: () => baseSprite(685), imgS: () => shinySprite(685) },
		{
			id: 100, natiId: 133, name: "Eevee", img: () => baseSprite(133), imgS: () => shinySprite(133), tags: ["gender"], forms: [
				{ name: "Male (Zigzag Tail Pattern)", img: () => baseSprite(133), imgS: () => shinySprite(133) },
				{ name: "Female (Heart Tail Pattern)", img: () => baseSprite("0133-f"), imgS: () => shinySprite("0133-f") },
			],
		},
		{ id: 101, natiId: 134, name: "Vaporeon", img: () => baseSprite(134), imgS: () => shinySprite(134) },
		{ id: 102, natiId: 135, name: "Jolteon", img: () => baseSprite(135), imgS: () => shinySprite(135) },
		{ id: 103, natiId: 136, name: "Flareon", img: () => baseSprite(136), imgS: () => shinySprite(136) },
		{ id: 104, natiId: 196, name: "Espeon", img: () => baseSprite(196), imgS: () => shinySprite(196) },
		{ id: 105, natiId: 197, name: "Umbreon", img: () => baseSprite(197), imgS: () => shinySprite(197) },
		{ id: 106, natiId: 470, name: "Leafeon", img: () => baseSprite(470), imgS: () => shinySprite(470) },
		{ id: 107, natiId: 471, name: "Glaceon", img: () => baseSprite(471), imgS: () => shinySprite(471) },
		{ id: 108, natiId: 700, name: "Sylveon", img: () => baseSprite(700), imgS: () => shinySprite(700) },
		{ id: 109, natiId: 427, name: "Buneary", img: () => baseSprite(427), imgS: () => shinySprite(427) },
		{ id: 110, natiId: 428, name: "Lopunny", img: () => baseSprite(428), imgS: () => shinySprite(428), tags: ["mega"] },
		{ id: 111, natiId: 353, name: "Shuppet", img: () => baseSprite(353), imgS: () => shinySprite(353) },
		{ id: 112, natiId: 354, name: "Banette", img: () => baseSprite(354), imgS: () => shinySprite(354), tags: ["mega"] },
		{ id: 113, natiId: 582, name: "Vanillite", img: () => baseSprite(582), imgS: () => shinySprite(582) },
		{ id: 114, natiId: 583, name: "Vanillish", img: () => baseSprite(583), imgS: () => shinySprite(583) },
		{ id: 115, natiId: 584, name: "Vanilluxe", img: () => baseSprite(584), imgS: () => shinySprite(584) },
		{
			id: 116, natiId: 322, name: "Numel", img: () => baseSprite(322), imgS: () => shinySprite(322), tags: ["gender"], forms: [
				{ name: "Male (Smaller Hump)", img: () => baseSprite(322), imgS: () => shinySprite(322) },
				{ name: "Female (Larger Hump)", img: () => baseSprite("0322-f"), imgS: () => shinySprite("0322-f") },
			],
		},
		{
			id: 117, natiId: 323, name: "Camerupt", img: () => baseSprite(323), imgS: () => shinySprite(323), tags: ["gender", "mega"], forms: [
				{ name: "Male (Smaller Humps)", img: () => baseSprite(323), imgS: () => shinySprite(323) },
				{ name: "Female (Larger Humps)", img: () => baseSprite("0323-f"), imgS: () => shinySprite("0323-f") },
			],
		},
		{
			id: 118, natiId: 449, name: "Hippopotas", img: () => baseSprite(449), imgS: () => shinySprite(449), tags: ["gender"], forms: [
				{ name: "Male (Yellow-Brown Pallete)", img: () => baseSprite(449), imgS: () => shinySprite(449) },
				{ name: "Female (Brown-Yellow Pallete)", img: () => baseSprite("0449-f"), imgS: () => shinySprite("0449-f") },
			],
		},
		{
			id: 119, natiId: 450, name: "Hippowdon", img: () => baseSprite(450), imgS: () => shinySprite(450), tags: ["gender"], forms: [
				{ name: "Male (Light Brown Body)", img: () => baseSprite(450), imgS: () => shinySprite(450) },
				{ name: "Female (Dark Gray Body)", img: () => baseSprite("0450-f"), imgS: () => shinySprite("0450-f") },
			],
		},
		{ id: 120, natiId: 529, name: "Drilbur", img: () => baseSprite(529), imgS: () => shinySprite(529) },
		{ id: 121, natiId: 530, name: "Excadrill", img: () => baseSprite(530), imgS: () => shinySprite(530), tags: ["mega"] },
		{ id: 122, natiId: 551, name: "Sandile", img: () => baseSprite(551), imgS: () => shinySprite(551) },
		{ id: 123, natiId: 552, name: "Krokorok", img: () => baseSprite(552), imgS: () => shinySprite(552) },
		{ id: 124, natiId: 553, name: "Krookodile", img: () => baseSprite(553), imgS: () => shinySprite(553) },
		{ id: 125, natiId: 66, name: "Machop", img: () => baseSprite(66), imgS: () => shinySprite(66) },
		{ id: 126, natiId: 67, name: "Machoke", img: () => baseSprite(67), imgS: () => shinySprite(67) },
		{ id: 127, natiId: 68, name: "Machamp", img: () => baseSprite(68), imgS: () => shinySprite(68) },
		{
			id: 128, natiId: 443, name: "Gible", img: () => baseSprite(443), imgS: () => shinySprite(443), tags: ["gender", "pseudo"], forms: [
				{ name: "Male (Notched Fin)", img: () => baseSprite(443), imgS: () => shinySprite(443) },
				{ name: "Female (Normal Fin)", img: () => baseSprite("0443-f"), imgS: () => shinySprite("0443-f") },
			],
		},
		{
			id: 129, natiId: 444, name: "Gabite", img: () => baseSprite(444), imgS: () => shinySprite(444), tags: ["gender", "pseudo"], forms: [
				{ name: "Male (Notched Fin)", img: () => baseSprite(444), imgS: () => shinySprite(444) },
				{ name: "Female (Normal Fin)", img: () => baseSprite("0444-f"), imgS: () => shinySprite("0444-f") },
			],
		},
		{
			id: 130, natiId: 445, name: "Garchomp", img: () => baseSprite(445), imgS: () => shinySprite(445), tags: ["gender", "pseudo", "mega"], forms: [
				{ name: "Male (Notched Fin)", img: () => baseSprite(445), imgS: () => shinySprite(445) },
				{ name: "Female (Normal Fin)", img: () => baseSprite("0445-f"), imgS: () => shinySprite("0445-f") },
			],
		},
		{ id: 131, natiId: 703, name: "Carbink", img: () => baseSprite(703), imgS: () => shinySprite(703) },
		{ id: 132, natiId: 302, name: "Sableye", img: () => baseSprite(302), imgS: () => shinySprite(302), tags: ["mega"] },
		{ id: 133, natiId: 303, name: "Mawile", img: () => baseSprite(303), imgS: () => shinySprite(303), tags: ["mega"] },
		{ id: 134, natiId: 359, name: "Absol", img: () => baseSprite(359), imgS: () => shinySprite(359), tags: ["mega"] },
		{ id: 135, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447) },
		{ id: 136, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448), tags: ["mega"] },
		{
			id: 137, natiId: 79, name: "Slowpoke", img: () => baseSprite(79), imgS: () => shinySprite(79), forms: [
				{ name: "Kantonian", img: () => baseSprite(79), imgS: () => shinySprite(79) },
				{ name: "Galarian", img: () => baseSprite("0079-g"), imgS: () => shinySprite("0079-g"), maxStatus: "caught", tags: ["galarian"] },
			],
		},
		{
			id: 138, natiId: 80, name: "Slowbro", img: () => baseSprite(80), imgS: () => shinySprite(80), tags: ["mega"], forms: [
				{ name: "Kantonian", img: () => baseSprite(80), imgS: () => shinySprite(80) },
				{ name: "Galarian", img: () => baseSprite("0080-g"), imgS: () => shinySprite("0080-g"), maxStatus: "caught", tags: ["galarian"] },
			],
		},
		{
			id: 139, natiId: 199, name: "Slowking", img: () => baseSprite(199), imgS: () => shinySprite(199), forms: [
				{ name: "Johtonian", img: () => baseSprite(199), imgS: () => shinySprite(199) },
				{ name: "Galarian", img: () => baseSprite("0199-g"), imgS: () => shinySprite("0199-g"), maxStatus: "caught", tags: ["galarian"] },
			],
		},
		{ id: 140, natiId: 318, name: "Carvanha", img: () => baseSprite(318), imgS: () => shinySprite(318) },
		{ id: 141, natiId: 319, name: "Sharpedo", img: () => baseSprite(319), imgS: () => shinySprite(319), tags: ["mega"] },
		{ id: 142, natiId: 602, name: "Tynamo", img: () => baseSprite(602), imgS: () => shinySprite(602) },
		{ id: 143, natiId: 603, name: "Eelektrik", img: () => baseSprite(603), imgS: () => shinySprite(603) },
		{ id: 144, natiId: 604, name: "Eelektross", img: () => baseSprite(604), imgS: () => shinySprite(604), tags: ["mega"] },
		{ id: 145, natiId: 147, name: "Dratini", img: () => baseSprite(147), imgS: () => shinySprite(147), tags: ["pseudo"] },
		{ id: 146, natiId: 148, name: "Dragonair", img: () => baseSprite(148), imgS: () => shinySprite(148), tags: ["pseudo"] },
		{ id: 147, natiId: 149, name: "Dragonite", img: () => baseSprite(149), imgS: () => shinySprite(149), tags: ["mega", "pseudo"] },
		{ id: 148, natiId: 1, name: "Bulbasaur", img: () => baseSprite(1), imgS: () => shinySprite(1), tags: ["starter"] },
		{ id: 149, natiId: 2, name: "Ivysaur", img: () => baseSprite(2), imgS: () => shinySprite(2), tags: ["starter"] },
		{
			id: 150, natiId: 3, name: "Venusaur", img: () => baseSprite(3), imgS: () => shinySprite(3), tags: ["gender", "starter", "mega"], forms: [
				{ name: "Male (No Seed)", img: () => baseSprite(3), imgS: () => shinySprite(3) },
				{ name: "Female (Seed)", img: () => baseSprite("0003-f"), imgS: () => shinySprite("0003-f") },
			],
		},
		{ id: 151, natiId: 4, name: "Charmander", img: () => baseSprite(4), imgS: () => shinySprite(4), tags: ["starter"] },
		{ id: 152, natiId: 5, name: "Charmeleon", img: () => baseSprite(5), imgS: () => shinySprite(5), tags: ["starter"] },
		{ id: 153, natiId: 6, name: "Charizard", img: () => baseSprite(6), imgS: () => shinySprite(6), tags: ["mega", "starter"] },
		{ id: 154, natiId: 7, name: "Squirtle", img: () => baseSprite(7), imgS: () => shinySprite(7), tags: ["starter"] },
		{ id: 155, natiId: 8, name: "Wartortle", img: () => baseSprite(8), imgS: () => shinySprite(8), tags: ["starter"] },
		{ id: 156, natiId: 9, name: "Blastoise", img: () => baseSprite(9), imgS: () => shinySprite(9), tags: ["mega", "starter"] },
		{
			id: 157, natiId: 618, name: "Stunfisk", img: () => baseSprite(618), imgS: () => shinySprite(618), forms: [
				{ name: "Unovian", img: () => baseSprite(618), imgS: () => shinySprite(618) },
				{ name: "Galarian", img: () => baseSprite("0618-g"), imgS: () => shinySprite("0618-g"), maxStatus: "caught", tags: ["galarian"], },
			],
		},
		{
			id: 158, natiId: 676, name: "Furfrou", img: () => baseSprite(676), imgS: () => shinySprite(676), tags: ["other"], forms: [
				{ name: "Natural Trim", img: () => baseSprite(676), imgS: () => shinySprite(676) },
				{ name: "Heart Trim", img: () => baseSprite("0676-he"), imgS: () => shinySprite("0676-he") },
				{ name: "Star Trim", img: () => baseSprite("0676-st"), imgS: () => shinySprite("0676-st") },
				{ name: "Diamond Trim", img: () => baseSprite("0676-di"), imgS: () => shinySprite("0676-di") },
				{ name: "Debutante Trim", img: () => baseSprite("0676-de"), imgS: () => shinySprite("0676-de") },
				{ name: "Matron Trim", img: () => baseSprite("0676-ma"), imgS: () => shinySprite("0676-ma") },
				{ name: "Dandy Trim", img: () => baseSprite("0676-da"), imgS: () => shinySprite("0676-da") },
				{ name: "Le Reine Trim", img: () => baseSprite("0676-la"), imgS: () => shinySprite("0676-la") },
				{ name: "Kabuki Trim", img: () => baseSprite("0676-ka"), imgS: () => shinySprite("0676-ka") },
				{ name: "Pharaoh Trim", img: () => baseSprite("0676-ph"), imgS: () => shinySprite("0676-ph") },
			],
		},
		{ id: 159, natiId: 686, name: "Inkay", img: () => baseSprite(686), imgS: () => shinySprite(686) },
		{ id: 160, natiId: 687, name: "Malamar", img: () => baseSprite(687), imgS: () => shinySprite(687), tags: ["mega"] },
		{ id: 161, natiId: 690, name: "Skrelp", img: () => baseSprite(690), imgS: () => shinySprite(690) },
		{ id: 162, natiId: 691, name: "Dragalge", img: () => baseSprite(691), imgS: () => shinySprite(691), tags: ["mega"] },
		{ id: 163, natiId: 692, name: "Clauncher", img: () => baseSprite(692), imgS: () => shinySprite(692) },
		{ id: 164, natiId: 693, name: "Clawitzer", img: () => baseSprite(693), imgS: () => shinySprite(693) },
		{ id: 165, natiId: 704, name: "Goomy", img: () => baseSprite(704), imgS: () => shinySprite(704), tags: ["pseudo"] },
		{
			id: 166, natiId: 705, name: "Sliggoo", img: () => baseSprite(705), imgS: () => shinySprite(705), forms: [
				{ name: "Kalosian", img: () => baseSprite(705), imgS: () => shinySprite(705), },
				{ name: "Hisuian", img: () => baseSprite("0705-h"), imgS: () => shinySprite("0705-h"), tags: ["hisuian"] },
			],
		},
		{
			id: 167, natiId: 706, name: "Goodra", img: () => baseSprite(706), imgS: () => shinySprite(706), forms: [
				{ name: "Kalosian", img: () => baseSprite(706), imgS: () => shinySprite(706), },
				{ name: "Hisuian", img: () => baseSprite("0706-h"), imgS: () => shinySprite("0706-h"), tags: ["hisuian"] },
			],
		},
		{ id: 168, natiId: 225, name: "Delibird", img: () => baseSprite(225), imgS: () => shinySprite(225) },
		{ id: 169, natiId: 361, name: "Snorunt", img: () => baseSprite(361), imgS: () => shinySprite(361) },
		{ id: 170, natiId: 362, name: "Glalie", img: () => baseSprite(362), imgS: () => shinySprite(362), tags: ["mega"] },
		{ id: 171, natiId: 478, name: "Froslass", img: () => baseSprite(478), imgS: () => shinySprite(478), tags: ["mega"] },
		{
			id: 172, natiId: 459, name: "Snover", img: () => baseSprite(459), imgS: () => shinySprite(459), tags: ["gender"], forms: [
				{ name: "Male (Brown Midsection)", img: () => baseSprite(459), imgS: () => shinySprite(459) },
				{ name: "Female (White Midsection)", img: () => baseSprite("0459-f"), imgS: () => shinySprite("0459-f") },
			],
		},
		{
			id: 173, natiId: 460, name: "Abomasnow", img: () => baseSprite(460), imgS: () => shinySprite(460), tags: ["gender", "mega"], forms: [
				{ name: "Male (Smaller Chest Fur)", img: () => baseSprite(460), imgS: () => shinySprite(460) },
				{ name: "Female (Longer Chest Fur)", img: () => baseSprite("0460-f"), imgS: () => shinySprite("0460-f") },
			],
		},
		{ id: 174, natiId: 712, name: "Bergmite", img: () => baseSprite(712), imgS: () => shinySprite(712) },
		{ id: 175, natiId: 713, name: "Avalugg", img: () => baseSprite(713), imgS: () => shinySprite(713) },
		{
			id: 176, natiId: 123, name: "Scyther", img: () => baseSprite(123), imgS: () => shinySprite(123), tags: ["gender"], forms: [
				{ name: "Male (Smaller Abdomen)", img: () => baseSprite(123), imgS: () => shinySprite(123) },
				{ name: "Female (Larger Abdomen)", img: () => baseSprite("0123-f"), imgS: () => shinySprite("0123-f") },
			],
		},
		{
			id: 177, natiId: 212, name: "Scizor", img: () => baseSprite(212), imgS: () => shinySprite(212), tags: ["gender", "mega"], forms: [
				{ name: "Male (Smaller Abdomen)", img: () => baseSprite(212), imgS: () => shinySprite(212) },
				{ name: "Female (Larger Abdomen)", img: () => baseSprite("0212-f"), imgS: () => shinySprite("0212-f") },
			],
		},
		{ id: 178, natiId: 127, name: "Pinsir", img: () => baseSprite(127), imgS: () => shinySprite(127), tags: ["gender", "mega"] },
		{
			id: 179, natiId: 214, name: "Heracross", img: () => baseSprite(214), imgS: () => shinySprite(214), tags: ["gender", "mega"], forms: [
				{ name: "Male (Sharp Horn)", img: () => baseSprite(214), imgS: () => shinySprite(214) },
				{ name: "Female (Heart Horn)", img: () => baseSprite("0214-f"), imgS: () => shinySprite("0214-f") },
			],
		},
		{ id: 180, natiId: 587, name: "Emolga", img: () => baseSprite(587), imgS: () => shinySprite(587) },
		{ id: 181, natiId: 701, name: "Hawlucha", img: () => baseSprite(701), imgS: () => shinySprite(701), tags: ["mega"] },
		{ id: 182, natiId: 708, name: "Phantump", img: () => baseSprite(708), imgS: () => shinySprite(708) },
		{ id: 183, natiId: 709, name: "Trevenant", img: () => baseSprite(709), imgS: () => shinySprite(709) },
		{ id: 184, natiId: 559, name: "Scraggy", img: () => baseSprite(559), imgS: () => shinySprite(559) },
		{ id: 185, natiId: 560, name: "Scrafty", img: () => baseSprite(560), imgS: () => shinySprite(560), tags: ["mega"] },
		{ id: 186, natiId: 714, name: "Noibat", img: () => baseSprite(714), imgS: () => shinySprite(714) },
		{ id: 187, natiId: 715, name: "Noivern", img: () => baseSprite(715), imgS: () => shinySprite(715) },
		{ id: 188, natiId: 707, name: "Klefki", img: () => baseSprite(707), imgS: () => shinySprite(707) },
		{ id: 189, natiId: 607, name: "Litwick", img: () => baseSprite(607), imgS: () => shinySprite(607) },
		{ id: 190, natiId: 608, name: "Lampent", img: () => baseSprite(608), imgS: () => shinySprite(608) },
		{ id: 191, natiId: 609, name: "Chandelure", img: () => baseSprite(609), imgS: () => shinySprite(609), tags: ["mega"] },
		{ id: 192, natiId: 142, name: "Aerodactyl", img: () => baseSprite(142), imgS: () => shinySprite(142), tags: ["mega", "fossil"] },
		{ id: 193, natiId: 696, name: "Tyrunt", img: () => baseSprite(696), imgS: () => shinySprite(696), tags: ["fossil"] },
		{ id: 194, natiId: 697, name: "Tyrantrum", img: () => baseSprite(697), imgS: () => shinySprite(697), tags: ["fossil"] },
		{ id: 195, natiId: 698, name: "Amaura", img: () => baseSprite(698), imgS: () => shinySprite(698), tags: ["fossil"] },
		{ id: 196, natiId: 699, name: "Aurorus", img: () => baseSprite(699), imgS: () => shinySprite(699), tags: ["fossil"] },
		{ id: 197, natiId: 95, name: "Onix", img: () => baseSprite(95), imgS: () => shinySprite(95) },
		{
			id: 198, natiId: 208, name: "Steelix", img: () => baseSprite(208), imgS: () => shinySprite(208), tags: ["gender", "mega"], forms: [
				{ name: "Male (Two Outer Teeth)", img: () => baseSprite(208), imgS: () => shinySprite(208) },
				{ name: "Female (One Outer Tooth)", img: () => baseSprite("0208-f"), imgS: () => shinySprite("0208-f") },
			],
		},
		{ id: 199, natiId: 304, name: "Aron", img: () => baseSprite(304), imgS: () => shinySprite(304) },
		{ id: 200, natiId: 305, name: "Lairon", img: () => baseSprite(305), imgS: () => shinySprite(305) },
		{ id: 201, natiId: 306, name: "Aggron", img: () => baseSprite(306), imgS: () => shinySprite(306), tags: ["mega"] },
		{ id: 202, natiId: 694, name: "Helioptile", img: () => baseSprite(694), imgS: () => shinySprite(694) },
		{ id: 203, natiId: 695, name: "Heliolisk", img: () => baseSprite(695), imgS: () => shinySprite(695) },
		{
			id: 204, natiId: 710, name: "Pumpkaboo", img: () => baseSprite(710), imgS: () => shinySprite(710), tags: ["other"], forms: [
				{ name: "Small", img: () => baseSprite("0710-s"), imgS: () => shinySprite("0710-s") },
				{ name: "Medium", img: () => baseSprite(710), imgS: () => shinySprite(710) },
				{ name: "Large", img: () => baseSprite("0710-l"), imgS: () => shinySprite("0710-l") },
				{ name: "Jumbo", img: () => baseSprite("0710-h"), imgS: () => shinySprite("0710-h") },
			],
		},
		{
			id: 205, natiId: 711, name: "Gourgeist", img: () => baseSprite(711), imgS: () => shinySprite(711), tags: ["other"], forms: [
				{ name: "Small", img: () => baseSprite("0711-s"), imgS: () => shinySprite("0711-s") },
				{ name: "Medium", img: () => baseSprite(711), imgS: () => shinySprite(711) },
				{ name: "Large", img: () => baseSprite("0711-l"), imgS: () => shinySprite("0711-l") },
				{ name: "Jumbo", img: () => baseSprite("0711-h"), imgS: () => shinySprite("0711-h") },
			],
		},
		{ id: 206, natiId: 246, name: "Larvitar", img: () => baseSprite(246), imgS: () => shinySprite(246), tags: ["pseudo"] },
		{ id: 207, natiId: 247, name: "Pupitar", img: () => baseSprite(247), imgS: () => shinySprite(247), tags: ["pseudo"] },
		{ id: 208, natiId: 248, name: "Tyranitar", img: () => baseSprite(248), imgS: () => shinySprite(248), tags: ["mega", "pseudo"] },
		{ id: 209, natiId: 656, name: "Froakie", img: () => baseSprite(656), imgS: () => shinySprite(656), tags: ["starter"] },
		{ id: 210, natiId: 657, name: "Frogadier", img: () => baseSprite(657), imgS: () => shinySprite(657), tags: ["starter"] },
		{ id: 211, natiId: 658, name: "Greninja", img: () => baseSprite(658), imgS: () => shinySprite(658), tags: ["mega", "starter"] },
		{ id: 212, natiId: 870, name: "Falinks", img: () => baseSprite(870), imgS: () => shinySprite(870), tags: ["mega"] },
		{ id: 213, natiId: 650, name: "Chespin", img: () => baseSprite(650), imgS: () => shinySprite(650), tags: ["starter"] },
		{ id: 214, natiId: 651, name: "Quilladin", img: () => baseSprite(651), imgS: () => shinySprite(651), tags: ["starter"] },
		{ id: 215, natiId: 652, name: "Chesnaught", img: () => baseSprite(652), imgS: () => shinySprite(652), tags: ["mega", "starter"] },
		{ id: 216, natiId: 227, name: "Skarmory", img: () => baseSprite(227), imgS: () => shinySprite(227), tags: ["mega"] },
		{ id: 217, natiId: 653, name: "Fennekin", img: () => baseSprite(653), imgS: () => shinySprite(653), tags: ["starter"] },
		{ id: 218, natiId: 654, name: "Braixen", img: () => baseSprite(654), imgS: () => shinySprite(654), tags: ["starter"] },
		{ id: 219, natiId: 655, name: "Delphox", img: () => baseSprite(655), imgS: () => shinySprite(655), tags: ["mega", "starter"] },
		{ id: 220, natiId: 371, name: "Bagon", img: () => baseSprite(371), imgS: () => shinySprite(371), tags: ["pseudo"] },
		{ id: 221, natiId: 372, name: "Shelgon", img: () => baseSprite(372), imgS: () => shinySprite(372), tags: ["pseudo"] },
		{ id: 222, natiId: 373, name: "Salamence", img: () => baseSprite(373), imgS: () => shinySprite(373), tags: ["mega", "pseudo"] },
		{ id: 223, natiId: 115, name: "Kangaskhan", img: () => baseSprite(115), imgS: () => shinySprite(115), tags: ["mega"] },
		{ id: 224, natiId: 780, name: "Drampa", img: () => baseSprite(780), imgS: () => shinySprite(780), tags: ["mega"] },
		{ id: 225, natiId: 374, name: "Beldum", img: () => baseSprite(374), imgS: () => shinySprite(374), tags: ["pseudo"] },
		{ id: 226, natiId: 375, name: "Metang", img: () => baseSprite(375), imgS: () => shinySprite(375), tags: ["pseudo"] },
		{ id: 227, natiId: 376, name: "Metagross", img: () => baseSprite(376), imgS: () => shinySprite(376), tags: ["mega", "pseudo"] },
		{ id: 228, natiId: 716, name: "Xerneas", img: () => baseSprite(716), imgS: () => shinySprite(716), maxStatus: "caught", tags: ["legendary"], },
		{ id: 229, natiId: 717, name: "Yveltal", img: () => baseSprite(717), imgS: () => shinySprite(717), maxStatus: "caught", tags: ["legendary"], },
		{ id: 230, natiId: 718, name: "Zygarde", img: () => baseSprite(718), imgS: () => shinySprite(718), maxStatus: "caught", tags: ["mega", "legendary"], },
		{ id: 231, natiId: 719, name: "Diancie", img: () => baseSprite(719), imgS: () => shinySprite(719), maxStatus: "caught", tags: ["mega", "mythical"], },
		{ id: 232, natiId: 150, name: "Mewtwo", img: () => baseSprite(150), imgS: () => shinySprite(150), maxStatus: "caught", tags: ["mega", "mythical"], },
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