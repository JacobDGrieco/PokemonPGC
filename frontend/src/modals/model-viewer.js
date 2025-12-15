// src/ui/modals/modelViewerModal.js
// Requires: three (THREE), GLTFLoader, OrbitControls
// You can adapt imports depending on your build setup.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { HOME_SPRITE_HEX } from "../../imgs/sprites/sprite_hex.js";

const eyeShaderMats = [];

function parseAnimLabel(raw) {
	const r = (raw || "").trim();
	const lower = r.toLowerCase();

	// --- phase suffix detection ---
	let phase = "";
	if (/(^|_)(start|st)(_|$)/i.test(r)) phase = "Start";
	else if (/(^|_)(end|ed)(_|$)/i.test(r)) phase = "End";
	else if (/(^|_)(loop|lp)(_|$)/i.test(r)) phase = "Loop";

	// remove known phase tokens from the base matching
	const baseKey = lower
		.replace(/(^|_)(start|st)(_|$)/g, "_")
		.replace(/(^|_)(end|ed)(_|$)/g, "_")
		.replace(/(^|_)(loop|lp)(_|$)/g, "_")
		.replace(/__+/g, "_");

	// --- base label rules (keep what you already had, but return generic buckets) ---
	let base = "";

	if (/defaultwait/.test(baseKey)) base = "Wait";
	else if (/battlewait/.test(baseKey)) base = "Battle Wait";
	else if (/defaultidle/.test(baseKey)) base = "Idle";
	else if (/battleidle/.test(baseKey)) base = "Battle Idle";
	else if (/turn_r000|turnmove_r000|turnmove01_r000/.test(baseKey)) base = "Turn";
	else if (/turn_l090|turnmove_l090|turnmove01_l090/.test(baseKey)) base = "Turn Left";
	else if (/turn_r090|turnmove_r090|turnmove01_r090/.test(baseKey)) base = "Turn Right";
	else if (/walk/.test(baseKey)) base = "Walk";
	else if (/run/.test(baseKey)) base = "Run";
	else if (/stepin/.test(baseKey)) base = "Step In";
	else if (/stepout/.test(baseKey)) base = "Step Out";
	else if (/jumpup/.test(baseKey)) base = "Jump Up";
	else if (/jumpdown/.test(baseKey)) base = "Jump Down";
	else if (/land/.test(baseKey)) base = "Land";
	else if (/rest/.test(baseKey)) base = "Rest";
	else if (/sleep/.test(baseKey)) base = "Sleep";
	else if (/roar/.test(baseKey)) base = "Roar";
	else if (/appeal/.test(baseKey)) base = "Appeal";
	else if (/refresh/.test(baseKey)) base = "Refresh";
	else if (/search/.test(baseKey)) base = "Search";
	else if (/rangeattack/.test(baseKey)) base = "Ranged Attack";
	else if (/eat/.test(baseKey)) base = "Eat";
	else if (/attack/.test(baseKey)) base = "Attack";
	else if (/charge/.test(baseKey)) base = "Charge";
	else if (/damage/.test(baseKey)) base = "Damage";
	else if (/stun/.test(baseKey)) base = "Stun";
	else if (/down/.test(baseKey)) base = "Downed";
	else if (/glad/.test(baseKey)) base = "Glad";
	else if (/notice/.test(baseKey)) base = "Notice";
	else if (/hate/.test(baseKey)) base = "Hate";
	else if (/ev_once/.test(baseKey)) base = "EV Once";
	else if (/eye/.test(baseKey)) base = "Blink";
	else base = r || "Animation";

	return { base, phase, raw: r };
}

function buildAnimDisplayNames(clips) {
	// First pass: parse
	const parsed = clips.map((c) => ({ clip: c, ...parseAnimLabel(c.name) }));

	// Count how many per base label
	const counts = {};
	for (const p of parsed) counts[p.base] = (counts[p.base] || 0) + 1;

	// Second pass: number duplicates per base
	const seen = {};
	return parsed.map((p) => {
		const needsNumber = (counts[p.base] || 0) > 1;
		const n = (seen[p.base] = (seen[p.base] || 0) + 1);

		const num = needsNumber ? String(n).padStart(2, "0") : "";
		const phase = p.phase ? ` (${p.phase})` : "";

		const label = needsNumber ? `${p.base} ${num}${phase}` : `${p.base}${phase}`;
		return { label, title: p.raw };
	});
}

function _dirname(url) {
	const i = url.lastIndexOf("/");
	return i >= 0 ? url.slice(0, i + 1) : "";
}

function _loadTexture(loader, url, { srgb = false } = {}) {
	return new Promise((resolve, reject) => {
		loader.load(
			url,
			(tex) => {
				// glTF-style orientation expectations
				tex.flipY = false;

				// three r152+ uses colorSpace
				if (srgb && "colorSpace" in tex) tex.colorSpace = THREE.SRGBColorSpace;

				// IMPORTANT: Blender defaults to repeat; Three defaults to clamp.
				// If UVs go outside 0..1 (common for these), clamp makes the texture look "mapped wrong".
				tex.wrapS = THREE.RepeatWrapping;
				tex.wrapT = THREE.RepeatWrapping;
				tex.repeat.set(1, 1);

				tex.needsUpdate = true;

				resolve(tex);
			},
			undefined,
			reject
		);
	});
}

// try a list of filenames and take the first that loads
async function _loadFirstTexture(loader, candidates, opts) {
	for (const url of candidates) {
		try {
			return await _loadTexture(loader, url, opts);
		} catch (_) { }
	}
	return null;
}

function _swapUvChannelsIfNeeded(mesh, stem) {
	if (!mesh?.geometry?.attributes) return;

	// Only do this for body_b for now (your reported problem)
	if (stem !== "body_b") return;

	const g = mesh.geometry;
	const uv = g.getAttribute("uv");
	const uv2 = g.getAttribute("uv2");

	// If uv2 exists, try using it as the primary UVs.
	// This fixes the classic "mapped totally wrong" symptom.
	if (uv2) {
		if (uv) {
			// swap
			g.setAttribute("uv", uv2);
			g.setAttribute("uv2", uv);
		} else {
			// copy uv2 -> uv
			g.setAttribute("uv", uv2);
		}
		g.attributes.uv.needsUpdate = true;
		if (g.attributes.uv2) g.attributes.uv2.needsUpdate = true;
	}
}

function _logUvRangeOnce(mesh, stem) {
	if (stem !== "body_b") return;
	if (mesh.userData.__uvRangeLogged) return;
	mesh.userData.__uvRangeLogged = true;

	const g = mesh.geometry;
	const uv = g?.getAttribute?.("uv");
	if (!uv) return;

	let minU = Infinity, minV = Infinity, maxU = -Infinity, maxV = -Infinity;
	for (let i = 0; i < uv.count; i++) {
		const u = uv.getX(i), v = uv.getY(i);
		if (u < minU) minU = u;
		if (v < minV) minV = v;
		if (u > maxU) maxU = u;
		if (v > maxV) maxV = v;
	}
}

// Map GLB material name -> texture stem
function _stemForMaterial(matName) {
	if (matName === "l_eye" || matName === "r_eye") return "eye";
	return matName; // body_a, body_b, etc.
}

function _isEyeStem(stem) {
	return stem === "eye";
}

function getModelKeyFromGlbUrl(glbUrl) {
	const m = /(?:pm)?(\d+)\.glb$/i.exec(glbUrl || "");
	if (!m) return null;
	const id = String(Number(m[1])); // "152" "130" (no leading zeros)
	return id;
}

function getEyeParamsForModel(glbUrl) {
	const key = getModelKeyFromGlbUrl(glbUrl);

	let iris = 0x30b030; // fallback
	let pupil = 0x0a0a0a;
	let pupilRadius = 0.18;
	let pupilFeather = 0.04;
	let pupilCenter = { x: 0.5, y: 0.5 };

	// Use HOME-derived color if present
	// (expects HOME_SPRITE_HEX keys like "152" or "152-f")
	if (key && HOME_SPRITE_HEX[key]) {
		iris = parseInt(HOME_SPRITE_HEX[key].slice(1), 16);
	}

	return { iris, pupil, pupilRadius, pupilFeather, pupilCenter };
}

function makePokemonEyeMaterial({
	name = "eye",
	alb,
	lym,
	msk,
	irisTex,
	irisColor,
	pupilColor,
	pupilCenter = { x: 0.5, y: 0.5 },
	pupilRadius = 0.18,
	pupilFeather = 0.04,
}) {
	const mat = new THREE.ShaderMaterial({
		name,
		transparent: true,
		depthWrite: true,
		lights: false,
		uniforms: {
			uAlb: { value: alb || null },
			uLym: { value: lym || null },
			uHasLym: { value: !!lym },

			uMsk: { value: msk || null },
			uHasMsk: { value: !!msk },

			uIrisTex: { value: irisTex || null },
			uHasIrisTex: { value: !!irisTex },

			uIrisColor: { value: irisColor || new THREE.Color(0.2, 0.8, 0.2) },
			uPupilColor: { value: pupilColor || new THREE.Color(0, 0, 0) },

			uPupilCenter: { value: new THREE.Vector2(pupilCenter.x, pupilCenter.y) },
			uPupilRadius: { value: pupilRadius },
			uPupilFeather: { value: pupilFeather },

			// lighting (driven from tick)
			uAmb: { value: new THREE.Color(0xffffff) },
			uAmbIntensity: { value: 1.0 },

			uHemiSky: { value: new THREE.Color(0xffffff) },
			uHemiGround: { value: new THREE.Color(0x333333) },
			uHemiIntensity: { value: 0.0 },
			uHemiDir: { value: new THREE.Vector3(0, 1, 0) },

			uDir0Color: { value: new THREE.Color(0xffffff) },
			uDir0Intensity: { value: 0.0 },
			uDir0Dir: { value: new THREE.Vector3(0, -1, 0) },

			uDir1Color: { value: new THREE.Color(0xffffff) },
			uDir1Intensity: { value: 0.0 },
			uDir1Dir: { value: new THREE.Vector3(0, -1, 0) },

			uSpecPower: { value: 80.0 },
			uSpecStrength: { value: 0.9 },
			uLymBoost: { value: 1.0 },
		},
		vertexShader: `
			varying vec2 vUv;
			varying vec3 vN;
			varying vec3 vV;

			#include <common>
			#include <uv_pars_vertex>
			#include <skinning_pars_vertex>
			#include <normal_pars_vertex>

			void main() {
				#include <uv_vertex>

				#include <beginnormal_vertex>
				#include <skinbase_vertex>
				#include <skinnormal_vertex>
				#include <defaultnormal_vertex>

				#include <begin_vertex>
				#include <skinning_vertex>

				vec4 mvPos = modelViewMatrix * vec4(transformed, 1.0);
				gl_Position = projectionMatrix * mvPos;

				vUv = uv;
				vN = normalize(normalMatrix * objectNormal);
				vV = normalize(-mvPos.xyz);
			}
		`,
		fragmentShader: `
  precision highp float;

  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vV;

  uniform sampler2D uAlb;
  uniform sampler2D uLym;
  uniform bool uHasLym;

  uniform vec3 uIrisColor;
  uniform vec3 uPupilColor;

  uniform vec3 uAmb;
  uniform float uAmbIntensity;

  void main() {
    vec3 base = texture2D(uAlb, vUv).rgb;

    // Simple lighting (ambient only) – eyes in SV are mostly “unlit”
    vec3 lit = uAmb * uAmbIntensity;

    // Default masks if LYM is missing
    float irisMask  = 0.0;
    float rimMask   = 0.0;
    float pupilMask = 0.0;

    if (uHasLym) {
      vec4 lym = texture2D(uLym, vUv);

      // These are your current assumptions:
      //  g = iris region, b = rim/outline, a = pupil-ish
      irisMask  = clamp(lym.g, 0.0, 1.0);
      rimMask   = clamp(lym.b, 0.0, 1.0);
      pupilMask = clamp(lym.a, 0.0, 1.0);

      // Make pupil more binary so it doesn’t look “smoky”
      pupilMask = smoothstep(0.25, 0.45, pupilMask);

      // Don’t let rim exist outside iris (keeps outline sane)
      rimMask *= irisMask;

      // Pupil wins over everything
      irisMask *= (1.0 - pupilMask);
      rimMask  *= (1.0 - pupilMask);
    }

    float scleraMask = clamp(1.0 - (irisMask + rimMask + pupilMask), 0.0, 1.0);

    // IMPORTANT: alpha includes pupil, otherwise pupils go transparent
    float alpha = clamp(scleraMask + irisMask + rimMask + pupilMask, 0.0, 1.0);
    if (alpha <= 0.01) discard;

    vec3 scleraCol = base * lit;                 // lit
    vec3 irisCol   = uIrisColor;                 // unlit
    vec3 pupilCol  = uPupilColor;                // unlit
    vec3 rimCol    = mix(uIrisColor, vec3(0.0), 0.55); // darker outline

    vec3 col =
      scleraCol * scleraMask +
      irisCol   * irisMask +
      pupilCol  * pupilMask +
      rimCol    * rimMask;

    gl_FragColor = vec4(col, alpha);
  }
`,
	});

	mat.skinning = true;
	if (alb) alb.flipY = false;
	if (lym) lym.flipY = false;

	return mat;
}

function makePokemonBodyMaterial({
	name,
	alb,
	nrm,
	rgn,
	mtl,
	ao,
	emi,
}) {
	const mat = new THREE.MeshStandardMaterial({
		name,
		map: alb || null,
		normalMap: nrm || null,

		roughness: 0.92,          // was 0.8
		metalness: 0.0,

		aoMap: ao || null,
		aoMapIntensity: 1.0,
	});
	if (mat.normalMap) mat.normalScale.set(0.65, 0.65);
	mat.envMapIntensity = 0.35;
	mat.skinning = true;

	// --- SV-ish shader injection ---
	mat.onBeforeCompile = (shader) => {
		shader.uniforms.uRgn = { value: rgn || null };
		shader.uniforms.uMtl = { value: mtl || null };
		shader.uniforms.uEmi = { value: emi || null };
		shader.uniforms.uHasRgn = { value: !!rgn };
		shader.uniforms.uHasMtl = { value: !!mtl };
		shader.uniforms.uHasEmi = { value: !!emi };

		// toon controls (tweak later)
		shader.uniforms.uToonSteps = { value: 4.0 };
		shader.uniforms.uToonStrength = { value: 0.55 };
		shader.uniforms.uSpecBoost = { value: 0.8 };
		shader.uniforms.uSatBoost = { value: 1.05 };
		shader.uniforms.uValBoost = { value: 1.05 };

		shader.vertexShader =
			`
	varying vec2 ppgcUv;
	` + shader.vertexShader;

		shader.vertexShader = shader.vertexShader.replace(
			"#include <uv_vertex>",
			`
	#include <uv_vertex>
	ppgcUv = uv;
	`
		);

		shader.fragmentShader =
			`
	varying vec2 ppgcUv;
	` + shader.fragmentShader;

		shader.fragmentShader =
			`
      uniform sampler2D uRgn;
      uniform sampler2D uMtl;
      uniform sampler2D uEmi;
      uniform bool uHasRgn;
      uniform bool uHasMtl;
      uniform bool uHasEmi;

      uniform float uToonSteps;
      uniform float uToonStrength;
      uniform float uSpecBoost;
      uniform float uSatBoost;
      uniform float uValBoost;

      vec3 rgb2hsv(vec3 c){
        vec4 K = vec4(0., -1./3., 2./3., -1.);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
        float d = q.x - min(q.w, q.y);
        float e = 1e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6. * d + e)), d / (q.x + e), q.x);
      }
      vec3 hsv2rgb(vec3 c){
        vec3 p = abs(fract(c.xxx + vec3(0., 2./3., 1./3.)) * 6. - 3.);
        return c.z * mix(vec3(1.), clamp(p - 1., 0., 1.), c.y);
      }
      ` + shader.fragmentShader;

		// 1) Boost color a touch (SV tends to look “punchier” than plain PBR)
		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <color_fragment>',
			`
      #include <color_fragment>

      // mild saturation/value boost
      vec3 hsv = rgb2hsv( diffuseColor.rgb );
      hsv.y *= uSatBoost;
      hsv.z *= uValBoost;
      diffuseColor.rgb = hsv2rgb(hsv);
      `
		);

		// 2) Decode rgn/mtl into roughness/metalness + add toon lighting “step”
		//    NOTE: this is heuristic until we verify exact packing, but it immediately improves “engine vibe”.
		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <roughnessmap_fragment>',
			`
      float roughnessFactor = roughness;

      if (uHasRgn) {
        vec4 rg = texture2D(uRgn, ppgcUv);

        // Heuristic SV decode:
        // - use G as roughness driver
        // - use B as spec mask (later)
        roughnessFactor *= clamp(rg.g, 0.02, 1.0);
      }

      roughnessFactor = clamp(roughnessFactor, 0.02, 1.0);
      `
		);

		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <metalnessmap_fragment>',
			`
      float metalnessFactor = metalness;

      if (uHasMtl) {
        vec4 mt = texture2D(uMtl, ppgcUv);
        metalnessFactor = clamp(mt.r, 0.0, 1.0);
      }
      `
		);

		// 3) Toon-ish shading: quantize direct light contribution without killing PBR entirely
		// 	shader.fragmentShader = shader.fragmentShader.replace(
		// 		'#include <lights_fragment_begin>',
		// 		`
		//   #include <lights_fragment_begin>

		//   // apply a subtle toon step to the outgoing direct diffuse
		//   // (keeps normal PBR, just nudges toward SV look)
		//   float steps = max(uToonSteps, 1.0);
		//   float toon = floor( (1.0 - diffuseLightColor.r) * steps ) / steps; // cheap approx
		//   float mixAmt = clamp(uToonStrength, 0.0, 1.0);
		//   diffuseLightColor = mix(diffuseLightColor, vec3(1.0 - toon), mixAmt);
		//   `
		// 	);

		// 4) Optional emissive (if *_emi exists)
		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <emissivemap_fragment>',
			`
      #include <emissivemap_fragment>
      if (uHasEmi) {
        vec3 e = texture2D(uEmi, ppgcUv).rgb;
        totalEmissiveRadiance += e * uSpecBoost;
      }
      `
		);

		shader.fragmentShader = shader.fragmentShader.replace(
			'gl_FragColor = vec4( outgoingLight, diffuseColor.a );',
			`
  vec3 col = outgoingLight;

  // Simple toon-ish quantization based on luminance (safe + generic)
  float steps = max(uToonSteps, 1.0);
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  float q = floor(lum * steps) / steps;

  float mixAmt = clamp(uToonStrength, 0.0, 1.0);
  float scale = (lum > 1e-5) ? (q / lum) : 1.0;

  col = mix(col, col * scale, mixAmt);

  gl_FragColor = vec4(col, diffuseColor.a);
  `
		);

		// store shader on material so we can tweak live later if needed
		mat.userData._ppgcShader = shader;
	};

	mat.needsUpdate = true;
	return mat;
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

		const msk = _isEyeStem(stem) ? await _loadFirstTexture(
			tl,
			SUFFIX.msk.map((s) => `${texDir}${stem}${s}`),
			{ srgb: false }
		) : null;

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

export async function openModelViewerModal({
	title = "Model Viewer",
	glbUrl,
	variant = "base",
}) {
	// --- DOM scaffold ---
	const root = document.createElement("div");
	root.className = "ppgc-modelviewer";

	root.innerHTML = `
		<div class="ppgc-modelviewer__header">
			<!-- Animation -->
			<div class="ppgc-modelviewer__group">
				<div class="ppgc-modelviewer__group-title">Animation</div>

				<div class="ppgc-modelviewer__row">
					<select class="ppgc-modelviewer__select" disabled></select>
					<button class="ppgc-modelviewer__pill is-play" data-act="playtoggle" disabled style="width:auto">Play</button>
					<button class="ppgc-modelviewer__pill is-off" data-act="pose" disabled style="width:auto">Pose</button>
					<label class="ppgc-modelviewer__speed">
						<span>Speed</span>
						<input class="ppgc-modelviewer__range" type="range" min="0.1" max="2.0" step="0.1" value="1.0" disabled />
					</label>
				</div>
			</div>

			<!-- View -->
			<div class="ppgc-modelviewer__group">
				<div class="ppgc-modelviewer__group-title">View</div>

				<div class="ppgc-modelviewer__tabs" role="tablist" aria-label="Viewer">
					<button class="ppgc-modelviewer__tab is-active" data-tab="assets" role="tab" aria-selected="true">Assets</button>
					<button class="ppgc-modelviewer__tab" data-tab="meshes" role="tab" aria-selected="false">Meshes</button>
					<button class="ppgc-modelviewer__tab" data-tab="camera" role="tab" aria-selected="false">Camera</button>
					<button class="ppgc-modelviewer__tab" data-tab="record" role="tab" aria-selected="false">Record</button>
				</div>

				<div class="ppgc-modelviewer__tabpanels">
					<div class="ppgc-modelviewer__panel is-active" data-panel="assets" role="tabpanel">
						<div class="ppgc-modelviewer__row">
							<button class="ppgc-modelviewer__pill is-off" data-act="wireframe" aria-pressed="false">Wireframe</button>
							<button class="ppgc-modelviewer__pill is-off" data-act="skeleton" aria-pressed="false">Skeleton</button>
							<button class="ppgc-modelviewer__pill is-on" data-act="grid" aria-pressed="true">Grid</button>
						</div>
					</div>

					<div class="ppgc-modelviewer__panel" data-panel="meshes" role="tabpanel">
						<div class="ppgc-modelviewer__meshctl">
							<div class="ppgc-modelviewer__meshcol" data-kind="mesh">
								<div class="ppgc-modelviewer__meshhead">
									<b>Meshes</b>
									<button class="ppgc-modelviewer__pill is-off" data-act="meshes-toggle-all" style="width:auto">All Off</button>
								</div>
								<div class="ppgc-modelviewer__checklist" data-mesh-list></div>
							</div>

							<div class="ppgc-modelviewer__meshcol" data-kind="mat">
								<div class="ppgc-modelviewer__meshhead">
									<b>Materials</b>
									<button class="ppgc-modelviewer__pill is-off" data-act="mats-toggle-all" style="width:auto">All Off</button>
								</div>
								<div class="ppgc-modelviewer__checklist" data-mat-list></div>
							</div>
						</div>
					</div>

					<div class="ppgc-modelviewer__panel" data-panel="camera" role="tabpanel">
						<div class="ppgc-modelviewer__row">
							<button class="ppgc-modelviewer__pill" data-act="reset">Camera Reset</button>
							<button class="ppgc-modelviewer__pill is-off" data-act="autorotate" aria-pressed="false">Auto Rotate</button>
						</div>
					</div>

					<div class="ppgc-modelviewer__panel" data-panel="record" role="tabpanel">
						<div class="ppgc-modelviewer__row">
							<button class="ppgc-modelviewer__pill" data-act="screenshot">Screenshot</button>
							<button class="ppgc-modelviewer__pill is-off" data-act="record" aria-pressed="false">Record</button>
							<button class="ppgc-modelviewer__pill" data-act="webm" disabled>Export WebM</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Canvas -->
		<div class="ppgc-modelviewer__body">
			<div class="ppgc-modelviewer__canvaswrap"></div>
			<div class="ppgc-modelviewer__status">Loading…</div>

			<div class="ppgc-modelviewer__help" aria-label="Controls help">
				<div class="ppgc-modelviewer__help-title">Controls</div>
				<div class="ppgc-modelviewer__help-row">
					<span class="ppgc-ico ppgc-ico-mouse"></span>
					<span><b>Left</b> drag: Rotate</span>
				</div>
				<div class="ppgc-modelviewer__help-row">
					<span class="ppgc-ico ppgc-ico-mouse"></span>
					<span><b>Right</b> drag: Pan</span>
				</div>
				<div class="ppgc-modelviewer__help-row">
					<span class="ppgc-ico ppgc-ico-wheel"></span>
					<span>Wheel: Zoom</span>
				</div>
				<div class="ppgc-modelviewer__help-row">
					<span class="ppgc-ico ppgc-ico-touch"></span>
					<span>Touch: 1 finger rotate</span>
				</div>
				<div class="ppgc-modelviewer__help-row">
					<span class="ppgc-ico ppgc-ico-touch"></span>
					<span>Touch: 2 fingers pan / pinch zoom</span>
				</div>
			</div>
		</div>
	`;

	const canvasWrap = root.querySelector(".ppgc-modelviewer__canvaswrap");
	const statusEl = root.querySelector(".ppgc-modelviewer__status");

	const selectEl = root.querySelector("select");
	const playToggleBtn = root.querySelector('[data-act="playtoggle"]');
	const poseBtn = root.querySelector('[data-act="pose"]');
	const speedEl = root.querySelector('input[type="range"]');

	const gridBtn = root.querySelector('[data-act="grid"]');
	const wireBtn = root.querySelector('[data-act="wireframe"]');
	const bonesBtn = root.querySelector('[data-act="skeleton"]');

	const meshListEl = root.querySelector("[data-mesh-list]");
	const matListEl = root.querySelector("[data-mat-list]");
	const meshesToggleAllBtn = root.querySelector('[data-act="meshes-toggle-all"]');
	const matsToggleAllBtn = root.querySelector('[data-act="mats-toggle-all"]');

	const resetBtn = root.querySelector('[data-act="reset"]');
	const autoBtn = root.querySelector('[data-act="autorotate"]');

	const screenshotBtn = root.querySelector('[data-act="screenshot"]');
	const recordBtn = root.querySelector('[data-act="record"]');
	const webmBtn = root.querySelector('[data-act="webm"]');


	// --- Tabs ---
	const tabBtns = Array.from(root.querySelectorAll(".ppgc-modelviewer__tab"));
	const panels = Array.from(root.querySelectorAll(".ppgc-modelviewer__panel"));

	function setActiveTab(key) {
		tabBtns.forEach((b) => {
			const on = b.dataset.tab === key;
			b.classList.toggle("is-active", on);
			b.setAttribute("aria-selected", on ? "true" : "false");
		});
		panels.forEach((p) => {
			const on = p.dataset.panel === key;
			p.classList.toggle("is-active", on);
		});
	}

	tabBtns.forEach((b) => b.addEventListener("click", () => setActiveTab(b.dataset.tab)));

	// --- Tabs: lock panel area height to tallest panel to prevent canvas resizing ---
	const tabPanelsWrap = root.querySelector(".ppgc-modelviewer__tabpanels");

	function measureAndLockTabPanelHeight() {
		if (!tabPanelsWrap || !panels.length) return;

		// Temporarily show all panels (but keep them invisible and out of flow)
		const prev = panels.map((p) => ({
			el: p,
			display: p.style.display,
			position: p.style.position,
			visibility: p.style.visibility,
			pointerEvents: p.style.pointerEvents,
		}));

		panels.forEach((p) => {
			p.style.display = "block";
			p.style.position = "absolute";
			p.style.visibility = "hidden";
			p.style.pointerEvents = "none";
		});

		// Force layout, then measure
		const maxH = Math.max(...panels.map((p) => p.scrollHeight || 0), 0);

		// Restore panel inline styles
		prev.forEach((s) => {
			s.el.style.display = s.display;
			s.el.style.position = s.position;
			s.el.style.visibility = s.visibility;
			s.el.style.pointerEvents = s.pointerEvents;
		});

		// Lock to tallest
		tabPanelsWrap.style.minHeight = `${maxH}px`;
	}

	// Run after first paint so fonts/styles settle
	requestAnimationFrame(() => measureAndLockTabPanelHeight());

	// Re-measure on resize (because wrapping can change heights)
	window.addEventListener("resize", measureAndLockTabPanelHeight);


	// --- Three.js setup ---
	const scene = new THREE.Scene();

	// Helpers
	const grid = new THREE.GridHelper(32, 32);
	grid.material.opacity = 0.35;
	grid.material.transparent = true;
	scene.add(grid);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
	renderer.debug.checkShaderErrors = true;
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.setClearColor(0x000000, 0); // transparent PNG background
	canvasWrap.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 1000);
	camera.position.set(0, 1.2, 3);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.autoRotate = false;
	controls.autoRotateSpeed = 1.25;

	// Lighting: brighter, viewer-like
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1.15;

	const amb = new THREE.AmbientLight(0xffffff, 0.55);
	scene.add(amb);

	const hemi = new THREE.HemisphereLight(0xffffff, 0x333333, 0.9);
	scene.add(hemi);

	const key = new THREE.DirectionalLight(0xffffff, 2.2);
	key.position.set(3, 6, 4);
	scene.add(key);

	const fill = new THREE.DirectionalLight(0xffffff, 0.6);
	fill.position.set(-3, 2, -2);
	scene.add(fill);

	const loader = new GLTFLoader();

	// Loop padding settings (tweak to taste)
	const MAX_FRAMES = 35;
	const DELAY_SEC = 1;

	let loopRestartTimer = 0;
	let finishedHandler = null;
	let userPaused = false;

	let mixer = null;
	let activeAction = null;
	let model = null;
	const clock = new THREE.Clock();
	let poseMode = false;
	let lastAnimIndex = 0;

	let autoRotate = false;
	let wireframeOn = false;
	let skeletonOn = false;

	const restTransforms = new Map();
	const originalMaterials = new Map(); // mesh.uuid -> material (or array)
	const skelHelpers = []; // list of helpers we add so we can remove them cleanly
	const rigUpdaters = []; // per-frame updaters for rig visualizers

	// --- Recording (WebM) ---
	let mediaRecorder = null;
	let recordChunks = [];
	let lastWebmBlob = null;

	function pickBestWebmMime() {
		const candidates = [
			"video/webm;codecs=vp9",
			"video/webm;codecs=vp8",
			"video/webm",
		];

		for (const c of candidates) {
			if (window.MediaRecorder && MediaRecorder.isTypeSupported?.(c)) return c;
		}
		return ""; // let browser decide
	}

	function downloadBlob(blob, filename) {
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		a.remove();
		setTimeout(() => URL.revokeObjectURL(url), 1500);
	}

	function setStatus(msg) {
		if (!statusEl) return;
		statusEl.textContent = msg || "";
		statusEl.style.display = msg ? "block" : "none";
	}

	function resize() {
		const w = canvasWrap.clientWidth || 1;
		const h = canvasWrap.clientHeight || 1;

		camera.aspect = w / h;
		camera.updateProjectionMatrix();

		// IMPORTANT: let Three update the canvas style size too
		renderer.setSize(w, h); // <-- remove the ", false"

		// (Optional but helps with some CSS/layout edge cases)
		renderer.domElement.style.width = "100%";
		renderer.domElement.style.height = "100%";
		renderer.domElement.style.display = "block";
	}
	const ro = new ResizeObserver(resize);
	ro.observe(canvasWrap);

	function frameModelToView(root) {
		// Reset wrapper transforms so repeated calls don’t accumulate
		root.position.set(0, 0, 0);
		root.rotation.set(0, 0, 0);
		root.scale.set(1, 1, 1);

		// Compute bounds
		const box = new THREE.Box3().setFromObject(root);
		const center = box.getCenter(new THREE.Vector3());

		// Move so X/Z centered at origin
		root.position.x -= center.x;
		root.position.z -= center.z;

		// Recompute to get accurate bottom
		box.setFromObject(root);

		// Lift model so its bottom touches y=0
		root.position.y -= box.min.y;

		// Recompute final bounds after lifting
		box.setFromObject(root);
		const size2 = box.getSize(new THREE.Vector3());

		const maxDim = Math.max(size2.x, size2.y, size2.z) || 1;

		// Set controls target to mid-upper body (not origin)
		const targetY = size2.y * 0.55;               // look a bit higher (centers model vertically)
		controls.target.set(0, targetY, 0);

		const camX = 0.60;  // right/left (more positive = more rotated to your right) (also zooms out farther to either side)
		const camY = 0.25;  // height (more positive = higher up) (raises camera and points to model)
		const camZ = 1.00;  // forward/back (zoom) (more positive = more zoomed out)

		// Camera: top-left diagonal looking at the target
		const dist = maxDim * 2.3;
		camera.position.set(dist * camX, targetY + maxDim * camY, dist * camZ);
		camera.lookAt(0, targetY, 0);

		// ---- PAN OFFSET (like right-click pan) ----
		const panLR = 0; // left/right (more positive = more to the right)
		const panUD = -0.25;   // up/down (more negative = more downward)
		const scroll = -0.50;   // zoom (more negative = more zoomed in)

		// Build camera-relative right/up vectors
		const dir = new THREE.Vector3();
		camera.getWorldDirection(dir);

		const right = new THREE.Vector3().crossVectors(dir, camera.up).normalize();
		const up = new THREE.Vector3().copy(camera.up).normalize();

		// Convert to world-space pan vector
		const pan = new THREE.Vector3()
			.addScaledVector(right, panLR * maxDim)
			.addScaledVector(up, panUD * maxDim);

		// Apply pan by moving BOTH camera and target
		camera.position.add(pan);
		controls.target.add(pan);

		// ---- APPLY SCROLL (ZOOM) ----
		// Move camera closer/farther from the target along the current view ray
		{
			const toCam = new THREE.Vector3().subVectors(camera.position, controls.target);
			const currentDist = toCam.length() || 0.0001;

			// scroll is in "model size" units so it scales nicely per Pokémon
			const desiredDist = currentDist + (scroll * maxDim);

			// clamp using the same min/max you set for OrbitControls
			const clampedDist = THREE.MathUtils.clamp(
				desiredDist,
				maxDim * 0.6,  // should match controls.minDistance below
				maxDim * 8.0   // should match controls.maxDistance below
			);

			toCam.setLength(clampedDist);
			camera.position.copy(controls.target).add(toCam);
		}

		// Clamp controls so you don't start off-screen or zoom through the model
		controls.minDistance = maxDim * 0.6;
		controls.maxDistance = maxDim * 8.0;
		controls.update();

		// Grid stays at floor
		grid.position.set(0, 0, 0);
	}

	function captureRestPose(root) {
		restTransforms.clear();
		root.traverse((o) => {
			restTransforms.set(o.uuid, {
				pos: o.position.clone(),
				quat: o.quaternion.clone(),
				scale: o.scale.clone(),
			});
		});
	}

	function restoreRestPose() {
		if (!model) return;

		model.traverse((o) => {
			const t = restTransforms.get(o.uuid);
			if (!t) return;

			o.position.copy(t.pos);
			o.quaternion.copy(t.quat);
			o.scale.copy(t.scale);

			// For skinned meshes, also snap bones to bind pose
			if (o.isSkinnedMesh && o.skeleton) o.skeleton.pose();
		});

		model.updateMatrixWorld(true);
	}

	function stopAllAnimations() {
		clearLoopPadding();
		userPaused = true;

		if (activeAction) {
			activeAction.stop();
			activeAction = null;
		}

		if (mixer) mixer.stopAllAction();

		// UI reflects "not playing"
		playToggleBtn.textContent = "Play";
		setPill(playToggleBtn, false);
	}

	function clearLoopPadding() {
		if (loopRestartTimer) {
			clearTimeout(loopRestartTimer);
			loopRestartTimer = 0;
		}
		if (mixer && finishedHandler) {
			mixer.removeEventListener("finished", finishedHandler);
			finishedHandler = null;
		}
	}

	function estimateFrameCount(clip) {
		const tracks = clip?.tracks || [];
		const dts = [];

		for (const t of tracks) {
			const times = t?.times;
			if (!times || times.length < 2) continue;

			for (let i = 1; i < times.length; i++) {
				const dt = times[i] - times[i - 1];
				if (dt > 1e-6 && isFinite(dt)) dts.push(dt);
			}
		}

		// If we can't infer any step, treat as "not small"
		if (!dts.length) return Infinity;

		// Median dt
		dts.sort((a, b) => a - b);
		const mid = (dts.length / 2) | 0;
		const medianDt = dts.length % 2 ? dts[mid] : (dts[mid - 1] + dts[mid]) / 2;

		const dur = Math.max(clip?.duration || 0, 0);
		if (dur <= 0 || !isFinite(medianDt) || medianDt <= 0) return Infinity;

		return Math.round(dur / medianDt) + 1;
	}

	function applyPaddedLoop(action, clip) {
		clearLoopPadding();

		const frames = estimateFrameCount(clip);
		const isSmall = frames < MAX_FRAMES;

		// If not small: default behavior = loop forever with no padding
		if (!isSmall) {
			action.clampWhenFinished = false;
			action.setLoop(THREE.LoopRepeat, Infinity);
			return;
		}

		// If small: play once, then restart after a fixed delay
		const padSec = DELAY_SEC;

		action.setLoop(THREE.LoopOnce, 1);
		action.clampWhenFinished = true;

		finishedHandler = (e) => {
			if (!activeAction || e.action !== activeAction) return;
			if (userPaused) return;

			loopRestartTimer = window.setTimeout(() => {
				if (!activeAction) return;
				if (userPaused) return;

				activeAction.paused = false;
				activeAction.reset();
				activeAction.play();
			}, padSec * 1000);
		};

		mixer.addEventListener("finished", finishedHandler);
	}

	function setAnimByIndex(i) {
		clearLoopPadding();
		if (!mixer || !selectEl.options.length) return;

		const idx = Math.max(0, Math.min(i, selectEl.options.length - 1));
		selectEl.value = String(idx);

		const anim = mixer._clips[idx];
		if (!anim) return;

		if (activeAction) activeAction.fadeOut(0.1);

		activeAction = mixer.clipAction(anim);
		activeAction.reset().fadeIn(0.1).play();
		activeAction.paused = false;
		userPaused = false;
		applyPaddedLoop(activeAction, anim);

		playToggleBtn.textContent = "Pause";
		setPill(playToggleBtn, true);
	}

	function enableControls(enable) {
		selectEl.disabled = !enable;
		playToggleBtn.disabled = !enable;
		speedEl.disabled = !enable;
		if (poseBtn) poseBtn.disabled = !enable;
	}

	function setPill(btn, on) {
		if (!btn) return;
		btn.classList.toggle("is-on", !!on);
		btn.classList.toggle("is-off", !on);
		btn.setAttribute("aria-pressed", on ? "true" : "false");
	}

	function downloadDataUrl(dataUrl, filename) {
		const a = document.createElement("a");
		a.href = dataUrl;
		a.download = filename || "screenshot.png";
		document.body.appendChild(a);
		a.click();
		a.remove();
	}

	function takeViewerScreenshot({ filename = "model.png" } = {}) {
		// Ensure a fresh render so the latest camera position is captured
		renderer.render(scene, camera);

		try {
			const dataUrl = renderer.domElement.toDataURL("image/png");
			downloadDataUrl(dataUrl, filename);
		} catch (err) {
			console.error("Screenshot failed (canvas may be tainted by CORS textures):", err);
			setStatus("Screenshot failed (CORS). See console.");
			setTimeout(() => setStatus(""), 2200);
		}
	}

	function warmUpAnimationFrames(frames = 2) {
		return new Promise((resolve) => {
			let n = 0;
			const step = () => {
				// Advance a tiny amount so mixer applies the "reset" pose cleanly
				const dt = 1 / 60;
				if (mixer) mixer.update(dt);
				controls.update();
				renderer.render(scene, camera);

				n++;
				if (n >= frames) resolve();
				else requestAnimationFrame(step);
			};
			requestAnimationFrame(step);
		});
	}

	function hardRestartAnimForRecording() {
		if (!mixer || !selectEl || poseMode) return false;

		const idx = Number(selectEl.value) || 0;
		const clip = mixer._clips?.[idx];
		if (!clip) return false;

		clearLoopPadding();

		// Kill any blending / previous actions completely
		mixer.stopAllAction();
		activeAction = mixer.clipAction(clip);

		// Start clean at t=0, no fade
		activeAction.enabled = true;
		activeAction.reset();
		activeAction.play();
		activeAction.paused = false;
		userPaused = false;

		// Re-apply your loop padding logic (keeps behavior consistent)
		applyPaddedLoop(activeAction, clip);

		playToggleBtn.textContent = "Pause";
		setPill(playToggleBtn, true);

		return true;
	}

	function withRecordingQuality(fn) {
		const prevPR = renderer.getPixelRatio();
		// Use devicePixelRatio (clamped) for crisp capture; 2 is usually plenty
		const recPR = Math.min(window.devicePixelRatio || 1, 2);

		renderer.setPixelRatio(recPR);
		// Keep the same canvas/layout size; just re-render at higher internal res
		resize();

		try {
			return fn();
		} finally {
			renderer.setPixelRatio(prevPR);
			resize();
		}
	}

	function getSelectedClip() {
		if (!mixer || !mixer._clips || !selectEl) return null;
		const idx = Number(selectEl.value) || 0;
		return mixer._clips[idx] || null;
	}

	function isAnimationActivelyPlaying() {
		// "playing" means: not in Pose and not paused and we have an action
		return !!activeAction && !poseMode && !userPaused && activeAction.paused !== true;
	}

	function computeRecordingSecondsForCurrentState() {
		// If paused or pose, fixed 5s
		if (poseMode || userPaused || !activeAction) return 5;

		const clip = getSelectedClip();
		const dur = Math.max(clip?.duration || 0, 0);

		// If duration unknown/zero, fallback
		if (!dur || !isFinite(dur)) return 5;

		// Record exactly one animation loop (clip duration).
		// (Your padded-loop delay is for replay; we don't include the delay in the capture)
		return Math.min(Math.max(dur, 0.5), 10);
	}

	async function startRecordingWebm({
		fps = 30,
		maxSeconds = 3,
		warmupFrames = 0,
		dropFirstMs = 0,
	} = {}) {
		if (!renderer?.domElement) return;

		if (!window.MediaRecorder || !renderer.domElement.captureStream) {
			setStatus("Recording not supported in this browser.");
			setTimeout(() => setStatus(""), 1800);
			return;
		}

		webmBtn.disabled = true;
		lastWebmBlob = null;

		// Force a fresh render before we begin
		renderer.render(scene, camera);

		recordChunks = [];
		lastWebmBlob = null;

		if (warmupFrames > 0) {
			await warmUpAnimationFrames(warmupFrames);
		}

		let stream;
		withRecordingQuality(() => {
			renderer.render(scene, camera);
			stream = renderer.domElement.captureStream(fps);
		});

		renderer.render(scene, camera);
		await new Promise(requestAnimationFrame);
		renderer.render(scene, camera);

		const mimeType = pickBestWebmMime();
		const rec = new MediaRecorder(
			stream,
			mimeType
				? { mimeType, videoBitsPerSecond: 12_000_000 } // ~12 Mbps
				: { videoBitsPerSecond: 12_000_000 }
		);

		mediaRecorder = rec;

		rec.ondataavailable = (e) => {
			if (e.data && e.data.size > 0) recordChunks.push(e.data);
		};

		rec.onerror = (e) => {
			console.error("MediaRecorder error:", e);
			setStatus("Recording error. See console.");
		};

		rec.onstop = () => {
			try {
				lastWebmBlob = new Blob(recordChunks, { type: rec.mimeType || "video/webm" });

				// Enable buttons instead of auto-download
				webmBtn.disabled = false;
				recordBtn.textContent = "Record";
				setPill(recordBtn, false);

				setStatus("Recorded.");
				setTimeout(() => setStatus(""), 1000);
			} catch (err) {
				console.error(err);
				setStatus("Failed to finalize WebM.");
			} finally {
				mediaRecorder = null;
			}
		};

		rec.start(100); // gather chunks every 100ms
		setStatus(`Recording ${maxSeconds}s…`);

		// UI
		setPill(recordBtn, true);
		recordBtn.textContent = "Stop";
		recordBtn.disabled = false;

		// Auto-stop
		setTimeout(() => {
			if (mediaRecorder && mediaRecorder.state === "recording") stopRecordingWebm();
		}, Math.max(0.25, maxSeconds) * 1000);
	}

	function stopRecordingWebm() {
		if (!mediaRecorder) return;

		try {
			mediaRecorder.stop();
		} catch (e) {
			console.warn("stopRecordingWebm:", e);
		}

		// UI
		setPill(recordBtn, false);
		recordBtn.textContent = "Record";
	}

	function setWireframe(enabled) {
		wireframeOn = enabled;
		if (!model) return;

		model.traverse((o) => {
			if (!o.isMesh) return;

			const mats = Array.isArray(o.material) ? o.material : [o.material];
			mats.forEach((m) => {
				if (!m) return;
				m.wireframe = enabled;
				m.needsUpdate = true;
			});
		});
	}

	// --- Rig visualizer (actual bones + joints) ---
	function disposeObject3D(obj) {
		if (!obj) return;
		obj.traverse((o) => {
			if (o.isMesh) {
				o.geometry?.dispose?.();
				if (Array.isArray(o.material)) o.material.forEach((m) => m?.dispose?.());
				else o.material?.dispose?.();
			}
		});
	}

	const meshState = new Map(); // uuid -> boolean
	const matState = new Map();  // material.name -> boolean
	const meshByUuid = new Map();
	const matsByName = new Map(); // name -> Set(material instances)
	const matSaved = new WeakMap(); // material -> original props

	function _matKey(m) {
		return (m?.name && String(m.name).trim()) ? String(m.name).trim() : "(unnamed)";
	}

	function setMaterialEnabledByName(name, enabled) {
		matState.set(name, !!enabled);

		const set = matsByName.get(name);
		if (!set) return;

		for (const m of set) {
			if (!m) continue;

			// save originals once
			if (!matSaved.has(m)) {
				matSaved.set(m, {
					transparent: !!m.transparent,
					opacity: (typeof m.opacity === "number") ? m.opacity : 1,
					depthWrite: (typeof m.depthWrite === "boolean") ? m.depthWrite : true,
					visible: (typeof m.visible === "boolean") ? m.visible : true,
				});
			}

			const orig = matSaved.get(m);

			// "off" = invisible without swapping materials
			if (!enabled) {
				if ("visible" in m) m.visible = false;
				m.transparent = true;
				m.opacity = 0.0;
				m.depthWrite = false;
			} else {
				if ("visible" in m) m.visible = orig.visible;
				m.transparent = orig.transparent;
				m.opacity = orig.opacity;
				m.depthWrite = orig.depthWrite;
			}

			m.needsUpdate = true;
		}
	}

	function setMeshEnabled(uuid, enabled) {
		meshState.set(uuid, !!enabled);
		const mesh = meshByUuid.get(uuid);
		if (!mesh) return;

		// mesh visibility is just the mesh toggle (materials can still be disabled independently)
		mesh.visible = !!enabled;
	}

	function rebuildMeshesTabUI() {
		if (!model || !meshListEl || !matListEl) return;

		// collect meshes + materials
		meshByUuid.clear();
		matsByName.clear();

		const meshes = [];
		model.traverse((o) => {
			if (!o?.isMesh) return;
			meshByUuid.set(o.uuid, o);
			meshes.push(o);

			const mats = Array.isArray(o.material) ? o.material : [o.material];
			for (const m of mats) {
				if (!m) continue;
				const k = _matKey(m);
				if (!matsByName.has(k)) matsByName.set(k, new Set());
				matsByName.get(k).add(m);
			}
		});

		// default states (first build only)
		for (const m of meshes) {
			if (!meshState.has(m.uuid)) meshState.set(m.uuid, true);
		}
		for (const k of matsByName.keys()) {
			if (!matState.has(k)) matState.set(k, true);
		}

		// render mesh checkboxes
		meshListEl.innerHTML = "";
		meshes
			.slice()
			.sort((a, b) => (a.name || a.uuid).localeCompare(b.name || b.uuid))
			.forEach((m, idx) => {
				const label = (m.name && m.name.trim())
					? prettyMeshName(m.name.trim())
					: `Mesh ${String(idx + 1).padStart(2, "0")}`;
				const checked = meshState.get(m.uuid) !== false;

				const row = document.createElement("label");
				row.className = "ppgc-modelviewer__checkrow";
				row.innerHTML = `
					<input type="checkbox" data-kind="mesh" data-uuid="${m.uuid}" ${checked ? "checked" : ""}/>
					<span>${label}</span>
				`;
				meshListEl.appendChild(row);

				// apply state immediately
				m.visible = checked;
			});

		// render material checkboxes
		matListEl.innerHTML = "";
		Array.from(matsByName.keys())
			.sort((a, b) => a.localeCompare(b))
			.forEach((k) => {
				const checked = matState.get(k) !== false;

				const row = document.createElement("label");
				row.className = "ppgc-modelviewer__checkrow";
				row.innerHTML = `
					<input type="checkbox" data-kind="mat" data-name="${k.replace(/"/g, "&quot;")}" ${checked ? "checked" : ""}/>
					<span>${prettyMatName(k)}</span>
				`;
				matListEl.appendChild(row);

				// apply state immediately
				setMaterialEnabledByName(k, checked);
			});

		// update combined toggle buttons
		const anyMeshesChecked = Array.from(meshState.values()).some((v) => v !== false);
		const anyMatsChecked = Array.from(matState.values()).some((v) => v !== false);

		updateToggleAllButton(meshesToggleAllBtn, anyMeshesChecked);
		updateToggleAllButton(matsToggleAllBtn, anyMatsChecked);
	}

	function _titleize(s) {
		return String(s || "")
			.replace(/[_\-]+/g, " ")
			.replace(/\s+/g, " ")
			.trim()
			.replace(/\b\w/g, (c) => c.toUpperCase());
	}

	function prettyMeshName(raw) {
		const r = String(raw || "").trim();
		const low = r.toLowerCase();

		// ..._body_mesh_shape or ..._body_mesh_shape_1
		let m = /_body_mesh_shape(?:_(\d+))?$/.exec(low);
		if (m) {
			const n = m[1] ? (Number(m[1]) + 1) : 1;
			return n === 1 ? "Body" : `Body ${n}`;
		}

		// ..._head_mesh_shape(_#)
		m = /_head_mesh_shape(?:_(\d+))?$/.exec(low);
		if (m) {
			const n = m[1] ? (Number(m[1]) + 1) : 1;
			return n === 1 ? "Head" : `Head ${n}`;
		}

		// ..._eye_mesh_shape(_#)
		m = /_eye_mesh_shape(?:_(\d+))?$/.exec(low);
		if (m) {
			const n = m[1] ? (Number(m[1]) + 1) : 1;
			return n === 1 ? "Eyes" : `Eye ${n}`;
		}

		// -----------------------------
		// generic cleanup
		// -----------------------------
		let s = r.replace(/^.*[\/\\]/, ""); // drop any path

		// remove pm####_00_00_ style prefix (pm + digits + _xx_yy_)
		s = s.replace(/^pm\d+[_\-]\d{1,2}[_\-]\d{1,2}[_\-]/i, "");

		// normalize separators to underscores
		s = s.replace(/[\s\-]+/g, "_");

		// capture trailing number (like ..._1 or ..._12)
		let trailingNum = "";
		const t = s.match(/(?:[_\-])(\d+)$/);
		if (t) {
			trailingNum = t[1];
			s = s.replace(/(?:[_\-])\d+$/, "");
		}

		// remove any "mesh" token(s)
		s = s
			.split("_")
			.filter(Boolean)
			.filter(tok => tok.toLowerCase() !== "mesh")
			.join(" ");

		// title-case
		s = _titleize(s);

		// append trailing number (as "Name 1")
		if (trailingNum) s = `${s} ${trailingNum}`;

		return s.trim() || "Mesh";
	}

	function prettyMatName(raw) {
		const k = String(raw || "").trim();
		const low = k.toLowerCase();

		const map = {
			body_a: "Body A",
			body_b: "Body B",
			l_eye: "Left Eye",
			r_eye: "Right Eye",
			eye: "Eye",
		};
		if (map[low]) return map[low];

		// body_c -> Body C, etc.
		let m = /^body_([a-z])$/.exec(low);
		if (m) return `Body ${m[1].toUpperCase()}`;

		return _titleize(k);
	}

	function updateToggleAllButton(btn, anyChecked) {
		if (!btn) return;
		// label shows the NEXT action
		btn.textContent = anyChecked ? "All Off" : "All On";
		btn.classList.toggle("is-off", anyChecked); // red when it will turn everything off
		btn.classList.toggle("is-on", !anyChecked); // green when it will turn everything on
		btn.setAttribute("aria-pressed", anyChecked ? "false" : "true");
	}

	function _ensureInstanceColors(mesh) {
		if (!mesh.instanceColor) {
			mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(mesh.count * 3), 3);
		}
		// Some three builds expect the attribute to exist on geometry too
		if (mesh.geometry && !mesh.geometry.getAttribute("instanceColor")) {
			mesh.geometry.setAttribute("instanceColor", mesh.instanceColor);
		}
		// Avoid default-black if setColorAt isn't called for some reason
		for (let i = 0; i < mesh.count; i++) mesh.instanceColor.setXYZ(i, 1, 1, 1);
		mesh.instanceColor.needsUpdate = true;
	}

	function _setInstanceColor(mesh, idx, color) {
		// Always ensure instanceColor exists + is attached to geometry.
		// (Do NOT rely on setColorAt() — it’s inconsistent across Three versions/builds.)
		_ensureInstanceColors(mesh);

		mesh.instanceColor.setXYZ(idx, color.r, color.g, color.b);
		mesh.instanceColor.needsUpdate = true;

		// In case the material compiled before instanceColor existed, force recompile once.
		if (!mesh.userData.__ppgcInstColorWired) {
			mesh.userData.__ppgcInstColorWired = true;
			mesh.material.vertexColors = true;
			mesh.material.needsUpdate = true;
		}
	}

	function makeRigVisualizerForSkinnedMesh(skinnedMesh, { jointRadius, boneRadius }) {
		const bones = skinnedMesh?.skeleton?.bones || [];
		if (!bones.length) return null;

		const boneSet = new Set(bones);

		// links: bone -> child bone
		const links = [];
		for (const b of bones) {
			for (const c of (b.children || [])) {
				if (c && boneSet.has(c)) links.push([b, c]);
			}
		}

		const group = new THREE.Group();
		group.name = "RigVisualizer";

		// Shared geometries
		const jointGeo = new THREE.SphereGeometry(jointRadius, 10, 10);
		const boneGeo = new THREE.CylinderGeometry(boneRadius, boneRadius, 1, 8, 1, true); // Y-up

		// Base materials (we'll clone per mesh so each can have its own color)
		const jointBaseMat = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0.95,
			depthTest: false,
			depthWrite: false,
		});
		const boneBaseMat = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0.75,
			depthTest: false,
			depthWrite: false,
		});

		// Create joint meshes (one per bone)
		const jointMeshes = bones.map(() => {
			const m = jointBaseMat.clone();
			m.color.set(0xffffff);
			const mesh = new THREE.Mesh(jointGeo, m);
			mesh.renderOrder = 999;
			mesh.frustumCulled = false;
			group.add(mesh);
			return mesh;
		});

		// Create bone meshes (one per link)
		const boneMeshes = links.map(() => {
			const m = boneBaseMat.clone();
			m.color.set(0xffffff);
			const mesh = new THREE.Mesh(boneGeo, m);
			mesh.renderOrder = 998;
			mesh.frustumCulled = false;
			group.add(mesh);
			return mesh;
		});

		// --- Gradient seed (reuse iris source you already use for eyes) ---
		const params = getEyeParamsForModel(window.__ppgcModelGlbUrlForRig || "");
		const baseCol = new THREE.Color(params.iris); // 0xRRGGBB
		const centerColor = new THREE.Color(1 - baseCol.r, 1 - baseCol.g, 1 - baseCol.b);

		// dark base -> fade to white, light base -> fade to black
		const baseLum = 0.2126 * baseCol.r + 0.7152 * baseCol.g + 0.0722 * baseCol.b;
		const fadeTarget = (baseLum < 0.5) ? new THREE.Color(1, 1, 1) : new THREE.Color(0, 0, 0);

		// Precompute weighted centroid + center bone (one-time; you said it doesn’t need to “follow”)
		skinnedMesh.updateMatrixWorld(true);

		const pos = new Map();
		for (const b of bones) {
			const v = new THREE.Vector3();
			b.getWorldPosition(v);
			pos.set(b, v);
		}

		let wsum = 0;
		const centroid = new THREE.Vector3();
		for (const b of bones) {
			const childBones = (b.children || []).filter((c) => boneSet.has(c));
			const w = 1 + childBones.length;
			wsum += w;
			centroid.addScaledVector(pos.get(b), w);
		}
		if (wsum > 0) centroid.multiplyScalar(1 / wsum);

		let centerBone = bones[0];
		let best = Infinity;
		for (const b of bones) {
			const d2 = pos.get(b).distanceToSquared(centroid);
			if (d2 < best) { best = d2; centerBone = b; }
		}
		const centerPos = pos.get(centerBone);

		let maxDist = 0;
		for (const b of bones) {
			const d = pos.get(b).distanceTo(centerPos);
			if (d > maxDist) maxDist = d;
		}
		maxDist = Math.max(maxDist, 1e-6);

		const CURVE = 0.35; // lower = stronger near-center change (0.35 - 0.85)
		const MIN_FADE = 0.3; // higher = starts going towards black/white quicker

		// Assign colors ONCE (guaranteed to work because it’s just material.color)
		for (let i = 0; i < bones.length; i++) {
			const d = pos.get(bones[i]).distanceTo(centerPos);
			let t = d / maxDist;
			t = Math.pow(t, CURVE);
			t = MIN_FADE + (1 - MIN_FADE) * t;
			jointMeshes[i].material.color.copy(centerColor).lerp(fadeTarget, t);
		}

		const tmpMid = new THREE.Vector3();
		for (let i = 0; i < links.length; i++) {
			const [p, c] = links[i];
			tmpMid.copy(pos.get(p)).add(pos.get(c)).multiplyScalar(0.5);
			const d = tmpMid.distanceTo(centerPos);
			let t = d / maxDist;
			t = Math.pow(t, CURVE);
			t = MIN_FADE + (1 - MIN_FADE) * t;
			boneMeshes[i].material.color.copy(centerColor).lerp(fadeTarget, t);
		}

		// --- Update positions every frame (colors stay fixed) ---
		const _up = new THREE.Vector3(0, 1, 0);
		const _a = new THREE.Vector3();
		const _b = new THREE.Vector3();
		const _dir = new THREE.Vector3();
		const _mid = new THREE.Vector3();

		const update = () => {
			// joints
			for (let i = 0; i < bones.length; i++) {
				bones[i].getWorldPosition(_a);
				jointMeshes[i].position.copy(_a);
			}

			// bones
			for (let i = 0; i < links.length; i++) {
				const [p, c] = links[i];
				p.getWorldPosition(_a);
				c.getWorldPosition(_b);

				_dir.subVectors(_b, _a);
				const len = _dir.length();

				_mid.addVectors(_a, _b).multiplyScalar(0.5);
				const mesh = boneMeshes[i];
				mesh.position.copy(_mid);

				if (len > 1e-6) {
					_dir.multiplyScalar(1 / len);
					mesh.quaternion.setFromUnitVectors(_up, _dir);
					mesh.scale.set(1, len, 1); // cylinder height = distance
				} else {
					mesh.quaternion.identity();
					mesh.scale.set(1, 1e-6, 1);
				}
			}
		};

		return { group, update };
	}

	function clearSkeletonHelpers() {
		// clear any per-frame updaters
		rigUpdaters.length = 0;
		for (const h of skelHelpers) {
			if (!h) continue;

			// helpers we attached to a bone
			if (h.__detach && h.bone && h.helper) {
				h.bone.remove(h.helper);
				continue;
			}

			// our rig groups
			if (h.__rig && h.obj) {
				scene.remove(h.obj);
				disposeObject3D(h.obj);
				continue;
			}

			// helpers added to the scene (SkeletonHelper, etc.)
			scene.remove(h);
		}
		skelHelpers.length = 0;
	}

	function setSkeleton(enabled) {
		skeletonOn = enabled;
		clearSkeletonHelpers();
		if (!enabled || !model) return;

		// Scale bones/joints based on model bounds (so Chikorita doesn't get Gyarados-sized joints)
		const box = new THREE.Box3().setFromObject(model);
		const size = box.getSize(new THREE.Vector3());
		const maxDim = Math.max(size.x, size.y, size.z) || 1;

		// Tune these 3 numbers to taste:
		// - multiplier: overall size
		// - min/max clamps: keep it from getting too tiny or too fat
		const jointRadius = THREE.MathUtils.clamp(maxDim * 0.010, 0.0022, 0.015);
		const boneRadius = THREE.MathUtils.clamp(jointRadius * 0.38, 0.0009, 0.007);

		// Build one rig visualizer per SkinnedMesh we find
		model.traverse((o) => {
			if (!o.isSkinnedMesh) return;

			const rig = makeRigVisualizerForSkinnedMesh(o, { jointRadius, boneRadius });
			if (!rig) return;

			scene.add(rig.group);
			skelHelpers.push({ __rig: true, obj: rig.group });
			rigUpdaters.push(rig.update);
		});
	}

	// const rig = makeRigVisualizerForSkinnedMesh(o, { jointRadius: 0.02, boneRadius: 0.008 });

	// Hook UI
	selectEl.addEventListener("change", () => {
		lastAnimIndex = Number(selectEl.value) || 0;
		if (poseMode) return; // don't start anims while posed
		setAnimByIndex(lastAnimIndex);
	});
	playToggleBtn.addEventListener("click", () => {
		// If Pose is on, Play should: turn Pose off + restart animation (and be "playing")
		if (poseMode) {
			poseMode = false;
			setPill(poseBtn, false);

			// restore model to rest pose first (prevents leftover frozen pose)
			restoreRestPose();

			// restart the currently selected animation
			lastAnimIndex = Number(selectEl.value) || 0;
			setAnimByIndex(lastAnimIndex);

			// keep Play in the "playing" state (button shows Pause)
			playToggleBtn.textContent = "Pause";
			setPill(playToggleBtn, true);
			return;
		}

		if (!activeAction) return;

		// Normal Play/Pause toggle
		userPaused = !userPaused;
		activeAction.paused = userPaused;

		if (userPaused) clearLoopPadding();
		else applyPaddedLoop(activeAction, mixer?._clips?.[Number(selectEl.value)]);

		playToggleBtn.textContent = userPaused ? "Play" : "Pause";
		setPill(playToggleBtn, !userPaused);
	});
	poseBtn?.addEventListener("click", () => {
		if (!model) return;

		poseMode = !poseMode;
		setPill(poseBtn, poseMode);

		if (poseMode) {
			// entering pose mode
			lastAnimIndex = Number(selectEl.value) || 0;

			stopAllAnimations();
			restoreRestPose();
		} else {
			setAnimByIndex(lastAnimIndex);
		}
	});
	speedEl.addEventListener("input", () => {
		if (mixer) mixer.timeScale = Number(speedEl.value);
	});

	gridBtn?.addEventListener("click", () => {
		grid.visible = !grid.visible;
		setPill(gridBtn, grid.visible);
	});
	wireBtn?.addEventListener("click", () => {
		wireframeOn = !wireframeOn;
		setWireframe(wireframeOn);
		setPill(wireBtn, wireframeOn);
	});
	bonesBtn?.addEventListener("click", () => {
		skeletonOn = !skeletonOn;
		setSkeleton(skeletonOn);
		setPill(bonesBtn, skeletonOn);
	});

	root.addEventListener("change", (e) => {
		const el = e.target;
		if (!(el instanceof HTMLInputElement)) return;
		if (el.type !== "checkbox") return;

		if (el.dataset.kind === "mesh" && el.dataset.uuid) {
			setMeshEnabled(el.dataset.uuid, el.checked);
			rebuildMeshesTabUI();
		}

		if (el.dataset.kind === "mat" && el.dataset.name) {
			// dataset decodes entities in most cases, but keep it simple:
			setMaterialEnabledByName(el.dataset.name, el.checked);
			rebuildMeshesTabUI();
		}
	});
	meshesToggleAllBtn?.addEventListener("click", () => {
		const anyChecked = Array.from(meshState.values()).some((v) => v !== false);
		const next = !anyChecked; // if any are on -> turn all OFF; else turn all ON

		for (const [uuid] of meshByUuid) setMeshEnabled(uuid, next);
		rebuildMeshesTabUI();
	});

	matsToggleAllBtn?.addEventListener("click", () => {
		const anyChecked = Array.from(matState.values()).some((v) => v !== false);
		const next = !anyChecked;

		for (const k of matsByName.keys()) setMaterialEnabledByName(k, next);
		rebuildMeshesTabUI();
	});

	screenshotBtn?.addEventListener("click", () => {
		// Uses transparent renderer clearColor; grid/wireframe/skeleton toggles affect what is captured.
		takeViewerScreenshot({ filename: `${title.replace(/[^a-z0-9\-_]+/gi, "_") || "model"}_${Date.now()}.png` });
	});
	recordBtn?.addEventListener("click", () => {
		// Toggle record: click once to start, click again to stop early
		if (mediaRecorder && mediaRecorder.state === "recording") {
			stopRecordingWebm();
			return;
		}

		// If actively playing an animation, restart it before recording
		if (isAnimationActivelyPlaying()) {
			hardRestartAnimForRecording();
		}

		const seconds = computeRecordingSecondsForCurrentState();

		startRecordingWebm({
			fps: 60,
			maxSeconds: seconds,
			warmupFrames: isAnimationActivelyPlaying() ? 4 : 0,
		});
	});
	webmBtn?.addEventListener("click", () => {
		if (!lastWebmBlob) return;
		const fname = `${title.replace(/[^a-z0-9\-_]+/gi, "_") || "model"}_${Date.now()}.webm`;
		downloadBlob(lastWebmBlob, fname);
	});

	resetBtn.addEventListener("click", () => {
		if (model) frameModelToView(model);
	});
	autoBtn?.addEventListener("click", () => {
		autoRotate = !autoRotate;
		controls.autoRotate = autoRotate;
		setPill(autoBtn, autoRotate);
	});

	// Animation loop
	let raf = 0;
	function tick() {
		raf = requestAnimationFrame(tick);
		const dt = clock.getDelta();
		if (mixer) mixer.update(dt);
		controls.update();

		// keep rig visualizers aligned to animated bones
		if (skeletonOn && rigUpdaters.length) {
			for (const fn of rigUpdaters) {
				try { fn(); } catch (e) { console.warn("rigUpdater:", e); }
			}
		}

		for (const m of eyeShaderMats) {
			if (!m?.uniforms) continue;

			m.uniforms.uAmb.value.copy(amb.color);
			m.uniforms.uAmbIntensity.value = amb.intensity;

			m.uniforms.uHemiSky.value.copy(hemi.color);
			m.uniforms.uHemiGround.value.copy(hemi.groundColor);
			m.uniforms.uHemiIntensity.value = hemi.intensity;
			m.uniforms.uHemiDir.value.set(0, 1, 0);

			m.uniforms.uDir0Color.value.copy(key.color);
			m.uniforms.uDir0Intensity.value = key.intensity;
			m.uniforms.uDir0Dir.value.copy(key.position).normalize();

			m.uniforms.uDir1Color.value.copy(fill.color);
			m.uniforms.uDir1Intensity.value = fill.intensity;
			m.uniforms.uDir1Dir.value.copy(fill.position).normalize();
		}

		renderer.render(scene, camera);
	}
	tick();

	// Load GLB
	setStatus("Loading model…");
	enableControls(false);

	async function _urlExists(url) {
		try {
			const res = await fetch(url, { method: "HEAD" });
			return res.ok;
		} catch {
			return false;
		}
	}

	function _ensureTrailingSlash(url) {
		return url.endsWith("/") ? url : (url + "/");
	}

	async function resolveModelGlbUrl(inputUrl) {
		// If already a direct .glb/.gltf, keep it
		if (/\.(glb|gltf)$/i.test(inputUrl)) return inputUrl;

		const dir = _ensureTrailingSlash(inputUrl);
		const parts = dir.split("/").filter(Boolean);
		const idStr = parts[parts.length - 1];
		const idNum = Number.parseInt(idStr, 10);
		const pad4 = Number.isFinite(idNum) ? String(idNum).padStart(4, "0") : null;

		const candidates = [
			dir + "model.glb",
			dir + `${idStr}.glb`,
			(pad4 ? dir + `pm${pad4}.glb` : null),
		].filter(Boolean);

		for (const u of candidates) {
			if (await _urlExists(u)) return u;
		}

		// Fall back to model.glb (you'll get a clean loader error)
		return dir + "model.glb";
	}

	function resolveTextureDirFromModelUrl(modelUrl, setCode = "000") {
		// modelUrl is .../130/<file>.glb  -> textures in .../130/<setCode>/
		const base = modelUrl.slice(0, modelUrl.lastIndexOf("/") + 1);
		return base + setCode + "/";
	}

	glbUrl = await resolveModelGlbUrl(glbUrl);
	window.__ppgcModelGlbUrlForRig = glbUrl;

	loader.load(glbUrl, async (gltf) => {
		const wrap = new THREE.Group();
		wrap.name = "ModelRoot";
		model = wrap;
		wrap.add(gltf.scene);
		scene.add(wrap);

		setStatus(`Loading textures (${variant})…`);
		console.log("[modelViewer] glbUrl:", glbUrl);
		console.log("[modelViewer] variant:", variant);

		Promise.resolve()
			.then(async () => {
				const setCode = "000"; // later: pick from mon-info / form id / etc.
				const texDir = resolveTextureDirFromModelUrl(glbUrl, setCode);
				const info = await applyPokemonTextureSetToScene(gltf.scene, { glbUrl, variant, texDir });
			})
			.catch((e) => {
				console.warn("[modelViewer] texture apply failed:", e);
			})
			.finally(() => setStatus(""));

		// Make sure textures show right
		model.traverse((o) => {
			if (o.isMesh) {
				o.frustumCulled = false; // avoids some “popping” on skinned meshes
				if (o.material) {
					o.material.side = THREE.FrontSide; // avoid “see inside” unless needed
				}
			}
		});

		frameModelToView(model);

		// Animations
		const clips = gltf.animations || [];
		mixer = new THREE.AnimationMixer(model);
		mixer._clips = clips;

		selectEl.innerHTML = "";
		const display = buildAnimDisplayNames(clips);

		clips.forEach((clip, idx) => {
			const opt = document.createElement("option");
			opt.value = String(idx);
			opt.textContent = display[idx].label;
			opt.title = display[idx].title; // raw name on hover
			selectEl.appendChild(opt);
		});
		if (clips.length) setAnimByIndex(0);
		enableControls(clips.length > 0);

		captureRestPose(model);
		setPill(poseBtn, false);
		poseMode = false;

		setWireframe(wireframeOn);
		setSkeleton(skeletonOn);
		grid.visible = true;
		setPill(gridBtn, true);

		rebuildMeshesTabUI();

		controls.autoRotate = autoRotate;
	},
		undefined,
		(err) => {
			console.error(err);
			setStatus(`Failed to load: ${glbUrl}`);
		}
	);

	// --- Mount into your modal system ---
	// Replace this with YOUR modal open call.
	// Example expects you have something like window.openModal({ contentEl, onClose })
	const modalEl = document.getElementById("modelViewerModal");
	const titleEl = document.getElementById("modelViewerTitle");
	const bodyEl = document.getElementById("modelViewerBody");
	const closeBtn = document.getElementById("modelViewerClose");

	if (!modalEl || !bodyEl) {
		console.warn("modelViewerModal missing in index.html");
		setStatus("Missing #modelViewerModal shell.");
		return { cleanup: () => { } };
	}

	if (titleEl) titleEl.textContent = title;

	// Clear previous viewer if any
	bodyEl.innerHTML = "";
	bodyEl.appendChild(root);

	const close = () => {
		modalEl.classList.remove("open");
		modalEl.setAttribute("aria-hidden", "true");
		// tell viewer to cleanup GPU resources
		cleanup();
	};

	// open
	modalEl.classList.add("open");
	modalEl.setAttribute("aria-hidden", "false");

	// wire close once
	if (modalEl.dataset.wired !== "1") {
		modalEl.dataset.wired = "1";

		modalEl.addEventListener("click", (e) => {
			if (e.target === modalEl) close();
		});

		closeBtn?.addEventListener("click", close);

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && modalEl.classList.contains("open")) close();
		});
	}

	return { cleanup };

	// Cleanup on close (IMPORTANT)
	function cleanup() {
		cancelAnimationFrame(raf);
		ro.disconnect();
		clearLoopPadding();
		controls.dispose();
		renderer.dispose();
		scene.traverse((o) => {
			if (o.isMesh) {
				o.geometry?.dispose?.();
				if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose?.());
				else o.material?.dispose?.();
			}
		});
		for (const h of skelHelpers) {
			if (h && h.__detach) {
				h.bone?.remove?.(h.helper);
			}
		}
		root.remove();
	}
}
window.PPGC = window.PPGC || {};
window.PPGC.openModelViewerModal = openModelViewerModal;