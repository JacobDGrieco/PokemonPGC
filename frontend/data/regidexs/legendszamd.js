const game = "legendsza";
const sub = game + "md";
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const lumioseDex = (...args) => _dex(game, "regional", ...args);
const mdDex = (...args) => _dex(game + "md", "regional", ...args);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[sub]: "Mega Dimensions Dex",
});
PPGC.register({
	dex: {
		[sub]: [
			{ id: 1, name: "Mankey", img: baseSprite(56), imgS: shinySprite(56), },
			{ id: 2, name: "Primeape", img: baseSprite(57), imgS: shinySprite(57), },
			{ id: 3, name: "Annihilape", img: baseSprite(979), imgS: shinySprite(979), },
			{
				id: 4, name: "Meowth", img: baseSprite(52), imgS: shinySprite(52), forms: [
					{ name: "Kantonian", img: baseSprite(52), imgS: shinySprite(52), },
					{ name: "Alolan", img: baseSprite("052-a"), imgS: shinySprite("052-a"), },
					{ name: "Galarian", img: baseSprite("052-g"), imgS: shinySprite("052-g"), },
				],
			},
			{
				id: 5, name: "Persian", img: baseSprite(53), imgS: shinySprite(53), forms: [
					{ name: "Kantonian", img: baseSprite(53), imgS: shinySprite(53), },
					{ name: "Alolan", img: baseSprite("053-a"), imgS: shinySprite("053-a"), },
				],
			},


			{
				id: 7, name: "Farfetch'd", img: baseSprite(83), imgS: shinySprite(83), forms: [
					{ name: "Kantonian", img: baseSprite(83), imgS: shinySprite(83), },
					{ name: "Galarian", img: baseSprite("083-g"), imgS: shinySprite("083-g"), },
				],
			},
			{ id: 8, name: "Sirfetch'd", img: baseSprite(865), imgS: shinySprite(865), },
			{ id: 9, name: "Cubone", img: baseSprite(104), imgS: shinySprite(104), },
			{
				id: 10, name: "Marowak", img: baseSprite(105), imgS: shinySprite(105), forms: [
					{ name: "Kantonian", img: baseSprite(105), imgS: shinySprite(105), },
					{ name: "Alolan", img: baseSprite("105-a"), imgS: shinySprite("105-a"), },
				],
			},

			{ id: 35, name: "Gimmighoul", img: baseSprite(999), imgS: shinySprite(999), },
			{ id: 36, name: "Gholdengo", img: baseSprite(1000), imgS: shinySprite(1000), },


			{ id: 45, name: "Mudkip", img: baseSprite(258), imgS: shinySprite(258), maxStatus: "shiny", },
			{ id: 46, name: "Marshtomp", img: baseSprite(259), imgS: shinySprite(259), maxStatus: "shiny", },
			{ id: 47, name: "Swampert", img: baseSprite(260), imgS: shinySprite(260), maxStatus: "shiny", },


			{ id: 62, name: "Wimpod", img: baseSprite(767), imgS: shinySprite(767), maxStatus: "shiny", },
			{ id: 63, name: "Golisopod", img: baseSprite(768), imgS: shinySprite(768), maxStatus: "shiny", },


			{ id: 73, name: "Rookidee", img: baseSprite(821), imgS: shinySprite(821), maxStatus: "shiny", },
			{ id: 74, name: "Corvisquire", img: baseSprite(822), imgS: shinySprite(822), maxStatus: "shiny", },
			{ id: 75, name: "Corviknight", img: baseSprite(823), imgS: shinySprite(823), maxStatus: "shiny", },


			{
				id: 81, name: "Starly", img: baseSprite(396), imgS: shinySprite(396), forms: [
					{ name: "Male", img: baseSprite(396), imgS: shinySprite(396), },
					{ name: "Female", img: baseSprite("396-f"), imgS: shinySprite("396-f"), },
				],
			},
			{
				id: 82, name: "Staravia", img: baseSprite(397), imgS: shinySprite(397), forms: [
					{ name: "Male", img: baseSprite(397), imgS: shinySprite(397), },
					{ name: "Female", img: baseSprite("397-f"), imgS: shinySprite("397-f"), },
				],
			},
			{
				id: 83, name: "Staraptor", img: baseSprite(398), imgS: shinySprite(398), forms: [
					{ name: "Male", img: baseSprite(398), imgS: shinySprite(398), },
					{ name: "Female", img: baseSprite("398-f"), imgS: shinySprite("398-f"), },
				],
			},
			{ id: 84, name: "Spoink", img: baseSprite(325), imgS: shinySprite(325), maxStatus: "shiny", },
			{ id: 85, name: "Grumpig", img: baseSprite(326), imgS: shinySprite(326), maxStatus: "shiny", },


			{
				id: 92, name: "Gulpin", img: baseSprite(316), imgS: shinySprite(316), maxStatus: "shiny", forms: [
					{ name: "Male", img: baseSprite(316), imgS: shinySprite(316), maxStatus: "shiny", },
					{ name: "Female", img: baseSprite("316-f"), imgS: shinySprite("316-f"), maxStatus: "shiny", },
				],
			},
			{
				id: 93, name: "Swalot", img: baseSprite(317), imgS: shinySprite(317), maxStatus: "shiny", forms: [
					{ name: "Male", img: baseSprite(317), imgS: shinySprite(317), maxStatus: "shiny", },
					{ name: "Female", img: baseSprite("317-f"), imgS: shinySprite("317-f"), maxStatus: "shiny", },
				],
			},
			{
				id: 94, name: "Zubat", img: baseSprite(41), imgS: shinySprite(41), forms: [
					{ name: "Male", img: baseSprite(41), imgS: shinySprite(41), },
					{ name: "Female", img: baseSprite("041-f"), imgS: shinySprite("041-f"), },
				],
			},
			{
				id: 95, name: "Golbat", img: baseSprite(42), imgS: shinySprite(42), forms: [
					{ name: "Male", img: baseSprite(42), imgS: shinySprite(42), },
					{ name: "Female", img: baseSprite("042-f"), imgS: shinySprite("042-f"), },
				],
			},
			{ id: 96, name: "Crobat", img: baseSprite(169), imgS: shinySprite(169), },

		]
	}
});