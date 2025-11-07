export function ring(progressPct, labelText) {
  const r = 52,
    c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, progressPct || 0));
  const offset = c * (1 - pct / 100);

  const el = document.createElement("div");
  el.className = "ring";
  el.innerHTML = `
    <div class="ring-box">
      <svg viewBox="0 0 120 120" aria-hidden="true" class="ring-svg">
        <circle cx="60" cy="60" r="${r}" stroke="#2b2b33" stroke-width="10" fill="none"></circle>
        <circle cx="60" cy="60" r="${r}" stroke="var(--accent)" stroke-width="10" fill="none"
                stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="ring-center"><div class="pct">${pct.toFixed(2)}%</div></div>
    </div>
    <div class="label">${labelText}</div>`;
  return el;
}
