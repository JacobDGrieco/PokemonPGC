PPGC.register({
    sections: {
        red: [
            { id: "red-story", title: "Main Story" },
            { id: "red-catching", title: "Gotta Catch 'Em All" },
            { id: "red-legendaries", title: "Legendaries" },
            { id: "red-collectables", title: "Collectables" },
            { id: "red-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "red-story": [
            { id: "red-story-1", text: "Defeat the Elite 4", done: false },
            { id: "red-story-2", text: "Epilogue", done: false, children: [] },
        ],
        "red-catching": [
            {
                id: "red-catching-1", text: "Catch both Snorlax", done: false, children: [
                    { id: "red-catching-1-a", text: "Route 12", done: false },
                    { id: "red-catching-1-b", text: "Route 16", done: false }
                ]
            },
            {
                id: "red-catching-2", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "red-catching-2-a", text: "Hitmonlee/Hitmonchan", done: false },
                    { id: "red-catching-2-b", text: "Omanye/Kabuto", done: false },
                    { id: "red-catching-2-c", text: "Lapras", done: false },
                    { id: "red-catching-2-d", text: "Aerodactyl", done: false },
                    { id: "red-catching-2-e", text: "Eevee", done: false }
                ]
            },
            {
                id: "red-catching-3", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "red-catching-3-a", text: "Abra for Mr. Mime", done: false },
                    { id: "red-catching-3-b", text: "Nidoran ♂ for Nidoran ♀	", done: false },
                    { id: "red-catching-3-c", text: "Nidorino for Nidorina", done: false },
                    { id: "red-catching-3-d", text: "Slowbro for Lickitung", done: false },
                    { id: "red-catching-3-e", text: "Poliwhirl for Jynx", done: false },
                    { id: "red-catching-3-f", text: "Spearow for Farfetch'd", done: false },
                    { id: "red-catching-3-g", text: "Ponyta for Seel", done: false },
                    { id: "red-catching-3-h", text: "Raichu for Electrode", done: false },
                    { id: "red-catching-3-i", text: "Venonant for Tangela", done: false }
                ]
            },
        ],
        "red-legendaries": [
            {
                id: "red-legendaries-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "red-legendaries-1-a", text: "Catch Articuno", done: false },
                    { id: "red-legendaries-1-b", text: "Catch Zapdos", done: false },
                    { id: "red-legendaries-1-c", text: "Catch Moltres", done: false },
                    { id: "red-legendaries-1-d", text: "Catch Mewtwo", done: false },
                ]
            },
            {
                id: "red-legendaries-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "red-legendaries-2-a", text: "Obtain Mew", done: false },
                ]
            },
        ],
        "red-collectables": [
            { id: "red-collectables-1", text: "Obtain the Coin Case", done: false },
            { id: "red-collectables-2", text: "Obtain the Exp. All", done: false },
            { id: "red-collectables-3", text: "Obtain the Poke Flute", done: false },
            {
                id: "red-collectables-4", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "red-collectables-4-a", text: "Old Rod", done: false },
                    { id: "red-collectables-4-b", text: "Good Rod", done: false },
                    { id: "red-collectables-4-c", text: "Super Rod", done: false },
                ]
            },
            { id: "red-collectables-5", text: "Obtain the Item Finder", done: false },
            { id: "red-collectables-6", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-54
        ],
        "red-thms": [
            { id: "red-thms-1", text: "Collect all TMs", done: false, children: [] },
            { id: "red-thms-2", text: "Collect all HMs", done: false, children: [] },
        ]
    },

    dex: {
        red: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },
});