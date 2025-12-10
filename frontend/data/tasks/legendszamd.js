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
	},
});
