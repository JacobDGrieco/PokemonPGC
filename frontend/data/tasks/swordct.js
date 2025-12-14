// Gen & Game
const gen = 8;
const game = "sword";
const sub = game + "ct";

// Local wrappers
const galarDex = (...args) => _dex(game, "regional", ...args);
const ioaDex = (...args) => _dex(game + "ioa", "regional", ...args);
const ctDex = (...args) => _dex(game + "ct", "regional", ...args);
const baseSprite = (natiId) => _frontSprite(gen, game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(gen, game, natiId);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const trainerCard = (type, name) => _trainerCard("ct", type, name);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);
const tr = (type) => _tr(type);

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const battle = sub + "-battle";
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
			{ id: battle, title: "Battle" }, // Galarian Star Tournament goes here
			{ id: collectables, title: "Collectables" },
			{ id: trainerCards, title: "Trainer Card" },
			{ id: fashion, title: "Fashion" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch/Trade for Glastrier", img: baseSprite(896), dexSync: [ctDex(208)], },
					{ id: catching + "-1-02", text: "Catch/Trade for Spectrier", img: baseSprite(897), dexSync: [ctDex(209)], },
					{ id: catching + "-1-03", text: "Catch Calyrex", img: baseSprite(898), dexSync: [ctDex(210)], },
				],
			},
		],
		[trainerCards]: [
			{
				id: trainerCards + "-1", text: "Obtain all League Card Backgrounds", children: [
					{ id: trainerCards + "-1-01", text: "Freezington", img: trainerCard("backgrounds", "freezington") },
					{ id: trainerCards + "-1-02", text: "Old Cemetery", img: trainerCard("backgrounds", "old-cemetery") },
					{ id: trainerCards + "-1-03", text: "Old Cemetery (Grayscale)", img: trainerCard("backgrounds", "old-cemetery-grayscale") },
					{ id: trainerCards + "-1-04", text: "Path to the Peak", img: trainerCard("backgrounds", "path-to-the-peak") },
					{ id: trainerCards + "-1-05", text: "Crown Shrine", img: trainerCard("backgrounds", "crown-shrine") },
					{ id: trainerCards + "-1-06", text: "Crown Shrine (Night)", img: trainerCard("backgrounds", "crown-shrine-night") },
					{ id: trainerCards + "-1-07", text: "Crown Shrine (Tree)", img: trainerCard("backgrounds", "crown-shrine-tree") },
					{ id: trainerCards + "-1-08", text: "Frigid Sea", img: trainerCard("backgrounds", "frigid-sea") },
					{ id: trainerCards + "-1-09", text: "Dyna Tree Hill", img: trainerCard("backgrounds", "dyna-tree-hill") },
					{ id: trainerCards + "-1-10", text: "Dyna Tree Hill (Night)", img: trainerCard("backgrounds", "dyna-tree-hill-night") },
					{ id: trainerCards + "-1-11", text: "Rock Peak Ruins", img: trainerCard("backgrounds", "rock-peak-ruins") },
					{ id: trainerCards + "-1-12", text: "Iceberg Ruins", img: trainerCard("backgrounds", "iceberg-ruins") },
					{ id: trainerCards + "-1-13", text: "Iron Ruins", img: trainerCard("backgrounds", "iron-ruins") },
					{ id: trainerCards + "-1-14", text: "SplitDecis-Ruins", img: trainerCard("backgrounds", "splitdecis-ruins") },
					{ id: trainerCards + "-1-15", text: "Expedition Team (Logo)", img: trainerCard("backgrounds", "expedition-team-logo") },
					{ id: trainerCards + "-1-16", text: "Champion Cup", img: trainerCard("backgrounds", "champion-cup") },
					{ id: trainerCards + "-1-17", text: "Galarian Star Tournament", img: trainerCard("backgrounds", "galarian-star-tournament") },
					{ id: trainerCards + "-1-18", text: "Turrfield Symbol", img: trainerCard("backgrounds", "turrfield-symbol") },
					{ id: trainerCards + "-1-19", text: "Hulbury Symbol", img: trainerCard("backgrounds", "hulbury-symbol") },
					{ id: trainerCards + "-1-20", text: "Motostoke Symbol", img: trainerCard("backgrounds", "motostoke-symbol") },
					{ id: trainerCards + "-1-21", text: "Stow-on-Side Symbol (Fighting)", img: trainerCard("backgrounds", "stow-on-side-symbol-fighting") },
					{ id: trainerCards + "-1-22", text: "Ballonlea Symbol", img: trainerCard("backgrounds", "ballonlea-symbol") },
					{ id: trainerCards + "-1-23", text: "Circhester Symbol (Rock)", img: trainerCard("backgrounds", "circhester-symbol-rock") },
					{ id: trainerCards + "-1-24", text: "Spikemuth Symbol", img: trainerCard("backgrounds", "spikemuth-symbol") },
					{ id: trainerCards + "-1-25", text: "Hammerlocke Symbol", img: trainerCard("backgrounds", "hammerlocke-symbol") },
					{ id: trainerCards + "-1-26", text: "Klara Symbol", img: trainerCard("backgrounds", "klara-symbol") },
					{ id: trainerCards + "-1-27", text: "White", img: trainerCard("backgrounds", "white") },
					{ id: trainerCards + "-1-28", text: "Black", img: trainerCard("backgrounds", "black") },
					{ id: trainerCards + "-1-29", text: "Blue", img: trainerCard("backgrounds", "blue") },
					{ id: trainerCards + "-1-30", text: "Red", img: trainerCard("backgrounds", "red") },
					{ id: trainerCards + "-1-31", text: "Yellow", img: trainerCard("backgrounds", "yellow") },
					{ id: trainerCards + "-1-32", text: "Green", img: trainerCard("backgrounds", "green") },
				]
			},
			{
				id: trainerCards + "-2", text: "Obtain all League Card Effects", children: [
					{ id: trainerCards + "-2-01", text: "Effect 24", img: trainerCard("effects", "25") },
					{ id: trainerCards + "-2-02", text: "Effect 25", img: trainerCard("effects", "26") },
					{ id: trainerCards + "-2-03", text: "Effect 26", img: trainerCard("effects", "27") },
				]
			},
			{
				id: trainerCards + "-3", text: "Obtain all League Card Frames", children: [
					{ id: trainerCards + "-3-01", text: "Frame 22", img: trainerCard("frames", "24") },
					{ id: trainerCards + "-3-02", text: "Frame 23", img: trainerCard("frames", "25") },
					{ id: trainerCards + "-3-03", text: "Frame 24", img: trainerCard("frames", "26") },
				]
			},
		],
	},
});
