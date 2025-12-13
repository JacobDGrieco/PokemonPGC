// Gen & Game
const gen = "7_2";
const game = "letsgoeevee";

// Local wrappers
const regionalDex = (...args) => _dex(game, "regional", ...args);
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const megaStone = (stone) => _megaStone(gen, stone);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const megaStones = game + "-mega-stones";
const fashion = game + "-fashion";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: megaStones, title: "Mega Stones" },
			{ id: fashion, title: "Fashion" },
			{ id: thms, title: "TMs/STs" },
			{ id: distributions, title: "Distributions" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Articuno", img: baseSprite(144), imgS: shinySprite(144), tooltip: "Found at the bottom of the Seafoam Islands", dexSync: [regionalDex(144)] },
					{ id: catching + "-1-02", text: "Catch Zapdos", img: baseSprite(145), imgS: shinySprite(145), tooltip: "Found at the end of the Power Plant", dexSync: [regionalDex(145)] },
					{ id: catching + "-1-03", text: "Catch Moltres", img: baseSprite(146), imgS: shinySprite(146), tooltip: "Found in the middle of Victory Road", dexSync: [regionalDex(146)] },
					{ id: catching + "-1-04", text: "Catch Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tooltip: "Found at the bottom of Cerulean Cave", dexSync: [regionalDex(150)] },
				],
			},
		],
		[megaStones]: [
			{ id: megaStones + "-01", text: "Venusaurite", img: [baseSprite("003-m"), megaStone("venusaurite")], },
			{ id: megaStones + "-02", text: "Charizardite X", img: [baseSprite("006-mx"), megaStone("charizardite-x")], },
			{ id: megaStones + "-03", text: "Charizardite Y", img: [baseSprite("006-my"), megaStone("charizardite-y")], },
			{ id: megaStones + "-04", text: "Blastoisinite", img: [baseSprite("009-m"), megaStone("blastoisinite")], },
			{ id: megaStones + "-05", text: "Beedrillite", img: [baseSprite("015-m"), megaStone("beedrillite")], },
			{ id: megaStones + "-06", text: "Pidgeotite", img: [baseSprite("018-m"), megaStone("pidgeotite")], },
			{ id: megaStones + "-07", text: "Alakazite", img: [baseSprite("065-m"), megaStone("alakazite")], },
			{ id: megaStones + "-08", text: "Slowbronite", img: [baseSprite("080-m"), megaStone("slowbronite")], },
			{ id: megaStones + "-09", text: "Gengarite", img: [baseSprite("094-m"), megaStone("gengarite")], },
			{ id: megaStones + "-10", text: "Kangaskhanite", img: [baseSprite("115-m"), megaStone("kangaskhanite")], },
			{ id: megaStones + "-11", text: "Pinsirite", img: [baseSprite("127-m"), megaStone("pinsirite")], },
			{ id: megaStones + "-12", text: "Gyaradosite", img: [baseSprite("130-m"), megaStone("gyaradosite")], },
			{ id: megaStones + "-13", text: "Aerodactylite", img: [baseSprite("142-m"), megaStone("aerodactylite")], },
			{ id: megaStones + "-14", text: "Mewtwonite X", img: [baseSprite("150-mx"), megaStone("mewtwonite-x")], },
			{ id: megaStones + "-15", text: "Mewtwonite Y", img: [baseSprite("150-my"), megaStone("mewtwonite-y")], },
		],
		[thms]: [
			{
				id: thms + "-1", text: "Obtain all Secret Techniques", children: [
					{ id: thms + "-1-01", text: "Chop Down", img: hm("chop-down") },
					{ id: thms + "-1-02", text: "Light Up", img: hm("light-up") },
					{ id: thms + "-1-03", text: "Sea Skim", img: hm("sea-skim") },
					{ id: thms + "-1-04", text: "Sky Dash", img: hm("sky-dash") },
					{ id: thms + "-1-05", text: "Strong Push", img: hm("strong-push") },
				],
			},
			{
				id: thms + "-2", text: "Collect all TMs", children: [
					{ id: thms + "-2-01", text: "TM 01 - Headbutt", img: tm("normal") },
					{ id: thms + "-2-02", text: "TM 02 - Taunt", img: tm("dark") },
					{ id: thms + "-2-03", text: "TM 03 - Helping Hand", img: tm("normal") },
					{ id: thms + "-2-04", text: "TM 04 - Teleport", img: tm("psychic") },
					{ id: thms + "-2-05", text: "TM 05 - Rest", img: tm("psychic") },
					{ id: thms + "-2-06", text: "TM 06 - Light Screen", img: tm("psychic") },
					{ id: thms + "-2-07", text: "TM 07 - Protect", img: tm("normal") },
					{ id: thms + "-2-08", text: "TM 08 - Substitute", img: tm("normal") },
					{ id: thms + "-2-09", text: "TM 09 - Reflect", img: tm("psychic") },
					{ id: thms + "-2-10", text: "TM 10 - Dig", img: tm("ground") },
					{ id: thms + "-2-11", text: "TM 11 - Will-O-Wisp", img: tm("fire") },
					{ id: thms + "-2-12", text: "TM 12 - Facade", img: tm("normal") },
					{ id: thms + "-2-13", text: "TM 13 - Brick Break", img: tm("fighting") },
					{ id: thms + "-2-14", text: "TM 14 - Fly", img: tm("flying") },
					{ id: thms + "-2-15", text: "TM 15 - Seismic Toss", img: tm("fighting") },
					{ id: thms + "-2-16", text: "TM 16 - Thunder Wave", img: tm("electric") },
					{ id: thms + "-2-17", text: "TM 17 - Dragon Tail", img: tm("dragon") },
					{ id: thms + "-2-18", text: "TM 18 - U-turn", img: tm("bug") },
					{ id: thms + "-2-19", text: "TM 19 - Iron Tail", img: tm("steel") },
					{ id: thms + "-2-20", text: "TM 20 - Dark Pulse", img: tm("dark") },
					{ id: thms + "-2-21", text: "TM 21 - Foul Play", img: tm("dark") },
					{ id: thms + "-2-22", text: "TM 22 - Rock Slide", img: tm("rock") },
					{ id: thms + "-2-23", text: "TM 23 - Thunder Punch", img: tm("electric") },
					{ id: thms + "-2-24", text: "TM 24 - X-Scissor", img: tm("bug") },
					{ id: thms + "-2-25", text: "TM 25 - Waterfall", img: tm("water") },
					{ id: thms + "-2-26", text: "TM 26 - Poison Jab", img: tm("poison") },
					{ id: thms + "-2-27", text: "TM 27 - Toxic", img: tm("poison") },
					{ id: thms + "-2-28", text: "TM 28 - Tri Attack", img: tm("normal") },
					{ id: thms + "-2-29", text: "TM 29 - Scald", img: tm("water") },
					{ id: thms + "-2-30", text: "TM 30 - Bulk Up", img: tm("fighting") },
					{ id: thms + "-2-31", text: "TM 31 - Fire Punch", img: tm("fire") },
					{ id: thms + "-2-32", text: "TM 32 - Dazzling Gleam", img: tm("fairy") },
					{ id: thms + "-2-33", text: "TM 33 - Calm Mind", img: tm("psychic") },
					{ id: thms + "-2-34", text: "TM 34 - Dragon Pulse", img: tm("dragon") },
					{ id: thms + "-2-35", text: "TM 35 - Ice Punch", img: tm("ice") },
					{ id: thms + "-2-36", text: "TM 36 - Thunderbolt", img: tm("electric") },
					{ id: thms + "-2-37", text: "TM 37 - Flamethrower", img: tm("fire") },
					{ id: thms + "-2-38", text: "TM 38 - Thunder", img: tm("electric") },
					{ id: thms + "-2-39", text: "TM 39 - Outrage", img: tm("dragon") },
					{ id: thms + "-2-40", text: "TM 40 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-41", text: "TM 41 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-42", text: "TM 42 - Self-Destruct", img: tm("normal") },
					{ id: thms + "-2-43", text: "TM 43 - Shadow Ball", img: tm("ghost") },
					{ id: thms + "-2-44", text: "TM 44 - Play Rough", img: tm("fairy") },
					{ id: thms + "-2-45", text: "TM 45 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-46", text: "TM 46 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-47", text: "TM 47 - Surf", img: tm("water") },
					{ id: thms + "-2-48", text: "TM 48 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-49", text: "TM 49 - Superpower", img: tm("fighting") },
					{ id: thms + "-2-50", text: "TM 50 - Roost", img: tm("flying") },
					{ id: thms + "-2-51", text: "TM 51 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-52", text: "TM 52 - Sludge Bomb", img: tm("poison") },
					{ id: thms + "-2-53", text: "TM 53 - Mega Drain", img: tm("grass") },
					{ id: thms + "-2-54", text: "TM 54 - Flash Cannon", img: tm("steel") },
					{ id: thms + "-2-55", text: "TM 55 - Ice Beam", img: tm("ice") },
					{ id: thms + "-2-56", text: "TM 56 - Stealth Rock", img: tm("rock") },
					{ id: thms + "-2-57", text: "TM 57 - Pay Day", img: tm("normal") },
					{ id: thms + "-2-58", text: "TM 58 - Drill Run", img: tm("ground") },
					{ id: thms + "-2-59", text: "TM 59 - Dream Eater", img: tm("psychic") },
					{ id: thms + "-2-60", text: "TM 60 - Megahorn", img: tm("bug") }
				]
			}
		]
	},
});
