const natiId = 888;

window.PPGC.register([
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
]);