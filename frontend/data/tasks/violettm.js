// Gen & Game
const gen = 9;
const game = "violet";
const sub = game + "tm";

// Local wrappers
const paldeaDex = (...args) => _dex(game, "regional", ...args);
const tmDex = (...args) => _dex(game + "tm", "regional", ...args);
const idDex = (...args) => _dex(game + "id", "regional", ...args);
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);
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
			{ id: "scarlettm-story", title: "Main Story" },
			{ id: "scarlettm-side-quests", title: "Side Quests" },
			{ id: "scarlettm-battle", title: "Battle" },
			{ id: "scarlettm-upgrades", title: "Upgrades" }, // Move activities to here
			{ id: "scarlettm-collectables", title: "Collectables" },
			{ id: "scarlettm-fashion", title: "Fashion" },
			{ id: "scarlettm-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Okidogi", img: baseSprite(1014), dexSync: [tmDex(197)], },
					{ id: catching + "-1-02", text: "Catch Munkidori", img: baseSprite(1015), dexSync: [tmDex(198)], },
					{ id: catching + "-1-03", text: "Catch Fezandipiti", img: baseSprite(1016), dexSync: [tmDex(199)], },
					{ id: catching + "-1-04", text: "Catch Ogerpon", img: baseSprite(1017), dexSync: [tmDex(200)], },
				],
			},
		],
	},
});