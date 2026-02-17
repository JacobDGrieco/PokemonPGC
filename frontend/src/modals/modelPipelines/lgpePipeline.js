// src/ui/modals/modelPipelines/lgpePipeline.js
import * as THREE from "three";
import { applyGenericTextureSetToScene } from "./utils.js";

function stemForMaterial(matName) {
	const raw = String(matName || "");
	const exact = raw.match(/\b(BodyA|BodyB|BodyC|Eye|Fire)\b/i);
	if (exact) {
		const k = exact[1];
		return k[0].toUpperCase() + k.slice(1);
	}
	const n = raw.toLowerCase();

	if (n.includes("bodya") || n.includes("body_a") || n.includes("body a")) return "BodyA";
	if (n.includes("bodyb") || n.includes("body_b") || n.includes("body b")) return "BodyB";
	if (n.includes("bodyc") || n.includes("body_c") || n.includes("body c")) return "BodyC";
	if (n.includes("body")) return "Body";

	if (n.includes("eye") || n.includes("bug")) return "Eye";

	if (n.includes("mouth")) return "Mouth";
	if (n.includes("fire")) return "Fire";

	return "BodyA";
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
		alphaTest: 0.0, // ✅ no cutout
	});

	if (mat.map) mat.map.flipY = false;
	if (mat.aoMap) mat.aoMap.flipY = false;

	mat.skinning = true;
	return mat;
}

function makeFireMaterial({ name, tex }) {
	const mat = new THREE.MeshBasicMaterial({
		name,
		color: 0xffa54a,           // warm orange (tweak if you want)
		alphaMap: tex.msk || null, // ✅ mask drives opacity
		transparent: true,
		opacity: 1.0,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
		side: THREE.DoubleSide,
	});

	if (mat.alphaMap) mat.alphaMap.flipY = false;

	// ✅ remove "sharp" cutout edges
	mat.alphaTest = 0.0;

	mat.skinning = true;
	return mat;
}

export async function applyLGPETextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats } = {}) {
	// We intentionally ignore variant for LGPE right now — you’re just “slapping textures on”.
	return applyGenericTextureSetToScene(root3d, {
		glbUrl,
		variant,
		eyeShaderMats,

		stemForMaterial,

		buildCandidatesForStem: (texDir, stem) => {
			const s = String(stem || "");
			const isFire = s === "Fire";

			if (isFire) {
				// Fire is mask-driven in your manifest (no *_col)
				return {
					alb: [], // none
					nrm: [],
					ao: [],
					lym: [],
					rgn: [],
					mtl: [],

					// ✅ pull first-available mask (A1 preferred)
					msk: [
						`${texDir}FireCoreA1_msk.png`,
						`${texDir}FireCoreA2_msk.png`,
						`${texDir}FireStenA1_msk.png`,
						`${texDir}FireStenA2_msk.png`,
						`${texDir}FireStenAMask_msk.png`,
					],
					iris: [],
				};
			}

			// Body/Eye use normal col/amb files
			return {
				alb: [`${texDir}${s}_col.png`, `${texDir}${s}_col_rare.png`],
				nrm: [],
				ao: [`${texDir}${s}_amb.png`],
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
			if (stem === "Fire") {
				return makeFireMaterial({ name: matName || "Fire", tex });
			}
			return makeSimpleMaterial({ name: matName || stem, tex, transparent: false });
		},

		// no UV swapping / special handling yet
		postProcessMesh: (mesh, stem) => {
			// optional: some LGPE meshes might need DoubleSide
			// if (mesh.name.toLowerCase().includes("wing")) mesh.material.side = THREE.DoubleSide;
		},
	});
}
