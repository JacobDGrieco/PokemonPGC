PPGC.register({
  sections: {
    legendsza: [
      { id: "legendsza-catching", title: "Gotta Catch 'Em All" },
      { id: "legendsza-story", title: "Main Story" },
      { id: "legendsza-side-quests", title: "Side Quests" },
      { id: "legendsza-mabels-research", title: "Mabel's Research" },
      { id: "legendsza-activities", title: "Activities" },
      { id: "legendsza-upgrades", title: "Upgrades" },
      { id: "legendsza-collectables", title: "Collectables" },
      { id: "legendsza-mega-stones", title: "Mega Stones" },
      { id: "legendsza-fashion", title: "Fashion" },
      { id: "legendsza-thms", title: "TMs/HMs" },
      { id: "legendsza-extra-credit", title: "Extra Credit" },
    ],
  },

  tasks: {
    "legendsza-catching": [
      {
        id: "legendsza-catching-1",
        text: "Catch all the Legendaries",
        done: false,
        children: [
          {
            id: "legendsza-catching-1-a",
            text: "Catch Xerneas",
            done: false,
            img: "imgs/pokemon_home/normal/normal/716.png",
            syncs: ["legendsza-story-2-b"],
          },
          {
            id: "legendsza-catching-1-b",
            text: "Catch Yveltal",
            done: false,
            img: "imgs/pokemon_home/normal/normal/717.png",
          },
          {
            id: "legendsza-catching-1-c",
            text: "Catch Zygarde",
            done: false,
            img: "imgs/pokemon_home/normal/normal/718.png",
          },
        ],
      },
      {
        id: "legendsza-catching-2",
        text: "Obtain the Lucario in your room after finishing Main Mission 38",
        done: false,
      },
      {
        id: "legendsza-catching-3",
        text: "Obtain all In-Game Gift Pokemon",
        done: false,
        children: [],
      },
      {
        id: "legendsza-catching-4",
        text: "Complete all In-Game Trades",
        done: false,
        children: [],
      },
    ],
    "legendsza-story": [
      {
        id: "legendsza-story-1",
        text: "Complete the first 38 Main Missions",
        done: false,
      },
      {
        id: "legendsza-story-2",
        text: "Epilogue",
        done: false,
        children: [
          {
            id: "legendsza-story-2-a",
            text: "Main Mission 39 - The Infinite Z-A Royale",
            done: false,
          },
          {
            id: "legendsza-story-2-b",
            text: "Main Mission 40 - The One That Gives",
            done: false,
            syncs: ["legendsza-catching-1-a"],
          },
          {
            id: "legendsza-story-2-c",
            text: "Main Mission 41 - The One That Takes",
            done: false,
          },
          {
            id: "legendsza-story-2-d",
            text: "Main Mission 42 - To Keep the World in Balance",
            done: false,
          },
        ],
      },
    ],
    "legendsza-side-quests": [
      {
        id: "legendsza-side-quests-1",
        text: "01 - A Big Ol' Bunnelby",
        done: false,
      },
      {
        id: "legendsza-side-quests-2",
        text: "02 - A Use for an Evolution Stone",
        done: false,
      },
      {
        id: "legendsza-side-quests-3",
        text: "03 - Sableye in the Cemetery",
        done: false,
      },
      {
        id: "legendsza-side-quests-4",
        text: "04 - A Break Time Battle",
        done: false,
      },
      {
        id: "legendsza-side-quests-5",
        text: "05 - I'd Like to See an Ekans",
        done: false,
      },
      {
        id: "legendsza-side-quests-6",
        text: "06 - Long-Range Moves Have Style",
        done: false,
      },
      {
        id: "legendsza-side-quests-7",
        text: "07 - A Feisty Chespin",
        done: false,
      },
      {
        id: "legendsza-side-quests-8",
        text: "08 - Get Well, Fennekin",
        done: false,
      },
      {
        id: "legendsza-side-quests-9",
        text: "09 - A Challenge from Froakie",
        done: false,
      },
      {
        id: "legendsza-side-quests-10",
        text: "10 - Skiddo's Fragrant Leaves",
        done: false,
      },
      {
        id: "legendsza-side-quests-11",
        text: "11 - The Kakuna Master",
        done: false,
      },
      {
        id: "legendsza-side-quests-12",
        text: "12 - The Many Flowers of Flabébé",
        done: false,
      },
      {
        id: "legendsza-side-quests-13",
        text: "13 - Stumped at the Fountain",
        done: false,
      },
      {
        id: "legendsza-side-quests-14",
        text: "14 - Slurpuff's Café Visit",
        done: false,
      },
      {
        id: "legendsza-side-quests-15",
        text: "15 - A Sensitive Audino",
        done: false,
      },
      {
        id: "legendsza-side-quests-16",
        text: "16 - The Budew Show",
        done: false,
      },
      {
        id: "legendsza-side-quests-17",
        text: "17 - A Shiny Mareep",
        done: false,
      },
      {
        id: "legendsza-side-quests-18",
        text: "18 - A Pan-tastic Pot of Tea",
        done: false,
      },
      {
        id: "legendsza-side-quests-19",
        text: "19 - Poisonous, Paralyzing Strategies",
        done: false,
      },
      {
        id: "legendsza-side-quests-20",
        text: "20 - A Berry Clever Plan",
        done: false,
      },
      {
        id: "legendsza-side-quests-21",
        text: "21 - Spewpa in the Museum",
        done: false,
      },
      {
        id: "legendsza-side-quests-22",
        text: "22 - A Call from Mable",
        done: false,
      },
      {
        id: "legendsza-side-quests-23",
        text: "23 - Underneath the Holovator",
        done: false,
      },
      {
        id: "legendsza-side-quests-24",
        text: "24 - An Abra Playmate",
        done: false,
      },
      {
        id: "legendsza-side-quests-25",
        text: "25 - Trubblesome Patrons",
        done: false,
      },
      {
        id: "legendsza-side-quests-26",
        text: "26 - Burn, Litleo, Burn",
        done: false,
      },
      {
        id: "legendsza-side-quests-27",
        text: "27 - Restored from a Fossil",
        done: false,
      },
      {
        id: "legendsza-side-quests-28",
        text: "28 - Who Says Normal Is Weak",
        done: false,
      },
      {
        id: "legendsza-side-quests-29",
        text: "29 - Full Course of Battles: One Star",
        done: false,
      },
      {
        id: "legendsza-side-quests-30",
        text: "30 - Show Me a Mega Camerupt",
        done: false,
      },
      {
        id: "legendsza-side-quests-31",
        text: "31 - Show Me a Mega Sableye",
        done: false,
      },
      {
        id: "legendsza-side-quests-32",
        text: "32 - Show Me a Mega Medicham",
        done: false,
      },
      {
        id: "legendsza-side-quests-33",
        text: "33 - Who Has the Bigger Magikarp",
        done: false,
      },
      {
        id: "legendsza-side-quests-34",
        text: "34 - Moves That Put Up a Wall",
        done: false,
      },
      {
        id: "legendsza-side-quests-35",
        text: "35 - Guidance from a Yoga Master",
        done: false,
      },
      {
        id: "legendsza-side-quests-36",
        text: "36 - Some Friendly Competition",
        done: false,
      },
      {
        id: "legendsza-side-quests-37",
        text: "37 - Binacle by the Boatload",
        done: false,
      },
      {
        id: "legendsza-side-quests-38",
        text: "38 - Chasing Status",
        done: false,
      },
      {
        id: "legendsza-side-quests-39",
        text: "39 - Slowpoke for Slowpoke",
        done: false,
      },
      {
        id: "legendsza-side-quests-40",
        text: "40 - A Holovator Without Power",
        done: false,
      },
      {
        id: "legendsza-side-quests-41",
        text: "41 - Watch Out for Traps",
        done: false,
      },
      {
        id: "legendsza-side-quests-42",
        text: "42 - A Fan of Fairy Types",
        done: false,
      },
      {
        id: "legendsza-side-quests-43",
        text: "43 - A Big Weedle Problem",
        done: false,
      },
      {
        id: "legendsza-side-quests-44",
        text: "44 - Vanillite's Fragrant Snow",
        done: false,
      },
      {
        id: "legendsza-side-quests-45",
        text: "45 - On Maintenance Duty",
        done: false,
      },
      {
        id: "legendsza-side-quests-46",
        text: "46 - Pidgeot Soaring High",
        done: false,
      },
      {
        id: "legendsza-side-quests-47",
        text: "47 - Becoming a Furfrou Trimmer",
        done: false,
      },
      { id: "legendsza-side-quests-48", text: "48 - All Tied Up", done: false },
      {
        id: "legendsza-side-quests-49",
        text: "49 - Hit and Heal",
        done: false,
      },
      {
        id: "legendsza-side-quests-50",
        text: "50 - Just a Few Questions for You...",
        done: false,
      },
      {
        id: "legendsza-side-quests-51",
        text: "51 - Floette Frolicking with Flowers",
        done: false,
      },
      {
        id: "legendsza-side-quests-52",
        text: "52 - Numel Frozen Solid",
        done: false,
      },
      {
        id: "legendsza-side-quests-53",
        text: "53 - The Most Electrifying Eelektrik",
        done: false,
      },
      {
        id: "legendsza-side-quests-54",
        text: "54 - Get ENERGIZED",
        done: false,
      },
      {
        id: "legendsza-side-quests-55",
        text: "55 - Carvanha, Menace of the Deep",
        done: false,
      },
      {
        id: "legendsza-side-quests-56",
        text: "56 - We'll Just Muscle Our Way Through",
        done: false,
      },
      {
        id: "legendsza-side-quests-57",
        text: "57 - The Camerupt Entrepreneur",
        done: false,
      },
      {
        id: "legendsza-side-quests-58",
        text: "58 - Better to Detect Than to Protect",
        done: false,
      },
      {
        id: "legendsza-side-quests-59",
        text: "59 - A Rematch with Hawlucha",
        done: false,
      },
      {
        id: "legendsza-side-quests-60",
        text: "60 - Full Course of Battles: Two Stars",
        done: false,
      },
      {
        id: "legendsza-side-quests-61",
        text: "61 - My Favorite Holovator",
        done: false,
      },
      {
        id: "legendsza-side-quests-62",
        text: "62 - Becoming a Pro Furfrou Trimmer",
        done: false,
      },
      {
        id: "legendsza-side-quests-63",
        text: "63 - An Extra-Large Gogoat",
        done: false,
      },
      {
        id: "legendsza-side-quests-64",
        text: "64 - Let It Rain, Let It Pour",
        done: false,
      },
      {
        id: "legendsza-side-quests-65",
        text: "65 - Apartment Block Eeriness",
        done: false,
      },
      {
        id: "legendsza-side-quests-66",
        text: "66 - Investigating with Shuppet",
        done: false,
      },
      {
        id: "legendsza-side-quests-67",
        text: "67 - Sylveon the Soother",
        done: false,
      },
      {
        id: "legendsza-side-quests-68",
        text: "68 - The Best Use for Leftovers",
        done: false,
      },
      {
        id: "legendsza-side-quests-69",
        text: "69 - A Sky Battle, for Old Times' Sake",
        done: false,
      },
      {
        id: "legendsza-side-quests-70",
        text: "70 - Who's the Strongest, Huh?",
        done: false,
      },
      {
        id: "legendsza-side-quests-71",
        text: "71 - The Burning Gaze of Watchog",
        done: false,
      },
      {
        id: "legendsza-side-quests-72",
        text: "72 - Find My Galarian Stunfisk",
        done: false,
      },
      {
        id: "legendsza-side-quests-73",
        text: "73 - Full Course of Battles: High Rolling",
        done: false,
      },
      {
        id: "legendsza-side-quests-74",
        text: "74 - Delibird Gets in a Flap",
        done: false,
      },
      {
        id: "legendsza-side-quests-75",
        text: "75 - Some Unusual Pokémon",
        done: false,
      },
      {
        id: "legendsza-side-quests-76",
        text: "76 - Let's Learn About Mega Evolution",
        done: false,
      },
      {
        id: "legendsza-side-quests-77",
        text: "77 - Catch Mawile If You Can",
        done: false,
      },
      {
        id: "legendsza-side-quests-78",
        text: "78 - Inkay's Fragrant Ink",
        done: false,
      },
      {
        id: "legendsza-side-quests-79",
        text: "79 - A Fateful Swing of a Metronome",
        done: false,
      },
      {
        id: "legendsza-side-quests-80",
        text: "80 - A Shocking Territorial Dispute",
        done: false,
      },
      {
        id: "legendsza-side-quests-81",
        text: "81 - Pancham the Courier",
        done: false,
      },
      {
        id: "legendsza-side-quests-82",
        text: "82 - Clauncher Launching Water Gun",
        done: false,
      },
      {
        id: "legendsza-side-quests-83",
        text: "83 - Honedge's Cutting Edge",
        done: false,
      },
      {
        id: "legendsza-side-quests-84",
        text: "84 - Strike First to Make 'Em Flinch",
        done: false,
      },
      {
        id: "legendsza-side-quests-85",
        text: "85 - Follow Litwick",
        done: false,
      },
      {
        id: "legendsza-side-quests-86",
        text: "86 - Who Messed Up the Garden",
        done: false,
      },
      {
        id: "legendsza-side-quests-87",
        text: "87 - Becoming a Peerless Furfrou Trimmer",
        done: false,
      },
      {
        id: "legendsza-side-quests-88",
        text: "88 - The Nervous Novice Cabbie",
        done: false,
      },
      {
        id: "legendsza-side-quests-89",
        text: "89 - Up, Up, and Away After Emolga",
        done: false,
      },
      {
        id: "legendsza-side-quests-90",
        text: "90 - Froslass's Unfinished Business",
        done: false,
      },
      {
        id: "legendsza-side-quests-91",
        text: "91 - Dragon You into Battle",
        done: false,
      },
      {
        id: "legendsza-side-quests-92",
        text: "92 - The Beldum Blockade",
        done: false,
      },
      {
        id: "legendsza-side-quests-93",
        text: "93 - Finding a Place for Heliolisk",
        done: false,
      },
      {
        id: "legendsza-side-quests-94",
        text: "94 - Full Course of Battles: Three Stars",
        done: false,
      },
      {
        id: "legendsza-side-quests-95",
        text: "95 - A Haunting Experience",
        done: false,
      },
      {
        id: "legendsza-side-quests-96",
        text: "96 - Let Us Battle...Artistically",
        done: false,
      },
      {
        id: "legendsza-side-quests-97",
        text: "97 - Stop the Runaway Whirlipede",
        done: false,
      },
      {
        id: "legendsza-side-quests-98",
        text: "98 - Jumbo Variety Pumpkaboo",
        done: false,
      },
      {
        id: "legendsza-side-quests-99",
        text: "99 - Pleasing Aron's Palate",
        done: false,
      },
      {
        id: "legendsza-side-quests-100",
        text: "100 - Starmie on High",
        done: false,
      },
      {
        id: "legendsza-side-quests-101",
        text: "101 - Steadfast as Steel",
        done: false,
      },
      {
        id: "legendsza-side-quests-102",
        text: "102 - A Chilling Challenge",
        done: false,
      },
      {
        id: "legendsza-side-quests-103",
        text: "103 - Facing the Furfrou League",
        done: false,
      },
      {
        id: "legendsza-side-quests-104",
        text: "104 - Abuzz About Bug Types",
        done: false,
      },
      {
        id: "legendsza-side-quests-105",
        text: "105 - Trevenant, the Haunted Elder Tree",
        done: false,
      },
      {
        id: "legendsza-side-quests-106",
        text: "106 - Klefki's Lost Key",
        done: false,
      },
      {
        id: "legendsza-side-quests-107",
        text: "107 - The World's Greatest Pikachu",
        done: false,
      },
      {
        id: "legendsza-side-quests-108",
        text: "108 - Alola, Raichu",
        done: false,
      },
      {
        id: "legendsza-side-quests-109",
        text: "109 - Wondrous Self-Healing Pokémon",
        done: false,
      },
      {
        id: "legendsza-side-quests-110",
        text: "110 - A Tune That Beckons Doom",
        done: false,
      },
      {
        id: "legendsza-side-quests-111",
        text: "111 - My Adorable, Adorable Babies",
        done: false,
      },
      {
        id: "legendsza-side-quests-112",
        text: "112 - Exploring the Scents of Spritzee",
        done: false,
      },
      {
        id: "legendsza-side-quests-113",
        text: "113 - Bergmite sur un Avalugg",
        done: false,
      },
      {
        id: "legendsza-side-quests-114",
        text: "114 - A Feather from Skarmory",
        done: false,
      },
      {
        id: "legendsza-side-quests-115",
        text: "115 - Tyrantrum's Furious Jaws",
        done: false,
      },
      {
        id: "legendsza-side-quests-116",
        text: "116 - Show the Power of Aurorus",
        done: false,
      },
      {
        id: "legendsza-side-quests-117",
        text: "117 - Josée's Training",
        done: false,
      },
      {
        id: "legendsza-side-quests-118",
        text: "118 - Goodbye, Gengar",
        done: false,
      },
      {
        id: "legendsza-side-quests-119",
        text: "119 - Le Super-Tournoi de Jacinthe O",
        done: false,
      },
    ],
    "legendsza-mabels-research": [
      {
        id: "legendsza-mabels-research-1",
        text: "Filling Your Pokedex",
        type: "tiered",
        tiers: [
          5, 10, 15, 20, 25, 30, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
          100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
          170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230,
        ],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch unique Pokemon for your Pokedex.\nTier thresholds are every 5 new Pokemon caught.",
      },
      {
        id: "legendsza-mabels-research-2",
        text: "Filling Your Mega Evolution Dex",
        type: "tiered",
        tiers: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 62],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Collect Mega Stones.\nTier thresholds are every 5 new stones, except for the last tier which requires 7.",
      },
      {
        id: "legendsza-mabels-research-3",
        text: "Catching Normal Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Normal-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-4",
        text: "Catching Fire Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Fire-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-5",
        text: "Catching Water Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Water-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-6",
        text: "Catching Electric Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Electric-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-7",
        text: "Catching Grass Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Grass-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-8",
        text: "Catching Ice Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Ice-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-9",
        text: "Catching Fighting Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Fighting-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-10",
        text: "Catching Poison Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Poison-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-11",
        text: "Catching Ground Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Ground-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-12",
        text: "Catching Flying Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Flying-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-13",
        text: "Catching Psychic Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Psychic-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-14",
        text: "Catching Bug Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Bug-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-15",
        text: "Catching Rock Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Rock-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-16",
        text: "Catching Ghost Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Ghost-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-17",
        text: "Catching Dragon Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Dragon-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-18",
        text: "Catching Dark Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Dark-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-19",
        text: "Catching Steel Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Steel-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-20",
        text: "Catching Fairy Types",
        type: "tiered",
        tiers: [3, 8, 15, 25, 50],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Catch Fairy-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
      },
      {
        id: "legendsza-mabels-research-21",
        text: "Evolving Pokemon",
        type: "tiered",
        tiers: [3, 6, 10, 15, 20, 25, 30, 35, 40, 45],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Evolve any Pokemon by any means.\nTier thresholds are 3, 6, 10, and every 5 from there.",
      },
      {
        id: "legendsza-mabels-research-22",
        text: "Evolving via Items",
        type: "tiered",
        tiers: [1, 5, 10],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Evolve Pokemon that require an item to evolve.\nTier thresholds are 1, 5, and 10.",
      },
      {
        id: "legendsza-mabels-research-23",
        text: "Evolving via Link Trade",
        type: "tiered",
        tiers: [1, 3, 5],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Evolve Pokemon that require a Link Trade to evolve.\nTier thresholds are 1, 3, 5.",
      },
      {
        id: "legendsza-mabels-research-24",
        text: "Winning Pokemon Battles",
        type: "tiered",
        tiers: [20, 50, 100, 150, 200, 250, 300, 350, 500, 1000],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Win battles against NPC trainers.\nTier thresholds are annoying, just get to 1000 at Resturant Le Nah.",
      },
      {
        id: "legendsza-mabels-research-25",
        text: "Smashing Mega Crystals",
        type: "tiered",
        tiers: [20, 50, 100, 150, 200, 250, 300, 350, 500, 1000],
        currentTier: 0,
        currentCount: 0,
        unit: "caught",
        tooltip:
          "Use Pokemon to destroy mega crystals around the city.\nTier thresholds are annoying, just smash 1000.",
      },
      {
        id: "legendsza-mabels-research-26",
        text: "Surveying Wild Zone 1",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 1.",
      },
      {
        id: "legendsza-mabels-research-27",
        text: "Surveying Wild Zone 2",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 2.",
      },
      {
        id: "legendsza-mabels-research-28",
        text: "Surveying Wild Zone 3",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 3.",
      },
      {
        id: "legendsza-mabels-research-29",
        text: "Surveying Wild Zone 4",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 4.",
      },
      {
        id: "legendsza-mabels-research-30",
        text: "Surveying Wild Zone 5",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 5.",
      },
      {
        id: "legendsza-mabels-research-31",
        text: "Surveying Wild Zone 6",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 6.",
      },
      {
        id: "legendsza-mabels-research-32",
        text: "Surveying Wild Zone 7",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 7.",
      },
      {
        id: "legendsza-mabels-research-33",
        text: "Surveying Wild Zone 8",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 8.",
      },
      {
        id: "legendsza-mabels-research-34",
        text: "Surveying Wild Zone 9",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 9.",
      },
      {
        id: "legendsza-mabels-research-35",
        text: "Surveying Wild Zone 10",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 10.",
      },
      {
        id: "legendsza-mabels-research-36",
        text: "Surveying Wild Zone 11",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 11.",
      },
      {
        id: "legendsza-mabels-research-37",
        text: "Surveying Wild Zone 12",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 12.",
      },
      {
        id: "legendsza-mabels-research-38",
        text: "Surveying Wild Zone 13",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 13.",
      },
      {
        id: "legendsza-mabels-research-39",
        text: "Surveying Wild Zone 14",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 14.",
      },
      {
        id: "legendsza-mabels-research-40",
        text: "Surveying Wild Zone 15",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 15.",
      },
      {
        id: "legendsza-mabels-research-41",
        text: "Surveying Wild Zone 16",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 16.",
      },
      {
        id: "legendsza-mabels-research-42",
        text: "Surveying Wild Zone 17",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 17.",
      },
      {
        id: "legendsza-mabels-research-43",
        text: "Surveying Wild Zone 18",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 18.",
      },
      {
        id: "legendsza-mabels-research-44",
        text: "Surveying Wild Zone 19",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 19.",
      },
      {
        id: "legendsza-mabels-research-45",
        text: "Surveying Wild Zone 20",
        done: false,
        tooltip:
          "Catch one of every non-Alpha Pokemon available in Wild Zone 20.",
      },
      {
        id: "legendsza-mabels-research-46",
        text: "Restoring Fossils",
        done: false,
        tooltip: "Restore any 3 fossils (Jaw, Sail, or Amber).",
      },
      {
        id: "legendsza-mabels-research-47",
        text: "Relaxing at Cafés",
        done: false,
        tooltip: "Sit and relax at any Café 3 times.",
      },
      {
        id: "legendsza-mabels-research-48",
        text: "Chilling on Benches",
        done: false,
        tooltip: "Sit and relax at any bench 3 times.",
      },
      {
        id: "legendsza-mabels-research-49",
        text: "Investivating Anomalous Alphas",
        done: false,
        tooltip:
          "Catch/Defeat the anomalous alpha Pokemon in Wild Zones 3, 5, and 9.\n(MUST BE IN POST-GAME)",
      },
    ],
    "legendsza-activities": [
      {
        id: "legendsza-activities-1",
        text: "Register your birthday at a PokeCenter",
        done: false,
        tooltip: "Go to a PokeCenter and put in your birth month and day",
      },
    ],
    "legendsza-upgrades": [
      {
        id: "legendsza-upgrades-1",
        text: "Buy all the Canari Plushies",
        done: false,
        tooltip:
          "Can buy out front the Racine Construction building after defeating Canari",
        children: [
          {
            id: "legendsza-upgrades-1-a",
            text: "Red Canari Plush",
            type: "tiered",
            tiers: [3, 5, 8],
            currentTier: 0,
            currentCount: 0,
            unit: "caught",
            tooltip:
              "Increase EXP Points gained.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
          },
          {
            id: "legendsza-upgrades-1-b",
            text: "Gold Canari Plush",
            type: "tiered",
            tiers: [3, 5, 8],
            currentTier: 0,
            currentCount: 0,
            unit: "caught",
            tooltip:
              "Increase prize money gained.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
          },
          {
            id: "legendsza-upgrades-1-c",
            text: "Pink Canari Plush",
            type: "tiered",
            tiers: [3, 5, 8],
            currentTier: 0,
            currentCount: 0,
            unit: "caught",
            tooltip:
              "Increase amount of Mega Shards dropped.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
          },
          {
            id: "legendsza-upgrades-1-d",
            text: "Green Canari Plush",
            type: "tiered",
            tiers: [3, 5, 8],
            currentTier: 0,
            currentCount: 0,
            unit: "caught",
            tooltip:
              "Increase trainer health.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
          },
          {
            id: "legendsza-upgrades-1-e",
            text: "Blue Canari Plush",
            type: "tiered",
            tiers: [3, 5, 8],
            currentTier: 0,
            currentCount: 0,
            unit: "caught",
            tooltip:
              "Increase Pokemon catch rate.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
          },
        ],
      },
    ],
    "legendsza-collectables": [],
    "legendsza-mega-stones": [],
    "legendsza-fashion": [],
    "legendsza-thms": [
      {
        id: "legendsza-thms-1",
        text: "Collect all HMs",
        done: false,
        children: [
          { id: "legendsza-thms-1-a", text: "HM01: Cut", done: false },
          { id: "legendsza-thms-1-b", text: "HM02: Fly", done: false },
          { id: "legendsza-thms-1-c", text: "HM03: Surf", done: false },
          { id: "legendsza-thms-1-d", text: "HM04: Strength", done: false },
          { id: "legendsza-thms-1-e", text: "HM05: Flash", done: false },
        ],
      },
      {
        id: "legendsza-thms-2",
        text: "Collect all TMs",
        done: false,
        children: [],
      },
    ],
  },

  layout: {
    taskRows: {
      "legendsza-catching": [
        ["legendsza-catching-1"],
        [
          "legendsza-catching-1-a",
          "legendsza-catching-1-b",
          "legendsza-catching-1-c",
        ],
        ["legendsza-catching-2"],
        ["legendsza-catching-3"],
        [],
        ["legendsza-catching-4"],
        [],
      ],
      "legendsza-story": [
        ["legendsza-story-1"],
        ["legendsza-story-2"],
        ["legendsza-story-2-a", "legendsza-story-2-c"],
        ["legendsza-story-2-b", "legendsza-story-2-d"],
      ],
      "legendsza-side-quests": [
        [
          "legendsza-side-quests-1",
          "legendsza-side-quests-41",
          "legendsza-side-quests-81",
        ],
        [
          "legendsza-side-quests-2",
          "legendsza-side-quests-42",
          "legendsza-side-quests-82",
        ],
        [
          "legendsza-side-quests-3",
          "legendsza-side-quests-43",
          "legendsza-side-quests-83",
        ],
        [
          "legendsza-side-quests-4",
          "legendsza-side-quests-44",
          "legendsza-side-quests-84",
        ],
        [
          "legendsza-side-quests-5",
          "legendsza-side-quests-45",
          "legendsza-side-quests-85",
        ],
        [
          "legendsza-side-quests-6",
          "legendsza-side-quests-46",
          "legendsza-side-quests-86",
        ],
        [
          "legendsza-side-quests-7",
          "legendsza-side-quests-47",
          "legendsza-side-quests-87",
        ],
        [
          "legendsza-side-quests-8",
          "legendsza-side-quests-48",
          "legendsza-side-quests-88",
        ],
        [
          "legendsza-side-quests-9",
          "legendsza-side-quests-49",
          "legendsza-side-quests-89",
        ],
        [
          "legendsza-side-quests-10",
          "legendsza-side-quests-50",
          "legendsza-side-quests-90",
        ],
        [
          "legendsza-side-quests-11",
          "legendsza-side-quests-51",
          "legendsza-side-quests-91",
        ],
        [
          "legendsza-side-quests-12",
          "legendsza-side-quests-52",
          "legendsza-side-quests-92",
        ],
        [
          "legendsza-side-quests-13",
          "legendsza-side-quests-53",
          "legendsza-side-quests-93",
        ],
        [
          "legendsza-side-quests-14",
          "legendsza-side-quests-54",
          "legendsza-side-quests-94",
        ],
        [
          "legendsza-side-quests-15",
          "legendsza-side-quests-55",
          "legendsza-side-quests-95",
        ],
        [
          "legendsza-side-quests-16",
          "legendsza-side-quests-56",
          "legendsza-side-quests-96",
        ],
        [
          "legendsza-side-quests-17",
          "legendsza-side-quests-57",
          "legendsza-side-quests-97",
        ],
        [
          "legendsza-side-quests-18",
          "legendsza-side-quests-58",
          "legendsza-side-quests-98",
        ],
        [
          "legendsza-side-quests-19",
          "legendsza-side-quests-59",
          "legendsza-side-quests-99",
        ],
        [
          "legendsza-side-quests-20",
          "legendsza-side-quests-60",
          "legendsza-side-quests-100",
        ],
        [
          "legendsza-side-quests-21",
          "legendsza-side-quests-61",
          "legendsza-side-quests-101",
        ],
        [
          "legendsza-side-quests-22",
          "legendsza-side-quests-62",
          "legendsza-side-quests-102",
        ],
        [
          "legendsza-side-quests-23",
          "legendsza-side-quests-63",
          "legendsza-side-quests-103",
        ],
        [
          "legendsza-side-quests-24",
          "legendsza-side-quests-64",
          "legendsza-side-quests-104",
        ],
        [
          "legendsza-side-quests-25",
          "legendsza-side-quests-65",
          "legendsza-side-quests-105",
        ],
        [
          "legendsza-side-quests-26",
          "legendsza-side-quests-66",
          "legendsza-side-quests-106",
        ],
        [
          "legendsza-side-quests-27",
          "legendsza-side-quests-67",
          "legendsza-side-quests-107",
        ],
        [
          "legendsza-side-quests-28",
          "legendsza-side-quests-68",
          "legendsza-side-quests-108",
        ],
        [
          "legendsza-side-quests-29",
          "legendsza-side-quests-69",
          "legendsza-side-quests-109",
        ],
        [
          "legendsza-side-quests-30",
          "legendsza-side-quests-70",
          "legendsza-side-quests-110",
        ],
        [
          "legendsza-side-quests-31",
          "legendsza-side-quests-71",
          "legendsza-side-quests-111",
        ],
        [
          "legendsza-side-quests-32",
          "legendsza-side-quests-72",
          "legendsza-side-quests-112",
        ],
        [
          "legendsza-side-quests-33",
          "legendsza-side-quests-73",
          "legendsza-side-quests-113",
        ],
        [
          "legendsza-side-quests-34",
          "legendsza-side-quests-74",
          "legendsza-side-quests-114",
        ],
        [
          "legendsza-side-quests-35",
          "legendsza-side-quests-75",
          "legendsza-side-quests-115",
        ],
        [
          "legendsza-side-quests-36",
          "legendsza-side-quests-76",
          "legendsza-side-quests-116",
        ],
        [
          "legendsza-side-quests-37",
          "legendsza-side-quests-77",
          "legendsza-side-quests-117",
        ],
        [
          "legendsza-side-quests-38",
          "legendsza-side-quests-78",
          "legendsza-side-quests-118",
        ],
        [
          "legendsza-side-quests-39",
          "legendsza-side-quests-79",
          "legendsza-side-quests-119",
        ],
        ["legendsza-side-quests-40", "legendsza-side-quests-80"],
      ],
      "legendsza-mabels-research": [
        ["legendsza-mabels-research-1", "legendsza-mabels-research-2"],
        ["legendsza-mabels-research-3", "legendsza-mabels-research-4"],
        ["legendsza-mabels-research-5", "legendsza-mabels-research-6"],
        ["legendsza-mabels-research-7", "legendsza-mabels-research-8"],
        ["legendsza-mabels-research-9", "legendsza-mabels-research-10"],
        ["legendsza-mabels-research-11", "legendsza-mabels-research-12"],
        ["legendsza-mabels-research-13", "legendsza-mabels-research-14"],
        ["legendsza-mabels-research-15", "legendsza-mabels-research-16"],
        ["legendsza-mabels-research-17", "legendsza-mabels-research-18"],
        ["legendsza-mabels-research-19", "legendsza-mabels-research-20"],
        ["legendsza-mabels-research-21", "legendsza-mabels-research-22"],
        ["legendsza-mabels-research-23", "legendsza-mabels-research-24"],
        ["legendsza-mabels-research-25"],
        [
          "legendsza-mabels-research-26",
          "legendsza-mabels-research-34",
          "legendsza-mabels-research-42",
        ],
        [
          "legendsza-mabels-research-27",
          "legendsza-mabels-research-35",
          "legendsza-mabels-research-43",
        ],
        [
          "legendsza-mabels-research-28",
          "legendsza-mabels-research-36",
          "legendsza-mabels-research-44",
        ],
        [
          "legendsza-mabels-research-29",
          "legendsza-mabels-research-37",
          "legendsza-mabels-research-45",
        ],
        [
          "legendsza-mabels-research-30",
          "legendsza-mabels-research-38",
          "legendsza-mabels-research-46",
        ],
        [
          "legendsza-mabels-research-31",
          "legendsza-mabels-research-39",
          "legendsza-mabels-research-47",
        ],
        [
          "legendsza-mabels-research-32",
          "legendsza-mabels-research-40",
          "legendsza-mabels-research-48",
        ],
        [
          "legendsza-mabels-research-33",
          "legendsza-mabels-research-41",
          "legendsza-mabels-research-49",
        ],
      ],
      "legendsza-activities": [["legendsza-activities-1"]],
      "legendsza-upgrades": [],
      "legendsza-collectables": [],
      "legendsza-thms": [["legendsza-thms-1"], ["legendsza-thms-2"]],
    },
  },

  dex: {
    legendsza: [
      {
        id: 1,
        name: "Chikorita",
        img: "imgs/pokemon_home/normal/normal/152.png",
      },
    ],
  },
});
