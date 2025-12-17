// laPipeline.js (DROP-IN)
import * as THREE from "three";
import { applyGenericTextureSetToScene, swapUvChannelsIfNeeded, logUvRangeOnce } from "./utils.js";
import { getModelKeyFromGlbUrl, getEyeParamsForModel, getBodyTintForModel } from "./eyes.js";
import { makePokemonBodyMaterial, makePokemonEyeMaterial } from "./materials.js";

// Map PLA/LA material names to your texture stems
function plaStemForMaterial(matName) {
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
	const warm = new THREE.Color(1.0, 0.95, 0.80);
	return baseLinear.clone().lerp(warm, 0.75);
}

export async function applyLegendsArceusTextureSetToScene(root3d, { glbUrl, variant, eyeShaderMats }) {
	const modelKey = getModelKeyFromGlbUrl(glbUrl);
	if (!modelKey) throw new Error("LA: could not parse model id from glbUrl: " + glbUrl);

	return applyGenericTextureSetToScene(root3d, {
		glbUrl,
		variant,
		eyeShaderMats,

		// Since you removed pm####_00_, probe a real file name directly
		probeRelPath: "body_a_alb.png",

		stemForMaterial: plaStemForMaterial,

		buildCandidatesForStem: (texDir, stem) => {
			// PLA/LA: eyes typically only have alb/nrm/lym in your dump
			if (stem === "eye") {
				return {
					alb: [`${texDir}${stem}_alb.png`],
					nrm: [`${texDir}${stem}_nrm.png`],
					lym: [`${texDir}${stem}_lym.png`],
					ao: [],
					rgn: [],
					mtl: [],
					msk: [],
					iris: [],
				};
			}

			return {
				alb: [`${texDir}${stem}_alb.png`],
				nrm: [`${texDir}${stem}_nrm.png`],
				lym: [`${texDir}${stem}_lym.png`],
				ao: [`${texDir}${stem}_ao.png`],
				rgn: [`${texDir}${stem}_rgn.png`],
				mtl: [`${texDir}${stem}_mtl.png`],
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
				lym: tex.lym,
				msk: null,
				irisTex: null,
				irisColor,
				pupilColor: new THREE.Color(params.pupil),
				pupilCenter: params.pupilCenter,
				pupilRadius: params.pupilRadius,
				pupilFeather: params.pupilFeather,
			});
		},

		makeBodyMaterial: ({ matName, tex, stem, glbUrl }) => {
			const tintA = getBodyTintForModel(glbUrl);    // linear
			const tintB = deriveBellyTintFromBase(tintA); // linear

			const bodyMat = makePokemonBodyMaterial({
				name: matName || stem,
				alb: tex.alb,
				nrm: tex.nrm,
				rgn: tex.rgn,
				mtl: tex.mtl,
				ao: tex.ao,
				emi: null,

				lym: tex.lym,
				tintA,
				tintB,
			});

			// “color puke” prevention
			bodyMat.color?.set?.(0xffffff);
			bodyMat.vertexColors = false;

			return bodyMat;
		},

		postProcessMesh: (mesh, stem) => {
			swapUvChannelsIfNeeded(mesh, stem);
			logUvRangeOnce(mesh, stem);
		},
	});
}
