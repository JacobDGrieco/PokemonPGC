// Gen & Game
const gen = 4;
const game = "platinum";

// Local wrappers
const regionalDex = (...args) => _dex(game, "regional", ...args);
const nationalDex = (...args) => _dex(game, "national", ...args);
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
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
					{ id: catching + "-1-01", text: "Catch Dialga", img: baseSprite("483"), dexSync: [regionalDex(149), nationalDex(483)] },
					{ id: catching + "-1-02", text: "Trade for Palkia", img: baseSprite("484"), dexSync: [regionalDex(150), nationalDex(484)] },
					{ id: catching + "-1-03", text: "Catch Giratina", img: baseSprite("487"), dexSync: [nationalDex(487)] },
					{ id: catching + "-1-04", text: "Catch Uxie", img: baseSprite("480"), dexSync: [regionalDex(146), nationalDex(480)] },
					{ id: catching + "-1-05", text: "Catch Mesprit", img: baseSprite("481"), dexSync: [regionalDex(147), nationalDex(481)] },
					{ id: catching + "-1-06", text: "Catch Azelf", img: baseSprite("482"), dexSync: [regionalDex(148), nationalDex(482)] },
					{ id: catching + "-1-07", text: "Catch Heatran", img: baseSprite("485"), dexSync: [nationalDex(485)] },
					{ id: catching + "-1-08", text: "Catch Regigigas", img: baseSprite("486"), dexSync: [nationalDex(486)] },
					{ id: catching + "-1-09", text: "Catch Cresselia", img: baseSprite("488"), dexSync: [nationalDex(488)] },
					{ id: catching + "-1-10", text: "Catch Articuno", img: baseSprite("144"), dexSync: [nationalDex(144)] },
					{ id: catching + "-1-11", text: "Catch Zapdos", img: baseSprite("145"), dexSync: [nationalDex(145)] },
					{ id: catching + "-1-12", text: "Catch Moltres", img: baseSprite("146"), dexSync: [nationalDex(146)] },
				],
			},
			{ id: catching + "-2", text: "Catch Rotom", img: baseSprite("479") },
			{ id: catching + "-3", text: "Catch Spiritomb", img: baseSprite("442") },
			{
				id: catching + "-4", text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: catching + "-4-01", text: "Togepi Egg", img: baseSprite("175") },
					{ id: catching + "-4-02", text: "Eevee", img: baseSprite("133") },
					{ id: catching + "-4-03", text: "Riolu", img: baseSprite("447") },
				]
			},
			{
				id: catching + "-5", text: "Complete all In-Game Trades", children: [
					{ id: catching + "-5-01", text: "Machop for Abra", img: task("machop-for-abra") },
					{ id: catching + "-5-02", text: "Buizel for Chatot", img: task("buizel-for-chatot") },
					{ id: catching + "-5-03", text: "Medicham for Haunter", img: task("medicham-for-haunter"), tooltip: "This Haunter will have an Everstone" },
					{ id: catching + "-5-04", text: "Finneon for Magikarp", img: task("finneon-for-magikarp") },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: _badges(["coal", "forest", "cobble", "fen", "relic", "mine", "icicle", "beacon"]), noCenter: true },
			{
				id: story + "-2", text: "Epilogue", children: [
					{ id: story + "-2-01", text: "Venture to the bottom of Mt. Stark" },
					{ id: story + "-2-02", text: "Go on patrol" },
					{ id: story + "-2-03", text: "Team Galactic Remnants" },
					{ id: story + "-2-04", text: "Showdown with Mars and Jupiter" },
					{ id: story + "-2-05", text: "Chase Charon!" },
					{ id: story + "-2-06", text: "Team up with Buck" },
					{ id: story + "-2-07", text: "Looker to the rescue!" },
					{ id: story + "-2-08", text: "Use Rock Climb" },
				],
			},
		],
		[battle]: [
			{ id: battle + "-1", text: "Re-battle the Elite 4 after obtaining the National Dex" },
			{
				id: battle + "-2", text: "Battle Barry at all 3 levels", tooltip: "Find Barry in the Survival Area\nMust defeat the Elite 4 10 times to get Barry to appear", children: [
					{ id: battle + "-2-01", text: "Phase 1", tooltip: "Levels are 59-65" },
					{ id: battle + "-2-02", text: "Phase 2", tooltip: "Levels are 69-75" },
					{ id: battle + "-2-03", text: "Phase 3", tooltip: "Levels are 79-85" },
				],
			},
			{
				id: battle + "-3", text: "Obtain all the Silver Medals in the Battle Frontier", children: [
					{ id: battle + "-3-01", text: "Factory Head Thorton" },
					{ id: battle + "-3-02", text: "Tycoon Tower Palmer" },
					{ id: battle + "-3-03", text: "Castle Valet Darach" },
					{ id: battle + "-3-04", text: "Aracde Star Dahila" },
					{ id: battle + "-3-05", text: "Hall Matron Argenta" },
				],
			},
			{
				id: battle + "-4", text: "Obtain all the Colored Medals in the Battle Frontier", children: [
					{ id: battle + "-4-01", text: "Factory Head Thorton" },
					{ id: battle + "-4-02", text: "Tycoon Tower Palmer" },
					{ id: battle + "-4-03", text: "Castle Valet Darach" },
					{ id: battle + "-4-04", text: "Aracde Star Dahila" },
					{ id: battle + "-4-05", text: "Hall Matron Argenta" },
				],
			},
		],
		[upgrades]: [
			{ id: upgrades + "-1", text: "Obtain the National Dex" },
			{ id: upgrades + "-2", text: "Obtain the Mystery Gift option" },
			{
				id: upgrades + "-3", text: "Obtain the Black 4 Star Trainer Card", children: [
					{ id: upgrades + "-3-01", text: "Collect all 8 Gym Badges and Defeat the Elite 4", taskSync: ["platinum-story-1"] },
					{ id: upgrades + "-3-02", text: "Complete the National Pokedex" },
					{ id: upgrades + "-3-03", text: "Get 100 Wins in the Battle Tower" },
					{ id: upgrades + "-3-04", text: "Complete a Master Rank Super Contest" },
					{ id: upgrades + "-3-05", text: "Play an Underground Capture the Flag Match" },
				],
			},
			{
				id: upgrades + "-4", text: "Obtain all the Poketch Apps", children: [
					{ id: upgrades + "-4-01", text: "Digital Clock" },
					{ id: upgrades + "-4-02", text: "Memo Pad" },
					{ id: upgrades + "-4-03", text: "Your Party" },
					{ id: upgrades + "-4-04", text: "Item Finder" },
					{ id: upgrades + "-4-05", text: "Breeding Centre" },
					{ id: upgrades + "-4-06", text: "Counter" },
					{ id: upgrades + "-4-07", text: "Marking Map" },
					{ id: upgrades + "-4-08", text: "Coin Toss" },
					{ id: upgrades + "-4-09", text: "Calendar" },
					{ id: upgrades + "-4-10", text: "Roulette" },
					{ id: upgrades + "-4-11", text: "Kitchen Timer" },
					{ id: upgrades + "-4-12", text: "Matchup Checker" },
					{ id: upgrades + "-4-13", text: "Alarm Clock" },
					{ id: upgrades + "-4-14", text: "Calculator" },
					{ id: upgrades + "-4-15", text: "Step Counter" },
					{ id: upgrades + "-4-16", text: "Happiness Checker" },
					{ id: upgrades + "-4-17", text: "Berry Checker" },
					{ id: upgrades + "-4-18", text: "Pokemon History" },
					{ id: upgrades + "-4-19", text: "Analog Clock" },
					{ id: upgrades + "-4-20", text: "Wireless Searcher" },
					{ id: upgrades + "-4-21", text: "Type Chart" },
					{ id: upgrades + "-4-22", text: "Drawing Board" },
					{ id: upgrades + "-4-23", text: "PokeRadar Checker" },
					{ id: upgrades + "-4-24", text: "Color Changer" },
					{ id: upgrades + "-4-25", text: "Stopwatch" },
				],
			},
		],
		[collectables]: [
			{
				id: collectables + "-1", text: "Obtain all Key Items", children: [
					{ id: collectables + "-1-01", text: "Bicycle", img: item("bicycle") },
					{ id: collectables + "-1-02", text: "Coin Case", img: item("coin-case") },
					{ id: collectables + "-1-03", text: "Explorer Kit", img: item("explorer-kit") },
					{ id: collectables + "-1-04", text: "Fashion Case", img: item("fashion-case") },
					{ id: collectables + "-1-05", text: "Good Rod", img: item("good-rod") },
					{ id: collectables + "-1-06", text: "Old Rod", img: item("old-rod") },
					{ id: collectables + "-1-07", text: "Poffin Case", img: item("poffin-case") },
					{ id: collectables + "-1-08", text: "Point Card", img: item("point-card") },
					{ id: collectables + "-1-09", text: "Poke Radar", img: item("poke-radar") },
					{ id: collectables + "-1-10", text: "Seal Case", img: item("seal-case") },
					{ id: collectables + "-1-11", text: "Sprayduck", img: item("sprayduck") },
					{ id: collectables + "-1-12", text: "Super Rod", img: item("super-rod") },
					{ id: collectables + "-1-13", text: "VS Seeker", img: item("vs-seeker") },
				]
			},
			{
				id: collectables + "-2", text: "Obtain all Mr. Goods Secret Base items", img: npc("mr-goods"), children: [
					{ id: collectables + "-2-01", text: "Beauty Cup", img: item("beauty-cup") },
					{ id: collectables + "-2-02", text: "Cool Cup", img: item("cool-cup") },
					{ id: collectables + "-2-03", text: "Clever Cup", img: item("clever-cup") },
					{ id: collectables + "-2-04", text: "Tough Cup", img: item("tough-cup") },
					{ id: collectables + "-2-05", text: "Cute Cup", img: item("cute-cup") },
					{ id: collectables + "-2-06", text: "Blue Crystal", img: item("blue-crystal") },
					{ id: collectables + "-2-07", text: "Pink Crystal", img: item("pink-crystal") },
					{ id: collectables + "-2-08", text: "Red Crystal", img: item("red-crystal") },
					{ id: collectables + "-2-09", text: "Yellow Crystal", img: item("yellow-crystal") },
					{ id: collectables + "-2-10", text: "Gym Statue", img: item("gym-statue") },
					{ id: collectables + "-2-11", text: "Globe", img: item("globe") },
				]
			},
		],
		[thms]: [
			{
				id: thms + "-1", text: "Collect all HMs", children: [
					{ id: thms + "-1-01", text: "HM01: Cut", img: hm("normal") },
					{ id: thms + "-1-02", text: "HM02: Fly", img: hm("flying") },
					{ id: thms + "-1-03", text: "HM03: Surf", img: hm("water") },
					{ id: thms + "-1-04", text: "HM04: Strength", img: hm("normal") },
					{ id: thms + "-1-05", text: "HM05: Defog", img: hm("normal") },
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
		],
		[extraCredit]: [
			{ id: extraCredit + "-1", text: "Obtain Phione", img: baseSprite(489), dexSync: [nationalDex(489)] },
			{ id: extraCredit + "-2", text: "Obtain Manaphy", img: baseSprite(490), dexSync: [regionalDex(151), nationalDex(490)] },
			{ id: extraCredit + "-3", text: "Obtain Darkrai", img: baseSprite(491), dexSync: [nationalDex(491)] },
			{ id: extraCredit + "-4", text: "Obtain Shaymin", img: baseSprite(492), dexSync: [nationalDex(492)] },
			{ id: extraCredit + "-5", text: "Obtain Arceus", img: baseSprite(493), dexSync: [nationalDex(493)] },
		]
	},
});