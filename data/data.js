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
      { key: "gold", label: "Gold", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "silver", label: "Silver", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "crystal", label: "Crystal", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen3: [
      { key: "ruby", label: "Ruby", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "sapphire", label: "Sapphire", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "emerald", label: "Emerald", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "firered", label: "FireRed", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "leafgreen", label: "LeafGreen", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen4: [
      { key: "diamond", label: "Diamond", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "pearl", label: "Pearl", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "platinum", label: "Platinum", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "heartgold", label: "HeartGold", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "soulsilver", label: "SoulSilver", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen5: [
      { key: "black", label: "Black", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "white", label: "White", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "black2", label: "Black 2", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "white2", label: "White 2", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen6: [
      { key: "x", label: "X", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "y", label: "Y", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "omegaruby", label: "Omega Ruby", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "alphasapphire", label: "Alpha Sapphire", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen7: [
      { key: "sun", label: "Sun", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "moon", label: "Moon", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "ultrasun", label: "Ultra Sun", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "ultramoon", label: "Ultra Moon", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen7_2: [
      { key: "lgp", label: "Let's Go, Pikachu!", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "lge", label: "Let's Go, Eevee!", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen8: [
      { key: "sword", label: "Sword", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "swordioa", label: "Sword - Isle of Armor DLC", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "swordct", label: "Sword - Crown Tundra DLC", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "shield", label: "Shield", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "shieldioa", label: "Shield - Isle of Armor DLC", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "shieldct", label: "Shield - Crown Tunrdra DLC", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen8_2: [
      { key: "brilliantdiamond", label: "Brilliant Diamond", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "shiningpearl", label: "Shining Pearl", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "legendsarceus", label: "Legends: Arceus", color: "#f1c232", flags: ["shiny alpha", "shiny", "alpha", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen9: [
      { key: "scarlet", label: "Scarlet", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "scarlettm", label: "Scarlet - Teal Mask DLC", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "scarletid", label: "Scarlet - Indigo Disk DLC", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "violet", label: "Violet", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "violettm", label: "Violet - Teal Mask DLC", color: "#f1c232", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "violetid", label: "Violet - Indigo Disk DLC", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
    gen10: [
      { key: "legendsza", label: "Legends: Z-A", color: "#cc0000", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
      { key: "legendszamd", label: "Legends: Z-A - Mega Dimensions DLC", color: "#3c78d8", flags: ["shiny", "caught", "seen", "unknown"], completionFlags: ["caught"] },
    ],
  },

  marks: {
    shiny: "imgs/icons/pokemon_home/shiny_icon.png", // e.g., a star icon
    alpha: "imgs/icons/pokemon_home/alpha_icon.png", // e.g., the red-eye alpha icon
  },
});
