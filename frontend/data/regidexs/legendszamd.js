const game = "legendsza";
const sub = game + "md";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const lumioseDex = (...args) => _dex(game, "regional", ...args);
const mdDex = (...args) => _dex(game + "md", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Mega Dimensions Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 2, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
		]
	}
});