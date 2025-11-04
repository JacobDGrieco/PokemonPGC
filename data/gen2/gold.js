PPGC.register({
    /* Optional dex entries for that game */
    dex: {
        gold: [
            { id: 152, name: "Chikorita", img: "imgs/pokemon_home/normal/normal/152.png" },
        ]
    },

    /* Optional starter sections/tasks (picked up on first open) */
    sections: {
        gold: [
            { id: "gold-story", title: "Main Story" },
            // { id: "blue-catching", title: "Gotta Catch 'Em All" },
            // { id: "blue-legendaries", title: "Legendaries" },
            // { id: "blue-collectables", title: "Collectables" },
            // { id: "blue-thms", title: "TMs/HMs" },
        ]
    },
    tasks: {
        "gold-story": [
            { id: "gold-story-1", text: "Complete the Game", done: false },
        ]
    }
});