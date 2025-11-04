PPGC.register({
    /* Optional dex entries for that game */
    dex: {
        yellow: [
            { id: 1, name: "Bulbasaur", img: "imgs/pokemon_home/normal/normal/001.png" },
        ]
    },

    /* Optional starter sections/tasks (picked up on first open) */
    sections: {
        yellow: [
            { id: "yellow-story", title: "Main Story" },
            { id: "yellow-catching", title: "Gotta Catch 'Em All" },
            { id: "yellow-legendaries", title: "Legendaries" },
            { id: "yellow-collectables", title: "Collectables" },
            { id: "yellow-thms", title: "TMs/HMs" },
        ]
    },
    tasks: {
        "yellow-story": [
            { id: "yellow-story-1", text: "Complete the Game", done: false },
        ]
    }
});