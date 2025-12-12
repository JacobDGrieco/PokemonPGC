const game = "x";
const sub = game + "-coastal";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Coastal Kalos Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 425, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425) },
			{ id: 2, natiId: 426, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426) },
			{ id: 3, natiId: 619, name: "Mienfoo", img: baseSprite(619), imgS: shinySprite(619) },
			{ id: 4, natiId: 620, name: "Mienshao", img: baseSprite(620), imgS: shinySprite(620) },
			{ id: 5, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335) },
			{ id: 6, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336) },
			{ id: 7, natiId: 325, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325) },
			{ id: 8, natiId: 326, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326) },
			{ id: 9, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), tags: ["mega"] },
			{ id: 10, natiId: 686, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686) },
			{ id: 11, natiId: 687, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687) },
			{ id: 12, natiId: 337, name: "Lunatone", img: baseSprite(337), imgS: shinySprite(337) },
			{ id: 13, natiId: 338, name: "Solrock", img: baseSprite(338), imgS: shinySprite(338) },
			{ id: 14, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), tags: ["pseudo"] },
			{ id: 15, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), tags: ["pseudo"] },
			{ id: 16, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), tags: ["pseudo"] },
			{ id: 17, natiId: 278, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278) },
			{ id: 18, natiId: 279, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279) },
			{ id: 19, natiId: 276, name: "Taillow", img: baseSprite(276), imgS: shinySprite(276) },
			{ id: 20, natiId: 277, name: "Swellow", img: baseSprite(277), imgS: shinySprite(277) },
			{ id: 21, natiId: 688, name: "Binacle", img: baseSprite(688), imgS: shinySprite(688) },
			{ id: 22, natiId: 689, name: "Barbaracle", img: baseSprite(689), imgS: shinySprite(689) },
			{ id: 23, natiId: 557, name: "Dwebble", img: baseSprite(557), imgS: shinySprite(557) },
			{ id: 24, natiId: 558, name: "Crustle", img: baseSprite(558), imgS: shinySprite(558) },
			{ id: 25, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72) },
			{ id: 26, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73) },
			{ id: 27, natiId: 320, name: "Wailmer", img: baseSprite(320), imgS: shinySprite(320) },
			{ id: 28, natiId: 321, name: "Wailord", img: baseSprite(321), imgS: shinySprite(321) },
			{ id: 29, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370) },
			{ id: 30, natiId: 690, name: "Skrelp", img: baseSprite(690), imgS: shinySprite(690) },
			{ id: 31, natiId: 691, name: "Dragalge", img: baseSprite(691), imgS: shinySprite(691) },
			{ id: 32, natiId: 692, name: "Clauncher", img: baseSprite(692), imgS: shinySprite(692) },
			{ id: 33, natiId: 693, name: "Clawitzer", img: baseSprite(693), imgS: shinySprite(693) },
			{ id: 34, natiId: 120, name: "Staryu", img: baseSprite(120), imgS: shinySprite(120) },
			{ id: 35, natiId: 121, name: "Starmie", img: baseSprite(121), imgS: shinySprite(121) },
			{ id: 36, natiId: 90, name: "Shellder", img: baseSprite(90), imgS: shinySprite(90) },
			{ id: 37, natiId: 91, name: "Cloyster", img: baseSprite(91), imgS: shinySprite(91) },
			{ id: 38, natiId: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211) },
			{ id: 39, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116) },
			{ id: 40, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117) },
			{ id: 41, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230) },
			{
				id: 42, natiId: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				]
			},
			{ id: 43, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551) },
			{ id: 44, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552) },
			{ id: 45, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553) },
			{ id: 46, natiId: 694, name: "Helioptile", img: baseSprite(694), imgS: shinySprite(694) },
			{ id: 47, natiId: 695, name: "Heliolisk", img: baseSprite(695), imgS: shinySprite(695) },
			{
				id: 48, natiId: 449, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), },
				]
			},
			{
				id: 49, natiId: 450, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), },
				]
			},
			{
				id: 50, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },]
			},
			{
				id: 51, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },]
			},
			{
				id: 52, natiId: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				]
			},
			{ id: 53, natiId: 95, name: "Onix", img: baseSprite(95), imgS: shinySprite(95) },
			{
				id: 54, natiId: 208, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), },
				]
			},
			{ id: 55, natiId: 527, name: "Woobat", img: baseSprite(527), imgS: shinySprite(527) },
			{ id: 56, natiId: 528, name: "Swoobat", img: baseSprite(528), imgS: shinySprite(528) },
			{ id: 57, natiId: 66, name: "Machop", img: baseSprite(66), imgS: shinySprite(66) },
			{ id: 58, natiId: 67, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67) },
			{ id: 59, natiId: 68, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68) },
			{ id: 60, natiId: 104, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104) },
			{ id: 61, natiId: 105, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105) },
			{ id: 62, natiId: 115, name: "Kangaskhan", img: baseSprite(115), imgS: shinySprite(115), tags: ["mega"] },
			{ id: 63, natiId: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), tags: ["mega"] },
			{ id: 64, natiId: 696, name: "Tyrunt", img: baseSprite(696), imgS: shinySprite(696), tags: ["fossil"] },
			{ id: 65, natiId: 697, name: "Tyrantrum", img: baseSprite(697), imgS: shinySprite(697), tags: ["fossil"] },
			{ id: 66, natiId: 698, name: "Amaura", img: baseSprite(698), imgS: shinySprite(698), tags: ["fossil"] },
			{ id: 67, natiId: 699, name: "Aurorus", img: baseSprite(699), imgS: shinySprite(699), tags: ["fossil"] },
			{ id: 68, natiId: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), tags: ["fossil", "mega"] },
			{ id: 69, natiId: 597, name: "Ferroseed", img: baseSprite(597), imgS: shinySprite(597) },
			{ id: 70, natiId: 598, name: "Ferrothorn", img: baseSprite(598), imgS: shinySprite(598) },
			{ id: 71, natiId: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209) },
			{ id: 72, natiId: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210) },
			{ id: 73, natiId: 309, name: "Electrike", img: baseSprite(309), imgS: shinySprite(309) },
			{ id: 74, natiId: 310, name: "Manectric", img: baseSprite(310), imgS: shinySprite(310), tags: ["mega"] },
			{ id: 75, natiId: 228, name: "Houndour", img: baseSprite(228), imgS: shinySprite(228) },
			{
				id: 76, natiId: 229, name: "Houndoom", img: baseSprite(229), imgS: shinySprite(229), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(229), imgS: shinySprite(229), },
					{ name: "Female", img: baseSprite("229-f"), imgS: shinySprite("229-f"), },]
			},
			{ id: 77, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133) },
			{ id: 78, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134) },
			{ id: 79, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135) },
			{ id: 80, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136) },
			{ id: 81, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196) },
			{ id: 82, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197) },
			{ id: 83, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470) },
			{ id: 84, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471) },
			{ id: 85, natiId: 700, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700) },
			{ id: 86, natiId: 587, name: "Emolga", img: baseSprite(587), imgS: shinySprite(587) },
			{ id: 87, natiId: 193, name: "Yanma", img: baseSprite(193), imgS: shinySprite(193) },
			{ id: 88, natiId: 469, name: "Yanmega", img: baseSprite(469), imgS: shinySprite(469) },
			{ id: 89, natiId: 701, name: "Hawlucha", img: baseSprite(701), imgS: shinySprite(701) },
			{ id: 90, natiId: 561, name: "Sigilyph", img: baseSprite(561), imgS: shinySprite(561) },
			{ id: 91, natiId: 622, name: "Golett", img: baseSprite(622), imgS: shinySprite(622) },
			{ id: 92, natiId: 623, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623) },
			{ id: 93, natiId: 299, name: "Nosepass", img: baseSprite(299), imgS: shinySprite(299) },
			{ id: 94, natiId: 476, name: "Probopass", img: baseSprite(476), imgS: shinySprite(476) },
			{ id: 95, natiId: 296, name: "Makuhita", img: baseSprite(296), imgS: shinySprite(296) },
			{ id: 96, natiId: 297, name: "Hariyama", img: baseSprite(297), imgS: shinySprite(297) },
			{ id: 97, natiId: 538, name: "Throh", img: baseSprite(538), imgS: shinySprite(538) },
			{ id: 98, natiId: 539, name: "Sawk", img: baseSprite(539), imgS: shinySprite(539) },
			{
				id: 99, natiId: 396, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), },
				]
			},
			{
				id: 100, natiId: 397, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), },
				]
			},
			{
				id: 101, natiId: 398, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), },
				]
			},
			{ id: 102, natiId: 434, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434) },
			{ id: 103, natiId: 435, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435) },
			{ id: 104, natiId: 29, name: "Nidoran ♀", img: baseSprite(29), imgS: shinySprite(29) },
			{ id: 105, natiId: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30) },
			{ id: 106, natiId: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31) },
			{ id: 107, natiId: 32, name: "Nidoran ♂", img: baseSprite(32), imgS: shinySprite(32) },
			{ id: 108, natiId: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33) },
			{ id: 109, natiId: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34) },
			{ id: 110, natiId: 702, name: "Dedenne", img: baseSprite(702), imgS: shinySprite(702) },
			{ id: 111, natiId: 433, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433) },
			{ id: 112, natiId: 358, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358) },
			{ id: 113, natiId: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439) },
			{ id: 114, natiId: 122, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122) },
			{ id: 115, natiId: 577, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577) },
			{ id: 116, natiId: 578, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578) },
			{ id: 117, natiId: 579, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579) },
			{ id: 118, natiId: 360, name: "Wynaut", img: baseSprite(360), imgS: shinySprite(360) },
			{
				id: 119, natiId: 202, name: "Wobbuffet", img: baseSprite(202), imgS: shinySprite(202), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(202), imgS: shinySprite(202), },
					{ name: "Female", img: baseSprite("202-f"), imgS: shinySprite("202-f"), },
				]
			},
			{ id: 120, natiId: 524, name: "Roggenrola", img: baseSprite(524), imgS: shinySprite(524) },
			{ id: 121, natiId: 525, name: "Boldore", img: baseSprite(525), imgS: shinySprite(525) },
			{ id: 122, natiId: 526, name: "Gigalith", img: baseSprite(526), imgS: shinySprite(526) },
			{ id: 123, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302) },
			{ id: 124, natiId: 703, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703) },
			{ id: 125, natiId: 128, name: "Tauros", img: baseSprite(128), imgS: shinySprite(128) },
			{ id: 126, natiId: 241, name: "Miltank", img: baseSprite(241), imgS: shinySprite(241) },
			{ id: 127, natiId: 179, name: "Mareep", img: baseSprite(179), imgS: shinySprite(179) },
			{ id: 128, natiId: 180, name: "Flaaffy", img: baseSprite(180), imgS: shinySprite(180) },
			{ id: 129, natiId: 181, name: "Ampharos", img: baseSprite(181), imgS: shinySprite(181), tags: ["mega"] },
			{ id: 130, natiId: 127, name: "Pinsir", img: baseSprite(127), imgS: shinySprite(127), tags: ["mega"] },
			{
				id: 131, natiId: 214, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), },]
			},
			{
				id: 132, natiId: 417, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), },
				]
			},
			{ id: 133, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79) },
			{ id: 134, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80) },
			{ id: 135, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199) },
			{ id: 136, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102) },
			{ id: 137, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103) },
			{ id: 138, natiId: 441, name: "Chatot", img: baseSprite(441), imgS: shinySprite(441) },
			{ id: 139, natiId: 458, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458) },
			{ id: 140, natiId: 226, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226) },
			{ id: 141, natiId: 366, name: "Clamperl", img: baseSprite(366), imgS: shinySprite(366) },
			{ id: 142, natiId: 367, name: "Huntail", img: baseSprite(367), imgS: shinySprite(367) },
			{ id: 143, natiId: 368, name: "Gorebyss", img: baseSprite(368), imgS: shinySprite(368) },
			{ id: 144, natiId: 223, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223) },
			{
				id: 145, natiId: 224, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), },
				]
			},
			{ id: 146, natiId: 222, name: "Corsola", img: baseSprite(222), imgS: shinySprite(222) },
			{ id: 147, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170) },
			{ id: 148, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171) },
			{ id: 149, natiId: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594) },
			{ id: 150, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131) },
			{ id: 151, natiId: 144, name: "Articuno", img: baseSprite(144), imgS: shinySprite(144), tags: ["legendary"] },
			{ id: 152, natiId: 145, name: "Zapdos", img: baseSprite(145), imgS: shinySprite(145), tags: ["legendary"] },
			{ id: 153, natiId: 146, name: "Moltres", img: baseSprite(146), imgS: shinySprite(146), tags: ["legendary"] },
		]
	},
});
