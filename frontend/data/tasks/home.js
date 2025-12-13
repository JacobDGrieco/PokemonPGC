// Gen & Game
const game = "home";

// Local wrappers
const nationalDex = (...args) => _dex(game, "national", ...args);
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);
const task = (id) => _task(game, id);

// Categories
const catching = game + "-catching";
const mobile = game + "-mobile";
const research = game + "-research";
const extraCredit = game + "-extra-credit";

// Data

PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: mobile, title: "Mobile Challenges" },
			{ id: research, title: "Research Tasks" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{ id: catching + "-1", text: "Obtain Original Color Magearna", img: baseSprite("801-o"), dexSync: [nationalDex(801, "Original Color")], },
		],
	},
});
