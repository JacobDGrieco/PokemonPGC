PPGC.register({
	sections: {
		firered: [
			{ id: "firered-catching", title: "Gotta Catch 'Em All" },
			{ id: "firered-story", title: "Main Story" },
			{ id: "firered-battle", title: "Battle" },
			{ id: "firered-upgrades", title: "Upgrades" },
			{ id: "firered-collectables", title: "Collectables" },
			{ id: "firered-thms", title: "TMs/HMs" },
			{ id: "firered-distributions", title: "Distributions" },
			{ id: "firered-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"firered-catching": [
			{
				id: "firered-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "firered-catching-1-a",
						text: "Catch Articuno",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/144.png",
						dexSync: [
							{ game: "firered", dexType: "regional", id: 144 },
							{ game: "firered", dexType: "national", id: 144 }
						],
					},
					{
						id: "firered-catching-1-b",
						text: "Catch Zapdos",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/145.png",
						dexSync: [
							{ game: "firered", dexType: "regional", id: 145 },
							{ game: "firered", dexType: "national", id: 145 }
						],
					},
					{
						id: "firered-catching-1-c",
						text: "Catch Moltres",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/146.png",
						dexSync: [
							{ game: "firered", dexType: "regional", id: 146 },
							{ game: "firered", dexType: "national", id: 146 }
						],
					},
					{
						id: "firered-catching-1-d",
						text: "Catch Mewtwo",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/150.png",
						dexSync: [
							{ game: "firered", dexType: "regional", id: 150 },
							{ game: "firered", dexType: "national", id: 150 }
						],
					},
					{
						id: "firered-catching-1-e",
						text: "Catch/Trade for Raikou",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/243.png",
						dexSync: [
							{ game: "firered", dexType: "national", id: 243 }
						],
					},
					{
						id: "firered-catching-1-f",
						text: "Catch/Trade for Entei",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/244.png",
						dexSync: [
							{ game: "firered", dexType: "national", id: 244 }
						],
					},
					{
						id: "firered-catching-1-g",
						text: "Catch/Trade for Suicune",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/245.png",
						dexSync: [
							{ game: "firered", dexType: "national", id: 245 }
						],
					},
				],
			},
			{
				id: "firered-catching-2",
				text: "Catch both Snorlax",
				done: false,
				children: [
					{
						id: "firered-catching-2-a",
						text: "Route 12",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/snorlax-12.png",
					},
					{
						id: "firered-catching-2-b",
						text: "Route 16",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/snorlax-16.png",
					},
				],
			},
			{
				id: "firered-catching-3",
				text: "Obtain all In-Game Gift Pokémon",
				done: false,
				children: [
					{
						id: "firered-catching-3-a",
						text: "Hitmonlee/Hitmonchan",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/hitmonlee-hitmonchan.png",
					},
					{
						id: "firered-catching-3-b",
						text: "Omanyte/Kabuto",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/omanyte-kabuto.png",
					},
					{
						id: "firered-catching-3-c",
						text: "Lapras",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/131.png",
					},
					{
						id: "firered-catching-3-d",
						text: "Aerodactyl",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/142.png",
					},
					{
						id: "firered-catching-3-e",
						text: "Eevee",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/133.png",
					},
					{
						id: "firered-catching-3-f",
						text: "Togepi",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/175.png",
					},
				],
			},
			{
				id: "firered-catching-4",
				text: "Complete all In-Game Trades",
				done: false,
				children: [
					{
						id: "firered-catching-4-a",
						text: "Abra for Mr. Mime",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/abra-for-mrmime.png",
					},
					{
						id: "firered-catching-4-b",
						text: "Nidoran ♂ for Nidoran ♀",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/nidoranm-for-nidoranf.png",
					},
					{
						id: "firered-catching-4-d",
						text: "Golduck for Lickitung",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/golduck-for-lickitung.png",
					},
					{
						id: "firered-catching-4-e",
						text: "Poliwhirl for Jynx",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/poliwhirl-for-jynx.png",
					},
					{
						id: "firered-catching-4-f",
						text: "Spearow for Farfetch'd",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/spearow-for-farfetchd.png",
					},
					{
						id: "firered-catching-4-g",
						text: "Ponyta for Seel",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/ponyta-for-seel.png",
					},
					{
						id: "firered-catching-4-h",
						text: "Raichu for Electrode",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/raichu-for-electrode.png",
					},
					{
						id: "firered-catching-4-i",
						text: "Venonant for Tangela",
						done: false,
						img: "imgs/task-imgs/gen3/firered-leafgreen/venonat-for-tangela.png",
					},
				],
			},
		],
		"firered-thms": [
			{
				id: "firered-thms-1",
				text: "Collect all HMs",
				done: false,
				children: [
					{ id: "firered-thms-1-a", text: "HM01: Cut", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "firered-thms-1-b", text: "HM02: Fly", done: false, img: "imgs/hms/gen3-5/flying.png" },
					{ id: "firered-thms-1-c", text: "HM03: Surf", done: false, img: "imgs/hms/gen3-5/water.png" },
					{ id: "firered-thms-1-d", text: "HM04: Strength", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "firered-thms-1-e", text: "HM05: Flash", done: false, img: "imgs/hms/gen3-5/normal.png" },
					{ id: "firered-thms-1-f", text: "HM06: Rock Smash", done: false, img: "imgs/hms/gen3-5/fighting.png" },
					{ id: "firered-thms-1-g", text: "HM07: Waterfall", done: false, img: "imgs/hms/gen3-5/water.png" },
				],
			},
			{
				id: "firered-thms-2",
				text: "Collect all TMs",
				done: false,
				children: [
					{ id: "firered-thms-2-a", text: "TM 01 - Focus Punch", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "firered-thms-2-b", text: "TM 02 - Dragon Claw", done: false, img: "imgs/tms/gen3-5/dragon.png" },
					{ id: "firered-thms-2-c", text: "TM 03 - Water Pulse", done: false, img: "imgs/tms/gen3-5/water.png" },
					{ id: "firered-thms-2-d", text: "TM 04 - Calm Mind", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-e", text: "TM 05 - Roar", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-f", text: "TM 06 - Toxic", done: false, img: "imgs/tms/gen3-5/poison.png" },
					{ id: "firered-thms-2-g", text: "TM 07 - Hail", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "firered-thms-2-h", text: "TM 08 - Bulk Up", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "firered-thms-2-i", text: "TM 09 - Bullet Seed", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "firered-thms-2-j", text: "TM 10 - Hidden Power", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-k", text: "TM 11 - Sunny Day", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "firered-thms-2-l", text: "TM 12 - Taunt", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "firered-thms-2-m", text: "TM 13 - Ice Beam", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "firered-thms-2-n", text: "TM 14 - Blizzard", done: false, img: "imgs/tms/gen3-5/ice.png" },
					{ id: "firered-thms-2-o", text: "TM 15 - Hyper Beam", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-p", text: "TM 16 - Light Screen", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-q", text: "TM 17 - Protect", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-r", text: "TM 18 - Rain Dance", done: false, img: "imgs/tms/gen3-5/water.png" },
					{ id: "firered-thms-2-s", text: "TM 19 - Giga Drain", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "firered-thms-2-t", text: "TM 20 - Safeguard", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-u", text: "TM 21 - Frustration", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-v", text: "TM 22 - Solar Beam", done: false, img: "imgs/tms/gen3-5/grass.png" },
					{ id: "firered-thms-2-w", text: "TM 23 - Iron Tail", done: false, img: "imgs/tms/gen3-5/steel.png" },
					{ id: "firered-thms-2-x", text: "TM 24 - Thunderbolt", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "firered-thms-2-y", text: "TM 25 - Thunder", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "firered-thms-2-z", text: "TM 26 - Earthquake", done: false, img: "imgs/tms/gen3-5/ground.png" },
					{ id: "firered-thms-2-aa", text: "TM 27 - Return", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-ab", text: "TM 28 - Dig", done: false, img: "imgs/tms/gen3-5/ground.png" },
					{ id: "firered-thms-2-ac", text: "TM 29 - Psychic", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-ad", text: "TM 30 - Shadow Ball", done: false, img: "imgs/tms/gen3-5/ghost.png" },
					{ id: "firered-thms-2-ae", text: "TM 31 - Brick Break", done: false, img: "imgs/tms/gen3-5/fighting.png" },
					{ id: "firered-thms-2-af", text: "TM 32 - Double Team", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-ag", text: "TM 33 - Reflect", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-ah", text: "TM 34 - Shock Wave", done: false, img: "imgs/tms/gen3-5/electric.png" },
					{ id: "firered-thms-2-ai", text: "TM 35 - Flamethrower", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "firered-thms-2-aj", text: "TM 36 - Sludge Bomb", done: false, img: "imgs/tms/gen3-5/poison.png" },
					{ id: "firered-thms-2-ak", text: "TM 37 - Sandstorm", done: false, img: "imgs/tms/gen3-5/rock.png" },
					{ id: "firered-thms-2-al", text: "TM 38 - Fire Blast", done: false, img: "imgs/tms/gen3-5/fire.png" },
					{ id: "firered-thms-2-am", text: "TM 39 - Rock Tomb", done: false, img: "imgs/tms/gen3-5/rock.png" },
					{ id: "firered-thms-2-an", text: "TM 40 - Aerial Ace", done: false, img: "imgs/tms/gen3-5/flying.png" },
					{ id: "firered-thms-2-ao", text: "TM 41 - Torment", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "firered-thms-2-ap", text: "TM 42 - Facade", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-aq", text: "TM 43 - Secret Power", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-ar", text: "TM 44 - Rest", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-as", text: "TM 45 - Attract", done: false, img: "imgs/tms/gen3-5/normal.png" },
					{ id: "firered-thms-2-at", text: "TM 46 - Thief", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "firered-thms-2-au", text: "TM 47 - Steel Wing", done: false, img: "imgs/tms/gen3-5/steel.png" },
					{ id: "firered-thms-2-av", text: "TM 48 - Skill Swap", done: false, img: "imgs/tms/gen3-5/psychic.png" },
					{ id: "firered-thms-2-aw", text: "TM 49 - Snatch", done: false, img: "imgs/tms/gen3-5/dark.png" },
					{ id: "firered-thms-2-ax", text: "TM 50 - Overheat", done: false, img: "imgs/tms/gen3-5/fire.png" },
				]
			},
		]
	},
});