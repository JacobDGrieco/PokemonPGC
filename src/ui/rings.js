export function ring(progressPct, labelText) {
  const r = 52,
    c = 2 * Math.PI * r;
  const pctRaw = Math.max(0, Number(progressPct || 0));
  const pctForArc = Math.min(100, pctRaw);
  const offset = c * (1 - pctForArc / 100);
  const hasExtra = pctRaw > 100;
  const extraPct = hasExtra ? Math.min(100, pctRaw - 100) : 0;

  const el = document.createElement("div");
  el.className = "ring" + (hasExtra ? " has-extra" : "");
  // --- one-time CSS injection for golden overlay ---
  if (!document.getElementById("ppgc-ring-gold-css")) {
    const style = document.createElement("style");
    style.id = "ppgc-ring-gold-css";
    style.textContent = `
      .ring { position: relative; }
      .ring .ring-box { position: relative; }
      /* shimmering golden halo when >100% */
      .ring.has-extra .ring-box::after {
        content: "";
        position: absolute;
        inset: -6px;
        border-radius: 999px;
        background: conic-gradient(from 0deg,
          #8a6b00, #d4af37, #fff4b0, #ffd700, #8a6b00);
        opacity: 0.35;
        filter: blur(4px);
        pointer-events: none;
        animation: ppgc-gold-shimmer 2.8s linear infinite;
      }
      .ring.has-extra .pct {
        color: #ffd700;
        text-shadow: 0 0 6px rgba(212,175,55,0.6);
        font-weight: 700;
      }
      /* small +XX% badge for extra credit */
      .ring .extra-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        font-size: 11px;
        line-height: 1;
        padding: 4px 6px;
        border-radius: 999px;
        background: linear-gradient(135deg, #7a5a00, #d4af37 55%, #fff4b0);
        color: #1f1f25;
        box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        transform: translate(0,0);
        pointer-events: none;
      }
      @keyframes ppgc-gold-shimmer {
        0%   { filter: blur(4px) brightness(1.0); opacity: 0.30; }
        50%  { filter: blur(5px) brightness(1.15); opacity: 0.45; }
        100% { filter: blur(4px) brightness(1.0); opacity: 0.30; }
      }
    `;
    document.head.appendChild(style);
  }
  el.innerHTML = `
    <div class="ring-box">
      <svg viewBox="0 0 120 120" aria-hidden="true" class="ring-svg">
        <circle cx="60" cy="60" r="${r}" stroke="#2b2b33" stroke-width="10" fill="none"></circle>
        <circle cx="60" cy="60" r="${r}" stroke="var(--accent)" stroke-width="10" fill="none"
                stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="ring-center"><div class="pct">${pctRaw.toFixed(2)}%</div></div>
      ${hasExtra ? `<div class="extra-badge">+${extraPct.toFixed(0)}%</div>` : ``}
    </div>
    <div class="label">${labelText}</div>`;
  return el;
}
