const natiId = 26;

window.PPGC.register([
	{
		monInfo: {
			$forGames: ["red", "blue"],
			$ctx: { gen: 1 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["green"],
			$ctx: { gen: 1 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["yellow"],
			$ctx: { gen: 1 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["gold", "silver"],
			$ctx: { gen: 2 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["crystal"],
			$ctx: { gen: 2 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["ruby", "ruby-national", "sapphire", "sapphire-national"],
			$ctx: { gen: 3 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["emerald", "emerald-national"],
			$ctx: { gen: 3 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["firered", "firered-national", "leafgreen", "leafgreen-national"],
			$ctx: { gen: 3 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["diamond", "diamond-national", "pearl", "pearl-national"],
			$ctx: { gen: 4 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["platinum", "platinum-national"],
			$ctx: { gen: 4 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["black", "black-national", "white", "white-national"],
			$ctx: { gen: 5 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
					},
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["black2", "black2-national", "white2", "white2-national"],
			$ctx: { gen: 5 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
				},
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["x-central", "x-coastal", "x-mountain", "x-national", "y-central", "y-coastal", "y-mountain", "y-national"],
			$ctx: { gen: 6 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["omegaruby", "omegaruby-national", "alphasapphire", "alphasappire-national"],
			$ctx: { gen: 6 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"],
			$ctx: { gen: 7 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],
			$ctx: { gen: 7 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["letsgopikachu", "letsgoeevee"],
			$ctx: { gen: "7_2" },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"],
			$ctx: { gen: 8 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["brilliantdiamond", "shiningpearl"],
			$ctx: { gen: "8_2" },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["legendsarceus"],
			$ctx: { gen: "8_2" },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["scarlet", "scarlettm", "scarletid", "violet", "violettm", "violetid"],
			$ctx: { gen: 9 },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
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
			}),
		},
	},
	{
		monInfo: {
			$forGames: ["legendsza", "legendszamd"],
			$ctx: { gen: "9_2" },
			$value: ({ gameKey, gen }) => ({
				[natiId]: {
					types: ["Bitch ass boy"],
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
			}),
		},
	},
]);