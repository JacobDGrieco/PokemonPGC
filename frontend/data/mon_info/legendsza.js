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
						{ level: 1, name: "Tackle" },
						{ level: 3, name: "Growl" },
						{ level: 7, name: "Leech Seed" },
					],
					tm: [
						"TM06 Toxic",
						"TM09 Bullet Seed",
					],
					egg: [
						"Curse",
						"Charm",
					],
				},
			},
		},
	},
});
