import * as THREE from "three";

export function dirname(url) {
	const i = url.lastIndexOf("/");
	return i >= 0 ? url.slice(0, i + 1) : "";
}

export function loadTexture(loader, url, { srgb = false } = {}) {
	return new Promise((resolve, reject) => {
		loader.load(
			url,
			(tex) => {
				// glTF-style orientation expectations
				tex.flipY = false;

				// three r152+ uses colorSpace
				if (srgb && "colorSpace" in tex) tex.colorSpace = THREE.SRGBColorSpace;

				// IMPORTANT: Blender defaults to repeat; Three defaults to clamp.
				// If UVs go outside 0..1 (common for these), clamp makes the texture look "mapped wrong".
				tex.wrapS = THREE.RepeatWrapping;
				tex.wrapT = THREE.RepeatWrapping;
				tex.repeat.set(1, 1);

				tex.needsUpdate = true;

				resolve(tex);
			},
			undefined,
			reject
		);
	});
}

const __ppgcExistsCache = new Map();

async function urlExists(url) {
	if (__ppgcExistsCache.has(url)) return __ppgcExistsCache.get(url);

	let ok = false;
	try {
		const res = await fetch(url, { method: "HEAD" });
		ok = !!res.ok;
	} catch {
		ok = false;
	}

	__ppgcExistsCache.set(url, ok);
	return ok;
}

// try a list of filenames and take the first that exists+loads
export async function loadFirstTexture(loader, candidates, opts) {
	for (const url of candidates) {
		if (!(await urlExists(url))) continue;   // ✅ prevents noisy GET 404s
		try {
			return await loadTexture(loader, url, opts);
		} catch (_) { }
	}
	return null;
}

export function swapUvChannelsIfNeeded(mesh, stem) {
	if (!mesh?.geometry?.attributes) return;

	// Only do this for body_b for now (your reported problem)
	if (stem !== "body_b") return;

	const g = mesh.geometry;
	const uv = g.getAttribute("uv");
	const uv2 = g.getAttribute("uv2");

	// If uv2 exists, try using it as the primary UVs.
	// This fixes the classic "mapped totally wrong" symptom.
	if (uv2) {
		if (uv) {
			// swap
			g.setAttribute("uv", uv2);
			g.setAttribute("uv2", uv);
		} else {
			// copy uv2 -> uv
			g.setAttribute("uv", uv2);
		}
		g.attributes.uv.needsUpdate = true;
		if (g.attributes.uv2) g.attributes.uv2.needsUpdate = true;
	}
}

export function logUvRangeOnce(mesh, stem) {
	if (stem !== "body_b") return;
	if (mesh.userData.__uvRangeLogged) return;
	mesh.userData.__uvRangeLogged = true;

	const g = mesh.geometry;
	const uv = g?.getAttribute?.("uv");
	if (!uv) return;

	let minU = Infinity, minV = Infinity, maxU = -Infinity, maxV = -Infinity;
	for (let i = 0; i < uv.count; i++) {
		const u = uv.getX(i), v = uv.getY(i);
		if (u < minU) minU = u;
		if (v < minV) minV = v;
		if (u > maxU) maxU = u;
		if (v > maxV) maxV = v;
	}
}

export function isEyeStem(stem) {
	return stem === "eye";
} 