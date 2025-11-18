/**
 * Ensure the golden "extra credit" ring CSS is injected once.
 */
let _ringCssInjected = false;

function ensureRingCssInjected() {
	if (_ringCssInjected) return;
	_ringCssInjected = true;

	if (document.getElementById("ppgc-ring-gold-css")) return;

	const style = document.createElement("style");
	style.id = "ppgc-ring-gold-css";
	document.head.appendChild(style);
}

/**
 * Create a circular progress ring element.
 *
 * - progressPct: numeric value; 0–100 shows a normal ring.
 * - Values >100 enable a golden halo and a +XX% badge (capped at +100%).
 * - labelText: text shown under the ring.
 */
export function ring(progressPct, labelText) {
	const r = 52;
	const c = 2 * Math.PI * r;

	const num = Number(progressPct);
	const pctRaw = Math.max(0, Number.isFinite(num) ? num : 0); // may exceed 100
	const pctForArc = Math.min(100, pctRaw);
	const offset = c * (1 - pctForArc / 100);

	const hasExtra = pctRaw > 100;
	const extraPct = hasExtra ? Math.min(100, pctRaw - 100) : 0;

	ensureRingCssInjected();

	const el = document.createElement("div");
	el.className = "ring" + (hasExtra ? " has-extra" : "");

	el.innerHTML = `
    <div class="ring-box">
      <svg viewBox="0 0 120 120" aria-hidden="true" class="ring-svg">
        <circle
          cx="60" cy="60" r="${r}"
          stroke="#2b2b33"
          stroke-width="10"
          fill="none">
        </circle>
        <circle
          cx="60" cy="60" r="${r}"
          stroke="var(--accent)"
          stroke-width="10"
          fill="none"
          stroke-linecap="round"
          stroke-dasharray="${c}"
          stroke-dashoffset="${offset}">
        </circle>
      </svg>
      <div class="ring-center">
        <div class="pct">${pctRaw.toFixed(2)}%</div>
      </div>
      ${hasExtra
			? `<div class="extra-badge">+${extraPct.toFixed(0)}%</div>`
			: ``
		}
    </div>
    <div class="label">${labelText}</div>
  `;

	return el;
}
