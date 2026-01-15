(() => {
	const natiId = 892;
	const form = "gigantamax-single-strike-style";
	const games = gameSearch("swsh");

	const monInfoFormsByGame = Object.fromEntries(
		Object.entries(games).map(([gameKey, gen]) => [
			gameKey,
			{
				[natiId]: {
					[form]: {
						sprites: {
							front: _frontSprite(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							back: _backSprite(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							frontAnimated: _frontSpriteAnimated(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							backAnimated: _backSpriteAnimated(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							frontShiny: _frontSpriteShiny(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							backShiny: _backSpriteShiny(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							frontShinyAnimated: _frontSpriteShinyAnimated(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
							backShinyAnimated: _backSpriteShinyAnimated(gen, gameKey, natiId + "-" + formKeyToSuffix(natiId, form)),
						},
						models: {
							base: _baseModel(gen, gameKey, natiId, form),
							shiny: _shinyModel(gen, gameKey, natiId, form),
						},
					},
				},
			},
		])
	);

	window.PPGC.register({
		monInfoForms: monInfoFormsByGame,
	});
})();