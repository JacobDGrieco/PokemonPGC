window.DATA = window.DATA || {};
window.DATA.syncs = window.DATA.syncs || {};

const game1 = "red";
const game2 = "blue";
const game3 = "yellow";

defineSyncs(game1, ({ taskSync, regionalSync }) => [
	{ name: "Catch Articuno", members: [taskSync("red:catching:001:001"), regionalSync(144, { oneWay: true }),], },
	{ name: "Catch Zapdos", members: [taskSync("red:catching:001:002"), regionalSync(145, { oneWay: true }),], },
	{ name: "Catch Moltres", members: [taskSync("red:catching:001:003"), regionalSync(146, { oneWay: true }),], },
	{ name: "Catch Mewtwo", members: [taskSync("red:catching:001:004"), taskSync("red:story:002:001"), regionalSync(150, { oneWay: true }),], },

	{ name: "Catch Snorlax on Route 12", members: [taskSync("red:catching:002:001"), regionalSync(143, { oneWay: true }),], },
	{ name: "Catch Snorlax on Route 16", members: [taskSync("red:catching:002:002"), regionalSync(143, { oneWay: true }),], },

	{ name: "Obtain Mew", members: [taskSync("red:extra-credit:001"), regionalSync(151),], },
]);

defineSyncs(game2, ({ taskSync, regionalSync }) => [

]);

defineSyncs(game3, ({ taskSync, regionalSync }) => [

]);