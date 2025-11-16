/**
 * Deep-merge plain-object source into target.
 * - Nested plain objects are merged recursively.
 * - Arrays and primitives are overwritten.
 */
function deepMerge(target, src) {
  target = target && typeof target === "object" ? target : {};

  for (const k of Object.keys(src)) {
    const sv = src[k];
    const tv = target[k];

    if (sv && typeof sv === "object" && !Array.isArray(sv)) {
      target[k] = deepMerge(
        tv && typeof tv === "object" && !Array.isArray(tv) ? tv : {},
        sv
      );
    } else {
      target[k] = sv;
    }
  }

  return target;
}

/**
 * Global data registry:
 * - DATA: all game/task/dex/etc data, mutated by PPGC.register().
 * - PPGC: config + entry points shared across modules / globals.
 */
export const DATA = (window.DATA = window.DATA || {});
export const PPGC = (window.PPGC = window.PPGC || {});

// Ensure sectionMeters exists so modules can safely push custom meters.
PPGC.sectionMeters = PPGC.sectionMeters || [];

/**
 * Register a data chunk with the global DATA object.
 *
 * Typical usage from data files:
 *   PPGC.register({
 *     games: { ... },
 *     dex: { ... },
 *     sections: { ... },
 *   });
 */
PPGC.register = function register(chunk = {}) {
  if (!chunk || typeof chunk !== "object") return;
  deepMerge(DATA, chunk);
};
