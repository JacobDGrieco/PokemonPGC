const game = "sword";
const sub = game + "ct";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const galarDex = (id) => _regionalDex(game, "regional", id);
const ioaDex = (id) => _regionalDex(game + "ioa", "regional", id);
const ctDex = (id) => _regionalDex(game + "ct", "regional", id);
const galarDexForm = (id, form) => _regionalDex(game, "regional", id, form);
const ioaDexForm = (id, form) => _regionalDex(game + "ioa", "regional", id, form);
const ctDexForm = (id, form) => _regionalDex(game + "ct", "regional", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Crown Tundra Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Snom", img: baseSprite(872), imgS: shinySprite(872), dexSync: [galarDex(349)], },
			{ id: 2, name: "Frosmoth", img: baseSprite(873), imgS: shinySprite(873), dexSync: [galarDex(350)], },
			{ id: 3, name: "Wooloo", img: baseSprite(831), imgS: shinySprite(831), dexSync: [galarDex(34)], },
			{ id: 4, name: "Dubwool", img: baseSprite(832), imgS: shinySprite(832), dexSync: [galarDex(35)], },
			{ id: 5, name: "Skwovet", img: baseSprite(819), imgS: shinySprite(819), dexSync: [ioaDex(9), galarDex(24)], },
			{ id: 6, name: "Greedent", img: baseSprite(820), imgS: shinySprite(820), dexSync: [ioaDex(10), galarDex(25)], },
			{ id: 7, name: "Swinub", img: baseSprite(220), imgS: shinySprite(220), dexSync: [galarDex(75)], },
			{
				id: 8, name: "Piloswine", img: baseSprite(221), imgS: shinySprite(221), dexSync: [galarDex(76)], forms: [
					{ name: "Male", img: baseSprite(221), imgS: shinySprite(221), dexSync: [galarDexForm(76, "Male")], },
					{ name: "Female", img: baseSprite("221-f"), imgS: shinySprite("221-f"), dexSync: [galarDexForm(76, "Female")], },
				],
			},
			{
				id: 9, name: "Mamoswine", img: baseSprite(473), imgS: shinySprite(473), dexSync: [galarDex(77)], forms: [
					{ name: "Male", img: baseSprite(473), imgS: shinySprite(473), dexSync: [galarDexForm(77, "Male")], },
					{ name: "Female", img: baseSprite("473-f"), imgS: shinySprite("473-f"), dexSync: [galarDexForm(77, "Female")], },
				],
			},
			{ id: 10, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), dexSync: [galarDex(364)], },
			{
				id: 11, name: "Mr. Mime", img: baseSprite("122-g"), imgS: shinySprite("122-g"), dexSync: [galarDex(365)], forms: [
					{ name: "Kantonian", img: baseSprite(122), imgS: shinySprite(122), dexSync: [galarDexForm(365, "Kantonian")], },
					{ name: "Galarian", img: baseSprite("122-g"), imgS: shinySprite("122-g"), dexSync: [galarDexForm(365, "Galarian")], },
				],
			},
			{ id: 12, name: "Mr. Rime", img: baseSprite(866), imgS: shinySprite(866), dexSync: [galarDex(366)], },
			{ id: 13, name: "Smoochum", img: baseSprite(238), imgS: shinySprite(238), },
			{ id: 14, name: "Jynx", img: baseSprite(124), imgS: shinySprite(124), },
			{ id: 15, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 16, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 17, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 18, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 19, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 20, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 21, name: "Audino", img: baseSprite(531), imgS: shinySprite(531), },
			{ id: 22, name: "Vanillite", img: baseSprite(582), imgS: shinySprite(582), dexSync: [galarDex(72)], },
			{ id: 23, name: "Vanillish", img: baseSprite(583), imgS: shinySprite(583), dexSync: [galarDex(73)], },
			{ id: 24, name: "Vanilluxe", img: baseSprite(584), imgS: shinySprite(584), dexSync: [galarDex(74)], },
			{ id: 25, name: "Snorunt", img: baseSprite(361), imgS: shinySprite(361), dexSync: [galarDex(79)], },
			{ id: 26, name: "Glalie", img: baseSprite(362), imgS: shinySprite(362), dexSync: [galarDex(80)], },
			{ id: 27, name: "Froslass", img: baseSprite(478), imgS: shinySprite(478), dexSync: [galarDex(81)], },
			{
				id: 28, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [galarDex(292)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: [galarDexForm(292, "Male")], },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: [galarDexForm(292, "Female")], },
				],
			},
			{
				id: 29, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [galarDex(293)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: [galarDexForm(293, "Male")], },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: [galarDexForm(293, "Female")], },
				],
			},
			{ id: 30, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), },
			{
				id: 31, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: [galarDex(96)], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: [galarDexForm(96, "Male")], },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: [galarDexForm(96, "Female")], },
				],
			},
			{
				id: 32, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: [galarDex(97)], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: [galarDexForm(97, "Male")], },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: [galarDexForm(97, "Female")], },
				],
			},
			{ id: 33, name: "Phantump", img: baseSprite(708), imgS: shinySprite(708), dexSync: [galarDex(338)], },
			{ id: 34, name: "Trevenant", img: baseSprite(709), imgS: shinySprite(709), dexSync: [galarDex(389)], },
			{ id: 35, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 36, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 37, name: "Impidimp", img: baseSprite(859), imgS: shinySprite(859), dexSync: [galarDex(238)], },
			{ id: 38, name: "Morgrem", img: baseSprite(860), imgS: shinySprite(860), dexSync: [galarDex(239)], },
			{ id: 39, name: "Grimmsnarl", img: baseSprite(861), imgS: shinySprite(861), dexSync: [galarDex(240)], },
			{ id: 40, name: "Hatenna", img: baseSprite(856), imgS: shinySprite(856), dexSync: [galarDex(241)], },
			{ id: 41, name: "Hattrem", img: baseSprite(857), imgS: shinySprite(857), dexSync: [galarDex(242)], },
			{ id: 42, name: "Hatterene", img: baseSprite(858), imgS: shinySprite(858), dexSync: [galarDex(243)], },
			{ id: 43, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [galarDex(254)], },
			{ id: 44, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [galarDex(255)], },
			{ id: 45, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [galarDex(256)], },
			{ id: 46, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), dexSync: [galarDex(301)], },
			{ id: 47, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), },
			{ id: 48, name: "Litwick", img: baseSprite(607), imgS: shinySprite(607), dexSync: [galarDex(287)], },
			{ id: 49, name: "Lampent", img: baseSprite(608), imgS: shinySprite(608), dexSync: [galarDex(288)], },
			{ id: 50, name: "Chandelure", img: baseSprite(609), imgS: shinySprite(609), dexSync: [galarDex(289)], },
			{ id: 51, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), dexSync: [galarDex(267)], },
			{ id: 52, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), dexSync: [galarDex(268)], },
			{ id: 53, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), dexSync: [galarDex(269)], },
			{ id: 54, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577), dexSync: [galarDex(270)], },
			{ id: 55, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578), dexSync: [galarDex(271)], },
			{ id: 56, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579), dexSync: [galarDex(272)], },
			{ id: 57, name: "Timburr", img: baseSprite(532), imgS: shinySprite(532), dexSync: [galarDex(171)], },
			{ id: 58, name: "Gurdurr", img: baseSprite(533), imgS: shinySprite(533), dexSync: [galarDex(172)], },
			{ id: 59, name: "Conkeldurr", img: baseSprite(534), imgS: shinySprite(534), dexSync: [galarDex(173)], },
			{ id: 60, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [ioaDex(137), galarDex(228)], },
			{ id: 61, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [ioaDex(138), galarDex(229)], },
			{
				id: 62, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [ioaDex(42), galarDex(144)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: [ioaDexForm(42, "Male"), galarDexForm(144, "Male")], },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: [ioaDexForm(42, "Female"), galarDexForm(144, "Female")], },
				],
			},
			{
				id: 63, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [ioaDex(43), galarDex(145)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: [ioaDexForm(43, "Male"), galarDexForm(145, "Male")], },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: [ioaDexForm(43, "Female"), galarDexForm(145, "Female")], },
				],
			},
			{
				id: 64, name: "Basculin", img: baseSprite(550), imgS: shinySprite(550), dexSync: [galarDex(154)], forms: [
					{ name: "Blue-Striped", img: baseSprite(550), imgS: shinySprite(550), dexSync: [galarDexForm(154, "Blue-Striped")], },
					{ name: "Red-Striped", img: baseSprite("550-r"), imgS: shinySprite("550-r"), dexSync: [galarDexForm(154, "Red-Striped")], },
				],
			},
			{ id: 65, name: "Nidoran♀", img: baseSprite(29), imgS: shinySprite(29), },
			{ id: 66, name: "Nidorina", img: baseSprite(30), imgS: shinySprite(30), },
			{ id: 67, name: "Nidoqueen", img: baseSprite(31), imgS: shinySprite(31), },
			{ id: 68, name: "Nidoran♂", img: baseSprite(32), imgS: shinySprite(32), },
			{ id: 69, name: "Nidorino", img: baseSprite(33), imgS: shinySprite(33), },
			{ id: 70, name: "Nidoking", img: baseSprite(34), imgS: shinySprite(34), },
			{
				id: 71, name: "Zigzagoon", img: baseSprite("263-g"), imgS: shinySprite("263-g"), dexSync: [galarDex(31)], forms: [
					{ name: "Hoennian", img: baseSprite(263), imgS: shinySprite(263), dexSync: [galarDexForm(31, "Hoennian")], },
					{ name: "Galarian", img: baseSprite("263-g"), imgS: shinySprite("263-g"), dexSync: [galarDexForm(31, "Galarian")], },
				],
			},
			{
				id: 72, name: "Linoone", img: baseSprite("264-g"), imgS: shinySprite("264-g"), dexSync: [galarDex(32)], forms: [
					{ name: "Hoennian", img: baseSprite(264), imgS: shinySprite(264), dexSync: [galarDexForm(32, "Hoennian")], },
					{ name: "Galarian", img: baseSprite("264-g"), imgS: shinySprite("264-g"), dexSync: [galarDexForm(32, "Galarian")], },
				],
			},
			{ id: 73, name: "Obstagoon", img: baseSprite(862), imgS: shinySprite(862), dexSync: [galarDex(33)], },
			{
				id: 74, name: "Eevee", img: baseSprite(133), imgS: shinySprite(133), dexSync: [galarDex(196)], forms: [
					{ name: "Male", img: baseSprite(133), imgS: shinySprite(133), dexSync: [galarDexForm(196, "Male")], },
					{ name: "Female", img: baseSprite("133-f"), imgS: shinySprite("133-f"), dexSync: [galarDexForm(196, "Female")], },
				],
			},
			{ id: 75, name: "Vaporeon", img: baseSprite(134), imgS: shinySprite(134), dexSync: [galarDex(197)], },
			{ id: 76, name: "Jolteon", img: baseSprite(135), imgS: shinySprite(135), dexSync: [galarDex(198)], },
			{ id: 77, name: "Flareon", img: baseSprite(136), imgS: shinySprite(136), dexSync: [galarDex(199)], },
			{ id: 78, name: "Umbreon", img: baseSprite(197), imgS: shinySprite(197), dexSync: [galarDex(200)], },
			{ id: 79, name: "Espeon", img: baseSprite(196), imgS: shinySprite(196), dexSync: [galarDex(201)], },
			{ id: 80, name: "Glaceon", img: baseSprite(471), imgS: shinySprite(471), dexSync: [galarDex(202)], },
			{ id: 81, name: "Leafeon", img: baseSprite(470), imgS: shinySprite(470), dexSync: [galarDex(203)], },
			{ id: 82, name: "Sylveon", img: baseSprite(700), imgS: shinySprite(700), dexSync: [galarDex(204)], },
			{ id: 83, name: "Tyrunt", img: baseSprite(696), imgS: shinySprite(696), },
			{ id: 84, name: "Tyrantrum", img: baseSprite(697), imgS: shinySprite(697), },
			{ id: 85, name: "Amaura", img: baseSprite(698), imgS: shinySprite(698), },
			{ id: 86, name: "Aurorus", img: baseSprite(699), imgS: shinySprite(699), },
			{ id: 87, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), dexSync: [galarDex(118)], },
			{ id: 88, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), dexSync: [galarDex(119)], },
			{ id: 89, name: "Stonjourner", img: baseSprite(874), imgS: shinySprite(874), dexSync: [galarDex(369)], },
			{ id: 90, name: "Eiscue", img: baseSprite(875), imgS: shinySprite(875), dexSync: [galarDex(370)], },
			{ id: 91, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), dexSync: [galarDex(214)], },
			{ id: 92, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), dexSync: [galarDex(215)], },
			{ id: 93, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595), dexSync: [galarDex(64)], },
			{ id: 94, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596), dexSync: [galarDex(65)], },
			{ id: 95, name: "Karrablast", img: baseSprite(588), imgS: shinySprite(588), dexSync: [ioaDex(66), galarDex(273)], },
			{ id: 96, name: "Escavalier", img: baseSprite(589), imgS: shinySprite(589), dexSync: [ioaDex(67), galarDex(274)], },
			{ id: 97, name: "Shelmet", img: baseSprite(616), imgS: shinySprite(616), dexSync: [ioaDex(64), galarDex(275)], },
			{ id: 98, name: "Accelgor", img: baseSprite(617), imgS: shinySprite(617), dexSync: [ioaDex(65), galarDex(276)], },
			{ id: 99, name: "Sizzlipede", img: baseSprite(850), imgS: shinySprite(850), dexSync: [galarDex(159)], },
			{ id: 100, name: "Centiskorch", img: baseSprite(851), imgS: shinySprite(851), dexSync: [galarDex(160)], },
			{ id: 101, name: "Durant", img: baseSprite(632), imgS: shinySprite(632), dexSync: [galarDex(316)], },
			{ id: 102, name: "Heatmor", img: baseSprite(631), imgS: shinySprite(631), dexSync: [galarDex(317)], },
			{
				id: 103, name: "Darumaka", img: baseSprite("554-g"), imgS: shinySprite("554-g"), dexSync: [galarDex(367)], forms: [
					{ name: "Unovian", img: baseSprite(554), imgS: shinySprite(554), dexSync: [galarDexForm(367, "Unovian")], },
					{ name: "Galarian", img: baseSprite("554-g"), imgS: shinySprite("554-g"), dexSync: [galarDexForm(367, "Galarian")], },
				],
			},
			{
				id: 104, name: "Darmanitan", img: baseSprite("555-g"), imgS: shinySprite("555-g"), dexSync: [galarDex(368)], forms: [
					{ name: "Unovian", img: baseSprite(555), imgS: shinySprite(555), dexSync: [galarDexForm(368, "Unovian")], },
					{ name: "Galarian", img: baseSprite("555-g"), imgS: shinySprite("555-g"), dexSync: [galarDexForm(368, "Galarian")], },
				],
			},
			{
				id: 105, name: "Ponyta", img: baseSprite("077-g"), imgS: shinySprite("077-g"), dexSync: [galarDex(333)], forms: [
					{ name: "Kantonian", img: baseSprite(77), imgS: shinySprite(77), dexSync: [galarDexForm(333, "Kantonian")], },
					{ name: "Galarian", img: baseSprite("077-g"), imgS: shinySprite("077-g"), dexSync: [galarDexForm(333, "Galarian")], },
				],
			},
			{
				id: 106, name: "Rapidash", img: baseSprite("078-g"), imgS: shinySprite("078-g"), dexSync: [galarDex(334)], forms: [
					{ name: "Unovian", img: baseSprite(78), imgS: shinySprite(78), dexSync: [galarDexForm(334, "Kantonian")], },
					{ name: "Galarian", img: baseSprite("078-g"), imgS: shinySprite("078-g"), dexSync: [galarDexForm(334, "Galarian")], },
				],
			},
			{ id: 107, name: "Absol", img: baseSprite(359), imgS: shinySprite(359), },
			{ id: 108, name: "Cufant", img: baseSprite(878), imgS: shinySprite(878), dexSync: [galarDex(302)], },
			{ id: 109, name: "Copperajah", img: baseSprite(879), imgS: shinySprite(879), dexSync: [galarDex(303)], },
			{ id: 110, name: "Dreepy", img: baseSprite(885), imgS: shinySprite(885), dexSync: [galarDex(395)], },
			{ id: 111, name: "Drakloak", img: baseSprite(886), imgS: shinySprite(886), dexSync: [galarDex(396)], },
			{ id: 112, name: "Dragapult", img: baseSprite(887), imgS: shinySprite(887), dexSync: [galarDex(397)], },
			{ id: 113, name: "Bagon", img: baseSprite(371), imgS: shinySprite(371), },
			{ id: 114, name: "Shelgon", img: baseSprite(372), imgS: shinySprite(372), },
			{ id: 115, name: "Salamence", img: baseSprite(373), imgS: shinySprite(373), },
			{
				id: 116, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), },
				],
			},
			{
				id: 117, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), },
				],
			},
			{
				id: 118, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), },
				],
			},
			{ id: 119, name: "Druddigon", img: baseSprite(621), imgS: shinySprite(621), dexSync: [ioaDex(63)], },
			{ id: 120, name: "Delibird", img: baseSprite(225), imgS: shinySprite(225), dexSync: [galarDex(78)], },
			{ id: 121, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), dexSync: [galarDex(279)], },
			{ id: 122, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), dexSync: [galarDex(280)], },
			{ id: 123, name: "Omanyte", img: baseSprite(138), imgS: shinySprite(138), },
			{ id: 124, name: "Omastar", img: baseSprite(139), imgS: shinySprite(139), },
			{ id: 125, name: "Kabuto", img: baseSprite(140), imgS: shinySprite(140), },
			{ id: 126, name: "Kabutops", img: baseSprite(141), imgS: shinySprite(141), },
			{ id: 127, name: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142), },
			{ id: 128, name: "Carbink", img: baseSprite(703), imgS: shinySprite(703), },
			{ id: 129, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), },
			{ id: 130, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), },
			{ id: 131, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), },
			{
				id: 132, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), dexSync: [galarDex(335)], forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), dexSync: [galarDexForm(335, "Phony")], },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), dexSync: [galarDexForm(335, "Authentic")], },]
			},
			{
				id: 133, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), dexSync: [galarDex(336)], forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), dexSync: [galarDexForm(336, "Phony")], },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), dexSync: [galarDexForm(336, "Authentic")], },]
			},
			{ id: 134, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [galarDex(298)], },
			{ id: 135, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [galarDex(299)], },
			{ id: 136, name: "Deino", img: baseSprite(633), imgS: shinySprite(633), dexSync: [galarDex(386)], },
			{ id: 137, name: "Zweilous", img: baseSprite(634), imgS: shinySprite(634), dexSync: [galarDex(387)], },
			{ id: 138, name: "Hydreigon", img: baseSprite(635), imgS: shinySprite(635), dexSync: [galarDex(388)], },
			{ id: 139, name: "Larvitar", img: baseSprite(246), imgS: shinySprite(246), dexSync: [galarDex(383)], },
			{ id: 140, name: "Pupitar", img: baseSprite(247), imgS: shinySprite(247), dexSync: [galarDex(383)], },
			{ id: 141, name: "Tyranitar", img: baseSprite(248), imgS: shinySprite(248), dexSync: [galarDex(383)], },
			{ id: 142, name: "Bergmite", img: baseSprite(712), imgS: shinySprite(712), dexSync: [galarDex(358)], },
			{ id: 143, name: "Avalugg", img: baseSprite(713), imgS: shinySprite(713), dexSync: [galarDex(359)], },
			{
				id: 144, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 145, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 146, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 147, name: "Tirtouga", img: baseSprite(564), imgS: shinySprite(564), },
			{ id: 148, name: "Carracosta", img: baseSprite(565), imgS: shinySprite(565), },
			{ id: 149, name: "Archen", img: baseSprite(566), imgS: shinySprite(566), },
			{ id: 150, name: "Archeops", img: baseSprite(567), imgS: shinySprite(567), },
			{ id: 151, name: "Baltoy", img: baseSprite(343), imgS: shinySprite(343), dexSync: [galarDex(82)], },
			{ id: 152, name: "Claydol", img: baseSprite(344), imgS: shinySprite(344), dexSync: [galarDex(83)], },
			{ id: 153, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), dexSync: [galarDex(88)], },
			{ id: 154, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), dexSync: [galarDex(89)], },
			{ id: 155, name: "Yamper", img: baseSprite(835), imgS: shinySprite(835), dexSync: [galarDex(46)], },
			{ id: 156, name: "Boltund", img: baseSprite(836), imgS: shinySprite(836), dexSync: [galarDex(47)], },
			{ id: 157, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), dexSync: [ioaDex(104), galarDex(344)], },
			{ id: 158, name: "Pincurchin", img: baseSprite(871), imgS: shinySprite(871), dexSync: [ioaDex(126), galarDex(353)], },
			{ id: 159, name: "Spheal", img: baseSprite(363), imgS: shinySprite(363), },
			{ id: 160, name: "Sealeo", img: baseSprite(364), imgS: shinySprite(364), },
			{ id: 161, name: "Walrein", img: baseSprite(365), imgS: shinySprite(365), },
			{ id: 162, name: "Dhelmise", img: baseSprite(781), imgS: shinySprite(781), dexSync: [galarDex(360)], },
			{ id: 163, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), dexSync: [galarDex(21)], },
			{ id: 164, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), dexSync: [galarDex(22)], },
			{ id: 165, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), dexSync: [galarDex(23)], },
			{ id: 166, name: "Gossifleur", img: baseSprite(829), imgS: shinySprite(829), dexSync: [galarDex(126)], },
			{ id: 167, name: "Eldegoss", img: baseSprite(830), imgS: shinySprite(830), dexSync: [galarDex(127)], },
			{ id: 168, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), dexSync: [galarDex(262)], },
			{ id: 169, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), dexSync: [galarDex(263)], },
			{ id: 170, name: "Shuckle", img: baseSprite(213), imgS: shinySprite(213), dexSync: [galarDex(227)], },
			{
				id: 171, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), dexSync: [galarDex(337)], forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), dexSync: [galarDexForm(337, "Male")], },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), dexSync: [galarDexForm(337, "Male")], },
				],
			},
			{ id: 172, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [galarDex(260)], },
			{ id: 173, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [galarDex(261)], },
			{ id: 174, name: "Sableye", img: baseSprite(302), imgS: shinySprite(302), dexSync: [galarDex(294)], },
			{ id: 175, name: "Mawile", img: baseSprite(303), imgS: shinySprite(303), dexSync: [galarDex(295)], },
			{ id: 176, name: "Rolycoly", img: baseSprite(837), imgS: shinySprite(837), dexSync: [galarDex(161)], },
			{ id: 177, name: "Carkol", img: baseSprite(838), imgS: shinySprite(838), dexSync: [galarDex(162)], },
			{ id: 178, name: "Coalossal", img: baseSprite(839), imgS: shinySprite(839), dexSync: [galarDex(163)], },
			{ id: 179, name: "Ferroseed", img: baseSprite(597), imgS: shinySprite(597), dexSync: [galarDex(189)], },
			{ id: 180, name: "Ferrothorn", img: baseSprite(598), imgS: shinySprite(598), dexSync: [galarDex(190)], },
			{ id: 181, name: "Noibat", img: baseSprite(714), imgS: shinySprite(714), dexSync: [galarDex(176)], },
			{ id: 182, name: "Noivern", img: baseSprite(715), imgS: shinySprite(715), dexSync: [galarDex(177)], },
			{ id: 183, name: "Lileep", img: baseSprite(345), imgS: shinySprite(345), },
			{ id: 184, name: "Cradily", img: baseSprite(346), imgS: shinySprite(346), },
			{ id: 185, name: "Anorith", img: baseSprite(347), imgS: shinySprite(347), },
			{ id: 186, name: "Armaldo", img: baseSprite(348), imgS: shinySprite(348), },
			{
				id: 187, name: "Relicanth", img: baseSprite(369), imgS: shinySprite(369), forms: [
					{ name: "Male", img: baseSprite(369), imgS: shinySprite(369), },
					{ name: "Female", img: baseSprite("369-f"), imgS: shinySprite("369-f"), },
				],
			},
			{ id: 188, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [galarDex(152)], },
			{
				id: 189, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [galarDex(153)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: [galarDexForm(153, "Male")], },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: [galarDexForm(153, "Female")], },
				],
			},
			{ id: 190, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), dexSync: [galarDex(361)], },
			{ id: 191, name: "Aron", img: baseSprite(304), imgS: shinySprite(304), },
			{ id: 192, name: "Lairon", img: baseSprite(305), imgS: shinySprite(305), },
			{ id: 193, name: "Aggron", img: baseSprite(306), imgS: shinySprite(306), },
			{ id: 194, name: "Dratini", img: baseSprite(147), imgS: shinySprite(147), },
			{ id: 195, name: "Dragonair", img: baseSprite(148), imgS: shinySprite(148), },
			{ id: 196, name: "Dragonite", img: baseSprite(149), imgS: shinySprite(149), },
			{ id: 197, name: "Regirock", img: baseSprite(377), imgS: shinySprite(377), legendary: true, },
			{ id: 198, name: "Regice", img: baseSprite(378), imgS: shinySprite(378), legendary: true, },
			{ id: 199, name: "Registeel", img: baseSprite(379), imgS: shinySprite(379), legendary: true, },
			{ id: 200, name: "Regieleki", img: baseSprite(894), imgS: shinySprite(894), legendary: true, },
			{ id: 201, name: "Regidrago", img: baseSprite(895), imgS: shinySprite(895), legendary: true, },
			{
				id: 202, name: "Articuno", img: baseSprite("144-g"), imgS: shinySprite("144-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(144), imgS: shinySprite(144), legendary: true, },
					{ name: "Galarian", img: baseSprite("144-g"), imgS: shinySprite("144-g"), legendary: true, },
				],
			},
			{
				id: 203, name: "Zapdos", img: baseSprite("145-g"), imgS: shinySprite("145-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(145), imgS: shinySprite(145), legendary: true, },
					{ name: "Galarian", img: baseSprite("145-g"), imgS: shinySprite("145-g"), legendary: true, },
				],
			},
			{
				id: 204, name: "Moltres", img: baseSprite("146-g"), imgS: shinySprite("146-g"), legendary: true, forms: [
					{ name: "Kantonian", img: baseSprite(146), imgS: shinySprite(146), legendary: true, },
					{ name: "Galarian", img: baseSprite("146-g"), imgS: shinySprite("146-g"), legendary: true, },
				],
			},
			{ id: 205, name: "Cobalion", img: baseSprite(638), imgS: shinySprite(638), legendary: true, },
			{ id: 206, name: "Terrakion", img: baseSprite(639), imgS: shinySprite(639), legendary: true, },
			{ id: 207, name: "Virizion", img: baseSprite(640), imgS: shinySprite(640), legendary: true, },
			{ id: 208, name: "Glastrier", img: baseSprite(896), imgS: shinySprite(896), legendary: true, },
			{ id: 209, name: "Spectrier", img: baseSprite(897), imgS: shinySprite(897), legendary: true, },
			{ id: 210, name: "Calyrex", img: baseSprite(898), imgS: shinySprite(898), legendary: true, }
		],
	},
});