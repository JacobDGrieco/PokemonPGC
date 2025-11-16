/**
 * Generic "get items for a game" helper.
 * Works with data blocks shaped like:
 *   window.DATA[dataKey][gameKey]
 *   or that object having an `.items` array.
 */
export function getGameCollection(dataKey, gameKey) {
  const S = window.DATA || {};
  const block = S[dataKey] || {};
  const entry = block[gameKey];

  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  if (Array.isArray(entry.items)) return entry.items;
  return [];
}

/**
 * Shared section-meter registration for collections that are keyed
 * by a keyword in section id/title/tags (e.g. "curry", "sandwich").
 *
 * - keyword: lowercased string to look for ("curry", "sandwich", etc.)
 * - pctFn:   (gameKey, store) => percentage
 * - flagProp: unique flag property on the meter fn ("__ppgcCurryMeter")
 * - exposeName: optional window.PPGC[...] name to expose pctFn as
 */
export function registerKeywordSectionMeter({
  keyword,
  pctFn,
  flagProp,
  exposeName,
}) {
  if (typeof window === "undefined") return;

  window.PPGC = window.PPGC || {};

  // Ensure sectionMeters is an array
  if (!Array.isArray(window.PPGC.sectionMeters)) {
    window.PPGC.sectionMeters = window.PPGC.sectionMeters
      ? Array.from(window.PPGC.sectionMeters)
      : [];
  }

  // Avoid double-registering the same meter
  const already = window.PPGC.sectionMeters.some(
    (fn) => fn && fn[flagProp]
  );
  if (already) return;

  const meter = function keywordSectionMeter(sectionObj, gameKey, genKey) {
    void genKey; // keeps signature consistent, we don't need it here

    const id = String(sectionObj?.id || "").toLowerCase();
    const title = (sectionObj?.title || "").toLowerCase();
    const tags = Array.isArray(sectionObj?.tags) ? sectionObj.tags : [];

    const kw = String(keyword || "").toLowerCase();
    const isMatch =
      tags.some((t) => String(t || "").toLowerCase() === kw) ||
      id.includes(kw) ||
      title.includes(kw);

    if (!isMatch) return NaN;

    const store = window.PPGC?._storeRef;
    if (!store) return NaN;

    const pct = pctFn(gameKey, store);
    return Number.isFinite(pct) ? pct : NaN;
  };

  meter[flagProp] = true;
  window.PPGC.sectionMeters.push(meter);

  if (exposeName) {
    window.PPGC[exposeName] = function (gameKey, genKey) {
      void genKey;
      const store = window.PPGC?._storeRef;
      if (!store) return 0;
      const pct = pctFn(gameKey, store);
      return Number.isFinite(pct) ? pct : 0;
    };
  }
}
