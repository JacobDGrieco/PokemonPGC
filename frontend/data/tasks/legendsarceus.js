// Gen & Game
const gen = "8_2";
const game = "legendsarceus";

// Local wrappers
const regionalDex = (id) => _dex(game, "regional", id);
const baseSprite = (id) => _sprite(game, false, id);
const baseSpriteIcon = (id) => _sprite(game, false, id, true);
const shinySprite = (id) => _sprite(game, true, id);
const shinySpriteIcon = (id) => _sprite(game, true, id, true);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const fashion = game + "-fashion";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: fashion, title: "Fashion" },
			{ id: thms, title: "Ride Pokemon" },
			{ id: distributions, title: "Distributions" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Dialga", img: baseSprite(483), dexSync: [regionalDex(235)], },
					{ id: catching + "-1-02", text: "Catch Palkia", img: baseSprite(484), dexSync: [regionalDex(236)], },
					{ id: catching + "-1-03", text: "Catch Giratina", img: baseSprite(487), dexSync: [regionalDex(237)], },
				],
			},
		],
		[thms]: [
			{ id: thms + "-1", text: "Wydeer", done: false, img: baseSprite(899) },
			{ id: thms + "-2", text: "Ursaluna", done: false, img: baseSprite(901) },
			{ id: thms + "-3", text: "Basculegion", done: false, img: baseSprite(902) },
			{ id: thms + "-4", text: "Sneasler", done: false, img: baseSprite(903) },
			{ id: thms + "-5", text: "Braviary", done: false, img: baseSprite("628-h") },
		]
	},
});
