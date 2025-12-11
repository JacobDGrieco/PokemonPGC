window.DATA = window.DATA || {};
window.DATA.syncs = window.DATA.syncs || {};

const game = "legendsza";
const sub = game + "";

const taskSync = (id) => _taskRef(id);
const regionalSync = (...args) => _dexRef(sub, "regional", ...args);
const nationalSync = (...args) => _dexRef(sub, "national", ...args);
const fashionSync = (id) => _fashionRef(sub, id);

window.DATA.syncs[sub] = [
	{ id: "eternal-floette", members: [taskSync("legendsza-catching-2-09"), taskSync("legendsza-story-2-01"), taskSync("legendsza-mega-stones-10"), regionalSync(39, "Eternal Flower"),], },
];
