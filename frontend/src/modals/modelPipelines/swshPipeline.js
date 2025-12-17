// swshPipeline.js (DROP-IN)
import * as THREE from "three";
import { applyGenericTextureSetToScene } from "./utils.js";
import { getModelKeyFromGlbUrl, getEyeParamsForModel } from "./eyes.js";
import { makePokemonEyeMaterial, makePokemonBodyMaterial } from "./materials.js";

// Map GLB material names -> SwSh “piece”
function swshStemForMaterial(matName) {
	const low = String(matName || "").toLowerCase();

	if (low.includes("bodya") || low === "body_a") return "BodyA";
	if (low.includes("bodyb") || low === "body_b") return "BodyB";

	// treat any eye-ish mat as eye
	if (low.includes("eye") || low === "l_eye" || low === "r_eye") return "eye";

	return null;
}

export async function applySwordShieldTextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats }) {
	const modelKey = getModelKeyFromGlbUrl(glbUrl);
	if (!modelKey) throw new Error("SwSh: could not parse model id from glbUrl: " + glbUrl);

	return applyGenericTextureSetToScene(root3d, {
		glbUrl,
		variant,
		eyeShaderMats,

		// pick the right folder (male/ vs textures/) by probing a file that should exist
		probeRelPath: "BodyA_col.png",

		stemForMaterial: swshStemForMaterial,

		buildCandidatesForStem: (texDir, stem) => {
			if (stem === "eye") {
				// Eye uses Eye_col + Iris_lyc (optional)
				return {
					alb: [`${texDir}Eye_col.png`],
					nrm: [`${texDir}Eye_nor.png`],
					ao: [`${texDir}Eye_amb.png`],
					// stash emissive in mtl slot if you have Eye_emi (usually you won't)
					mtl: [`${texDir}Eye_emi.png`],
					iris: [`${texDir}Iris_lyc.png`],
					lym: [],
					rgn: [],
					msk: [],
				};
			}

			// Body pieces
			return {
				alb: [`${texDir}${stem}_col.png`],
				nrm: [`${texDir}${stem}_nor.png`],
				ao: [`${texDir}${stem}_amb.png`],
				// stash emissive in mtl slot
				mtl: [`${texDir}${stem}_emi.png`],
				lym: [],
				rgn: [],
				msk: [],
				iris: [],
			};
		},

		makeEyeMaterial: ({ matName, tex, glbUrl }) => {
			const params = getEyeParamsForModel(glbUrl);
			const irisColor = new THREE.Color(params.iris);
			irisColor.convertSRGBToLinear();

			return makePokemonEyeMaterial({
				name: matName || "Eye",
				alb: tex.alb,
				lym: null,
				msk: null,
				irisTex: tex.iris || null,
				irisColor,
				pupilColor: new THREE.Color(params.pupil),
				pupilCenter: params.pupilCenter,
				pupilRadius: params.pupilRadius,
				pupilFeather: params.pupilFeather,
			});
		},

		makeBodyMaterial: ({ matName, tex, stem }) => {
			// SwSh: ao comes from *_amb; emissive comes from *_emi (stored in tex.mtl)
			const bodyMat = makePokemonBodyMaterial({
				name: matName || stem,
				alb: tex.alb,
				nrm: tex.nrm,
				rgn: null,
				mtl: null,
				ao: tex.ao,
				emi: tex.mtl || null,
			});

			// SwSh “color puke” prevention
			bodyMat.color?.set?.(0xffffff);
			bodyMat.vertexColors = false;
			bodyMat.emissive?.set?.(0x000000);
			bodyMat.emissiveIntensity = 1.0;

			if (bodyMat.normalMap && bodyMat.normalScale?.set) {
				bodyMat.normalScale.set(0.35, 0.35);
			}

			return bodyMat;
		},
	});
}
