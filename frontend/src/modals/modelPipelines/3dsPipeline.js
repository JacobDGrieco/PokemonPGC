// src/ui/modals/modelPipelines/lgpePipeline.js
import * as THREE from "three";
import { applyGenericTextureSetToScene } from "./utils.js";

// Basic suffix guesses (keep small; no probing happens anyway — manifest gates loading)
const ALB_SUFFIXES = ["_col.png", "_col_rare.png"];

function stemForMaterial(matName) {
	const raw = String(matName || "");

	// If the material already contains the exact texture stem, use it.
	// This is the big fix: lets us pick BodyA2 / Eye2 / Iris2 when needed.
	const exact = raw.match(/\b(BodyA[12]|BodyB[12]|Eye[12]|Iris[12])\b/i);
	if (exact) {
		// normalize case to match filenames
		const k = exact[1];
		return k[0].toUpperCase() + k.slice(1);
	}

	const n = raw.toLowerCase();

	// Fallbacks when the material name doesn't include 1/2
	if (n.includes("bodya") || n.includes("body_a") || n.includes("body a")) return "BodyA1";
	if (n.includes("bodyb") || n.includes("body_b") || n.includes("body b")) return "BodyB1";
	if (n.includes("eye")) return "Eye1";
	if (n.includes("iris")) return "Iris1";

	// last resort
	return "BodyA1";
}


// Simple “slap it on” materials (no toon, no special packing)
function makeSimpleMaterial({ name, tex, transparent = false }) {
	const mat = new THREE.MeshStandardMaterial({
		name,
		map: tex.alb || null,
		aoMap: tex.ao || null,

		roughness: 0.85,
		metalness: 0.0,

		transparent,
		depthWrite: !transparent,
		alphaTest: transparent ? 0.02 : 0.0,
	});

	if (mat.map) mat.map.flipY = false;
	if (mat.aoMap) mat.aoMap.flipY = false;

	// NOTE: aoMap needs uv2. If your meshes don’t have uv2, Three.js won’t apply it.
	// We can copy uv->uv2 later if needed.
	mat.skinning = true;
	return mat;
}

export async function apply3DSTextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats } = {}) {
	// We intentionally ignore variant for LGPE right now — you’re just “slapping textures on”.
	return applyGenericTextureSetToScene(root3d, {
		glbUrl,
		variant,
		eyeShaderMats,

		stemForMaterial,

		buildCandidatesForStem: (texDir, stem) => {
			const s = String(stem || "");

			// Stem will now be like BodyA1 / BodyA2 / Eye1 / Eye2 / Iris1 / Iris2
			const isBodyA = /^BodyA[12]$/.test(s);
			const isBodyB = /^BodyB[12]$/.test(s);
			const isEye = /^Eye[12]$/.test(s);
			const isIris = /^Iris[12]$/.test(s);

			const nrm =
				isBodyA ? [`${texDir}BodyANor.png`] :
					isBodyB ? [`${texDir}BodyBNor.png`] :
						isEye ? [`${texDir}EyeNor.png`] :
							[]; // Iris has no normal in your set

			return {
				// Base color (this is the key fix — now BodyA2/Eye2/Iris2 can be used as actual albedo)
				alb: [
					`${texDir}${s}.png`,
					`${texDir}${s}_rare.png`,
				],

				// Shared normal maps
				nrm,

				// Not used for 3DS right now
				ao: [],
				lym: [],
				rgn: [],
				mtl: [],
				msk: [],
				iris: [],
			};
		},

		// “eye” gets a transparent material so eyelashes/holes don’t look wrong
		makeEyeMaterial: ({ matName, tex }) => {
			return makeSimpleMaterial({ name: matName || "Eye", tex, transparent: true });
		},

		makeBodyMaterial: ({ matName, tex, stem }) => {
			// smoke also usually wants transparency
			if (stem === "smoke") return makeSimpleMaterial({ name: matName || "Smoke", tex, transparent: true });
			return makeSimpleMaterial({ name: matName || stem, tex, transparent: false });
		},

		// no UV swapping / special handling yet
		postProcessMesh: (mesh, stem) => {
			// optional: some LGPE meshes might need DoubleSide
			// if (mesh.name.toLowerCase().includes("wing")) mesh.material.side = THREE.DoubleSide;
		},
	});
}
