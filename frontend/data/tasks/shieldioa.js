// Gen & Game
const gen = 8;
const game = "shield";
const sub = game + "ioa";

// Local wrappers
const galarDex = (...args) => _dex(game, "regional", ...args);
const ioaDex = (...args) => _dex(game + "ioa", "regional", ...args);
const ctDex = (...args) => _dex(game + "ct", "regional", ...args);
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const trainerCard = (type, name) => _trainerCard("ioa", type, name);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);
const tr = (type) => _tr(type);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const battle = sub + "-battle";
const upgrades = sub + "-upgrades";
const collectables = sub + "-collectables";
const trainerCards = sub + "-trainer-cards";
const fashion = sub + "-fashion";

// Data
PPGC.register({
	sections: {
		[sub]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: trainerCards, title: "Trainer Card" },
			{ id: fashion, title: "Fashion" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Kubfu", img: baseSprite(891), dexSync: [ioaDex(149)], },
					{ id: catching + "-1-02", text: "Evolve to Urshifu", img: [baseSprite(892), baseSprite("892-r")], },
				],
			},
		],
		[trainerCards]: [
			{
				id: trainerCards + "-1", text: "Obtain all League Card Backgrounds", children: [
					{ id: trainerCards + "-1-01", text: "Master Dojo (Kitchen)", img: trainerCard("backgrounds", "master-dojo-kitchen") },
					{ id: trainerCards + "-1-02", text: "Master Dojo", img: trainerCard("backgrounds", "master-dojo") },
					{ id: trainerCards + "-1-03", text: "Master Dojo (Night)", img: trainerCard("backgrounds", "master-dojo-night") },
					{ id: trainerCards + "-1-04", text: "Master Dojo (Path)", img: trainerCard("backgrounds", "master-dojo-path") },
					{ id: trainerCards + "-1-05", text: "Master Dojo (Dojo)", img: trainerCard("backgrounds", "master-dojo-dojo") },
					{ id: trainerCards + "-1-06", text: "Cram-o-matic", img: trainerCard("backgrounds", "cram-o-matic") },
					{ id: trainerCards + "-1-07", text: "Tower of Darkness/Waters", img: [trainerCard("backgrounds", "tower-of-darkness"), trainerCard("backgrounds", "tower-of-water")] },
					{ id: trainerCards + "-1-08", text: "Tower of Darkness/Waters (Night)", img: [trainerCard("backgrounds", "tower-of-darkness-night"), trainerCard("backgrounds", "tower-of-water-night")] },
					{ id: trainerCards + "-1-09", text: "Soothing Wetlands", img: trainerCard("backgrounds", "soothing-wetlands") },
					{ id: trainerCards + "-1-10", text: "Soothing Wetlands (Night)", img: trainerCard("backgrounds", "soothing-wetlands-night") },
					{ id: trainerCards + "-1-11", text: "Loop Lagoon", img: trainerCard("backgrounds", "loop-lagoon") },
					{ id: trainerCards + "-1-12", text: "Loop Lagoon (Night)", img: trainerCard("backgrounds", "loop-lagoon-night") },
					{ id: trainerCards + "-1-13", text: "Workout Sea", img: trainerCard("backgrounds", "workout-sea") },
					{ id: trainerCards + "-1-14", text: "Workout Sea (Night)", img: trainerCard("backgrounds", "workout-sea-night") },
					{ id: trainerCards + "-1-15", text: "Forest of Focus", img: trainerCard("backgrounds", "forest-of-focus") },
					{ id: trainerCards + "-1-16", text: "Forest of Focus (Night)", img: trainerCard("backgrounds", "forest-of-focus-night") },
					{ id: trainerCards + "-1-17", text: "Potbottom Desert", img: trainerCard("backgrounds", "potbottom-desert") },
					{ id: trainerCards + "-1-18", text: "Potbottom Desert (Night)", img: trainerCard("backgrounds", "potbottom-desert-night") },
					{ id: trainerCards + "-1-19", text: "Honeycalm Island", img: trainerCard("backgrounds", "honeycalm-island") },
					{ id: trainerCards + "-1-20", text: "Honeycalm Island (Night)", img: trainerCard("backgrounds", "honeycalm-island-night") },
					{ id: trainerCards + "-1-21", text: "Master Dojo (Logo)", img: trainerCard("backgrounds", "master-dojo-logo") },
				]
			},
			{
				id: trainerCards + "-2", text: "Obtain all League Card Effects", children: [
					{ id: trainerCards + "-2-01", text: "Effect 21", img: trainerCard("effects", "22") },
					{ id: trainerCards + "-2-02", text: "Effect 22", img: trainerCard("effects", "23") },
					{ id: trainerCards + "-2-03", text: "Effect 23", img: trainerCard("effects", "24") },
				]
			},
			{
				id: trainerCards + "-3", text: "Obtain all League Card Frames", children: [
					{ id: trainerCards + "-3-01", text: "Frame 18", img: trainerCard("frames", "20") },
					{ id: trainerCards + "-3-02", text: "Frame 19", img: trainerCard("frames", "21") },
					{ id: trainerCards + "-3-03", text: "Frame 20", img: trainerCard("frames", "22") },
					{ id: trainerCards + "-3-04", text: "Frame 21", img: trainerCard("frames", "23") },
				]
			},
		],
	},
});
