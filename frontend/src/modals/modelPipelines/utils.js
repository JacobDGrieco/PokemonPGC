import * as THREE from "three";

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

// Exported exists helper (same logic as the internal one loadFirstTexture uses)
const __ppgcExistsCachePublic = new Map();
export async function urlExists(url) {
	if (__ppgcExistsCachePublic.has(url)) return __ppgcExistsCachePublic.get(url);

	let ok = false;
	try {
		const res = await fetch(url, { method: "HEAD" });
		ok = !!res.ok;
	} catch {
		ok = false;
	}

	__ppgcExistsCachePublic.set(url, ok);
	return ok;
}

/**
 * Decide texture directory based on glbUrl:
 * - model.glb => <baseDir>/textures/
 * - <form>.glb => <baseDir>/<form>/
 * Also supports probing multiple candidates.
 */
export async function resolveTexDirForGlb(glbUrl, probeRelPath /* string | string[] */) {
	const baseDir = dirname(glbUrl);
	const file = basename(glbUrl);
	const stem = stripExt(file);

	const candidates = [];
	if (stem && stem.toLowerCase() !== "model") {
		candidates.push(`${baseDir}${stem}/`);
		candidates.push(`${baseDir}${stem}/textures/`);
	}
	candidates.push(`${baseDir}textures/`);

	// ✅ allow multiple probes
	const probes = Array.isArray(probeRelPath)
		? probeRelPath.filter(Boolean)
		: (probeRelPath ? [probeRelPath] : []);

	for (const dir of candidates) {
		if (!probes.length) return dir;

		for (const p of probes) {
			if (await urlExists(dir + p)) return dir;
		}
	}

	return `${baseDir}textures/`;
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

	const texDir = await resolveTexDirForGlb(glbUrl, probeRelPath);

	const loader = new THREE.TextureLoader();

	// cache by stem/piece so we don't reload for multiple meshes/materials
	const cache = new Map();

	async function getTexSet(stem) {
		if (cache.has(stem)) return cache.get(stem);

		const cand = buildCandidatesForStem(texDir, stem);

		const tex = {
			alb: await loadFirstTexture(loader, cand.alb || [], { srgb: true }),
			nrm: await loadFirstTexture(loader, cand.nrm || []),
			lym: await loadFirstTexture(
				loader,
				cand.lym || [],
				{ srgb: stem === "smoke" }   // ✅ only smoke LYM treated as color
			),
			ao: await loadFirstTexture(loader, cand.ao || []),
			rgn: await loadFirstTexture(loader, cand.rgn || []),
			mtl: await loadFirstTexture(loader, cand.mtl || []),
			msk: await loadFirstTexture(loader, cand.msk || []),
			iris: await loadFirstTexture(loader, cand.iris || []),
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
	console.log("[PPGC] texDir chosen:", texDir, "probe:", probeRelPath);
}
