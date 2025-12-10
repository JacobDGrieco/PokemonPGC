// Gen & Game
const gen = "9_2";
const game = "legendsza";
const sub = game + "md";

// Local wrappers
const lumioseDex = (...args) => _dex(game, "regional", ...args);
const mdDex = (...args) => _dex(game + "md", "regional", ...args);
const baseSprite = (id) => _sprite(game, false, id);
const baseSpriteIcon = (id) => _sprite(game, false, id, false);
const shinySprite = (id) => _sprite(game, true, id);
const shinySpriteIcon = (id) => _sprite(game, true, id, false);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const megaStone = (stone) => _megaStone(gen, stone);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const mabelsResearch = sub + "-side-quests";
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
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Hoopa", img: baseSpriteIcon(720), },
				],
			},
			{
				id: catching + "-2", text: "Catch all the Legendaries from the Mega Dimension", children: [
					{ id: catching + "-2-01", text: "Catch Kyogre", img: baseSpriteIcon(382), },
					{ id: catching + "-2-02", text: "Catch Groudon", img: baseSpriteIcon(383), },
					{ id: catching + "-2-03", text: "Catch Rayquaza", img: baseSpriteIcon(384), },
				],
			},
		],
		[story]: [
			{
				id: story + "-1", text: "Complete all Hyperspace Missions", children: [
					{ id: story + "-1-01", text: "01 - Hyperspace Lumiose Survey No. 1", },
				],
			},
		],
		[sideQuests]: [
			{ id: sideQuests + "-01", text: "EX Quest EX1 - Shine Bright Like a Gemstone", dexSync: [lumioseDex(241)], },
			{ id: sideQuests + "-02", text: "EX Quest EX2 - Project M", dexSync: [lumioseDex(242)], },
			{ id: sideQuests + "-03", text: "Quest 120 - Donuts of Unworldly Deliciousness!", },
		],
		[mabelsResearch]: [
			{ id: mabelsResearch + "-01", text: "Filling Your Mega Evolution Dex", type: "tiered", tiers: [70], tooltip: "Collect Mega Stones", },
			{ id: mabelsResearch + "-02", text: "Filling Your Hyperspace Pokedex", type: "tiered", tiers: [range(5, 200)], tooltip: "Catch unique Pokémon for your Hyperspace Pokedex", },
			{ id: mabelsResearch + "-03", text: "Investigating Hyperspace", type: "tiered", tiers: [range(10, 100)], tooltip: "Enter Hyperspace pockets", },
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
					{ id: megaStones + "-2-17", text: "Glimmorite???", img: [baseSpriteIcon("970-m"), megaStone("")], },
					{ id: megaStones + "-2-18", text: "Tatsugirite???", img: [baseSpriteIcon("978-m"), baseSpriteIcon("978-d-m"), baseSpriteIcon("978-s-m"), megaStone("")], },
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
