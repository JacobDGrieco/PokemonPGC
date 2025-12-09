// Gen & Game
const gen = 9;
const game = "scarlet";
const sub = game + "id";

// Local wrappers
const paldeaDex = (id) => _dex(game, "regional", id);
const tmDex = (id) => _dex(game + "tm", "regional", id);
const idDex = (id) => _dex(game + "id", "regional", id);
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const activites = sub + "-activites";
const battle = sub + "-battle";
const upgrades = sub + "-upgrades";
const collectables = sub + "-collectables";
const fashion = sub + "-fashion";
const extraCredit = sub + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[sub]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: activites, title: "Activities" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" }, // move Koraidon fly to here
			{ id: collectables, title: "Collectables" },
			{ id: fashion, title: "Fashion" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Terapagos", img: baseSprite(1024), dexSync: [idDex(240)], },
				],
			},
		],
	},
});
