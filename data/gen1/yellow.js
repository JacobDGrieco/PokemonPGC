PPGC.register({
    sections: {
        yellow: [
            { id: "yellow-catching", title: "Gotta Catch 'Em All" },
            { id: "yellow-story", title: "Main Story" },
            { id: "yellow-activities", title: "Activities" },
            { id: "yellow-collectables", title: "Collectables" },
            { id: "yellow-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "yellow-catching": [
            {
                id: "yellow-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "yellow-catching-1-a", text: "Catch Articuno", done: false },
                    { id: "yellow-catching-1-b", text: "Catch Zapdos", done: false },
                    { id: "yellow-catching-1-c", text: "Catch Moltres", done: false },
                    { id: "yellow-catching-1-d", text: "Catch Mewtwo", done: false },
                ]
            },
            {
                id: "yellow-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "yellow-catching-2-a", text: "Obtain Mew", done: false },
                ]
            },
            {
                id: "yellow-catching-3", text: "Catch both Snorlax", done: false, children: [
                    { id: "yellow-catching-3-a", text: "Route 12", done: false },
                    { id: "yellow-catching-3-b", text: "Route 16", done: false }
                ]
            },
            {
                id: "yellow-catching-4", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "yellow-catching-4-a", text: "Hitmonlee/Hitmonchan", done: false },
                    { id: "yellow-catching-4-b", text: "Omanye/Kabuto", done: false },
                    { id: "yellow-catching-4-c", text: "Lapras", done: false },
                    { id: "yellow-catching-4-d", text: "Aerodactyl", done: false },
                    { id: "yellow-catching-4-e", text: "Eevee", done: false }
                ]
            },
            {
                id: "yellow-catching-5", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "yellow-catching-5-a", text: "Abra for Mr. Mime", done: false },
                    { id: "yellow-catching-5-b", text: "Nidoran ♂ for Nidoran ♀	", done: false },
                    { id: "yellow-catching-5-c", text: "Nidorino for Nidorina", done: false },
                    { id: "yellow-catching-5-d", text: "Slowbro for Lickitung", done: false },
                    { id: "yellow-catching-5-e", text: "Poliwhirl for Jynx", done: false },
                    { id: "yellow-catching-5-f", text: "Spearow for Farfetch'd", done: false },
                    { id: "yellow-catching-5-g", text: "Ponyta for Seel", done: false },
                    { id: "yellow-catching-5-h", text: "Raichu for Electrode", done: false },
                    { id: "yellow-catching-5-i", text: "Venonant for Tangela", done: false }
                ]
            },
        ],
        "yellow-story": [
            { id: "yellow-story-1", text: "Defeat the Elite 4", done: false },
            { id: "yellow-story-2", text: "Epilogue", done: false, children: [] },
        ],
        "yellow-activities": [
            { id: "yellow-activities-1", text: "Get a hi-score in the Pikachu Surfing Mini-Game", done: false },
        ],
        "yellow-collectables": [
            { id: "yellow-collectables-1", text: "Obtain the Coin Case", done: false },
            { id: "yellow-collectables-2", text: "Obtain the Exp. All", done: false },
            { id: "yellow-collectables-3", text: "Obtain the Poke Flute", done: false },
            {
                id: "yellow-collectables-4", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "yellow-collectables-4-a", text: "Old Rod", done: false },
                    { id: "yellow-collectables-4-b", text: "Good Rod", done: false },
                    { id: "yellow-collectables-4-c", text: "Super Rod", done: false },
                ]
            },
            { id: "yellow-collectables-5", text: "Obtain the Item Finder", done: false },
            { id: "yellow-collectables-6", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-54
        ],
        "yellow-thms": [
            {
                id: "yellow-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "yellow-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "yellow-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "yellow-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "yellow-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "yellow-thms-1-e", text: "HM05: Flash", done: false },
                ]
            },
            { id: "yellow-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        yellow: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },
});