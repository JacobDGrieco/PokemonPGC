// src/ui/modals/modelPipelines/lgpePipeline.js
import * as THREE from "three";
import { applyGenericTextureSetToScene } from "./utils.js";

// Basic suffix guesses (keep small; no probing happens anyway — manifest gates loading)
function isEyeStem(stem) {
	return /^Eye[12]$/.test(stem);
}

function stemForMaterial(matName) {
	const n = String(matName || "").toLowerCase();

	if (/\bbody\s*a\b/.test(n) || n.includes("bodya") || n.includes("body_a")) return "BodyA1";
	if (/\bbody\s*b\b/.test(n) || n.includes("bodyb") || n.includes("body_b")) return "BodyB1";
	if (/\bbody\s*c\b/.test(n) || n.includes("bodyc") || n.includes("body_c")) return "BodyC1";
	if (n === "body" || n.includes("body")) return "Body1";

	if (n.includes("left") && n.includes("eye")) return "Eye1";
	if (n.includes("right") && n.includes("eye")) return "Eye1";
	if (n.includes("eye")) return "Eye1";

	if (n.includes("mouth")) return "Mouth1";
	if (n.includes("fire")) return "FireCoreA1";

	return null;
}

// Simple “slap it on” materials (no toon, no special packing)
function makeSimpleMaterial({ name, tex, transparent = false }) {
	const mat = new THREE.MeshLambertMaterial({
		name,
		map: tex.alb || null,
		transparent,
		depthWrite: !transparent,
		alphaTest: transparent ? 0.02 : 0.0,
	});

	if (mat.map) mat.map.flipY = false;

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
			const isFireCore = /^FireCoreA[12]$/.test(s);
			const isFireSten = /^FireStenA[12]$/.test(s);

			const nrm =
				(s === "Body1") ? [`${texDir}BodyNor.png`] :
					(s === "BodyA1") ? [`${texDir}BodyANor.png`] :
						(s === "BodyB1") ? [`${texDir}BodyBNor.png`] :
							(s === "BodyC1") ? [`${texDir}BodyCNor.png`] :
								(s === "Eye1") ? [`${texDir}EyeNor.png`] :
									[];
			const msk =
				(s === "BodyB1") ? [`${texDir}BodyBMask.png`] :
					(s === "BodyC1") ? [`${texDir}BodyCMask.png`] :
						(s === "FireCoreA1") ? [`${texDir}FireStenA1.png`] :
							[];

			return {
				alb: [`${texDir}${s}.png`],
				nrm,
				msk,
				ao: [],
				lym: [],
				rgn: [],
				mtl: [],
				iris: [],
			};
		},

		// “eye” gets a transparent material so eyelashes/holes don’t look wrong
		makeEyeMaterial: ({ matName, tex }) => {
			// 3DS eyes are baked textures. No shader. No iris rebuild.
			// Use transparency only if you actually need it (often you don't).
			const mat = makeSimpleMaterial({ name: matName || "Eye", tex, transparent: false });
			if (mat.normalMap && tex.nrm) mat.normalMap = tex.nrm;
			return mat;
		},

		makeBodyMaterial: ({ matName, tex, stem }) => {
			const lower = String(matName || "").toLowerCase();

			// Fire: use stencil as alpha
			if (lower.includes("fire")) {
				const mat = makeSimpleMaterial({ name: matName || stem, tex, transparent: !!tex.msk });

				// If a mask exists, use it as alpha to cut out parts cleanly
				if (tex.msk) {
					mat.alphaMap = tex.msk;
					mat.transparent = true;
					mat.depthWrite = false;
					mat.alphaTest = 0.02;

					if (mat.alphaMap) mat.alphaMap.flipY = false;

					mat.needsUpdate = true;
				}
				return mat;
			}

			// Everything else (Body)
			const mat = makeSimpleMaterial({ name: matName || stem, tex, transparent: false });
			return mat;
		},

		// no UV swapping / special handling yet
		postProcessMesh: (mesh, stem) => {
			// optional: some LGPE meshes might need DoubleSide
			// if (mesh.name.toLowerCase().includes("wing")) mesh.material.side = THREE.DoubleSide;
		},
	});
}
