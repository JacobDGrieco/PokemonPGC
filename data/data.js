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
    { key: "gen7_2", label: "Gen 7 - Part 2" },
    { key: "gen8", label: "Gen 8" },
    { key: "gen8_2", label: "Gen 8 - Part 2" },
    { key: "gen9", label: "Gen 9" },
    { key: "gen10", label: "Gen 10" },
    { key: "home", label: "HOME" },
  ],

  games: {
    gen1: [
      { key: "red", label: "Red", color: "#cc0000", flags: ["caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "blue", label: "Blue", color: "#3c78d8", flags: ["caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "yellow", label: "Yellow", color: "#f1c232", flags: ["caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen2: [
      { key: "gold", label: "Gold", color: "#ff9900", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "silver", label: "Silver", color: "#cccccc", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "crystal", label: "Crystal", color: "#cfe2f3", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen3: [
      { key: "ruby", label: "Ruby", color: "#ff0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "sapphire", label: "Sapphire", color: "#1155cc", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "emerald", label: "Emerald", color: "#93c47d", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "firered", label: "FireRed", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "leafgreen", label: "LeafGreen", color: "#38761d", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen4: [
      { key: "diamond", label: "Diamond", color: "#00ffff", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "pearl", label: "Pearl", color: "#a2c4c9", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "platinum", label: "Platinum", color: "#999999", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "heartgold", label: "HeartGold", color: "#ff9900", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "soulsilver", label: "SoulSilver", color: "#cccccc", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen5: [
      { key: "black", label: "Black", color: "#434343", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "white", label: "White", color: "#efefef", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "black2", label: "Black 2", color: "#434343", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "white2", label: "White 2", color: "#efefef", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen6: [
      { key: "x", label: "X", color: "#3d85c6", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "y", label: "Y", color: "#cc3232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "omega-ruby", label: "Omega Ruby", color: "#ff0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "alpha-sapphire", label: "Alpha Sapphire", color: "#1155cc", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen7: [
      { key: "sun", label: "Sun", color: "#f5ad58", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "moon", label: "Moon", color: "#674ea7", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "ultra-sun", label: "Ultra Sun", color: "#f5ad58", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "ultra-moon", label: "Ultra Moon", color: "#674ea7", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen7_2: [
      { key: "lets-go-pikachu", label: "Let's Go, Pikachu!", color: "#ffff00", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "lets-go-eevee", label: "Let's Go, Eevee!", color: "#b45f06", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen8: [
      { key: "sword", label: "Sword", color: "#0b5394", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "sword-ioa", label: "Sword - Isle of Armor DLC", color: "#c5980f", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "sword-ct", label: "Sword - Crown Tundra DLC", color: "#0c343d", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "shield", label: "Shield", color: "#ee4444", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "shield-ioa", label: "Shield - Isle of Armor DLC", color: "#c5980f", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "shield-ct", label: "Shield - Crown Tunrdra DLC", color: "#0c343d", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen8_2: [
      { key: "brilliant-diamond", label: "Brilliant Diamond", color: "#00ffff", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "shining-pearl", label: "Shining Pearl", color: "#a2c4c9", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "legends-arceus", label: "Legends: Arceus", color: "#999999", flags: ["shiny alpha", "shiny", "alpha", "caught", "seen", "unknown"], completionFlags: ["shiny alpha", "shiny", "alpha", "caught"] },
    ],
    gen9: [
      { key: "scarlet", label: "Scarlet", color: "#ff2400", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "scarlet-tm", label: "Scarlet - Teal Mask DLC", color: "#008080", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "scarlet-id", label: "Scarlet - Indigo Disk DLC", color: "#4b0082", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "violet", label: "Violet", color: "#8f00ff", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "violet-tm", label: "Violet - Teal Mask DLC", color: "#008080", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
      { key: "violet-id", label: "Violet - Indigo Disk DLC", color: "#4b0082", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["shiny", "caught"] },
    ],
    gen10: [
      { key: "legends-za", label: "Legends: Z-A", color: "#64f29b", flags: ["shiny alpha", "shiny", "alpha", "caught", "seen", "unknown"], completionFlags: ["shiny alpha", "shiny", "alpha", "caught"] },
      { key: "legends-za-md", label: "Legends: Z-A - Mega Dimensions DLC", color: "#64f29b", flags: ["shiny alpha", "shiny", "alpha", "caught", "seen", "unknown"], completionFlags: ["shiny alpha", "shiny", "alpha", "caught"] },
    ],
  },

  marks: {
    shiny: "imgs/icons/pokemon_home/shiny_icon.png", // e.g., a star icon
    alpha: "imgs/icons/pokemon_home/alpha_icon.png", // e.g., the red-eye alpha icon
  },
});
