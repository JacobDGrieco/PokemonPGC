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

export async function applySwordShieldTextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats }) {
	// Example glbUrl:
	// .../imgs/sprites/gen8/sword-shield/base-model/130/130.glb
	const baseDir = dirname(glbUrl);

	// base => use /000/, rare => use root
	const texDir = baseDir + (variant === "base" ? "000/" : "");

	const key = getModelKeyFromGlbUrl(glbUrl); // "130"
	const pad = pad4(key);
	if (!pad) throw new Error("SwSh: could not parse model id from glbUrl: " + glbUrl);

	const prefix = `pm${pad}_00_`;
	const tl = new THREE.TextureLoader();

	async function loadSwshTex(url, { srgb = false } = {}) {
		const t = await loadTexture(tl, url, { srgb });
		// SwSh exports also behave better with repeat, same as your existing loader does
		return t;
	}

	async function tryLoad(url, opts) {
		try { return await loadSwshTex(url, opts); } catch { return null; }
	}

	// Cache by piece so multiple meshes sharing “BodyA” don’t re-load
	const cache = new Map();

	async function getSet(piece) {
		if (cache.has(piece)) return cache.get(piece);

		// Rare uses *_col_rare + iris_lyc_rare, but nor/amb/emi are non-rare in your dump.
		const colName = piece === "Eye"
			? `${prefix}Eye_${variant === "base" ? "col" : "col_rare"}.png`
			: `${prefix}${piece}_${variant === "base" ? "col" : "col_rare"}.png`;

		const norName = piece === "Eye"
			? `${prefix}Eye_nor.png`
			: `${prefix}${piece}_nor.png`;

		const ambName = piece === "Eye"
			? `${prefix}Eye_amb.png`
			: `${prefix}${piece}_amb.png`;

		const emiName = piece === "Eye"
			? `${prefix}Eye_emi.png`
			: `${prefix}${piece}_emi.png`;

		const irisName =
			variant === "base"
				? `${prefix}Iris_lyc.png`
				: `${prefix}Iris_lyc_rare.png`;

		const alb = await tryLoad(texDir + colName, { srgb: true });
		const nrm = await tryLoad(texDir + norName, { srgb: false });
		const ao = await tryLoad(texDir + ambName, { srgb: false });
		const emi = await tryLoad(texDir + emiName, { srgb: false });
		const iris = piece === "Eye" ? await tryLoad(texDir + irisName, { srgb: false }) : null;

		const set = { alb, nrm, ao, emi, iris };
		cache.set(piece, set);
		return set;
	}

	// Collect build tasks (same pattern as your SV applier)
	const tasks = [];
	const meshMats = new Map(); // mesh.uuid -> rebuilt materials array

	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const rebuilt = [];

		for (const oldMat of mats) {
			const matName = oldMat?.name || "";
			const piece = swshPieceForMaterial(matName);

			// If we can't detect piece, keep old material (but neutralize tint)
			if (!piece) {
				if (oldMat?.color) oldMat.color.set(0xffffff);
				if (oldMat) oldMat.vertexColors = false;
				rebuilt.push(oldMat);
				continue;
			}

			tasks.push((async () => {
				const { alb, nrm, ao, emi, iris } = await getSet(piece);

				// Eye uses your custom shader, but feed iris texture from Iris_lyc*
				if (piece === "Eye") {
					const params = getEyeParamsForModel(glbUrl);
					const irisColor = new THREE.Color(params.iris);
					irisColor.convertSRGBToLinear();

					const eyeMat = makePokemonEyeMaterial({
						name: matName || "Eye",
						alb,
						lym: null,
						msk: null,
						irisTex: iris || nrm || null, // prefer Iris_lyc*, fallback to Eye_nor if needed
						irisColor,
						pupilColor: new THREE.Color(params.pupil),
						pupilCenter: params.pupilCenter,
						pupilRadius: params.pupilRadius,
						pupilFeather: params.pupilFeather,
					});

					eyeShaderMats.push(eyeMat);
					return eyeMat;
				}

				// Body pieces use your standard material builder
				const nm = makePokemonBodyMaterial({
					name: matName || piece,
					alb,
					nrm,
					rgn: null,
					mtl: null,
					ao,   // use *_amb as aoMap
					emi,  // use *_emi as emissive contribution
				});

				// SwSh “color puke” prevention:
				nm.color.set(0xffffff);
				nm.vertexColors = false;        // don’t let exported vertex colors tint the map
				nm.emissive.set(0x000000);
				nm.emissiveIntensity = 1.0;     // map drives it (your shader adds emissive when present)

				return nm;
			})());
		}

		meshMats.set(o.uuid, rebuilt);
	});

	const newMats = await Promise.all(tasks);

	// Second pass: assign new materials in the same order we queued them
	let idx = 0;
	root3d.traverse((o) => {
		if (!o?.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const out = mats.map((oldMat) => {
			const piece = swshPieceForMaterial(oldMat?.name || "");
			if (!piece) return oldMat; // kept old
			return newMats[idx++];     // replaced
		}).filter(Boolean);

		o.material = out.length === 1 ? out[0] : out;
	});
}