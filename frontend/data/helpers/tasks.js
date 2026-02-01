window.defineTasksMany = function defineTasksMany(gameKeys, SECTIONS, TASKS_BY_SECTION) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.sections = window.DATA.sections || {};
	window.DATA.tasks = window.DATA.tasks || {};

	for (const gameKey of keys) {
		const prefixSectionId = (sid) => `${gameKey}:${sid}`;

		const taskIdRoot = (sectionSuffix, parentId) =>
			`${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;

		const taskIdChild = (sectionSuffix, parentId, childId) =>
			`${taskIdRoot(sectionSuffix, parentId)}:${pad3(childId)}`;

		function bindGameKeyFn(fn) {
			if (typeof fn !== "function") return fn;
			return (ctx) => fn({ ...(ctx || {}), gameKey });
		}

		function mapTask(sectionSuffix, t, parentId = null) {
			const out = { ...t };

			// Only wrap known image fields (keeps behavior identical to your files)
			if (out.img) out.img = bindGameKeyFn(out.img);
			if (out.imgS) out.imgS = bindGameKeyFn(out.imgS);

			if (parentId === null) {
				const parent = Number(out.id);
				out.id = taskIdRoot(sectionSuffix, parent);
				parentId = parent;
			} else {
				const child = Number(out.id);
				out.id = taskIdChild(sectionSuffix, parentId, child);
			}

			if (Array.isArray(out.children)) {
				out.children = out.children.map((c) => mapTask(sectionSuffix, c, parentId));
			}

			return out;
		}

		// Seed sections for this gameKey
		const sections = (SECTIONS || []).map((s) => ({
			id: prefixSectionId(s.id),
			title: s.title,
		}));

		window.DATA.sections[gameKey] = sections;

		// Seed tasks by section for this gameKey
		for (const [sectionSuffix, arr] of Object.entries(TASKS_BY_SECTION || {})) {
			const sectionId = `${gameKey}:${sectionSuffix}`;
			window.DATA.tasks[sectionId] = (arr || []).map((t) => mapTask(sectionSuffix, t));
		}
	}
};
window.overrideTaskChildText = function (tasks, parentId, childId, newText) {
	return tasks.map(task => {
		if (task.id !== parentId) return task;

		return {
			...task,
			children: task.children.map(child =>
				child.id === childId
					? { ...child, text: newText }
					: child
			),
		};
	});
};
window.overrideTaskChildTexts = function (tasks, parentId, changes) {
	let out = tasks;
	for (const [childId, newText] of Object.entries(changes)) {
		out = overrideTaskChildText(out, parentId, Number(childId), newText);
	}
	return out;
};