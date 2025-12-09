// Gen & Game
const gen = "9_2";
const game = "legendsza";
const sub = game + "md";

// Local wrappers
const lumioseDex = (...args) => _dex(game, "regional", ...args);
const mdDex = (...args) => _dex(game + "md", "regional", ...args);
const baseSprite = (id) => _sprite(game, false, id);
const baseSpriteIcon = (id) => _sprite(game, false, id, false);
const shinySprite = (id) => _sprite(game, true, id);
const shinySpriteIcon = (id) => _sprite(game, true, id, false);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const megaStone = (stone) => _megaStone(gen, stone);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const megaStones = sub + "-mega-stones";
const fashion = sub + "-fashion";

// Data
PPGC.register({
	sections: {
		[sub]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: megaStones, title: "Mega Stones" },
			{ id: fashion, title: "Fashion" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Hoopa", img: baseSpriteIcon(720), },
				],
			},
		],
		[sideQuests]: [
			{ id: sideQuests + "-01", text: "EX Quest EX1 - Shine Bright Like a Gemstone", dexSync: [lumioseDex(241)], },
			{ id: sideQuests + "-02", text: "EX Quest EX2 - Project M", dexSync: [lumioseDex(242)], },
		],
		[megaStones]: [
			{ id: megaStones + "-01", text: "Diancite", img: [baseSprite("719-m"), megaStone("diancite")], },
			{ id: megaStones + "-02", text: "Mewtwonite X", img: [baseSprite("150-mx"), megaStone("mewtwonite-x")], },
			{ id: megaStones + "-03", text: "Mewtownite Y", img: [baseSprite("150-my"), megaStone("mewtwonite-y")], },
		],
	},
});
