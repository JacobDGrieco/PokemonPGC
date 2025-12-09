// Game
const game = "scarlet";
const sub = game + "tm";

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

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01"],
				],
			},
		},
		compact: {

		}
	},
});
