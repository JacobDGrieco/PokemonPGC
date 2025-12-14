// src/taskRegistry.js
export function buildSeedTaskRegistry() {
	const reg = new Map(); // taskId -> { sectionId, parentIds: [] }

	const tasksRoot = window.DATA?.tasks || {};
	for (const [sectionId, arr] of Object.entries(tasksRoot)) {
		const list = Array.isArray(arr) ? arr : [];

		(function walk(nodes, parentStack) {
			for (const t of nodes || []) {
				if (!t || typeof t !== "object" || !t.id) continue;
				const id = String(t.id);

				// Store section + parent chain (parent chain is optional but useful later)
				if (!reg.has(id)) {
					reg.set(id, { sectionId, parentIds: parentStack.slice() });
				}

				if (Array.isArray(t.children) && t.children.length) {
					parentStack.push(id);
					walk(t.children, parentStack);
					parentStack.pop();
				}
			}
		})(list, []);
	}

	window.PPGC = window.PPGC || {};
	window.PPGC._seedTaskRegistry = reg;
	return reg;
}

export function getSeedTaskRegistry() {
	window.PPGC = window.PPGC || {};
	return window.PPGC._seedTaskRegistry || buildSeedTaskRegistry();
}
