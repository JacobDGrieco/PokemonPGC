PPGC.register({
	sections: {
		emerald: [
			{ id: "emerald-catching", title: "Gotta Catch 'Em All" },
			{ id: "emerald-story", title: "Main Story" },
			{ id: "emerald-activities", title: "Activities" },
			{ id: "emerald-battle", title: "Battle" },
			{ id: "emerald-upgrades", title: "Upgrades" },
			{ id: "emerald-collectables", title: "Collectables" },
			{ id: "emerald-thms", title: "TMs/HMs" },
			{ id: "emerald-distributions", title: "Distributions" },
			{ id: "emerald-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"emerald-catching": [
			{
				id: "emerald-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "emerald-catching-1-a",
						text: "Catch Kyogre",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/382.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 198 },
							{ game: "emerald", dexType: "national", id: 382 }
						],
					},
					{
						id: "emerald-catching-1-b",
						text: "Catch Groudon",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/383.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 199 },
							{ game: "emerald", dexType: "national", id: 383 }
						],
					},
					{
						id: "emerald-catching-1-c",
						text: "Catch Rayquaza",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/384.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 200 },
							{ game: "emerald", dexType: "national", id: 384 }
						],
					},
					{
						id: "emerald-catching-1-d",
						text: "Catch Regirock",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/377.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 193 },
							{ game: "emerald", dexType: "national", id: 377 }
						],
					},
					{
						id: "emerald-catching-1-e",
						text: "Catch Regice",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/378.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 194 },
							{ game: "emerald", dexType: "national", id: 378 }
						],
					},
					{
						id: "emerald-catching-1-f",
						text: "Catch Registeel",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/379.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 195 },
							{ game: "emerald", dexType: "national", id: 379 }
						],
					},
					{
						id: "emerald-catching-1-g",
						text: "Catch/Trade for Latias",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/380.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 196 },
							{ game: "emerald", dexType: "national", id: 380 }
						],
					},
					{
						id: "emerald-catching-1-h",
						text: "Catch/Trade for Latios",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/381.png",
						dexSync: [
							{ game: "emerald", dexType: "regional", id: 197 },
							{ game: "emerald", dexType: "national", id: 381 }
						],
					},
					{
						id: "emerald-catching-1-i",
						text: "Catch Ho-Oh",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/249.png",
						dexSync: [
							{ game: "emerald", dexType: "national", id: 249 }
						],
					},
					{
						id: "emerald-catching-1-j",
						text: "Catch Lugia",
						done: false,
						img: "imgs/sprites/gen3/emerald/base/250.png",
						dexSync: [
							{ game: "emerald", dexType: "national", id: 250 }
						],
					},
				],
			},
			{
				id: "emerald-catching-2",
				text: "Obtain all In-Game Gift Pokémon",
				done: false,
				children: [
					{ id: "emerald-catching-2-a", text: "Lileep", done: false, img: "imgs/sprites/gen3/emerald/base/345.png" },
					{ id: "emerald-catching-2-b", text: "Anorith", done: false, img: "imgs/sprites/gen3/emerald/base/347.png" },
					{ id: "emerald-catching-2-c", text: "Beldum", done: false, img: "imgs/sprites/gen3/emerald/base/374.png" },
					{ id: "emerald-catching-2-d", text: "Castform", done: false, img: "imgs/sprites/gen3/emerald/base/351.png" },
					{ id: "emerald-catching-2-e", text: "Wynaut", done: false, img: "imgs/sprites/gen3/emerald/base/360.png" },
				],
			},
			{
				id: "emerald-catching-3",
				text: "Complete all In-Game Trades",
				done: false,
				children: [
					{
						id: "emerald-catching-3-a",
						text: "Seedot for Ralts",
						done: false,
						img: "imgs/task-imgs/gen3/emerald/seedot-for-ralts.png"
					},
					{
						id: "emerald-catching-3-b", text: "Volbeat for Plusle", done: false,
						img: "imgs/task-imgs/gen3/emerald/volbeat-for-plusle.png"
					},
					{
						id: "emerald-catching-3-c",
						text: "Bagon for Horsea",
						done: false,
						img: "imgs/task-imgs/gen3/emerald/bellossum-for-corsola.png"
					},
				],
			},
		],
		"emerald-story": [
			{
				id: "emerald-story-1",
				text: "Collect all 8 Gym Badges and Defeat the Elite 4",
				img: [
					"imgs/badges/stone.png",
					"imgs/badges/knuckle.png",
					"imgs/badges/dynamo.png",
					"imgs/badges/heat.png",
					"imgs/badges/balance.png",
					"imgs/badges/feather.png",
					"imgs/badges/mind.png",
					"imgs/badges/rain.png",
				],
				done: false,
				syncs: ["emerald-upgrades-2-a"],
				noCenter: true,
			},
		],
		"emerald-activities": [
			{
				id: "emerald-activities-1",
				text: "Master all the Contests",
				done: false,
				noCenter: true,
				syncs: ["emerald-upgrades-2-b"],
				children: [
					{
						id: "emerald-activities-1-a",
						text: "Beauty Contests",
						img: "",
						type: "tiered",
						tiers: ["Normal", "Super", "Hyper", "Master"],
						currentTier: 0,
						currentCount: 0,
						unit: "completed",
						tooltip: "",
					},
					{
						id: "emerald-activities-1-b",
						text: "Tough Contests",
						img: "",
						type: "tiered",
						tiers: ["Normal", "Super", "Hyper", "Master"],
						currentTier: 0,
						currentCount: 0,
						unit: "completed",
						tooltip: "",
					},
					{
						id: "emerald-activities-1-c",
						text: "Cuteness Contests",
						img: "",
						type: "tiered",
						tiers: ["Normal", "Super", "Hyper", "Master"],
						currentTier: 0,
						currentCount: 0,
						unit: "completed",
						tooltip: "",
					},
					{
						id: "emerald-activities-1-d",
						text: "Coolness Contests",
						img: "",
						type: "tiered",
						tiers: ["Normal", "Super", "Hyper", "Master"],
						currentTier: 0,
						currentCount: 0,
						unit: "completed",
						tooltip: "",
					},
					{
						id: "emerald-activities-1-e",
						text: "Smartness Contests",
						img: "",
						type: "tiered",
						tiers: ["Normal", "Super", "Hyper", "Master"],
						currentTier: 0,
						currentCount: 0,
						unit: "completed",
						tooltip: "",
					},
				],
			},
			{
				id: "emerald-activities-2",
				text: "Complete all chambers of the Trick House",
				img: "",
				type: "tiered",
				tiers: [1, 2, 3, 4, 5, 6, 7, 8],
				currentTier: 0,
				currentCount: 0,
				unit: "completed",
				tooltip: "",
			},
		],
		"emerald-battle": [
			{
				id: "emerald-battle-1",
				text: "Master the Battle Tower",
				img: "",
				type: "tiered",
				tiers: ["Singles", "Doubles", "Multi"],
				currentTier: 0,
				currentCount: 0,
				unit: "completed",
				tooltip: "",
				noCenter: true
			},
			{
				id: "emerald-battle-2",
				text: "Defeat the Winstrate Household",
				done: false,
				noCenter: true
			},
		],
		"emerald-upgrades": [
			{
				id: "emerald-upgrades-1",
				text: "Obtain the National PokeDex",
				done: false,
				noCenter: true
			},
			{
				id: "emerald-upgrades-2",
				text: "Obtain the Gold 4-Star Trainer Card",
				done: false,
				noCenter: true,
				children: [
					{
						id: "emerald-upgrades-2-a",
						text: "Defeat the Elite 4/Champion",
						done: false,
						syncs: ["emerald-story-1"],
					},
					{
						id: "emerald-upgrades-2-b",
						text: "Win all Master Rank Contests",
						done: false,
						syncs: ["emerald-activities-1"],
					},
					{
						id: "emerald-upgrades-2-c",
						text: "Defeat the 50 trainer challenge in the Battle Tower",
						done: false,
					},
					{
						id: "emerald-upgrades-2-d",
						text: "Complete the Hoenn Regional PokeDex (200)",
						done: false,
					},
				],
			},
		],
		"emerald-collectables": [
			{
				id: "emerald-collectables-1",
				text: "Obtain all extra Key Items",
				done: false,
				children: [
					{
						id: "emerald-collectables-1-a",
						text: "Wailmer Pail",
						done: false,
						img: "imgs/items/wailmer-pail.png",
					},
					{
						id: "emerald-collectables-1-b",
						text: "PokeBlock Case",
						done: false,
						img: "imgs/items/pokeblock-case.png",
					},
					{
						id: "emerald-collectables-1-c",
						text: "Go-Goggles",
						done: false,
						img: "imgs/items/go-goggles.png",
					},
					{
						id: "emerald-collectables-1-d",
						text: "Item Finder",
						done: false,
						img: "imgs/items/item-finder.png",
					},
					{
						id: "emerald-collectables-1-e",
						text: "Exp. Share",
						done: false,
						img: "imgs/items/exp_share.png",
					},
					{
						id: "emerald-collectables-1-f",
						text: "Soot Sack",
						done: false,
						img: "imgs/items/soot-sack.png",
					},
				],
			},
			{
				id: "emerald-collectables-2",
				text: "Obtain all 3 fishing rods",
				done: false,
				children: [
					{ id: "emerald-collectables-2-a", text: "Old Rod", done: false, img: "imgs/items/old-rod.png" },
					{ id: "emerald-collectables-2-b", text: "Good Rod", done: false, img: "imgs/items/good-rod.png" },
					{ id: "emerald-collectables-2-c", text: "Super Rod", done: false, img: "imgs/items/super-rod.png" },
				],
			},
			{
				id: "emerald-collectables-3",
				text: "Obtain all items from collecting soot",
				done: false,
				children: [
					{ id: "emerald-collectables-3-a", text: "Pretty Chair", done: false, img: "imgs/items/pretty-chair.png" },
					{ id: "emerald-collectables-3-b", text: "Pretty Desk", done: false, img: "imgs/items/pretty-desk.png" },
				],
			},
			{
				id: "emerald-collectables-4",
				text: "Find all hidden items with the Item Finder",
				img: "imgs/items/item-finder.png",
				type: "tiered",
				tiers: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
					38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
					55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
					72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
					89, 90, 91, 92, 93, 94, 95, 96, 97
				],
				currentTier: 0,
				currentCount: 0,
				unit: "collected",
				noCenter: true,
			},
		],
		"emerald-thms": [
			{
				id: "emerald-thms-1",
				text: "Collect all HMs",
				done: false,
				children: [
					{ id: "emerald-thms-1-a", text: "HM01: Cut", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "emerald-thms-1-b", text: "HM02: Fly", done: false, img: "imgs/hms/gen3-5/flying.png" },
					{ id: "emerald-thms-1-c", text: "HM03: Surf", done: false, img: "imgs/hms/gen3-5/water.png" },
					{ id: "emerald-thms-1-d", text: "HM04: Strength", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "emerald-thms-1-e", text: "HM05: Flash", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "emerald-thms-1-f", text: "HM06: Rock Smash", done: false, img: "imgs/hms/gen3-5/fighting.png" },
					{ id: "emerald-thms-1-g", text: "HM07: Waterfall", done: false, img: "imgs/hms/gen3-5/water.png" },
					{ id: "emerald-thms-1-h", text: "HM08: Dive", done: false, img: "imgs/hms/gen3-5/water.png" },
				],
			},
			{
				id: "emerald-thms-2",
				text: "Collect all HMs",
				done: false,
				children: [
					{
						id: "emerald-thms-2-a",
						text: "TM 01 - Focus Punch",
						done: false,
						img: "imgs/tms/gen3-5/fighting.png",
					},
					{
						id: "emerald-thms-2-b",
						text: "TM 02 - Dragon Claw",
						done: false,
						img: "imgs/tms/gen3-5/dragon.png",
					},
					{
						id: "emerald-thms-2-c",
						text: "TM 03 - Water Pulse",
						done: false,
						img: "imgs/tms/gen3-5/water.png",
					},
					{
						id: "emerald-thms-2-d",
						text: "TM 04 - Calm Mind",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-e",
						text: "TM 05 - Roar",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-f",
						text: "TM 06 - Toxic",
						done: false,
						img: "imgs/tms/gen3-5/poison.png",
					},
					{
						id: "emerald-thms-2-g",
						text: "TM 07 - Hail",
						done: false,
						img: "imgs/tms/gen3-5/ice.png",
					},
					{
						id: "emerald-thms-2-h",
						text: "TM 08 - Bulk Up",
						done: false,
						img: "imgs/tms/gen3-5/fighting.png",
					},
					{
						id: "emerald-thms-2-i",
						text: "TM 09 - Bullet Seed",
						done: false,
						img: "imgs/tms/gen3-5/grass.png",
					},
					{
						id: "emerald-thms-2-j",
						text: "TM 10 - Hidden Power",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-k",
						text: "TM 11 - Sunny Day",
						done: false,
						img: "imgs/tms/gen3-5/fire.png",
					},
					{
						id: "emerald-thms-2-l",
						text: "TM 12 - Taunt",
						done: false,
						img: "imgs/tms/gen3-5/dark.png",
					},
					{
						id: "emerald-thms-2-m",
						text: "TM 13 - Ice Beam",
						done: false,
						img: "imgs/tms/gen3-5/ice.png",
					},
					{
						id: "emerald-thms-2-n",
						text: "TM 14 - Blizzard",
						done: false,
						img: "imgs/tms/gen3-5/ice.png",
					},
					{
						id: "emerald-thms-2-o",
						text: "TM 15 - Hyper Beam",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-p",
						text: "TM 16 - Light Screen",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-q",
						text: "TM 17 - Protect",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-r",
						text: "TM 18 - Rain Dance",
						done: false,
						img: "imgs/tms/gen3-5/water.png",
					},
					{
						id: "emerald-thms-2-s",
						text: "TM 19 - Giga Drain",
						done: false,
						img: "imgs/tms/gen3-5/grass.png",
					},
					{
						id: "emerald-thms-2-t",
						text: "TM 20 - Safeguard",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-u",
						text: "TM 21 - Frustration",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-v",
						text: "TM 22 - Solar Beam",
						done: false,
						img: "imgs/tms/gen3-5/grass.png",
					},
					{
						id: "emerald-thms-2-w",
						text: "TM 23 - Iron Tail",
						done: false,
						img: "imgs/tms/gen3-5/steel.png",
					},
					{
						id: "emerald-thms-2-x",
						text: "TM 24 - Thunderbolt",
						done: false,
						img: "imgs/tms/gen3-5/electric.png",
					},
					{
						id: "emerald-thms-2-y",
						text: "TM 25 - Thunder",
						done: false,
						img: "imgs/tms/gen3-5/electric.png",
					},
					{
						id: "emerald-thms-2-z",
						text: "TM 26 - Earthquake",
						done: false,
						img: "imgs/tms/gen3-5/ground.png",
					},
					{
						id: "emerald-thms-2-aa",
						text: "TM 27 - Return",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-ab",
						text: "TM 28 - Dig",
						done: false,
						img: "imgs/tms/gen3-5/ground.png",
					},
					{
						id: "emerald-thms-2-ac",
						text: "TM 29 - Psychic",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-ad",
						text: "TM 30 - Shadow Ball",
						done: false,
						img: "imgs/tms/gen3-5/ghost.png",
					},
					{
						id: "emerald-thms-2-ae",
						text: "TM 31 - Brick Break",
						done: false,
						img: "imgs/tms/gen3-5/fighting.png",
					},
					{
						id: "emerald-thms-2-af",
						text: "TM 32 - Double Team",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-ag",
						text: "TM 33 - Reflect",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-ah",
						text: "TM 34 - Shock Wave",
						done: false,
						img: "imgs/tms/gen3-5/electric.png",
					},
					{
						id: "emerald-thms-2-ai",
						text: "TM 35 - Flamethrower",
						done: false,
						img: "imgs/tms/gen3-5/fire.png",
					},
					{
						id: "emerald-thms-2-aj",
						text: "TM 36 - Sludge Bomb",
						done: false,
						img: "imgs/tms/gen3-5/poison.png",
					},
					{
						id: "emerald-thms-2-ak",
						text: "TM 37 - Sandstorm",
						done: false,
						img: "imgs/tms/gen3-5/rock.png",
					},
					{
						id: "emerald-thms-2-al",
						text: "TM 38 - Fire Blast",
						done: false,
						img: "imgs/tms/gen3-5/fire.png",
					},
					{
						id: "emerald-thms-2-am",
						text: "TM 39 - Rock Tomb",
						done: false,
						img: "imgs/tms/gen3-5/rock.png",
					},
					{
						id: "emerald-thms-2-an",
						text: "TM 40 - Aerial Ace",
						done: false,
						img: "imgs/tms/gen3-5/flying.png",
					},
					{
						id: "emerald-thms-2-ao",
						text: "TM 41 - Torment",
						done: false,
						img: "imgs/tms/gen3-5/dark.png",
					},
					{
						id: "emerald-thms-2-ap",
						text: "TM 42 - Facade",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-aq",
						text: "TM 43 - Secret Power",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-ar",
						text: "TM 44 - Rest",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-as",
						text: "TM 45 - Attract",
						done: false,
						img: "imgs/tms/gen3-5/normal.png",
					},
					{
						id: "emerald-thms-2-at",
						text: "TM 46 - Thief",
						done: false,
						img: "imgs/tms/gen3-5/dark.png",
					},
					{
						id: "emerald-thms-2-au",
						text: "TM 47 - Steel Wing",
						done: false,
						img: "imgs/tms/gen3-5/steel.png",
					},
					{
						id: "emerald-thms-2-av",
						text: "TM 48 - Skill Swap",
						done: false,
						img: "imgs/tms/gen3-5/psychic.png",
					},
					{
						id: "emerald-thms-2-aw",
						text: "TM 49 - Snatch",
						done: false,
						img: "imgs/tms/gen3-5/dark.png",
					},
					{
						id: "emerald-thms-2-ax",
						text: "TM 50 - Overheat",
						done: false,
						img: "imgs/tms/gen3-5/fire.png",
					},
				],
			},
		],
		"emerald-extra-credit": [
			{
				id: "emerald-extra-credit-1",
				text: "Obtain Jirachi",
				done: false,
				img: "imgs/sprites/gen3/emerald/base/385.png",
				dexSync: [
					{ game: "emerald", dexType: "regional", id: 201 },
					{ game: "emerald", dexType: "national", id: 385 }
				],
			},
			{
				id: "emerald-extra-credit-2",
				text: "Obtain Deoxys",
				done: false,
				img: "imgs/sprites/gen3/emerald/base/386-s.png",
				dexSync: [
					{ game: "emerald", dexType: "regional", id: 202 },
					{ game: "emerald", dexType: "national", id: 386, form: "Speed" }
				],
			},
		]
	},
});
