const gen = 4;
const game = "pearl";

const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Sinnoh Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, natiId: 387, name: "Turtwig", img: () => baseSprite(387), imgS: () => shinySprite(387), tags: ["starter"] },
			{ id: 2, natiId: 388, name: "Grotle", img: () => baseSprite(388), imgS: () => shinySprite(388), tags: ["starter"] },
			{ id: 3, natiId: 389, name: "Torterra", img: () => baseSprite(389), imgS: () => shinySprite(389), tags: ["starter"] },
			{ id: 4, natiId: 390, name: "Chimchar", img: () => baseSprite(390), imgS: () => shinySprite(390), tags: ["starter"] },
			{ id: 5, natiId: 391, name: "Monferno", img: () => baseSprite(391), imgS: () => shinySprite(391), tags: ["starter"] },
			{ id: 6, natiId: 392, name: "Infernape", img: () => baseSprite(392), imgS: () => shinySprite(392), tags: ["starter"] },
			{ id: 7, natiId: 393, name: "Piplup", img: () => baseSprite(393), imgS: () => shinySprite(393), tags: ["starter"] },
			{ id: 8, natiId: 394, name: "Prinplup", img: () => baseSprite(394), imgS: () => shinySprite(394), tags: ["starter"] },
			{ id: 9, natiId: 395, name: "Empoleon", img: () => baseSprite(395), imgS: () => shinySprite(395), tags: ["starter"] },
			{
				id: 10, natiId: 396, name: "Starly", img: () => baseSprite(396), imgS: () => shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(396), imgS: () => shinySprite(396), },
					{ name: "Female", img: () => baseSprite("0396-f"), imgS: () => shinySprite("0396-f"), },
				]
			},
			{
				id: 11, natiId: 397, name: "Staravia", img: () => baseSprite(397), imgS: () => shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(397), imgS: () => shinySprite(397), },
					{ name: "Female", img: () => baseSprite("0397-f"), imgS: () => shinySprite("0397-f"), },
				]
			},
			{
				id: 12, natiId: 398, name: "Staraptor", img: () => baseSprite(398), imgS: () => shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(398), imgS: () => shinySprite(398), },
					{ name: "Female", img: () => baseSprite("0398-f"), imgS: () => shinySprite("0398-f"), },
				]
			},
			{
				id: 13, natiId: 399, name: "Bidoof", img: () => baseSprite(399), imgS: () => shinySprite(399), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(399), imgS: () => shinySprite(399), },
					{ name: "Female", img: () => baseSprite("0399-f"), imgS: () => shinySprite("0399-f"), },
				]
			},
			{
				id: 14, natiId: 400, name: "Bibarel", img: () => baseSprite(400), imgS: () => shinySprite(400), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(400), imgS: () => shinySprite(400), },
					{ name: "Female", img: () => baseSprite("0400-f"), imgS: () => shinySprite("0400-f"), },
				]
			},
			{
				id: 15, natiId: 401, name: "Kricketot", img: () => baseSprite(401), imgS: () => shinySprite(401), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(401), imgS: () => shinySprite(401), },
					{ name: "Female", img: () => baseSprite("0401-f"), imgS: () => shinySprite("0401-f"), },
				]
			},
			{
				id: 16, natiId: 402, name: "Kricketune", img: () => baseSprite(402), imgS: () => shinySprite(402), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(402), imgS: () => shinySprite(402), },
					{ name: "Female", img: () => baseSprite("0402-f"), imgS: () => shinySprite("0402-f"), },
				]
			},
			{
				id: 17, natiId: 403, name: "Shinx", img: () => baseSprite(403), imgS: () => shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(403), imgS: () => shinySprite(403), },
					{ name: "Female", img: () => baseSprite("0403-f"), imgS: () => shinySprite("0403-f"), },
				]
			},
			{
				id: 18, natiId: 404, name: "Luxio", img: () => baseSprite(404), imgS: () => shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(404), imgS: () => shinySprite(404), },
					{ name: "Female", img: () => baseSprite("0404-f"), imgS: () => shinySprite("0404-f"), },
				]
			},
			{
				id: 19, natiId: 405, name: "Luxray", img: () => baseSprite(405), imgS: () => shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(405), imgS: () => shinySprite(405), },
					{ name: "Female", img: () => baseSprite("0405-f"), imgS: () => shinySprite("0405-f"), },
				]
			},
			{ id: 20, natiId: 63, name: "Abra", img: () => baseSprite(63), imgS: () => shinySprite(63) },
			{
				id: 21, natiId: 64, name: "Kadabra", img: () => baseSprite(64), imgS: () => shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(64), imgS: () => shinySprite(64), },
					{ name: "Female", img: () => baseSprite("0064-f"), imgS: () => shinySprite("0064-f"), },
				]
			},
			{
				id: 22, natiId: 65, name: "Alakazam", img: () => baseSprite(65), imgS: () => shinySprite(65), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(65), imgS: () => shinySprite(65), },
					{ name: "Female", img: () => baseSprite("0065-f"), imgS: () => shinySprite("0065-f"), },
				]
			},
			{
				id: 23, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
					{ name: "Female", img: () => baseSprite("0129-f"), imgS: () => shinySprite("0129-f"), },
				]
			},
			{
				id: 24, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
					{ name: "Female", img: () => baseSprite("0130-f"), imgS: () => shinySprite("0130-f"), },
				]
			},
			{ id: 25, natiId: 406, name: "Budew", img: () => baseSprite(406), imgS: () => shinySprite(406) },
			{
				id: 26, natiId: 315, name: "Roselia", img: () => baseSprite(315), imgS: () => shinySprite(315), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(315), imgS: () => shinySprite(315), },
					{ name: "Female", img: () => baseSprite("0315-f"), imgS: () => shinySprite("0315-f"), },
				]
			},
			{
				id: 27, natiId: 407, name: "Roserade", img: () => baseSprite(407), imgS: () => shinySprite(407), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(407), imgS: () => shinySprite(407), },
					{ name: "Female", img: () => baseSprite("0407-f"), imgS: () => shinySprite("0407-f"), },
				]
			},
			{
				id: 28, natiId: 41, name: "Zubat", img: () => baseSprite(41), imgS: () => shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(41), imgS: () => shinySprite(41), },
					{ name: "Female", img: () => baseSprite("0041-f"), imgS: () => shinySprite("0041-f"), },
				]
			},
			{
				id: 29, natiId: 42, name: "Golbat", img: () => baseSprite(42), imgS: () => shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(42), imgS: () => shinySprite(42), },
					{ name: "Female", img: () => baseSprite("0042-f"), imgS: () => shinySprite("0042-f"), },
				]
			},
			{ id: 30, natiId: 169, name: "Crobat", img: () => baseSprite(169), imgS: () => shinySprite(169) },
			{ id: 31, natiId: 74, name: "Geodude", img: () => baseSprite(74), imgS: () => shinySprite(74) },
			{ id: 32, natiId: 75, name: "Graveler", img: () => baseSprite(75), imgS: () => shinySprite(75) },
			{ id: 33, natiId: 76, name: "Golem", img: () => baseSprite(76), imgS: () => shinySprite(76) },
			{ id: 34, natiId: 95, name: "Onix", img: () => baseSprite(95), imgS: () => shinySprite(95) },
			{
				id: 35, natiId: 208, name: "Steelix", img: () => baseSprite(208), imgS: () => shinySprite(208), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(208), imgS: () => shinySprite(208), },
					{ name: "Female", img: () => baseSprite("0208-f"), imgS: () => shinySprite("0208-f"), },
				]
			},
			{ id: 36, natiId: 408, name: "Cranidos", img: () => baseSprite(408), imgS: () => shinySprite(408), tags: ["fossil"] },
			{ id: 37, natiId: 409, name: "Rampardos", img: () => baseSprite(409), imgS: () => shinySprite(409), tags: ["fossil"] },
			{ id: 38, natiId: 410, name: "Shieldon", img: () => baseSprite(410), imgS: () => shinySprite(410), tags: ["fossil"] },
			{ id: 39, natiId: 411, name: "Bastiodon", img: () => baseSprite(411), imgS: () => shinySprite(411), tags: ["fossil"] },
			{ id: 40, natiId: 66, name: "Machop", img: () => baseSprite(66), imgS: () => shinySprite(66) },
			{ id: 41, natiId: 67, name: "Machoke", img: () => baseSprite(67), imgS: () => shinySprite(67) },
			{ id: 42, natiId: 68, name: "Machamp", img: () => baseSprite(68), imgS: () => shinySprite(68) },
			{ id: 43, natiId: 54, name: "Psyduck", img: () => baseSprite(54), imgS: () => shinySprite(54) },
			{ id: 44, natiId: 55, name: "Golduck", img: () => baseSprite(55), imgS: () => shinySprite(55) },
			{
				id: 45, natiId: 412, name: "Burmy", img: () => baseSprite(412), imgS: () => shinySprite(412), tags: ["other"], forms: [
					{ name: "Plant Cloak", img: () => baseSprite("0412-p"), imgS: () => shinySprite("0412-p"), },
					{ name: "Sandy Cloak", img: () => baseSprite("0412-s"), imgS: () => shinySprite("0412-s"), },
					{ name: "Trash Cloak", img: () => baseSprite("0412-t"), imgS: () => shinySprite("0412-t"), },
				]
			},
			{
				id: 46, natiId: 413, name: "Wormadam", img: () => baseSprite(413), imgS: () => shinySprite(413), tags: ["other"], forms: [
					{ name: "Plant Cloak", img: () => baseSprite("0413-p"), imgS: () => shinySprite("0413-p"), },
					{ name: "Sandy Cloak", img: () => baseSprite("0413-s"), imgS: () => shinySprite("0413-s"), },
					{ name: "Trash Cloak", img: () => baseSprite("0413-t"), imgS: () => shinySprite("0413-t"), },
				]
			},
			{ id: 47, natiId: 414, name: "Mothim", img: () => baseSprite(414), imgS: () => shinySprite(414) },
			{ id: 48, natiId: 265, name: "Wurmple", img: () => baseSprite(265), imgS: () => shinySprite(265) },
			{ id: 49, natiId: 266, name: "Silcoon", img: () => baseSprite(266), imgS: () => shinySprite(266) },
			{
				id: 50, natiId: 267, name: "Beautifly", img: () => baseSprite(267), imgS: () => shinySprite(267), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(267), imgS: () => shinySprite(267), },
					{ name: "Female", img: () => baseSprite("0267-f"), imgS: () => shinySprite("0267-f"), },
				]
			},
			{ id: 51, natiId: 268, name: "Cascoon", img: () => baseSprite(268), imgS: () => shinySprite(268) },
			{
				id: 52, natiId: 269, name: "Dustox", img: () => baseSprite(269), imgS: () => shinySprite(269), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(269), imgS: () => shinySprite(269), },
					{ name: "Female", img: () => baseSprite("0269-f"), imgS: () => shinySprite("0269-f"), },
				]
			},
			{
				id: 53, natiId: 415, name: "Combee", img: () => baseSprite(415), imgS: () => shinySprite(415), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(415), imgS: () => shinySprite(415), },
					{ name: "Female", img: () => baseSprite("0415-f"), imgS: () => shinySprite("0415-f"), },
				]
			},
			{ id: 54, natiId: 416, name: "Vespiquen", img: () => baseSprite(416), imgS: () => shinySprite(416) },
			{
				id: 55, natiId: 417, name: "Pachirisu", img: () => baseSprite(417), imgS: () => shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(417), imgS: () => shinySprite(417), },
					{ name: "Female", img: () => baseSprite("0417-f"), imgS: () => shinySprite("0417-f"), },
				]
			},
			{
				id: 56, natiId: 418, name: "Buizel", img: () => baseSprite(418), imgS: () => shinySprite(418), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(418), imgS: () => shinySprite(418), },
					{ name: "Female", img: () => baseSprite("0418-f"), imgS: () => shinySprite("0418-f"), },
				]
			},
			{
				id: 57, natiId: 419, name: "Floatzel", img: () => baseSprite(419), imgS: () => shinySprite(419), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(419), imgS: () => shinySprite(419), },
					{ name: "Female", img: () => baseSprite("0419-f"), imgS: () => shinySprite("0419-f"), },
				]
			},
			{ id: 58, natiId: 420, name: "Cherubi", img: () => baseSprite(420), imgS: () => shinySprite(420) },
			{
				id: 59, natiId: 421, name: "Cherrim", img: () => baseSprite(421), imgS: () => shinySprite(421), tags: ["other"], forms: [
					{ name: "Overcast", img: () => baseSprite("0421-o"), imgS: () => shinySprite("0421-o"), },
					{ name: "Sunshine", img: () => baseSprite("0421-s"), imgS: () => shinySprite("0421-s"), },
				]
			},
			{
				id: 60, natiId: 422, name: "Shellos", img: () => baseSprite(422), imgS: () => shinySprite(422), tags: ["other"], forms: [
					{ name: "East Sea", img: () => baseSprite("0422-e"), imgS: () => shinySprite("0422-e"), },
					{ name: "West Sea", img: () => baseSprite("0422-w"), imgS: () => shinySprite("0422-w"), },
				]
			},
			{
				id: 61, natiId: 423, name: "Gastrodon", img: () => baseSprite(423), imgS: () => shinySprite(423), tags: ["other"], forms: [
					{ name: "East Sea", img: () => baseSprite("0423-e"), imgS: () => shinySprite("0423-e"), },
					{ name: "West Sea", img: () => baseSprite("0423-w"), imgS: () => shinySprite("0423-w"), },
				]
			},
			{
				id: 62, natiId: 214, name: "Heracross", img: () => baseSprite(214), imgS: () => shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(214), imgS: () => shinySprite(214), },
					{ name: "Female", img: () => baseSprite("0214-f"), imgS: () => shinySprite("0214-f"), },
				]
			},
			{
				id: 63, natiId: 190, name: "Aipom", img: () => baseSprite(190), imgS: () => shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(190), imgS: () => shinySprite(190), },
					{ name: "Female", img: () => baseSprite("0190-f"), imgS: () => shinySprite("0190-f"), },
				]
			},
			{
				id: 64, natiId: 424, name: "Ambipom", img: () => baseSprite(424), imgS: () => shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(424), imgS: () => shinySprite(424), },
					{ name: "Female", img: () => baseSprite("0424-f"), imgS: () => shinySprite("0424-f"), },
				]
			},
			{ id: 65, natiId: 425, name: "Drifloon", img: () => baseSprite(425), imgS: () => shinySprite(425) },
			{ id: 66, natiId: 426, name: "Drifblim", img: () => baseSprite(426), imgS: () => shinySprite(426) },
			{ id: 67, natiId: 427, name: "Buneary", img: () => baseSprite(427), imgS: () => shinySprite(427) },
			{ id: 68, natiId: 428, name: "Lopunny", img: () => baseSprite(428), imgS: () => shinySprite(428) },
			{ id: 69, natiId: 92, name: "Gastly", img: () => baseSprite(92), imgS: () => shinySprite(92) },
			{ id: 70, natiId: 93, name: "Haunter", img: () => baseSprite(93), imgS: () => shinySprite(93) },
			{ id: 71, natiId: 94, name: "Gengar", img: () => baseSprite(94), imgS: () => shinySprite(94) },
			{ id: 72, natiId: 200, name: "Misdreavus", img: () => baseSprite(200), imgS: () => shinySprite(200) },
			{ id: 73, natiId: 429, name: "Mismagius", img: () => baseSprite(429), imgS: () => shinySprite(429) },
			{
				id: 74, natiId: 198, name: "Murkrow", img: () => baseSprite(198), imgS: () => shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(198), imgS: () => shinySprite(198), },
					{ name: "Female", img: () => baseSprite("0198-f"), imgS: () => shinySprite("0198-f"), },
				]
			},
			{ id: 75, natiId: 430, name: "Honchkrow", img: () => baseSprite(430), imgS: () => shinySprite(430) },
			{ id: 76, natiId: 431, name: "Glameow", img: () => baseSprite(431), imgS: () => shinySprite(431) },
			{ id: 77, natiId: 432, name: "Purugly", img: () => baseSprite(432), imgS: () => shinySprite(432) },
			{
				id: 78, natiId: 118, name: "Goldeen", img: () => baseSprite(118), imgS: () => shinySprite(118), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(118), imgS: () => shinySprite(118), },
					{ name: "Female", img: () => baseSprite("0118-f"), imgS: () => shinySprite("0118-f"), },
				]
			},
			{
				id: 79, natiId: 119, name: "Seaking", img: () => baseSprite(119), imgS: () => shinySprite(119), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(119), imgS: () => shinySprite(119), },
					{ name: "Female", img: () => baseSprite("0119-f"), imgS: () => shinySprite("0119-f"), },
				]
			},
			{ id: 80, natiId: 339, name: "Barboach", img: () => baseSprite(339), imgS: () => shinySprite(339) },
			{ id: 81, natiId: 340, name: "Whiscash", img: () => baseSprite(340), imgS: () => shinySprite(340) },
			{ id: 82, natiId: 433, name: "Chingling", img: () => baseSprite(433), imgS: () => shinySprite(433) },
			{ id: 83, natiId: 358, name: "Chimecho", img: () => baseSprite(358), imgS: () => shinySprite(358) },
			{ id: 84, natiId: 434, name: "Stunky", img: () => baseSprite(434), imgS: () => shinySprite(434) },
			{ id: 85, natiId: 435, name: "Skuntank", img: () => baseSprite(435), imgS: () => shinySprite(435) },
			{
				id: 86, natiId: 307, name: "Meditite", img: () => baseSprite(307), imgS: () => shinySprite(307), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(307), imgS: () => shinySprite(307), },
					{ name: "Female", img: () => baseSprite("0307-f"), imgS: () => shinySprite("0307-f"), },
				]
			},
			{
				id: 87, natiId: 308, name: "Medicham", img: () => baseSprite(308), imgS: () => shinySprite(308), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(308), imgS: () => shinySprite(308), },
					{ name: "Female", img: () => baseSprite("0308-f"), imgS: () => shinySprite("0308-f"), },
				]
			},
			{ id: 88, natiId: 436, name: "Bronzor", img: () => baseSprite(436), imgS: () => shinySprite(436) },
			{ id: 89, natiId: 437, name: "Bronzong", img: () => baseSprite(437), imgS: () => shinySprite(437) },
			{ id: 90, natiId: 77, name: "Ponyta", img: () => baseSprite(77), imgS: () => shinySprite(77) },
			{ id: 91, natiId: 78, name: "Rapidash", img: () => baseSprite(78), imgS: () => shinySprite(78) },
			{ id: 92, natiId: 438, name: "Bonsly", img: () => baseSprite(438), imgS: () => shinySprite(438) },
			{
				id: 93, natiId: 185, name: "Sudowoodo", img: () => baseSprite(185), imgS: () => shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(185), imgS: () => shinySprite(185), },
					{ name: "Female", img: () => baseSprite("0185-f"), imgS: () => shinySprite("0185-f"), },
				]
			},
			{ id: 94, natiId: 439, name: "Mime Jr.", img: () => baseSprite(439), imgS: () => shinySprite(439) },
			{ id: 95, natiId: 122, name: "Mr. Mime", img: () => baseSprite(122), imgS: () => shinySprite(122) },
			{ id: 96, natiId: 440, name: "Happiny", img: () => baseSprite(440), imgS: () => shinySprite(440) },
			{ id: 97, natiId: 113, name: "Chansey", img: () => baseSprite(113), imgS: () => shinySprite(113) },
			{ id: 98, natiId: 242, name: "Blissey", img: () => baseSprite(242), imgS: () => shinySprite(242) },
			{ id: 99, natiId: 173, name: "Cleffa", img: () => baseSprite(173), imgS: () => shinySprite(173) },
			{ id: 100, natiId: 35, name: "Clefairy", img: () => baseSprite(35), imgS: () => shinySprite(35) },
			{ id: 101, natiId: 36, name: "Clefable", img: () => baseSprite(36), imgS: () => shinySprite(36) },
			{ id: 102, natiId: 441, name: "Chatot", img: () => baseSprite(441), imgS: () => shinySprite(441) },
			{ id: 103, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172) },
			{
				id: 104, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(25), imgS: () => shinySprite(25), },
					{ name: "Female", img: () => baseSprite("0025-f"), imgS: () => shinySprite("0025-f"), },
				]
			},
			{
				id: 105, natiId: 26, name: "Raichu", img: () => baseSprite(26), imgS: () => shinySprite(26), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(26), imgS: () => shinySprite(26), },
					{ name: "Female", img: () => baseSprite("0026-f"), imgS: () => shinySprite("0026-f"), },
				]
			},
			{ id: 106, natiId: 163, name: "Hoothoot", img: () => baseSprite(163), imgS: () => shinySprite(163) },
			{ id: 107, natiId: 164, name: "Noctowl", img: () => baseSprite(164), imgS: () => shinySprite(164) },
			{ id: 108, natiId: 442, name: "Spiritomb", img: () => baseSprite(442), imgS: () => shinySprite(442) },
			{
				id: 109, natiId: 443, name: "Gible", img: () => baseSprite(443), imgS: () => shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(443), imgS: () => shinySprite(443), },
					{ name: "Female", img: () => baseSprite("0443-f"), imgS: () => shinySprite("0443-f"), },
				]
			},
			{
				id: 110, natiId: 444, name: "Gabite", img: () => baseSprite(444), imgS: () => shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(444), imgS: () => shinySprite(444), },
					{ name: "Female", img: () => baseSprite("0444-f"), imgS: () => shinySprite("0444-f"), },
				]
			},
			{
				id: 111, natiId: 445, name: "Garchomp", img: () => baseSprite(445), imgS: () => shinySprite(445), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(445), imgS: () => shinySprite(445), },
					{ name: "Female", img: () => baseSprite("0445-f"), imgS: () => shinySprite("0445-f"), },
				]
			},
			{ id: 112, natiId: 446, name: "Munchlax", img: () => baseSprite(446), imgS: () => shinySprite(446) },
			{ id: 113, natiId: 143, name: "Snorlax", img: () => baseSprite(143), imgS: () => shinySprite(143) },
			{
				id: 114, natiId: 201, name: "Unown", img: () => baseSprite(201), imgS: () => shinySprite(201), tags: ["other"], forms: [
					{ name: "A", img: () => baseSprite("0201-a"), imgS: () => shinySprite("0201-a"), },
					{ name: "B", img: () => baseSprite("0201-b"), imgS: () => shinySprite("0201-b"), },
					{ name: "C", img: () => baseSprite("0201-c"), imgS: () => shinySprite("0201-c"), },
					{ name: "D", img: () => baseSprite("0201-d"), imgS: () => shinySprite("0201-d"), },
					{ name: "E", img: () => baseSprite("0201-e"), imgS: () => shinySprite("0201-e"), },
					{ name: "F", img: () => baseSprite("0201-f"), imgS: () => shinySprite("0201-f"), },
					{ name: "G", img: () => baseSprite("0201-g"), imgS: () => shinySprite("0201-g"), },
					{ name: "H", img: () => baseSprite("0201-h"), imgS: () => shinySprite("0201-h"), },
					{ name: "I", img: () => baseSprite("0201-i"), imgS: () => shinySprite("0201-i"), },
					{ name: "J", img: () => baseSprite("0201-j"), imgS: () => shinySprite("0201-j"), },
					{ name: "K", img: () => baseSprite("0201-k"), imgS: () => shinySprite("0201-k"), },
					{ name: "L", img: () => baseSprite("0201-l"), imgS: () => shinySprite("0201-l"), },
					{ name: "M", img: () => baseSprite("0201-m"), imgS: () => shinySprite("0201-m"), },
					{ name: "N", img: () => baseSprite("0201-n"), imgS: () => shinySprite("0201-n"), },
					{ name: "O", img: () => baseSprite("0201-o"), imgS: () => shinySprite("0201-o"), },
					{ name: "P", img: () => baseSprite("0201-p"), imgS: () => shinySprite("0201-p"), },
					{ name: "Q", img: () => baseSprite("0201-q"), imgS: () => shinySprite("0201-q"), },
					{ name: "R", img: () => baseSprite("0201-r"), imgS: () => shinySprite("0201-r"), },
					{ name: "S", img: () => baseSprite("0201-s"), imgS: () => shinySprite("0201-s"), },
					{ name: "T", img: () => baseSprite("0201-t"), imgS: () => shinySprite("0201-t"), },
					{ name: "U", img: () => baseSprite("0201-u"), imgS: () => shinySprite("0201-u"), },
					{ name: "V", img: () => baseSprite("0201-v"), imgS: () => shinySprite("0201-v"), },
					{ name: "W", img: () => baseSprite("0201-w"), imgS: () => shinySprite("0201-w"), },
					{ name: "X", img: () => baseSprite("0201-x"), imgS: () => shinySprite("0201-x"), },
					{ name: "Y", img: () => baseSprite("0201-y"), imgS: () => shinySprite("0201-y"), },
					{ name: "Z", img: () => baseSprite("0201-z"), imgS: () => shinySprite("0201-z"), },
					{ name: "!", img: () => baseSprite("0201-em"), imgS: () => shinySprite("0201-em"), },
					{ name: "?", img: () => baseSprite("0201-qm"), imgS: () => shinySprite("0201-qm"), },]
			},
			{ id: 115, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447) },
			{ id: 116, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448) },
			{
				id: 117, natiId: 194, name: "Wooper", img: () => baseSprite(194), imgS: () => shinySprite(194), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(194), imgS: () => shinySprite(194), },
					{ name: "Female", img: () => baseSprite("0194-f"), imgS: () => shinySprite("0194-f"), },
				]
			},
			{
				id: 118, natiId: 195, name: "Quagsire", img: () => baseSprite(195), imgS: () => shinySprite(195), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(195), imgS: () => shinySprite(195), },
					{ name: "Female", img: () => baseSprite("0195-f"), imgS: () => shinySprite("0195-f"), },
				]
			},
			{ id: 119, natiId: 278, name: "Wingull", img: () => baseSprite(278), imgS: () => shinySprite(278) },
			{ id: 120, natiId: 279, name: "Pelipper", img: () => baseSprite(279), imgS: () => shinySprite(279) },
			{
				id: 121, natiId: 203, name: "Girafarig", img: () => baseSprite(203), imgS: () => shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(203), imgS: () => shinySprite(203), },
					{ name: "Female", img: () => baseSprite("0203-f"), imgS: () => shinySprite("0203-f"), },
				]
			},
			{
				id: 122, natiId: 449, name: "Hippopotas", img: () => baseSprite(449), imgS: () => shinySprite(449), forms: [
					{ name: "Male", img: () => baseSprite(449), imgS: () => shinySprite(449), },
					{ name: "Female", img: () => baseSprite("0449-f"), imgS: () => shinySprite("0449-f"), },
				]
			},
			{
				id: 123, natiId: 450, name: "Hippowdon", img: () => baseSprite(450), imgS: () => shinySprite(450), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(450), imgS: () => shinySprite(450), },
					{ name: "Female", img: () => baseSprite("0450-f"), imgS: () => shinySprite("0450-f"), },
				]
			},
			{ id: 124, natiId: 298, name: "Azurill", img: () => baseSprite(298), imgS: () => shinySprite(298) },
			{ id: 125, natiId: 183, name: "Marill", img: () => baseSprite(183), imgS: () => shinySprite(183) },
			{ id: 126, natiId: 184, name: "Azumarill", img: () => baseSprite(184), imgS: () => shinySprite(184) },
			{ id: 127, natiId: 451, name: "Skorupi", img: () => baseSprite(451), imgS: () => shinySprite(451) },
			{ id: 128, natiId: 452, name: "Drapion", img: () => baseSprite(452), imgS: () => shinySprite(452) },
			{
				id: 129, natiId: 453, name: "Croagunk", img: () => baseSprite(453), imgS: () => shinySprite(453), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(453), imgS: () => shinySprite(453), },
					{ name: "Female", img: () => baseSprite("0453-f"), imgS: () => shinySprite("0453-f"), },
				]
			},
			{
				id: 130, natiId: 454, name: "Toxicroak", img: () => baseSprite(454), imgS: () => shinySprite(454), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(454), imgS: () => shinySprite(454), },
					{ name: "Female", img: () => baseSprite("0454-f"), imgS: () => shinySprite("0454-f"), },
				]
			},
			{ id: 131, natiId: 455, name: "Carnivine", img: () => baseSprite(455), imgS: () => shinySprite(455) },
			{ id: 132, natiId: 223, name: "Remoraid", img: () => baseSprite(223), imgS: () => shinySprite(223) },
			{
				id: 133, natiId: 224, name: "Octillery", img: () => baseSprite(224), imgS: () => shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(224), imgS: () => shinySprite(224), },
					{ name: "Female", img: () => baseSprite("0224-f"), imgS: () => shinySprite("0224-f"), },
				]
			},
			{
				id: 134, natiId: 456, name: "Finneon", img: () => baseSprite(456), imgS: () => shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(456), imgS: () => shinySprite(456), },
					{ name: "Female", img: () => baseSprite("0456-f"), imgS: () => shinySprite("0456-f"), },
				]
			},
			{
				id: 135, natiId: 457, name: "Lumineon", img: () => baseSprite(457), imgS: () => shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(457), imgS: () => shinySprite(457), },
					{ name: "Female", img: () => baseSprite("0457-f"), imgS: () => shinySprite("0457-f"), },
				]
			},
			{ id: 136, natiId: 72, name: "Tentacool", img: () => baseSprite(72), imgS: () => shinySprite(72) },
			{ id: 137, natiId: 73, name: "Tentacruel", img: () => baseSprite(73), imgS: () => shinySprite(73) },
			{ id: 138, natiId: 349, name: "Feebas", img: () => baseSprite(349), imgS: () => shinySprite(349) },
			{
				id: 139, natiId: 350, name: "Milotic", img: () => baseSprite(350), imgS: () => shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(350), imgS: () => shinySprite(350), },
					{ name: "Female", img: () => baseSprite("0350-f"), imgS: () => shinySprite("0350-f"), },
				]
			},
			{ id: 140, natiId: 458, name: "Mantyke", img: () => baseSprite(458), imgS: () => shinySprite(458) },
			{ id: 141, natiId: 226, name: "Mantine", img: () => baseSprite(226), imgS: () => shinySprite(226) },
			{
				id: 142, natiId: 459, name: "Snover", img: () => baseSprite(459), imgS: () => shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(459), imgS: () => shinySprite(459), },
					{ name: "Female", img: () => baseSprite("0459-f"), imgS: () => shinySprite("0459-f"), },
				]
			},
			{
				id: 143, natiId: 460, name: "Abomasnow", img: () => baseSprite(460), imgS: () => shinySprite(460), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(460), imgS: () => shinySprite(460), },
					{ name: "Female", img: () => baseSprite("0460-f"), imgS: () => shinySprite("0460-f"), },
				]
			},
			{
				id: 144, natiId: 215, name: "Sneasel", img: () => baseSprite(215), imgS: () => shinySprite(215), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(215), imgS: () => shinySprite(215), },
					{ name: "Female", img: () => baseSprite("0215-f"), imgS: () => shinySprite("0215-f"), },
				]
			},
			{
				id: 145, natiId: 461, name: "Weavile", img: () => baseSprite(461), imgS: () => shinySprite(461), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(461), imgS: () => shinySprite(461), },
					{ name: "Female", img: () => baseSprite("0461-f"), imgS: () => shinySprite("0461-f"), },
				]
			},
			{ id: 146, natiId: 480, name: "Uxie", img: () => baseSprite(480), imgS: () => shinySprite(480), tags: ["legendary"] },
			{ id: 147, natiId: 481, name: "Mesprit", img: () => baseSprite(481), imgS: () => shinySprite(481), tags: ["legendary"] },
			{ id: 148, natiId: 482, name: "Azelf", img: () => baseSprite(482), imgS: () => shinySprite(482), tags: ["legendary"] },
			{ id: 149, natiId: 483, name: "Dialga", img: () => baseSprite(483), imgS: () => shinySprite(483), tags: ["legendary"] },
			{ id: 150, natiId: 484, name: "Palkia", img: () => baseSprite(484), imgS: () => shinySprite(484), tags: ["legendary"] },
			{ id: 151, natiId: 490, name: "Manaphy", img: () => baseSprite(490), imgS: () => shinySprite(490), tags: ["mythical"] }
		],
	},
});
