// Game
const game = "home";

// Categories
const catching = game + "-catching";
const mobile = game + "-mobile";
const research = game + "-research";
const extraCredit = game + "-extra-credit";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
				],
			},
		},
		compact: {

		}
	},
});
