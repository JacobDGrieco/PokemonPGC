const game = "y";
const sub = game + "-central";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const nationalDex = (...args) => _dex(game, "national", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Central Kalos Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Chespin", img: baseSprite(650), imgS: shinySprite(650), starter: true, dexSync: nationalDex(650), },
			{ id: 2, name: "Quilladin", img: baseSprite(651), imgS: shinySprite(651), starter: true, dexSync: nationalDex(651), },
			{ id: 3, name: "Chesnaught", img: baseSprite(652), imgS: shinySprite(652), starter: true, dexSync: nationalDex(652), },
			{ id: 4, name: "Fennekin", img: baseSprite(653), imgS: shinySprite(653), starter: true, dexSync: nationalDex(653), },
			{ id: 5, name: "Braixen", img: baseSprite(654), imgS: shinySprite(654), starter: true, dexSync: nationalDex(654), },
			{ id: 6, name: "Delphox", img: baseSprite(655), imgS: shinySprite(655), starter: true, dexSync: nationalDex(655), },
			{ id: 7, name: "Froakie", img: baseSprite(656), imgS: shinySprite(656), starter: true, dexSync: nationalDex(656), },
			{ id: 8, name: "Frogadier", img: baseSprite(657), imgS: shinySprite(657), starter: true, dexSync: nationalDex(657), },
			{ id: 9, name: "Greninja", img: baseSprite(658), imgS: shinySprite(658), starter: true, dexSync: nationalDex(658), },
			{ id: 10, name: "Bunnelby", img: baseSprite(659), imgS: shinySprite(659), dexSync: nationalDex(659), },
			{ id: 11, name: "Diggersby", img: baseSprite(660), imgS: shinySprite(660), dexSync: nationalDex(660), },
			{ id: 12, name: "Zigzagoon", img: baseSprite(263), imgS: shinySprite(263), dexSync: nationalDex(263), },
			{ id: 13, name: "Linoone", img: baseSprite(264), imgS: shinySprite(264), dexSync: nationalDex(264), },
			{ id: 14, name: "Fletchling", img: baseSprite(661), imgS: shinySprite(661), dexSync: nationalDex(661), },
			{ id: 15, name: "Fletchinder", img: baseSprite(662), imgS: shinySprite(662), dexSync: nationalDex(662), },
			{ id: 16, name: "Talonflame", img: baseSprite(663), imgS: shinySprite(663), dexSync: nationalDex(663), },
			{ id: 17, name: "Pidgey", img: baseSprite(16), imgS: shinySprite(16), dexSync: nationalDex(16), },
			{ id: 18, name: "Pidgeotto", img: baseSprite(17), imgS: shinySprite(17), dexSync: nationalDex(17), },
			{ id: 19, name: "Pidgeot", img: baseSprite(18), imgS: shinySprite(18), dexSync: nationalDex(18), },
			{ id: 20, name: "Scatterbug", img: baseSprite(664), imgS: shinySprite(664), dexSync: nationalDex(664), },
			{ id: 21, name: "Spewpa", img: baseSprite(665), imgS: shinySprite(665), dexSync: nationalDex(665), },
			{
				id: 22, name: "Vivillon", img: baseSprite(666), imgS: shinySprite(666), otherForms: true, dexSync: nationalDex(666), forms: [
					{ name: "Archipelago Pattern", img: baseSprite("666-arc"), imgS: shinySprite("666-arc"), dexSync: nationalDex(666, "Archipelago Pattern"), },
					{ name: "Continental Pattern", img: baseSprite("666-con"), imgS: shinySprite("666-con"), dexSync: nationalDex(666, "Continental Pattern"), },
					{ name: "Elegant Pattern", img: baseSprite("666-ele"), imgS: shinySprite("666-ele"), dexSync: nationalDex(666, "Elegant Pattern"), },
					{ name: "Garden Pattern", img: baseSprite("666-gar"), imgS: shinySprite("666-gar"), dexSync: nationalDex(666, "Garden Pattern"), },
					{ name: "High Plains Pattern", img: baseSprite("666-hig"), imgS: shinySprite("666-hig"), dexSync: nationalDex(666, "High Plains Pattern"), },
					{ name: "Icy Snow Pattern", img: baseSprite("666-icy"), imgS: shinySprite("666-icy"), dexSync: nationalDex(666, "Icy Snow Pattern"), },
					{ name: "Jungle Pattern", img: baseSprite("666-jun"), imgS: shinySprite("666-jun"), dexSync: nationalDex(666, "Jungle Pattern"), },
					{ name: "Marine Pattern", img: baseSprite("666-mar"), imgS: shinySprite("666-mar"), dexSync: nationalDex(666, "Marine Pattern"), },
					{ name: "Meadow Pattern", img: baseSprite("666-mea"), imgS: shinySprite("666-mea"), dexSync: nationalDex(666, "Meadow Pattern"), },
					{ name: "Modern Pattern", img: baseSprite("666-mod"), imgS: shinySprite("666-mod"), dexSync: nationalDex(666, "Modern Pattern"), },
					{ name: "Monsoon Pattern", img: baseSprite("666-mon"), imgS: shinySprite("666-mon"), dexSync: nationalDex(666, "Monsoon Pattern"), },
					{ name: "Ocean Pattern", img: baseSprite("666-oce"), imgS: shinySprite("666-oce"), dexSync: nationalDex(666, "Ocean Pattern"), },
					{ name: "Polar Pattern", img: baseSprite("666-pol"), imgS: shinySprite("666-pol"), dexSync: nationalDex(666, "Polar Pattern"), },
					{ name: "River Pattern", img: baseSprite("666-riv"), imgS: shinySprite("666-riv"), dexSync: nationalDex(666, "River Pattern"), },
					{ name: "Sandstorm Pattern", img: baseSprite("666-san"), imgS: shinySprite("666-san"), dexSync: nationalDex(666, "Sandstorm Pattern"), },
					{ name: "Savanna Pattern", img: baseSprite("666-sav"), imgS: shinySprite("666-sav"), dexSync: nationalDex(666, "Savanna Pattern"), },
					{ name: "Sun Pattern", img: baseSprite("666-sun"), imgS: shinySprite("666-sun"), dexSync: nationalDex(666, "Sun Pattern"), },
					{ name: "Tundra Pattern", img: baseSprite("666-tun"), imgS: shinySprite("666-tun"), dexSync: nationalDex(666, "Tundra Pattern"), },
					{ name: "Fancy Pattern", img: baseSprite("666-fan"), imgS: shinySprite("666-fan"), dexSync: nationalDex(666, "Fancy Pattern"), },
					{ name: "Poké Ball Pattern", img: baseSprite("666-pok"), imgS: shinySprite("666-pok"), dexSync: nationalDex(666, "Poké Ball Pattern"), },],
			},
			{ id: 23, name: "Caterpie", img: baseSprite(10), imgS: shinySprite(10), dexSync: nationalDex(10), },
			{ id: 24, name: "Metapod", img: baseSprite(11), imgS: shinySprite(11), dexSync: nationalDex(11), },
			{
				id: 25, name: "Butterfree", img: baseSprite(12), imgS: shinySprite(12), gender: true, dexSync: nationalDex(12), forms: [
					{ name: "Male", img: baseSprite(12), imgS: shinySprite(12), dexSync: nationalDex(12, "Male"), },
					{ name: "Female", img: baseSprite("012-f"), imgS: shinySprite("012-f"), dexSync: nationalDex(12, "Female"), },],
			},
			{ id: 26, name: "Weedle", img: baseSprite(13), imgS: shinySprite(13), dexSync: nationalDex(13), },
			{ id: 27, name: "Kakuna", img: baseSprite(14), imgS: shinySprite(14), dexSync: nationalDex(14), },
			{ id: 28, name: "Beedrill", img: baseSprite(15), imgS: shinySprite(15), dexSync: nationalDex(15), },
			{ id: 29, name: "Pansage", img: baseSprite(511), imgS: shinySprite(511), dexSync: nationalDex(511), },
			{ id: 30, name: "Simisage", img: baseSprite(512), imgS: shinySprite(512), dexSync: nationalDex(512), },
			{ id: 31, name: "Pansear", img: baseSprite(513), imgS: shinySprite(513), dexSync: nationalDex(513), },
			{ id: 32, name: "Simisear", img: baseSprite(514), imgS: shinySprite(514), dexSync: nationalDex(514), },
			{ id: 33, name: "Panpour", img: baseSprite(515), imgS: shinySprite(515), dexSync: nationalDex(515), },
			{ id: 34, name: "Simipour", img: baseSprite(516), imgS: shinySprite(516), dexSync: nationalDex(516), },
			{ id: 35, name: "Pichu", img: baseSprite(172), imgS: shinySprite(172), dexSync: nationalDex(172), },
			{
				id: 36, name: "Pikachu", img: baseSprite(25), imgS: shinySprite(25), gender: true, dexSync: nationalDex(25), forms: [
					{ name: "Male", img: baseSprite(25), imgS: shinySprite(25), dexSync: nationalDex(25, "Male"), },
					{ name: "Female", img: baseSprite("025-f"), imgS: shinySprite("025-f"), dexSync: nationalDex(25, "Female"), },],
			},
			{
				id: 37, name: "Raichu", img: baseSprite(26), imgS: shinySprite(26), gender: true, dexSync: nationalDex(26), forms: [
					{ name: "Male", img: baseSprite(26), imgS: shinySprite(26), dexSync: nationalDex(26, "Male"), },
					{ name: "Female", img: baseSprite("026-f"), imgS: shinySprite("026-f"), dexSync: nationalDex(26, "Female"), },],
			},
			{
				id: 38, name: "Bidoof", img: baseSprite(399), imgS: shinySprite(399), gender: true, dexSync: nationalDex(399), forms: [
					{ name: "Male", img: baseSprite(399), imgS: shinySprite(399), dexSync: nationalDex(399, "Male"), },
					{ name: "Female", img: baseSprite("399-f"), imgS: shinySprite("399-f"), dexSync: nationalDex(399, "Female"), },
				],
			},
			{
				id: 39, name: "Bibarel", img: baseSprite(400), imgS: shinySprite(400), gender: true, dexSync: nationalDex(400), forms: [
					{ name: "Male", img: baseSprite(400), imgS: shinySprite(400), dexSync: nationalDex(400, "Male"), },
					{ name: "Female", img: baseSprite("400-f"), imgS: shinySprite("400-f"), dexSync: nationalDex(400, "Female"), },
				],
			},
			{ id: 40, name: "Dunsparce", img: baseSprite(206), imgS: shinySprite(206), dexSync: nationalDex(206), },
			{ id: 41, name: "Azurill", img: baseSprite(298), imgS: shinySprite(298), dexSync: nationalDex(298), },
			{ id: 42, name: "Marill", img: baseSprite(183), imgS: shinySprite(183), dexSync: nationalDex(183), },
			{ id: 43, name: "Azumarill", img: baseSprite(184), imgS: shinySprite(184), dexSync: nationalDex(184), },
			{
				id: 44, name: "Burmy", img: baseSprite(412), imgS: shinySprite(412), otherForms: true, dexSync: nationalDex(412), forms: [
					{ name: "Plant Cloak", img: baseSprite(412), imgS: shinySprite(412), dexSync: nationalDex(412, "Plant Cloak"), },
					{ name: "Sandy Cloak", img: baseSprite("412-s"), imgS: shinySprite("412-s"), dexSync: nationalDex(412, "Sandy Cloak"), },
					{ name: "Trash Cloak", img: baseSprite("412-t"), imgS: shinySprite("412-t"), dexSync: nationalDex(412, "Trash Cloak"), },
				],
			},
			{
				id: 45, name: "Wormadam", img: baseSprite(413), imgS: shinySprite(413), otherForms: true, dexSync: nationalDex(413), forms: [
					{ name: "Plant Cloak", img: baseSprite(413), imgS: shinySprite(413), dexSync: nationalDex(413, "Plant Cloak"), },
					{ name: "Sandy Cloak", img: baseSprite("413-s"), imgS: shinySprite("413-s"), dexSync: nationalDex(413, "Sandy Cloak"), },
					{ name: "Trash Cloak", img: baseSprite("413-t"), imgS: shinySprite("413-t"), dexSync: nationalDex(413, "Trash Cloak"), },
				],
			},
			{ id: 46, name: "Mothim", img: baseSprite(414), imgS: shinySprite(414), dexSync: nationalDex(414), },
			{ id: 47, name: "Surskit", img: baseSprite(283), imgS: shinySprite(283), dexSync: nationalDex(283), },
			{ id: 48, name: "Masquerain", img: baseSprite(284), imgS: shinySprite(284), dexSync: nationalDex(284), },
			{
				id: 49, name: "Magikarp", img: baseSprite(129), imgS: shinySprite(129), gender: true, dexSync: nationalDex(129), forms: [
					{ name: "Male", img: baseSprite(129), imgS: shinySprite(129), dexSync: nationalDex(129, "Male"), },
					{ name: "Female", img: baseSprite("129-f"), imgS: shinySprite("129-f"), dexSync: nationalDex(129, "Female"), },],
			},
			{
				id: 50, name: "Gyarados", img: baseSprite(130), imgS: shinySprite(130), gender: true, mega: true, dexSync: nationalDex(130), forms: [
					{ name: "Male", img: baseSprite(130), imgS: shinySprite(130), dexSync: nationalDex(130, "Male"), },
					{ name: "Female", img: baseSprite("130-f"), imgS: shinySprite("130-f"), dexSync: nationalDex(130, "Female"), },],
			},
			{ id: 51, name: "Corphish", img: baseSprite(341), imgS: shinySprite(341), dexSync: nationalDex(341), },
			{ id: 52, name: "Crawdaunt", img: baseSprite(342), imgS: shinySprite(342), dexSync: nationalDex(342), },
			{
				id: 53, name: "Goldeen", img: baseSprite(118), imgS: shinySprite(118), gender: true, dexSync: nationalDex(118), forms: [
					{ name: "Male", img: baseSprite(118), imgS: shinySprite(118), dexSync: nationalDex(118, "Male"), },
					{ name: "Female", img: baseSprite("118-f"), imgS: shinySprite("118-f"), dexSync: nationalDex(118, "Female"), },],
			},
			{
				id: 54, name: "Seaking", img: baseSprite(119), imgS: shinySprite(119), gender: true, dexSync: nationalDex(119), forms: [
					{ name: "Male", img: baseSprite(119), imgS: shinySprite(119), dexSync: nationalDex(119, "Male"), },
					{ name: "Female", img: baseSprite("119-f"), imgS: shinySprite("119-f"), dexSync: nationalDex(119, "Female"), },],
			},
			{ id: 55, name: "Carvanha", img: baseSprite(318), imgS: shinySprite(318), dexSync: nationalDex(318), },
			{ id: 56, name: "Sharpedo", img: baseSprite(319), imgS: shinySprite(319), dexSync: nationalDex(319), },
			{ id: 57, name: "Litleo", img: baseSprite(667), imgS: shinySprite(667), dexSync: nationalDex(667), },
			{
				id: 58, name: "Pyroar", img: baseSprite(668), imgS: shinySprite(668), gender: true, dexSync: nationalDex(668), forms: [
					{ name: "Male", img: baseSprite(668), imgS: shinySprite(668), dexSync: nationalDex(668, "Male"), },
					{ name: "Female", img: baseSprite("668-f"), imgS: shinySprite("668-f"), dexSync: nationalDex(668, "Female"), },
				],
			},
			{ id: 59, name: "Psyduck", img: baseSprite(54), imgS: shinySprite(54), dexSync: nationalDex(54), },
			{ id: 60, name: "Golduck", img: baseSprite(55), imgS: shinySprite(55), dexSync: nationalDex(55), },
			{ id: 61, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), dexSync: nationalDex(83), },
			{ id: 62, name: "Riolu", img: baseSprite(447), imgS: shinySprite(447), dexSync: nationalDex(447), },
			{ id: 63, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), mega: true, dexSync: nationalDex(448), },
			{ id: 64, name: "Ralts", img: baseSprite(280), imgS: shinySprite(280), dexSync: nationalDex(280), },
			{ id: 65, name: "Kirlia", img: baseSprite(281), imgS: shinySprite(281), dexSync: nationalDex(281), },
			{ id: 66, name: "Gardevoir", img: baseSprite(282), imgS: shinySprite(282), mega: true, dexSync: nationalDex(282), },
			{ id: 67, name: "Gallade", img: baseSprite(475), imgS: shinySprite(475), dexSync: nationalDex(475), },
			{
				id: 68, name: "Flabébé", img: baseSprite(669), imgS: shinySprite(669), otherForms: true, dexSync: nationalDex(669), forms: [
					{ name: "Red Flower", img: baseSprite(669), imgS: shinySprite(669), dexSync: nationalDex(669, "Red Flower"), },
					{ name: "Orange Flower", img: baseSprite("669-o"), imgS: shinySprite("669-o"), dexSync: nationalDex(669, "Orange Flower"), },
					{ name: "Yellow Flower", img: baseSprite("669-y"), imgS: shinySprite("669-y"), dexSync: nationalDex(669, "Yellow Flower"), },
					{ name: "Blue Flower", img: baseSprite("669-b"), imgS: shinySprite("669-b"), dexSync: nationalDex(669, "Blue Flower"), },
					{ name: "White Flower", img: baseSprite("669-w"), imgS: shinySprite("669-w"), dexSync: nationalDex(669, "White Flower"), },],
			},
			{
				id: 69, name: "Floette", img: baseSprite(670), imgS: shinySprite(670), otherForms: true, dexSync: nationalDex(670), forms: [
					{ name: "Red Flower", img: baseSprite(670), imgS: shinySprite(670), dexSync: nationalDex(670, "Red Flower"), },
					{ name: "Orange Flower", img: baseSprite("670-o"), imgS: shinySprite("670-o"), dexSync: nationalDex(670, "Orange Flower"), },
					{ name: "Yellow Flower", img: baseSprite("670-y"), imgS: shinySprite("670-y"), dexSync: nationalDex(670, "Yellow Flower"), },
					{ name: "Blue Flower", img: baseSprite("670-b"), imgS: shinySprite("670-b"), dexSync: nationalDex(670, "Blue Flower"), },
					{ name: "White Flower", img: baseSprite("670-w"), imgS: shinySprite("670-w"), dexSync: nationalDex(670, "White Flower"), },],
			},
			{
				id: 70, name: "Florges", img: baseSprite(671), imgS: shinySprite(671), otherForms: true, dexSync: nationalDex(671), forms: [
					{ name: "Red Flower", img: baseSprite(671), imgS: shinySprite(671), dexSync: nationalDex(671, "Red Flower"), },
					{ name: "Orange Flower", img: baseSprite("671-o"), imgS: shinySprite("671-o"), dexSync: nationalDex(671, "Orange Flower"), },
					{ name: "Yellow Flower", img: baseSprite("671-y"), imgS: shinySprite("671-y"), dexSync: nationalDex(671, "Yellow Flower"), },
					{ name: "Blue Flower", img: baseSprite("671-b"), imgS: shinySprite("671-b"), dexSync: nationalDex(671, "Blue Flower"), },
					{ name: "White Flower", img: baseSprite("671-w"), imgS: shinySprite("671-w"), dexSync: nationalDex(671, "White Flower"), },],
			},
			{ id: 71, name: "Budew", img: baseSprite(406), imgS: shinySprite(406), dexSync: nationalDex(406), },
			{
				id: 72, name: "Roselia", img: baseSprite(315), imgS: shinySprite(315), gender: true, dexSync: nationalDex(315), forms: [
					{ name: "Male", img: baseSprite(315), imgS: shinySprite(315), dexSync: nationalDex(315, "Male"), },
					{ name: "Female", img: baseSprite("315-f"), imgS: shinySprite("315-f"), dexSync: nationalDex(315, "Female"), },
				],
			},
			{
				id: 73, name: "Roserade", img: baseSprite(407), imgS: shinySprite(407), gender: true, dexSync: nationalDex(407), forms: [
					{ name: "Male", img: baseSprite(407), imgS: shinySprite(407), dexSync: nationalDex(407, "Male"), },
					{ name: "Female", img: baseSprite("407-f"), imgS: shinySprite("407-f"), dexSync: nationalDex(407, "Female"), },
				],
			},
			{
				id: 74, name: "Ledyba", img: baseSprite(165), imgS: shinySprite(165), gender: true, dexSync: nationalDex(165), forms: [
					{ name: "Male", img: baseSprite(165), imgS: shinySprite(165), dexSync: nationalDex(165, "Male"), },
					{ name: "Female", img: baseSprite("165-f"), imgS: shinySprite("165-f"), dexSync: nationalDex(165, "Female"), },
				],
			},
			{
				id: 75, name: "Ledian", img: baseSprite(166), imgS: shinySprite(166), gender: true, dexSync: nationalDex(166), forms: [
					{ name: "Male", img: baseSprite(166), imgS: shinySprite(166), dexSync: nationalDex(166, "Male"), },
					{ name: "Female", img: baseSprite("166-f"), imgS: shinySprite("166-f"), dexSync: nationalDex(166, "Female"), },
				],
			},
			{
				id: 76, name: "Combee", img: baseSprite(415), imgS: shinySprite(415), gender: true, dexSync: nationalDex(415), forms: [
					{ name: "Male", img: baseSprite(415), imgS: shinySprite(415), dexSync: nationalDex(415, "Male"), },
					{ name: "Female", img: baseSprite("415-f"), imgS: shinySprite("415-f"), dexSync: nationalDex(415, "Female"), },
				],
			},
			{ id: 77, name: "Vespiquen", img: baseSprite(416), imgS: shinySprite(416), dexSync: nationalDex(416), },
			{ id: 78, name: "Skitty", img: baseSprite(300), imgS: shinySprite(300), dexSync: nationalDex(300), },
			{ id: 79, name: "Delcatty", img: baseSprite(301), imgS: shinySprite(301), dexSync: nationalDex(301), },
			{ id: 80, name: "Bulbasaur", img: baseSprite(1), imgS: shinySprite(1), dexSync: nationalDex(1), },
			{ id: 81, name: "Ivysaur", img: baseSprite(2), imgS: shinySprite(2), dexSync: nationalDex(2), },
			{
				id: 82, name: "Venusaur", img: baseSprite(3), imgS: shinySprite(3), gender: true, mega: true, dexSync: nationalDex(3), forms: [
					{ name: "Male", img: baseSprite(3), imgS: shinySprite(3), dexSync: nationalDex(3, "Male"), },
					{ name: "Female", img: baseSprite("003-f"), imgS: shinySprite("003-f"), dexSync: nationalDex(3, "Female"), },],
			},
			{ id: 83, name: "Charmander", img: baseSprite(4), imgS: shinySprite(4), dexSync: nationalDex(4), },
			{ id: 84, name: "Charmeleon", img: baseSprite(5), imgS: shinySprite(5), dexSync: nationalDex(5), },
			{ id: 85, name: "Charizard", img: baseSprite(6), imgS: shinySprite(6), mega: true, dexSync: nationalDex(6), },
			{ id: 86, name: "Squirtle", img: baseSprite(7), imgS: shinySprite(7), dexSync: nationalDex(7), },
			{ id: 87, name: "Wartortle", img: baseSprite(8), imgS: shinySprite(8), dexSync: nationalDex(8), },
			{ id: 88, name: "Blastoise", img: baseSprite(9), imgS: shinySprite(9), mega: true, dexSync: nationalDex(9), },
			{ id: 89, name: "Skiddo", img: baseSprite(672), imgS: shinySprite(672), dexSync: nationalDex(672), },
			{ id: 90, name: "Gogoat", img: baseSprite(673), imgS: shinySprite(673), dexSync: nationalDex(673), },
			{ id: 91, name: "Pancham", img: baseSprite(674), imgS: shinySprite(674), dexSync: nationalDex(674), },
			{ id: 92, name: "Pangoro", img: baseSprite(675), imgS: shinySprite(675), dexSync: nationalDex(675), },
			{
				id: 93, name: "Furfrou", img: baseSprite(676), imgS: shinySprite(676), otherForms: true, dexSync: nationalDex(676), forms: [
					{ name: "Natural Trim", img: baseSprite(676), imgS: shinySprite(676), dexSync: nationalDex(676, "Natural Trim"), },
					{ name: "Heart Trim", img: baseSprite("676-he"), imgS: shinySprite("676-he"), dexSync: nationalDex(676, "Heart Trim"), },
					{ name: "Star Trim", img: baseSprite("676-st"), imgS: shinySprite("676-st"), dexSync: nationalDex(676, "Star Trim"), },
					{ name: "Diamond Trim", img: baseSprite("676-di"), imgS: shinySprite("676-di"), dexSync: nationalDex(676, "Diamond Trim"), },
					{ name: "Debutante Trim", img: baseSprite("676-de"), imgS: shinySprite("676-de"), dexSync: nationalDex(676, "Debutante Trim"), },
					{ name: "Matron Trim", img: baseSprite("676-ma"), imgS: shinySprite("676-ma"), dexSync: nationalDex(676, "Matron Trim"), },
					{ name: "Dandy Trim", img: baseSprite("676-da"), imgS: shinySprite("676-da"), dexSync: nationalDex(676, "Dandy Trim"), },
					{ name: "Le Reine Trim", img: baseSprite("676-la"), imgS: shinySprite("676-la"), dexSync: nationalDex(676, "Le Reine Trim"), },
					{ name: "Kabuki Trim", img: baseSprite("676-ka"), imgS: shinySprite("676-ka"), dexSync: nationalDex(676, "Kabuki Trim"), },
					{ name: "Pharaoh Trim", img: baseSprite("676-ph"), imgS: shinySprite("676-ph"), dexSync: nationalDex(676, "Pharaoh Trim"), },],
			},
			{
				id: 94, name: "Doduo", img: baseSprite(84), imgS: shinySprite(84), gender: true, dexSync: nationalDex(84), forms: [
					{ name: "Male", img: baseSprite(84), imgS: shinySprite(84), dexSync: nationalDex(84, "Male"), },
					{ name: "Female", img: baseSprite("084-f"), imgS: shinySprite("084-f"), dexSync: nationalDex(84, "Female"), },],
			},
			{
				id: 95, name: "Dodrio", img: baseSprite(85), imgS: shinySprite(85), gender: true, dexSync: nationalDex(85), forms: [
					{ name: "Male", img: baseSprite(85), imgS: shinySprite(85), dexSync: nationalDex(85, "Male"), },
					{ name: "Female", img: baseSprite("085-f"), imgS: shinySprite("085-f"), dexSync: nationalDex(85, "Female"), },],
			},
			{ id: 96, name: "Plusle", img: baseSprite(311), imgS: shinySprite(311), dexSync: nationalDex(311), },
			{ id: 97, name: "Minun", img: baseSprite(312), imgS: shinySprite(312), dexSync: nationalDex(312), },
			{
				id: 98, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), gender: true, dexSync: nationalDex(316), forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), dexSync: nationalDex(316, "Male"), },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), dexSync: nationalDex(316, "Female"), },
				],
			},
			{
				id: 99, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), gender: true, dexSync: nationalDex(317), forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), dexSync: nationalDex(317, "Male"), },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), dexSync: nationalDex(317, "Female"), },
				],
			},
			{ id: 100, name: "Scraggy", img: baseSprite(559), imgS: shinySprite(559), dexSync: nationalDex(559), },
			{ id: 101, name: "Scrafty", img: baseSprite(560), imgS: shinySprite(560), dexSync: nationalDex(560), },
			{ id: 102, name: "Abra", img: baseSprite(63), imgS: shinySprite(63), dexSync: nationalDex(63), },
			{
				id: 103, name: "Kadabra", img: baseSprite(64), imgS: shinySprite(64), gender: true, dexSync: nationalDex(64), forms: [
					{ name: "Male", img: baseSprite(64), imgS: shinySprite(64), dexSync: nationalDex(64, "Male"), },
					{ name: "Female", img: baseSprite("064-f"), imgS: shinySprite("064-f"), dexSync: nationalDex(64, "Female"), },],
			},
			{
				id: 104, name: "Alakazam", img: baseSprite(65), imgS: shinySprite(65), gender: true, mega: true, dexSync: nationalDex(65), forms: [
					{ name: "Male", img: baseSprite(65), imgS: shinySprite(65), dexSync: nationalDex(65, "Male"), },
					{ name: "Female", img: baseSprite("065-f"), imgS: shinySprite("065-f"), dexSync: nationalDex(65, "Female"), },],
			},
			{ id: 105, name: "Oddish", img: baseSprite(43), imgS: shinySprite(43), dexSync: nationalDex(43), },
			{
				id: 106, name: "Gloom", img: baseSprite(44), imgS: shinySprite(44), gender: true, dexSync: nationalDex(44), forms: [
					{ name: "Male", img: baseSprite(44), imgS: shinySprite(44), dexSync: nationalDex(44, "Male"), },
					{ name: "Female", img: baseSprite("044-f"), imgS: shinySprite("044-f"), dexSync: nationalDex(44, "Female"), },],
			},
			{
				id: 107, name: "Vileplume", img: baseSprite(45), imgS: shinySprite(45), gender: true, dexSync: nationalDex(45), forms: [
					{ name: "Male", img: baseSprite(45), imgS: shinySprite(45), dexSync: nationalDex(45, "Male"), },
					{ name: "Female", img: baseSprite("045-f"), imgS: shinySprite("045-f"), dexSync: nationalDex(45, "Female"), },],
			},
			{ id: 108, name: "Bellossom", img: baseSprite(182), imgS: shinySprite(182), dexSync: nationalDex(182), },
			{ id: 109, name: "Sentret", img: baseSprite(161), imgS: shinySprite(161), dexSync: nationalDex(161), },
			{ id: 110, name: "Furret", img: baseSprite(162), imgS: shinySprite(162), dexSync: nationalDex(162), },
			{ id: 111, name: "Nincada", img: baseSprite(290), imgS: shinySprite(290), dexSync: nationalDex(290), },
			{ id: 112, name: "Ninjask", img: baseSprite(291), imgS: shinySprite(291), dexSync: nationalDex(291), },
			{ id: 113, name: "Shedinja", img: baseSprite(292), imgS: shinySprite(292), dexSync: nationalDex(292), },
			{ id: 114, name: "Espurr", img: baseSprite(677), imgS: shinySprite(677), dexSync: nationalDex(677), },
			{
				id: 115, name: "Meowstic", img: baseSprite(678), imgS: shinySprite(678), gender: true, dexSync: nationalDex(678), forms: [
					{ name: "Male", img: baseSprite(678), imgS: shinySprite(678), dexSync: nationalDex(678, "Male"), },
					{ name: "Female", img: baseSprite("678-f"), imgS: shinySprite("678-f"), dexSync: nationalDex(678, "Female"), },
				],
			},
			{ id: 116, name: "Kecleon", img: baseSprite(352), imgS: shinySprite(352), dexSync: nationalDex(352), },
			{ id: 117, name: "Honedge", img: baseSprite(679), imgS: shinySprite(679), dexSync: nationalDex(679), },
			{ id: 118, name: "Doublade", img: baseSprite(680), imgS: shinySprite(680), dexSync: nationalDex(680), },
			{ id: 119, name: "Aegislash", img: baseSprite(681), imgS: shinySprite(681), dexSync: nationalDex(681), },
			{ id: 120, name: "Venipede", img: baseSprite(543), imgS: shinySprite(543), dexSync: nationalDex(543), },
			{ id: 121, name: "Whirlipede", img: baseSprite(544), imgS: shinySprite(544), dexSync: nationalDex(544), },
			{ id: 122, name: "Scolipede", img: baseSprite(545), imgS: shinySprite(545), dexSync: nationalDex(545), },
			{ id: 123, name: "Audino", img: baseSprite(531), imgS: shinySprite(531), dexSync: nationalDex(531), },
			{ id: 124, name: "Smeargle", img: baseSprite(235), imgS: shinySprite(235), dexSync: nationalDex(235), },
			{
				id: 125, name: "Croagunk", img: baseSprite(453), imgS: shinySprite(453), gender: true, dexSync: nationalDex(453), forms: [
					{ name: "Male", img: baseSprite(453), imgS: shinySprite(453), dexSync: nationalDex(453, "Male"), },
					{ name: "Female", img: baseSprite("453-f"), imgS: shinySprite("453-f"), dexSync: nationalDex(453, "Female"), },
				],
			},
			{
				id: 126, name: "Toxicroak", img: baseSprite(454), imgS: shinySprite(454), gender: true, dexSync: nationalDex(454), forms: [
					{ name: "Male", img: baseSprite(454), imgS: shinySprite(454), dexSync: nationalDex(454, "Male"), },
					{ name: "Female", img: baseSprite("454-f"), imgS: shinySprite("454-f"), dexSync: nationalDex(454, "Female"), },
				],
			},
			{ id: 127, name: "Ducklett", img: baseSprite(580), imgS: shinySprite(580), dexSync: nationalDex(580), },
			{ id: 128, name: "Swanna", img: baseSprite(581), imgS: shinySprite(581), dexSync: nationalDex(581), },
			{ id: 129, name: "Spritzee", img: baseSprite(682), imgS: shinySprite(682), dexSync: nationalDex(682), },
			{ id: 130, name: "Aromatisse", img: baseSprite(683), imgS: shinySprite(683), dexSync: nationalDex(683), },
			{ id: 131, name: "Swirlix", img: baseSprite(684), imgS: shinySprite(684), dexSync: nationalDex(684), },
			{ id: 132, name: "Slurpuff", img: baseSprite(685), imgS: shinySprite(685), dexSync: nationalDex(685), },
			{ id: 133, name: "Volbeat", img: baseSprite(313), imgS: shinySprite(313), dexSync: nationalDex(313), },
			{ id: 134, name: "Illumise", img: baseSprite(314), imgS: shinySprite(314), dexSync: nationalDex(314), },
			{ id: 135, name: "Hoppip", img: baseSprite(187), imgS: shinySprite(187), dexSync: nationalDex(187), },
			{ id: 136, name: "Skiploom", img: baseSprite(188), imgS: shinySprite(188), dexSync: nationalDex(188), },
			{ id: 137, name: "Jumpluff", img: baseSprite(189), imgS: shinySprite(189), dexSync: nationalDex(189), },
			{ id: 138, name: "Munchlax", img: baseSprite(446), imgS: shinySprite(446), dexSync: nationalDex(446), },
			{ id: 139, name: "Snorlax", img: baseSprite(143), imgS: shinySprite(143), dexSync: nationalDex(143), },
			{ id: 140, name: "Whismur", img: baseSprite(293), imgS: shinySprite(293), dexSync: nationalDex(293), },
			{ id: 141, name: "Loudred", img: baseSprite(294), imgS: shinySprite(294), dexSync: nationalDex(294), },
			{ id: 142, name: "Exploud", img: baseSprite(295), imgS: shinySprite(295), dexSync: nationalDex(295), },
			{
				id: 143, name: "Meditite", img: baseSprite(307), imgS: shinySprite(307), gender: true, dexSync: nationalDex(307), forms: [
					{ name: "Male", img: baseSprite(307), imgS: shinySprite(307), dexSync: nationalDex(307, "Male"), },
					{ name: "Female", img: baseSprite("307-f"), imgS: shinySprite("307-f"), dexSync: nationalDex(307, "Female"), },
				],
			},
			{
				id: 144, name: "Medicham", img: baseSprite(308), imgS: shinySprite(308), gender: true, mega: true, dexSync: nationalDex(308), forms: [
					{ name: "Male", img: baseSprite(308), imgS: shinySprite(308), dexSync: nationalDex(308, "Male"), },
					{ name: "Female", img: baseSprite("308-f"), imgS: shinySprite("308-f"), dexSync: nationalDex(308, "Female"), },],
			},
			{
				id: 145, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), gender: true, dexSync: nationalDex(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), dexSync: nationalDex(41, "Male"), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), dexSync: nationalDex(41, "Female"), },],
			},
			{
				id: 146, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), gender: true, dexSync: nationalDex(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), dexSync: nationalDex(42, "Male"), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), dexSync: nationalDex(42, "Female"), },],
			},
			{ id: 147, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), dexSync: nationalDex(169), },
			{ id: 148, name: "Axew", img: baseSprite(610), imgS: shinySprite(610), dexSync: nationalDex(610), },
			{ id: 149, name: "Fraxure", img: baseSprite(611), imgS: shinySprite(611), dexSync: nationalDex(611), },
			{ id: 150, name: "Haxorus", img: baseSprite(612), imgS: shinySprite(612), dexSync: nationalDex(612), },
			{ id: 151, name: "Diancie", img: baseSprite(719), imgS: shinySprite(719), maxStatus: "caught", mythical: true, dexSync: nationalDex(719), },
			{
				id: 152, name: "Hoopa", img: baseSprite(720), imgS: shinySprite(720), otherForms: true, maxStatus: "caught", mythical: true, dexSync: nationalDex(720), forms: [
					{ name: "Confined", img: baseSprite(720), imgS: shinySprite(720), maxStatus: "caught", mythical: true, dexSync: nationalDex(720, "Confined"), },
					{ name: "Unbound", img: baseSprite("720-u"), imgS: shinySprite("720-u"), maxStatus: "caught", mythical: true, dexSync: nationalDex(720, "Unbound"), },
				],
			},
			{ id: 153, name: "Volcanion", img: baseSprite(721), imgS: shinySprite(721), maxStatus: "caught", mythical: true, dexSync: nationalDex(721), },
		]
	},
});
