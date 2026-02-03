import * as THREE from "three";

const __ppgcManifestCache = new Map();

export function dirname(url) {
	const i = url.lastIndexOf("/");
	return i >= 0 ? url.slice(0, i + 1) : "";
}

// utils.js
export function basename(url) {
	const i = String(url || "").lastIndexOf("/");
	return i >= 0 ? url.slice(i + 1) : String(url || "");
}

export function stripExt(name) {
	return String(name || "").replace(/\.[^.]+$/, "");
}

export async function loadTexManifestForGlb(glbUrl) {
	// glb:  .../models/0448/0448.glb
	// dir:  .../models/0448/
	// stem: 0448
	// man:  .../models/0448/0448/textures.json
	const dir = dirname(glbUrl);
	const stem = stripExt(basename(glbUrl));
	const manifestUrl = `${dir}${stem}/textures.json`;

	if (__ppgcManifestCache.has(manifestUrl)) return __ppgcManifestCache.get(manifestUrl);

	let set = null;
	try {
		const res = await fetch(manifestUrl, { cache: "no-store" });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const arr = await res.json();

		if (!Array.isArray(arr)) throw new Error("textures.json is not an array");
		set = new Set(arr.map(String));
	} catch (e) {
		console.warn("[PPGC] Failed to load textures.json:", manifestUrl, e);
		set = new Set(); // empty => nothing loads (no probing)
	}

	__ppgcManifestCache.set(manifestUrl, set);
	return set;
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

// try a list of filenames and take the first that exists+loads
export async function loadFirstTexture(loader, candidates, opts, manifestSet /* Set<string> | null */) {
	const list = Array.isArray(candidates) ? candidates : [];

	for (const url of list) {
		// ✅ Only load if it's in textures.json
		if (manifestSet) {
			const file = basename(url);
			if (!manifestSet.has(file)) continue;
		}

		try {
			return await loadTexture(loader, url, opts);
		} catch (_) {
			// ignore and continue
		}
	}
	return null;
}

export function swapUvChannelsIfNeeded(mesh, stem) {
	if (!mesh?.geometry?.attributes) return;

	// Only do this for body_b for now (your reported problem)
	if (stem !== "body_b" && stem !== "smoke") return;

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

export async function applyGenericTextureSetToScene(root3d, opts) {
	const {
		glbUrl,
		variant,
		eyeShaderMats,
		probeRelPath,
		stemForMaterial,          // (matName) => stem | null
		buildCandidatesForStem,   // (texDir, stem) => { alb:[], nrm:[], lym:[], ao:[], rgn:[], mtl:[], msk:[], iris:[] }
		makeEyeMaterial,          // ({ matName, tex, glbUrl }) => THREE.Material
		makeBodyMaterial,         // ({ matName, tex, glbUrl, stem }) => THREE.Material
		postProcessMesh,          // optional: (mesh, stem) => void
	} = opts;

	const dir = dirname(glbUrl);
	const glbStem = stripExt(basename(glbUrl));
	const texDir = `${dir}${glbStem}/`;
	const manifestSet = await loadTexManifestForGlb(glbUrl);
	const loader = new THREE.TextureLoader();

	// cache by stem/piece so we don't reload for multiple meshes/materials
	const cache = new Map();

	async function getTexSet(stem) {
		if (cache.has(stem)) return cache.get(stem);

		const cand = buildCandidatesForStem(texDir, stem);

		const tex = {
			alb: await loadFirstTexture(loader, cand.alb || [], { srgb: true }, manifestSet),
			nrm: await loadFirstTexture(loader, cand.nrm || [], {}, manifestSet),
			lym: await loadFirstTexture(loader, cand.lym || [], {}, manifestSet),
			ao: await loadFirstTexture(loader, cand.ao || [], {}, manifestSet),
			rgn: await loadFirstTexture(loader, cand.rgn || [], {}, manifestSet),
			mtl: await loadFirstTexture(loader, cand.mtl || [], {}, manifestSet),
			msk: await loadFirstTexture(loader, cand.msk || [], {}, manifestSet),
			iris: await loadFirstTexture(loader, cand.iris || [], {}, manifestSet),
		};

		cache.set(stem, tex);
		return tex;
	}

	// Build per-mesh replacement tasks (ScVi style) :contentReference[oaicite:6]{index=6}
	const jobs = new Map();

	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const tasks = mats.map((oldMat) => (async () => {
			const matName = oldMat?.name || "";
			const stem = stemForMaterial(matName);

			if (!stem) return oldMat;

			const tex = await getTexSet(stem);

			if (isEyeStem(stem)) {
				const eyeMat = makeEyeMaterial({ matName, tex, glbUrl });
				eyeShaderMats?.push?.(eyeMat);
				return eyeMat;
			}

			const bodyMat = makeBodyMaterial({ matName, tex, glbUrl, stem, variant });

			if (postProcessMesh) postProcessMesh(o, stem);

			return bodyMat;
		})());

		jobs.set(o.uuid, { mesh: o, tasks });
	});

	for (const { mesh, tasks } of jobs.values()) {
		const out = await Promise.all(tasks);
		mesh.material = out.length === 1 ? out[0] : out;
	}
}
