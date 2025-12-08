const game = "violet";
const sub = game + "id";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const paldeaDex = (...args) => _dex(game, "regional", ...args);
const tmDex = (...args) => _dex(game + "tm", "regional", ...args);
const idDex = (...args) => _dex(game + "id", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Blueberry Academy Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{
				id: 1, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 2, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 3, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 4, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), },
				],
			},
			{
				id: 5, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 6, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{
				id: 7, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{ id: 8, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), dexSync: [paldeaDex(256)], },
			{ id: 9, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), dexSync: [paldeaDex(257)], },
			{ id: 10, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 11, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 12, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 13, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 14, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 15, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 16, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), dexSync: [paldeaDex(43)], },
			{ id: 17, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), dexSync: [paldeaDex(44)], },
			{ id: 18, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), dexSync: [paldeaDex(45)], },
			{
				id: 19, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), dexSync: [paldeaDex(260)], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), dexSync: [paldeaDex(260, "Male")], },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), dexSync: [paldeaDex(260, "Female")], }
				],
			},
			{
				id: 20, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), dexSync: [paldeaDex(261)], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), dexSync: [paldeaDex(261, "Male")], },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), dexSync: [paldeaDex(261, "Female")], },],
			},
			{ id: 21, name: "Kleavor", img: baseSprite(900), imgS: shinySprite(900), },
			{
				id: 22, name: "Tauros", img: baseSprite("128-c"), imgS: shinySprite("128-c"), dexSync: [paldeaDex(223)], forms: [
					{ name: "Kantonian", img: baseSprite("128-a"), imgS: shinySprite("128-a"), dexSync: [paldeaDex(223, "Kantonian")], },
					{ name: "Paldean (Aqua Breed)", img: baseSprite("128-a"), imgS: shinySprite("128-a"), dexSync: [paldeaDex(223, "Paldean (Aqua Breed)")], },
					{ name: "Paldean (Blaze Breed)", img: baseSprite("128-b"), imgS: shinySprite("128-b"), dexSync: [paldeaDex(223, "Paldean (Blaze Breed)")], },
					{ name: "Paldean (Combat Breed)", img: baseSprite("128-c"), imgS: shinySprite("128-c"), dexSync: [paldeaDex(223, "Paldean (Combat Breed)")], }
				],
			},
			{ id: 23, name: "Blitzle", img: baseSprite(522), imgS: shinySprite(522), },
			{ id: 24, name: "Zebstrika", img: baseSprite(523), imgS: shinySprite(523), },
			{
				id: 25, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), dexSync: [paldeaDex(192)], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), dexSync: [paldeaDex(192, "Male")], },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), dexSync: [paldeaDex(192, "Female")], }
				],
			},
			{ id: 26, name: "Farigiraf", img: baseSprite(981), imgS: shinySprite(981), dexSync: [paldeaDex(193)], },
			{ id: 27, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), dexSync: [paldeaDex(267)], },
			{ id: 28, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), dexSync: [paldeaDex(268)], },
			{ id: 29, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), dexSync: [paldeaDex(269)], },
			{ id: 30, name: "Rellor", img: baseSprite(953), imgS: shinySprite(953), dexSync: [paldeaDex(254)], },
			{ id: 31, name: "Rabsca", img: baseSprite(954), imgS: shinySprite(954), dexSync: [paldeaDex(255)], },
			{ id: 32, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), dexSync: [paldeaDex(365)], },
			{
				id: 33, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), dexSync: [paldeaDex(366)], forms: [
					{ name: "Unovian", img: baseSprite(628), imgS: shinySprite(628), dexSync: [paldeaDex(366, "Unovian")], },
					{ name: "Hisuian", img: baseSprite("628-h"), imgS: shinySprite("628-h"), dexSync: [paldeaDex(366, "Hisuian")], }
				],
			},
			{ id: 34, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), dexSync: [tmDex(127)], },
			{ id: 35, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), dexSync: [tmDex(128)], },
			{ id: 36, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), dexSync: [paldeaDex(224)], },
			{
				id: 37, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), dexSync: [paldeaDex(225)], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), dexSync: [paldeaDex(225, "Male")], },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), dexSync: [paldeaDex(225, "Female")], }
				],
			},
			{
				id: 38, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), dexSync: [paldeaDex(190)], forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), dexSync: [paldeaDex(190, "Autumn")], },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [paldeaDex(190, "Spring")], },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), dexSync: [paldeaDex(190, "Summer")], },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), dexSync: [paldeaDex(190, "Winter")], }
				],
			},
			{
				id: 39, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), dexSync: [paldeaDex(191)], forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), dexSync: [paldeaDex(191, "Autumn")], },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [paldeaDex(191, "Spring")], },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), dexSync: [paldeaDex(191, "Summer")], },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), dexSync: [paldeaDex(191, "Winter")], }
				],
			},
			{ id: 40, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{
				id: 41, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), dexSync: [paldeaDex(310)], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), dexSync: [paldeaDex(310, "Normal")], },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), dexSync: [paldeaDex(310, "Fan")], },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), dexSync: [paldeaDex(310, "Frost")], },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), dexSync: [paldeaDex(310, "Heat")], },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), dexSync: [paldeaDex(310, "Mow")], },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), dexSync: [paldeaDex(310, "Wash")], }
				],
			},
			{ id: 42, name: "Milcery", img: baseSprite(868), imgS: shinySprite(868), },
			{
				id: 43, name: "Alcremie", img: baseSprite("869-va"), imgS: shinySprite(869), forms: [
					{ name: "Vanilla Cream\nStrawberry Sweet", img: baseSprite("869-va"), imgS: shinySprite(869), },
					{ name: "Vanilla Cream\nBerry Sweet", img: baseSprite("869-va-b"), imgS: shinySprite("869-b"), },
					{ name: "Vanilla Cream\nLove Sweet", img: baseSprite("869-va-l"), imgS: shinySprite("869-l"), },
					{ name: "Vanilla Cream\nStar Sweet", img: baseSprite("869-va-s"), imgS: shinySprite("869-s"), },
					{ name: "Vanilla Cream\nClover Sweet", img: baseSprite("869-va-c"), imgS: shinySprite("869-c"), },
					{ name: "Vanilla Cream\nFlower Sweet", img: baseSprite("869-va-f"), imgS: shinySprite("869-f"), },
					{ name: "Vanilla Cream\nRibbon Sweet", img: baseSprite("869-va-r"), imgS: shinySprite("869-r"), },
					{ name: "Ruby Cream\nStrawberry Sweet", img: baseSprite("869-rc"), imgS: shinySprite(869), },
					{ name: "Ruby Cream\nBerry Sweet", img: baseSprite("869-rc-b"), imgS: shinySprite("869-b"), },
					{ name: "Ruby Cream\nLove Sweet", img: baseSprite("869-rc-l"), imgS: shinySprite("869-b"), },
					{ name: "Ruby Cream\nStar Sweet", img: baseSprite("869-rc-s"), imgS: shinySprite("869-s"), },
					{ name: "Ruby Cream\nClover Sweet", img: baseSprite("869-rc-c"), imgS: shinySprite("869-c"), },
					{ name: "Ruby Cream\nFlower Sweet", img: baseSprite("869-rc-f"), imgS: shinySprite("869-f"), },
					{ name: "Ruby Cream\nRibbon Sweet", img: baseSprite("869-rc-r"), imgS: shinySprite("869-r"), },
					{ name: "Matcha Cream\nStrawberry Sweet", img: baseSprite("869-mac"), imgS: shinySprite(869), },
					{ name: "Matcha Cream\nBerry Sweet", img: baseSprite("869-mac-b"), imgS: shinySprite("869-b"), },
					{ name: "Matcha Cream\nLove Sweet", img: baseSprite("869-mac-l"), imgS: shinySprite("869-l"), },
					{ name: "Matcha Cream\nStar Sweet", img: baseSprite("869-mac-s"), imgS: shinySprite("869-s"), },
					{ name: "Matcha Cream\nClover Sweet", img: baseSprite("869-mac-c"), imgS: shinySprite("869-c"), },
					{ name: "Matcha Cream\nFlower Sweet", img: baseSprite("869-mac-f"), imgS: shinySprite("869-f"), },
					{ name: "Matcha Cream\nRibbon Sweet", img: baseSprite("869-mac-r"), imgS: shinySprite("869-r"), },
					{ name: "Mint Cream\nStrawberry Sweet", img: baseSprite("869-mic"), imgS: shinySprite(869), },
					{ name: "Mint Cream\nBerry Sweet", img: baseSprite("869-mic-b"), imgS: shinySprite("869-b"), },
					{ name: "Mint Cream\nLove Sweet", img: baseSprite("869-mic-l"), imgS: shinySprite("869-l"), },
					{ name: "Mint Cream\nStar Sweet", img: baseSprite("869-mic-s"), imgS: shinySprite("869-s"), },
					{ name: "Mint Cream\nClover Sweet", img: baseSprite("869-mic-c"), imgS: shinySprite("869-c"), },
					{ name: "Mint Cream\nFlower Sweet", img: baseSprite("869-mic-f"), imgS: shinySprite("869-f"), },
					{ name: "Mint Cream\nRibbon Sweet", img: baseSprite("869-mic-r"), imgS: shinySprite("869-r"), },
					{ name: "Lemon Cream\nStrawberry Sweet", img: baseSprite("869-lc"), imgS: shinySprite(869), },
					{ name: "Lemon Cream\nBerry Sweet", img: baseSprite("869-lc-b"), imgS: shinySprite("869-b"), },
					{ name: "Lemon Cream\nLove Sweet", img: baseSprite("869-lc-l"), imgS: shinySprite("869-l"), },
					{ name: "Lemon Cream\nStar Sweet", img: baseSprite("869-lc-s"), imgS: shinySprite("869-s"), },
					{ name: "Lemon Cream\nClover Sweet", img: baseSprite("869-lc-c"), imgS: shinySprite("869-c"), },
					{ name: "Lemon Cream\nFlower Sweet", img: baseSprite("869-lc-f"), imgS: shinySprite("869-f"), },
					{ name: "Lemon Cream\nRibbon Sweet", img: baseSprite("869-lc-r"), imgS: shinySprite("869-r"), },
					{ name: "Salted Cream\nStrawberry Sweet", img: baseSprite("869-sc"), imgS: shinySprite(869), },
					{ name: "Salted Cream\nBerry Sweet", img: baseSprite("869-sc-b"), imgS: shinySprite("869-b"), },
					{ name: "Salted Cream\nLove Sweet", img: baseSprite("869-sc-l"), imgS: shinySprite("869-l"), },
					{ name: "Salted Cream\nStar Sweet", img: baseSprite("869-sc-s"), imgS: shinySprite("869-s"), },
					{ name: "Salted Cream\nClover Sweet", img: baseSprite("869-sc-c"), imgS: shinySprite("869-c"), },
					{ name: "Salted Cream\nFlower Sweet", img: baseSprite("869-sc-f"), imgS: shinySprite("869-f"), },
					{ name: "Salted Cream\nRibbon Sweet", img: baseSprite("869-sc-r"), imgS: shinySprite("869-r"), },
					{ name: "Ruby Swirl\nStrawberry Sweet", img: baseSprite("869-rs"), imgS: shinySprite(869), },
					{ name: "Ruby Swirl\nBerry Sweet", img: baseSprite("869-rs-b"), imgS: shinySprite("869-b"), },
					{ name: "Ruby Swirl\nLove Sweet", img: baseSprite("869-rs-l"), imgS: shinySprite("869-l"), },
					{ name: "Ruby Swirl\nStar Sweet", img: baseSprite("869-rs-s"), imgS: shinySprite("869-s"), },
					{ name: "Ruby Swirl\nClover Sweet", img: baseSprite("869-rs-c"), imgS: shinySprite("869-c"), },
					{ name: "Ruby Swirl\nFlower Sweet", img: baseSprite("869-rs-f"), imgS: shinySprite("869-f"), },
					{ name: "Ruby Swirl\nRibbon Sweet", img: baseSprite("869-rs-r"), imgS: shinySprite("869-r"), },
					{ name: "Caramel Swirl\nStrawberry Sweet", img: baseSprite("869-cs"), imgS: shinySprite(869), },
					{ name: "Caramel Swirl\nBerry Sweet", img: baseSprite("869-cs-b"), imgS: shinySprite("869-b"), },
					{ name: "Caramel Swirl\nLove Sweet", img: baseSprite("869-cs-l"), imgS: shinySprite("869-l"), },
					{ name: "Caramel Swirl\nStar Sweet", img: baseSprite("869-cs-s"), imgS: shinySprite("869-s"), },
					{ name: "Caramel Swirl\nClover Sweet", img: baseSprite("869-cs-c"), imgS: shinySprite("869-c"), },
					{ name: "Caramel Swirl\nFlower Sweet", img: baseSprite("869-cs-f"), imgS: shinySprite("869-f"), },
					{ name: "Caramel Swirl\nRibbon Sweet", img: baseSprite("869-cs-r"), imgS: shinySprite("869-r"), },
					{ name: "Rainbow Swirl\nStrawberry Sweet", img: baseSprite("869-ras"), imgS: shinySprite(869), },
					{ name: "Rainbow Swirl\nBerry Sweet", img: baseSprite("869-ras-b"), imgS: shinySprite("869-b"), },
					{ name: "Rainbow Swirl\nLove Sweet", img: baseSprite("869-ras-l"), imgS: shinySprite("869-l"), },
					{ name: "Rainbow Swirl\nStar Sweet", img: baseSprite("869-ras-s"), imgS: shinySprite("869-s"), },
					{ name: "Rainbow Swirl\nClover Sweet", img: baseSprite("869-ras-c"), imgS: shinySprite("869-c"), },
					{ name: "Rainbow Swirl\nFlower Sweet", img: baseSprite("869-ras-f"), imgS: shinySprite("869-f"), },
					{ name: "Rainbow Swirl\nRibbon Sweet", img: baseSprite("869-ras-r"), imgS: shinySprite("869-r"), },],
			},
			{ id: 44, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 45, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 46, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{ id: 47, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), },
			{ id: 48, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), },
			{ id: 49, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), },
			{ id: 50, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 51, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{ id: 52, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 53, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{ id: 54, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 55, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), dexSync: [paldeaDex(335)], },
			{ id: 56, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 57, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 58, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), },
			{ id: 59, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), dexSync: [paldeaDex(78)], },
			{ id: 60, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), dexSync: [paldeaDex(79)], },
			{ id: 61, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), dexSync: [paldeaDex(80)], },
			{ id: 62, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 63, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 64, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				],
			},
			{ id: 65, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{
				id: 66, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), dexSync: [paldeaDex(148)], forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), dexSync: [paldeaDex(148, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), dexSync: [paldeaDex(148, "Alolan")], }
				],
			},
			{
				id: 67, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), dexSync: [paldeaDex(149)], forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), dexSync: [paldeaDex(149, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), dexSync: [paldeaDex(149, "Alolan")], }
				],
			},
			{
				id: 68, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), dexSync: [paldeaDex(194)], forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), dexSync: [paldeaDex(194, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), dexSync: [paldeaDex(194, "Alolan")], }
				],
			},
			{
				id: 69, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), dexSync: [paldeaDex(194)], forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), dexSync: [paldeaDex(194, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), dexSync: [paldeaDex(194, "Alolan")], }
				],
			},
			{ id: 70, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), dexSync: [paldeaDex(217)], },
			{ id: 71, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), dexSync: [paldeaDex(218)], },
			{ id: 72, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), dexSync: [paldeaDex(118)], },
			{ id: 73, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), dexSync: [paldeaDex(119)], },
			{
				id: 74, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), dexSync: [tmDex(115), paldeaDex(100)], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), dexSync: [tmDex(115, "Balie Style"), paldeaDex(100, "Balie Style"),], },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [tmDex(115, "Pa'U Style"), paldeaDex(100, "Pa'U Style"),], },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), dexSync: [tmDex(115, "Pom-Pom Style"), paldeaDex(100, "Pom-Pom Style"),], },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), dexSync: [tmDex(115, "Sensu Style"), paldeaDex(100, "Sensu Style"),], }
				],
			},
			{
				id: 75, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), dexSync: [paldeaDex(324)], forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), dexSync: [paldeaDex(324, "Kantonian")], },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), dexSync: [paldeaDex(324, "Galarian")], }
				],
			},
			{
				id: 76, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), dexSync: [paldeaDex(325)], forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), dexSync: [paldeaDex(325, "Kantonian")], },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), dexSync: [paldeaDex(325, "Galarian")], },],
			},
			{
				id: 77, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), dexSync: [paldeaDex(326)], forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), dexSync: [paldeaDex(326, "Johtonian")], },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), dexSync: [paldeaDex(326, "Galarian")], }
				],
			},
			{ id: 78, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 79, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 80, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), },
			{ id: 81, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), },
			{ id: 82, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), dexSync: [paldeaDex(332)], },
			{
				id: 83, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), dexSync: [paldeaDex(333)], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), dexSync: [paldeaDex(333, "Male")], },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), dexSync: [paldeaDex(333, "Female")], }
				],
			},
			{
				id: 84, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), dexSync: [paldeaDex(334)], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), dexSync: [paldeaDex(334, "Male")], },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), dexSync: [paldeaDex(334, "Female")], }
				],
			},
			{ id: 85, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), dexSync: [paldeaDex(336)], },
			{ id: 86, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), dexSync: [paldeaDex(150)], },
			{ id: 87, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: [paldeaDex(19)], },
			{ id: 88, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: [paldeaDex(20)], },
			{ id: 89, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: [paldeaDex(21)], },
			{ id: 90, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), },
			{ id: 91, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), },
			{ id: 92, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236), },
			{ id: 93, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), },
			{ id: 94, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), },
			{ id: 95, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237), },
			{
				id: 96, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), dexSync: [tmDex(80)], forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), dexSync: [tmDex(80, "Male")], },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), dexSync: [tmDex(80, "Alolan")], }
				],
			},
			{
				id: 97, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), dexSync: [tmDex(81)], forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), dexSync: [tmDex(81, "Male")], },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), dexSync: [tmDex(81, "Alolan")], }
				],
			},
			{
				id: 98, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), dexSync: [tmDex(82)], forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), dexSync: [tmDex(82, "Male")], },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), dexSync: [tmDex(82, "Alolan")], }
				],
			},
			{ id: 99, name: "Drilbur", img: baseSprite(529), imgS: shinySprite(529), },
			{ id: 100, name: "Excadrill", img: baseSprite(530), imgS: shinySprite(530), },
			{ id: 101, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), dexSync: [paldeaDex(234)], },
			{ id: 102, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), dexSync: [paldeaDex(235)], },
			{ id: 103, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), dexSync: [paldeaDex(236)], },
			{ id: 104, name: "Espurr", img: baseSprite(677), imgS: shinySprite(677), },
			{
				id: 105, name: "Meowstic", img: baseSprite(678), imgS: shinySprite(678), forms: [
					{ name: "Male", img: baseSprite(678), imgS: shinySprite(678), },
					{ name: "Female", img: baseSprite("678-f"), imgS: shinySprite("678-f"), },
				],
			},
			{
				id: 106, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), },
				],
			},
			{ id: 107, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), },
			{ id: 108, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), },
			{ id: 109, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), },
			{ id: 110, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), },
			{ id: 111, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572), },
			{ id: 112, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573), },
			{ id: 113, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 114, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), dexSync: [paldeaDex(219)], },
			{ id: 115, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), dexSync: [paldeaDex(220)], },
			{ id: 116, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), dexSync: [paldeaDex(209)], },
			{ id: 117, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), dexSync: [paldeaDex(210)], },
			{ id: 118, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), dexSync: [paldeaDex(211)], },
			{ id: 119, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 120, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 121, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), },
			{ id: 122, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), },
			{ id: 123, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), },
			{ id: 124, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), },
			{
				id: 125, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), dexSync: [paldeaDex(151)], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), dexSync: [paldeaDex(151, "Male")], },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), dexSync: [paldeaDex(151, "Female")], }
				],
			},
			{
				id: 126, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), dexSync: [paldeaDex(152)], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), dexSync: [paldeaDex(152, "Male")], },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), dexSync: [paldeaDex(152, "Female")], },],
			},
			{
				id: 127, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), dexSync: [paldeaDex(237)], forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), dexSync: [paldeaDex(237, "Phony")], },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), dexSync: [paldeaDex(237, "Authentic")], },]
			},
			{
				id: 128, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), dexSync: [paldeaDex(238)], forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), dexSync: [paldeaDex(238, "Phony")], },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), dexSync: [paldeaDex(238, "Authentic")], },]
			},
			{ id: 129, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 130, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 131, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 132, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595), },
			{ id: 133, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596), },
			{ id: 134, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), dexSync: [tmDex(175), paldeaDex(341)], },
			{ id: 135, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), dexSync: [tmDex(176), paldeaDex(342)], },
			{ id: 136, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), dexSync: [tmDex(177), paldeaDex(343)], },
			{ id: 137, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), },
			{ id: 138, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), },
			{ id: 139, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), },
			{ id: 140, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), dexSync: [paldeaDex(155)], },
			{ id: 141, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), dexSync: [paldeaDex(156)], },
			{ id: 142, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), dexSync: [paldeaDex(157)], },
			{ id: 143, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 144, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 145, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{
				id: 146, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), dexSync: [paldeaDex(331)], forms: [
					{ name: "Johtonian", img: baseSprite(211), imgS: shinySprite(211), dexSync: [paldeaDex(331, "Johtonian")], },
					{ name: "Hisuian", img: baseSprite("211-h"), imgS: shinySprite("211-h"), dexSync: [paldeaDex(331, "Hisuian")], }
				],
			},
			{ id: 147, name: "Overqwil", img: baseSprite(904), imgS: shinySprite(904), },
			{ id: 148, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577), },
			{ id: 149, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578), },
			{ id: 150, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579), },
			{ id: 151, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 152, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{ id: 153, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), dexSync: [paldeaDex(355)], },
			{ id: 154, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), dexSync: [paldeaDex(356)], },
			{
				id: 155, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), dexSync: [tmDex(116)], forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), dexSync: [tmDex(116, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), dexSync: [tmDex(116, "Alolan")], }
				],
			},
			{
				id: 156, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), dexSync: [tmDex(117)], forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), dexSync: [tmDex(117, "Kantonian")], },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), dexSync: [tmDex(117, "Alolan")], }
				],
			},
			{
				id: 157, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), dexSync: [{ game: "scarletid", dexType: "regional", id: 37 }], forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), dexSync: [{ game: "scarletid", dexType: "regional", id: 37, form: "Kantonian" }], },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), dexSync: [{ game: "scarletid", dexType: "regional", id: 37, form: "Alolan" }], }
				],
			},
			{
				id: 158, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), dexSync: [{ game: "scarletid", dexType: "regional", id: 38 }], forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), dexSync: [{ game: "scarletid", dexType: "regional", id: 38, form: "Kantonian" }], },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), dexSync: [{ game: "scarletid", dexType: "regional", id: 38, form: "Alolan" }], }
				],
			},
			{
				id: 159, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), dexSync: [paldeaDex(352)], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), dexSync: [paldeaDex(352, "Male")], },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), dexSync: [paldeaDex(352, "Female")], }
				],
			},
			{
				id: 160, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), dexSync: [paldeaDex(353)], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), dexSync: [paldeaDex(353, "Male")], },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), dexSync: [paldeaDex(353, "Female")], },],
			},
			{ id: 161, name: "Duraludon", img: baseSprite(884), imgS: shinySprite(884), },
			{ id: 162, name: "Archaludon", img: baseSprite(1018), imgS: shinySprite(1018), },
			{ id: 163, name: "Hydrapple", img: baseSprite(1019), imgS: shinySprite(1019), },
			{ id: 164, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), },
			{ id: 165, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), },
			{
				id: 166, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },],
			},
			{ id: 167, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), },
			{ id: 168, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), },
			{ id: 169, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), },
			{ id: 170, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), },
			{ id: 171, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), },
			{ id: 172, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), },
			{ id: 173, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), },
			{ id: 174, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), },
			{
				id: 175, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), },
				],
			},
			{ id: 176, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), },
			{ id: 177, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), },
			{
				id: 178, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), forms: [
					{ name: "Johtonian", img: baseSprite(157), imgS: shinySprite(157), },
					{ name: "Hisuian", img: baseSprite("157-h"), imgS: shinySprite("157-h"), },
				],
			},
			{ id: 179, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), },
			{ id: 180, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), },
			{ id: 181, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), },
			{ id: 182, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), },
			{ id: 183, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), },
			{ id: 184, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), },
			{
				id: 185, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 186, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 187, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },],
			},
			{ id: 188, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), },
			{ id: 189, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), },
			{ id: 190, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), },
			{ id: 191, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), },
			{ id: 192, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), },
			{ id: 193, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), },
			{ id: 194, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), },
			{ id: 195, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), },
			{ id: 196, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), },
			{ id: 197, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), },
			{ id: 198, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), },
			{ id: 199, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), },
			{ id: 200, name: "Snivy", img: baseSprite(495), imgS: shinySprite(495), },
			{ id: 201, name: "Servine", img: baseSprite(496), imgS: shinySprite(496), },
			{ id: 202, name: "Serperior", img: baseSprite(497), imgS: shinySprite(497), },
			{ id: 203, name: "Tepig", img: baseSprite(498), imgS: shinySprite(498), },
			{ id: 204, name: "Pignite", img: baseSprite(499), imgS: shinySprite(499), },
			{ id: 205, name: "Emboar", img: baseSprite(500), imgS: shinySprite(500), },
			{ id: 206, name: "Oshawott", img: baseSprite(501), imgS: shinySprite(501), },
			{ id: 207, name: "Dewott", img: baseSprite(502), imgS: shinySprite(502), },
			{
				id: 208, name: "Samurott", img: baseSprite(503), imgS: shinySprite(503), forms: [
					{ name: "Unovian", img: baseSprite(503), imgS: shinySprite(503), },
					{ name: "Hisuian", img: baseSprite("503-h"), imgS: shinySprite("503-h"), },
				],
			},
			{ id: 209, name: "Chespin", img: baseSprite(650), imgS: shinySprite(650), },
			{ id: 210, name: "Quilladin", img: baseSprite(651), imgS: shinySprite(651), },
			{ id: 211, name: "Chesnaught", img: baseSprite(652), imgS: shinySprite(652), },
			{ id: 212, name: "Fennekin", img: baseSprite(653), imgS: shinySprite(653), },
			{ id: 213, name: "Braixen", img: baseSprite(654), imgS: shinySprite(654), },
			{ id: 214, name: "Delphox", img: baseSprite(655), imgS: shinySprite(655), },
			{ id: 215, name: "Froakie", img: baseSprite(656), imgS: shinySprite(656), },
			{ id: 216, name: "Frogadier", img: baseSprite(657), imgS: shinySprite(657), },
			{ id: 217, name: "Greninja", img: baseSprite(658), imgS: shinySprite(658), },
			{ id: 218, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), },
			{ id: 219, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), },
			{
				id: 220, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), forms: [
					{ name: "Alolan", img: baseSprite(724), imgS: shinySprite(724), },
					{ name: "Hisuian", img: baseSprite("724-h"), imgS: shinySprite("724-h"), },
				],
			},
			{ id: 221, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), },
			{ id: 222, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), },
			{ id: 223, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), },
			{ id: 224, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), },
			{ id: 225, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), },
			{ id: 226, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), },
			{ id: 227, name: "Grookey", img: baseSprite(810), imgS: shinySprite(810), },
			{ id: 228, name: "Thwackey", img: baseSprite(811), imgS: shinySprite(811), },
			{ id: 229, name: "Rillaboom", img: baseSprite(812), imgS: shinySprite(812), },
			{ id: 230, name: "Scorbunny", img: baseSprite(813), imgS: shinySprite(813), },
			{ id: 231, name: "Raboot", img: baseSprite(814), imgS: shinySprite(814), },
			{ id: 232, name: "Cinderace", img: baseSprite(815), imgS: shinySprite(815), },
			{ id: 233, name: "Sobble", img: baseSprite(816), imgS: shinySprite(816), },
			{ id: 234, name: "Drizzile", img: baseSprite(817), imgS: shinySprite(817), },
			{ id: 235, name: "Inteleon", img: baseSprite(818), imgS: shinySprite(818), },
			{ id: 236, name: "Gouging Fire", img: baseSprite(1020), imgS: shinySprite(1020), maxStatus: "caught", },
			{ id: 237, name: "Raging Bolt", img: baseSprite(1021), imgS: shinySprite(1021), maxStatus: "caught", },
			{ id: 238, name: "Iron Crown", img: baseSprite(1023), imgS: shinySprite(1023), maxStatus: "caught", },
			{ id: 239, name: "Iron Boulder", img: baseSprite(1022), imgS: shinySprite(1022), maxStatus: "caught", },
			{ id: 240, name: "Terapagos", img: baseSprite(1024), imgS: shinySprite(1024), maxStatus: "caught", legendary: true, },
			{ id: 241, name: "Walking Wake", img: baseSprite(1009), imgS: shinySprite(1009), maxStatus: "caught", mythical: true, },
			{ id: 242, name: "Iron Leaves", img: baseSprite(1010), imgS: shinySprite(1010), maxStatus: "caught", mythical: true, },
			{ id: 243, name: "Pecharunt", img: baseSprite(1025), imgS: shinySprite(1025), maxStatus: "caught", mythical: true, }
		],
	},
});