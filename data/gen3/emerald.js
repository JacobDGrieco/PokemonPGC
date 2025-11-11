PPGC.register({
    sections: {
        emerald: [
            { id: "emerald-catching", title: "Gotta Catch 'Em All" },
            { id: "emerald-distributions", title: "Distributions" },
            { id: "emerald-story", title: "Main Story" },
            { id: "emerald-sidequests", title: "Side Quests" },
            { id: "emerald-activities", title: "Activities" },
            { id: "emerald-battle", title: "Battle" },
            { id: "emerald-upgrades", title: "Upgrades" },
            { id: "emerald-collectables", title: "Collectables" },
            { id: "emerald-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "emerald-catching": [
            {
                id: "emerald-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "emerald-catching-1-a", text: "Trade for Kyogre", done: false },
                    { id: "emerald-catching-1-b", text: "Catch Groudon", done: false },
                    { id: "emerald-catching-1-c", text: "Catch Rayquaza", done: false },
                    { id: "emerald-catching-1-d", text: "Catch Regirock", done: false },
                    { id: "emerald-catching-1-e", text: "Catch Registeel", done: false },
                    { id: "emerald-catching-1-f", text: "Catch Regice", done: false },
                    { id: "emerald-catching-1-g", text: "Trade for Latias", done: false },
                    { id: "emerald-catching-1-h", text: "Catch Latios", done: false },
                ]
            },
            {
                id: "emerald-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "emerald-catching-2-a", text: "Obtain Jirachi", done: false },
                    { id: "emerald-catching-2-b", text: "Obtain Deoxys", done: false },
                ]
            },
            { id: "emerald-catching-3", text: "Catch/Defeat Kecleon blocking Fortree City", done: false },
            {
                id: "emerald-catching-4", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "emerald-catching-4-a", text: "Lileep / Anorith", done: false },
                    { id: "emerald-catching-4-b", text: "Beldum", done: false },
                    { id: "emerald-catching-4-c", text: "Castform", done: false },
                    { id: "emerald-catching-4-d", text: "Wynaut", done: false },
                ]
            },
            {
                id: "emerald-catching-5", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "emerald-catching-5-a", text: "Slakoth for Makuhita", done: false },
                    { id: "emerald-catching-5-b", text: "Pikachu for Skitty", done: false },
                    { id: "emerald-catching-5-c", text: "Bellossum for Corsola", done: false },
                ]
            },
        ],
        "emerald-distributions": [
        ],
        "emerald-story": [
            { id: "emerald-story-1", text: "Defeat the Elite 4", done: false },
        ],
        "emerald-sidequests": [
            { id: "emerald-sidequests-1", text: "Find the Bug Maniac's Glasses on Route 116", done: false },
        ],
        "emerald-upgrades": [
            { id: "emerald-upgrades-1", text: "Obtain the National PokdDex", done: false },
            {
                id: "emerald-collectables-6", text: "Obtain the Gold 4-Star Trainer Card", done: false, children: [
                    { id: "emerald-collectables-6-a", text: "Defeat the Elite 4/Champion", done: false },
                    { id: "emerald-collectables-6-b", text: "Win all Master Rank Contests", done: false },
                    { id: "emerald-collectables-6-c", text: "Defeat the 50 trainer challenge in the Battle Tower", done: false },
                    { id: "emerald-collectables-6-d", text: "Complete the Hoeen Regional PokeDex (200)", done: false },
                ]
            },
        ],







        "emerald-collectables": [
            { id: "emerald-collectables-1", text: "Obtain the Bike", done: false },
            { id: "emerald-collectables-2", text: "Obtain the Coin Case", done: false },
            { id: "emerald-collectables-3", text: "Obtain the Squirtbottle", done: false },
            { id: "emerald-collectables-4", text: "Obtain the Exp. Share", done: false },
            { id: "emerald-collectables-5", text: "Obtain the EXPN Card", done: false },
            {
                id: "emerald-collectables-6", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "emerald-collectables-6-a", text: "Old Rod", done: false },
                    { id: "emerald-collectables-6-b", text: "Good Rod", done: false },
                    { id: "emerald-collectables-6-c", text: "Super Rod", done: false },
                ]
            },
            { id: "emerald-collectables-7", text: "Obtain the Item Finder", done: false },
            { id: "emerald-collectables-8", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-88
        ],
        "emerald-thms": [
            {
                id: "emerald-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "emerald-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "emerald-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "emerald-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "emerald-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "emerald-thms-1-e", text: "HM05: Flash", done: false },
                    { id: "emerald-thms-1-f", text: "HM06: Whirlpool", done: false },
                    { id: "emerald-thms-1-g", text: "HM07: Waterfall", done: false },
                ]
            },
            { id: "emerald-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        emerald: [
            {
                id: 1,
                name: "Treecko",
                img: "imgs/gen3/emerald/normal/normal/252.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/252.png"
            },
            {
                id: 2,
                name: "Grovyle",
                img: "imgs/gen3/emerald/normal/normal/253.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/253.png"
            },
            {
                id: 3,
                name: "Sceptile",
                img: "imgs/gen3/emerald/normal/normal/254.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/254.png"
            },
            {
                id: 4,
                name: "Torchic",
                img: "imgs/gen3/emerald/normal/normal/255.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/255.png"
            },
            {
                id: 5,
                name: "Combusken",
                img: "imgs/gen3/emerald/normal/normal/256.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/256.png"
            },
            {
                id: 6,
                name: "Blaziken",
                img: "imgs/gen3/emerald/normal/normal/257.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/257.png"
            },
            {
                id: 7,
                name: "Mudkip",
                img: "imgs/gen3/emerald/normal/normal/258.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/258.png"
            },
            {
                id: 8,
                name: "Marshtomp",
                img: "imgs/gen3/emerald/normal/normal/259.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/259.png"
            },
            {
                id: 9,
                name: "Swampert",
                img: "imgs/gen3/emerald/normal/normal/260.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/260.png"
            },
            {
                id: 10,
                name: "Poochyena",
                img: "imgs/gen3/emerald/normal/normal/261.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/261.png"
            },
            {
                id: 11,
                name: "Mightyena",
                img: "imgs/gen3/emerald/normal/normal/262.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/262.png"
            },
            {
                id: 12,
                name: "Zigzagoon",
                img: "imgs/gen3/emerald/normal/normal/263.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/263.png"
            },
            {
                id: 13,
                name: "Linoone",
                img: "imgs/gen3/emerald/normal/normal/264.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/264.png"
            },
            {
                id: 14,
                name: "Wurmple",
                img: "imgs/gen3/emerald/normal/normal/265.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/265.png"
            },
            {
                id: 15,
                name: "Silcoon",
                img: "imgs/gen3/emerald/normal/normal/266.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/266.png"
            },
            {
                id: 16,
                name: "Beautifly",
                img: "imgs/gen3/emerald/normal/normal/267.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/267.png"
            },
            {
                id: 17,
                name: "Cascoon",
                img: "imgs/gen3/emerald/normal/normal/268.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/268.png"
            },
            {
                id: 18,
                name: "Dustox",
                img: "imgs/gen3/emerald/normal/normal/269.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/269.png"
            },
            {
                id: 19,
                name: "Lotad",
                img: "imgs/gen3/emerald/normal/normal/270.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/270.png"
            },
            {
                id: 20,
                name: "Lombre",
                img: "imgs/gen3/emerald/normal/normal/271.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/271.png"
            },
            {
                id: 21,
                name: "Ludicolo",
                img: "imgs/gen3/emerald/normal/normal/272.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/272.png"
            },
            {
                id: 22,
                name: "Seedot",
                img: "imgs/gen3/emerald/normal/normal/273.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/273.png"
            },
            {
                id: 23,
                name: "Nuzleaf",
                img: "imgs/gen3/emerald/normal/normal/274.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/274.png"
            },
            {
                id: 24,
                name: "Shiftry",
                img: "imgs/gen3/emerald/normal/normal/275.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/275.png"
            },
            {
                id: 25,
                name: "Taillow",
                img: "imgs/gen3/emerald/normal/normal/276.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/276.png"
            },
            {
                id: 26,
                name: "Swellow",
                img: "imgs/gen3/emerald/normal/normal/277.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/277.png"
            },
            {
                id: 27,
                name: "Wingull",
                img: "imgs/gen3/emerald/normal/normal/278.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/278.png"
            },
            {
                id: 28,
                name: "Pelipper",
                img: "imgs/gen3/emerald/normal/normal/279.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/279.png"
            },
            {
                id: 29,
                name: "Ralts",
                img: "imgs/gen3/emerald/normal/normal/280.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/280.png"
            },
            {
                id: 30,
                name: "Kirlia",
                img: "imgs/gen3/emerald/normal/normal/281.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/281.png"
            },
            {
                id: 31,
                name: "Gardevoir",
                img: "imgs/gen3/emerald/normal/normal/282.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/282.png"
            },
            {
                id: 32,
                name: "Surskit",
                img: "imgs/gen3/emerald/normal/normal/283.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/283.png"
            },
            {
                id: 33,
                name: "Masquerain",
                img: "imgs/gen3/emerald/normal/normal/284.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/284.png"
            },
            {
                id: 34,
                name: "Shroomish",
                img: "imgs/gen3/emerald/normal/normal/285.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/285.png"
            },
            {
                id: 35,
                name: "Breloom",
                img: "imgs/gen3/emerald/normal/normal/286.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/286.png"
            },
            {
                id: 36,
                name: "Slakoth",
                img: "imgs/gen3/emerald/normal/normal/287.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/287.png"
            },
            {
                id: 37,
                name: "Vigoroth",
                img: "imgs/gen3/emerald/normal/normal/288.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/288.png"
            },
            {
                id: 38,
                name: "Slaking",
                img: "imgs/gen3/emerald/normal/normal/289.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/289.png"
            },
            {
                id: 39,
                name: "Abra",
                img: "imgs/gen3/emerald/normal/normal/063.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/063.png"
            },
            {
                id: 40,
                name: "Kadabra",
                img: "imgs/gen3/emerald/normal/normal/064.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/064.png"
            },
            {
                id: 41,
                name: "Alakazam",
                img: "imgs/gen3/emerald/normal/normal/065.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/065.png"
            },
            {
                id: 42,
                name: "Nincada",
                img: "imgs/gen3/emerald/normal/normal/290.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/290.png"
            },
            {
                id: 43,
                name: "Ninjask",
                img: "imgs/gen3/emerald/normal/normal/291.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/291.png"
            },
            {
                id: 44,
                name: "Shedinja",
                img: "imgs/gen3/emerald/normal/normal/292.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/292.png"
            },
            {
                id: 45,
                name: "Whismur",
                img: "imgs/gen3/emerald/normal/normal/293.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/293.png"
            },
            {
                id: 46,
                name: "Loudred",
                img: "imgs/gen3/emerald/normal/normal/294.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/294.png"
            },
            {
                id: 47,
                name: "Exploud",
                img: "imgs/gen3/emerald/normal/normal/295.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/295.png"
            },
            {
                id: 48,
                name: "Makuhita",
                img: "imgs/gen3/emerald/normal/normal/296.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/296.png"
            },
            {
                id: 49,
                name: "Hariyama",
                img: "imgs/gen3/emerald/normal/normal/297.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/297.png"
            },
            {
                id: 50,
                name: "Goldeen",
                img: "imgs/gen3/emerald/normal/normal/118.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/118.png"
            },
            {
                id: 51,
                name: "Seaking",
                img: "imgs/gen3/emerald/normal/normal/119.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/119.png"
            },
            {
                id: 52,
                name: "Magikarp",
                img: "imgs/gen3/emerald/normal/normal/129.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/129.png"
            },
            {
                id: 53,
                name: "Gyarados",
                img: "imgs/gen3/emerald/normal/normal/130.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/130.png"
            },
            {
                id: 54,
                name: "Azurill",
                img: "imgs/gen3/emerald/normal/normal/298.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/298.png"
            },
            {
                id: 55,
                name: "Marill",
                img: "imgs/gen3/emerald/normal/normal/183.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/183.png"
            },
            {
                id: 56,
                name: "Azumarill",
                img: "imgs/gen3/emerald/normal/normal/184.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/184.png"
            },
            {
                id: 57,
                name: "Geodude",
                img: "imgs/gen3/emerald/normal/normal/074.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/074.png"
            },
            {
                id: 58,
                name: "Graveler",
                img: "imgs/gen3/emerald/normal/normal/075.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/075.png"
            },
            {
                id: 59,
                name: "Golem",
                img: "imgs/gen3/emerald/normal/normal/076.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/076.png"
            },
            {
                id: 60,
                name: "Nosepass",
                img: "imgs/gen3/emerald/normal/normal/299.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/299.png"
            },
            {
                id: 61,
                name: "Skitty",
                img: "imgs/gen3/emerald/normal/normal/300.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/300.png"
            },
            {
                id: 62,
                name: "Delcatty",
                img: "imgs/gen3/emerald/normal/normal/301.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/301.png"
            },
            {
                id: 63,
                name: "Zubat",
                img: "imgs/gen3/emerald/normal/normal/041.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/041.png"
            },
            {
                id: 64,
                name: "Golbat",
                img: "imgs/gen3/emerald/normal/normal/042.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/042.png"
            },
            {
                id: 65,
                name: "Crobat",
                img: "imgs/gen3/emerald/normal/normal/169.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/169.png"
            },
            {
                id: 66,
                name: "Tentacool",
                img: "imgs/gen3/emerald/normal/normal/072.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/072.png"
            },
            {
                id: 67,
                name: "Tentacruel",
                img: "imgs/gen3/emerald/normal/normal/073.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/073.png"
            },
            {
                id: 68,
                name: "Sableye",
                img: "imgs/gen3/emerald/normal/normal/302.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/302.png"
            },
            {
                id: 69,
                name: "Mawile",
                img: "imgs/gen3/emerald/normal/normal/303.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/303.png"
            },
            {
                id: 70,
                name: "Aron",
                img: "imgs/gen3/emerald/normal/normal/304.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/304.png"
            },
            {
                id: 71,
                name: "Lairon",
                img: "imgs/gen3/emerald/normal/normal/305.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/305.png"
            },
            {
                id: 72,
                name: "Aggron",
                img: "imgs/gen3/emerald/normal/normal/306.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/306.png"
            },
            {
                id: 73,
                name: "Machop",
                img: "imgs/gen3/emerald/normal/normal/066.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/066.png"
            },
            {
                id: 74,
                name: "Machoke",
                img: "imgs/gen3/emerald/normal/normal/067.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/067.png"
            },
            {
                id: 75,
                name: "Machamp",
                img: "imgs/gen3/emerald/normal/normal/068.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/068.png"
            },
            {
                id: 76,
                name: "Meditite",
                img: "imgs/gen3/emerald/normal/normal/307.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/307.png"
            },
            {
                id: 77,
                name: "Medicham",
                img: "imgs/gen3/emerald/normal/normal/308.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/308.png"
            },
            {
                id: 78,
                name: "Electrike",
                img: "imgs/gen3/emerald/normal/normal/309.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/309.png"
            },
            {
                id: 79,
                name: "Manectric",
                img: "imgs/gen3/emerald/normal/normal/310.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/310.png"
            },
            {
                id: 80,
                name: "Plusle",
                img: "imgs/gen3/emerald/normal/normal/311.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/311.png"
            },
            {
                id: 81,
                name: "Minun",
                img: "imgs/gen3/emerald/normal/normal/312.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/312.png"
            },
            {
                id: 82,
                name: "Magnemite",
                img: "imgs/gen3/emerald/normal/normal/081.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/081.png"
            },
            {
                id: 83,
                name: "Magneton",
                img: "imgs/gen3/emerald/normal/normal/082.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/082.png"
            },
            {
                id: 84,
                name: "Voltorb",
                img: "imgs/gen3/emerald/normal/normal/100.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/100.png"
            },
            {
                id: 85,
                name: "Electrode",
                img: "imgs/gen3/emerald/normal/normal/101.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/101.png"
            },
            {
                id: 86,
                name: "Volbeat",
                img: "imgs/gen3/emerald/normal/normal/313.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/313.png"
            },
            {
                id: 87,
                name: "Illumise",
                img: "imgs/gen3/emerald/normal/normal/314.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/314.png"
            },
            {
                id: 88,
                name: "Oddish",
                img: "imgs/gen3/emerald/normal/normal/043.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/043.png"
            },
            {
                id: 89,
                name: "Gloom",
                img: "imgs/gen3/emerald/normal/normal/044.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/044.png"
            },
            {
                id: 90,
                name: "Vileplume",
                img: "imgs/gen3/emerald/normal/normal/045.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/045.png"
            },
            {
                id: 91,
                name: "Bellossom",
                img: "imgs/gen3/emerald/normal/normal/182.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/182.png"
            },
            {
                id: 92,
                name: "Doduo",
                img: "imgs/gen3/emerald/normal/normal/084.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/084.png"
            },
            {
                id: 93,
                name: "Dodrio",
                img: "imgs/gen3/emerald/normal/normal/085.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/085.png"
            },
            {
                id: 94,
                name: "Roselia",
                img: "imgs/gen3/emerald/normal/normal/315.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/315.png"
            },
            {
                id: 95,
                name: "Gulpin",
                img: "imgs/gen3/emerald/normal/normal/316.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/316.png"
            },
            {
                id: 96,
                name: "Swalot",
                img: "imgs/gen3/emerald/normal/normal/317.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/317.png"
            },
            {
                id: 97,
                name: "Carvanha",
                img: "imgs/gen3/emerald/normal/normal/318.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/318.png"
            },
            {
                id: 98,
                name: "Sharpedo",
                img: "imgs/gen3/emerald/normal/normal/319.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/319.png"
            },
            {
                id: 99,
                name: "Wailmer",
                img: "imgs/gen3/emerald/normal/normal/320.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/320.png"
            },
            {
                id: 100,
                name: "Wailord",
                img: "imgs/gen3/emerald/normal/normal/321.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/321.png"
            },
            {
                id: 101,
                name: "Numel",
                img: "imgs/gen3/emerald/normal/normal/322.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/322.png"
            },
            {
                id: 102,
                name: "Camerupt",
                img: "imgs/gen3/emerald/normal/normal/323.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/323.png"
            },
            {
                id: 103,
                name: "Slugma",
                img: "imgs/gen3/emerald/normal/normal/218.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/218.png"
            },
            {
                id: 104,
                name: "Magcargo",
                img: "imgs/gen3/emerald/normal/normal/219.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/219.png"
            },
            {
                id: 105,
                name: "Torkoal",
                img: "imgs/gen3/emerald/normal/normal/324.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/324.png"
            },
            {
                id: 106,
                name: "Grimer",
                img: "imgs/gen3/emerald/normal/normal/088.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/088.png"
            },
            {
                id: 107,
                name: "Muk",
                img: "imgs/gen3/emerald/normal/normal/089.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/089.png"
            },
            {
                id: 108,
                name: "Koffing",
                img: "imgs/gen3/emerald/normal/normal/109.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/109.png"
            },
            {
                id: 109,
                name: "Weezing",
                img: "imgs/gen3/emerald/normal/normal/110.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/110.png"
            },
            {
                id: 110,
                name: "Spoink",
                img: "imgs/gen3/emerald/normal/normal/325.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/325.png"
            },
            {
                id: 111,
                name: "Grumpig",
                img: "imgs/gen3/emerald/normal/normal/326.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/326.png"
            },
            {
                id: 112,
                name: "Sandshrew",
                img: "imgs/gen3/emerald/normal/normal/027.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/027.png"
            },
            {
                id: 113,
                name: "Sandslash",
                img: "imgs/gen3/emerald/normal/normal/028.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/028.png"
            },
            {
                id: 114,
                name: "Spinda",
                img: "imgs/gen3/emerald/normal/normal/327.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/327.png"
            },
            {
                id: 115,
                name: "Skarmory",
                img: "imgs/gen3/emerald/normal/normal/227.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/227.png"
            },
            {
                id: 116,
                name: "Trapinch",
                img: "imgs/gen3/emerald/normal/normal/328.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/328.png"
            },
            {
                id: 117,
                name: "Vibrava",
                img: "imgs/gen3/emerald/normal/normal/329.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/329.png"
            },
            {
                id: 118,
                name: "Flygon",
                img: "imgs/gen3/emerald/normal/normal/330.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/330.png"
            },
            {
                id: 119,
                name: "Cacnea",
                img: "imgs/gen3/emerald/normal/normal/331.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/331.png"
            },
            {
                id: 120,
                name: "Cacturne",
                img: "imgs/gen3/emerald/normal/normal/332.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/332.png"
            },
            {
                id: 121,
                name: "Swablu",
                img: "imgs/gen3/emerald/normal/normal/333.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/333.png"
            },
            {
                id: 122,
                name: "Altaria",
                img: "imgs/gen3/emerald/normal/normal/334.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/334.png"
            },
            {
                id: 123,
                name: "Zangoose",
                img: "imgs/gen3/emerald/normal/normal/335.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/335.png"
            },
            {
                id: 124,
                name: "Seviper",
                img: "imgs/gen3/emerald/normal/normal/336.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/336.png"
            },
            {
                id: 125,
                name: "Lunatone",
                img: "imgs/gen3/emerald/normal/normal/337.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/337.png"
            },
            {
                id: 126,
                name: "Solrock",
                img: "imgs/gen3/emerald/normal/normal/338.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/338.png"
            },
            {
                id: 127,
                name: "Barboach",
                img: "imgs/gen3/emerald/normal/normal/339.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/339.png"
            },
            {
                id: 128,
                name: "Whiscash",
                img: "imgs/gen3/emerald/normal/normal/340.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/340.png"
            },
            {
                id: 129,
                name: "Corphish",
                img: "imgs/gen3/emerald/normal/normal/341.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/341.png"
            },
            {
                id: 130,
                name: "Crawdaunt",
                img: "imgs/gen3/emerald/normal/normal/342.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/342.png"
            },
            {
                id: 131,
                name: "Baltoy",
                img: "imgs/gen3/emerald/normal/normal/343.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/343.png"
            },
            {
                id: 132,
                name: "Claydol",
                img: "imgs/gen3/emerald/normal/normal/344.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/344.png"
            },
            {
                id: 133,
                name: "Lileep",
                img: "imgs/gen3/emerald/normal/normal/345.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/345.png"
            },
            {
                id: 134,
                name: "Cradily",
                img: "imgs/gen3/emerald/normal/normal/346.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/346.png"
            },
            {
                id: 135,
                name: "Anorith",
                img: "imgs/gen3/emerald/normal/normal/347.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/347.png"
            },
            {
                id: 136,
                name: "Armaldo",
                img: "imgs/gen3/emerald/normal/normal/348.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/348.png"
            },
            {
                id: 137,
                name: "Igglybuff",
                img: "imgs/gen3/emerald/normal/normal/174.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/174.png"
            },
            {
                id: 138,
                name: "Jigglypuff",
                img: "imgs/gen3/emerald/normal/normal/039.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/039.png"
            },
            {
                id: 139,
                name: "Wigglytuff",
                img: "imgs/gen3/emerald/normal/normal/040.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/040.png"
            },
            {
                id: 140,
                name: "Feebas",
                img: "imgs/gen3/emerald/normal/normal/349.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/349.png"
            },
            {
                id: 141,
                name: "Milotic",
                img: "imgs/gen3/emerald/normal/normal/350.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/350.png"
            },
            {
                id: 142,
                name: "Castform",
                img: "imgs/gen3/emerald/normal/normal/351.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/351.png"
            },
            {
                id: 143,
                name: "Staryu",
                img: "imgs/gen3/emerald/normal/normal/120.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/120.png"
            },
            {
                id: 144,
                name: "Starmie",
                img: "imgs/gen3/emerald/normal/normal/121.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/121.png"
            },
            {
                id: 145,
                name: "Kecleon",
                img: "imgs/gen3/emerald/normal/normal/352.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/352.png"
            },
            {
                id: 146,
                name: "Shuppet",
                img: "imgs/gen3/emerald/normal/normal/353.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/353.png"
            },
            {
                id: 147,
                name: "Banette",
                img: "imgs/gen3/emerald/normal/normal/354.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/354.png"
            },
            {
                id: 148,
                name: "Duskull",
                img: "imgs/gen3/emerald/normal/normal/355.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/355.png"
            },
            {
                id: 149,
                name: "Dusclops",
                img: "imgs/gen3/emerald/normal/normal/356.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/356.png"
            },
            {
                id: 150,
                name: "Tropius",
                img: "imgs/gen3/emerald/normal/normal/357.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/357.png"
            },
            {
                id: 151,
                name: "Chimecho",
                img: "imgs/gen3/emerald/normal/normal/358.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/358.png"
            },
            {
                id: 152,
                name: "Absol",
                img: "imgs/gen3/emerald/normal/normal/359.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/359.png"
            },
            {
                id: 153,
                name: "Vulpix",
                img: "imgs/gen3/emerald/normal/normal/037.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/037.png"
            },
            {
                id: 154,
                name: "Ninetales",
                img: "imgs/gen3/emerald/normal/normal/038.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/038.png"
            },
            {
                id: 155,
                name: "Pichu",
                img: "imgs/gen3/emerald/normal/normal/172.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/172.png"
            },
            {
                id: 156,
                name: "Pikachu",
                img: "imgs/gen3/emerald/normal/normal/025.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/025.png"
            },
            {
                id: 157,
                name: "Raichu",
                img: "imgs/gen3/emerald/normal/normal/026.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/026.png"
            },
            {
                id: 158,
                name: "Psyduck",
                img: "imgs/gen3/emerald/normal/normal/054.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/054.png"
            },
            {
                id: 159,
                name: "Golduck",
                img: "imgs/gen3/emerald/normal/normal/055.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/055.png"
            },
            {
                id: 160,
                name: "Wynaut",
                img: "imgs/gen3/emerald/normal/normal/360.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/360.png"
            },
            {
                id: 161,
                name: "Wobbuffet",
                img: "imgs/gen3/emerald/normal/normal/202.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/202.png"
            },
            {
                id: 162,
                name: "Natu",
                img: "imgs/gen3/emerald/normal/normal/177.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/177.png"
            },
            {
                id: 163,
                name: "Xatu",
                img: "imgs/gen3/emerald/normal/normal/178.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/178.png"
            },
            {
                id: 164,
                name: "Girafarig",
                img: "imgs/gen3/emerald/normal/normal/203.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/203.png"
            },
            {
                id: 165,
                name: "Phanpy",
                img: "imgs/gen3/emerald/normal/normal/231.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/231.png"
            },
            {
                id: 166,
                name: "Donphan",
                img: "imgs/gen3/emerald/normal/normal/232.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/232.png"
            },
            {
                id: 167,
                name: "Pinsir",
                img: "imgs/gen3/emerald/normal/normal/127.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/127.png"
            },
            {
                id: 168,
                name: "Heracross",
                img: "imgs/gen3/emerald/normal/normal/214.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/214.png"
            },
            {
                id: 169,
                name: "Rhyhorn",
                img: "imgs/gen3/emerald/normal/normal/111.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/111.png"
            },
            {
                id: 170,
                name: "Rhydon",
                img: "imgs/gen3/emerald/normal/normal/112.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/112.png"
            },
            {
                id: 171,
                name: "Snorunt",
                img: "imgs/gen3/emerald/normal/normal/361.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/361.png"
            },
            {
                id: 172,
                name: "Glalie",
                img: "imgs/gen3/emerald/normal/normal/362.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/362.png"
            },
            {
                id: 173,
                name: "Spheal",
                img: "imgs/gen3/emerald/normal/normal/363.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/363.png"
            },
            {
                id: 174,
                name: "Sealeo",
                img: "imgs/gen3/emerald/normal/normal/364.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/364.png"
            },
            {
                id: 175,
                name: "Walrein",
                img: "imgs/gen3/emerald/normal/normal/365.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/365.png"
            },
            {
                id: 176,
                name: "Clamperl",
                img: "imgs/gen3/emerald/normal/normal/366.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/366.png"
            },
            {
                id: 177,
                name: "Huntail",
                img: "imgs/gen3/emerald/normal/normal/367.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/367.png"
            },
            {
                id: 178,
                name: "Gorebyss",
                img: "imgs/gen3/emerald/normal/normal/368.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/368.png"
            },
            {
                id: 179,
                name: "Relicanth",
                img: "imgs/gen3/emerald/normal/normal/369.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/369.png"
            },
            {
                id: 180,
                name: "Corsola",
                img: "imgs/gen3/emerald/normal/normal/222.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/222.png"
            },
            {
                id: 181,
                name: "Chinchou",
                img: "imgs/gen3/emerald/normal/normal/170.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/170.png"
            },
            {
                id: 182,
                name: "Lanturn",
                img: "imgs/gen3/emerald/normal/normal/171.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/171.png"
            },
            {
                id: 183,
                name: "Luvdisc",
                img: "imgs/gen3/emerald/normal/normal/370.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/370.png"
            },
            {
                id: 184,
                name: "Horsea",
                img: "imgs/gen3/emerald/normal/normal/116.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/116.png"
            },
            {
                id: 185,
                name: "Seadra",
                img: "imgs/gen3/emerald/normal/normal/117.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/117.png"
            },
            {
                id: 186,
                name: "Kingdra",
                img: "imgs/gen3/emerald/normal/normal/230.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/230.png"
            },
            {
                id: 187,
                name: "Bagon",
                img: "imgs/gen3/emerald/normal/normal/371.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/371.png"
            },
            {
                id: 188,
                name: "Shelgon",
                img: "imgs/gen3/emerald/normal/normal/372.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/372.png"
            },
            {
                id: 189,
                name: "Salamence",
                img: "imgs/gen3/emerald/normal/normal/373.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/373.png"
            },
            {
                id: 190,
                name: "Beldum",
                img: "imgs/gen3/emerald/normal/normal/374.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/374.png"
            },
            {
                id: 191,
                name: "Metang",
                img: "imgs/gen3/emerald/normal/normal/375.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/375.png"
            },
            {
                id: 192,
                name: "Metagross",
                img: "imgs/gen3/emerald/normal/normal/376.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/376.png"
            },
            {
                id: 193,
                name: "Regirock",
                img: "imgs/gen3/emerald/normal/normal/377.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/377.png"
            },
            {
                id: 194,
                name: "Regice",
                img: "imgs/gen3/emerald/normal/normal/378.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/378.png"
            },
            {
                id: 195,
                name: "Registeel",
                img: "imgs/gen3/emerald/normal/normal/379.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/379.png"
            },
            {
                id: 196,
                name: "Latias",
                img: "imgs/gen3/emerald/normal/normal/380.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/380.png"
            },
            {
                id: 197,
                name: "Latios",
                img: "imgs/gen3/emerald/normal/normal/381.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/381.png"
            },
            {
                id: 198,
                name: "Kyogre",
                img: "imgs/gen3/emerald/normal/normal/382.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/382.png"
            },
            {
                id: 199,
                name: "Groudon",
                img: "imgs/gen3/emerald/normal/normal/383.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/383.png"
            },
            {
                id: 200,
                name: "Rayquaza",
                img: "imgs/gen3/emerald/normal/normal/384.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/384.png"
            },
            {
                id: 201,
                name: "Jirachi",
                img: "imgs/gen3/emerald/normal/normal/385.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/385.png",
                mythical: true
            },
            {
                id: 202,
                name: "Deoxys",
                img: "imgs/gen3/emerald/normal/normal/386.png",
                imgS: "imgs/gen3/emerald/shiny/shiny/386.png",
                mythical: true
            }
        ]
    },
});