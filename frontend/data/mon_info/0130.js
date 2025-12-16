const natiId = 130;

window.PPGC.register({
	monInfo: {
		"x-central": {
			50: {
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
		scarlet: {
			135: {
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
	},
});
