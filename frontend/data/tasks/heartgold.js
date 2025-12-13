// Gen & Game
const gen = 4;
const game = "heartgold";

// Local wrappers
const regionalDex = (...args) => _dex(game, "regional", ...args);
const nationalDex = (...args) => _dex(game, "national", ...args);
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: activities, title: "Activities" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: thms, title: "TMs/HMs" },
			{ id: distributions, title: "Distributions" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Ho-Oh", img: baseSprite(250), dexSync: [regionalDex(150), nationalDex(250)], },
				],
			},
		],
		[thms]: [
			{
				id: thms + "-1", text: "Collect all HMs", children: [
					{ id: thms + "-1-01", text: "HM01: Cut", img: hm("normal") },
					{ id: thms + "-1-02", text: "HM02: Fly", img: hm("flying") },
					{ id: thms + "-1-03", text: "HM03: Surf", img: hm("water") },
					{ id: thms + "-1-04", text: "HM04: Strength", img: hm("normal") },
					{ id: thms + "-1-05", text: "HM05: Whirlpool", img: hm("water") },
					{ id: thms + "-1-06", text: "HM06: Rock Smash", img: hm("fighting") },
					{ id: thms + "-1-07", text: "HM07: Waterfall", img: hm("water") },
					{ id: thms + "-1-08", text: "HM08: Rock Climb", img: hm("normal") },
				],
			},
			{
				id: thms + "-2", text: "Collect all TMs", children: [
					{ id: thms + "-2-01", text: "TM 01 - Focus Punch", img: tm("fighting") },
					{ id: thms + "-2-02", text: "TM 02 - Dragon Claw", img: tm("dragon") },
					{ id: thms + "-2-03", text: "TM 03 - Water Pulse", img: tm("water") },
					{ id: thms + "-2-04", text: "TM 04 - Calm Mind", img: tm("psychic") },
					{ id: thms + "-2-05", text: "TM 05 - Roar", img: tm("normal") },
					{ id: thms + "-2-06", text: "TM 06 - Toxic", img: tm("poison") },
					{ id: thms + "-2-07", text: "TM 07 - Hail", img: tm("ice") },
					{ id: thms + "-2-08", text: "TM 08 - Bulk Up", img: tm("fighting") },
					{ id: thms + "-2-09", text: "TM 09 - Bullet Seed", img: tm("grass") },
					{ id: thms + "-2-10", text: "TM 10 - Hidden Power", img: tm("normal") },
					{ id: thms + "-2-11", text: "TM 11 - Sunny Day", img: tm("fire") },
					{ id: thms + "-2-12", text: "TM 12 - Taunt", img: tm("dark") },
					{ id: thms + "-2-13", text: "TM 13 - Ice Beam", img: tm("ice") },
					{ id: thms + "-2-14", text: "TM 14 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-15", text: "TM 15 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-16", text: "TM 16 - Light Screen", img: tm("psychic") },
					{ id: thms + "-2-17", text: "TM 17 - Protect", img: tm("normal") },
					{ id: thms + "-2-18", text: "TM 18 - Rain Dance", img: tm("water") },
					{ id: thms + "-2-19", text: "TM 19 - Giga Drain", img: tm("grass") },
					{ id: thms + "-2-20", text: "TM 20 - Safeguard", img: tm("normal") },
					{ id: thms + "-2-21", text: "TM 21 - Frustration", img: tm("normal") },
					{ id: thms + "-2-22", text: "TM 22 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-23", text: "TM 23 - Iron Tail", img: tm("steel") },
					{ id: thms + "-2-24", text: "TM 24 - Thunderbolt", img: tm("electric") },
					{ id: thms + "-2-25", text: "TM 25 - Thunder", img: tm("electric") },
					{ id: thms + "-2-26", text: "TM 26 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-27", text: "TM 27 - Return", img: tm("normal") },
					{ id: thms + "-2-28", text: "TM 28 - Dig", img: tm("ground") },
					{ id: thms + "-2-29", text: "TM 29 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-30", text: "TM 30 - Shadow Ball", img: tm("ghost") },
					{ id: thms + "-2-31", text: "TM 31 - Brick Break", img: tm("fighting") },
					{ id: thms + "-2-32", text: "TM 32 - Double Team", img: tm("normal") },
					{ id: thms + "-2-33", text: "TM 33 - Reflect", img: tm("psychic") },
					{ id: thms + "-2-34", text: "TM 34 - Shock Wave", img: tm("electric") },
					{ id: thms + "-2-35", text: "TM 35 - Flamethrower", img: tm("fire") },
					{ id: thms + "-2-36", text: "TM 36 - Sludge Bomb", img: tm("poison") },
					{ id: thms + "-2-37", text: "TM 37 - Sandstorm", img: tm("rock") },
					{ id: thms + "-2-38", text: "TM 38 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-39", text: "TM 39 - Rock Tomb", img: tm("rock") },
					{ id: thms + "-2-40", text: "TM 40 - Aerial Ace", img: tm("flying") },
					{ id: thms + "-2-41", text: "TM 41 - Torment", img: tm("dark") },
					{ id: thms + "-2-42", text: "TM 42 - Facade", img: tm("normal") },
					{ id: thms + "-2-43", text: "TM 43 - Secret Power", img: tm("normal") },
					{ id: thms + "-2-44", text: "TM 44 - Rest", img: tm("psychic") },
					{ id: thms + "-2-45", text: "TM 45 - Attract", img: tm("normal") },
					{ id: thms + "-2-46", text: "TM 46 - Thief", img: tm("dark") },
					{ id: thms + "-2-47", text: "TM 47 - Steel Wing", img: tm("steel") },
					{ id: thms + "-2-48", text: "TM 48 - Skill Swap", img: tm("psychic") },
					{ id: thms + "-2-49", text: "TM 49 - Snatch", img: tm("dark") },
					{ id: thms + "-2-50", text: "TM 50 - Overheat", img: tm("fire") },
					{ id: thms + "-2-51", text: "TM 51 - Roost", img: tm("flying") },
					{ id: thms + "-2-52", text: "TM 52 - Focus Blast", img: tm("fighting") },
					{ id: thms + "-2-53", text: "TM 53 - Energy Ball", img: tm("grass") },
					{ id: thms + "-2-54", text: "TM 54 - False Swipe", img: tm("normal") },
					{ id: thms + "-2-55", text: "TM 55 - Brine", img: tm("water") },
					{ id: thms + "-2-56", text: "TM 56 - Fling", img: tm("dark") },
					{ id: thms + "-2-57", text: "TM 57 - Charge Beam", img: tm("electric") },
					{ id: thms + "-2-58", text: "TM 58 - Endure", img: tm("normal") },
					{ id: thms + "-2-59", text: "TM 59 - Dragon Pulse", img: tm("dragon") },
					{ id: thms + "-2-60", text: "TM 60 - Drain Punch", img: tm("fighting") },
					{ id: thms + "-2-61", text: "TM 61 - Will-O-Wisp", img: tm("fire") },
					{ id: thms + "-2-62", text: "TM 62 - Silver Wind", img: tm("bug") },
					{ id: thms + "-2-63", text: "TM 63 - Embargo", img: tm("dark") },
					{ id: thms + "-2-64", text: "TM 64 - Explosion", img: tm("normal") },
					{ id: thms + "-2-65", text: "TM 65 - Shadow Claw", img: tm("ghost") },
					{ id: thms + "-2-66", text: "TM 66 - Payback", img: tm("dark") },
					{ id: thms + "-2-67", text: "TM 67 - Recycle", img: tm("normal") },
					{ id: thms + "-2-68", text: "TM 68 - Giga Impact", img: tm("normal") },
					{ id: thms + "-2-69", text: "TM 69 - Rock Polish", img: tm("rock") },
					{ id: thms + "-2-70", text: "TM 70 - Flash", img: tm("normal") },
					{ id: thms + "-2-71", text: "TM 71 - Stone Edge", img: tm("rock") },
					{ id: thms + "-2-72", text: "TM 72 - Avalanche", img: tm("ice") },
					{ id: thms + "-2-73", text: "TM 73 - Thunder Wave", img: tm("electric") },
					{ id: thms + "-2-74", text: "TM 74 - Gyro Ball", img: tm("steel") },
					{ id: thms + "-2-75", text: "TM 75 - Swords Dance", img: tm("normal") },
					{ id: thms + "-2-76", text: "TM 76 - Stealth Rock", img: tm("rock") },
					{ id: thms + "-2-77", text: "TM 77 - Psych Up", img: tm("normal") },
					{ id: thms + "-2-78", text: "TM 78 - Captivate", img: tm("normal") },
					{ id: thms + "-2-79", text: "TM 79 - Dark Pulse", img: tm("dark") },
					{ id: thms + "-2-80", text: "TM 80 - Rock Slide", img: tm("rock") },
					{ id: thms + "-2-81", text: "TM 81 - X-Scissor", img: tm("bug") },
					{ id: thms + "-2-82", text: "TM 82 - Sleep Talk", img: tm("normal") },
					{ id: thms + "-2-83", text: "TM 83 - Natural Gift", img: tm("normal") },
					{ id: thms + "-2-84", text: "TM 84 - Poison Jab", img: tm("poison") },
					{ id: thms + "-2-85", text: "TM 85 - Dream Eater", img: tm("psychic") },
					{ id: thms + "-2-86", text: "TM 86 - Grass Knot", img: tm("grass") },
					{ id: thms + "-2-87", text: "TM 87 - Swagger", img: tm("normal") },
					{ id: thms + "-2-88", text: "TM 88 - Pluck", img: tm("flying") },
					{ id: thms + "-2-89", text: "TM 89 - U-turn", img: tm("bug") },
					{ id: thms + "-2-90", text: "TM 90 - Substitute", img: tm("normal") },
					{ id: thms + "-2-91", text: "TM 91 - Flash Cannon", img: tm("steel") },
					{ id: thms + "-2-92", text: "TM 92 - Trick Room", img: tm("psychic") },
				]
			},
		]
	},
});
