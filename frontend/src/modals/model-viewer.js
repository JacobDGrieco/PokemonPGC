// src/ui/modals/modelViewerModal.js
// Requires: three (THREE), GLTFLoader, OrbitControls
// You can adapt imports depending on your build setup.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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


export function openModelViewerModal({
	title = "Model Viewer",
	glbUrl,
	onClose,
}) {
	// --- DOM scaffold ---
	const root = document.createElement("div");
	root.className = "ppgc-modelviewer";

	root.innerHTML = `
		<div class="ppgc-modelviewer__header">
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

			<div class="ppgc-modelviewer__group">
			<div class="ppgc-modelviewer__group-title">View</div>

				<div class="ppgc-modelviewer__row ppgc-modelviewer__row--view">
					<button class="ppgc-modelviewer__pill" data-act="reset">Camera Reset</button>
					<button class="ppgc-modelviewer__pill is-off" data-act="autorotate" aria-pressed="false">Auto Rotate</button>
					<button class="ppgc-modelviewer__pill is-on" data-act="grid" aria-pressed="true">Grid</button>
					<button class="ppgc-modelviewer__pill is-off" data-act="wireframe" aria-pressed="false">Wireframe</button>
					<button class="ppgc-modelviewer__pill is-off" data-act="skeleton" aria-pressed="false">Skeleton</button>
				</div>
			</div>
		</div>

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

	const resetBtn = root.querySelector('[data-act="reset"]');
	const autoBtn = root.querySelector('[data-act="autorotate"]');
	const gridBtn = root.querySelector('[data-act="grid"]');
	const wireBtn = root.querySelector('[data-act="wireframe"]');
	const bonesBtn = root.querySelector('[data-act="skeleton"]');



	// --- Three.js setup ---
	const scene = new THREE.Scene();

	// Helpers
	const grid = new THREE.GridHelper(10, 10);
	grid.material.opacity = 0.35;
	grid.material.transparent = true;
	scene.add(grid);

	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
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
		renderer.setSize(w, h, false);
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
		const size = box.getSize(new THREE.Vector3());
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

		const camX = 0.60;  // right/left (bigger = more right)
		const camY = 0.50;  // height offset (bigger = higher)
		const camZ = 1.05;  // forward/back (bigger = more “from the front”)

		// Camera: top-left diagonal looking at the target
		const dist = maxDim * 2.3;
		camera.position.set(dist * camX, targetY + maxDim * camY, dist * camZ);
		camera.lookAt(0, targetY, 0);

		// ---- PAN OFFSET (like right-click pan) ----
		// panLR moves view left/right, panUD moves view up/down
		const panLR = 0.32; // tweak this (bigger = more to the right)
		const panUD = -0.24;   // tweak this (more negative = more downward)

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

	function clearSkeletonHelpers() {
		for (const h of skelHelpers) {
			if (!h) continue;

			// helpers we attached to a bone
			if (h.__detach && h.bone && h.helper) {
				h.bone.remove(h.helper);
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

		model.traverse((o) => {
			// SkinnedMesh helper (shows bones influence/skeleton)
			if (o.isSkinnedMesh) {
				const sh = new THREE.SkeletonHelper(o);
				sh.visible = true;
				scene.add(sh);
				skelHelpers.push(sh);

				// Optional: show actual bone objects too (tiny axes)
				if (o.skeleton?.bones?.length) {
					const bh = new THREE.Group();
					bh.name = "BoneHelpers";
					o.skeleton.bones.forEach((b) => {
						const axes = new THREE.AxesHelper(0.03);
						b.add(axes);
						// store so we can remove later
						skelHelpers.push({ __detach: true, bone: b, helper: axes });
					});
				}
			}
		});
	}

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
	resetBtn.addEventListener("click", () => {
		if (model) frameModelToView(model);
	});
	autoBtn?.addEventListener("click", () => {
		autoRotate = !autoRotate;
		controls.autoRotate = autoRotate;
		setPill(autoBtn, autoRotate);
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

	// Animation loop
	let raf = 0;
	function tick() {
		raf = requestAnimationFrame(tick);
		const dt = clock.getDelta();
		if (mixer) mixer.update(dt);
		controls.update();
		renderer.render(scene, camera);
	}
	tick();

	// Load GLB
	setStatus("Loading model…");
	enableControls(false);

	loader.load(
		glbUrl,
		(gltf) => {
			const wrap = new THREE.Group();
			wrap.name = "ModelRoot";
			model = wrap;
			wrap.add(gltf.scene);
			scene.add(wrap);

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

			captureRestPose(model);
			setPill(poseBtn, false);
			poseMode = false;

			setWireframe(wireframeOn);
			setSkeleton(skeletonOn);
			grid.visible = true;
			setPill(gridBtn, true);
			controls.autoRotate = autoRotate;

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
			setStatus("");
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