// Map GLB material name -> texture stem
function _stemForMaterial(matName) {
	if (matName === "l_eye" || matName === "r_eye") return "eye";
	return matName; // body_a, body_b, etc.
}

async function applyPokemonTextureSetToScene(root3d, { glbUrl, variant }) {
	const texDir = (arguments[1]?.texDir) ?? `${_dirname(glbUrl)}textures/${variant}/`;
	const tl = new THREE.TextureLoader();

	// you can expand this if you discover more suffixes
	const SUFFIX = {
		alb: ["_alb.png"],
		nrm: ["_nrm.png"],
		nrm2: ["2_nrm.png"],
		lym: ["_lym.png"],
		msk: ["_msk.png"],
		rgn: ["_rgn.png"],
		mtl: ["_mtl.png"],
		ao: ["_ao.png"],
		emi: ["_emi.png"],
	};
	// cache per stem so l_eye + r_eye share the same loaded textures
	const cache = new Map();

	async function getSet(stem) {
		if (cache.has(stem)) return cache.get(stem);

		const alb = await _loadFirstTexture(
			tl,
			SUFFIX.alb.map((s) => `${texDir}${stem}${s}`),
			{ srgb: true }
		);

		const nrm = await _loadFirstTexture(
			tl,
			SUFFIX.nrm.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		);

		const nrm2 = _isEyeStem(stem) ? await _loadFirstTexture(
			tl,
			SUFFIX.nrm2.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		) : null;

		const lym = _isEyeStem(stem) ? await _loadFirstTexture(
			tl,
			SUFFIX.lym.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		) : null;

		const msk = null;
		// const msk = _isEyeStem(stem) ? await _loadFirstTexture(
		// 	tl,
		// 	SUFFIX.msk.map((s) => `${texDir}${stem}${s}`),
		// 	{ srgb: false }
		// ) : null;

		const rgn = _isEyeStem(stem) ? null : await _loadFirstTexture(
			tl,
			SUFFIX.rgn.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		);

		const mtl = _isEyeStem(stem) ? null : await _loadFirstTexture(
			tl,
			SUFFIX.mtl.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		);

		const ao = _isEyeStem(stem) ? null : await _loadFirstTexture(
			tl,
			SUFFIX.ao.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		);

		const emi = null;
		// const emi = _isEyeStem(stem) ? null : await _loadFirstTexture(
		// 	tl,
		// 	SUFFIX.emi.map((s) => `${texDir}${stem}${s}`),
		// 	{ srgb: false }
		// );

		const set = { alb, nrm, nrm2, lym, msk, rgn, mtl, ao, emi };
		cache.set(stem, set);

		return set;
	}

	// Traverse meshes and replace their materials
	const tasks = [];

	root3d.traverse((o) => {
		if (!o.isMesh) return;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const outMats = [];

		for (const m of mats) {
			const matName = m?.name || "";
			const stem = _stemForMaterial(matName);
			_swapUvChannelsIfNeeded(o, stem);
			_logUvRangeOnce(o, stem);

			// skip non-named materials (or you can decide a default)
			if (!stem) {
				outMats.push(m);
				continue;
			}
			if (stem !== "eye" && o.geometry && !o.isSkinnedMesh) {
				o.geometry.computeVertexNormals();
				o.geometry.attributes.normal.needsUpdate = true;
			}

			tasks.push((async () => {
				const { alb, nrm, nrm2, lym, msk, rgn, mtl, ao, emi } = await getSet(stem);

				if (stem === "eye") {
					const params = getEyeParamsForModel(glbUrl);
					const irisColor = new THREE.Color(params.iris);
					irisColor.convertSRGBToLinear();

					const eyeMat = makePokemonEyeMaterial({
						name: matName,
						alb,
						lym,
						msk,
						irisTex: nrm,
						irisColor,
						pupilColor: new THREE.Color(params.pupil),
						pupilCenter: params.pupilCenter,
						pupilRadius: params.pupilRadius,
						pupilFeather: params.pupilFeather,
					});

					eyeShaderMats.push(eyeMat);
					return eyeMat;
				}

				// fresh PBR material for consistency
				const nm = makePokemonBodyMaterial({
					name: matName,
					alb,
					nrm,
					rgn,
					mtl,
					ao,
					emi,
				});

				// If you kept vertex colors in the GLB and want them:
				// nm.vertexColors = !!m.vertexColors;

				return nm;
			})());
		}

		// We can’t assign until tasks resolve; we’ll do it later.
		// For now store placeholder; we’ll rewrite after load.
		o.__ppgcNeedsMaterialSwap = true;
	});

	const newMaterials = await Promise.all(tasks);

	// second pass: assign in order
	let idx = 0;
	root3d.traverse((o) => {
		if (!o.isMesh || !o.__ppgcNeedsMaterialSwap) return;
		delete o.__ppgcNeedsMaterialSwap;

		const mats = Array.isArray(o.material) ? o.material : [o.material];
		const rebuilt = mats.map(() => newMaterials[idx++]).filter(Boolean);

		o.material = rebuilt.length === 1 ? rebuilt[0] : rebuilt;
		o.material.needsUpdate = true;
	});

	return { texDir };
}