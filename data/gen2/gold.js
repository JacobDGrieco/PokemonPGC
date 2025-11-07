PPGC.register({
  sections: {
    gold: [
      { id: "gold-catching", title: "Gotta Catch 'Em All" },
      { id: "gold-story", title: "Main Story" },
      { id: "gold-sidequests", title: "Side Quests" },
      { id: "gold-upgrades", title: "Upgrades" },
      { id: "gold-collectables", title: "Collectables" },
      { id: "gold-thms", title: "TMs/HMs" },
    ],
  },

  tasks: {
    "gold-catching": [
      {
        id: "gold-catching-1",
        text: "Catch all the Legendaries",
        done: false,
        children: [
          { id: "gold-catching-1-a", text: "Catch Raikou", done: false },
          { id: "gold-catching-1-b", text: "Catch Entei", done: false },
          { id: "gold-catching-1-c", text: "Catch Suicune", done: false },
          { id: "gold-catching-1-d", text: "Catch Ho-Oh", done: false },
          { id: "gold-catching-1-d", text: "Trade for Lugia", done: false },
        ],
      },
      {
        id: "gold-catching-2",
        text: "Catch/Defeat the Sudowoodo on Route 36",
        done: false,
      },
      {
        id: "gold-catching-3",
        text: 'Catch/Defeat the "Red" Gyarados at the Lake of Rage',
        done: false,
      },
      {
        id: "gold-catching-4",
        text: "Catch the Lapras in Union Cave",
        done: false,
      },
      {
        id: "gold-catching-5",
        text: "Catch/Defeat the Snorlax in Vermillion City",
        done: false,
      },
      {
        id: "gold-catching-6",
        text: "Obtain all In-Game Gift Pokemon",
        done: false,
        children: [
          { id: "gold-catching-6-a", text: "Spearow", done: false },
          { id: "gold-catching-6-b", text: "Shuckle", done: false },
          { id: "gold-catching-6-c", text: "Eevee", done: false },
          { id: "gold-catching-6-d", text: "Tyrogue", done: false },
          { id: "gold-catching-6-e", text: "Togepi", done: false },
        ],
      },
      {
        id: "gold-catching-7",
        text: "Complete all In-Game Trades",
        done: false,
        children: [
          { id: "gold-catching-7-a", text: "Bellsprout for Onix", done: false },
          { id: "gold-catching-7-b", text: "Drowzee for Machop", done: false },
          { id: "gold-catching-7-c", text: "Krabby for Voltorb", done: false },
          {
            id: "gold-catching-7-d",
            text: "Dragonair for Rhydon",
            done: false,
          },
          { id: "gold-catching-7-e", text: "Gloom for Rapidash", done: false },
          {
            id: "gold-catching-7-f",
            text: "Chansey for Aerodactyl",
            done: false,
          },
        ],
      },
    ],
    "gold-story": [
      { id: "gold-story-1", text: "Defeat the Elite 4", done: false },
      {
        id: "gold-story-2",
        text: "Epilogue",
        done: false,
        children: [
          {
            id: "gold-story-2-a",
            text: "Restore power to the Kanto Power Plant",
            done: false,
          },
          {
            id: "gold-story-2-b",
            text: "Find Champion Blue on Cinnabar Island",
            done: false,
          },
          {
            id: "gold-story-2-c",
            text: "Defeat Blain on the Seafoam Islands",
            done: false,
          },
          {
            id: "gold-story-2-d",
            text: "Defeat Red atop Mt. Silver",
            done: false,
          },
          {
            id: "gold-story-2-e",
            text: "Collect all 8 Kanto Gym Badges",
            done: false,
            children: [
              { id: "gold-story-2-e-a", text: "Boulder Badge", done: false },
              { id: "gold-story-2-e-b", text: "Cascade Badge", done: false },
              { id: "gold-story-2-e-c", text: "Thunder Badge", done: false },
              { id: "gold-story-2-e-d", text: "Rainbow Badge", done: false },
              { id: "gold-story-2-e-e", text: "Soul Badge", done: false },
              { id: "gold-story-2-e-f", text: "Marsh Badge", done: false },
              { id: "gold-story-2-e-g", text: "Volcano Badge", done: false },
              { id: "gold-story-2-e-h", text: "Earth Badge", done: false },
            ],
          },
        ],
      },
    ],
    "gold-sidequests": [
      {
        id: "gold-sidequests-1",
        text: "Show Elm the hatched egg",
        done: false,
      },
      {
        id: "gold-sidequests-2",
        text: "Deliver the mail for the guard on Route 36 to the fat guy on Route 31",
        done: false,
      },
      {
        id: "gold-sidequests-3",
        text: "Cure the Miltank on Route 39",
        done: false,
      },
      {
        id: "gold-sidequests-4",
        text: "Talk to Mary in the Radio Tower after beating Team Rocket",
        done: false,
      },
      {
        id: "gold-sidequests-5",
        text: "Return the lost doll to the woman in Saffrom City",
        done: false,
      },
      {
        id: "gold-sidequests-6",
        text: "Meet all the Week Siblings",
        done: false,
        children: [
          { id: "gold-catching-6-a", text: "Monica", done: false },
          { id: "gold-catching-6-b", text: "Tuscany", done: false },
          { id: "gold-catching-6-c", text: "Wesley", done: false },
          { id: "gold-catching-6-d", text: "Arthur", done: false },
          { id: "gold-catching-6-e", text: "Frieda", done: false },
          { id: "gold-catching-6-f", text: "Santos", done: false },
          { id: "gold-catching-6-g", text: "Sunny", done: false },
        ],
      },
    ],
    "gold-upgrades": [
      { id: "gold-upgrades-1", text: "Get the Town Map", done: false },
      { id: "gold-upgrades-2", text: "Get the Radio", done: false },
      { id: "gold-upgrades-3", text: "Get the Unown PokeDex tab", done: false },
    ],
    "gold-collectables": [
      { id: "gold-collectables-1", text: "Obtain the Bike", done: false },
      { id: "gold-collectables-2", text: "Obtain the Coin Case", done: false },
      {
        id: "gold-collectables-3",
        text: "Obtain the Squirtbottle",
        done: false,
      },
      { id: "gold-collectables-4", text: "Obtain the Exp. Share", done: false },
      { id: "gold-collectables-5", text: "Obtain the EXPN Card", done: false },
      {
        id: "gold-collectables-6",
        text: "Obtain all 3 fishing rods",
        done: false,
        children: [
          { id: "gold-collectables-6-a", text: "Old Rod", done: false },
          { id: "gold-collectables-6-b", text: "Good Rod", done: false },
          { id: "gold-collectables-6-c", text: "Super Rod", done: false },
        ],
      },
      {
        id: "gold-collectables-7",
        text: "Obtain the Item Finder",
        done: false,
      },
      {
        id: "gold-collectables-8",
        text: "Find all hidden items with the Item Fidner",
        done: false,
      }, // need to add a number input 0-88
    ],
    "gold-thms": [
      {
        id: "gold-thms-1",
        text: "Collect all HMs",
        done: false,
        children: [
          { id: "gold-thms-1-a", text: "HM01: Cut", done: false },
          { id: "gold-thms-1-b", text: "HM02: Fly", done: false },
          { id: "gold-thms-1-c", text: "HM03: Surf", done: false },
          { id: "gold-thms-1-d", text: "HM04: Strength", done: false },
          { id: "gold-thms-1-e", text: "HM05: Flash", done: false },
          { id: "gold-thms-1-f", text: "HM06: Whirlpool", done: false },
          { id: "gold-thms-1-g", text: "HM07: Waterfall", done: false },
        ],
      },
      { id: "gold-thms-2", text: "Collect all TMs", done: false, children: [] },
    ],
  },

  dex: {
    gold: [
      {
        id: 1,
        name: "Chikorita",
        img: "imgs/pokemon_home/normal/normal/152.png",
        imgS: "imgs/pokemon_home/shiny/shiny/152.png",
      },
    ],
  },
});
