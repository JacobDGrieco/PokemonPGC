window.DATA = window.DATA || {};
window.DATA.syncs = window.DATA.syncs || {};

const game = "legendsza";
const sub = game + "md";

const taskSync = (id) => _taskRef(id);
const regionalSync = (...args) => _dexRef(sub, "regional", ...args);
const nationalSync = (...args) => _dexRef(sub, "national", ...args);
const fashionSync = (id) => _fashionRef(sub, id);

window.DATA.syncs[sub] = [
	{ id: "diancie", members: [taskSync("legendszamd-side-quests-1-01"), taskSync("legendszamd-mega-stones-1-01"), _dexRef("legendsza", "regional", 231),], },
	{ id: "mewtwo", members: [taskSync("legendszamd-side-quests-1-02"), taskSync("legendszamd-mega-stones-1-02"), taskSync("legendszamd-mega-stones-1-03"), _dexRef("legendsza", "regional", 232),], },
	{ id: "canari", members: [taskSync("legendszamd-side-quests-2-32"), fashionSync("canaris-tracksuit"), fashionSync("canaris-satchel")], },
];
