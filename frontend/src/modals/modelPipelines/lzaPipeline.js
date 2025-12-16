import * as THREE from "three";
import { dirname, loadFirstTexture, isEyeStem, swapUvChannelsIfNeeded, logUvRangeOnce } from "./utils.js";
import { getModelKeyFromGlbUrl, getEyeParamsForModel, getBodyTintForModel } from "./eyes.js";
import { makePokemonBodyMaterial, makePokemonEyeMaterial } from "./materials.js";

function pad4(id) {
	const n = Number.parseInt(String(id || ""), 10);
	return Number.isFinite(n) ? String(n).padStart(4, "0") : null;
}

// PLA material names tend to look like BodyA/BodyB/LEye/REye etc.
// We'll map them to the texture stems you actually have.
function plzaStemForMaterial(matName) {
	const n = String(matName || "").toLowerCase();

	if (n.includes("bodya") || n.includes("body_a")) return "body_a";
	if (n.includes("bodyb") || n.includes("body_b")) return "body_b";

	// eyes
	if (n.includes("leye") || n.includes("l_eye") || n === "eye_l") return "eye";
	if (n.includes("reye") || n.includes("r_eye") || n === "eye_r") return "eye";
	if (n.includes("eye")) return "eye";

	return null;
}

function deriveBellyTintFromBase(baseLinear) {
	// baseLinear is already linear-space
	// make a warm, light beige by mixing toward white/yellow
	const warm = new THREE.Color(1.0, 0.95, 0.80); // linear-ish beige
	return baseLinear.clone().lerp(warm, 0.75);
}

export async function applyLegendsZATextureSetToScene(
	root3d,
	{ glbUrl, variant, eyeShaderMats }
) {
	const baseDir = dirname(glbUrl);
	const texDir = baseDir + "000/"; // ✅ matches your folder layout

	const key = getModelKeyFromGlbUrl(glbUrl);         // "130" from .../130/model.glb
	const p4 = pad4(key);
	if (!p4) throw new Error("PLA: could not parse model id from glbUrl: " + glbUrl);

	const prefix = `pm${p4}_00_00_`;
	const loader = new THREE.TextureLoader();

	// cache by stem so multiple meshes don’t re-load the same files
	const cache = new Map();

	async function getSet(stem) {
		if (cache.has(stem)) return cache.get(stem);

		const alb = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_alb.png`,
		], { srgb: true });

		const nrm = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_nrm.png`,
		]);

		const lym = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_lym.png`,
		]);

		// ✅ Eyes don’t have ao/rgn/mtl in your dump
		if (stem === "eye") {
			const set = { alb, nrm, lym, ao: null, rgn: null, mtl: null };
			cache.set(stem, set);
			return set;
		}

		const ao = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_ao.png`,
		]);

		const rgn = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_rgn.png`,
		]);

		const mtl = await loadFirstTexture(loader, [
			`${texDir}${prefix}${stem}_mtl.png`,
		]);

		const set = { alb, nrm, ao, rgn, mtl, lym };
		cache.set(stem, set);
		return set;
	}


	const tasks = [];

	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];

		for (const oldMat of mats) {
			const matName = oldMat?.name || "";
			const stem = plzaStemForMaterial(matName);
			if (!stem) continue;

			tasks.push((async () => {
				const tex = await getSet(stem);

				// Eyes: alb + lym (no mask in PLA dump)
				if (isEyeStem(stem)) {
					const params = getEyeParamsForModel(glbUrl);
					const irisColor = new THREE.Color(params.iris);
					irisColor.convertSRGBToLinear();

					const eyeMat = makePokemonEyeMaterial({
						name: matName || "Eye",
						alb: tex.alb,
						lym: tex.lym,
						msk: null,
						irisTex: null,
						irisColor,
						pupilColor: new THREE.Color(params.pupil),
						pupilCenter: params.pupilCenter,
						pupilRadius: params.pupilRadius,
						pupilFeather: params.pupilFeather,
					});

					eyeShaderMats?.push(eyeMat);
					return eyeMat;
				}

				const tintA = getBodyTintForModel(glbUrl);        // linear
				const tintB = deriveBellyTintFromBase(tintA);     // linear

				const bodyMat = makePokemonBodyMaterial({
					name: matName || stem,
					alb: tex.alb,
					nrm: tex.nrm,
					rgn: tex.rgn,
					mtl: tex.mtl,
					ao: tex.ao,
					emi: null,

					// NEW:
					lym: tex.lym,
					tintA,
					tintB,
				});

				// Keep things neutral (prevents random tint sources)
				bodyMat.color?.set?.(0xffffff);
				bodyMat.vertexColors = false;

				swapUvChannelsIfNeeded(o, stem);
				logUvRangeOnce(o, stem);

				return bodyMat;
			})());
		}
	});

	const newMats = await Promise.all(tasks);

	// Assign in the same order we queued
	let idx = 0;
	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const out = mats.map((oldMat) => {
			const stem = plzaStemForMaterial(oldMat?.name || "");
			if (!stem) return oldMat;
			return newMats[idx++];
		}).filter(Boolean);

		o.material = out.length === 1 ? out[0] : out;
	});
}
