function deepMerge(target, src) {
  for (const k of Object.keys(src)) {
    const sv = src[k],
      tv = target[k];
    if (sv && typeof sv === "object" && !Array.isArray(sv)) {
      target[k] = deepMerge(tv && typeof tv === "object" ? tv : {}, sv);
    } else {
      target[k] = sv;
    }
  }
  return target;
}
export const DATA = (window.DATA = window.DATA || {});
export const PPGC = (window.PPGC = window.PPGC || {});
PPGC.sectionMeters = PPGC.sectionMeters || [];
PPGC.register = function register(chunk = {}) {
  deepMerge(DATA, chunk);
};
