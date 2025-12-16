import * as THREE from "three";
import {
	dirname,
	loadFirstTexture,
	swapUvChannelsIfNeeded,
	logUvRangeOnce,
	isEyeStem,
} from "./utils.js";
import { getEyeParamsForModel } from "./eyes.js";
import { makePokemonEyeMaterial, makePokemonBodyMaterial } from "./materials.js";

// Map GLB material name -> texture stem
export function stemForMaterial(matName) {
	const n = String(matName || "").toLowerCase();
	if (n === "l_eye" || n === "r_eye") return "eye";
	return n; // expects body_a, body_b, eye, eye2
}

export async function applyPokemonTextureSetToScene(root3d, { glbUrl, variant, texDir, eyeShaderMats }) {
	const loader = new THREE.TextureLoader();

	// ✅ SV NOW: textures live in /000/
	texDir = texDir ?? `${dirname(glbUrl)}000/`;

	// Map: mesh.uuid → array of promises (one per material slot)
	const meshMaterialTasks = new Map();

	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const tasks = [];

		for (const oldMat of mats) {
			const matName = oldMat?.name || "";
			const stem = stemForMaterial(matName);

			// If we can't resolve a stem, keep the old material
			if (!stem) {
				tasks.push(Promise.resolve(oldMat));
				continue;
			}

			tasks.push((async () => {
				// ✅ real SV naming: *_alb.png
				const alb = await loadFirstTexture(loader, [
					`${texDir}${stem}_alb.png`,
					`${texDir}${stem}_col.png`,        // fallback
					`${texDir}${stem}_basecolor.png`,  // fallback
				], { srgb: true });

				// normal (eyes have this too)
				const nrm = await loadFirstTexture(loader, [
					`${texDir}${stem}_nrm.png`,
					`${texDir}${stem}_nor.png`,
					`${texDir}${stem}_normal.png`,
				]);

				// --- Eye path FIRST (so we don't request non-existent eye_* maps) ---
				if (isEyeStem(stem)) {
					// ✅ SV eyes use eye_lym + body_msk (not eye_ao/eye_rgn/eye_mtl)
					const lym = await loadFirstTexture(loader, [
						`${texDir}${stem}_lym.png`,
					]);

					const msk = await loadFirstTexture(loader, [
						`${texDir}body_msk.png`,
						`${texDir}${stem}_msk.png`,
					]);

					const params = getEyeParamsForModel(glbUrl);
					const irisColor = new THREE.Color(params.iris);
					irisColor.convertSRGBToLinear();

					const eyeMat = makePokemonEyeMaterial({
						name: matName || "Eye",
						alb,
						lym,
						msk,
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

				// --- Body path (only bodies ask for these) ---
				const ao = await loadFirstTexture(loader, [
					`${texDir}${stem}_ao.png`,
				]);

				const rgn = await loadFirstTexture(loader, [
					`${texDir}${stem}_rgn.png`,
				]);

				const mtl = await loadFirstTexture(loader, [
					`${texDir}${stem}_mtl.png`,
				]);

				const emi = null;

				const bodyMat = makePokemonBodyMaterial({
					name: matName || stem,
					alb,
					nrm,
					rgn,
					mtl,
					ao,
					emi,
				});

				swapUvChannelsIfNeeded(o, stem);
				logUvRangeOnce(o, stem);

				return bodyMat;
			})());
		}

		meshMaterialTasks.set(o.uuid, { mesh: o, tasks });
	});

	// Assign per-mesh, per-material (no scrambling)
	for (const { mesh, tasks } of meshMaterialTasks.values()) {
		const newMats = await Promise.all(tasks);
		mesh.material = newMats.length === 1 ? newMats[0] : newMats;
	}
}
