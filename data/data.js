// data.js — gens with per-game/DLC subtabs and per-game dex flags
PPGC.register({
  // Top-level gen tabs (all are checklists)
  tabs: [
    { key: "gen1", label: "Gen 1" },
    { key: "gen2", label: "Gen 2" },
    { key: "gen3", label: "Gen 3" },
    { key: "gen4", label: "Gen 4" },
    { key: "gen5", label: "Gen 5" },
    { key: "gen6", label: "Gen 6" },
    { key: "gen7", label: "Gen 7" },
    { key: "gen8", label: "Gen 8" },
    { key: "gen9", label: "Gen 9" },
    { key: "gen10", label: "Gen 10" },
    { key: "home", label: "HOME" },
  ],

  marks: {
    shiny: "imgs/icons/pokemon_home/shiny_icon.png", // e.g., a star icon
    alpha: "imgs/icons/pokemon_home/alpha_icon.png", // e.g., the red-eye alpha icon
  },
});
