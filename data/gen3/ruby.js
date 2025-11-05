PPGC.register({
    sections: {
        ruby: [
            { id: "ruby-catching", title: "Gotta Catch 'Em All" },
            { id: "ruby-distributions", title: "Distributions" },
            { id: "ruby-story", title: "Main Story" },
            { id: "ruby-sidequests", title: "Side Quests" },
            { id: "ruby-activities", title: "Activities" },
            { id: "ruby-battle", title: "Battle" },
            { id: "ruby-upgrades", title: "Upgrades" },
            { id: "ruby-collectables", title: "Collectables" },
            { id: "ruby-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "ruby-catching": [
            {
                id: "ruby-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "ruby-catching-1-a", text: "Trade for Kyogre", done: false },
                    { id: "ruby-catching-1-b", text: "Catch Groudon", done: false },
                    { id: "ruby-catching-1-c", text: "Catch Rayquaza", done: false },
                    { id: "ruby-catching-1-d", text: "Catch Regirock", done: false },
                    { id: "ruby-catching-1-e", text: "Catch Registeel", done: false },
                    { id: "ruby-catching-1-f", text: "Catch Regice", done: false },
                    { id: "ruby-catching-1-g", text: "Trade for Latias", done: false },
                    { id: "ruby-catching-1-h", text: "Catch Latios", done: false },
                ]
            },
            {
                id: "ruby-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "ruby-catching-2-a", text: "Obtain Jirachi", done: false },
                    { id: "ruby-catching-2-b", text: "Obtain Deoxys", done: false },
                ]
            },
            { id: "ruby-catching-3", text: "Catch/Defeat Kecleon blocking Fortree City", done: false },
            {
                id: "ruby-catching-4", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "ruby-catching-4-a", text: "Lileep / Anorith", done: false },
                    { id: "ruby-catching-4-b", text: "Beldum", done: false },
                    { id: "ruby-catching-4-c", text: "Castform", done: false },
                    { id: "ruby-catching-4-d", text: "Wynaut", done: false },
                ]
            },
            {
                id: "ruby-catching-5", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "ruby-catching-5-a", text: "Slakoth for Makuhita", done: false },
                    { id: "ruby-catching-5-b", text: "Pikachu for Skitty", done: false },
                    { id: "ruby-catching-5-c", text: "Bellossum for Corsola", done: false },
                ]
            },
        ],
        "ruby-distributions": [
        ],
        "ruby-story": [
            { id: "ruby-story-1", text: "Defeat the Elite 4", done: false },
        ],
        "ruby-sidequests": [
            { id: "ruby-sidequests-1", text: "Find the Bug Maniac's Glasses on Route 116", done: false },
        ],
        "ruby-upgrades": [
            { id: "ruby-upgrades-1", text: "Obtain the National PokdDex", done: false },
            {
                id: "ruby-collectables-6", text: "Obtain the Gold 4-Star Trainer Card", done: false, children: [
                    { id: "ruby-collectables-6-a", text: "Defeat the Elite 4/Champion", done: false },
                    { id: "ruby-collectables-6-b", text: "Win all Master Rank Contests", done: false },
                    { id: "ruby-collectables-6-c", text: "Defeat the 50 trainer challenge in the Battle Tower", done: false },
                    { id: "ruby-collectables-6-d", text: "Complete the Hoeen Regional PokeDex (200)", done: false },
                ]
            },
        ],







        "ruby-collectables": [
            { id: "ruby-collectables-1", text: "Obtain the Bike", done: false },
            { id: "ruby-collectables-2", text: "Obtain the Coin Case", done: false },
            { id: "ruby-collectables-3", text: "Obtain the Squirtbottle", done: false },
            { id: "ruby-collectables-4", text: "Obtain the Exp. Share", done: false },
            { id: "ruby-collectables-5", text: "Obtain the EXPN Card", done: false },
            {
                id: "ruby-collectables-6", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "ruby-collectables-6-a", text: "Old Rod", done: false },
                    { id: "ruby-collectables-6-b", text: "Good Rod", done: false },
                    { id: "ruby-collectables-6-c", text: "Super Rod", done: false },
                ]
            },
            { id: "ruby-collectables-7", text: "Obtain the Item Finder", done: false },
            { id: "ruby-collectables-8", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-88
        ],
        "ruby-thms": [
            {
                id: "ruby-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "ruby-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "ruby-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "ruby-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "ruby-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "ruby-thms-1-e", text: "HM05: Flash", done: false },
                    { id: "ruby-thms-1-f", text: "HM06: Whirlpool", done: false },
                    { id: "ruby-thms-1-g", text: "HM07: Waterfall", done: false },
                ]
            },
            { id: "ruby-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        ruby: [
            { id: 152, name: "Chikorita", img: "imgs/pokemon_home/normal/normal/152.png" },
        ]
    },
});