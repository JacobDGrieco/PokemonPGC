import * as THREE from "three";

import { dirname, loadTexture } from "./utils.js";
import { getModelKeyFromGlbUrl, getEyeParamsForModel } from "./eyes.js";
import { makePokemonEyeMaterial, makePokemonBodyMaterial } from "./materials.js";

function pad4(n) {
	const v = Number.parseInt(String(n), 10);
	return Number.isFinite(v) ? String(v).padStart(4, "0") : null;
}

// Try to infer SwSh “piece name” from GLB material names
function swshPieceForMaterial(matName) {
	const low = String(matName || "").toLowerCase();

	if (low.includes("bodya") || low === "body_a") return "BodyA";
	if (low.includes("bodyb") || low === "body_b") return "BodyB";

	// your GLB sometimes has l_eye/r_eye, sometimes “Eye”
	if (low.includes("eye") || low === "l_eye" || low === "r_eye") return "Eye";

	return null;
}

export async function applySwordShieldTextureSetToScene(
	root3d,
	{ glbUrl, variant, eyeShaderMats }
) {
	// Example glbUrl:
	// .../imgs/sprites/gen8/sword-shield/base-model/130/model.glb
	const baseDir = dirname(glbUrl);

	// ✅ Your real layout: textures live in /000/
	const texDir = baseDir + "000/";

	const key = getModelKeyFromGlbUrl(glbUrl); // "130"
	const pad = pad4(key);
	if (!pad) throw new Error("SwSh: could not parse model id from glbUrl: " + glbUrl);

	const prefix = `pm${pad}_00_`;
	const tl = new THREE.TextureLoader();

	async function tryLoad(url, opts) {
		try {
			return await loadTexture(tl, url, opts);
		} catch {
			return null;
		}
	}

	// Cache by piece so multiple meshes sharing “BodyA” don’t re-load
	const cache = new Map();

	async function getSet(piece) {
		if (cache.has(piece)) return cache.get(piece);

		// ✅ Matches your actual files (no *_rare right now)
		const colName = `${prefix}${piece}_col.png`;
		const norName = `${prefix}${piece}_nor.png`;
		const ambName = `${prefix}${piece}_amb.png`;
		const emiName = `${prefix}${piece}_emi.png`;

		// Iris texture is separate in SwSh
		const irisName = `${prefix}Iris_lyc.png`;

		const alb = await tryLoad(texDir + colName, { srgb: true });
		const nrm = await tryLoad(texDir + norName, { srgb: false });
		const ao = await tryLoad(texDir + ambName, { srgb: false }); // treat amb as AO-ish
		const emi = null;
		const iris = (piece === "Eye") ? await tryLoad(texDir + irisName, { srgb: false }) : null;

		const set = { alb, nrm, ao, emi, iris };
		cache.set(piece, set);
		return set;
	}

	// Collect build tasks
	const tasks = [];

	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];

		for (const oldMat of mats) {
			const matName = oldMat?.name || "";
			const piece = swshPieceForMaterial(matName);

			// If we can't detect piece, keep old material but neutralize common tint sources
			if (!piece) {
				if (oldMat?.color) oldMat.color.set(0xffffff);
				if (oldMat) oldMat.vertexColors = false;
				continue;
			}

			tasks.push((async () => {
				const { alb, nrm, ao, emi, iris } = await getSet(piece);

				// Eye uses your custom shader, with iris texture from Iris_lyc.png
				if (piece === "Eye") {
					const params = getEyeParamsForModel(glbUrl);
					const irisColor = new THREE.Color(params.iris);
					irisColor.convertSRGBToLinear();

					const eyeMat = makePokemonEyeMaterial({
						name: matName || "Eye",
						alb,
						lym: null,
						msk: null,
						irisTex: iris || null,
						irisColor,
						pupilColor: new THREE.Color(params.pupil),
						pupilCenter: params.pupilCenter,
						pupilRadius: params.pupilRadius,
						pupilFeather: params.pupilFeather,
					});

					eyeShaderMats?.push(eyeMat);
					return eyeMat;
				}

				// Body pieces use your standard body material builder
				const nm = makePokemonBodyMaterial({
					name: matName || piece,
					alb,
					nrm: null,
					rgn: null,
					mtl: null,
					ao,   // use *_amb as aoMap
					emi: null,  // use *_emi as emissive sampler (your body builder can ignore if null)
				});

				// ✅ SwSh “color puke” prevention:
				nm.color.set(0xffffff);
				nm.vertexColors = false;
				nm.emissive.set(0x000000);
				nm.emissiveIntensity = 1.0;
				if (nm.normalMap) nm.normalScale?.set?.(0.35, 0.35);

				return nm;
			})());
		}
	});

	const newMats = await Promise.all(tasks);

	// Second pass: assign new materials in the same order we queued them
	let idx = 0;
	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const out = mats.map((oldMat) => {
			const piece = swshPieceForMaterial(oldMat?.name || "");
			if (!piece) return oldMat;    // kept old
			return newMats[idx++];        // replaced
		}).filter(Boolean);

		o.material = out.length === 1 ? out[0] : out;
	});
}
