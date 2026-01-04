(() => {
	const natiId = 152;
	const nameVal = "Chikorita";
	const games = gameSearch("gen2", "gen3", "gen4", "gen5", "gen6", "gen7", "bdsp", "scvi", "lza");

	const monInfoByGame = Object.fromEntries(
		Object.entries(games).map(([gameKey, gen]) => [
			gameKey,
			{
				[natiId]: {
					name: nameVal,
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
								{ id: 152, name: "Chikorita" },
								{ id: 153, name: "Bayleef", method: "Level", value: "16" },
								{ id: 154, name: "Meganium", method: "Level", value: "32" },
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
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
						backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
						frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
						backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
					},
					models: {
						base: _baseModel(gen, gameKey, natiId),
						shiny: _shinyModel(gen, gameKey, natiId),
					},
				},
			},
		])
	);

	window.PPGC.register([
		{ monInfo: monInfoByGame, },
		{
			monInfo: {
				$forGames: ["legendsza"],
				$value: ({ gameKey, gen = "9_2" }) => ({
					[natiId]: {
						locations: [
							"Route 1 – Grass patches",
							{ area: "Special Event", notes: "Starter gift from Professor" },
						],
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
						notes: [
							"Starter Pokémon in Legends Z-A",
							"Uses updated move pool compared to Gen 9",
						],
					},
				}),
			},
		},
	]);
})();