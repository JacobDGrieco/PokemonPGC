(() => {
	const natiId = 25;
	const nameVal = "Pikachu";

	const byGame = {
		"legendsza": "9_2",
		"legendszamd": "9_2",
		"scarlet": 9,
		"scarlettm": 9,
		"scarletid": 9,
		"violet": 9,
		"violettm": 9,
		"violetid": 9,
		"legendsarceus": "8_2",
		"brilliantdiamond-national": "8_2",
		"brilliantdiamond": "8_2",
		"shiningpearl-national": "8_2",
		"shiningpearl": "8_2",
		"sword": 8,
		"swordioa": 8,
		"swordct": 8,
		"shield": 8,
		"shieldioa": 8,
		"shieldct": 8,
		"letsgopikachu": "7_2",
		"letsgoeevee": "7_2",
		"ultrasun-alola": 7,
		"ultrasun-melemele": 7,
		"ultrasun-akala": 7,
		"ultrasun-ulaula": 7,
		"ultrasun-poni": 7,
		"ultramoon-alola": 7,
		"ultramoon-melemele": 7,
		"ultramoon-akala": 7,
		"ultramoon-ulaula": 7,
		"ultramoon-poni": 7,
		"sun-alola": 7,
		"sun-melemele": 7,
		"sun-akala": 7,
		"sun-ulaula": 7,
		"sun-poni": 7,
		"moon-alola": 7,
		"moon-melemele": 7,
		"moon-akala": 7,
		"moon-ulaula": 7,
		"moon-poni": 7,
		"omegaruby-national": 6,
		"omegaruby": 6,
		"alphasapphire-national": 6,
		"alphasapphire": 6,
		"x-national": 6,
		"x-central": 6,
		"x-coastal": 6,
		"x-mountain": 6,
		"y-national": 6,
		"y-central": 6,
		"y-coastal": 6,
		"y-mountain": 6,
		"black2-national": 5,
		"black2": 5,
		"white2-national": 5,
		"white2": 5,
		"black-national": 5,
		"black": 5,
		"white-national": 5,
		"white": 5,
		"heartgold-national": 4,
		"heartgold": 4,
		"soulsilver-national": 4,
		"soulsilver": 4,
		"platinum-national": 4,
		"platinum": 4,
		"diamond-national": 4,
		"diamond": 4,
		"pearl-national": 4,
		"pearl": 4,
		"firered-national": 3,
		"firered": 3,
		"leafgreen-national": 3,
		"leafgreen": 3,
		"emerald-national": 3,
		"emerald": 3,
		"ruby-national": 3,
		"ruby": 3,
		"sapphire-national": 3,
		"sapphire": 3,
		"crystal": 2,
		"silver": 2,
		"gold": 2,
		"yellow": 1,
		"red": 1,
		"blue": 1,
		"green": 1,
	};

	const monInfoByGame = Object.fromEntries(
		Object.entries(byGame).map(([gameKey, gen]) => [
			gameKey,
			{
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
			},
		])
	);

	window.PPGC.register([
		{
			monInfo: monInfoByGame,
		},
		// {
		// 	monInfo: {
		// 		$forGames: ["red", "blue"],
		// 		$value: ({ gameKey, gen = 1 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["green"],
		// 		$value: ({ gameKey, gen = 1 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["yellow"],
		// 		$value: ({ gameKey, gen = 1 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["gold", "silver"],
		// 		$value: ({ gameKey, gen = 2 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["crystal"],
		// 		$value: ({ gameKey, gen = 2 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["ruby", "ruby-national", "sapphire", "sapphire-national"],
		// 		$value: ({ gameKey, gen = 3 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["emerald", "emerald-national"],
		// 		$value: ({ gameKey, gen = 3 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["firered", "firered-national", "leafgreen", "leafgreen-national"],
		// 		$value: ({ gameKey, gen = 3 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["diamond", "diamond-national", "pearl", "pearl-national"],
		// 		$value: ({ gameKey, gen = 4 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["platinum", "platinum-national"],
		// 		$value: ({ gameKey, gen = 4 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["black", "black-national", "white", "white-national"],
		// 		$value: ({ gameKey, gen = 5 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["black2", "black2-national", "white2", "white2-national"],
		// 		$value: ({ gameKey, gen = 5 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["x-central", "x-coastal", "x-mountain", "x-national", "y-central", "y-coastal", "y-mountain", "y-national"],
		// 		$value: ({ gameKey, gen = 6 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["omegaruby", "omegaruby-national", "alphasapphire", "alphasappire-national"],
		// 		$value: ({ gameKey, gen = 6 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"],
		// 		$value: ({ gameKey, gen = 7 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],
		// 		$value: ({ gameKey, gen = 7 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["letsgopikachu", "letsgoeevee"],
		// 		$value: ({ gameKey, gen = "7_2" }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"],
		// 		$value: ({ gameKey, gen = 8 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["brilliantdiamond", "shiningpearl"],
		// 		$value: ({ gameKey, gen = "8_2" }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["legendsarceus"],
		// 		$value: ({ gameKey, gen = "8_2" }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["scarlet", "scarlettm", "scarletid", "violet", "violettm", "violetid"],
		// 		$value: ({ gameKey, gen = 9 }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// {
		// 	monInfo: {
		// 		$forGames: ["legendsza", "legendszamd"],
		// 		$value: ({ gameKey, gen = "9_2" }) => ({
		// 			[natiId]: {
		// 				name: nameVal,
		// 				sprites: {
		// 					front: _frontSprite(gen, gameKey, natiId),
		// 					back: _backSprite(gen, gameKey, natiId),
		// 					frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId),
		// 					backAnimated: _backSpriteAnimated(gen, gameKey, natiId),
		// 					frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
		// 					backShiny: _backSpriteShiny(gen, gameKey, natiId),
		// 					frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId),
		// 					backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId),
		// 				},
		// 				models: {
		// 					base: _baseModel(gen, gameKey, natiId),
		// 					shiny: _shinyModel(gen, gameKey, natiId),
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
	]);
})();