// Gen & Game
const gen = "9_2";
const game = "legendsza";
const sub = game + "md";

// Local wrappers
const regionalDex = (...args) => _regionalDex(game, ...args);
const fashionDex = (id) => _dex(sub, id);
const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const baseSpriteIcon = (id) => _iconSprite(gen, game, id);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);
const shinySpriteIcon = (id) => _iconSpriteShiny(gen, game, id);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const megaStone = (stone) => _megaStone(gen, stone);
const tm = (type) => _tm(gen, type);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const mabelsResearch = sub + "-mabels-research";
const megaStones = sub + "-mega-stones";
const fashion = sub + "-fashion";
const thms = sub + "-thms";

// Data
PPGC.register({
	sections: {
		[sub]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: mabelsResearch, title: "Mabel's Research" },
			{ id: megaStones, title: "Mega Stones" },
			{ id: fashion, title: "Fashion" },
			{ id: thms, title: "TMs" },
		],
	},
	tasks: {
		[catching]: [
			// {
			// 	id: catching + "-1", text: "Catch all the Legendaries", children: [
			// 		{ id: catching + "-1-01", text: "Catch Hoopa", img: baseSpriteIcon(720), },
			// 	],
			// },
			// {
			// 	id: catching + "-2", text: "Catch all the Legendaries from the Mega Dimension", children: [
			// 		{ id: catching + "-2-01", text: "Catch Kyogre", img: baseSpriteIcon(382), dexSync: [mdDex(128)], },
			// 		{ id: catching + "-2-02", text: "Catch Groudon", img: baseSpriteIcon(383) ,dexSync: [mdDex(129)], },
			// 		{ id: catching + "-2-03", text: "Catch Rayquaza", img: baseSpriteIcon(384), dexSync: [mdDex(130)],},
			// 	],
			// },

			{
				id: catching + "-3", text: "Complete all In-Game trades", children: [
					{ id: catching + "-3-01", text: "Porygon for Porygon", img: task("porygon-for-porygon"), tooltip: "The traded Porygon will come with an Upgrade being held" },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Complete the first 11 Hyperspace Missions", },
			{
				id: story + "-2", text: "Epilogue", children: [
					{ id: catching + "-2-01", text: "Hyperspace Mission 12 - The Greatest Gift", },
				],
			},
		],
		[sideQuests]: [
			{
				id: sideQuests + "-1", text: "Complete all EX Quests", children: [
					{ id: sideQuests + "-1-01", text: "EX Quest EX1 - Shine Bright Like a Gemstone" },
					{ id: sideQuests + "-1-02", text: "EX Quest EX2 - Project M" },
					{ id: sideQuests + "-1-03", text: "EX Quest EX3 - Raging Lightning" },
				],
			},
			{
				id: sideQuests + "-2", text: "Complete all Side Quests", children: [
					{ id: sideQuests + "-2-01", text: "120 - Donuts of Unworldly Deliciousness!", },
					{ id: sideQuests + "-2-02", text: "121 - A Big Ol' Battle", },
					{ id: sideQuests + "-2-03", text: "122 - Let's Golden Gooooooo!", },
					{ id: sideQuests + "-2-04", text: "123 - Chaging Toward Victory", },
					{ id: sideQuests + "-2-05", text: "124 - Multistrike, Multistrike, Multistrike Moves!", },
					{ id: sideQuests + "-2-06", text: "125 - My Hasty Jolteon", },
					{ id: sideQuests + "-2-07", text: "126 - Cyclizoom", },
					{ id: sideQuests + "-2-08", text: "127 - Mime Jr.'s First Big Job", },
					{ id: sideQuests + "-2-09", text: "128 - A Novel Adventure", },
					{ id: sideQuests + "-2-10", text: "129 -  A Work of Great Love", },
					{ id: sideQuests + "-2-11", text: "130 - A Tale of Mystery", },
					{ id: sideQuests + "-2-12", text: "131 - Rouge District's Utility Hole Covers?", },
					{ id: sideQuests + "-2-13", text: "132 - Bitter Blue Flames vs. Blazing Crimson", },
					{ id: sideQuests + "-2-14", text: "133 - Farfetch'd Ambush", },
					{ id: sideQuests + "-2-15", text: "134 - Squawking, Squabbling Squawkabilly!", },
					{ id: sideQuests + "-2-16", text: "135 - Cubone's Survey", },
					{ id: sideQuests + "-2-17", text: "136 - Fidough Loves Walks!", },
					{ id: sideQuests + "-2-18", text: "137 - Fungi-ble Goods", },
					{ id: sideQuests + "-2-19", text: "138 - Octolock Away the Pain!", },
					{ id: sideQuests + "-2-20", text: "139 - The Dauntless Raichu Duo", },
					{ id: sideQuests + "-2-21", text: "140 - A Message from Across Dimensions", },
					{ id: sideQuests + "-2-22", text: "141 - Rouge Mega Showdown", },
					{ id: sideQuests + "-2-23", text: "142 - That's Some Nacli Coffee", },
					{ id: sideQuests + "-2-24", text: "143 - Which Meowth Do You Purrfer", },
					{ id: sideQuests + "-2-25", text: "144 - Imitation Is the Sincerest Form of Flattery", },
					{ id: sideQuests + "-2-26", text: "145 - My Neightbor Tinkatuff", },
					{ id: sideQuests + "-2-27", text: "146 - Terror in the Sands", },
					{ id: sideQuests + "-2-28", text: "147 - Our Gluttonous Gulpin", },
					{ id: sideQuests + "-2-29", text: "148 - A Sorta Scary Cemetary Story", },
					{ id: sideQuests + "-2-30", text: "149 - Scovillain's Spice-Off", },
					{ id: sideQuests + "-2-31", text: "150 - Corvisquire's Search", },
					{ id: sideQuests + "-2-32", text: "151 - Hyperspatial Scuffle vs DYNA4MO!" },
					{ id: sideQuests + "-2-33", text: "152 - Hyperspatial Scuffle vs. the Fist of Justice!", },
					{ id: sideQuests + "-2-34", text: "153 - Hyperspatial Scuffle vs. the Rust Syndicate!", },
					{ id: sideQuests + "-2-35", text: "154 - Hyperspatial Scuffle vs. the SBC!", },
					{ id: sideQuests + "-2-36", text: "155 - Hyperspatial Scuffle vs. Team Flare Nouveau!", },
					{ id: sideQuests + "-2-37", text: "156 - A Special Seviper", },
					{ id: sideQuests + "-2-38", text: "157 - What;s Wafting from Wigglytuff?", },
					{ id: sideQuests + "-2-39", text: "158 - The Trainer Tipster", },
					{ id: sideQuests + "-2-40", text: "159 - Who Nicked That Snack?", },
					{ id: sideQuests + "-2-41", text: "160 - Feebas's New Friends", },
					{ id: sideQuests + "-2-42", text: "161 - Frigibax's Friend-Finding", },
					{ id: sideQuests + "-2-43", text: "162 - Maybe Morpeko Guards?", },
					{ id: sideQuests + "-2-44", text: "163 - Help Us Pick a Name!", },
					{ id: sideQuests + "-2-45", text: "164 - Kiosk Conundrum", },
					{ id: sideQuests + "-2-46", text: "165 - The Lumiose Museum Heist", },
					{ id: sideQuests + "-2-47", text: "166 - The Joy of Mimicry", },
					{ id: sideQuests + "-2-48", text: "167 - Porygon's Polygon Count", },
					{ id: sideQuests + "-2-49", text: "168 - Rêve de Musharna", },
					{ id: sideQuests + "-2-50", text: "169 - A Gallant Indeedee", },
					{ id: sideQuests + "-2-51", text: "170 - Rotom Showcase", },
					{ id: sideQuests + "-2-52", text: "171 - Awaken, Cofagrigus!", },
					{ id: sideQuests + "-2-53", text: "172 - Sawk vs. Throh", },
					{ id: sideQuests + "-2-54", text: "173 - Be a Defenseless Dodger!", },
					{ id: sideQuests + "-2-55", text: "174 - I Still Remember the Taste", },
					{ id: sideQuests + "-2-56", text: "175 - Romance avec Purrloin", },
					{ id: sideQuests + "-2-57", text: "176 - Ultimate Beans of Supreme Ultimacy", },
					{ id: sideQuests + "-2-58", text: "177 - Triste Dreams of Tatsugiri", },
					{ id: sideQuests + "-2-59", text: "178 - Dondozo Down in the Dumps", },
					{ id: sideQuests + "-2-60", text: "179 - A Sub-30-Second Loss", },
					{ id: sideQuests + "-2-61", text: "180 - A Wild Rosebud", },
					{ id: sideQuests + "-2-62", text: "181 - Hyperspatial Slugfest vs. DYNA4MO", },
					{ id: sideQuests + "-2-63", text: "182 - Hyperspatial Slugfest vs. the Fist of Justice", },
					{ id: sideQuests + "-2-64", text: "183 - Hyperspatial Slugfest vs. the Rust Syndicate", },
					{ id: sideQuests + "-2-65", text: "184 - Hyperspatial Slugfest vs. the SBC", },
					{ id: sideQuests + "-2-66", text: "185 - Hyperspatial Slugfest vs. Team Flare Nouveau", },
					{ id: sideQuests + "-2-67", text: "186 - The Ultimate Techniques", },
					{ id: sideQuests + "-2-68", text: "187 - The Dauntless Dragalge Trainer", },
					{ id: sideQuests + "-2-69", text: "188 - Start Special Scanning", },
					{ id: sideQuests + "-2-70", text: "189 - Siblings of the Sky", },
					{ id: sideQuests + "-2-71", text: "190 - A Mimikyu for My Cutie", },
					{ id: sideQuests + "-2-72", text: "191 - Collecting Four Drives", },
					{ id: sideQuests + "-2-73", text: "192 - The Stealthy Shadow", },
					{ id: sideQuests + "-2-74", text: "193 - Dreams of Meltan", },
					{ id: sideQuests + "-2-75", text: "194 - Volcanion Unleashed", },
					{ id: sideQuests + "-2-76", text: "195 - Restarting Magearna", },
					{ id: sideQuests + "-2-77", text: "196 - The Djinn Unbound", },
					{ id: sideQuests + "-2-78", text: "197 - Ultra-Hardcore Lucario Showdown", },
					{ id: sideQuests + "-2-79", text: "198 - Lida's Lament", },
					{ id: sideQuests + "-2-80", text: "199 - Naveen's Newfound Determination", },
					{ id: sideQuests + "-2-81", text: "200 - Here in Lumiose City", },
				],
			},
		],
		[mabelsResearch]: [
			{ id: mabelsResearch + "-01", text: "Filling Your Mega Evolution Dex", type: "tiered", tiers: [range(70, 90, 5)], tooltip: "Collect Mega Stones", },
			{ id: mabelsResearch + "-02", text: "Filling Your Hyperspace Pokedex", type: "tiered", tiers: [range(5, 130, 5)], tooltip: "Catch unique Pokémon for your Hyperspace Pokedex", },
			{ id: mabelsResearch + "-03", text: "Investigating Hyperspace", type: "tiered", tiers: [range(10, 100, 10), range(150, 450, 50)], tooltip: "Enter Hyperspace pockets", },
		],
		[megaStones]: [
			{
				id: megaStones + "-1", text: "Get Mega Stones from EX Quests", children: [
					{ id: megaStones + "-1-01", text: "Diancite", img: [baseSpriteIcon("719-m"), megaStone("diancite")], },
					{ id: megaStones + "-1-02", text: "Mewtwonite X", img: [baseSpriteIcon("150-mx"), megaStone("mewtwonite-x")], },
					{ id: megaStones + "-1-03", text: "Mewtownite Y", img: [baseSpriteIcon("150-my"), megaStone("mewtwonite-y")], },
				],
			},
			{
				id: megaStones + "-2", text: "Get other Mega Stones", children: [
					{ id: megaStones + "-2-01", text: "Raichunite X", img: [baseSpriteIcon("026-mx"), megaStone("raichunite-x")], },
					{ id: megaStones + "-2-02", text: "Raichunite Y", img: [baseSpriteIcon("026-my"), megaStone("raichunite-y")], },
					{ id: megaStones + "-2-03", text: "Chimechite", img: [baseSpriteIcon("358-m"), megaStone("chimechite")], },
					{ id: megaStones + "-2-04", text: "Absolite Z", img: [baseSpriteIcon("359-mz"), megaStone("absolite-z")], },
					{ id: megaStones + "-2-05", text: "Staraptite", img: [baseSpriteIcon("398-m"), megaStone("staraptite")], },
					{ id: megaStones + "-2-06", text: "Garchompite Z", img: [baseSpriteIcon("445-mz"), megaStone("garchompite-z")], },
					{ id: megaStones + "-2-07", text: "Lucarionite Z", img: [baseSpriteIcon("448-mz"), megaStone("lucarionite-z")], },
					{ id: megaStones + "-2-08", text: "Heatranite", img: [baseSpriteIcon("485-m"), megaStone("heatranite")], },
					{ id: megaStones + "-2-09", text: "Darkranite", img: [baseSpriteIcon("491-m"), megaStone("darkranite")], },
					{ id: megaStones + "-2-10", text: "Golurkite", img: [baseSpriteIcon("623-m"), megaStone("golurkite")], },
					{ id: megaStones + "-2-11", text: "Meowsticite", img: [baseSpriteIcon("678-m"), megaStone("meowsticite")], },
					{ id: megaStones + "-2-12", text: "Crabominite", img: [baseSpriteIcon("740-m"), megaStone("crabominite")], },
					{ id: megaStones + "-2-13", text: "Golisopite", img: [baseSpriteIcon("768-m"), megaStone("golisopite")], },
					{ id: megaStones + "-2-14", text: "Magearnite", img: [baseSpriteIcon("801-m"), megaStone("magearnite"), baseSpriteIcon("801-o-m")], },
					{ id: megaStones + "-2-15", text: "Zeraorite", img: [baseSpriteIcon("807-m"), megaStone("zeraorite")], },
					{ id: megaStones + "-2-16", text: "Scovillainite", img: [baseSpriteIcon("952-m"), megaStone("scovillainite")], },
					{ id: megaStones + "-2-17", text: "Glimmoranite", img: [baseSpriteIcon("970-m"), megaStone("glimmoranite")], },
					{ id: megaStones + "-2-18", text: "Tatsugirinite", img: [baseSpriteIcon("978-m"), baseSpriteIcon("978-d-m"), baseSpriteIcon("978-s-m"), megaStone("tatsugirinite")], },
				],
			},
		],
		[thms]: [
			{ id: thms + "-01", text: "TM 108: Comet Punch", img: tm("normal"), },
			{ id: thms + "-02", text: "TM 109: Facade", img: tm("normal"), },
			{ id: thms + "-03", text: "TM 110: Chilling Water", img: tm("water"), },
			{ id: thms + "-04", text: "TM 111: Sing", img: tm("normal"), },
			{ id: thms + "-05", text: "TM 112: Acid Spray", img: tm("poison"), },
			{ id: thms + "-06", text: "TM 113: Low Sweep", img: tm("fighting"), },
			{ id: thms + "-07", text: "TM 114: Flame Charge", img: tm("fire"), },
			{ id: thms + "-08", text: "TM 115: Trailblaze", img: tm("grass"), },
			{ id: thms + "-09", text: "TM 116: Pay Day", img: tm("normal"), },
			{ id: thms + "-10", text: "TM 117: Silver Wind", img: tm("bug"), },
			{ id: thms + "-11", text: "TM 118: Shadow Punch", img: tm("ghost"), },
			{ id: thms + "-12", text: "TM 119: Ominous Wind", img: tm("ghost"), },
			{ id: thms + "-13", text: "TM 120: Ancient Power", img: tm("rock"), },
			{ id: thms + "-14", text: "TM 121: Torment", img: tm("dark"), },
			{ id: thms + "-15", text: "TM 122: False Swipe", img: tm("normal"), },
			{ id: thms + "-16", text: "TM 123: Poison Fang", img: tm("poison"), },
			{ id: thms + "-17", text: "TM 124: Psychic Fangs", img: tm("psychic"), },
			{ id: thms + "-18", text: "TM 125: Mimic", img: tm("normal"), },
			{ id: thms + "-19", text: "TM 126: Magnet Bomb", img: tm("steel"), },
			{ id: thms + "-20", text: "TM 127: Dream Eater", img: tm("psychic"), },
			{ id: thms + "-21", text: "TM 128: Seed Bomb", img: tm("grass"), },
			{ id: thms + "-22", text: "TM 129: Circle Throw", img: tm("fighting"), },
			{ id: thms + "-23", text: "TM 130: Charge Beam", img: tm("electric"), },
			{ id: thms + "-24", text: "TM 131: Drain Punch", img: tm("fighting"), },
			{ id: thms + "-25", text: "TM 132: Double Hit", img: tm("normal"), },
			{ id: thms + "-26", text: "TM 133: Blaze Kick", img: tm("fire"), },
			{ id: thms + "-27", text: "TM 134: Dual Wingbeat", img: tm("flying"), },
			{ id: thms + "-28", text: "TM 135: Dual Chop", img: tm("dragon"), },
			{ id: thms + "-29", text: "TM 136: Scorching Sands", img: tm("ground"), },
			{ id: thms + "-30", text: "TM 137: Storm Throw", img: tm("fighting"), },
			{ id: thms + "-31", text: "TM 138: Frost Breath", img: tm("ice"), },
			{ id: thms + "-32", text: "TM 139: Swagger", img: tm("normal"), },
			{ id: thms + "-33", text: "TM 140: Muddy Water", img: tm("water"), },
			{ id: thms + "-34", text: "TM 141: Fake Out", img: tm("normal"), },
			{ id: thms + "-35", text: "TM 142: First Impression", img: tm("bug"), },
			{ id: thms + "-36", text: "TM 143: Scale Shot", img: tm("dragon"), },
			{ id: thms + "-37", text: "TM 144: Triple Axel", img: tm("ice"), },
			{ id: thms + "-38", text: "TM 145: Razor Wind", img: tm("normal"), },
			{ id: thms + "-39", text: "TM 146: Skull Bash", img: tm("normal"), },
			{ id: thms + "-40", text: "TM 147: Tri Attack", img: tm("normal"), },
			{ id: thms + "-41", text: "TM 148: Scald", img: tm("water"), },
			{ id: thms + "-42", text: "TM 149: Icicle Spear", img: tm("ice"), },
			{ id: thms + "-43", text: "TM 150: Vacuum Wave", img: tm("fighting"), },
			{ id: thms + "-44", text: "TM 151: Petal Dance", img: tm("grass"), },
			{ id: thms + "-45", text: "TM 152: Solar Blade", img: tm("grass"), },
			{ id: thms + "-46", text: "TM 153: Sky Attack", img: tm("flying"), },
			{ id: thms + "-47", text: "TM 154: Fissure", img: tm("ground"), },
			{ id: thms + "-48", text: "TM 155: Sheer Cold", img: tm("ice"), },
			{ id: thms + "-49", text: "TM 156: Meteor Beam", img: tm("rock"), },
			{ id: thms + "-50", text: "TM 157: Steel Beam", img: tm("steel"), },
			{ id: thms + "-51", text: "TM 158: Blast Burn", img: tm("fire"), },
			{ id: thms + "-52", text: "TM 159: Hydro Cannon", img: tm("water"), },
			{ id: thms + "-53", text: "TM 160:  Frenzy Plant", img: tm("grass"), },
		]
	},
});
