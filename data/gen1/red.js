PPGC.register({
  sections: {
    red: [
      { id: "red-catching", title: "Gotta Catch 'Em All" },
      { id: "red-story", title: "Main Story" },
      { id: "red-collectables", title: "Collectables" },
      { id: "red-thms", title: "TMs/HMs" },
    ],
  },

  tasks: {
    "red-catching": [
      {
        id: "red-catching-1",
        text: "Catch all the Legendaries",
        done: false,
        children: [
          {
            id: "red-catching-1-a",
            text: "Catch Articuno",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/144.png",
          },
          {
            id: "red-catching-1-b",
            text: "Catch Zapdos",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/145.png",
          },
          {
            id: "red-catching-1-c",
            text: "Catch Moltres",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/146.png",
          },
          {
            id: "red-catching-1-d",
            text: "Catch Mewtwo",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/150.png",
          },
        ],
      },
      {
        id: "red-catching-2",
        text: "Catch both Snorlax",
        done: false,
        children: [
          {
            id: "red-catching-2-a",
            text: "Route 12",
            done: false,
            img: "imgs/task_imgs/gen1/snorlax-12.png",
          },
          {
            id: "red-catching-2-b",
            text: "Route 16",
            done: false,
            img: "imgs/task_imgs/gen1/snorlax-16.png",
          },
        ],
      },
      {
        id: "red-catching-3",
        text: "Obtain all In-Game Gift Pokémon",
        done: false,
        children: [
          {
            id: "red-catching-3-a",
            text: "Hitmonlee/Hitmonchan",
            done: false,
            img: "imgs/task_imgs/gen1/hitmonlee-hitmonchan-gift.png",
          },
          {
            id: "red-catching-3-b",
            text: "Omanyte/Kabuto",
            done: false,
            img: "imgs/task_imgs/gen1/omanyte-kabuto-gift.png",
          },
          {
            id: "red-catching-3-c",
            text: "Lapras",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/131.png",
          },
          {
            id: "red-catching-3-d",
            text: "Aerodactyl",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/142.png",
          },
          {
            id: "red-catching-3-e",
            text: "Eevee",
            done: false,
            img: "imgs/sprites/gen1/normal/normal/133.png",
          },
        ],
      },
      {
        id: "red-catching-4",
        text: "Complete all In-Game Trades",
        done: false,
        children: [
          {
            id: "red-catching-4-a",
            text: "Abra for Mr. Mime",
            done: false,
            img: "imgs/task_imgs/gen1/abra-for-mrmime.png",
          },
          {
            id: "red-catching-4-b",
            text: "Nidoran ♂ for Nidoran ♀",
            done: false,
            img: "imgs/task_imgs/gen1/nidoranm-for-nidoranf.png",
          },
          {
            id: "red-catching-4-c",
            text: "Nidorino for Nidorina",
            done: false,
            img: "imgs/task_imgs/gen1/nidorino-for-nidorina.png",
          },
          {
            id: "red-catching-4-d",
            text: "Slowbro for Lickitung",
            done: false,
            img: "imgs/task_imgs/gen1/slowbro-for-lickitung.png",
          },
          {
            id: "red-catching-4-e",
            text: "Poliwhirl for Jynx",
            done: false,
            img: "imgs/task_imgs/gen1/poliwhirl-for-jynx.png",
          },
          {
            id: "red-catching-4-f",
            text: "Spearow for Farfetch'd",
            done: false,
            img: "imgs/task_imgs/gen1/spearow-for-farfetchd.png",
          },
          {
            id: "red-catching-4-g",
            text: "Ponyta for Seel",
            done: false,
            img: "imgs/task_imgs/gen1/ponyta-for-seel.png",
          },
          {
            id: "red-catching-4-h",
            text: "Raichu for Electrode",
            done: false,
            img: "imgs/task_imgs/gen1/raichu-for-electrode.png",
          },
          {
            id: "red-catching-4-i",
            text: "Venonant for Tangela",
            done: false,
            img: "imgs/task_imgs/gen1/venonat-for-tangela.png",
          },
        ],
      },
    ],
    "red-story": [
      { id: "red-story-1", text: "Defeat the Elite 4", done: false },
      { id: "red-story-2", text: "Epilogue", done: false, children: [] },
    ],
    "red-collectables": [
      { id: "red-collectables-1", text: "Obtain the Coin Case", done: false },
      { id: "red-collectables-2", text: "Obtain the Exp. All", done: false },
      { id: "red-collectables-3", text: "Obtain the Poke Flute", done: false },
      {
        id: "red-collectables-4",
        text: "Obtain all 3 fishing rods",
        done: false,
        children: [
          { id: "red-collectables-4-a", text: "Old Rod", done: false },
          { id: "red-collectables-4-b", text: "Good Rod", done: false },
          { id: "red-collectables-4-c", text: "Super Rod", done: false },
        ],
      },
      { id: "red-collectables-5", text: "Obtain the Item Finder", done: false },
      {
        id: "red-collectables-6",
        text: "Find all hidden items with the Item Fidner",
        done: false,
      }, // need to add a number input 0-54
    ],
    "red-thms": [
      {
        id: "red-thms-1",
        text: "Collect all HMs",
        done: false,
        children: [
          { id: "red-thms-1-a", text: "HM01: Cut", done: false },
          { id: "red-thms-1-b", text: "HM02: Fly", done: false },
          { id: "red-thms-1-c", text: "HM03: Surf", done: false },
          { id: "red-thms-1-d", text: "HM04: Strength", done: false },
          { id: "red-thms-1-e", text: "HM05: Flash", done: false },
        ],
      },
      { id: "red-thms-2", text: "Collect all TMs", done: false, children: [] },
    ],
  },

  layout: {
    taskRows: {
      "red-catching": [
        ["red-catching-1"],
        [
          "red-catching-1-a",
          "red-catching-1-b",
          "red-catching-1-c",
          "red-catching-1-d",
        ],
        ["red-catching-2"],
        ["red-catching-2-a", "red-catching-2-b"],
        ["red-catching-3"],
        [
          "red-catching-3-a",
          "red-catching-3-b",
          "red-catching-3-c",
          "red-catching-3-d",
          "red-catching-3-e",
        ],
        ["red-catching-4"],
        ["red-catching-4-a", "red-catching-4-b", "red-catching-4-c"],
        ["red-catching-4-d", "red-catching-4-e", "red-catching-4-f"],
        ["red-catching-4-g", "red-catching-4-h", "red-catching-4-i"],
      ],
      "red-story": [["red-story-1"], ["red-story-2"]],
      "red-collectables": [
        ["red-collectables-1"],
        ["red-collectables-2"],
        ["red-collectables-3"],
        ["red-collectables-4"],
        [
          "red-collectables-4-a",
          "red-collectables-4-b",
          "red-collectables-4-c",
        ],
        ["red-collectables-5"],
        ["red-collectables-6"],
      ],
      "red-thms": [["red-thms-1"], ["red-thms-2"]],
    },
  },

  dex: {
    red: [
      {
        id: 1,
        name: "Bulbasaur",
        img: "imgs/sprites/gen1/normal/normal/001.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/001.png"
      },
      {
        id: 2,
        name: "Ivysaur",
        img: "imgs/sprites/gen1/normal/normal/002.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/002.png"
      },
      {
        id: 3,
        name: "Venusaur",
        img: "imgs/sprites/gen1/normal/normal/003.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/003.png"
      },
      {
        id: 4,
        name: "Charmander",
        img: "imgs/sprites/gen1/normal/normal/004.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/004.png"
      },
      {
        id: 5,
        name: "Charmeleon",
        img: "imgs/sprites/gen1/normal/normal/005.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/005.png"
      },
      {
        id: 6,
        name: "Charizard",
        img: "imgs/sprites/gen1/normal/normal/006.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/006.png"
      },
      {
        id: 7,
        name: "Squirtle",
        img: "imgs/sprites/gen1/normal/normal/007.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/007.png"
      },
      {
        id: 8,
        name: "Wartortle",
        img: "imgs/sprites/gen1/normal/normal/008.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/008.png"
      },
      {
        id: 9,
        name: "Blastoise",
        img: "imgs/sprites/gen1/normal/normal/009.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/009.png"
      },
      {
        id: 10,
        name: "Caterpie",
        img: "imgs/sprites/gen1/normal/normal/010.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/010.png"
      },
      {
        id: 11,
        name: "Metapod",
        img: "imgs/sprites/gen1/normal/normal/011.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/011.png"
      },
      {
        id: 12,
        name: "Butterfree",
        img: "imgs/sprites/gen1/normal/normal/012.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/012.png"
      },
      {
        id: 13,
        name: "Weedle",
        img: "imgs/sprites/gen1/normal/normal/013.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/013.png"
      },
      {
        id: 14,
        name: "Kakuna",
        img: "imgs/sprites/gen1/normal/normal/014.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/014.png"
      },
      {
        id: 15,
        name: "Beedrill",
        img: "imgs/sprites/gen1/normal/normal/015.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/015.png"
      },
      {
        id: 16,
        name: "Pidgey",
        img: "imgs/sprites/gen1/normal/normal/016.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/016.png"
      },
      {
        id: 17,
        name: "Pidgeotto",
        img: "imgs/sprites/gen1/normal/normal/017.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/017.png"
      },
      {
        id: 18,
        name: "Pidgeot",
        img: "imgs/sprites/gen1/normal/normal/018.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/018.png"
      },
      {
        id: 19,
        name: "Rattata",
        img: "imgs/sprites/gen1/normal/normal/019.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/019.png"
      },
      {
        id: 20,
        name: "Raticate",
        img: "imgs/sprites/gen1/normal/normal/020.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/020.png"
      },
      {
        id: 21,
        name: "Spearow",
        img: "imgs/sprites/gen1/normal/normal/021.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/021.png"
      },
      {
        id: 22,
        name: "Fearow",
        img: "imgs/sprites/gen1/normal/normal/022.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/022.png"
      },
      {
        id: 23,
        name: "Ekans",
        img: "imgs/sprites/gen1/normal/normal/023.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/023.png"
      },
      {
        id: 24,
        name: "Arbok",
        img: "imgs/sprites/gen1/normal/normal/024.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/024.png"
      },
      {
        id: 25,
        name: "Pikachu",
        img: "imgs/sprites/gen1/normal/normal/025.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/025.png"
      },
      {
        id: 26,
        name: "Raichu",
        img: "imgs/sprites/gen1/normal/normal/026.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/026.png"
      },
      {
        id: 27,
        name: "Sandshrew",
        img: "imgs/sprites/gen1/normal/normal/027.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/027.png"
      },
      {
        id: 28,
        name: "Sandslash",
        img: "imgs/sprites/gen1/normal/normal/028.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/028.png"
      },
      {
        id: 29,
        name: "Nidoran♀",
        img: "imgs/sprites/gen1/normal/normal/029.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/029.png"
      },
      {
        id: 30,
        name: "Nidorina",
        img: "imgs/sprites/gen1/normal/normal/030.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/030.png"
      },
      {
        id: 31,
        name: "Nidoqueen",
        img: "imgs/sprites/gen1/normal/normal/031.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/031.png"
      },
      {
        id: 32,
        name: "Nidoran♂",
        img: "imgs/sprites/gen1/normal/normal/032.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/032.png"
      },
      {
        id: 33,
        name: "Nidorino",
        img: "imgs/sprites/gen1/normal/normal/033.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/033.png"
      },
      {
        id: 34,
        name: "Nidoking",
        img: "imgs/sprites/gen1/normal/normal/034.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/034.png"
      },
      {
        id: 35,
        name: "Clefairy",
        img: "imgs/sprites/gen1/normal/normal/035.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/035.png"
      },
      {
        id: 36,
        name: "Clefable",
        img: "imgs/sprites/gen1/normal/normal/036.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/036.png"
      },
      {
        id: 37,
        name: "Vulpix",
        img: "imgs/sprites/gen1/normal/normal/037.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/037.png"
      },
      {
        id: 38,
        name: "Ninetales",
        img: "imgs/sprites/gen1/normal/normal/038.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/038.png"
      },
      {
        id: 39,
        name: "Jigglypuff",
        img: "imgs/sprites/gen1/normal/normal/039.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/039.png"
      },
      {
        id: 40,
        name: "Wigglytuff",
        img: "imgs/sprites/gen1/normal/normal/040.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/040.png"
      },
      {
        id: 41,
        name: "Zubat",
        img: "imgs/sprites/gen1/normal/normal/041.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/041.png"
      },
      {
        id: 42,
        name: "Golbat",
        img: "imgs/sprites/gen1/normal/normal/042.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/042.png"
      },
      {
        id: 43,
        name: "Oddish",
        img: "imgs/sprites/gen1/normal/normal/043.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/043.png"
      },
      {
        id: 44,
        name: "Gloom",
        img: "imgs/sprites/gen1/normal/normal/044.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/044.png"
      },
      {
        id: 45,
        name: "Vileplume",
        img: "imgs/sprites/gen1/normal/normal/045.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/045.png"
      },
      {
        id: 46,
        name: "Paras",
        img: "imgs/sprites/gen1/normal/normal/046.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/046.png"
      },
      {
        id: 47,
        name: "Parasect",
        img: "imgs/sprites/gen1/normal/normal/047.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/047.png"
      },
      {
        id: 48,
        name: "Venonat",
        img: "imgs/sprites/gen1/normal/normal/048.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/048.png"
      },
      {
        id: 49,
        name: "Venomoth",
        img: "imgs/sprites/gen1/normal/normal/049.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/049.png"
      },
      {
        id: 50,
        name: "Diglett",
        img: "imgs/sprites/gen1/normal/normal/050.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/050.png"
      },
      {
        id: 51,
        name: "Dugtrio",
        img: "imgs/sprites/gen1/normal/normal/051.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/051.png"
      },
      {
        id: 52,
        name: "Meowth",
        img: "imgs/sprites/gen1/normal/normal/052.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/052.png"
      },
      {
        id: 53,
        name: "Persian",
        img: "imgs/sprites/gen1/normal/normal/053.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/053.png"
      },
      {
        id: 54,
        name: "Psyduck",
        img: "imgs/sprites/gen1/normal/normal/054.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/054.png"
      },
      {
        id: 55,
        name: "Golduck",
        img: "imgs/sprites/gen1/normal/normal/055.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/055.png"
      },
      {
        id: 56,
        name: "Mankey",
        img: "imgs/sprites/gen1/normal/normal/056.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/056.png"
      },
      {
        id: 57,
        name: "Primeape",
        img: "imgs/sprites/gen1/normal/normal/057.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/057.png"
      },
      {
        id: 58,
        name: "Growlithe",
        img: "imgs/sprites/gen1/normal/normal/058.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/058.png"
      },
      {
        id: 59,
        name: "Arcanine",
        img: "imgs/sprites/gen1/normal/normal/059.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/059.png"
      },
      {
        id: 60,
        name: "Poliwag",
        img: "imgs/sprites/gen1/normal/normal/060.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/060.png"
      },
      {
        id: 61,
        name: "Poliwhirl",
        img: "imgs/sprites/gen1/normal/normal/061.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/061.png"
      },
      {
        id: 62,
        name: "Poliwrath",
        img: "imgs/sprites/gen1/normal/normal/062.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/062.png"
      },
      {
        id: 63,
        name: "Abra",
        img: "imgs/sprites/gen1/normal/normal/063.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/063.png"
      },
      {
        id: 64,
        name: "Kadabra",
        img: "imgs/sprites/gen1/normal/normal/064.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/064.png"
      },
      {
        id: 65,
        name: "Alakazam",
        img: "imgs/sprites/gen1/normal/normal/065.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/065.png"
      },
      {
        id: 66,
        name: "Machop",
        img: "imgs/sprites/gen1/normal/normal/066.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/066.png"
      },
      {
        id: 67,
        name: "Machoke",
        img: "imgs/sprites/gen1/normal/normal/067.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/067.png"
      },
      {
        id: 68,
        name: "Machamp",
        img: "imgs/sprites/gen1/normal/normal/068.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/068.png"
      },
      {
        id: 69,
        name: "Bellsprout",
        img: "imgs/sprites/gen1/normal/normal/069.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/069.png"
      },
      {
        id: 70,
        name: "Weepinbell",
        img: "imgs/sprites/gen1/normal/normal/070.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/070.png"
      },
      {
        id: 71,
        name: "Victreebel",
        img: "imgs/sprites/gen1/normal/normal/071.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/071.png"
      },
      {
        id: 72,
        name: "Tentacool",
        img: "imgs/sprites/gen1/normal/normal/072.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/072.png"
      },
      {
        id: 73,
        name: "Tentacruel",
        img: "imgs/sprites/gen1/normal/normal/073.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/073.png"
      },
      {
        id: 74,
        name: "Geodude",
        img: "imgs/sprites/gen1/normal/normal/074.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/074.png"
      },
      {
        id: 75,
        name: "Graveler",
        img: "imgs/sprites/gen1/normal/normal/075.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/075.png"
      },
      {
        id: 76,
        name: "Golem",
        img: "imgs/sprites/gen1/normal/normal/076.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/076.png"
      },
      {
        id: 77,
        name: "Ponyta",
        img: "imgs/sprites/gen1/normal/normal/077.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/077.png"
      },
      {
        id: 78,
        name: "Rapidash",
        img: "imgs/sprites/gen1/normal/normal/078.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/078.png"
      },
      {
        id: 79,
        name: "Slowpoke",
        img: "imgs/sprites/gen1/normal/normal/079.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/079.png"
      },
      {
        id: 80,
        name: "Slowbro",
        img: "imgs/sprites/gen1/normal/normal/080.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/080.png"
      },
      {
        id: 81,
        name: "Magnemite",
        img: "imgs/sprites/gen1/normal/normal/081.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/081.png"
      },
      {
        id: 82,
        name: "Magneton",
        img: "imgs/sprites/gen1/normal/normal/082.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/082.png"
      },
      {
        id: 83,
        name: "Farfetch'd",
        img: "imgs/sprites/gen1/normal/normal/083.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/083.png"
      },
      {
        id: 84,
        name: "Doduo",
        img: "imgs/sprites/gen1/normal/normal/084.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/084.png"
      },
      {
        id: 85,
        name: "Dodrio",
        img: "imgs/sprites/gen1/normal/normal/085.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/085.png"
      },
      {
        id: 86,
        name: "Seel",
        img: "imgs/sprites/gen1/normal/normal/086.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/086.png"
      },
      {
        id: 87,
        name: "Dewgong",
        img: "imgs/sprites/gen1/normal/normal/087.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/087.png"
      },
      {
        id: 88,
        name: "Grimer",
        img: "imgs/sprites/gen1/normal/normal/088.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/088.png"
      },
      {
        id: 89,
        name: "Muk",
        img: "imgs/sprites/gen1/normal/normal/089.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/089.png"
      },
      {
        id: 90,
        name: "Shellder",
        img: "imgs/sprites/gen1/normal/normal/090.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/090.png"
      },
      {
        id: 91,
        name: "Cloyster",
        img: "imgs/sprites/gen1/normal/normal/091.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/091.png"
      },
      {
        id: 92,
        name: "Gastly",
        img: "imgs/sprites/gen1/normal/normal/092.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/092.png"
      },
      {
        id: 93,
        name: "Haunter",
        img: "imgs/sprites/gen1/normal/normal/093.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/093.png"
      },
      {
        id: 94,
        name: "Gengar",
        img: "imgs/sprites/gen1/normal/normal/094.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/094.png"
      },
      {
        id: 95,
        name: "Onix",
        img: "imgs/sprites/gen1/normal/normal/095.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/095.png"
      },
      {
        id: 96,
        name: "Drowzee",
        img: "imgs/sprites/gen1/normal/normal/096.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/096.png"
      },
      {
        id: 97,
        name: "Hypno",
        img: "imgs/sprites/gen1/normal/normal/097.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/097.png"
      },
      {
        id: 98,
        name: "Krabby",
        img: "imgs/sprites/gen1/normal/normal/098.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/098.png"
      },
      {
        id: 99,
        name: "Kingler",
        img: "imgs/sprites/gen1/normal/normal/099.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/099.png"
      },
      {
        id: 100,
        name: "Voltorb",
        img: "imgs/sprites/gen1/normal/normal/100.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/100.png"
      },
      {
        id: 101,
        name: "Electrode",
        img: "imgs/sprites/gen1/normal/normal/101.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/101.png"
      },
      {
        id: 102,
        name: "Exeggcute",
        img: "imgs/sprites/gen1/normal/normal/102.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/102.png"
      },
      {
        id: 103,
        name: "Exeggutor",
        img: "imgs/sprites/gen1/normal/normal/103.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/103.png"
      },
      {
        id: 104,
        name: "Cubone",
        img: "imgs/sprites/gen1/normal/normal/104.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/104.png"
      },
      {
        id: 105,
        name: "Marowak",
        img: "imgs/sprites/gen1/normal/normal/105.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/105.png"
      },
      {
        id: 106,
        name: "Hitmonlee",
        img: "imgs/sprites/gen1/normal/normal/106.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/106.png"
      },
      {
        id: 107,
        name: "Hitmonchan",
        img: "imgs/sprites/gen1/normal/normal/107.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/107.png"
      },
      {
        id: 108,
        name: "Lickitung",
        img: "imgs/sprites/gen1/normal/normal/108.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/108.png"
      },
      {
        id: 109,
        name: "Koffing",
        img: "imgs/sprites/gen1/normal/normal/109.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/109.png"
      },
      {
        id: 110,
        name: "Weezing",
        img: "imgs/sprites/gen1/normal/normal/110.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/110.png"
      },
      {
        id: 111,
        name: "Rhyhorn",
        img: "imgs/sprites/gen1/normal/normal/111.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/111.png"
      },
      {
        id: 112,
        name: "Rhydon",
        img: "imgs/sprites/gen1/normal/normal/112.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/112.png"
      },
      {
        id: 113,
        name: "Chansey",
        img: "imgs/sprites/gen1/normal/normal/113.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/113.png"
      },
      {
        id: 114,
        name: "Tangela",
        img: "imgs/sprites/gen1/normal/normal/114.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/114.png"
      },
      {
        id: 115,
        name: "Kangaskhan",
        img: "imgs/sprites/gen1/normal/normal/115.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/115.png"
      },
      {
        id: 116,
        name: "Horsea",
        img: "imgs/sprites/gen1/normal/normal/116.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/116.png"
      },
      {
        id: 117,
        name: "Seadra",
        img: "imgs/sprites/gen1/normal/normal/117.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/117.png"
      },
      {
        id: 118,
        name: "Goldeen",
        img: "imgs/sprites/gen1/normal/normal/118.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/118.png"
      },
      {
        id: 119,
        name: "Seaking",
        img: "imgs/sprites/gen1/normal/normal/119.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/119.png"
      },
      {
        id: 120,
        name: "Staryu",
        img: "imgs/sprites/gen1/normal/normal/120.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/120.png"
      },
      {
        id: 121,
        name: "Starmie",
        img: "imgs/sprites/gen1/normal/normal/121.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/121.png"
      },
      {
        id: 122,
        name: "Mr. Mime",
        img: "imgs/sprites/gen1/normal/normal/122.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/122.png"
      },
      {
        id: 123,
        name: "Scyther",
        img: "imgs/sprites/gen1/normal/normal/123.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/123.png"
      },
      {
        id: 124,
        name: "Jynx",
        img: "imgs/sprites/gen1/normal/normal/124.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/124.png"
      },
      {
        id: 125,
        name: "Electabuzz",
        img: "imgs/sprites/gen1/normal/normal/125.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/125.png"
      },
      {
        id: 126,
        name: "Magmar",
        img: "imgs/sprites/gen1/normal/normal/126.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/126.png"
      },
      {
        id: 127,
        name: "Pinsir",
        img: "imgs/sprites/gen1/normal/normal/127.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/127.png"
      },
      {
        id: 128,
        name: "Tauros",
        img: "imgs/sprites/gen1/normal/normal/128.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/128.png"
      },
      {
        id: 129,
        name: "Magikarp",
        img: "imgs/sprites/gen1/normal/normal/129.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/129.png"
      },
      {
        id: 130,
        name: "Gyarados",
        img: "imgs/sprites/gen1/normal/normal/130.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/130.png"
      },
      {
        id: 131,
        name: "Lapras",
        img: "imgs/sprites/gen1/normal/normal/131.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/131.png"
      },
      {
        id: 132,
        name: "Ditto",
        img: "imgs/sprites/gen1/normal/normal/132.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/132.png"
      },
      {
        id: 133,
        name: "Eevee",
        img: "imgs/sprites/gen1/normal/normal/133.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/133.png"
      },
      {
        id: 134,
        name: "Vaporeon",
        img: "imgs/sprites/gen1/normal/normal/134.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/134.png"
      },
      {
        id: 135,
        name: "Jolteon",
        img: "imgs/sprites/gen1/normal/normal/135.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/135.png"
      },
      {
        id: 136,
        name: "Flareon",
        img: "imgs/sprites/gen1/normal/normal/136.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/136.png"
      },
      {
        id: 137,
        name: "Porygon",
        img: "imgs/sprites/gen1/normal/normal/137.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/137.png"
      },
      {
        id: 138,
        name: "Omanyte",
        img: "imgs/sprites/gen1/normal/normal/138.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/138.png"
      },
      {
        id: 139,
        name: "Omastar",
        img: "imgs/sprites/gen1/normal/normal/139.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/139.png"
      },
      {
        id: 140,
        name: "Kabuto",
        img: "imgs/sprites/gen1/normal/normal/140.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/140.png"
      },
      {
        id: 141,
        name: "Kabutops",
        img: "imgs/sprites/gen1/normal/normal/141.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/141.png"
      },
      {
        id: 142,
        name: "Aerodactyl",
        img: "imgs/sprites/gen1/normal/normal/142.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/142.png"
      },
      {
        id: 143,
        name: "Snorlax",
        img: "imgs/sprites/gen1/normal/normal/143.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/143.png"
      },
      {
        id: 144,
        name: "Articuno",
        img: "imgs/sprites/gen1/normal/normal/144.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/144.png"
      },
      {
        id: 145,
        name: "Zapdos",
        img: "imgs/sprites/gen1/normal/normal/145.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/145.png"
      },
      {
        id: 146,
        name: "Moltres",
        img: "imgs/sprites/gen1/normal/normal/146.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/146.png"
      },
      {
        id: 147,
        name: "Dratini",
        img: "imgs/sprites/gen1/normal/normal/147.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/147.png"
      },
      {
        id: 148,
        name: "Dragonair",
        img: "imgs/sprites/gen1/normal/normal/148.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/148.png"
      },
      {
        id: 149,
        name: "Dragonite",
        img: "imgs/sprites/gen1/normal/normal/149.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/149.png"
      },
      {
        id: 150,
        name: "Mewtwo",
        img: "imgs/sprites/gen1/normal/normal/150.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/150.png"
      },
      {
        id: 151,
        name: "Mew",
        img: "imgs/sprites/gen1/normal/normal/151.png",
        imgS: "imgs/sprites/gen1/shiny/shiny/151.png",
        mythical: true,
      }
    ],
  },
});
