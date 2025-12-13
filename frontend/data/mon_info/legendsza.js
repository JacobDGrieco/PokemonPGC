window.PPGC.register({
	monInfo: {
		legendsza: {
			1: {
				// --- Core ---
				types: ["Grass"],
				species: "Seed Pokémon",
				flavor: "A strange seed was planted on its back at birth.",

				// --- Abilities & breeding ---
				abilities: ["Overgrow", "Chlorophyll (Hidden)"],
				eggGroups: ["Monster", "Grass"],
				baseEggSteps: 5120,

				// --- Size / gender ---
				size: { height: "0.9 m", weight: "6.4 kg" },
				gender: { maleRatio: 87.5, femaleRatio: 12.5, },

				// --- Battle / growth ---
				baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
				evYield: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
				expGroup: "Medium Slow",
				baseFriendship: 70,

				// --- Evolution ---
				evolution: {
					stage: 1,
					paths: [
						// each path is a full chain from the base to a final form
						[
							{ id: 133, name: "Eevee" },
							{ id: 134, name: "Vaporeon", method: "Item", value: "Water Stone" },
						],
						[
							{ id: 133, name: "Eevee" },
							{ id: 136, name: "Jolteon", method: "Item", value: "Thunder Stone" },
						],
					],
				},

				// --- Encounter / locations ---
				encounter: {
					method: "Overworld",
					time: ["Day", "Morning"],
					weather: ["Clear", "Rain"],
					rarity: "Common",
					aggressive: false,
				},
				catchRate: 50,
				locations: [
					"Route 1 – Grass patches",
					{ area: "Special Event", notes: "Starter gift from Professor" },
				],

				// --- Movesets ---
				moves: {
					levelUp: [
						{ level: 1, name: "Tackle", type: "Normal" },
						{ level: 3, name: "Growl", type: "Normal" },
						{ level: 7, name: "Leech Seed", type: "Normal" },
					],
					tm: [
						{ name: "TM06 Toxic", type: "Poison" },
						{ name: "TM09 Bullet Seed", type: "Grass" },
					],
					egg: [
						{ name: "Curse", type: "Ghost" },
						{ name: "Charm", type: "Fairy" },
					],
				},

				sprites: {
					front: "imgs/sprites/gen9/legendsza/base-icons/001.png",
					back: "imgs/sprites/gen9/legendsza/base-icons/002.png",
					icon: "imgs/sprites/gen9/legendsza/base-icons/003.png",
					frontShiny: "imgs/sprites/gen9/legendsza/shiny-icons/001.png",
					backShiny: "imgs/sprites/gen9/legendsza/shiny-icons/002.png",
					iconShiny: "imgs/sprites/gen9/legendsza/shiny-icons/003.png"
				},
				models: {
					base: "imgs/sprites/gen9/legendsza/models/152.glb",
					shiny: "",
					thumbBase: "imgs/sprites/gen9/legendsza/base-modals/002.png",
					thumbShiny: "imgs/sprites/gen9/legendsza/shiny-modals/002.png"
				},

				// --- Misc / dev notes ---
				notes: [
					"Starter Pokémon in Legends Z-A",
					"Uses updated move pool compared to Gen 9",
				],
			},
		},
	},
});
