const natiId = 130;
const nameVal = "Gyarados";

window.PPGC.register([
	{
		monInfo: {
			$forGames: ["red", "blue"],
			$value: ({ gameKey, gen = 1 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 1 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 1 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 2 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 2 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 3 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 3 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 3 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 4 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 4 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 5 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 5 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 6 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 6 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 7 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 7 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = "7_2" }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 8 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = "8_2" }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = "8_2" }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = 9 }) => ({
				[natiId]: {
					name: nameVal,
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
			$value: ({ gameKey, gen = "9_2" }) => ({
				[natiId]: {
					name: nameVal,
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