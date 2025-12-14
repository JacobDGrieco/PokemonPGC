const gen = 8;
const game = "violet";
const sub = game + "id";
const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Blueberry Academy Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{
				id: 1, natiId: 84, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), },
				],
			},
			{
				id: 2, natiId: 85, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), },
				],
			},
			{ id: 3, natiId: 102, name: "Exeggcute", img: baseSprite(102), imgS: shinySprite(102), },
			{
				id: 4, natiId: 103, name: "Exeggutor", img: baseSprite(103), imgS: shinySprite(103), forms: [
					{ name: "Kantonian", img: baseSprite(103), imgS: shinySprite(103), },
					{ name: "Alolan", img: baseSprite("103-a"), imgS: shinySprite("103-a"), tags: ["alolan"], },
				],
			},
			{
				id: 5, natiId: 111, name: "Rhyhorn", img: baseSprite(111), imgS: shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(111), imgS: shinySprite(111), },
					{ name: "Female", img: baseSprite("111-f"), imgS: shinySprite("111-f"), },
				],
			},
			{
				id: 6, natiId: 112, name: "Rhydon", img: baseSprite(112), imgS: shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(112), imgS: shinySprite(112), },
					{ name: "Female", img: baseSprite("112-f"), imgS: shinySprite("112-f"), },
				],
			},
			{
				id: 7, natiId: 464, name: "Rhyperior", img: baseSprite(464), imgS: shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(464), imgS: shinySprite(464), },
					{ name: "Female", img: baseSprite("464-f"), imgS: shinySprite("464-f"), },
				],
			},
			{ id: 8, natiId: 48, name: "Venonat", img: baseSprite(48), imgS: shinySprite(48), },
			{ id: 9, natiId: 49, name: "Venomoth", img: baseSprite(49), imgS: shinySprite(49), },
			{ id: 10, natiId: 239, name: "Elekid", img: baseSprite(239), imgS: shinySprite(239), },
			{ id: 11, natiId: 125, name: "Electabuzz", img: baseSprite(125), imgS: shinySprite(125), },
			{ id: 12, natiId: 466, name: "Electivire", img: baseSprite(466), imgS: shinySprite(466), },
			{ id: 13, natiId: 240, name: "Magby", img: baseSprite(240), imgS: shinySprite(240), },
			{ id: 14, natiId: 126, name: "Magmar", img: baseSprite(126), imgS: shinySprite(126), },
			{ id: 15, natiId: 467, name: "Magmortar", img: baseSprite(467), imgS: shinySprite(467), },
			{ id: 16, natiId: 440, name: "Happiny", img: baseSprite(440), imgS: shinySprite(440), },
			{ id: 17, natiId: 113, name: "Chansey", img: baseSprite(113), imgS: shinySprite(113), },
			{ id: 18, natiId: 242, name: "Blissey", img: baseSprite(242), imgS: shinySprite(242), },
			{
				id: 19, natiId: 123, name: "Scyther", img: baseSprite(123), imgS: shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(123), imgS: shinySprite(123), },
					{ name: "Female", img: baseSprite("123-f"), imgS: shinySprite("123-f"), }
				],
			},
			{
				id: 20, natiId: 212, name: "Scizor", img: baseSprite(212), imgS: shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(212), imgS: shinySprite(212), },
					{ name: "Female", img: baseSprite("212-f"), imgS: shinySprite("212-f"), },],
			},
			{ id: 21, natiId: 900, name: "Kleavor", img: baseSprite(900), imgS: shinySprite(900), },
			{
				id: 22, natiId: 128, name: "Tauros", img: baseSprite("128-c"), imgS: shinySprite("128-c"), forms: [
					{ name: "Kantonian", img: baseSprite("128-a"), imgS: shinySprite("128-a"), },
					{ name: "Paldean (Aqua Breed)", img: baseSprite("128-a"), imgS: shinySprite("128-a"), tags: ["paldean"], },
					{ name: "Paldean (Blaze Breed)", img: baseSprite("128-b"), imgS: shinySprite("128-b"), tags: ["paldean"], },
					{ name: "Paldean (Combat Breed)", img: baseSprite("128-c"), imgS: shinySprite("128-c"), tags: ["paldean"], }
				],
			},
			{ id: 23, natiId: 522, name: "Blitzle", img: baseSprite(522), imgS: shinySprite(522), },
			{ id: 24, natiId: 523, name: "Zebstrika", img: baseSprite(523), imgS: shinySprite(523), },
			{
				id: 25, natiId: 203, name: "Girafarig", img: baseSprite(203), imgS: shinySprite(203), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(203), imgS: shinySprite(203), },
					{ name: "Female", img: baseSprite("203-f"), imgS: shinySprite("203-f"), }
				],
			},
			{ id: 26, natiId: 981, name: "Farigiraf", img: baseSprite(981), imgS: shinySprite(981), },
			{ id: 27, natiId: 551, name: "Sandile", img: baseSprite(551), imgS: shinySprite(551), },
			{ id: 28, natiId: 552, name: "Krokorok", img: baseSprite(552), imgS: shinySprite(552), },
			{ id: 29, natiId: 553, name: "Krookodile", img: baseSprite(553), imgS: shinySprite(553), },
			{ id: 30, natiId: 953, name: "Rellor", img: baseSprite(953), imgS: shinySprite(953), },
			{ id: 31, natiId: 954, name: "Rabsca", img: baseSprite(954), imgS: shinySprite(954), },
			{ id: 32, natiId: 627, name: "Rufflet", img: baseSprite(627), imgS: shinySprite(627), },
			{
				id: 33, natiId: 628, name: "Braviary", img: baseSprite(628), imgS: shinySprite(628), forms: [
					{ name: "Unovian", img: baseSprite(628), imgS: shinySprite(628), },
					{ name: "Hisuian", img: baseSprite("628-h"), imgS: shinySprite("628-h"), tags: ["hisuian"], }
				],
			},
			{ id: 34, natiId: 629, name: "Vullaby", img: baseSprite(629), imgS: shinySprite(629), },
			{ id: 35, natiId: 630, name: "Mandibuzz", img: baseSprite(630), imgS: shinySprite(630), },
			{ id: 36, natiId: 667, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), },
			{
				id: 37, natiId: 668, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), }
				],
			},
			{
				id: 38, natiId: 585, name: "Deerling", img: baseSprite(585), imgS: shinySprite(585), tags: ["other"], forms: [
					{ name: "Autumn", img: baseSprite(585), imgS: shinySprite(585), },
					{ name: "Spring", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Summer", img: baseSprite("585-s"), imgS: shinySprite("585-s"), },
					{ name: "Winter", img: baseSprite("585-w"), imgS: shinySprite("585-w"), }
				],
			},
			{
				id: 39, natiId: 586, name: "Sawsbuck", img: baseSprite(586), imgS: shinySprite(586), tags: ["other"], forms: [
					{ name: "Autumn", img: baseSprite(586), imgS: shinySprite(586), },
					{ name: "Spring", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Summer", img: baseSprite("586-s"), imgS: shinySprite("586-s"), },
					{ name: "Winter", img: baseSprite("586-w"), imgS: shinySprite("586-w"), }
				],
			},
			{ id: 40, natiId: 235, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), },
			{
				id: 41, natiId: 479, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), }
				],
			},
			{ id: 42, natiId: 868, name: "Milcery", img: baseSprite(868), imgS: shinySprite(868), },
			{
				id: 43, name: "Alcremie", img: baseSprite("869-va"), imgS: shinySprite(869), tags: ["other"], forms: [
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
			{ id: 44, natiId: 328, name: "Trapinch", img: baseSprite(328), imgS: shinySprite(328), },
			{ id: 45, natiId: 329, name: "Vibrava", img: baseSprite(329), imgS: shinySprite(329), },
			{ id: 46, natiId: 330, name: "Flygon", img: baseSprite(330), imgS: shinySprite(330), },
			{ id: 47, natiId: 731, name: "Pikipek", img: baseSprite(731), imgS: shinySprite(731), },
			{ id: 48, natiId: 732, name: "Trumbeak", img: baseSprite(732), imgS: shinySprite(732), },
			{ id: 49, natiId: 733, name: "Toucannon", img: baseSprite(733), imgS: shinySprite(733), },
			{ id: 50, natiId: 72, name: "Tentacool", img: baseSprite(72), imgS: shinySprite(72), },
			{ id: 51, natiId: 73, name: "Tentacruel", img: baseSprite(73), imgS: shinySprite(73), },
			{ id: 52, natiId: 116, name: "Horsea", img: baseSprite(116), imgS: shinySprite(116), },
			{ id: 53, natiId: 117, name: "Seadra", img: baseSprite(117), imgS: shinySprite(117), },
			{ id: 54, natiId: 230, name: "Kingdra", img: baseSprite(230), imgS: shinySprite(230), },
			{ id: 55, natiId: 779, name: "Bruxish", img: baseSprite(779), imgS: shinySprite(779), },
			{ id: 56, natiId: 546, name: "Cottonee", img: baseSprite(546), imgS: shinySprite(546), },
			{ id: 57, natiId: 547, name: "Whimsicott", img: baseSprite(547), imgS: shinySprite(547), },
			{ id: 58, natiId: 764, name: "Comfey", img: baseSprite(764), imgS: shinySprite(764), },
			{ id: 59, natiId: 287, name: "Slakoth", img: baseSprite(287), imgS: shinySprite(287), },
			{ id: 60, natiId: 288, name: "Vigoroth", img: baseSprite(288), imgS: shinySprite(288), },
			{ id: 61, natiId: 289, name: "Slaking", img: baseSprite(289), imgS: shinySprite(289), },
			{ id: 62, natiId: 43, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), },
			{
				id: 63, natiId: 44, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), },
				],
			},
			{
				id: 64, natiId: 45, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), },
				],
			},
			{ id: 65, natiId: 182, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), },
			{
				id: 66, natiId: 50, name: "Diglett", img: baseSprite(50), imgS: shinySprite(50), forms: [
					{ name: "Kantonian", img: baseSprite(50), imgS: shinySprite(50), },
					{ name: "Alolan", img: baseSprite("050-a"), imgS: shinySprite("050-a"), tags: ["alolan"], }
				],
			},
			{
				id: 67, natiId: 51, name: "Dugtrio", img: baseSprite(51), imgS: shinySprite(51), forms: [
					{ name: "Kantonian", img: baseSprite(51), imgS: shinySprite(51), },
					{ name: "Alolan", img: baseSprite("051-a"), imgS: shinySprite("051-a"), tags: ["alolan"], }
				],
			},
			{
				id: 68, natiId: 88, name: "Grimer", img: baseSprite(88), imgS: shinySprite(88), forms: [
					{ name: "Kantonian", img: baseSprite(88), imgS: shinySprite(88), },
					{ name: "Alolan", img: baseSprite("088-a"), imgS: shinySprite("088-a"), tags: ["alolan"], }
				],
			},
			{
				id: 69, natiId: 89, name: "Muk", img: baseSprite(89), imgS: shinySprite(89), forms: [
					{ name: "Kantonian", img: baseSprite(89), imgS: shinySprite(89), },
					{ name: "Alolan", img: baseSprite("089-a"), imgS: shinySprite("089-a"), tags: ["alolan"], }
				],
			},
			{ id: 70, natiId: 335, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 71, natiId: 336, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 72, natiId: 739, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 73, natiId: 740, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), },
			{
				id: 74, natiId: 741, name: "Oricorio", img: baseSprite(741), imgS: shinySprite(741), tags: ["other"], forms: [
					{ name: "Baile Style", img: baseSprite(741), imgS: shinySprite(741), },
					{ name: "Pa'u Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Pom-Pom Style", img: baseSprite("741-p"), imgS: shinySprite("741-p"), },
					{ name: "Sensu Style", img: baseSprite("741-s"), imgS: shinySprite("741-s"), }
				],
			},
			{
				id: 75, natiId: 79, name: "Slowpoke", img: baseSprite(79), imgS: shinySprite(79), forms: [
					{ name: "Kantonian", img: baseSprite(79), imgS: shinySprite(79), },
					{ name: "Galarian", img: baseSprite("079-g"), imgS: shinySprite("079-g"), tags: ["galarian"], }
				],
			},
			{
				id: 76, natiId: 80, name: "Slowbro", img: baseSprite(80), imgS: shinySprite(80), forms: [
					{ name: "Kantonian", img: baseSprite(80), imgS: shinySprite(80), },
					{ name: "Galarian", img: baseSprite("080-g"), imgS: shinySprite("080-g"), tags: ["galarian"], },
				],
			},
			{
				id: 77, natiId: 199, name: "Slowking", img: baseSprite(199), imgS: shinySprite(199), forms: [
					{ name: "Johtonian", img: baseSprite(199), imgS: shinySprite(199), },
					{ name: "Galarian", img: baseSprite("199-g"), imgS: shinySprite("199-g"), tags: ["galarian"], }
				],
			},
			{ id: 78, natiId: 170, name: "Chinchou", img: baseSprite(170), imgS: shinySprite(170), },
			{ id: 79, natiId: 171, name: "Lanturn", img: baseSprite(171), imgS: shinySprite(171), },
			{ id: 80, natiId: 686, name: "Inkay", img: baseSprite(686), imgS: shinySprite(686), },
			{ id: 81, natiId: 687, name: "Malamar", img: baseSprite(687), imgS: shinySprite(687), },
			{ id: 82, natiId: 370, name: "Luvdisc", img: baseSprite(370), imgS: shinySprite(370), },
			{
				id: 83, natiId: 456, name: "Finneon", img: baseSprite(456), imgS: shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(456), imgS: shinySprite(456), },
					{ name: "Female", img: baseSprite("456-f"), imgS: shinySprite("456-f"), }
				],
			},
			{
				id: 84, natiId: 457, name: "Lumineon", img: baseSprite(457), imgS: shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(457), imgS: shinySprite(457), },
					{ name: "Female", img: baseSprite("457-f"), imgS: shinySprite("457-f"), }
				],
			},
			{ id: 85, natiId: 594, name: "Alomomola", img: baseSprite(594), imgS: shinySprite(594), },
			{ id: 86, natiId: 324, name: "Torkoal", img: baseSprite(324), imgS: shinySprite(324), },
			{ id: 87, natiId: 661, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), },
			{ id: 88, natiId: 662, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), },
			{ id: 89, natiId: 663, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), },
			{ id: 90, natiId: 751, name: "Dewpider", img: baseSprite(751), imgS: shinySprite(751), },
			{ id: 91, natiId: 752, name: "Araquanid", img: baseSprite(752), imgS: shinySprite(752), },
			{ id: 92, natiId: 236, name: "Tyrogue", img: baseSprite(236), imgS: shinySprite(236), },
			{ id: 93, natiId: 106, name: "Hitmonlee", img: baseSprite(106), imgS: shinySprite(106), },
			{ id: 94, natiId: 107, name: "Hitmonchan", img: baseSprite(107), imgS: shinySprite(107), },
			{ id: 95, natiId: 237, name: "Hitmontop", img: baseSprite(237), imgS: shinySprite(237), },
			{
				id: 96, natiId: 74, name: "Geodude", img: baseSprite(74), imgS: shinySprite(74), forms: [
					{ name: "Kantonian", img: baseSprite(74), imgS: shinySprite(74), },
					{ name: "Alolan", img: baseSprite("074-a"), imgS: shinySprite("074-a"), tags: ["alolan"], }
				],
			},
			{
				id: 97, natiId: 75, name: "Graveler", img: baseSprite(75), imgS: shinySprite(75), forms: [
					{ name: "Kantonian", img: baseSprite(75), imgS: shinySprite(75), },
					{ name: "Alolan", img: baseSprite("075-a"), imgS: shinySprite("075-a"), tags: ["alolan"], }
				],
			},
			{
				id: 98, natiId: 76, name: "Golem", img: baseSprite(76), imgS: shinySprite(76), forms: [
					{ name: "Kantonian", img: baseSprite(76), imgS: shinySprite(76), },
					{ name: "Alolan", img: baseSprite("076-a"), imgS: shinySprite("076-a"), tags: ["alolan"], }
				],
			},
			{ id: 99, natiId: 529, name: "Drilbur", img: baseSprite(529), imgS: shinySprite(529), },
			{ id: 100, natiId: 530, name: "Excadrill", img: baseSprite(530), imgS: shinySprite(530), },
			{ id: 101, natiId: 574, name: "Gothita", img: baseSprite(574), imgS: shinySprite(574), },
			{ id: 102, natiId: 575, name: "Gothorita", img: baseSprite(575), imgS: shinySprite(575), },
			{ id: 103, natiId: 576, name: "Gothitelle", img: baseSprite(576), imgS: shinySprite(576), },
			{ id: 104, natiId: 677, name: "Espurr", img: baseSprite(677), imgS: shinySprite(677), },
			{
				id: 105, natiId: 678, name: "Meowstic", img: baseSprite(678), imgS: shinySprite(678), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(678), imgS: shinySprite(678), },
					{ name: "Female", img: baseSprite("678-f"), imgS: shinySprite("678-f"), },
				],
			},
			{
				id: 106, natiId: 774, name: "Minior", img: baseSprite(774), imgS: shinySprite(774), tags: ["other"], forms: [
					{ name: "Blue Core", img: baseSprite("774-b"), imgS: shinySprite("774-b"), },
					{ name: "Green Core", img: baseSprite("774-g"), imgS: shinySprite("774-g"), },
					{ name: "Indigo Core", img: baseSprite("774-i"), imgS: shinySprite("774-i"), },
					{ name: "Orange Core", img: baseSprite("774-o"), imgS: shinySprite("774-o"), },
					{ name: "Red Core", img: baseSprite("774-r"), imgS: shinySprite("774-r"), },
					{ name: "Violet Core", img: baseSprite("774-v"), imgS: shinySprite("774-v"), },
					{ name: "Yellow Core", img: baseSprite("774-y"), imgS: shinySprite("774-y"), },
				],
			},
			{ id: 107, natiId: 408, name: "Cranidos", img: baseSprite(408), imgS: shinySprite(408), tags: ["fossil"], },
			{ id: 108, natiId: 409, name: "Rampardos", img: baseSprite(409), imgS: shinySprite(409), tags: ["fossil"], },
			{ id: 109, natiId: 410, name: "Shieldon", img: baseSprite(410), imgS: shinySprite(410), tags: ["fossil"], },
			{ id: 110, natiId: 411, name: "Bastiodon", img: baseSprite(411), imgS: shinySprite(411), tags: ["fossil"], },
			{ id: 111, natiId: 572, name: "Minccino", img: baseSprite(572), imgS: shinySprite(572), },
			{ id: 112, natiId: 573, name: "Cinccino", img: baseSprite(573), imgS: shinySprite(573), },
			{ id: 113, natiId: 227, name: "Skarmory", img: baseSprite(227), imgS: shinySprite(227), },
			{ id: 114, natiId: 333, name: "Swablu", img: baseSprite(333), imgS: shinySprite(333), },
			{ id: 115, natiId: 334, name: "Altaria", img: baseSprite(334), imgS: shinySprite(334), },
			{ id: 116, natiId: 81, name: "Magnemite", img: baseSprite(81), imgS: shinySprite(81), },
			{ id: 117, natiId: 82, name: "Magneton", img: baseSprite(82), imgS: shinySprite(82), },
			{ id: 118, natiId: 462, name: "Magnezone", img: baseSprite(462), imgS: shinySprite(462), },
			{ id: 119, natiId: 311, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), },
			{ id: 120, natiId: 312, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), },
			{ id: 121, natiId: 559, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), },
			{ id: 122, natiId: 560, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), },
			{ id: 123, natiId: 622, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), },
			{ id: 124, natiId: 623, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), },
			{
				id: 125, natiId: 322, name: "Numel", img: baseSprite(322), imgS: shinySprite(322), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(322), imgS: shinySprite(322), },
					{ name: "Female", img: baseSprite("322-f"), imgS: shinySprite("322-f"), }
				],
			},
			{
				id: 126, natiId: 323, name: "Camerupt", img: baseSprite(323), imgS: shinySprite(323), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(323), imgS: shinySprite(323), },
					{ name: "Female", img: baseSprite("323-f"), imgS: shinySprite("323-f"), },],
			},
			{
				id: 127, natiId: 854, name: "Sinistea", img: baseSprite(854), imgS: shinySprite(854), tags: ["other"], forms: [
					{ name: "Phony", img: baseSprite(854), imgS: shinySprite(854), },
					{ name: "Authentic", img: baseSprite("854-a"), imgS: shinySprite("854-a"), },]
			},
			{
				id: 128, natiId: 855, name: "Polteageist", img: baseSprite(855), imgS: shinySprite(855), tags: ["other"], forms: [
					{ name: "Phony", img: baseSprite(855), imgS: shinySprite(855), },
					{ name: "Authentic", img: baseSprite("855-a"), imgS: shinySprite("855-a"), },]
			},
			{ id: 129, natiId: 137, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 130, natiId: 233, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 131, natiId: 474, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 132, natiId: 595, name: "Joltik", img: baseSprite(595), imgS: shinySprite(595), },
			{ id: 133, natiId: 596, name: "Galvantula", img: baseSprite(596), imgS: shinySprite(596), },
			{ id: 134, natiId: 602, name: "Tynamo", img: baseSprite(602), imgS: shinySprite(602), },
			{ id: 135, natiId: 603, name: "Eelektrik", img: baseSprite(603), imgS: shinySprite(603), },
			{ id: 136, natiId: 604, name: "Eelektross", img: baseSprite(604), imgS: shinySprite(604), },
			{ id: 137, natiId: 374, name: "Beldum", img: baseSprite(374), imgS: shinySprite(374), tags: ["pseudo"], },
			{ id: 138, natiId: 375, name: "Metang", img: baseSprite(375), imgS: shinySprite(375), tags: ["pseudo"], },
			{ id: 139, natiId: 376, name: "Metagross", img: baseSprite(376), imgS: shinySprite(376), tags: ["pseudo"], },
			{ id: 140, natiId: 610, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), },
			{ id: 141, natiId: 611, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), },
			{ id: 142, natiId: 612, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), },
			{ id: 143, natiId: 86, name: "Seel", img: baseSprite(86), imgS: shinySprite(86), },
			{ id: 144, natiId: 87, name: "Dewgong", img: baseSprite(87), imgS: shinySprite(87), },
			{ id: 145, natiId: 131, name: "Lapras", img: baseSprite(131), imgS: shinySprite(131), },
			{
				id: 146, natiId: 211, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), forms: [
					{ name: "Johtonian", img: baseSprite(211), imgS: shinySprite(211), },
					{ name: "Hisuian", img: baseSprite("211-h"), imgS: shinySprite("211-h"), tags: ["hisuian"], }
				],
			},
			{ id: 147, natiId: 904, name: "Overqwil", img: baseSprite(904), imgS: shinySprite(904), },
			{ id: 148, natiId: 577, name: "Solosis", img: baseSprite(577), imgS: shinySprite(577), },
			{ id: 149, natiId: 578, name: "Duosion", img: baseSprite(578), imgS: shinySprite(578), },
			{ id: 150, natiId: 579, name: "Reuniclus", img: baseSprite(579), imgS: shinySprite(579), },
			{ id: 151, natiId: 209, name: "Snubbull", img: baseSprite(209), imgS: shinySprite(209), },
			{ id: 152, natiId: 210, name: "Granbull", img: baseSprite(210), imgS: shinySprite(210), },
			{ id: 153, natiId: 613, name: "Cubchoo", img: baseSprite(613), imgS: shinySprite(613), },
			{ id: 154, natiId: 614, name: "Beartic", img: baseSprite(614), imgS: shinySprite(614), },
			{
				id: 155, natiId: 27, name: "Sandshrew", img: baseSprite(27), imgS: shinySprite(27), forms: [
					{ name: "Kantonian", img: baseSprite(27), imgS: shinySprite(27), },
					{ name: "Alolan", img: baseSprite("027-a"), imgS: shinySprite("027-a"), tags: ["alolan"], }
				],
			},
			{
				id: 156, natiId: 28, name: "Sandslash", img: baseSprite(28), imgS: shinySprite(28), forms: [
					{ name: "Kantonian", img: baseSprite(28), imgS: shinySprite(28), },
					{ name: "Alolan", img: baseSprite("028-a"), imgS: shinySprite("028-a"), tags: ["alolan"], }
				],
			},
			{
				id: 157, natiId: 37, name: "Vulpix", img: baseSprite(37), imgS: shinySprite(37), forms: [
					{ name: "Kantonian", img: baseSprite(37), imgS: shinySprite(37), },
					{ name: "Alolan", img: baseSprite("037-a"), imgS: shinySprite("037-a"), tags: ["alolan"], }
				],
			},
			{
				id: 158, natiId: 38, name: "Ninetales", img: baseSprite(38), imgS: shinySprite(38), forms: [
					{ name: "Kantonian", img: baseSprite(38), imgS: shinySprite(38), },
					{ name: "Alolan", img: baseSprite("038-a"), imgS: shinySprite("038-a"), tags: ["alolan"], }
				],
			},
			{
				id: 159, natiId: 459, name: "Snover", img: baseSprite(459), imgS: shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(459), imgS: shinySprite(459), },
					{ name: "Female", img: baseSprite("459-f"), imgS: shinySprite("459-f"), }
				],
			},
			{
				id: 160, natiId: 460, name: "Abomasnow", img: baseSprite(460), imgS: shinySprite(460), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(460), imgS: shinySprite(460), },
					{ name: "Female", img: baseSprite("460-f"), imgS: shinySprite("460-f"), },],
			},
			{ id: 161, natiId: 884, name: "Duraludon", img: baseSprite(884), imgS: shinySprite(884), },
			{ id: 162, natiId: 1018, name: "Archaludon", img: baseSprite(1018), imgS: shinySprite(1018), },
			{ id: 163, natiId: 1019, name: "Hydrapple", img: baseSprite(1019), imgS: shinySprite(1019), },
			{ id: 164, natiId: 1, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), tags: ["starter"], },
			{ id: 165, natiId: 2, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), tags: ["starter"], },
			{
				id: 166, natiId: 3, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), },],
			},
			{ id: 167, natiId: 4, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), tags: ["starter"], },
			{ id: 168, natiId: 5, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), tags: ["starter"], },
			{ id: 169, natiId: 6, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), tags: ["starter"], },
			{ id: 170, natiId: 7, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), tags: ["starter"], },
			{ id: 171, natiId: 8, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), tags: ["starter"], },
			{ id: 172, natiId: 9, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), tags: ["starter"], },
			{ id: 173, natiId: 152, name: "Chikorita", img: baseSprite(152), imgS: shinySprite(152), tags: ["starter"], },
			{ id: 174, natiId: 153, name: "Bayleef", img: baseSprite(153), imgS: shinySprite(153), tags: ["starter"], },
			{
				id: 175, natiId: 154, name: "Meganium", img: baseSprite(154), imgS: shinySprite(154), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(154), imgS: shinySprite(154), },
					{ name: "Female", img: baseSprite("154-f"), imgS: shinySprite("154-f"), },
				],
			},
			{ id: 176, natiId: 155, name: "Cyndaquil", img: baseSprite(155), imgS: shinySprite(155), tags: ["starter"], },
			{ id: 177, natiId: 156, name: "Quilava", img: baseSprite(156), imgS: shinySprite(156), tags: ["starter"], },
			{
				id: 178, natiId: 157, name: "Typhlosion", img: baseSprite(157), imgS: shinySprite(157), tags: ["starter"], forms: [
					{ name: "Johtonian", img: baseSprite(157), imgS: shinySprite(157), },
					{ name: "Hisuian", img: baseSprite("157-h"), imgS: shinySprite("157-h"), tags: ["hisuian"], },
				],
			},
			{ id: 179, natiId: 158, name: "Totodile", img: baseSprite(158), imgS: shinySprite(158), tags: ["starter"], },
			{ id: 180, natiId: 159, name: "Croconaw", img: baseSprite(159), imgS: shinySprite(159), tags: ["starter"], },
			{ id: 181, natiId: 160, name: "Feraligatr", img: baseSprite(160), imgS: shinySprite(160), tags: ["starter"], },
			{ id: 182, natiId: 252, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), tags: ["starter"], },
			{ id: 183, natiId: 253, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), tags: ["starter"], },
			{ id: 184, natiId: 254, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), tags: ["starter"], },
			{
				id: 185, natiId: 255, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 186, natiId: 256, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 187, natiId: 257, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },],
			},
			{ id: 188, natiId: 258, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), tags: ["starter"], },
			{ id: 189, natiId: 259, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), tags: ["starter"], },
			{ id: 190, natiId: 260, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), tags: ["starter"], },
			{ id: 191, natiId: 387, name: "Turtwig", img: baseSprite(387), imgS: shinySprite(387), tags: ["starter"], },
			{ id: 192, natiId: 388, name: "Grotle", img: baseSprite(388), imgS: shinySprite(388), tags: ["starter"], },
			{ id: 193, natiId: 389, name: "Torterra", img: baseSprite(389), imgS: shinySprite(389), tags: ["starter"], },
			{ id: 194, natiId: 390, name: "Chimchar", img: baseSprite(390), imgS: shinySprite(390), tags: ["starter"], },
			{ id: 195, natiId: 391, name: "Monferno", img: baseSprite(391), imgS: shinySprite(391), tags: ["starter"], },
			{ id: 196, natiId: 392, name: "Infernape", img: baseSprite(392), imgS: shinySprite(392), tags: ["starter"], },
			{ id: 197, natiId: 393, name: "Piplup", img: baseSprite(393), imgS: shinySprite(393), tags: ["starter"], },
			{ id: 198, natiId: 394, name: "Prinplup", img: baseSprite(394), imgS: shinySprite(394), tags: ["starter"], },
			{ id: 199, natiId: 395, name: "Empoleon", img: baseSprite(395), imgS: shinySprite(395), tags: ["starter"], },
			{ id: 200, natiId: 495, name: "Snivy", img: baseSprite(495), imgS: shinySprite(495), tags: ["starter"], },
			{ id: 201, natiId: 496, name: "Servine", img: baseSprite(496), imgS: shinySprite(496), tags: ["starter"], },
			{ id: 202, natiId: 497, name: "Serperior", img: baseSprite(497), imgS: shinySprite(497), tags: ["starter"], },
			{ id: 203, natiId: 498, name: "Tepig", img: baseSprite(498), imgS: shinySprite(498), tags: ["starter"], },
			{ id: 204, natiId: 499, name: "Pignite", img: baseSprite(499), imgS: shinySprite(499), tags: ["starter"], },
			{ id: 205, natiId: 500, name: "Emboar", img: baseSprite(500), imgS: shinySprite(500), tags: ["starter"], },
			{ id: 206, natiId: 501, name: "Oshawott", img: baseSprite(501), imgS: shinySprite(501), tags: ["starter"], },
			{ id: 207, natiId: 502, name: "Dewott", img: baseSprite(502), imgS: shinySprite(502), tags: ["starter"], },
			{
				id: 208, natiId: 503, name: "Samurott", img: baseSprite(503), imgS: shinySprite(503), tags: ["starter"], forms: [
					{ name: "Unovian", img: baseSprite(503), imgS: shinySprite(503), },
					{ name: "Hisuian", img: baseSprite("503-h"), imgS: shinySprite("503-h"), tags: ["hisuian"], },
				],
			},
			{ id: 209, natiId: 650, name: "Chespin", img: baseSprite(650), imgS: shinySprite(650), tags: ["starter"], },
			{ id: 210, natiId: 651, name: "Quilladin", img: baseSprite(651), imgS: shinySprite(651), tags: ["starter"], },
			{ id: 211, natiId: 652, name: "Chesnaught", img: baseSprite(652), imgS: shinySprite(652), tags: ["starter"], },
			{ id: 212, natiId: 653, name: "Fennekin", img: baseSprite(653), imgS: shinySprite(653), tags: ["starter"], },
			{ id: 213, natiId: 654, name: "Braixen", img: baseSprite(654), imgS: shinySprite(654), tags: ["starter"], },
			{ id: 214, natiId: 655, name: "Delphox", img: baseSprite(655), imgS: shinySprite(655), tags: ["starter"], },
			{ id: 215, natiId: 656, name: "Froakie", img: baseSprite(656), imgS: shinySprite(656), tags: ["starter"], },
			{ id: 216, natiId: 657, name: "Frogadier", img: baseSprite(657), imgS: shinySprite(657), tags: ["starter"], },
			{ id: 217, natiId: 658, name: "Greninja", img: baseSprite(658), imgS: shinySprite(658), tags: ["starter"], },
			{ id: 218, natiId: 722, name: "Rowlet", img: baseSprite(722), imgS: shinySprite(722), tags: ["starter"], },
			{ id: 219, natiId: 723, name: "Dartrix", img: baseSprite(723), imgS: shinySprite(723), tags: ["starter"], },
			{
				id: 220, natiId: 724, name: "Decidueye", img: baseSprite(724), imgS: shinySprite(724), tags: ["starter"], forms: [
					{ name: "Alolan", img: baseSprite(724), imgS: shinySprite(724), },
					{ name: "Hisuian", img: baseSprite("724-h"), imgS: shinySprite("724-h"), tags: ["hisuian"], },
				],
			},
			{ id: 221, natiId: 725, name: "Litten", img: baseSprite(725), imgS: shinySprite(725), tags: ["starter"], },
			{ id: 222, natiId: 726, name: "Torracat", img: baseSprite(726), imgS: shinySprite(726), tags: ["starter"], },
			{ id: 223, natiId: 727, name: "Incineroar", img: baseSprite(727), imgS: shinySprite(727), tags: ["starter"], },
			{ id: 224, natiId: 728, name: "Popplio", img: baseSprite(728), imgS: shinySprite(728), tags: ["starter"], },
			{ id: 225, natiId: 729, name: "Brionne", img: baseSprite(729), imgS: shinySprite(729), tags: ["starter"], },
			{ id: 226, natiId: 730, name: "Primarina", img: baseSprite(730), imgS: shinySprite(730), tags: ["starter"], },
			{ id: 227, natiId: 810, name: "Grookey", img: baseSprite(810), imgS: shinySprite(810), tags: ["starter"], },
			{ id: 228, natiId: 811, name: "Thwackey", img: baseSprite(811), imgS: shinySprite(811), tags: ["starter"], },
			{ id: 229, natiId: 812, name: "Rillaboom", img: baseSprite(812), imgS: shinySprite(812), tags: ["starter"], },
			{ id: 230, natiId: 813, name: "Scorbunny", img: baseSprite(813), imgS: shinySprite(813), tags: ["starter"], },
			{ id: 231, natiId: 814, name: "Raboot", img: baseSprite(814), imgS: shinySprite(814), tags: ["starter"], },
			{ id: 232, natiId: 815, name: "Cinderace", img: baseSprite(815), imgS: shinySprite(815), tags: ["starter"], },
			{ id: 233, natiId: 816, name: "Sobble", img: baseSprite(816), imgS: shinySprite(816), tags: ["starter"], },
			{ id: 234, natiId: 817, name: "Drizzile", img: baseSprite(817), imgS: shinySprite(817), tags: ["starter"], },
			{ id: 235, natiId: 818, name: "Inteleon", img: baseSprite(818), imgS: shinySprite(818), tags: ["starter"], },
			{ id: 236, natiId: 1020, name: "Gouging Fire", img: baseSprite(1020), imgS: shinySprite(1020), maxStatus: "caught", tags: ["paradox"], },
			{ id: 237, natiId: 1021, name: "Raging Bolt", img: baseSprite(1021), imgS: shinySprite(1021), maxStatus: "caught", tags: ["paradox"], },
			{ id: 238, natiId: 1023, name: "Iron Crown", img: baseSprite(1023), imgS: shinySprite(1023), maxStatus: "caught", tags: ["paradox"], },
			{ id: 239, natiId: 1022, name: "Iron Boulder", img: baseSprite(1022), imgS: shinySprite(1022), maxStatus: "caught", tags: ["paradox"], },
			{ id: 240, natiId: 1024, name: "Terapagos", img: baseSprite(1024), imgS: shinySprite(1024), maxStatus: "caught", tags: ["paradox"], },
			{ id: 241, natiId: 1009, name: "Walking Wake", img: baseSprite(1009), imgS: shinySprite(1009), maxStatus: "caught", tags: ["paradox", "mythical"], },
			{ id: 242, natiId: 1010, name: "Iron Leaves", img: baseSprite(1010), imgS: shinySprite(1010), maxStatus: "caught", tags: ["paradox", "mythical"], },
			{ id: 243, natiId: 1025, name: "Pecharunt", img: baseSprite(1025), imgS: shinySprite(1025), maxStatus: "caught", tags: ["mythical"], }
		],
	},
});