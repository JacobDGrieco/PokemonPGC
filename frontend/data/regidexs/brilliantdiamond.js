const game = "brilliantdiamond";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const nationalDex = (id) => _nationalDex(game, id);
const nationalDexForm = (id, form) => _nationalDex(game, id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Sinnoh Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{ id: 1, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), dexSync: [nationalDex(387)], },
			{ id: 2, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), dexSync: [nationalDex(388)], },
			{ id: 3, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), dexSync: [nationalDex(389)], },
			{ id: 4, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), dexSync: [nationalDex(390)], },
			{ id: 5, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), dexSync: [nationalDex(391)], },
			{ id: 6, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), dexSync: [nationalDex(392)], },
			{ id: 7, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), dexSync: [nationalDex(393)], },
			{ id: 8, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), dexSync: [nationalDex(394)], },
			{ id: 9, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), dexSync: [nationalDex(395)], },
			{
				id: 10, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), dexSync: [nationalDex(396)], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), dexSync: nationalDex(396, "Male"), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), dexSync: nationalDex(396, "Female"), },
				],
			},
			{
				id: 11, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), dexSync: [nationalDex(397)], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), dexSync: nationalDex(397, "Male"), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), dexSync: nationalDex(397, "Female"), },
				],
			},
			{
				id: 12, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), dexSync: [nationalDex(398)], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), dexSync: nationalDex(398, "Male"), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), dexSync: nationalDex(398, "Female"), },
				],
			},
			{
				id: 13, name: "Bidoof", img: baseSprite(399), imgS: shinySprite(399), dexSync: [nationalDex(399)], forms: [
					{ name: "Male", img: baseSprite(399), imgS: shinySprite(399), dexSync: nationalDex(399, "Male"), },
					{ name: "Female", img: baseSprite("399-f"), imgS: shinySprite("399-f"), dexSync: nationalDex(399, "Female"), },
				],
			},
			{
				id: 14, name: "Bibarel", img: baseSprite(400), imgS: shinySprite(400), dexSync: [nationalDex(400)], forms: [
					{ name: "Male", img: baseSprite(400), imgS: shinySprite(400), dexSync: nationalDex(400, "Male"), },
					{ name: "Female", img: baseSprite("400-f"), imgS: shinySprite("400-f"), dexSync: nationalDex(400, "Female"), },
				],
			},
			{
				id: 15, name: "Kricketot", img: baseSprite(401), imgS: shinySprite(401), dexSync: [nationalDex(401)], forms: [
					{ name: "Male", img: baseSprite(401), imgS: shinySprite(401), dexSync: nationalDex(401, "Male"), },
					{ name: "Female", img: baseSprite("401-f"), imgS: shinySprite("401-f"), dexSync: nationalDex(401, "Female"), },
				],
			},
			{
				id: 16, name: "Kricketune", img: baseSprite(402), imgS: shinySprite(402), dexSync: [nationalDex(402)], forms: [
					{ name: "Male", img: baseSprite(402), imgS: shinySprite(402), dexSync: nationalDex(402, "Male"), },
					{ name: "Female", img: baseSprite("402-f"), imgS: shinySprite("402-f"), dexSync: nationalDex(402, "Female"), },
				],
			},
			{
				id: 17, name: "Shinx", img: baseSprite(403), imgS: shinySprite(403), dexSync: [nationalDex(403)], forms: [
					{ name: "Male", img: baseSprite(403), imgS: shinySprite(403), dexSync: nationalDex(403, "Male"), },
					{ name: "Female", img: baseSprite("403-f"), imgS: shinySprite("403-f"), dexSync: nationalDex(403, "Female"), },
				],
			},
			{
				id: 18, name: "Luxio", img: baseSprite(404), imgS: shinySprite(404), dexSync: [nationalDex(404)], forms: [
					{ name: "Male", img: baseSprite(404), imgS: shinySprite(404), dexSync: nationalDex(404, "Male"), },
					{ name: "Female", img: baseSprite("404-f"), imgS: shinySprite("404-f"), dexSync: nationalDex(404, "Female"), },
				],
			},
			{
				id: 19, name: "Luxray", img: baseSprite(405), imgS: shinySprite(405), dexSync: [nationalDex(405)], forms: [
					{ name: "Male", img: baseSprite(405), imgS: shinySprite(405), dexSync: nationalDex(405, "Male"), },
					{ name: "Female", img: baseSprite("405-f"), imgS: shinySprite("405-f"), dexSync: nationalDex(405, "Female"), },
				],
			},
			{ id: 20, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: [nationalDex(63)], },
			{
				id: 21, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), dexSync: [nationalDex(64)], forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64, "Male"), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: nationalDex(64, "Female"), },
				],
			},
			{
				id: 22, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), dexSync: [nationalDex(65)], forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65, "Male"), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: nationalDex(65, "Female"), },
				],
			},
			{
				id: 23, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), dexSync: [nationalDex(129)], forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129, "Male"), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: nationalDex(129, "Female"), },
				],
			},
			{
				id: 24, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), dexSync: [nationalDex(130)], forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130, "Male"), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: nationalDex(130, "Female"), },
				],
			},
			{ id: 25, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), dexSync: [nationalDex(406)], },
			{
				id: 26, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), dexSync: [nationalDex(315)], forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), dexSync: nationalDex(315, "Male"), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), dexSync: nationalDex(315, "Female"), },
				],
			},
			{
				id: 27, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), dexSync: [nationalDex(407)], forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), dexSync: nationalDex(407, "Male"), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), dexSync: nationalDex(407, "Female"), },
				],
			},
			{
				id: 28, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), dexSync: [nationalDex(41)], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41, "Male"), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: nationalDex(41, "Female"), },
				],
			},
			{
				id: 29, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), dexSync: [nationalDex(42)], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42, "Male"), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: nationalDex(42, "Female"), },
				],
			},
			{ id: 30, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: [nationalDex(169)], },
			{ id: 31, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: [nationalDex(74)], },
			{ id: 32, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: [nationalDex(75)], },
			{ id: 33, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: [nationalDex(76)], },
			{ id: 34, name: "Onix", img: baseSprite(95), imgS: shinySprite(95), dexSync: [nationalDex(95)], },
			{
				id: 35, name: "Steelix", img: baseSprite(208), imgS: shinySprite(208), dexSync: [nationalDex(208)], forms: [
					{ name: "Male", img: baseSprite(208), imgS: shinySprite(208), dexSync: nationalDex(208, "Male"), },
					{ name: "Female", img: baseSprite("208-f"), imgS: shinySprite("208-f"), dexSync: nationalDex(208, "Female"), },
				],
			},
			{ id: 36, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), dexSync: [nationalDex(408)], },
			{ id: 37, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), dexSync: [nationalDex(409)], },
			{ id: 38, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), dexSync: [nationalDex(410)], },
			{ id: 39, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), dexSync: [nationalDex(411)], },
			{ id: 40, name: "Machop", img: baseSprite(66), imgS: shinySprite(66), dexSync: [nationalDex(66)], },
			{ id: 41, name: "Machoke", img: baseSprite(67), imgS: shinySprite(67), dexSync: [nationalDex(67)], },
			{ id: 42, name: "Machamp", img: baseSprite(68), imgS: shinySprite(68), dexSync: [nationalDex(68)], },
			{ id: 43, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: [nationalDex(54)], },
			{ id: 44, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: [nationalDex(55)], },
			{
				id: 45, name: "Burmy", img: baseSprite(412), imgS: shinySprite(412), dexSync: [nationalDex(412)], forms: [
					{ name: "Plant Cloak", img: baseSprite("412-p"), imgS: shinySprite("412-p"), dexSync: nationalDex(412, "Plant Cloak"), },
					{ name: "Sandy Cloak", img: baseSprite("412-s"), imgS: shinySprite("412-s"), dexSync: nationalDex(412, "Sandy Cloak"), },
					{ name: "Trash Cloak", img: baseSprite("412-t"), imgS: shinySprite("412-t"), dexSync: nationalDex(412, "Trash Cloak"), },
				],
			},
			{
				id: 46, name: "Wormadam", img: baseSprite(413), imgS: shinySprite(413), dexSync: [nationalDex(413)], forms: [
					{ name: "Plant Cloak", img: baseSprite("413-p"), imgS: shinySprite("413-p"), dexSync: nationalDex(413, "Plant Cloak"), },
					{ name: "Sandy Cloak", img: baseSprite("413-s"), imgS: shinySprite("413-s"), dexSync: nationalDex(413, "Sandy Cloak"), },
					{ name: "Trash Cloak", img: baseSprite("413-t"), imgS: shinySprite("413-t"), dexSync: nationalDex(413, "Trash Cloak"), },
				],
			},
			{ id: 47, name: "Mothim", img: baseSprite(414), imgS: shinySprite(414), dexSync: [nationalDex(414)], },
			{ id: 48, name: "Wurmple", img: baseSprite(265), imgS: shinySprite(265), dexSync: [nationalDex(265)], },
			{ id: 49, name: "Silcoon", img: baseSprite(266), imgS: shinySprite(266), dexSync: [nationalDex(266)], },
			{
				id: 50, name: "Beautifly", img: baseSprite(267), imgS: shinySprite(267), dexSync: [nationalDex(267)], forms: [
					{ name: "Male", img: baseSprite(267), imgS: shinySprite(267), dexSync: nationalDex(267, "Male"), },
					{ name: "Female", img: baseSprite("267-f"), imgS: shinySprite("267-f"), dexSync: nationalDex(267, "Female"), },
				],
			},
			{ id: 51, name: "Cascoon", img: baseSprite(268), imgS: shinySprite(268), dexSync: [nationalDex(268)], },
			{
				id: 52, name: "Dustox", img: baseSprite(269), imgS: shinySprite(269), dexSync: [nationalDex(269)], forms: [
					{ name: "Male", img: baseSprite(269), imgS: shinySprite(269), dexSync: nationalDex(269, "Male"), },
					{ name: "Female", img: baseSprite("269-f"), imgS: shinySprite("269-f"), dexSync: nationalDex(269, "Female"), },
				],
			},
			{
				id: 53, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), dexSync: [nationalDex(415)], forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), dexSync: nationalDex(415, "Male"), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), dexSync: nationalDex(415, "Female"), },
				],
			},
			{ id: 54, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), dexSync: [nationalDex(416)], },
			{
				id: 55, name: "Pachirisu", img: baseSprite(417), imgS: shinySprite(417), dexSync: [nationalDex(417)], forms: [
					{ name: "Male", img: baseSprite(417), imgS: shinySprite(417), dexSync: nationalDex(417, "Male"), },
					{ name: "Female", img: baseSprite("417-f"), imgS: shinySprite("417-f"), dexSync: nationalDex(417, "Female"), },
				],
			},
			{
				id: 56, name: "Buizel", img: baseSprite(418), imgS: shinySprite(418), dexSync: [nationalDex(418)], forms: [
					{ name: "Male", img: baseSprite(418), imgS: shinySprite(418), dexSync: nationalDex(418, "Male"), },
					{ name: "Female", img: baseSprite("418-f"), imgS: shinySprite("418-f"), dexSync: nationalDex(418, "Female"), },
				],
			},
			{
				id: 57, name: "Floatzel", img: baseSprite(419), imgS: shinySprite(419), dexSync: [nationalDex(419)], forms: [
					{ name: "Male", img: baseSprite(419), imgS: shinySprite(419), dexSync: nationalDex(419, "Male"), },
					{ name: "Female", img: baseSprite("419-f"), imgS: shinySprite("419-f"), dexSync: nationalDex(419, "Female"), },
				],
			},
			{ id: 58, name: "Cherubi", img: baseSprite(420), imgS: shinySprite(420), dexSync: [nationalDex(420)], },
			{
				id: 59, name: "Cherrim", img: baseSprite(421), imgS: shinySprite(421), dexSync: [nationalDex(421)], forms: [
					{ name: "Overcast", img: baseSprite("421-o"), imgS: shinySprite("421-o"), dexSync: nationalDex(421, "Overcast"), },
					{ name: "Sunshine", img: baseSprite("421-s"), imgS: shinySprite("421-s"), dexSync: nationalDex(421, "Sunshine"), },
				],
			},
			{
				id: 60, name: "Shellos", img: baseSprite(422), imgS: shinySprite(422), dexSync: [nationalDex(422)], forms: [
					{ name: "East Sea", img: baseSprite("422-e"), imgS: shinySprite("422-e"), dexSync: nationalDex(422, "East Sea"), },
					{ name: "West Sea", img: baseSprite("422-w"), imgS: shinySprite("422-w"), dexSync: nationalDex(422, "West Sea"), },
				],
			},
			{
				id: 61, name: "Gastrodon", img: baseSprite(423), imgS: shinySprite(423), dexSync: [nationalDex(423)], forms: [
					{ name: "East Sea", img: baseSprite("423-e"), imgS: shinySprite("423-e"), dexSync: nationalDex(423, "East Sea"), },
					{ name: "West Sea", img: baseSprite("423-w"), imgS: shinySprite("423-w"), dexSync: nationalDex(423, "West Sea"), },
				],
			},
			{
				id: 62, name: "Heracross", img: baseSprite(214), imgS: shinySprite(214), dexSync: [nationalDex(214)], forms: [
					{ name: "Male", img: baseSprite(214), imgS: shinySprite(214), dexSync: nationalDex(214, "Male"), },
					{ name: "Female", img: baseSprite("214-f"), imgS: shinySprite("214-f"), dexSync: nationalDex(214, "Female"), },
				],
			},
			{
				id: 63, name: "Aipom", img: baseSprite(190), imgS: shinySprite(190), dexSync: [nationalDex(190)], forms: [
					{ name: "Male", img: baseSprite(190), imgS: shinySprite(190), dexSync: nationalDex(190, "Male"), },
					{ name: "Female", img: baseSprite("190-f"), imgS: shinySprite("190-f"), dexSync: nationalDex(190, "Female"), },
				],
			},
			{
				id: 64, name: "Ambipom", img: baseSprite(424), imgS: shinySprite(424), dexSync: [nationalDex(424)], forms: [
					{ name: "Male", img: baseSprite(424), imgS: shinySprite(424), dexSync: nationalDex(424, "Male"), },
					{ name: "Female", img: baseSprite("424-f"), imgS: shinySprite("424-f"), dexSync: nationalDex(424, "Female"), },
				],
			},
			{ id: 65, name: "Drifloon", img: baseSprite(425), imgS: shinySprite(425), dexSync: [nationalDex(425)], },
			{ id: 66, name: "Drifblim", img: baseSprite(426), imgS: shinySprite(426), dexSync: [nationalDex(426)], },
			{ id: 67, name: "Buneary", img: baseSprite(427), imgS: shinySprite(427), dexSync: [nationalDex(427)], },
			{ id: 68, name: "Lopunny", img: baseSprite(428), imgS: shinySprite(428), dexSync: [nationalDex(428)], },
			{ id: 69, name: "Gastly", img: baseSprite(92), imgS: shinySprite(92), dexSync: [nationalDex(92)], },
			{ id: 70, name: "Haunter", img: baseSprite(93), imgS: shinySprite(93), dexSync: [nationalDex(93)], },
			{ id: 71, name: "Gengar", img: baseSprite(94), imgS: shinySprite(94), dexSync: [nationalDex(94)], },
			{ id: 72, name: "Misdreavus", img: baseSprite(200), imgS: shinySprite(200), dexSync: [nationalDex(200)], },
			{ id: 73, name: "Mismagius", img: baseSprite(429), imgS: shinySprite(429), dexSync: [nationalDex(429)], },
			{
				id: 74, name: "Murkrow", img: baseSprite(198), imgS: shinySprite(198), dexSync: [nationalDex(198)], forms: [
					{ name: "Male", img: baseSprite(198), imgS: shinySprite(198), dexSync: nationalDex(198, "Male"), },
					{ name: "Female", img: baseSprite("198-f"), imgS: shinySprite("198-f"), dexSync: nationalDex(198, "Female"), },
				],
			},
			{ id: 75, name: "Honchkrow", img: baseSprite(430), imgS: shinySprite(430), dexSync: [nationalDex(430)], },
			{ id: 76, name: "Glameow", img: baseSprite(431), imgS: shinySprite(431), dexSync: [nationalDex(431)], },
			{ id: 77, name: "Purugly", img: baseSprite(432), imgS: shinySprite(432), dexSync: [nationalDex(432)], },
			{
				id: 78, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), dexSync: [nationalDex(118)], forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118, "Male"), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: nationalDex(118, "Female"), },
				],
			},
			{
				id: 79, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), dexSync: [nationalDex(119)], forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119, "Male"), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: nationalDex(119, "Female"), },
				],
			},
			{ id: 80, name: "Barboach", img: baseSprite(339), imgS: shinySprite(339), dexSync: [nationalDex(339)], },
			{ id: 81, name: "Whiscash", img: baseSprite(340), imgS: shinySprite(340), dexSync: [nationalDex(340)], },
			{ id: 82, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), dexSync: [nationalDex(433)], },
			{ id: 83, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), dexSync: [nationalDex(358)], },
			{ id: 84, name: "Stunky", img: baseSprite(434), imgS: shinySprite(434), dexSync: [nationalDex(434)], },
			{ id: 85, name: "Skuntank", img: baseSprite(435), imgS: shinySprite(435), dexSync: [nationalDex(435)], },
			{
				id: 86, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), dexSync: [nationalDex(307)], forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), dexSync: nationalDex(307, "Male"), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), dexSync: nationalDex(307, "Female"), },
				],
			},
			{
				id: 87, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), dexSync: [nationalDex(308)], forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), dexSync: nationalDex(308, "Male"), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), dexSync: nationalDex(308, "Female"), },
				],
			},
			{ id: 88, name: "Bronzor", img: baseSprite(436), imgS: shinySprite(436), dexSync: [nationalDex(436)], },
			{ id: 89, name: "Bronzong", img: baseSprite(437), imgS: shinySprite(437), dexSync: [nationalDex(437)], },
			{ id: 90, name: "Ponyta", img: baseSprite(77), imgS: shinySprite(77), dexSync: [nationalDex(77)], },
			{ id: 91, name: "Rapidash", img: baseSprite(78), imgS: shinySprite(78), dexSync: [nationalDex(78)], },
			{ id: 92, name: "Bonsly", img: baseSprite(438), imgS: shinySprite(438), dexSync: [nationalDex(438)], },
			{
				id: 93, name: "Sudowoodo", img: baseSprite(185), imgS: shinySprite(185), dexSync: [nationalDex(185)], forms: [
					{ name: "Male", img: baseSprite(185), imgS: shinySprite(185), dexSync: nationalDex(185, "Male"), },
					{ name: "Female", img: baseSprite("185-f"), imgS: shinySprite("185-f"), dexSync: nationalDex(185, "Female"), },
				],
			},
			{ id: 94, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), dexSync: [nationalDex(439)], },
			{ id: 95, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), dexSync: [nationalDex(122)], },
			{ id: 96, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [nationalDex(440)], },
			{ id: 97, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [nationalDex(113)], },
			{ id: 98, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [nationalDex(242)], },
			{ id: 99, name: "Cleffa", img: baseSprite(173), imgS: shinySprite(173), dexSync: [nationalDex(173)], },
			{ id: 100, name: "Clefairy", img: baseSprite(35), imgS: shinySprite(35), dexSync: [nationalDex(35)], },
			{ id: 101, name: "Clefable", img: baseSprite(36), imgS: shinySprite(36), dexSync: [nationalDex(36)], },
			{ id: 102, name: "Chatot", img: baseSprite(441), imgS: shinySprite(441), dexSync: [nationalDex(441)], },
			{ id: 103, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: [nationalDex(172)], },
			{
				id: 104, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), dexSync: [nationalDex(25)], forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25, "Male"), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: nationalDex(25, "Female"), },
				],
			},
			{
				id: 105, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), dexSync: [nationalDex(26)], forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26, "Male"), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: nationalDex(26, "Female"), },
				],
			},
			{ id: 106, name: "Hoothoot", img: baseSprite(163), imgS: shinySprite(163), dexSync: [nationalDex(163)], },
			{ id: 107, name: "Noctowl", img: baseSprite(164), imgS: shinySprite(164), dexSync: [nationalDex(164)], },
			{ id: 108, name: "Spiritomb", img: baseSprite(442), imgS: shinySprite(442), dexSync: [nationalDex(442)], },
			{
				id: 109, name: "Gible", img: baseSprite(443), imgS: shinySprite(443), dexSync: [nationalDex(443)], forms: [
					{ name: "Male", img: baseSprite(443), imgS: shinySprite(443), dexSync: nationalDex(443, "Male"), },
					{ name: "Female", img: baseSprite("443-f"), imgS: shinySprite("443-f"), dexSync: nationalDex(443, "Female"), },
				],
			},
			{
				id: 110, name: "Gabite", img: baseSprite(444), imgS: shinySprite(444), dexSync: [nationalDex(444)], forms: [
					{ name: "Male", img: baseSprite(444), imgS: shinySprite(444), dexSync: nationalDex(444, "Male"), },
					{ name: "Female", img: baseSprite("444-f"), imgS: shinySprite("444-f"), dexSync: nationalDex(444, "Female"), },
				],
			},
			{
				id: 111, name: "Garchomp", img: baseSprite(445), imgS: shinySprite(445), dexSync: [nationalDex(445)], forms: [
					{ name: "Male", img: baseSprite(445), imgS: shinySprite(445), dexSync: nationalDex(445, "Male"), },
					{ name: "Female", img: baseSprite("445-f"), imgS: shinySprite("445-f"), dexSync: nationalDex(445, "Female"), },
				],
			},
			{ id: 112, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: [nationalDex(446)], },
			{ id: 113, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: [nationalDex(143)], },
			{
				id: 114, name: "Unown", img: baseSprite(201), imgS: shinySprite(201), dexSync: [nationalDex(201)], forms: [
					{ name: "A", img: baseSprite("201-a"), imgS: shinySprite("201-a"), dexSync: nationalDex(201, "A"), },
					{ name: "B", img: baseSprite("201-b"), imgS: shinySprite("201-b"), dexSync: nationalDex(201, "B"), },
					{ name: "C", img: baseSprite("201-c"), imgS: shinySprite("201-c"), dexSync: nationalDex(201, "C"), },
					{ name: "D", img: baseSprite("201-d"), imgS: shinySprite("201-d"), dexSync: nationalDex(201, "D"), },
					{ name: "E", img: baseSprite("201-e"), imgS: shinySprite("201-e"), dexSync: nationalDex(201, "E"), },
					{ name: "F", img: baseSprite("201-f"), imgS: shinySprite("201-f"), dexSync: nationalDex(201, "F"), },
					{ name: "G", img: baseSprite("201-g"), imgS: shinySprite("201-g"), dexSync: nationalDex(201, "G"), },
					{ name: "H", img: baseSprite("201-h"), imgS: shinySprite("201-h"), dexSync: nationalDex(201, "H"), },
					{ name: "I", img: baseSprite("201-i"), imgS: shinySprite("201-i"), dexSync: nationalDex(201, "I"), },
					{ name: "J", img: baseSprite("201-j"), imgS: shinySprite("201-j"), dexSync: nationalDex(201, "J"), },
					{ name: "K", img: baseSprite("201-k"), imgS: shinySprite("201-k"), dexSync: nationalDex(201, "K"), },
					{ name: "L", img: baseSprite("201-l"), imgS: shinySprite("201-l"), dexSync: nationalDex(201, "L"), },
					{ name: "M", img: baseSprite("201-m"), imgS: shinySprite("201-m"), dexSync: nationalDex(201, "M"), },
					{ name: "N", img: baseSprite("201-n"), imgS: shinySprite("201-n"), dexSync: nationalDex(201, "N"), },
					{ name: "O", img: baseSprite("201-o"), imgS: shinySprite("201-o"), dexSync: nationalDex(201, "O"), },
					{ name: "P", img: baseSprite("201-p"), imgS: shinySprite("201-p"), dexSync: nationalDex(201, "P"), },
					{ name: "Q", img: baseSprite("201-q"), imgS: shinySprite("201-q"), dexSync: nationalDex(201, "Q"), },
					{ name: "R", img: baseSprite("201-r"), imgS: shinySprite("201-r"), dexSync: nationalDex(201, "R"), },
					{ name: "S", img: baseSprite("201-s"), imgS: shinySprite("201-s"), dexSync: nationalDex(201, "S"), },
					{ name: "T", img: baseSprite("201-t"), imgS: shinySprite("201-t"), dexSync: nationalDex(201, "T"), },
					{ name: "U", img: baseSprite("201-u"), imgS: shinySprite("201-u"), dexSync: nationalDex(201, "U"), },
					{ name: "V", img: baseSprite("201-v"), imgS: shinySprite("201-v"), dexSync: nationalDex(201, "V"), },
					{ name: "W", img: baseSprite("201-w"), imgS: shinySprite("201-w"), dexSync: nationalDex(201, "W"), },
					{ name: "X", img: baseSprite("201-x"), imgS: shinySprite("201-x"), dexSync: nationalDex(201, "X"), },
					{ name: "Y", img: baseSprite("201-y"), imgS: shinySprite("201-y"), dexSync: nationalDex(201, "Y"), },
					{ name: "Z", img: baseSprite("201-z"), imgS: shinySprite("201-z"), dexSync: nationalDex(201, "Z"), },
					{ name: "!", img: baseSprite("201-em"), imgS: shinySprite("201-em"), dexSync: nationalDex(201, "!"), },
					{ name: "?", img: baseSprite("201-qm"), imgS: shinySprite("201-qm"), dexSync: nationalDex(201, "?"), },],
			},
			{ id: 115, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: [nationalDex(447)], },
			{ id: 116, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), dexSync: [nationalDex(448)], },
			{
				id: 117, name: "Wooper", img: baseSprite(194), imgS: shinySprite(194), dexSync: [nationalDex(194)], forms: [
					{ name: "Male", img: baseSprite(194), imgS: shinySprite(194), dexSync: nationalDex(194, "Male"), },
					{ name: "Female", img: baseSprite("194-f"), imgS: shinySprite("194-f"), dexSync: nationalDex(194, "Female"), },
				],
			},
			{
				id: 118, name: "Quagsire", img: baseSprite(195), imgS: shinySprite(195), dexSync: [nationalDex(195)], forms: [
					{ name: "Male", img: baseSprite(195), imgS: shinySprite(195), dexSync: nationalDex(195, "Male"), },
					{ name: "Female", img: baseSprite("195-f"), imgS: shinySprite("195-f"), dexSync: nationalDex(195, "Female"), },
				],
			},
			{ id: 119, name: "Wingull", img: baseSprite(278), imgS: shinySprite(278), dexSync: [nationalDex(278)], },
			{ id: 120, name: "Pelipper", img: baseSprite(279), imgS: shinySprite(279), dexSync: [nationalDex(279)], },
			{
				id: 121, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: [nationalDex(203)], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: nationalDex(203, "Male"), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: nationalDex(203, "Female"), },
				],
			},
			{
				id: 122, name: "Hippopotas", img: baseSprite(449), imgS: shinySprite(449), dexSync: [nationalDex(449)], forms: [
					{ name: "Male", img: baseSprite(449), imgS: shinySprite(449), dexSync: nationalDex(449, "Male"), },
					{ name: "Female", img: baseSprite("449-f"), imgS: shinySprite("449-f"), dexSync: nationalDex(449, "Female"), },
				],
			},
			{
				id: 123, name: "Hippowdon", img: baseSprite(450), imgS: shinySprite(450), dexSync: [nationalDex(450)], forms: [
					{ name: "Male", img: baseSprite(450), imgS: shinySprite(450), dexSync: nationalDex(450, "Male"), },
					{ name: "Female", img: baseSprite("450-f"), imgS: shinySprite("450-f"), dexSync: nationalDex(450, "Female"), },
				],
			},
			{ id: 124, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), dexSync: [nationalDex(298)], },
			{ id: 125, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), dexSync: [nationalDex(183)], },
			{ id: 126, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), dexSync: [nationalDex(184)], },
			{ id: 127, name: "Skorupi", img: baseSprite(451), imgS: shinySprite(451), dexSync: [nationalDex(451)], },
			{ id: 128, name: "Drapion", img: baseSprite(452), imgS: shinySprite(452), dexSync: [nationalDex(452)], },
			{
				id: 129, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), dexSync: [nationalDex(453)], forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), dexSync: nationalDex(453, "Male"), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), dexSync: nationalDex(453, "Female"), },
				],
			},
			{
				id: 130, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), dexSync: [nationalDex(454)], forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), dexSync: nationalDex(454, "Male"), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), dexSync: nationalDex(454, "Female"), },
				],
			},
			{ id: 131, name: "Carnivine", img: baseSprite(455), imgS: shinySprite(455), dexSync: [nationalDex(455)], },
			{ id: 132, name: "Remoraid", img: baseSprite(223), imgS: shinySprite(223), dexSync: [nationalDex(223)], },
			{
				id: 133, name: "Octillery", img: baseSprite(224), imgS: shinySprite(224), dexSync: [nationalDex(224)], forms: [
					{ name: "Male", img: baseSprite(224), imgS: shinySprite(224), dexSync: nationalDex(224, "Male"), },
					{ name: "Female", img: baseSprite("224-f"), imgS: shinySprite("224-f"), dexSync: nationalDex(224, "Female"), },
				],
			},
			{
				id: 134, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [nationalDex(456)], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: nationalDex(456, "Male"), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: nationalDex(456, "Female"), },
				],
			},
			{
				id: 135, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [nationalDex(457)], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: nationalDex(457, "Male"), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: nationalDex(457, "Female"), },
				],
			},
			{ id: 136, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), dexSync: [nationalDex(72)], },
			{ id: 137, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), dexSync: [nationalDex(73)], },
			{ id: 138, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), dexSync: [nationalDex(349)], },
			{
				id: 139, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), dexSync: [nationalDex(350)], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), dexSync: nationalDex(350, "Male"), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), dexSync: nationalDex(350, "Female"), },
				],
			},
			{ id: 140, name: "Mantyke", img: baseSprite(458), imgS: shinySprite(458), dexSync: [nationalDex(458)], },
			{ id: 141, name: "Mantine", img: baseSprite(226), imgS: shinySprite(226), dexSync: [nationalDex(226)], },
			{
				id: 142, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: [nationalDex(459)], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: nationalDex(459, "Male"), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: nationalDex(459, "Female"), },
				],
			},
			{
				id: 143, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: [nationalDex(460)], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: nationalDex(460, "Male"), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: nationalDex(460, "Female"), },
				],
			},
			{
				id: 144, name: "Sneasel", img: baseSprite(215), imgS: shinySprite(215), dexSync: [nationalDex(215)], forms: [
					{ name: "Male", img: baseSprite(215), imgS: shinySprite(215), dexSync: nationalDex(215, "Male"), },
					{ name: "Female", img: baseSprite("215-f"), imgS: shinySprite("215-f"), dexSync: nationalDex(215, "Female"), },
				],
			},
			{
				id: 145, name: "Weavile", img: baseSprite(461), imgS: shinySprite(461), dexSync: [nationalDex(461)], forms: [
					{ name: "Male", img: baseSprite(461), imgS: shinySprite(461), dexSync: nationalDex(461, "Male"), },
					{ name: "Female", img: baseSprite("461-f"), imgS: shinySprite("461-f"), dexSync: nationalDex(461, "Female"), },
				],
			},
			{ id: 146, name: "Uxie", img: baseSprite(480), imgS: shinySprite(480), legendary: true, dexSync: [nationalDex(480)], },
			{ id: 147, name: "Mesprit", img: baseSprite(481), imgS: shinySprite(481), legendary: true, dexSync: [nationalDex(481)], },
			{ id: 148, name: "Azelf", img: baseSprite(482), imgS: shinySprite(482), legendary: true, dexSync: [nationalDex(482)], },
			{ id: 149, name: "Dialga", img: baseSprite(483), imgS: shinySprite(483), legendary: true, dexSync: [nationalDex(483)], },
			{ id: 150, name: "Palkia", img: baseSprite(484), imgS: shinySprite(484), legendary: true, dexSync: [nationalDex(484)], },
			{ id: 151, name: "Manaphy", img: baseSprite(490), imgS: shinySprite(490), mythical: true, dexSync: [nationalDex(490)], }
		],
	},
});
