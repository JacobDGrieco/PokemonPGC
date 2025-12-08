window.PPGC.register({
	monInfo: {
		legendsza: {
			1: {
				types: ["Grass"],
				species: "Seed Pokémon",
				heightM: 0.7,
				weightKg: 6.9,
				eggGroups: ["Monster", "Grass"],
				abilities: ["Overgrow", "Chlorophyll (Hidden)"],
				baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
				expGroup: "Medium Slow",
				baseEggSteps: 5120,
				// optional flavor text if you ever want it:
				flavor: "A strange seed was planted on its back at birth.",
				// simple evolution chain; you can get fancy later
				evolution: {
					stage: 1,
					chain: [
						{ id: 1, name: "Chikorita", level: null },
						{ id: 2, name: "Bayleaf", level: 16 },
						{ id: 3, name: "Meganium", level: 32 },
					],
				},
				locations: [
					"Route 1 – Grass patches",
					{ area: "Special Event", notes: "Starter gift from Professor" }
				],
				// move pools – structure however you like
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
			},
		},
	},
});