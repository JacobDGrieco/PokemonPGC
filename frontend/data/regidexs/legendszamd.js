const game = "legendsza";
const sub = game + "md";
const baseSprite = (id) => _sprite(game, false, id, false);
const shinySprite = (id) => _sprite(game, true, id, false);

// const baseSprite = (id) => _sprite(game, false, id);
// const baseSpriteIcon = (id) => _sprite(game, false, id, false);
// const shinySprite = (id) => _sprite(game, true, id);
// const shinySpriteIcon = (id) => _sprite(game, true, id, false);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Mega Dimensions Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 2, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 3, name: "Annihilape", img: baseSprite(979), imgS: shinySprite(979), },
			{
				id: 4, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), tags: ["alolan"], },
					{ name: "Galarian", img: baseSprite("052-g"), imgS: shinySprite("052-g"), tags: ["galarian"], },
				],
			},
			{
				id: 5, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), tags: ["alolan"], },
				],
			},
			{ id: 6, name: "Perrserker", img: baseSprite(863), imgS: shinySprite(863), },
			{
				id: 7, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), forms: [
					{ name: "Kantonian", img: baseSprite(83), imgS: shinySprite(83), },
					{ name: "Galarian", img: baseSprite("083-g"), imgS: shinySprite("083-g"), tags: ["galarian"], },
				],
			},
			{ id: 8, name: "Sirfetch'd", img: baseSprite(865), imgS: shinySprite(865), },
			{ id: 9, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 10, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), tags: ["alolan"], },
				],
			},
			{ id: 11, name: "Porygon", img: baseSprite(137), imgS: shinySprite(137), },
			{ id: 12, name: "Porygon2", img: baseSprite(233), imgS: shinySprite(233), },
			{ id: 13, name: "Porygon-Z", img: baseSprite(474), imgS: shinySprite(474), },
			{ id: 14, name: "Capsakid", img: baseSprite(951), imgS: shinySprite(951), },
			{ id: 15, name: "Scovillain", img: baseSprite(952), imgS: shinySprite(952), tags: ["mega"], },
			{ id: 16, name: "Tinkatink", img: baseSprite(957), imgS: shinySprite(957), },
			{ id: 17, name: "Tinkatuff", img: baseSprite(958), imgS: shinySprite(958), },
			{ id: 18, name: "Tinkaton", img: baseSprite(959), imgS: shinySprite(959), },
			{ id: 19, name: "Cyclizar", img: baseSprite(967), imgS: shinySprite(967), },
			{ id: 20, name: "Glimmet", img: baseSprite(969), imgS: shinySprite(969), },
			{ id: 21, name: "Glimmora", img: baseSprite(970), imgS: shinySprite(970), tags: ["mega"], },
			{
				id: 22, name: "Rotom", img: baseSprite(479), imgS: shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: baseSprite(479), imgS: shinySprite(479), },
					{ name: "Fan", img: baseSprite("479-fa"), imgS: shinySprite("479-fa"), },
					{ name: "Frost", img: baseSprite("479-fr"), imgS: shinySprite("479-fr"), },
					{ name: "Heat", img: baseSprite("479-h"), imgS: shinySprite("479-h"), },
					{ name: "Mow", img: baseSprite("479-m"), imgS: shinySprite("479-m"), },
					{ name: "Wash", img: baseSprite("479-w"), imgS: shinySprite("479-w"), },
				],
			},
			{ id: 23, name: "Greavard", img: baseSprite(971), imgS: shinySprite(971), },
			{ id: 24, name: "Houndstone", img: baseSprite(972), imgS: shinySprite(972), },
			{ id: 25, name: "Sandygast", img: baseSprite(769), imgS: shinySprite(769), },
			{ id: 26, name: "Palossand", img: baseSprite(770), imgS: shinySprite(770), },
			{ id: 27, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), },
			{ id: 28, name: "Flamigo", img: baseSprite(973), imgS: shinySprite(973), },
			{ id: 29, name: "Cryogonal", img: baseSprite(615), imgS: shinySprite(615), },
			{ id: 30, name: "Dondozo", img: baseSprite(977), imgS: shinySprite(977), },
			{
				id: 31, name: "Tatsugiri", img: baseSprite(978), imgS: shinySprite(978), tags: ["other", "mega"], forms: [
					{ name: "Curly", img: baseSprite(978), imgS: shinySprite(978), },
					{ name: "Droopy", img: baseSprite("978-d"), imgS: shinySprite("978-d"), },
					{ name: "Stretchy", img: baseSprite("978-s"), imgS: shinySprite("978-s"), },
				],
			},
			{ id: 32, name: "Frigibax", img: baseSprite(996), imgS: shinySprite(996), tags: ["psuedo"], },
			{ id: 33, name: "Arctibax", img: baseSprite(997), imgS: shinySprite(997), tags: ["psuedo"], },
			{ id: 34, name: "Baxcalibur", img: baseSprite(998), imgS: shinySprite(998), tags: ["psuedo", "mega"], },
			{ id: 35, name: "Gimmighoul", img: baseSprite(999), imgS: shinySprite(999), },
			{ id: 36, name: "Gholdengo", img: baseSprite(1000), imgS: shinySprite(1000), },
			{
				id: 37, name: "Qwilfish", img: baseSprite(211), imgS: shinySprite(211), forms: [
					{ name: "Johtonian", img: baseSprite(211), imgS: shinySprite(211), },
					{ name: "Hisuian", img: baseSprite("211-h"), imgS: shinySprite("211-h"), tags: ["hisuian"], },
				],
			},
			{ id: 38, name: "Overqwil", img: baseSprite(904), imgS: shinySprite(904), },
			{ id: 39, name: "Treecko", img: baseSprite(252), imgS: shinySprite(252), tags: ["starter"], },
			{ id: 40, name: "Grovyle", img: baseSprite(253), imgS: shinySprite(253), tags: ["starter"], },
			{ id: 41, name: "Sceptile", img: baseSprite(254), imgS: shinySprite(254), tags: ["starter", "mega"], },
			{
				id: 42, name: "Torchic", img: baseSprite(255), imgS: shinySprite(255), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(255), imgS: shinySprite(255), },
					{ name: "Female", img: baseSprite("255-f"), imgS: shinySprite("255-f"), },
				],
			},
			{
				id: 43, name: "Combusken", img: baseSprite(256), imgS: shinySprite(256), tags: ["gender", "starter"], forms: [
					{ name: "Male", img: baseSprite(256), imgS: shinySprite(256), },
					{ name: "Female", img: baseSprite("256-f"), imgS: shinySprite("256-f"), },
				],
			},
			{
				id: 44, name: "Blaziken", img: baseSprite(257), imgS: shinySprite(257), tags: ["gender", "starter", "mega"], forms: [
					{ name: "Male", img: baseSprite(257), imgS: shinySprite(257), },
					{ name: "Female", img: baseSprite("257-f"), imgS: shinySprite("257-f"), },
				],
			},
			{ id: 45, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), tags: ["starter"], },
			{ id: 46, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), tags: ["starter"], },
			{ id: 47, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), tags: ["starter", "mega"], },
			{ id: 48, name: "Feebas", img: baseSprite(349), imgS: shinySprite(349), },
			{
				id: 49, name: "Milotic", img: baseSprite(350), imgS: shinySprite(350), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(350), imgS: shinySprite(350), },
					{ name: "Female", img: baseSprite("350-f"), imgS: shinySprite("350-f"), },
				],
			},
			{ id: 50, name: "Chingling", img: baseSprite(433), imgS: shinySprite(433), },
			{ id: 51, name: "Chimecho", img: baseSprite(358), imgS: shinySprite(358), tags: ["mega"], },
			{
				id: 52, name: "Indeedee", img: baseSprite(876), imgS: shinySprite(876), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(876), imgS: shinySprite(876), },
					{ name: "Female", img: baseSprite("876-f"), imgS: shinySprite("876-f"), },
				],
			},
			{ id: 53, name: "Purrloin", img: baseSprite(509), imgS: shinySprite(509), },
			{ id: 54, name: "Liepard", img: baseSprite(510), imgS: shinySprite(510), },
			{ id: 55, name: "Munna", img: baseSprite(517), imgS: shinySprite(517), },
			{ id: 56, name: "Musharna", img: baseSprite(518), imgS: shinySprite(518), },
			{ id: 57, name: "Throh", img: baseSprite(538), imgS: shinySprite(538), },
			{ id: 58, name: "Sawk", img: baseSprite(539), imgS: shinySprite(539), },
			{
				id: 59, name: "Yamask", img: baseSprite(562), imgS: shinySprite(562), forms: [
					{ name: "Unovian", img: baseSprite(562), imgS: shinySprite(562), },
					{ name: "Galarian", img: baseSprite("562-g"), imgS: shinySprite("562-g"), tags: ["galarian"], },
				],
			},
			{ id: 60, name: "Cofagrigus", img: baseSprite(563), imgS: shinySprite(563), },
			{ id: 61, name: "Runerigus", img: baseSprite(867), imgS: shinySprite(867), },
			{ id: 62, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), },
			{ id: 63, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), tags: ["mega"], },
			{ id: 64, name: "Nickit", img: baseSprite(827), imgS: shinySprite(827), },
			{ id: 65, name: "Thievul", img: baseSprite(828), imgS: shinySprite(828), },
			{ id: 66, name: "Clobbopus", img: baseSprite(852), imgS: shinySprite(852), },
			{ id: 67, name: "Grapploct", img: baseSprite(853), imgS: shinySprite(853), },
			{ id: 68, name: "Mimikyu", img: baseSprite(778), imgS: shinySprite(778), },
			{ id: 69, name: "Kleavor", img: baseSprite(900), imgS: shinySprite(900), },
			{ id: 70, name: "Morpeko", img: baseSprite(877), imgS: shinySprite(877), },
			{ id: 71, name: "Golett", img: baseSprite(622), imgS: shinySprite(622), },
			{ id: 72, name: "Golurk", img: baseSprite(623), imgS: shinySprite(623), tags: ["mega"], },
			{ id: 73, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), },
			{ id: 74, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), },
			{ id: 75, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), },
			{ id: 76, name: "Igglybuff", img: baseSprite(174), imgS: shinySprite(174), },
			{ id: 77, name: "Jigglypuff", img: baseSprite(39), imgS: shinySprite(39), },
			{ id: 78, name: "Wigglytuff", img: baseSprite(40), imgS: shinySprite(40), },
			{ id: 79, name: "Fidough", img: baseSprite(926), imgS: shinySprite(926), },
			{ id: 80, name: "Dachsbun", img: baseSprite(927), imgS: shinySprite(927), },
			{
				id: 81, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), },
				],
			},
			{
				id: 82, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), },
				],
			},
			{
				id: 83, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), tags: ["gender", "mega"], forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), },
				],
			},
			{ id: 84, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), },
			{ id: 85, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), },
			{
				id: 86, name: "Squawkabilly", img: baseSprite(931), imgS: shinySprite(931), tags: ["other"], forms: [
					{ name: "Green Plumage", img: baseSprite(931), imgS: shinySprite(931), },
					{ name: "Blue Plumage", img: baseSprite("931-b"), imgS: shinySprite("931-b"), },
					{ name: "White Plumage", img: baseSprite("931-w"), imgS: shinySprite("931-w"), },
					{ name: "Yellow Plumage", img: baseSprite("931-y"), imgS: shinySprite("931-y"), },
				],
			},
			{ id: 87, name: "Crabrawler", img: baseSprite(739), imgS: shinySprite(739), },
			{ id: 88, name: "Crabominable", img: baseSprite(740), imgS: shinySprite(740), tags: ["mega"], },
			{ id: 89, name: "Nacli", img: baseSprite(932), imgS: shinySprite(932), },
			{ id: 90, name: "Naclstack", img: baseSprite(933), imgS: shinySprite(933), },
			{ id: 91, name: "Garganacl", img: baseSprite(934), imgS: shinySprite(934), },
			{
				id: 92, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), },
				],
			},
			{
				id: 93, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), },
				],
			},
			{
				id: 94, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 95, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 96, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },
			{ id: 97, name: "Charcadet", img: baseSprite(935), imgS: shinySprite(935), },
			{ id: 98, name: "Armarouge", img: baseSprite(936), imgS: shinySprite(936), },
			{ id: 99, name: "Ceruledge", img: baseSprite(937), imgS: shinySprite(937), },
			{ id: 100, name: "Maschiff", img: baseSprite(942), imgS: shinySprite(942), },
			{ id: 101, name: "Mabosstiff", img: baseSprite(943), imgS: shinySprite(943), },
			{ id: 102, name: "Toxel", img: baseSprite(848), imgS: shinySprite(848), },
			{
				id: 103, name: "Toxtricity", img: baseSprite(849), imgS: shinySprite(849), tags: ["other"], forms: [
					{ name: "Amped", img: baseSprite(849), imgS: shinySprite(849), },
					{ name: "Low Key", img: baseSprite("849-l"), imgS: shinySprite("849-l"), },
				],
			},
			{ id: 104, name: "Shroodle", img: baseSprite(944), imgS: shinySprite(944), },
			{ id: 105, name: "Grafaiai", img: baseSprite(945), imgS: shinySprite(945), },
			{ id: 106, name: "Zangoose", img: baseSprite(335), imgS: shinySprite(335), },
			{ id: 107, name: "Seviper", img: baseSprite(336), imgS: shinySprite(336), },
			{ id: 108, name: "Mime Jr.", img: baseSprite(439), imgS: shinySprite(439), },
			{
				id: 109, name: "Mr. Mime", img: baseSprite(122), imgS: shinySprite(122), forms: [
					{ name: "Kantonian", img: baseSprite(122), imgS: shinySprite(122), },
					{ name: "Galarian", img: baseSprite("122-g"), imgS: shinySprite("122-g"), tags: ["galarian"], },
				],
			},
			{ id: 110, name: "Mr. Rime", img: baseSprite(866), imgS: shinySprite(866), },
			{ id: 111, name: "Foongus", img: baseSprite(590), imgS: shinySprite(590), },
			{ id: 112, name: "Amoonguss", img: baseSprite(591), imgS: shinySprite(591), },
			{ id: 113, name: "Heatran", img: baseSprite(485), imgS: shinySprite(485), tags: ["mega", "legendary"], },
			{ id: 114, name: "Volcanion", img: baseSprite(721), imgS: shinySprite(721), tags: ["legendary"], },
			{ id: 115, name: "Cobalion", img: baseSprite(638), imgS: shinySprite(638), tags: ["legendary"], },
			{ id: 116, name: "Terrakion", img: baseSprite(639), imgS: shinySprite(639), tags: ["legendary"], },
			{ id: 117, name: "Virizion", img: baseSprite(640), imgS: shinySprite(640), tags: ["legendary"], },
			{
				id: 118, name: "Keldeo", img: baseSprite(647), imgS: shinySprite(647), tags: ["other"], forms: [
					{ name: "Ordinary", img: baseSprite(647), imgS: shinySprite(647), },
					{ name: "Resolute", img: baseSprite("647-r"), imgS: shinySprite("647-r"), },
				],
			},
			{ id: 119, name: "Meloetta", img: baseSprite(648), imgS: shinySprite(648), },
			{ id: 120, name: "Genesect", img: baseSprite(649), imgS: shinySprite(649), },
			{
				id: 121, name: "Hoopa", img: baseSprite(720), imgS: shinySprite(720), tags: ["other"], forms: [
					{ name: "Confined", img: baseSprite(720), imgS: shinySprite(720), },
					{ name: "Unbound", img: baseSprite("720-u"), imgS: shinySprite("720-u"), },
				],
			},
			{ id: 122, name: "Marshadow", img: baseSprite(802), imgS: shinySprite(802), },
			{ id: 123, name: "Meltan", img: baseSprite(808), imgS: shinySprite(808), },
			{ id: 124, name: "Melmetal", img: baseSprite(809), imgS: shinySprite(809), },
			{ id: 125, name: "Darkrai", img: baseSprite(491), imgS: shinySprite(491), tags: ["mega"] },
			{ id: 126, name: "Latias", img: baseSprite(380), imgS: shinySprite(380), tags: ["mega", "legendary"], },
			{ id: 127, name: "Latios", img: baseSprite(381), imgS: shinySprite(381), tags: ["mega", "legendary"], },
			{ id: 128, name: "Kyogre", img: baseSprite(382), imgS: shinySprite(382), tags: ["mega", "legendary"], },
			{ id: 129, name: "Groudon", img: baseSprite(383), imgS: shinySprite(383), tags: ["mega", "legendary"], },
			{ id: 130, name: "Rayquaza", img: baseSprite(384), imgS: shinySprite(384), tags: ["mega", "legendary"], },
			{
				id: 131, name: "Magearna", img: baseSprite(801), imgS: shinySprite(801), tags: ["other", "mega",], forms: [
					{ name: "Normal", img: baseSprite(801), imgS: shinySprite(801), },
					{ name: "Original Color", img: baseSprite("801-o"), imgS: shinySprite("801-o"), },
				],
			},
			{ id: 132, name: "Zeraora", img: baseSprite(807), imgS: shinySprite(807), tags: ["mega"] },

		]
	}
});