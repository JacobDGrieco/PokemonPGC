const natiId = 130;

// Regional IDs
const xyId = 50;
const orasId = 54;
const smId = 92;
const usumId = 112;
const lgpeId = 130;
const swshId = 145;
const bdspId = 24;
const laId = 81;
const scviId = 135;
const lzaId = 33;

window.PPGC.register({
	monInfo: {
		"x-central": {
			[xyId]: {
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
			[xyId]: {
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
			[orasId]: {
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
			[orasId]: {
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
			[smId]: {
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
			[smId]: {
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
			[usumId]: {
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
			[usumId]: {
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
			[lgpeId]: {
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
			[lgpeId]: {
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
			[swshId]: {
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
			[swshId]: {
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
			[bdspId]: {
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
			[bdspId]: {
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
			[laId]: {
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
			[scviId]: {
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
			[scviId]: {
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
			[lzaId]: {
				sprites: {
					front: _frontSprite("9_2", "legendsza", natiId),
					frontShiny: _frontSpriteShiny("9_2", "legendsza", natiId),
				},
				models: {
					base: _baseModel("9_2", "legendsza", natiId),
					shiny: _shinyModel("9_2", "legendsza", natiId),
				},
			},
		},
	},
});
