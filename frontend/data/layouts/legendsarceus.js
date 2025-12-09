// Game
const game = "legendsarceus";

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

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02", catching + "-1-03"],
				],
				[thms]: [
					[thms + "-1", thms + "-2", thms + "-3", thms + "-4", thms + "-5"],
				],
			},
		},
		compact: {

		}
	},
});
