// src/data/mon_info/_loader.js
const pad4 = (n) => String(n).padStart(4, "0");

export function monInfoUrl(natiId) {
	const num = parseInt(String(natiId).split("-")[0], 10);
	if (!Number.isFinite(num)) return null;

	// Resolve relative to THIS module's location
	return new URL(`../data/mon_info/${pad4(num)}.js`, import.meta.url).href;
}

const _loaded = new Set();

export async function ensureMonInfoLoaded(natiId) {
	const url = monInfoUrl(natiId);
	if (!url) return false;
	if (_loaded.has(url)) return true;

	await import(url);
	_loaded.add(url);
	return true;
}
