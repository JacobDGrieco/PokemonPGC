PPGC.register({
    /* Optional dex entries for that game */
    dex: {
        blue: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },

    /* Optional starter sections/tasks (picked up on first open) */
    sections: {
        blue: [
            { id: "blue-story", title: "Main Story" },
            { id: "blue-catching", title: "Gotta' Catch 'Em All" },
            { id: "blue-legendaries", title: "Legendaries" },
            { id: "blue-collectables", title: "Collectables" },
            { id: "blue-thms", title: "TMs/HMs" },
        ]
    },
    tasks: {
        "blue-story": [
            { id: "blue-story-1", text: "Complete the Game", done: false },
        ]
    }
});