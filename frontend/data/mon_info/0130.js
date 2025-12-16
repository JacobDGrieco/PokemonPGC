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
		letsgopikachu: {
			130: {
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
		sword: {
			145: {
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
