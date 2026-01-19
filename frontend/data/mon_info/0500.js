(() => {
	const natiId = 500;
	const nameVal = "Emboar";
	const games = gameSearch("gen5", "gen6", "gen7", "scvi", "lza");

	const monInfoByGame = Object.fromEntries(
		Object.entries(games).map(([gameKey, gen]) => [
			gameKey,
			{
				[natiId]: {
					name: nameVal,
					sprites: {
						front: _frontSprite(gen, gameKey, natiId),
						back: _backSprite(gen, gameKey, natiId),
						frontAnimated: (gen < 5) ? null : _frontSpriteAnimated(gen, gameKey, natiId),
						backAnimated: (gen < 5) ? null : _backSpriteAnimated(gen, gameKey, natiId),
						icon: (gameKey === "legendsarceus" || gameKey === "legendsza") ? _iconSprite(gen, gameKey, natiId) : null,
						iconShiny: (gameKey === "legendsarceus" || gameKey === "legendsza") ? _iconSpriteShiny(gen, gameKey, natiId) : null,
						menu: (gameKey === "legendsarceus" || gameKey === "legendsza") ? null : _menuSprite(gen, gameKey, natiId),
						frontShiny: _frontSpriteShiny(gen, gameKey, natiId),
						backShiny: _backSpriteShiny(gen, gameKey, natiId),
						frontShinyAnimated: (gen < 5) ? null : _frontSpriteShinyAnimated(gen, gameKey, natiId),
						backShinyAnimated: (gen < 5) ? null : _backSpriteShinyAnimated(gen, gameKey, natiId),
					},
					models: {
						base: (gen >= 6) ? _baseModel(gen, gameKey, natiId) : null,
						shiny: (gen >= 6) ? _shinyModel(gen, gameKey, natiId) : null,
					},
				},
			},
		])
	);

	window.PPGC.register([
		{ monInfo: monInfoByGame, },
	]);
})();
