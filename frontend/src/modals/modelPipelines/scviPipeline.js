import * as THREE from "three";
import { applyGenericTextureSetToScene, swapUvChannelsIfNeeded, logUvRangeOnce } from "./utils.js";
import { getModelKeyFromGlbUrl, getEyeParamsForModel } from "./eyes.js";
import { makePokemonEyeMaterial, makePokemonBodyMaterial } from "./materials.js";

function stemForMaterial(matName) {
	const n = String(matName || "").toLowerCase();
	if (n === "l_eye" || n === "r_eye") return "eye";
	return n;
}

export async function applyPokemonTextureSetToScene(root3d, { glbUrl, variant, texDir, eyeShaderMats }) {
	const modelKey = getModelKeyFromGlbUrl(glbUrl);
	if (!modelKey) throw new Error("ScVi: could not parse model id from glbUrl: " + glbUrl);

	return applyGenericTextureSetToScene(root3d, {
		glbUrl, variant, eyeShaderMats,
		probeRelPath: "body_a_alb.png",
		stemForMaterial,
		buildCandidatesForStem: (texDir, stem) => ({
			alb: [`${texDir}${stem}_alb.png`, `${texDir}${stem}_col.png`, `${texDir}${stem}_basecolor.png`],
			nrm: [`${texDir}${stem}_nrm.png`, `${texDir}${stem}_nor.png`, `${texDir}${stem}_normal.png`],
			lym: [`${texDir}${stem}_lym.png`],
			msk: [`${texDir}body_msk.png`, `${texDir}${stem}_msk.png`],
			ao: [`${texDir}${stem}_ao.png`],
			rgn: [`${texDir}${stem}_rgn.png`],
			mtl: [`${texDir}${stem}_mtl.png`],
		}),
		makeEyeMaterial: ({ matName, tex, glbUrl }) => {
			const params = getEyeParamsForModel(glbUrl);
			const irisColor = new THREE.Color(params.iris);
			irisColor.convertSRGBToLinear();

			return makePokemonEyeMaterial({
				name: matName || "Eye",
				alb: tex.alb,
				lym: tex.lym,
				msk: tex.msk,
				irisTex: null,
				irisColor,
				pupilColor: new THREE.Color(params.pupil),
				pupilCenter: params.pupilCenter,
				pupilRadius: params.pupilRadius,
				pupilFeather: params.pupilFeather,
			});
		},
		makeBodyMaterial: ({ matName, tex, stem }) => makePokemonBodyMaterial({
			name: matName || stem,
			alb: tex.alb,
			nrm: tex.nrm,
			rgn: tex.rgn,
			mtl: tex.mtl,
			ao: tex.ao,
			emi: null,
		}),
		postProcessMesh: (mesh, stem) => {
			swapUvChannelsIfNeeded(mesh, stem);
			logUvRangeOnce(mesh, stem);
		},
	});
}
