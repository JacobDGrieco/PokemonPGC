const game = "legendsza";
const sub = game + "md";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const lumioseDex = (id) => _regionalDex(game, "regional", id);
const mdDex = (id) => _regionalDex(game + "md", "regional", id);
const lumioseDexForm = (id, form) => _regionalDex(game, "regional", id, form);
const mdDexForm = (id, form) => _regionalDex(game + "md", "regional", id, form);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Mega Dimensions Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Lucario", img: baseSprite(448), imgS: shinySprite(448), },
		]
	}
});