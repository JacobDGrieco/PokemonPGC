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
            img: "imgs/pokemon_home/normal/normal/144.png",
          },
          {
            id: "red-catching-1-b",
            text: "Catch Zapdos",
            done: false,
            img: "imgs/pokemon_home/normal/normal/145.png",
          },
          {
            id: "red-catching-1-c",
            text: "Catch Moltres",
            done: false,
            img: "imgs/pokemon_home/normal/normal/146.png",
          },
          {
            id: "red-catching-1-d",
            text: "Catch Mewtwo",
            done: false,
            img: "imgs/pokemon_home/normal/normal/150.png",
          },
        ],
      },
      {
        id: "red-catching-2",
        text: "Obtain all the Mythicals",
        done: false,
        children: [
          {
            id: "red-catching-2-a",
            text: "Obtain Mew",
            done: false,
            img: "imgs/pokemon_home/normal/normal/151.png",
          },
        ],
      },
      {
        id: "red-catching-3",
        text: "Catch both Snorlax",
        done: false,
        children: [
          {
            id: "red-catching-3-a",
            text: "Route 12",
            done: false,
            img: "imgs/task_imgs/gen1/snorlax-12.png",
          },
          {
            id: "red-catching-3-b",
            text: "Route 16",
            done: false,
            img: "imgs/task_imgs/gen1/snorlax-16.png",
          },
        ],
      },
      {
        id: "red-catching-4",
        text: "Obtain all In-Game Gift Pokemon",
        done: false,
        children: [
          { id: "red-catching-4-a", text: "Hitmonlee/Hitmonchan", done: false },
          { id: "red-catching-4-b", text: "Omanye/Kabuto", done: false },
          { id: "red-catching-4-c", text: "Lapras", done: false },
          { id: "red-catching-4-d", text: "Aerodactyl", done: false },
          { id: "red-catching-4-e", text: "Eevee", done: false },
        ],
      },
      {
        id: "red-catching-5",
        text: "Complete all In-Game Trades",
        done: false,
        children: [
          { id: "red-catching-5-a", text: "Abra for Mr. Mime", done: false },
          {
            id: "red-catching-5-b",
            text: "Nidoran ♂ for Nidoran ♀	",
            done: false,
          },
          {
            id: "red-catching-5-c",
            text: "Nidorino for Nidorina",
            done: false,
          },
          {
            id: "red-catching-5-d",
            text: "Slowbro for Lickitung",
            done: false,
          },
          { id: "red-catching-5-e", text: "Poliwhirl for Jynx", done: false },
          {
            id: "red-catching-5-f",
            text: "Spearow for Farfetch'd",
            done: false,
          },
          { id: "red-catching-5-g", text: "Ponyta for Seel", done: false },
          { id: "red-catching-5-h", text: "Raichu for Electrode", done: false },
          { id: "red-catching-5-i", text: "Venonant for Tangela", done: false },
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
        ["red-catching-2-a"],
        ["red-catching-3"],
        ["red-catching-3-a", "red-catching-3-b"],
        ["red-catching-4"],
        [
          "red-catching-4-a",
          "red-catching-4-b",
          "red-catching-4-c",
          "red-catching-4-d",
          "red-catching-4-e",
        ],
        ["red-catching-5"],
        ["red-catching-5-a", "red-catching-5-b", "red-catching-5-c"],
        ["red-catching-5-d", "red-catching-5-e", "red-catching-5-f"],
        ["red-catching-5-g", "red-catching-5-h", "red-catching-5-i"],
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
        img: "imgs/pokemon_home/normal/normal/001.png",
      },
    ],
  },
});
