// src/ui/modals/modelViewerModal.js
// Requires: three (THREE), GLTFLoader, OrbitControls
// You can adapt imports depending on your build setup.

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function prettyAnimName(raw) {
	// Local rename (non-destructive). Expand later if you want.
	const r = raw || "";
	if (/idle/i.test(r)) return "Idle";
	if (/walk/i.test(r)) return "Walk";
	if (/run/i.test(r)) return "Run";
	if (/sleep/i.test(r)) return "Sleep";
	if (/attack|move/i.test(r)) return "Attack";
	return r || "Animation";
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
			<div class="ppgc-modelviewer__title"></div>
			<div class="ppgc-modelviewer__controls">
				<label class="ppgc-modelviewer__label">
					<span>Anim</span>
					<select class="ppgc-modelviewer__select" disabled></select>
				</label>

				<button class="ppgc-modelviewer__btn" data-act="play" disabled>Play</button>
				<button class="ppgc-modelviewer__btn" data-act="pause" disabled>Pause</button>

				<label class="ppgc-modelviewer__label">
					<span>Speed</span>
					<input class="ppgc-modelviewer__range" type="range" min="0.1" max="2.0" step="0.1" value="1.0" disabled />
				</label>

				<button class="ppgc-modelviewer__btn" data-act="reset">Reset Cam</button>

				<label class="ppgc-modelviewer__label">
				<input class="ppgc-modelviewer__check" type="checkbox" data-act="autorotate" />
				<span>Auto</span>
				</label>

				<label class="ppgc-modelviewer__label">
				<input class="ppgc-modelviewer__check" type="checkbox" data-act="grid" checked />
				<span>Grid</span>
				</label>

				<label class="ppgc-modelviewer__label">
				<input class="ppgc-modelviewer__check" type="checkbox" data-act="wireframe" />
				<span>Wire</span>
				</label>

				<label class="ppgc-modelviewer__label">
				<input class="ppgc-modelviewer__check" type="checkbox" data-act="skeleton" />
				<span>Bones</span>
				</label>

			</div>
		</div>

		<div class="ppgc-modelviewer__body">
			<div class="ppgc-modelviewer__canvaswrap"></div>
			<div class="ppgc-modelviewer__status">Loading…</div>
		</div>
	`;

	root.querySelector(".ppgc-modelviewer__title").textContent = title;

	const canvasWrap = root.querySelector(".ppgc-modelviewer__canvaswrap");
	const statusEl = root.querySelector(".ppgc-modelviewer__status");
	const selectEl = root.querySelector("select");
	const playBtn = root.querySelector('[data-act="play"]');
	const pauseBtn = root.querySelector('[data-act="pause"]');
	const speedEl = root.querySelector('input[type="range"]');
	const resetBtn = root.querySelector('[data-act="reset"]');
	const autoRotateEl = root.querySelector('[data-act="autorotate"]');
	const gridEl = root.querySelector('[data-act="grid"]');
	const wireEl = root.querySelector('[data-act="wireframe"]');
	const bonesEl = root.querySelector('[data-act="skeleton"]');

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

	let mixer = null;
	let activeAction = null;
	let model = null;
	const clock = new THREE.Clock();

	let autoRotate = false;
	let wireframeOn = false;
	let skeletonOn = false;

	const originalMaterials = new Map(); // mesh.uuid -> material (or array)
	const skelHelpers = []; // list of helpers we add so we can remove them cleanly

	function setStatus(msg) {
		statusEl.textContent = msg;
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

	function frameModelToView(obj) {
		const box = new THREE.Box3().setFromObject(obj);
		const size = box.getSize(new THREE.Vector3());
		const center = box.getCenter(new THREE.Vector3());

		// Center model
		obj.position.x += (obj.position.x - center.x);
		obj.position.y += (obj.position.y - center.y);
		obj.position.z += (obj.position.z - center.z);

		const maxDim = Math.max(size.x, size.y, size.z) || 1;
		const dist = maxDim * 1.8;

		camera.position.set(0, maxDim * 0.8, dist);
		controls.target.set(0, maxDim * 0.4, 0);
		controls.update();
	}

	function setAnimByIndex(i) {
		if (!mixer || !selectEl.options.length) return;

		const idx = Math.max(0, Math.min(i, selectEl.options.length - 1));
		selectEl.value = String(idx);

		const anim = mixer._clips[idx];
		if (!anim) return;

		if (activeAction) activeAction.fadeOut(0.1);

		activeAction = mixer.clipAction(anim);
		activeAction.reset().fadeIn(0.1).play();
	}

	function enableControls(enable) {
		selectEl.disabled = !enable;
		playBtn.disabled = !enable;
		pauseBtn.disabled = !enable;
		speedEl.disabled = !enable;
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
		for (const h of skelHelpers) scene.remove(h);
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
	selectEl.addEventListener("change", () => setAnimByIndex(Number(selectEl.value)));
	playBtn.addEventListener("click", () => {
		if (activeAction) {
			activeAction.paused = false;
			activeAction.play();
		}
	});
	pauseBtn.addEventListener("click", () => {
		if (activeAction) activeAction.paused = true;
	});
	speedEl.addEventListener("input", () => {
		if (mixer) mixer.timeScale = Number(speedEl.value);
	});
	resetBtn.addEventListener("click", () => {
		if (model) frameModelToView(model);
	});
	autoRotateEl?.addEventListener("change", () => {
		autoRotate = !!autoRotateEl.checked;
		controls.autoRotate = autoRotate;
	});

	gridEl?.addEventListener("change", () => {
		grid.visible = !!gridEl.checked;
	});
	wireEl?.addEventListener("change", () => {
		setWireframe(!!wireEl.checked);
	});
	bonesEl?.addEventListener("change", () => {
		setSkeleton(!!bonesEl.checked);
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
			model = gltf.scene;
			scene.add(model);

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

			setWireframe(wireframeOn);
			setSkeleton(skeletonOn);
			grid.visible = gridEl ? !!gridEl.checked : true;
			controls.autoRotate = autoRotate;

			// Animations
			const clips = gltf.animations || [];
			mixer = new THREE.AnimationMixer(model);
			mixer._clips = clips;

			selectEl.innerHTML = "";
			clips.forEach((clip, idx) => {
				const opt = document.createElement("option");
				opt.value = String(idx);
				opt.textContent = prettyAnimName(clip.name);
				opt.title = clip.name; // raw name on hover
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