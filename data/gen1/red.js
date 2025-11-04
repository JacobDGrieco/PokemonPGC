PPGC.register({
    /* Optional dex entries for that game */
    dex: {
        red: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },

    /* Optional starter sections/tasks (picked up on first open) */
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
                    { id: "rs1-a", text: "Catch Nidoran", done: false },
                    { id: "rs1-b", text: "Level 16", done: false }
                ]
            }
        ]
    }
});