// data/data.js
// Tabs for Generations 1–10 — each is a CHECKLIST tab.
// Each tab's list can include a special item { kind: 'dex-summary' } which computes completion using DATA.dex[tabKey].
const DATA = {
  tabs: [
    { key: 'gen1', label: 'Gen 1', type: 'list' },
    { key: 'gen2', label: 'Gen 2', type: 'list' },
    { key: 'gen3', label: 'Gen 3', type: 'list' },
    { key: 'gen4', label: 'Gen 4', type: 'list' },
    { key: 'gen5', label: 'Gen 5', type: 'list' },
    { key: 'gen6', label: 'Gen 6', type: 'list' },
    { key: 'gen7', label: 'Gen 7', type: 'list' },
    { key: 'gen8', label: 'Gen 8', type: 'list' },
    { key: 'gen9', label: 'Gen 9', type: 'list' },
    { key: 'gen10', label: 'Gen 10', type: 'list' },
  ],

  // Per-tab checklist items (seeded example rows). Add/remove freely.
  gen1: [
    { id: 'g1-setup', text: 'Finish main story' },
    { id: 'g1-dex', kind: 'dex-summary', label: 'Gen 1 Pokédex' },
    { id: 'g1-elite', text: 'Beat the Elite Four rematch' },
  ],
  gen2: [
    { id: 'g2-dex', kind: 'dex-summary', label: 'Gen 2 Pokédex' },
  ],
  gen3: [{ id: 'g3-dex', kind: 'dex-summary', label: 'Gen 3 Pokédex' }],
  gen4: [{ id: 'g4-dex', kind: 'dex-summary', label: 'Gen 4 Pokédex' }],
  gen5: [{ id: 'g5-dex', kind: 'dex-summary', label: 'Gen 5 Pokédex' }],
  gen6: [{ id: 'g6-dex', kind: 'dex-summary', label: 'Gen 6 Pokédex' }],
  gen7: [{ id: 'g7-dex', kind: 'dex-summary', label: 'Gen 7 Pokédex' }],
  gen8: [{ id: 'g8-dex', kind: 'dex-summary', label: 'Gen 8 Pokédex' }],
  gen9: [{ id: 'g9-dex', kind: 'dex-summary', label: 'Gen 9 Pokédex' }],
  gen10: [{ id: 'g10-dex', kind: 'dex-summary', label: 'Gen 10 Pokédex' }],

  // Dex entries per generation. Fill these with your own data.
  dex: {
    gen1: [
      { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
      { id: 4, name: "Charmander", img: "imgs/pokemon_home/normal/normal/004.png" },
      { id: 7, name: "Squirtle", img: "imgs/pokemon_home/normal/normal/007.png" },
    ],
    gen2: [], gen3: [], gen4: [], gen5: [], gen6: [], gen7: [], gen8: [], gen9: [], gen10: []
  }
};
