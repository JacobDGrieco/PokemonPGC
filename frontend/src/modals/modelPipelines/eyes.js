import * as THREE from "three";
import { HOME_SPRITE_HEX } from "../../../imgs/sprites/sprite_hex.js";

export function getModelKeyFromGlbUrl(glbUrl) {
	const u = String(glbUrl || "");

	// 1) Old patterns: ".../130.glb" or ".../pm0130.glb"
	let m = /(?:^|\/)(?:pm)?(\d+)\.glb$/i.exec(u);
	if (m) return String(Number(m[1])); // "0130" -> "130"

	// 2) SV pattern: ".../<id>/model.glb"
	m = /\/(\d+)\/model\.glb$/i.exec(u);
	if (m) return String(Number(m[1]));

	// 3) (optional) If you ever use ".../<id>/<variant>/model.glb" later:
	m = /\/(\d+)\/\d{3}\/model\.glb$/i.exec(u);
	if (m) return String(Number(m[1]));

	return null;
}

export function getEyeParamsForModel(glbUrl) {
	const key = getModelKeyFromGlbUrl(glbUrl);

	let iris = 0x30b030; // fallback
	let pupil = 0x0a0a0a;
	let pupilRadius = 0.18;
	let pupilFeather = 0.04;
	let pupilCenter = { x: 0.5, y: 0.5 };

	if (key) {
		// Try exact key first (likely "130"), then padded ("130" stays "130", "5" -> "005")
		const keyPad3 = String(Number(key)).padStart(3, "0");

		const hex =
			HOME_SPRITE_HEX[key] ||
			HOME_SPRITE_HEX[keyPad3];

		if (hex) iris = parseInt(hex.slice(1), 16);
	}

	return { iris, pupil, pupilRadius, pupilFeather, pupilCenter };
}

export function getBodyTintForModel(glbUrl) {
	const key = getModelKeyFromGlbUrl(glbUrl);
	if (!key) return new THREE.Color(0xffffff);

	const hex = HOME_SPRITE_HEX[key];
	if (!hex) return new THREE.Color(0xffffff);

	const c = new THREE.Color(hex);
	c.convertSRGBToLinear();
	return c;
}