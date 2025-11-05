PPGC.register({
    sections: {
        blue: [
            { id: "blue-catching", title: "Gotta Catch 'Em All" },
            { id: "blue-story", title: "Main Story" },
            { id: "blue-collectables", title: "Collectables" },
            { id: "blue-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "blue-catching": [
            {
                id: "blue-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "blue-catching-1-a", text: "Catch Articuno", done: false },
                    { id: "blue-catching-1-b", text: "Catch Zapdos", done: false },
                    { id: "blue-catching-1-c", text: "Catch Moltres", done: false },
                    { id: "blue-catching-1-d", text: "Catch Mewtwo", done: false },
                ]
            },
            {
                id: "blue-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "blue-catching-2-a", text: "Obtain Mew", done: false },
                ]
            },
            {
                id: "blue-catching-3", text: "Catch both Snorlax", done: false, children: [
                    { id: "blue-catching-3-a", text: "Route 12", done: false },
                    { id: "blue-catching-3-b", text: "Route 16", done: false }
                ]
            },
            {
                id: "blue-catching-4", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "blue-catching-4-a", text: "Hitmonlee/Hitmonchan", done: false },
                    { id: "blue-catching-4-b", text: "Omanye/Kabuto", done: false },
                    { id: "blue-catching-4-c", text: "Lapras", done: false },
                    { id: "blue-catching-4-d", text: "Aerodactyl", done: false },
                    { id: "blue-catching-4-e", text: "Eevee", done: false }
                ]
            },
            {
                id: "blue-catching-5", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "blue-catching-5-a", text: "Abra for Mr. Mime", done: false },
                    { id: "blue-catching-5-b", text: "Nidoran ♂ for Nidoran ♀	", done: false },
                    { id: "blue-catching-5-c", text: "Nidorino for Nidorina", done: false },
                    { id: "blue-catching-5-d", text: "Slowbro for Lickitung", done: false },
                    { id: "blue-catching-5-e", text: "Poliwhirl for Jynx", done: false },
                    { id: "blue-catching-5-f", text: "Spearow for Farfetch'd", done: false },
                    { id: "blue-catching-5-g", text: "Ponyta for Seel", done: false },
                    { id: "blue-catching-5-h", text: "Raichu for Electrode", done: false },
                    { id: "blue-catching-5-i", text: "Venonant for Tangela", done: false }
                ]
            },
        ],
        "blue-story": [
            { id: "blue-story-1", text: "Defeat the Elite 4", done: false },
            { id: "blue-story-2", text: "Epilogue", done: false, children: [] },
        ],
        "blue-collectables": [
            { id: "blue-collectables-1", text: "Obtain the Coin Case", done: false },
            { id: "blue-collectables-2", text: "Obtain the Exp. All", done: false },
            { id: "blue-collectables-3", text: "Obtain the Poke Flute", done: false },
            {
                id: "blue-collectables-4", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "blue-collectables-4-a", text: "Old Rod", done: false },
                    { id: "blue-collectables-4-b", text: "Good Rod", done: false },
                    { id: "blue-collectables-4-c", text: "Super Rod", done: false },
                ]
            },
            { id: "blue-collectables-5", text: "Obtain the Item Finder", done: false },
            { id: "blue-collectables-6", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-54
        ],
        "blue-thms": [
            {
                id: "blue-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "blue-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "blue-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "blue-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "blue-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "blue-thms-1-e", text: "HM05: Flash", done: false },
                ]
            },
            { id: "blue-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        blue: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },
});