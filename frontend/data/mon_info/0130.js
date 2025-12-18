const natiId = 130;

<<<<<<< HEAD
window.PPGC.register({
	monInfo: {
		"x-central": {
			[natiId]: {
				sprites: {
					front: _frontSprite(6, "x", natiId),
					frontShiny: _frontSpriteShiny(6, "x", natiId),
				},
				models: {
					base: _baseModel(6, "x", natiId),
					shiny: _shinyModel(6, "x", natiId),
				},
			},
		},
		"y-central": {
			[natiId]: {
				sprites: {
					front: _frontSprite(6, "y", natiId),
					frontShiny: _frontSpriteShiny(6, "y", natiId),
				},
				models: {
					base: _baseModel(6, "y", natiId),
					shiny: _shinyModel(6, "y", natiId),
				},
			},
		},
		omegaruby: {
			[natiId]: {
				sprites: {
					front: _frontSprite(6, "omegaruby", natiId),
					frontShiny: _frontSpriteShiny(6, "omegaruby", natiId),
				},
				models: {
					base: _baseModel(6, "omegaruby", natiId),
					shiny: _shinyModel(6, "omegaruby", natiId),
				},
			},
		},
		alphasapphire: {
			[natiId]: {
				sprites: {
					front: _frontSprite(6, "alphasapphire", natiId),
					frontShiny: _frontSpriteShiny(6, "alphasapphire", natiId),
				},
				models: {
					base: _baseModel(6, "alphasapphire", natiId),
					shiny: _shinyModel(6, "alphasapphire", natiId),
				},
			},
		},
		"sun-alola": {
			[natiId]: {
				sprites: {
					front: _frontSprite(7, "sun", natiId),
					frontShiny: _frontSpriteShiny(7, "sun", natiId),
				},
				models: {
					base: _baseModel(7, "sun", natiId),
					shiny: _shinyModel(7, "sun", natiId),
				},
			},
		},
		"moon-alola": {
			[natiId]: {
				sprites: {
					front: _frontSprite(7, "moon", natiId),
					frontShiny: _frontSpriteShiny(7, "moon", natiId),
				},
				models: {
					base: _baseModel(7, "moon", natiId),
					shiny: _shinyModel(7, "moon", natiId),
				},
			},
		},
		"ultrasun-alola": {
			[natiId]: {
				sprites: {
					front: _frontSprite(7, "ultrasun", natiId),
					frontShiny: _frontSpriteShiny(7, "ultrasun", natiId),
				},
				models: {
					base: _baseModel(7, "ultrasun", natiId),
					shiny: _shinyModel(7, "ultrasun", natiId),
				},
			},
		},
		"ultramoon-alola": {
			[natiId]: {
				sprites: {
					front: _frontSprite(7, "ultramoon", natiId),
					frontShiny: _frontSpriteShiny(7, "ultramoon", natiId),
				},
				models: {
					base: _baseModel(7, "ultramoon", natiId),
					shiny: _shinyModel(7, "ultramoon", natiId),
				},
			},
		},
		letsgopikachu: {
			[natiId]: {
				sprites: {
					front: _frontSprite("7_2", "letsgopikachu", natiId),
					frontShiny: _frontSpriteShiny("7_2", "letsgopikachu", natiId),
				},
				models: {
					base: _baseModel("7_2", "letsgopikachu", natiId),
					shiny: _shinyModel("7_2", "letsgopikachu", natiId),
				},
			},
		},
		letsgoeevee: {
			[natiId]: {
				sprites: {
					front: _frontSprite("7_2", "letsgoeevee", natiId),
					frontShiny: _frontSpriteShiny("7_2", "letsgoeevee", natiId),
				},
				models: {
					base: _baseModel("7_2", "letsgoeevee", natiId),
					shiny: _shinyModel("7_2", "letsgoeevee", natiId),
				},
			},
		},
		sword: {
			[natiId]: {
				sprites: {
					front: _frontSprite(8, "sword", natiId),
					frontShiny: _frontSpriteShiny(8, "sword", natiId),
				},
				models: {
					base: _baseModel(8, "sword", natiId),
					shiny: _shinyModel(8, "sword", natiId),
				},
			},
		},
		shield: {
			[natiId]: {
				sprites: {
					front: _frontSprite(8, "shield", natiId),
					frontShiny: _frontSpriteShiny(8, "shield", natiId),
				},
				models: {
					base: _baseModel(8, "shield", natiId),
					shiny: _shinyModel(8, "shield", natiId),
				},
			},
		},
		brilliantdiamond: {
			[natiId]: {
				sprites: {
					front: _frontSprite("8_2", "brilliantdiamond", natiId),
					frontShiny: _frontSpriteShiny("8_2", "brilliantdiamond", natiId),
				},
				models: {
					base: _baseModel("8_2", "brilliantdiamond", natiId),
					shiny: _shinyModel("8_2", "brilliantdiamond", natiId),
				},
			},
		},
		shiningpearl: {
			[natiId]: {
				sprites: {
					front: _frontSprite("8_2", "shiningpearl", natiId),
					frontShiny: _frontSpriteShiny("8_2", "shiningpearl", natiId),
				},
				models: {
					base: _baseModel("8_2", "shiningpearl", natiId),
					shiny: _shinyModel("8_2", "shiningpearl", natiId),
				},
			},
		},
		legendsarceus: {
			[natiId]: {
				sprites: {
					front: _frontSprite("8_2", "legendsarceus", natiId),
					frontShiny: _frontSpriteShiny("8_2", "legendsarceus", natiId),
				},
				models: {
					base: _baseModel("8_2", "legendsarceus", natiId),
					shiny: _shinyModel("8_2", "legendsarceus", natiId),
				},
			},
		},
		scarlet: {
			[natiId]: {
				sprites: {
					front: _frontSprite(9, "scarlet", natiId),
					frontShiny: _frontSpriteShiny(9, "scarlet", natiId),
				},
				models: {
					base: _baseModel(9, "scarlet", natiId),
					shiny: _shinyModel(9, "scarlet", natiId),
				},
			},
		},
		violet: {
			[natiId]: {
				sprites: {
					front: _frontSprite(9, "violet", natiId),
					frontShiny: _frontSpriteShiny(9, "violet", natiId),
				},
				models: {
					base: _baseModel(9, "violet", natiId),
					shiny: _shinyModel(9, "violet", natiId),
				},
			},
		},
		legendsza: {
			[natiId]: {
				sprites: {
					front: _frontSprite("9_2", "legendsza", natiId),
					frontShiny: _frontSpriteShiny("9_2", "legendsza", natiId),
				},
				models: {
					base: _baseModel("9_2", "legendsza", natiId),
					shiny: _shinyModel("9_2", "legendsza", natiId),
				},
			},
=======
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
>>>>>>> 92ded9bde0595907592bbf0f625e52c7b91b2fb3
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