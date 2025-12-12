const game = "shield";
const sub = game + "ct";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Crown Tundra Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, natiId: 872, name: "Snom", img: baseSprite(872), imgS: shinySprite(872), },
			{ id: 2, natiId: 873, name: "Frosmoth", img: baseSprite(873), imgS: shinySprite(873), },
			{ id: 3, natiId: 831, name: "Wooloo", img: baseSprite(831), imgS: shinySprite(831), },
			{ id: 4, natiId: 832, name: "Dubwool", img: baseSprite(832), imgS: shinySprite(832), },
			{ id: 5, natiId: 819, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), },
			{ id: 6, natiId: 820, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), },
			{ id: 7, natiId: 220, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), },
			{
				id: 8, natiId: 221, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), },
				],
			},
			{
				id: 9, natiId: 473, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), },
				],
			},
			{ id: 10, natiId: 439, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), },
			{
				id: 11, natiId: 122, name: "Mr. Mime", img: baseSprite("122-g"), imgS: shinySprite("122-g"), forms: [
					{ name: "Kantonian", img: baseSprite(122), imgS: shinySprite(122), },
					{ name: "Galarian", img: baseSprite("122-g"), imgS: shinySprite("122-g"), },
				],
			},
			{ id: 12, natiId: 866, name: "Mr. Rime", img: baseSprite(866), imgS: shinySprite(866), },
			{ id: 13, natiId: 238, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), },
			{ id: 14, natiId: 124, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{ id: 15, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 16, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 17, natiId: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 18, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 19, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 20, natiId: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 21, natiId: 531, name: "Audino", img: baseSprite(531), imgS: shinySprite(531), },
			{ id: 22, natiId: 582, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), },
			{ id: 23, natiId: 583, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), },
			{ id: 24, natiId: 584, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), },
			{ id: 25, natiId: 361, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), },
			{ id: 26, natiId: 362, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), },
			{ id: 27, natiId: 478, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), },
			{
				id: 28, natiId: 215, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), },
				],
			},
			{
				id: 29, natiId: 461, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), },
				],
			},
			{ id: 30, natiId: 615, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), },
			{
				id: 31, natiId: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), },
				],
			},
			{
				id: 32, natiId: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), },
				],
			},
			{ id: 33, natiId: 708, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), },
			{ id: 34, natiId: 709, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), },
			{ id: 35, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 36, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 37, natiId: 859, name: "Impidimp", img: baseSprite(859), imgS: shinySprite(859), },
			{ id: 38, natiId: 860, name: "Morgrem", img: baseSprite(860), imgS: shinySprite(860), },
			{ id: 39, natiId: 861, name: "Grimmsnarl", img: baseSprite(861), imgS: shinySprite(861), },
			{ id: 40, natiId: 856, name: "Hatenna", img: baseSprite(856), imgS: shinySprite(856), },
			{ id: 41, natiId: 857, name: "Hattrem", img: baseSprite(857), imgS: shinySprite(857), },
			{ id: 42, natiId: 858, name: "Hatterene", img: baseSprite(858), imgS: shinySprite(858), },
			{ id: 43, natiId: 173, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), },
			{ id: 44, natiId: 35, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), },
			{ id: 45, natiId: 36, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), },
			{ id: 46, natiId: 778, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), },
			{ id: 47, natiId: 442, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{ id: 48, natiId: 607, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607), },
			{ id: 49, natiId: 608, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608), },
			{ id: 50, natiId: 609, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609), },
			{ id: 51, natiId: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), },
			{ id: 52, natiId: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), },
			{ id: 53, natiId: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), },
			{ id: 54, natiId: 577, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577), },
			{ id: 55, natiId: 578, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578), },
			{ id: 56, natiId: 579, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579), },
			{ id: 57, natiId: 532, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532), },
			{ id: 58, natiId: 533, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533), },
			{ id: 59, natiId: 534, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534), },
			{ id: 60, natiId: 339, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), },
			{ id: 61, natiId: 340, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), },
			{
				id: 62, natiId: 129, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), },
				],
			},
			{
				id: 63, natiId: 130, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), },
				],
			},
			{
				id: 64, natiId: 550, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), },
				],
			},
			{ id: 65, natiId: 29, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), },
			{ id: 66, natiId: 30, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), },
			{ id: 67, natiId: 31, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), },
			{ id: 68, natiId: 32, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), },
			{ id: 69, natiId: 33, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), },
			{ id: 70, natiId: 34, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), },
			{
				id: 71, natiId: 263, name: "Zigzagoon", img: baseSprite("263-g"), imgS: shinySprite("263-g"), forms: [
					{ name: "Hoennian", img: baseSprite(263), imgS: shinySprite(263), },
					{ name: "Galarian", img: baseSprite("263-g"), imgS: shinySprite("263-g"), },
				],
			},
			{
				id: 72, natiId: 264, name: "Linoone", img: baseSprite("264-g"), imgS: shinySprite("264-g"), forms: [
					{ name: "Hoennian", img: baseSprite(264), imgS: shinySprite(264), },
					{ name: "Galarian", img: baseSprite("264-g"), imgS: shinySprite("264-g"), },
				],
			},
			{ id: 73, natiId: 862, name: "Obstagoon", img: baseSprite(862), imgS: shinySprite(862), },
			{
				id: 74, natiId: 133, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), forms: [
					{ name: "Male", img: baseSprite(133), imgS: shinySprite(133), },
					{ name: "Female", img: baseSprite("133-f"), imgS: shinySprite("133-f"), },
				],
			},
			{ id: 75, natiId: 134, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), },
			{ id: 76, natiId: 135, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), },
			{ id: 77, natiId: 136, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), },
			{ id: 78, natiId: 197, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), },
			{ id: 79, natiId: 196, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), },
			{ id: 80, natiId: 471, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), },
			{ id: 81, natiId: 470, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), },
			{ id: 82, natiId: 700, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), },
			{ id: 83, natiId: 696, name: "Tyrunt", img: baseSprite(696), imgS: shinySprite(696), },
			{ id: 84, natiId: 697, name: "Tyrantrum", img: baseSprite(697), imgS: shinySprite(697), },
			{ id: 85, natiId: 698, name: "Amaura", img: baseSprite(698), imgS: shinySprite(698), },
			{ id: 86, natiId: 699, name: "Aurorus", img: baseSprite(699), imgS: shinySprite(699), },
			{ id: 87, natiId: 436, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), },
			{ id: 88, natiId: 437, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), },
			{ id: 89, natiId: 874, name: "Stonjourner", img: baseSprite(874), imgS: shinySprite(874), },
			{ id: 90, natiId: 875, name: "Eiscue", img: baseSprite(875), imgS: shinySprite(875), },
			{ id: 91, natiId: 751, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), },
			{ id: 92, natiId: 752, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), },
			{ id: 93, natiId: 595, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595), },
			{ id: 94, natiId: 596, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596), },
			{ id: 95, natiId: 588, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), },
			{ id: 96, natiId: 589, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), },
			{ id: 97, natiId: 616, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), },
			{ id: 98, natiId: 617, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), },
			{ id: 99, natiId: 850, name: "Sizzlipede", img: baseSprite(850), imgS: shinySprite(850), },
			{ id: 100, natiId: 851, name: "Centiskorch", img: baseSprite(851), imgS: shinySprite(851), },
			{ id: 101, natiId: 632, name: "Durant", img: baseSprite(632), imgS: shinySprite(632), },
			{ id: 102, natiId: 631, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631), },
			{
				id: 103, natiId: 554, name: "Darumaka", img: baseSprite("554-g"), imgS: shinySprite("554-g"), forms: [
					{ name: "Unovian", img: baseSprite(554), imgS: shinySprite(554), },
					{ name: "Galarian", img: baseSprite("554-g"), imgS: shinySprite("554-g"), },
				],
			},
			{
				id: 104, natiId: 555, name: "Darmanitan", img: baseSprite("555-g"), imgS: shinySprite("555-g"), forms: [
					{ name: "Unovian", img: baseSprite(555), imgS: shinySprite(555), },
					{ name: "Galarian", img: baseSprite("555-g"), imgS: shinySprite("555-g"), },
				],
			},
			{
				id: 105, natiId: 77, name: "Ponyta", img: baseSprite("077-g"), imgS: shinySprite("077-g"), forms: [
					{ name: "Kantonian", img: baseSprite(77), imgS: shinySprite(77), },
					{ name: "Galarian", img: baseSprite("077-g"), imgS: shinySprite("077-g"), },
				],
			},
			{
				id: 106, natiId: 78, name: "Rapidash", img: baseSprite("078-g"), imgS: shinySprite("078-g"), forms: [
					{ name: "Unovian", img: baseSprite(78), imgS: shinySprite(78), },
					{ name: "Galarian", img: baseSprite("078-g"), imgS: shinySprite("078-g"), },
				],
			},
			{ id: 107, natiId: 359, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), },
			{ id: 108, natiId: 878, name: "Cufant", img: baseSprite(878), imgS: shinySprite(878), },
			{ id: 109, natiId: 879, name: "Copperajah", img: baseSprite(879), imgS: shinySprite(879), },
			{ id: 110, natiId: 885, name: "Dreepy", img: baseSprite(885), imgS: shinySprite(885), },
			{ id: 111, natiId: 886, name: "Drakloak", img: baseSprite(886), imgS: shinySprite(886), },
			{ id: 112, natiId: 887, name: "Dragapult", img: baseSprite(887), imgS: shinySprite(887), },
			{ id: 113, natiId: 371, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 114, natiId: 372, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 115, natiId: 373, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{
				id: 116, natiId: 443, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), },
				],
			},
			{
				id: 117, natiId: 444, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), },
				],
			},
			{
				id: 118, natiId: 445, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },
				],
			},
			{ id: 119, natiId: 621, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), },
			{ id: 120, natiId: 225, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), },
			{ id: 121, natiId: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), },
			{ id: 122, natiId: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), },
			{ id: 123, natiId: 138, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), },
			{ id: 124, natiId: 139, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), },
			{ id: 125, natiId: 140, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), },
			{ id: 126, natiId: 141, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), },
			{ id: 127, natiId: 142, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), },
			{ id: 128, natiId: 703, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), },
			{ id: 129, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), },
			{ id: 130, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), },
			{ id: 131, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), },
			{
				id: 132, natiId: 854, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), },]
			},
			{
				id: 133, natiId: 855, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), },]
			},
			{ id: 134, natiId: 447, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), },
			{ id: 135, natiId: 448, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), },
			{ id: 136, natiId: 633, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), },
			{ id: 137, natiId: 634, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), },
			{ id: 138, natiId: 635, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), },
			{ id: 139, natiId: 246, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), },
			{ id: 140, natiId: 247, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), },
			{ id: 141, natiId: 248, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), },
			{ id: 142, natiId: 712, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712), },
			{ id: 143, natiId: 713, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713), },
			{
				id: 144, natiId: 41, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 145, natiId: 42, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 146, natiId: 169, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 147, natiId: 564, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), },
			{ id: 148, natiId: 565, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), },
			{ id: 149, natiId: 566, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), },
			{ id: 150, natiId: 567, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), },
			{ id: 151, natiId: 343, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), },
			{ id: 152, natiId: 344, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), },
			{ id: 153, natiId: 622, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), },
			{ id: 154, natiId: 623, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), },
			{ id: 155, natiId: 835, name: "Yamper", img: baseSprite(835), imgS: shinySprite(835), },
			{ id: 156, natiId: 836, name: "Boltund", img: baseSprite(836), imgS: shinySprite(836), },
			{ id: 157, natiId: 877, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), },
			{ id: 158, natiId: 871, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), },
			{ id: 159, natiId: 363, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), },
			{ id: 160, natiId: 364, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), },
			{ id: 161, natiId: 365, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), },
			{ id: 162, natiId: 781, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), },
			{ id: 163, natiId: 821, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), },
			{ id: 164, natiId: 822, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), },
			{ id: 165, natiId: 823, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), },
			{ id: 166, natiId: 829, name: "Gossifleur", img: baseSprite(829), imgS: shinySprite(829), },
			{ id: 167, natiId: 830, name: "Eldegoss", img: baseSprite(830), imgS: shinySprite(830), },
			{ id: 168, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 169, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 170, natiId: 213, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), },
			{
				id: 171, natiId: 876, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), },
				],
			},
			{ id: 172, natiId: 446, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), },
			{ id: 173, natiId: 143, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), },
			{ id: 174, natiId: 302, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), },
			{ id: 175, natiId: 303, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), },
			{ id: 176, natiId: 837, name: "Rolycoly", img: baseSprite(837), imgS: shinySprite(837), },
			{ id: 177, natiId: 838, name: "Carkol", img: baseSprite(838), imgS: shinySprite(838), },
			{ id: 178, natiId: 839, name: "Coalossal", img: baseSprite(839), imgS: shinySprite(839), },
			{ id: 179, natiId: 597, name: "Ferroseed", img: baseSprite(597), imgS: shinySprite(597), },
			{ id: 180, natiId: 598, name: "Ferrothorn", img: baseSprite(598), imgS: shinySprite(598), },
			{ id: 181, natiId: 714, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), },
			{ id: 182, natiId: 715, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), },
			{ id: 183, natiId: 345, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), },
			{ id: 184, natiId: 346, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), },
			{ id: 185, natiId: 347, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), },
			{ id: 186, natiId: 348, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), },
			{
				id: 187, natiId: 369, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				],
			},
			{ id: 188, natiId: 349, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 189, natiId: 350, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), },
				],
			},
			{ id: 190, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{ id: 191, natiId: 304, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 192, natiId: 305, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 193, natiId: 306, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), },
			{ id: 194, natiId: 147, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), },
			{ id: 195, natiId: 148, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), },
			{ id: 196, natiId: 149, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), },
			{ id: 197, natiId: 377, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), legendary: true, },
			{ id: 198, natiId: 378, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), legendary: true, },
			{ id: 199, natiId: 379, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), legendary: true, },
			{ id: 200, natiId: 894, name: "Regieleki", img: baseSprite(894), imgS: shinySprite(894), legendary: true, },
			{ id: 201, natiId: 895, name: "Regidrago", img: baseSprite(895), imgS: shinySprite(895), legendary: true, },
			{
				id: 202, natiId: 144, name: "Articuno", img: baseSprite("144-g"), imgS: shinySprite("144-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(144), imgS: shinySprite(144), legendary: true, },
					{ name: "Galarian", img: baseSprite("144-g"), imgS: shinySprite("144-g"), legendary: true, },
				],
			},
			{
				id: 203, natiId: 145, name: "Zapdos", img: baseSprite("145-g"), imgS: shinySprite("145-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(145), imgS: shinySprite(145), legendary: true, },
					{ name: "Galarian", img: baseSprite("145-g"), imgS: shinySprite("145-g"), legendary: true, },
				],
			},
			{
				id: 204, natiId: 146, name: "Moltres", img: baseSprite("146-g"), imgS: shinySprite("146-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(146), imgS: shinySprite(146), legendary: true, },
					{ name: "Galarian", img: baseSprite("146-g"), imgS: shinySprite("146-g"), legendary: true, },
				],
			},
			{ id: 205, natiId: 638, name: "Cobalion", img: baseSprite(638), imgS: shinySprite(638), legendary: true, },
			{ id: 206, natiId: 639, name: "Terrakion", img: baseSprite(639), imgS: shinySprite(639), legendary: true, },
			{ id: 207, natiId: 640, name: "Virizion", img: baseSprite(640), imgS: shinySprite(640), legendary: true, },
			{ id: 208, natiId: 896, name: "Glastrier", img: baseSprite(896), imgS: shinySprite(896), legendary: true, },
			{ id: 209, natiId: 897, name: "Spectrier", img: baseSprite(897), imgS: shinySprite(897), legendary: true, },
			{ id: 210, natiId: 898, name: "Calyrex", img: baseSprite(898), imgS: shinySprite(898), legendary: true, }
		],
	},
});