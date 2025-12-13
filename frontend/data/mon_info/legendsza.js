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
				gender: {
					maleRatio: 87.5,
					femaleRatio: 12.5,
					differences: true,
				},

				// --- Battle / growth ---
				baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
				evYield: { hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },
				expGroup: "Medium Slow",
				baseFriendship: 70,

				// --- Special variants ---
				specialForms: {
					alpha: {
						has: true,
						sizeMultiplier: 1.3,
						guaranteedMoves: ["Petal Dance"],
						notes: "Spawns at higher levels",
					},
				},

				// --- Evolution ---
				evolution: {
					stage: 1,
					chain: [
						{ id: 1, name: "Chikorita" },
						{ id: 2, name: "Bayleaf", method: "Level", value: 16 },
						{ id: 3, name: "Meganium", method: "Level", value: 32 },
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

				// --- Misc / dev notes ---
				notes: [
					"Starter Pokémon in Legends Z-A",
					"Uses updated move pool compared to Gen 9",
				],
			},
		},
	},
});
