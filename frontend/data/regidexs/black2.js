const game = "black2";
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Unova Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 0, natiId: 494, name: "Victini", img: baseSprite(494), imgS: shinySprite(494), maxStatus: "caught", tags: ["mythical"] },
			{ id: 1, natiId: 495, name: "Snivy", img: baseSprite(495), imgS: shinySprite(495) },
			{ id: 2, natiId: 496, name: "Servine", img: baseSprite(496), imgS: shinySprite(496) },
			{ id: 3, natiId: 497, name: "Serperior", img: baseSprite(497), imgS: shinySprite(497) },
			{ id: 4, natiId: 498, name: "Tepig", img: baseSprite(498), imgS: shinySprite(498) },
			{ id: 5, natiId: 499, name: "Pignite", img: baseSprite(499), imgS: shinySprite(499) },
			{ id: 6, natiId: 500, name: "Emboar", img: baseSprite(500), imgS: shinySprite(500) },
			{ id: 7, natiId: 501, name: "Oshawott", img: baseSprite(501), imgS: shinySprite(501) },
			{ id: 8, natiId: 502, name: "Dewott", img: baseSprite(502), imgS: shinySprite(502) },
			{ id: 9, natiId: 503, name: "Samurott", img: baseSprite(503), imgS: shinySprite(503) },
			{ id: 10, natiId: 504, name: "Patrat", img: baseSprite(504), imgS: shinySprite(504) },
			{ id: 11, natiId: 505, name: "Watchog", img: baseSprite(505), imgS: shinySprite(505) },
			{ id: 12, natiId: 509, name: "Purrloin", img: baseSprite(509), imgS: shinySprite(509) },
			{ id: 13, natiId: 510, name: "Liepard", img: baseSprite(510), imgS: shinySprite(510) },
			{ id: 14, natiId: 519, name: "Pidove", img: baseSprite(519), imgS: shinySprite(519) },
			{ id: 15, natiId: 520, name: "Tranquill", img: baseSprite(520), imgS: shinySprite(520) },
			{
				id: 16, natiId: 521, name: "Unfezant", img: baseSprite(521), imgS: shinySprite(521), forms: [
					{ name: "Male", img: baseSprite(521), imgS: shinySprite(521), },
					{ name: "Female", img: baseSprite("521-f"), imgS: shinySprite("521-f"), },
				]
			},
			{ id: 17, natiId: 540, name: "Sewaddle", img: baseSprite(540), imgS: shinySprite(540) },
			{ id: 18, natiId: 541, name: "Swadloon", img: baseSprite(541), imgS: shinySprite(541) },
			{ id: 19, natiId: 542, name: "Leavanny", img: baseSprite(542), imgS: shinySprite(542) },
			{ id: 20, natiId: 191, name: "Sunkern", img: baseSprite(191), imgS: shinySprite(191) },
			{ id: 21, natiId: 192, name: "Sunflora", img: baseSprite(192), imgS: shinySprite(192) },
			{ id: 22, natiId: 506, name: "Lillipup", img: baseSprite(506), imgS: shinySprite(506) },
			{ id: 23, natiId: 507, name: "Herdier", img: baseSprite(507), imgS: shinySprite(507) },
			{ id: 24, natiId: 508, name: "Stoutland", img: baseSprite(508), imgS: shinySprite(508) },
			{ id: 25, natiId: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179) },
			{ id: 26, natiId: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180) },
			{ id: 27, natiId: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181) },
			{ id: 28, natiId: 54, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54) },
			{ id: 29, natiId: 55, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55) },
			{ id: 30, natiId: 298, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298) },
			{ id: 31, natiId: 183, name: "Marill", img: baseSprite(183), imgS: shinySprite(183) },
			{ id: 32, natiId: 184, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184) },
			{ id: 33, natiId: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447) },
			{ id: 34, natiId: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448) },
			{ id: 35, natiId: 206, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206) },
			{ id: 36, natiId: 531, name: "Audino", img: baseSprite(531), imgS: shinySprite(531) },
			{ id: 37, natiId: 511, name: "Pansage", img: baseSprite(511), imgS: shinySprite(511) },
			{ id: 38, natiId: 512, name: "Simisage", img: baseSprite(512), imgS: shinySprite(512) },
			{ id: 39, natiId: 513, name: "Pansear", img: baseSprite(513), imgS: shinySprite(513) },
			{ id: 40, natiId: 514, name: "Simisear", img: baseSprite(514), imgS: shinySprite(514) },
			{ id: 41, natiId: 515, name: "Panpour", img: baseSprite(515), imgS: shinySprite(515) },
			{ id: 42, natiId: 516, name: "Simipour", img: baseSprite(516), imgS: shinySprite(516) },
			{ id: 43, natiId: 543, name: "Venipede", img: baseSprite(543), imgS: shinySprite(543) },
			{ id: 44, natiId: 544, name: "Whirlipede", img: baseSprite(544), imgS: shinySprite(544) },
			{ id: 45, natiId: 545, name: "Scolipede", img: baseSprite(545), imgS: shinySprite(545) },
			{ id: 46, natiId: 109, name: "Koffing", img: baseSprite(109), imgS: shinySprite(109) },
			{ id: 47, natiId: 110, name: "Weezing", img: baseSprite(110), imgS: shinySprite(110) },
			{ id: 48, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81) },
			{ id: 49, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82) },
			{ id: 50, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462) },
			{ id: 51, natiId: 58, name: "Growlithe", img: baseSprite(58), imgS: shinySprite(58) },
			{ id: 52, natiId: 59, name: "Arcanine", img: baseSprite(59), imgS: shinySprite(59) },
			{ id: 53, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240) },
			{ id: 54, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126) },
			{ id: 55, natiId: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467) },
			{ id: 56, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239) },
			{ id: 57, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125) },
			{ id: 58, natiId: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466) },
			{
				id: 59, natiId: 19, name: "Rattata", img: baseSprite(19), imgS: shinySprite(19), forms: [
					{ name: "Male", img: baseSprite(19), imgS: shinySprite(19), },
					{ name: "Female", img: baseSprite("019-f"), imgS: shinySprite("019-f"), },
				]
			},
			{
				id: 60, natiId: 20, name: "Raticate", img: baseSprite(20), imgS: shinySprite(20), forms: [
					{ name: "Male", img: baseSprite(20), imgS: shinySprite(20), },
					{ name: "Female", img: baseSprite("020-f"), imgS: shinySprite("020-f"), },
				]
			},
			{
				id: 61, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				]
			},
			{
				id: 62, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				]
			},
			{ id: 63, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169) },
			{ id: 64, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88) },
			{ id: 65, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89) },
			{ id: 66, natiId: 527, name: "Woobat", img: baseSprite(527), imgS: shinySprite(527) },
			{ id: 67, natiId: 528, name: "Swoobat", img: baseSprite(528), imgS: shinySprite(528) },
			{ id: 68, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524) },
			{ id: 69, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525) },
			{ id: 70, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526) },
			{ id: 71, natiId: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95) },
			{
				id: 72, natiId: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), },
				]
			},
			{ id: 73, natiId: 532, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532) },
			{ id: 74, natiId: 533, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533) },
			{ id: 75, natiId: 534, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534) },
			{ id: 76, natiId: 529, name: "Drilbur", img: baseSprite(529), imgS: shinySprite(529) },
			{ id: 77, natiId: 530, name: "Excadrill", img: baseSprite(530), imgS: shinySprite(530) },
			{ id: 78, natiId: 300, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300) },
			{ id: 79, natiId: 301, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301) },
			{ id: 80, natiId: 427, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427) },
			{ id: 81, natiId: 428, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428) },
			{ id: 82, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546) },
			{ id: 83, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547) },
			{ id: 84, natiId: 548, name: "Petilil", img: baseSprite(548), imgS: shinySprite(548) },
			{ id: 85, natiId: 549, name: "Lilligant", img: baseSprite(549), imgS: shinySprite(549) },
			{ id: 86, natiId: 517, name: "Munna", img: baseSprite(517), imgS: shinySprite(517) },
			{ id: 87, natiId: 518, name: "Musharna", img: baseSprite(518), imgS: shinySprite(518) },
			{ id: 88, natiId: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173) },
			{ id: 89, natiId: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35) },
			{ id: 90, natiId: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36) },
			{ id: 91, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133) },
			{ id: 92, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134) },
			{ id: 93, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135) },
			{ id: 94, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136) },
			{ id: 95, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196) },
			{ id: 96, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197) },
			{ id: 97, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470) },
			{ id: 98, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471) },
			{ id: 99, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551) },
			{ id: 100, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552) },
			{ id: 101, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553) },
			{ id: 102, natiId: 554, name: "Darumaka", img: baseSprite(554), imgS: shinySprite(554) },
			{ id: 103, natiId: 555, name: "Darmanitan", img: baseSprite(555), imgS: shinySprite(555) },
			{
				id: 104, natiId: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), },
				]
			},
			{ id: 105, natiId: 568, name: "Trubbish", img: baseSprite(568), imgS: shinySprite(568) },
			{ id: 106, natiId: 569, name: "Garbodor", img: baseSprite(569), imgS: shinySprite(569) },
			{ id: 107, natiId: 572, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572) },
			{ id: 108, natiId: 573, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573) },
			{ id: 109, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627) },
			{ id: 110, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628) },
			{ id: 111, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629) },
			{ id: 112, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630) },
			{ id: 113, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27) },
			{ id: 114, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28) },
			{ id: 115, natiId: 557, name: "Dwebble", img: baseSprite(557), imgS: shinySprite(557) },
			{ id: 116, natiId: 558, name: "Crustle", img: baseSprite(558), imgS: shinySprite(558) },
			{ id: 117, natiId: 559, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559) },
			{ id: 118, natiId: 560, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560) },
			{ id: 119, natiId: 556, name: "Maractus", img: baseSprite(556), imgS: shinySprite(556) },
			{ id: 120, natiId: 561, name: "Sigilyph", img: baseSprite(561), imgS: shinySprite(561) },
			{ id: 121, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328) },
			{ id: 122, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329) },
			{ id: 123, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330) },
			{ id: 124, natiId: 562, name: "Yamask", img: baseSprite(562), imgS: shinySprite(562) },
			{ id: 125, natiId: 563, name: "Cofagrigus", img: baseSprite(563), imgS: shinySprite(563) },
			{ id: 126, natiId: 564, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564) },
			{ id: 127, natiId: 565, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565) },
			{ id: 128, natiId: 566, name: "Archen", img: baseSprite(566), imgS: shinySprite(566) },
			{ id: 129, natiId: 567, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567) },
			{ id: 130, natiId: 599, name: "Klink", img: baseSprite(599), imgS: shinySprite(599) },
			{ id: 131, natiId: 600, name: "Klang", img: baseSprite(600), imgS: shinySprite(600) },
			{ id: 132, natiId: 601, name: "Klinklang", img: baseSprite(601), imgS: shinySprite(601) },
			{ id: 133, natiId: 406, name: "Budew", img: baseSprite(406), imgS: shinySprite(406) },
			{
				id: 134, natiId: 315, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), },
				]
			},
			{
				id: 135, natiId: 407, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), },
				]
			},
			{ id: 136, natiId: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574) },
			{ id: 137, natiId: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575) },
			{ id: 138, natiId: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576) },
			{ id: 139, natiId: 577, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577) },
			{ id: 140, natiId: 578, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578) },
			{ id: 141, natiId: 579, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579) },
			{
				id: 142, natiId: 415, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), },
				]
			},
			{ id: 143, natiId: 416, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416) },
			{ id: 144, natiId: 587, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587) },
			{
				id: 145, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },
				]
			},
			{ id: 146, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127) },
			{ id: 147, natiId: 522, name: "Blitzle", img: baseSprite(522), imgS: shinySprite(522) },
			{ id: 148, natiId: 523, name: "Zebstrika", img: baseSprite(523), imgS: shinySprite(523) },
			{
				id: 149, natiId: 418, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), },
				]
			},
			{
				id: 150, natiId: 419, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), },
				]
			},
			{ id: 151, natiId: 570, name: "Zorua", img: baseSprite(570), imgS: shinySprite(570) },
			{ id: 152, natiId: 571, name: "Zoroark", img: baseSprite(571), imgS: shinySprite(571) },
			{ id: 153, natiId: 580, name: "Ducklett", img: baseSprite(580), imgS: shinySprite(580) },
			{ id: 154, natiId: 581, name: "Swanna", img: baseSprite(581), imgS: shinySprite(581) },
			{ id: 155, natiId: 588, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588) },
			{ id: 156, natiId: 589, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589) },
			{ id: 157, natiId: 616, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616) },
			{ id: 158, natiId: 617, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617) },
			{
				id: 159, natiId: 585, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), },
				]
			},
			{
				id: 160, natiId: 586, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), },
				]
			},
			{ id: 161, natiId: 590, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590) },
			{ id: 162, natiId: 591, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591) },
			{
				id: 163, natiId: 351, name: "Castform", img: baseSprite(351), imgS: shinySprite(351), forms: [
					{ name: "Normal", img: baseSprite(351), imgS: shinySprite(351), },
					{ name: "Rainy", img: baseSprite("351-r"), imgS: shinySprite("351-r"), },
					{ name: "Snowy", img: baseSprite("351-i"), imgS: shinySprite("351-i"), },
					{ name: "Sunny", img: baseSprite("351-s"), imgS: shinySprite("351-s"), },
				]
			},
			{ id: 164, natiId: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299) },
			{ id: 165, natiId: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476) },
			{ id: 166, natiId: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304) },
			{ id: 167, natiId: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305) },
			{ id: 168, natiId: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306) },
			{ id: 169, natiId: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343) },
			{ id: 170, natiId: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344) },
			{ id: 171, natiId: 636, name: "Larvesta", img: baseSprite(636), imgS: shinySprite(636) },
			{ id: 172, natiId: 637, name: "Volcarona", img: baseSprite(637), imgS: shinySprite(637) },
			{ id: 173, natiId: 595, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595) },
			{ id: 174, natiId: 596, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596) },
			{ id: 175, natiId: 597, name: "Ferroseed", img: baseSprite(597), imgS: shinySprite(597) },
			{ id: 176, natiId: 598, name: "Ferrothorn", img: baseSprite(598), imgS: shinySprite(598) },
			{ id: 177, natiId: 602, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602) },
			{ id: 178, natiId: 603, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603) },
			{ id: 179, natiId: 604, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604) },
			{
				id: 180, natiId: 592, name: "Frillish", img: baseSprite(592), imgS: shinySprite(592), forms: [
					{ name: "Male", img: baseSprite(592), imgS: shinySprite(592), },
					{ name: "Female", img: baseSprite("592-f"), imgS: shinySprite("592-f"), },
				]
			},
			{
				id: 181, natiId: 593, name: "Jellicent", img: baseSprite(593), imgS: shinySprite(593), forms: [
					{ name: "Male", img: baseSprite(593), imgS: shinySprite(593), },
					{ name: "Female", img: baseSprite("593-f"), imgS: shinySprite("593-f"), },
				]
			},
			{ id: 182, natiId: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594) },
			{ id: 183, natiId: 610, name: "Axew", img: baseSprite(610), imgS: shinySprite(610) },
			{ id: 184, natiId: 611, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611) },
			{ id: 185, natiId: 612, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612) },
			{ id: 186, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335) },
			{ id: 187, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336) },
			{ id: 188, natiId: 605, name: "Elgyem", img: baseSprite(605), imgS: shinySprite(605) },
			{ id: 189, natiId: 606, name: "Beheeyem", img: baseSprite(606), imgS: shinySprite(606) },
			{ id: 190, natiId: 607, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607) },
			{ id: 191, natiId: 608, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608) },
			{ id: 192, natiId: 609, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609) },
			{ id: 193, natiId: 631, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631) },
			{ id: 194, natiId: 632, name: "Durant", img: baseSprite(632), imgS: shinySprite(632) },
			{ id: 195, natiId: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613) },
			{ id: 196, natiId: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614) },
			{ id: 197, natiId: 615, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615) },
			{ id: 198, natiId: 641, name: "Tornadus", img: baseSprite(641), imgS: shinySprite(641), maxStatus: "caught", tags: ["legendary"] },
			{ id: 199, natiId: 642, name: "Thundurus", img: baseSprite(642), imgS: shinySprite(642), maxStatus: "caught", tags: ["legendary"] },
			{ id: 200, natiId: 645, name: "Landorus", img: baseSprite(645), imgS: shinySprite(645), tags: ["legendary"] },
			{ id: 201, natiId: 451, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451) },
			{ id: 202, natiId: 452, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452) },
			{ id: 203, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227) },
			{
				id: 204, natiId: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), },
				]
			},
			{
				id: 205, natiId: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },
				]
			},
			{ id: 206, natiId: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325) },
			{ id: 207, natiId: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326) },
			{ id: 208, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425) },
			{ id: 209, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426) },
			{ id: 210, natiId: 353, name: "Shuppet", img: baseSprite(353), imgS: shinySprite(353) },
			{ id: 211, natiId: 354, name: "Banette", img: baseSprite(354), imgS: shinySprite(354) },
			{ id: 212, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278) },
			{ id: 213, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279) },
			{ id: 214, natiId: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337) },
			{ id: 215, natiId: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338) },
			{ id: 216, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359) },
			{ id: 217, natiId: 114, name: "Tangela", img: baseSprite(114), imgS: shinySprite(114) },
			{
				id: 218, natiId: 465, name: "Tangrowth", img: baseSprite(465), imgS: shinySprite(465), forms: [
					{ name: "Male", img: baseSprite(465), imgS: shinySprite(465), },
					{ name: "Female", img: baseSprite("465-f"), imgS: shinySprite("465-f"), },
				]
			},
			{ id: 219, natiId: 619, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619) },
			{ id: 220, natiId: 620, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620) },
			{
				id: 221, natiId: 207, name: "Gligar", img: baseSprite(207), imgS: shinySprite(207), forms: [
					{ name: "Male", img: baseSprite(207), imgS: shinySprite(207), },
					{ name: "Female", img: baseSprite("207-f"), imgS: shinySprite("207-f"), },
				]
			},
			{ id: 222, natiId: 472, name: "Gliscor", img: baseSprite(472), imgS: shinySprite(472) },
			{ id: 223, natiId: 624, name: "Pawniard", img: baseSprite(624), imgS: shinySprite(624) },
			{ id: 224, natiId: 625, name: "Bisharp", img: baseSprite(625), imgS: shinySprite(625) },
			{ id: 225, natiId: 638, name: "Cobalion", img: baseSprite(638), imgS: shinySprite(638), tags: ["legendary"] },
			{ id: 226, natiId: 639, name: "Terrakion", img: baseSprite(639), imgS: shinySprite(639), tags: ["legendary"] },
			{ id: 227, natiId: 640, name: "Virizion", img: baseSprite(640), imgS: shinySprite(640), tags: ["legendary"] },
			{ id: 228, natiId: 535, name: "Tympole", img: baseSprite(535), imgS: shinySprite(535) },
			{ id: 229, natiId: 536, name: "Palpitoad", img: baseSprite(536), imgS: shinySprite(536) },
			{ id: 230, natiId: 537, name: "Seismitoad", img: baseSprite(537), imgS: shinySprite(537) },
			{ id: 231, natiId: 618, name: "Stunfisk", img: baseSprite(618), imgS: shinySprite(618) },
			{ id: 232, natiId: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213) },
			{ id: 233, natiId: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458) },
			{ id: 234, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226) },
			{ id: 235, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223) },
			{
				id: 236, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },
				]
			},
			{ id: 237, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222) },
			{ id: 238, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120) },
			{ id: 239, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121) },
			{ id: 240, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320) },
			{ id: 241, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321) },
			{ id: 242, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131) },
			{ id: 243, natiId: 363, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363) },
			{ id: 244, natiId: 364, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364) },
			{ id: 245, natiId: 365, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365) },
			{ id: 246, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333) },
			{ id: 247, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334) },
			{ id: 248, natiId: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37) },
			{ id: 249, natiId: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38) },
			{ id: 250, natiId: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436) },
			{ id: 251, natiId: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437) },
			{
				id: 252, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				]
			},
			{
				id: 253, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), },
				]
			},
			{ id: 254, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225) },
			{ id: 255, natiId: 582, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582) },
			{ id: 256, natiId: 583, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583) },
			{ id: 257, natiId: 584, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584) },
			{ id: 258, natiId: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220) },
			{
				id: 259, natiId: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				]
			},
			{
				id: 260, natiId: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				]
			},
			{ id: 261, natiId: 132, name: "Ditto", img: baseSprite(132), imgS: shinySprite(132) },
			{ id: 262, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374) },
			{ id: 263, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375) },
			{ id: 264, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376) },
			{ id: 265, natiId: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86) },
			{ id: 266, natiId: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87) },
			{ id: 267, natiId: 538, name: "Throh", img: baseSprite(538), imgS: shinySprite(538) },
			{ id: 268, natiId: 539, name: "Sawk", img: baseSprite(539), imgS: shinySprite(539) },
			{ id: 269, natiId: 626, name: "Bouffalant", img: baseSprite(626), imgS: shinySprite(626) },
			{ id: 270, natiId: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621) },
			{ id: 271, natiId: 622, name: "Golett", img: baseSprite(622), imgS: shinySprite(622) },
			{ id: 272, natiId: 623, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623) },
			{ id: 273, natiId: 633, name: "Deino", img: baseSprite(633), imgS: shinySprite(633) },
			{ id: 274, natiId: 634, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634) },
			{ id: 275, natiId: 635, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635) },
			{ id: 276, natiId: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287) },
			{ id: 277, natiId: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288) },
			{ id: 278, natiId: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289) },
			{ id: 279, natiId: 341, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341) },
			{ id: 280, natiId: 342, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342) },
			{ id: 281, natiId: 174, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174) },
			{ id: 282, natiId: 39, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39) },
			{ id: 283, natiId: 40, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40) },
			{ id: 284, natiId: 108, name: "Lickitung", img: baseSprite(108), imgS: shinySprite(108) },
			{ id: 285, natiId: 463, name: "Lickilicky", img: baseSprite(463), imgS: shinySprite(463) },
			{ id: 286, natiId: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193) },
			{ id: 287, natiId: 469, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469) },
			{ id: 288, natiId: 357, name: "Tropius", img: baseSprite(357), imgS: shinySprite(357) },
			{ id: 289, natiId: 455, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455) },
			{
				id: 290, natiId: 453, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), },
				]
			},
			{
				id: 291, natiId: 454, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), },
				]
			},
			{ id: 292, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246) },
			{ id: 293, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247) },
			{ id: 294, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248) },
			{ id: 295, natiId: 643, name: "Reshiram", img: baseSprite(643), imgS: shinySprite(643), maxStatus: "caught", tags: ["legendary"] },
			{ id: 296, natiId: 644, name: "Zekrom", img: baseSprite(644), imgS: shinySprite(644), maxStatus: "caught", tags: ["legendary"] },
			{ id: 297, natiId: 646, name: "Kyurem", img: baseSprite(646), imgS: shinySprite(646), tags: ["legendary"] },
			{ id: 298, natiId: 647, name: "Keldeo", img: baseSprite(647), imgS: shinySprite(647), maxStatus: "caught", tags: ["mythical"] },
			{ id: 299, natiId: 648, name: "Meloetta", img: baseSprite(648), imgS: shinySprite(648), maxStatus: "caught", tags: ["mythical"] },
			{ id: 300, natiId: 649, name: "Genesect", img: baseSprite(649), imgS: shinySprite(649), maxStatus: "caught", tags: ["mythical"] }
		],
	},
});
