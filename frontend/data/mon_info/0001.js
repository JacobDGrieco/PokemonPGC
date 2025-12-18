(() => {
	const natiId = 1;
	const nameVal = "Bulbasaur";
	const games = gameSearch("gen1");

	const monInfoByGame = Object.fromEntries(
		Object.entries(games).map(([gameKey, gen]) => [
			gameKey,
			{
				[natiId]: {
					name: nameVal,
					species: "Seed Pokémon",
					size: { height: "0.7 m", weight: "6.9 kg" },
					baseStats: { hp: 45, atk: 49, def: 49, special: 65, spe: 45 },
					expGroup: "Slow",
					catchRate: 45,
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
				$forGames: ["red", "blue"],
				$value: ({ gameKey, gen = 1 }) => ({
					[natiId]: {
						locations: ["Starter Pokémon"],
						moves: {
							levelUp: [
								{ level: 1, name: "Tackle", type: "Normal" },
								{ level: 1, name: "Growl", type: "Normal" },
								{ level: 7, name: "Leech Seed", type: "Grass" },
								{ level: 13, name: "Vine Whip", type: "Grass" },
								{ level: 20, name: "Poison Powder", type: "Poison" },
								{ level: 27, name: "Razor Leaf", type: "Grass" },
								{ level: 34, name: "Growth", type: "Normal" },
								{ level: 41, name: "Sleep Powder", type: "Grass" },
								{ level: 48, name: "Solar Beam", type: "Grass" },
							],
							tm: [
								{ name: "Swords Dance", tm: "TM03", type: "Normal" },
								{ name: "Toxic", tm: "TM06", type: "Poison" },
								{ name: "Body Slam", tm: "TM08", type: "Normal" },
								{ name: "Take Down", tm: "TM09", type: "Normal" },
								{ name: "Double-Edge", tm: "TM10", type: "Normal" },
								{ name: "Rage", tm: "TM20", type: "Normal" },
								{ name: "Mega Drain", tm: "TM21", type: "Grass" },
								{ name: "Solar Beam", tm: "TM22", type: "Grass" },
								{ name: "Mimic", tm: "TM31", type: "Normal" },
								{ name: "Double Team", tm: "TM32", type: "Normal" },
								{ name: "Reflect", tm: "TM33", type: "Psychic" },
								{ name: "Bide", tm: "TM34", type: "Normal" },
								{ name: "Rest", tm: "TM44", type: "Psychic" },
								{ name: "Substitute", tm: "TM50", type: "Normal" },
								{ name: "Cut", tm: "TM01", type: "Normal" },
							],
							egg: [],
						},
					},
				}),
			},
		},
		{
			monInfo: {
				$forGames: ["yellow"],
				$value: ({ gameKey, gen = 1 }) => ({
					[natiId]: {
						moves: {
							levelUp: [
								{ level: 1, name: "Tackle", type: "Normal" },
								{ level: 1, name: "Growl", type: "Normal" },
								{ level: 7, name: "Leech Seed", type: "Grass" },
								{ level: 13, name: "Vine Whip", type: "Grass" },
								{ level: 20, name: "Poison Powder", type: "Poison" },
								{ level: 27, name: "Razor Leaf", type: "Grass" },
								{ level: 34, name: "Growth", type: "Normal" },
								{ level: 41, name: "Sleep Powder", type: "Grass" },
								{ level: 48, name: "Solar Beam", type: "Grass" },
							],
							tm: [
								{ name: "Swords Dance", tm: "TM03", type: "Normal" },
								{ name: "Toxic", tm: "TM06", type: "Poison" },
								{ name: "Body Slam", tm: "TM08", type: "Normal" },
								{ name: "Take Down", tm: "TM09", type: "Normal" },
								{ name: "Double-Edge", tm: "TM10", type: "Normal" },
								{ name: "Rage", tm: "TM20", type: "Normal" },
								{ name: "Mega Drain", tm: "TM21", type: "Grass" },
								{ name: "Solar Beam", tm: "TM22", type: "Grass" },
								{ name: "Mimic", tm: "TM31", type: "Normal" },
								{ name: "Double Team", tm: "TM32", type: "Normal" },
								{ name: "Reflect", tm: "TM33", type: "Psychic" },
								{ name: "Bide", tm: "TM34", type: "Normal" },
								{ name: "Rest", tm: "TM44", type: "Psychic" },
								{ name: "Substitute", tm: "TM50", type: "Normal" },
								{ name: "Cut", tm: "TM01", type: "Normal" },
							],
							egg: [],
						},
					},
				}),
			},
		},
	]);
})();