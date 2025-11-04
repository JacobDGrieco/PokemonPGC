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
            {
                id: "red-story-1", text: "Beat Brock", done: false, children: [
                    { id: "red-story-1-a", text: "Catch Nidoran", done: false },
                    { id: "red-story-1-b", text: "Level 16", done: false }
                ]
            },
            {
                id: "red-story-2", text: "Beat Surge", done: false, children: [
                    { id: "red-story-2-a", text: "Catch Nidoran", done: false },
                    { id: "red-story-2-b", text: "Level 16", done: false }
                ]
            },
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
        ],
    },

    dex: {
        red: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },
});