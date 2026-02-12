// src/ui/modals/modelPipelines/lgpePipeline.js
import * as THREE from "three";
import { applyGenericTextureSetToScene } from "./utils.js";

// Basic suffix guesses (keep small; no probing happens anyway — manifest gates loading)
const ALB_SUFFIXES = ["_col.png", "_col_rare.png"];

function stemForMaterial(matName) {
	const raw = String(matName || "");
	const n = raw.toLowerCase();

	// map common material naming → LGPE texture stems
	if (n.includes("bodya") || n.includes("body_a") || n.includes("body a")) return "BodyA";
	if (n.includes("bodyb") || n.includes("body_b") || n.includes("body b")) return "BodyB";

	if (n.includes("iris")) return "Iris";
	if (n.includes("eye")) return "Eye";

	if (n.includes("projection") || n.includes("effect")) return "projection_effect";
	if (n.includes("dummy")) return "dummy";

	// fallback: try to use the first token-ish chunk
	// (this keeps original case-ish from the raw name when possible)
	const m = raw.match(/[A-Za-z_]+/);
	return m ? m[0] : "BodyA";
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

export async function applyLGPETextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats } = {}) {
	// We intentionally ignore variant for LGPE right now — you’re just “slapping textures on”.
	return applyGenericTextureSetToScene(root3d, {
		glbUrl,
		variant,
		eyeShaderMats,

		stemForMaterial,

		buildCandidatesForStem: (texDir, stem) => {
			const s = String(stem || "");

			// IMPORTANT: these must match your manifest filenames exactly
			// because the manifest gates the loads.
			return {
				// Base color
				alb: [`${texDir}${s}_col.png`, `${texDir}${s}_col_rare.png`],

				// LGPE doesn't seem to have normal maps here, so leave empty
				nrm: [],

				// If you want a *tiny* bit more: treat _amb as AO-ish (optional)
				ao: [`${texDir}${s}_amb.png`],

				// ignore for now (unless you decide what _sdw should do)
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
