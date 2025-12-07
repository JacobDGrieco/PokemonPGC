PPGC.register({
	sections: {
		leafgreen: [
			{ id: "leafgreen-catching", title: "Gotta Catch 'Em All" },
			{ id: "leafgreen-story", title: "Main Story" },
			{ id: "leafgreen-battle", title: "Battle" },
			{ id: "leafgreen-upgrades", title: "Upgrades" },
			{ id: "leafgreen-collectables", title: "Collectables" },
			{ id: "leafgreen-thms", title: "TMs/HMs" },
			{ id: "leafgreen-distributions", title: "Distributions" },
			{ id: "leafgreen-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"leafgreen-catching": [
			{
				id: "leafgreen-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "leafgreen-catching-1-a", text: "Catch Articuno", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/144.png", dexSync: [
							{ game: "leafgreen", dexType: "regional", id: 144 }, { game: "leafgreen", dexType: "national", id: 144 }
						]
					},
					{
						id: "leafgreen-catching-1-b", text: "Catch Zapdos", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/145.png", dexSync: [
							{ game: "leafgreen", dexType: "regional", id: 145 }, { game: "leafgreen", dexType: "national", id: 145 }
						]
					},
					{
						id: "leafgreen-catching-1-c", text: "Catch Moltres", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/146.png", dexSync: [
							{ game: "leafgreen", dexType: "regional", id: 146 }, { game: "leafgreen", dexType: "national", id: 146 }
						]
					},
					{
						id: "leafgreen-catching-1-d", text: "Catch Mewtwo", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/150.png", dexSync: [
							{ game: "leafgreen", dexType: "regional", id: 150 }, { game: "leafgreen", dexType: "national", id: 150 }
						]
					},
					{
						id: "leafgreen-catching-1-e", text: "Catch/Trade for Raikou", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/243.png", dexSync: [
							{ game: "leafgreen", dexType: "national", id: 243 }
						]
					},
					{
						id: "leafgreen-catching-1-f", text: "Catch/Trade for Entei", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/244.png", dexSync: [
							{ game: "leafgreen", dexType: "national", id: 244 }
						]
					},
					{
						id: "leafgreen-catching-1-g", text: "Catch/Trade for Suicune", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/245.png", dexSync: [
							{ game: "leafgreen", dexType: "national", id: 245 }
						]
					},
				],
			},
			{
				id: "leafgreen-catching-2",
				text: "Catch both Snorlax",
				done: false,
				children: [
					{ id: "leafgreen-catching-2-a", text: "Route 12", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/snorlax-12.png" },
					{ id: "leafgreen-catching-2-b", text: "Route 16", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/snorlax-16.png" },
				],
			},
			{
				id: "leafgreen-catching-3",
				text: "Obtain all In-Game Gift Pokémon",
				done: false,
				children: [
					{ id: "leafgreen-catching-3-a", text: "Hitmonlee/Hitmonchan", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/hitmonlee-hitmonchan.png" },
					{ id: "leafgreen-catching-3-b", text: "Omanyte/Kabuto", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/omanyte-kabuto.png" },
					{ id: "leafgreen-catching-3-c", text: "Lapras", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/131.png" },
					{ id: "leafgreen-catching-3-d", text: "Aerodactyl", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/142.png" },
					{ id: "leafgreen-catching-3-e", text: "Eevee", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/133.png" },
					{ id: "leafgreen-catching-3-f", text: "Togepi", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/175.png" },
				],
			},
			{
				id: "leafgreen-catching-4",
				text: "Complete all In-Game Trades",
				done: false,
				children: [
					{ id: "leafgreen-catching-4-a", text: "Abra for Mr. Mime", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/abra-for-mrmime.png" },
					{ id: "leafgreen-catching-4-b", text: "Nidoran ♀ for Nidoran ♂", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/nidoranf-for-nidoranm.png" },
					{ id: "leafgreen-catching-4-c", text: "Nidorina for Nidorino", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/nidorina-for-nidorino.png" },
					{ id: "leafgreen-catching-4-d", text: "Slowbro for Lickitung", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/slowbro-for-lickitung.png" },
					{ id: "leafgreen-catching-4-e", text: "Poliwhirl for Jynx", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/poliwhirl-for-jynx.png" },
					{ id: "leafgreen-catching-4-f", text: "Spearow for Farfetch'd", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/spearow-for-farfetchd.png" },
					{ id: "leafgreen-catching-4-g", text: "Ponyta for Seel", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/ponyta-for-seel.png" },
					{ id: "leafgreen-catching-4-h", text: "Raichu for Electrode", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/raichu-for-electrode.png" },
					{ id: "leafgreen-catching-4-i", text: "Venonant for Tangela", done: false, img: "imgs/task-imgs/gen3/firered-leafgreen/venonat-for-tangela.png" },
				],
			},
		],
		"leafgreen-story": [
			{
				id: "leafgreen-story-1",
				text: "Collect all 8 Gym Badges and Defeat the Elite 4",
				img: [
					"imgs/badges/boulder.png",
					"imgs/badges/cascade.png",
					"imgs/badges/thunder.png",
					"imgs/badges/rainbow.png",
					"imgs/badges/soul.png",
					"imgs/badges/marsh.png",
					"imgs/badges/volcano.png",
					"imgs/badges/earth.png",
				],
				done: false,
				noCenter: true,
			},
			{
				id: "leafgreen-story-2", text: "Epilogue", done: false, noCenter: true, children: [
					{ id: "leafgreen-story-2-a", text: "Catch Mewtwo", done: false, img: "imgs/sprites/gen3/firered-leafgreen/base/150.png", tooltip: "Found at the bottom of Cerulean Cave", syncs: ["leafgreen-catching-1-d"], dexSync: [{ game: "leafgreen", dexType: "regional", id: 150 }] },
				],
			},
		],
		"leafgreen-battle": [
			{ id: "leafgreen-battle-1", text: "Defeat Red", done: false, img: "imgs/npcs/gen3/red.png", noCenter: true },
			{
				id: "leafgreen-battle-2",
				text: "Master the Battle Tower",
				done: false,
				children: [
					{ id: "leafgreen-battle-2-a", text: "Single Battles", type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected", noCenter: true },
					{ id: "leafgreen-battle-2-b", text: "Double Battles", type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected", noCenter: true },
					{ id: "leafgreen-battle-2-c", text: "Multi Battles", type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected", noCenter: true },
					{ id: "leafgreen-battle-2-d", text: "Knockout Battles", type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected", noCenter: true },
				],
			},
		],
		"leafgreen-upgrades": [
			{ id: "leafgreen-upgrades-1", text: "Obtain the National Dex", done: false, img: "imgs/items/kanto-nati-dex.png", noCenter: true },
			{
				id: "leafgreen-upgrades-2",
				text: "Obtain the Gold 4 Star Trainer Card",
				done: false,
				children: [
					{ id: "leafgreen-upgrades-2-a", text: "Collect all 8 Gym Badges and Defeat the Elite 4", done: false, syncs: ["leafgreen-story-1"] },
					{ id: "leafgreen-upgrades-2-b", text: "Complete the Kanto Pokedex", done: false },
					{ id: "leafgreen-upgrades-2-c", text: "Complete the National Pokedex", done: false },
					{ id: "leafgreen-upgrades-2-d", text: "Jump 200 times in Pokemon Jump", done: false },
					{ id: "leafgreen-upgrades-2-e", text: "Collect 200 berries in Dodrio Berry Picking", done: false },
				],
			},
		],
		"leafgreen-collectables": [
			{ id: "leafgreen-collectables-1", text: "Obtain the VS Seeker", done: false, img: "imgs/items/vsseeker.png", noCenter: true },
			{ id: "leafgreen-collectables-2", text: "Obtain the Poke Flute", done: false, img: "imgs/items/poke-flute.png", noCenter: true },
			{
				id: "leafgreen-collectables-3",
				text: "Obtain all 3 fishing rods",
				done: false,
				children: [
					{ id: "leafgreen-collectables-3-a", text: "Old Rod", done: false, img: "imgs/items/old-rod.png" },
					{ id: "leafgreen-collectables-3-b", text: "Good Rod", done: false, img: "imgs/items/good-rod.png" },
					{ id: "leafgreen-collectables-3-c", text: "Super Rod", done: false, img: "imgs/items/super-rod.png" },
				],
			},
			{ id: "leafgreen-collectables-4", text: "Obtain the Item Finder", done: false, img: "imgs/items/item-finder.png", noCenter: true },
			{
				id: "leafgreen-collectables-5",
				text: "Find all hidden items with the Item Finder",
				img: "imgs/items/item-finder.png",
				type: "tiered",
				tiers: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
					39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
					57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
					75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
					93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
					109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
					124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
					139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
					154, 155
				],
				currentTier: 0,
				currentCount: 0,
				unit: "collected",
				noCenter: true,
			},
		],
		"leafgreen-thms": [
			{
				id: "leafgreen-thms-1",
				text: "Collect all HMs",
				done: false,
				children: [
					{ id: "leafgreen-thms-1-a", text: "HM01: Cut", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-1-b", text: "HM02: Fly", done: false, img: "imgs/hms/gen3-5/flying.png" },
					{ id: "leafgreen-thms-1-c", text: "HM03: Surf", done: false, img: "imgs/hms/gen3-5/water.png" },
					{ id: "leafgreen-thms-1-d", text: "HM04: Strength", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-1-e", text: "HM05: Flash", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-1-f", text: "HM06: Rock Smash", done: false, img: "imgs/hms/gen3-5/fighting.png" },
					{ id: "leafgreen-thms-1-g", text: "HM07: Waterfall", done: false, img: "imgs/hms/gen3-5/water.png" },
				],
			},
			{
				id: "leafgreen-thms-2",
				text: "Collect all TMs",
				done: false,
				children: [
					{ id: "leafgreen-thms-2-a", text: "TM 01 - Focus Punch", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "leafgreen-thms-2-b", text: "TM 02 - Dragon Claw", done: false, img: "imgs/tms/gen3-5/dragon.png" },
					{ id: "leafgreen-thms-2-c", text: "TM 03 - Water Pulse", done: false, img: "imgs/tms/gen3-5/water.png" },
					{ id: "leafgreen-thms-2-d", text: "TM 04 - Calm Mind", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-e", text: "TM 05 - Roar", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-f", text: "TM 06 - Toxic", done: false, img: "imgs/tms/gen3-5/poison.png" },
					{ id: "leafgreen-thms-2-g", text: "TM 07 - Hail", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "leafgreen-thms-2-h", text: "TM 08 - Bulk Up", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "leafgreen-thms-2-i", text: "TM 09 - Bullet Seed", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "leafgreen-thms-2-j", text: "TM 10 - Hidden Power", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-k", text: "TM 11 - Sunny Day", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "leafgreen-thms-2-l", text: "TM 12 - Taunt", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "leafgreen-thms-2-m", text: "TM 13 - Ice Beam", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "leafgreen-thms-2-n", text: "TM 14 - Blizzard", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "leafgreen-thms-2-o", text: "TM 15 - Hyper Beam", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-p", text: "TM 16 - Light Screen", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-q", text: "TM 17 - Protect", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-r", text: "TM 18 - Rain Dance", done: false, img: "imgs/tms/gen3-5/water.png" },
					{ id: "leafgreen-thms-2-s", text: "TM 19 - Giga Drain", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "leafgreen-thms-2-t", text: "TM 20 - Safeguard", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-u", text: "TM 21 - Frustration", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-v", text: "TM 22 - Solar Beam", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "leafgreen-thms-2-w", text: "TM 23 - Iron Tail", done: false, img: "imgs/tms/gen3-5/steel.png" },
					{ id: "leafgreen-thms-2-x", text: "TM 24 - Thunderbolt", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "leafgreen-thms-2-y", text: "TM 25 - Thunder", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "leafgreen-thms-2-z", text: "TM 26 - Earthquake", done: false, img: "imgs/tms/gen3-5/ground.png" },
					{ id: "leafgreen-thms-2-aa", text: "TM 27 - Return", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-ab", text: "TM 28 - Dig", done: false, img: "imgs/tms/gen3-5/ground.png" },
					{ id: "leafgreen-thms-2-ac", text: "TM 29 - Psychic", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-ad", text: "TM 30 - Shadow Ball", done: false, img: "imgs/tms/gen3-5/ghost.png" },
					{ id: "leafgreen-thms-2-ae", text: "TM 31 - Brick Break", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "leafgreen-thms-2-af", text: "TM 32 - Double Team", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-ag", text: "TM 33 - Reflect", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-ah", text: "TM 34 - Shock Wave", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "leafgreen-thms-2-ai", text: "TM 35 - Flamethrower", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "leafgreen-thms-2-aj", text: "TM 36 - Sludge Bomb", done: false, img: "imgs/tms/gen3-5/poison.png" },
					{ id: "leafgreen-thms-2-ak", text: "TM 37 - Sandstorm", done: false, img: "imgs/tms/gen3-5/rock.png" },
					{ id: "leafgreen-thms-2-al", text: "TM 38 - Fire Blast", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "leafgreen-thms-2-am", text: "TM 39 - Rock Tomb", done: false, img: "imgs/tms/gen3-5/rock.png" },
					{ id: "leafgreen-thms-2-an", text: "TM 40 - Aerial Ace", done: false, img: "imgs/tms/gen3-5/flying.png" },
					{ id: "leafgreen-thms-2-ao", text: "TM 41 - Torment", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "leafgreen-thms-2-ap", text: "TM 42 - Facade", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-aq", text: "TM 43 - Secret Power", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-ar", text: "TM 44 - Rest", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-as", text: "TM 45 - Attract", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "leafgreen-thms-2-at", text: "TM 46 - Thief", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "leafgreen-thms-2-au", text: "TM 47 - Steel Wing", done: false, img: "imgs/tms/gen3-5/steel.png" },
					{ id: "leafgreen-thms-2-av", text: "TM 48 - Skill Swap", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "leafgreen-thms-2-aw", text: "TM 49 - Snatch", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "leafgreen-thms-2-ax", text: "TM 50 - Overheat", done: false, img: "imgs/tms/gen3-5/fire.png" },
				]
			},
		],
		"leafgreen-extra-credit": [
			{
				id: "leafgreen-extra-credit-1",
				text: "Obtain Mew",
				done: false,
				img: "imgs/sprites/gen3/firered-leafgreen/base/151.png",
				dexSync: [
					{ game: "leafgreen", dexType: "regional", id: 151 },
					{ game: "leafgreen", dexType: "national", id: 151 }
				],
			},
		]
	},
});
