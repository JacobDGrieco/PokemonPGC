(() => {
	const GAME_KEYS = ["legendsza"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "tops", label: "Tops" },
		{ id: "bottoms", label: "Bottoms" },
		{ id: "all-in-one", label: "All-in-One" },
		{ id: "headwear", label: "Headwear" },
		{ id: "eyewear", label: "Eyewear" },
		{ id: "gloves", label: "Gloves" },
		{ id: "legwear", label: "Legwear" },
		{ id: "footwear", label: "Footwear" },
		{ id: "satchels", label: "Satchels" },
		{ id: "earrings", label: "Earrings" },
	];

	// Fashion data authoring format:
	// - item.id stays a slug (e.g. "boater")
	// - item.forms[].id is numeric (e.g. 1), and helpers format it to "hats:boater:001"
	const ITEMS_BY_CATEGORY = {
		"tops": [
			{
				id: "blouson-and-v-neck", name: "Blouson & V-Neck Set", forms: [
					{ id: 1, name: "Team MZ Logo", startGame: true },
					{ id: 2, name: "Scizor Orange" },
					{ id: 3, name: "Scizor Yellow" },
					{ id: 4, name: "Scizor White" },
					{ id: 5, name: "Two-Tone Black" },
					{ id: 6, name: "Two-Tone Purple" },
					{ id: 7, name: "Two-Tone Green" },
					{ id: 8, name: "Signature Black" },
					{ id: 9, name: "Signature White" },
					{ id: 10, name: "Zigzag Red" },
					{ id: 11, name: "Zigzag Blue" },
				],
			},
			{
				id: "blouson-and-off-shoulder", name: "Blouson & Off-Shoulder Set", forms: [
					{ id: 1, name: "Team MZ Logo" },
					{ id: 2, name: "Scary Green" },
					{ id: 3, name: "Scary Orange" },
					{ id: 4, name: "Scary Purple" },
					{ id: 5, name: "Aromatic Pink", },
					{ id: 6, name: "Aromatic Purple", },
					{ id: 7, name: "Aromatic Orange", },
					{ id: 8, name: "White Ink" },
					{ id: 9, name: "Black Ink" },
					{ id: 10, name: "Red Spray" },
					{ id: 11, name: "Blue Spray" },
				],
			},
			{
				id: "puffer-vest-and-hoodie", name: "Puffer Vest & Hoodie Set", forms: [
					{ id: 1, name: "Green Gradient" },
					{ id: 2, name: "Pink Gradient" },
					{ id: 3, name: "Red Gradient" },
					{ id: 4, name: "Yellow Gradient", },
					{ id: 5, name: "Monochrome Mosaic", },
					{ id: 6, name: "Rainy Mosaic" },
					{ id: 7, name: "Sunny Mosaic" },
					{ id: 8, name: "Two-Tone Red" },
					{ id: 9, name: "Two-Tone Blue" },
					{ id: 10, name: "Two-Tone Green", },
					{ id: 11, name: "Two-Tone Yellow", },
					{ id: 12, name: "Two-Tone Purple", },
					{ id: 13, name: "Red Poke Ball" },
					{ id: 14, name: "Purple Poke Ball", },
					{ id: 15, name: "Pink Poke Ball", },
					{ id: 16, name: "Black Poke Ball", },
					{ id: 17, name: "Vivid Black" },
					{ id: 18, name: "Vivid White" },
					{ id: 19, name: "Blue Kiss" },
					{ id: 20, name: "Red Kiss" },
				],
			},
			{
				id: "cardigan-and-shirt", name: "Cardigan & Shirt Set", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Purple" },
					{ id: 6, name: "Academic Black" },
					{ id: 7, name: "Academic Gray" },
					{ id: 8, name: "Academic White" },
					{ id: 9, name: "Academic Navy" },
					{ id: 10, name: "Scatterdust Blue" },
					{ id: 11, name: "Scatterdust Tan" },
					{ id: 12, name: "Scatterdust Ivory" },
					{ id: 13, name: "Checkered Green" },
					{ id: 14, name: "Checkered Navy" },
					{ id: 15, name: "Checkered Red" },
					{ id: 16, name: "Psychic Black" },
					{ id: 17, name: "Psychic White" },
					{ id: 18, name: "Psychic Blue" },
					{ id: 19, name: "Psychic Red" },
				],
			},
			{
				id: "cardigan-and-blouse", name: "Cardigan & Blouse Set", forms: [
					{ id: 1, name: "Flowery White" },
					{ id: 2, name: "Flowery Blue" },
					{ id: 3, name: "Bow-and-Bone Black", },
					{ id: 4, name: "Bow-and-Bone Purple", },
				],
			},
			{
				id: "blazer-and-shirt", name: "Blazer & Shirt Set", forms: [
					{ id: 1, name: "Dark Brown" },
					{ id: 2, name: "Greige" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "Beige" },
					{ id: 5, name: "Black" },
					{ id: 6, name: "Green Windowpane" },
					{ id: 7, name: "Red Windowpane" },
					{ id: 8, name: "BRAVELY Tan" },
					{ id: 9, name: "BRAVELY Gray" },
					{ id: 10, name: "BRAVELY Red" },
				],
			},
			{
				id: "blazer-and-blouse", name: "Blazer & Blouse Set", forms: [
					{ id: 1, name: "Purple Damask" },
					{ id: 2, name: "Green Damask" },
					{ id: 3, name: "Red Damask" },
					{ id: 4, name: "Black Damask" },
				],
			},
			{
				id: "shacket-and-t-shirt", name: "Shacket & T-Shirt Set", forms: [
					{ id: 1, name: "Yellow / Olive" },
					{ id: 2, name: "White / Yellow" },
					{ id: 3, name: "Orange / Blue" },
					{ id: 4, name: "Blue / Beige" },
					{ id: 5, name: "Navy / Red" },
					{ id: 6, name: "Indigo Denim" },
					{ id: 7, name: "Blue Denim" },
					{ id: 8, name: "Black Denim" },
					{ id: 9, name: "Bleached Denim" },
					{ id: 10, name: "Green Stripes" },
					{ id: 11, name: "Blue Stripes" },
					{ id: 12, name: "Red Stripes" },
					{ id: 13, name: "White Graffiti" },
					{ id: 14, name: "Yellow Graffiti" },
					{ id: 15, name: "Red Graffiti" },
				],
			},
			{
				id: "graphic-t-shirt-and-shacket", name: "Graphic T-Shirt & Shacket Set", forms: [
					{ id: 1, name: "Full Metal Cop", },
					{ id: 2, name: "Best Buddy", },
					{ id: 3, name: "F-00" },
				],
			},
			{
				id: "vest-and-ribbon-blouse", name: "Vest & Ribbon Blouse Set", forms: [
					{ id: 1, name: "Wine Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Black" },
					{ id: 5, name: "Gray" },
				],
			},
			{
				id: "sweater-vest-and-blouse", name: "Sweater Vest & Blouse Set", forms: [
					{ id: 1, name: "Argyle Red" },
					{ id: 2, name: "Argyle Blue" },
					{ id: 3, name: "Argyle Green" },
					{ id: 4, name: "Argyle Yellow" },
					{ id: 5, name: "Argyle Orange" },
					{ id: 6, name: "Argyle Purple" },
					{ id: 7, name: "Argyle Pink" },
					{ id: 8, name: "Argyle Black" },
					{ id: 9, name: "Argyle White" },
					{ id: 10, name: "Gogoat Navy" },
					{ id: 11, name: "Gogoat Red" },
					{ id: 12, name: "Gogoat Green" },
					{ id: 13, name: "Gogoat Black" },
					{ id: 14, name: "Gogoat Brown" },
					{ id: 15, name: "Gogoat Blue" },
					{ id: 16, name: "Gogoat Beige" },
					{ id: 17, name: "Black / Red" },
					{ id: 18, name: "Black / Blue" },
					{ id: 19, name: "White / Red" },
					{ id: 20, name: "White / Blue" },
				],
			},
			{
				id: "logo-pullover", name: "Logo Pullover", forms: [
					{ id: 1, name: "Ultramarine" },
					{ id: 2, name: "Lime Yellow" },
					{ id: 3, name: "Taffy Pink" },
				],
			},
			{
				id: "pokemon-print-pullover", name: "Pokémon-Pint Pullover", forms: [
					{ id: 1, name: "Bewear White" },
					{ id: 2, name: "Bewear Black" },
					{ id: 3, name: "Bewear Red" },
				],
			},
			{
				id: "simple-pullover", name: "Simple Pullover", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Navy" },
					{ id: 3, name: "Maroon" },
					{ id: 4, name: "Moss Green" },
					{ id: 5, name: "Ivory" },
					{ id: 6, name: "Light Caramel" },
				],
			},
			{
				id: "leather-mix-pullover", name: "Leather Pullover", forms: [
					{ id: 1, name: "Black Leather" },
					{ id: 2, name: "White Leather" },
				],
			},
			{ id: "poke-ball-pullover", name: "Poke Ball Pullover", },
			{ id: "patterned-pullover", name: "Patterned Pullover", },
			{
				id: "cinematic-pullover", name: "Cinematic Pullover", forms: [
					{ id: 1, name: "Big Charizard 2" },
					{ id: 2, name: "The Sharpedo" },
				],
			},
			{
				id: "two-tone-pullover", name: "Two-Tone Pullover", forms: [
					{ id: 1, name: "Gray / Yellow" },
					{ id: 2, name: "Blue / Orange" },
					{ id: 3, name: "Black / Pink" },
					{ id: 4, name: "Red / Black" },
				],
			},
			{
				id: "sweater-and-shirt", name: "Sweater & Shirt Set", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Green Plaid" },
					{ id: 11, name: "Yellow Plaid" },
					{ id: 12, name: "Red Plaid" },
					{ id: 13, name: "White Plaid" },
					{ id: 14, name: "Brown Plaid" },
					{ id: 15, name: "Fern Meteorites" },
					{ id: 16, name: "Ink Meteorites" },
					{ id: 17, name: "Clay Shippo" },
					{ id: 18, name: "Snow Shippo" },
				],
			},
			{
				id: "two-tone-turtleneck-sweater", name: "Two-Tone Turtleneck Sweater", forms: [
					{ id: 1, name: "Green / Navy", },
					{ id: 2, name: "Black / Red", },
					{ id: 3, name: "Brown / Beige", },
					{ id: 4, name: "Blue / Blue-Gray", },
					{ id: 5, name: "Ocher / Yellow", },
					{ id: 6, name: "Gray / White", },
				],
			},
			{
				id: "elbow-patch-sweater", name: "Elbow-Patch Sweater", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Dark Brown" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Wine Red" },
					{ id: 5, name: "Green" },
				],
			},
			{
				id: "fuzzy-sweater", name: "Fuzzy Sweater", forms: [
					{ id: 1, name: "Black / Gray" },
					{ id: 2, name: "Black / Red" },
					{ id: 3, name: "Navy / Yellow" },
					{ id: 4, name: "Navy / Green" },
					{ id: 5, name: "Gray / White" },
					{ id: 6, name: "Purple / Pink" },
					{ id: 7, name: "White" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "Pale Purple" },
					{ id: 10, name: "Pale Blue" },
				],
			},
			{
				id: "dark-type-peacoat", name: "Dark-Type Peacoat", forms: [
					{ id: 1, name: "Overturning Purple" },
					{ id: 2, name: "Overturning Green" },
				],
			},
			{
				id: "simple-peacoat", name: "Simple Peacoat", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
				],
			},
			{
				id: "plaid-peacoat", name: "Plaid Peacoat", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Gray" },
					{ id: 3, name: "BRAVELY Brown" },
					{ id: 4, name: "BRAVELY Red" },
				],
			},
			{
				id: "dark-type-crop-top", name: "Dark-Type Crop Top Set", forms: [
					{ id: 1, name: "Daunting Black" },
					{ id: 2, name: "Daunting Brown" },
				],
			},
			{
				id: "crop-top", name: "Crop Top Set", forms: [
					{ id: 1, name: "Academic Black" },
					{ id: 2, name: "Academic Blue" },
					{ id: 3, name: "Academic Gray" },
					{ id: 4, name: "Academic White" },
					{ id: 5, name: "Vivid Black" },
					{ id: 6, name: "Vivid White" },
					{ id: 7, name: "Vivid Red" },
					{ id: 8, name: "Vivid Blue" },
				],
			},
			{
				id: "dark-type-jacket", name: "Dark-Type Jacket Set", forms: [
					{ id: 1, name: "Black / Orange" },
					{ id: 2, name: "Blue / Yellow" },
				],
			},
			{
				id: "biker-jacket", name: "Biket Jacket Set", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid White" },
					{ id: 3, name: "Vivid Red" },
					{ id: 4, name: "Vivid Blue" },
					{ id: 5, name: "BRAVELY Tan" },
					{ id: 6, name: "BRAVELY Gray" },
					{ id: 7, name: "BRAVELY Brown" },
					{ id: 8, name: "BRAVELY Red" },
				],
			},
			{
				id: "track-jacket-and-tube-top", name: "Track Jacket & Tube Top Set", forms: [
					{ id: 1, name: "Orange" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Gray" },
				],
			},
			{
				id: "frog-button-jacket", name: "Frog-Button Jacket Set", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Maroon" },
					{ id: 4, name: "Navy" },
					{ id: 5, name: "Traditional Blue" },
					{ id: 6, name: "Traditional Gray" },
					{ id: 7, name: "Traditional Green" },
					{ id: 8, name: "Traditional Beige" },
				],
			},
			{ id: "v-neck-t-shift", name: "V-Neck T-Shirt", startGame: true, },
			{ id: "off-shoulder-shirt", name: "Off-Shoulder Shirt", },
		],
		"bottoms": [
			{
				id: "skinny-jeans", name: "Skinny Jeans Set", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Orange" },
					{ id: 5, name: "Purple" },
					{ id: 6, name: "Pink" },
					{ id: 7, name: "Indigo Denim" },
					{ id: 8, name: "Blue Denim" },
					{ id: 9, name: "Bleached Denim" },
					{ id: 10, name: "Black Denim", startGame: true },
					{ id: 11, name: "Gray Denim" },
					{ id: 12, name: "White Denim" },
					{ id: 13, name: "Vivid Black" },
					{ id: 14, name: "Vivid White" },
					{ id: 15, name: "Vivid Red" },
					{ id: 16, name: "Vivid Blue" },
					{ id: 17, name: "Dark Black" },
					{ id: 18, name: "Dark Navy" },
					{ id: 19, name: "White" },
					{ id: 20, name: "Black" },
					{ id: 21, name: "Distressed Indigo" },
					{ id: 22, name: "Distressed Blue" },
					{ id: 23, name: "Distressed Bleach" },
				],
			},
			{
				id: "wide-leg-pants", name: "Wide-Leg Pants Set", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Orange" },
					{ id: 5, name: "Purple" },
					{ id: 6, name: "Pink" },
					{ id: 7, name: "Indigo Denim" },
					{ id: 8, name: "Blue Denim" },
					{ id: 9, name: "Bleached Denim" },
					{ id: 10, name: "Black Denim" },
					{ id: 11, name: "Gray Denim" },
					{ id: 12, name: "White Denim" },
					{ id: 13, name: "Navy" },
					{ id: 14, name: "Dark Brown" },
					{ id: 15, name: "Maroon" },
					{ id: 16, name: "Black" },
					{ id: 17, name: "Olive" },
					{ id: 18, name: "Light Brown" },
					{ id: 19, name: "Light Beige" },
				],
			},
			{
				id: "kiss-pattern-wide-leg-pants", name: "Kiss-Pattern Wide-Leg Pants Set", forms: [
					{ id: 1, name: "Red Kiss" },
					{ id: 2, name: "Blue Kiss" },
				],
			},
			{
				id: "cargo-pants", name: "Cargo Pants", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Moss Green" },
					{ id: 3, name: "Navy" },
					{ id: 4, name: "Maroon" },
					{ id: 5, name: "Blue-Gray" },
					{ id: 6, name: "Mustard" },
					{ id: 7, name: "Dark Brown" },
					{ id: 8, name: "Vivid Black" },
					{ id: 9, name: "Vivid White" },
				],
			},
			{
				id: "asymmetrical-cargo-pants", name: "Asymmetrical Cargo Pants", forms: [
					{ id: 1, name: "Zigzag Red" },
					{ id: 2, name: "Zigzag Blue" },
				],
			},
			{
				id: "patterned-cargo-pants", name: "Patterned Cargo Pants", forms: [
					{ id: 1, name: "Rainbow" },
					{ id: 2, name: "Blue Gradient" },
					{ id: 3, name: "Gray Gradient" },
				],
			},
			{
				id: "asymmetrical-track-pants", name: "Asymmetrical Track Pants", forms: [
					{ id: 1, name: "Black / Orange" },
					{ id: 2, name: "White / Gray" },
					{ id: 3, name: "Green / White" },
					{ id: 4, name: "Blue / White" },
					{ id: 5, name: "Pink / White" },
				],
			},
			{
				id: "side-stripe-track-pants", name: "Side-Stripe Track Pants", forms: [
					{ id: 1, name: "Black / Yellow" },
					{ id: 2, name: "Gray / Pink" },
					{ id: 3, name: "Blue / Orange" },
					{ id: 4, name: "White / Orange" },
				],
			},
			{
				id: "patterned-track-pants", name: "Patterned Track Pants", forms: [
					{ id: 1, name: "Plus Pattern" },
					{ id: 2, name: "Colorful Chemistry" },
				],
			},
			{ id: "botanical-track-pants", name: "Botanical Track Pants", },
			{
				id: "chino-pants", name: "Chino Pants Set", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Greige" },
					{ id: 3, name: "Wine Red" },
					{ id: 4, name: "BRAVELY Tan" },
					{ id: 5, name: "BRAVELY Gray" },
					{ id: 6, name: "BRAVELY Red" },
					{ id: 7, name: "Purple Damask" },
					{ id: 8, name: "Green Damask" },
					{ id: 9, name: "Red Damask" },
					{ id: 10, name: "Black Damask" },
				],
			},
			{
				id: "pleated-skort", name: "Pleated Skort", forms: [
					{ id: 1, name: "Wine Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Black" },
					{ id: 5, name: "Gray" },
				],
			},
			{
				id: "plaid-pleated-skort", name: "Plaid Pleated Skort", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Gray" },
					{ id: 3, name: "BRAVELY Red" },
				],
			},
			{
				id: "short-shorts", name: "Short Shorts Set", forms: [
					{ id: 1, name: "Vivid Purple" },
					{ id: 2, name: "Lime Yellow" },
					{ id: 3, name: "Emerald Green" },
					{ id: 4, name: "Taffy Pink" },
					{ id: 5, name: "Ultramarine" },
					{ id: 6, name: "Vivid Orange" },
					{ id: 7, name: "Indigo Denim" },
					{ id: 8, name: "Blue Denim" },
					{ id: 9, name: "Bleached Denim" },
					{ id: 10, name: "Black Denim" },
					{ id: 11, name: "Gray Denim" },
					{ id: 12, name: "White Denim" },
					{ id: 13, name: "Red" },
					{ id: 14, name: "Green" },
					{ id: 15, name: "Yellow" },
					{ id: 16, name: "Orange" },
					{ id: 17, name: "Purple" },
					{ id: 18, name: "Pink" },
					{ id: 19, name: "Vivid Black" },
					{ id: 20, name: "Vivid White" },
					{ id: 21, name: "Vivid Red" },
					{ id: 22, name: "Vivid Blue" },
				],
			},
			{
				id: "casual-shorts", name: "Casual Shorts Set", forms: [
					{ id: 1, name: "Light Caramel" },
					{ id: 2, name: "Moss Green" },
					{ id: 3, name: "Navy" },
					{ id: 4, name: "Maroon" },
					{ id: 5, name: "Blue-Gray" },
					{ id: 6, name: "Brown" },
					{ id: 7, name: "Dark Brown" },
					{ id: 8, name: "Candy Pink" },
					{ id: 9, name: "Candy White" },
					{ id: 10, name: "Candy Blue" },
					{ id: 11, name: "Candy Black" },
					{ id: 12, name: "Vivid Black" },
					{ id: 13, name: "Vivid White" },
					{ id: 14, name: "Vivid Red" },
					{ id: 15, name: "Vivid Blue" },
				],
			},
			{
				id: "wrap-skort", name: "Wrap Skort Set", forms: [
					{ id: 1, name: "Red Tartan" },
					{ id: 2, name: "Blue Tartan" },
					{ id: 3, name: "Green Tartan" },
					{ id: 4, name: "Brown Tartan" },
					{ id: 5, name: "Tan Tartan" },
					{ id: 6, name: "Gray Tartan" },
					{ id: 7, name: "White Tartan" },
					{ id: 8, name: "Pale Pink" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Blue-Gray" },
					{ id: 11, name: "Black" },
					{ id: 12, name: "Pale Blue" },
					{ id: 13, name: "Pink" },
					{ id: 14, name: "Floral Pink" },
					{ id: 15, name: "Floral Red" },
					{ id: 16, name: "Floral Blue" },
					{ id: 17, name: "Floral Yellow" },
					{ id: 18, name: "Floral Black" },
				],
			},
			{
				id: "wide-leg-slacks", name: "Wide-Leg Slacks Skort", forms: [
					{ id: 1, name: "Daunting Black" },
					{ id: 2, name: "Daunting Brown" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "White" },
				],
			},
			{
				id: "skirt-and-leggings", name: "Skirt & Leggings Skort", forms: [
					{ id: 1, name: "Orange" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Black" },
				],
			},
			{
				id: "chino-shorts", name: "Chino Shorts Set", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Greige" },
					{ id: 3, name: "Wine Red" },
					{ id: 4, name: "BRAVELY Tan" },
					{ id: 5, name: "BRAVELY Gray" },
					{ id: 6, name: "BRAVELY Red" },
					{ id: 7, name: "Flowery White" },
					{ id: 8, name: "Flowery Blue" },
					{ id: 9, name: "Psychic Green" },
					{ id: 10, name: "Psychic Black" },
					{ id: 11, name: "Psychic Gray" },
					{ id: 12, name: "Purple Damask" },
					{ id: 13, name: "Red Damask" },
					{ id: 14, name: "Black Damask" },
					{ id: 15, name: "Vivid Black" },
					{ id: 16, name: "Vivid White" },
					{ id: 17, name: "Vivid Red" },
					{ id: 18, name: "Vivid Blue" },
				],
			},
			{
				id: "sweat-shorts", name: "Sweat Shorts", forms: [
					{ id: 1, name: "White / Gray" },
					{ id: 2, name: "Blue / Orange" },
					{ id: 3, name: "Black / Pink" },
					{ id: 4, name: "Red / Black" },
					{ id: 5, name: "Black" },
					{ id: 6, name: "Gray" },
					{ id: 7, name: "Red" },
					{ id: 8, name: "Ivory" },
					{ id: 9, name: "Navy" },
					{ id: 10, name: "Moss Green" },
					{ id: 11, name: "Light Caramel" },
					{ id: 12, name: "Ocher" },
					{ id: 13, name: "Dark Brown" },
					{ id: 14, name: "Foggy Blue" },
				],
			},
		],
		"all-in-one": [
			{
				id: "fur-coat-and-turtleneck", name: "Fur Coat & Turtleneck Set", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Maroon Houndstooth" },
					{ id: 11, name: "Gray Houndstooth" },
					{ id: 12, name: "Brown Houndstooth" },
					{ id: 13, name: "Black Houndstooth" },
					{ id: 14, name: "Pale Pink" },
					{ id: 15, name: "Light Blue" },
					{ id: 16, name: "Navy" },
					{ id: 17, name: "Floral Pink" },
					{ id: 18, name: "Floral Blue" },
					{ id: 19, name: "Floral Brown" },
				],
			},
			{
				id: "trench-coat-and-pants", name: "Trench Coat & Pants Set", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "White Wise-Eyes" },
					{ id: 5, name: "Black Wise-Eyes" },
					{ id: 6, name: "Blue Wise-Eyes" },
					{ id: 7, name: "Vivid Black" },
					{ id: 8, name: "Vivid White" },
					{ id: 9, name: "Vivid Red" },
					{ id: 10, name: "Vivid Blue" },
					{ id: 11, name: "Dark Brown" },
					{ id: 12, name: "Tan" },
					{ id: 13, name: "Wine Red" },
					{ id: 14, name: "Green" },
					{ id: 15, name: "BRAVELY Tan" },
					{ id: 16, name: "BRAVELY Gray" },
					{ id: 17, name: "BRAVELY Red" },
				],
			},
			{
				id: "jumpsuit-and-shirt", name: "Jumpsuit & Shirt Set", forms: [
					{ id: 1, name: "Navy" },
					{ id: 2, name: "Lime Yellow" },
					{ id: 3, name: "Taffy Pink" },
					{ id: 4, name: "Sky Blue" },
					{ id: 5, name: "Pink / White" },
					{ id: 6, name: "Blue / Yellow" },
					{ id: 7, name: "Purple / Orange" },
					{ id: 8, name: "Black Graffiti" },
					{ id: 9, name: "White Graffiti" },
					{ id: 10, name: "Red Graffiti" },
					{ id: 11, name: "Blue Graffiti" },
					{ id: 12, name: "Revolving Paisley" },
					{ id: 13, name: "Funky Rogue" },
				],
			},
			{
				id: "overalls-and-pullover", name: "Overalls & Pullover Set", forms: [
					{ id: 1, name: "Indigo Denim" },
					{ id: 2, name: "Blue Denim" },
					{ id: 3, name: "Bleached Denim" },
					{ id: 4, name: "Black Denim" },
					{ id: 5, name: "Gray Denim" },
					{ id: 6, name: "White Denim" },
					{ id: 7, name: "Red" },
					{ id: 8, name: "Green" },
					{ id: 9, name: "Yellow" },
					{ id: 10, name: "Orange" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Pink" },
					{ id: 13, name: "Green Stripes" },
					{ id: 14, name: "Cocoa Stripes" },
					{ id: 15, name: "White Stripes" },
					{ id: 16, name: "Tan Stripes" },
				],
			},
			{
				id: "big-logo-overalls", name: "Big-Logo Overalls Set", forms: [
					{ id: 1, name: "Black Claw" },
					{ id: 2, name: "White Claw" },
					{ id: 3, name: "Red Claw" },
					{ id: 4, name: "Gray Claw" },
				],
			},
			{
				id: "suspender-pants", name: "Suspende Pants Set", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Dark Brown" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "BRAVELY Tan" },
					{ id: 5, name: "BRAVELY Red" },
					{ id: 6, name: "Black Houndstooth" },
					{ id: 7, name: "Red Houndstooth" },
					{ id: 8, name: "Blue Houndstooth" },
					{ id: 9, name: "Green Houndstooth" },
				],
			},
			{
				id: "blouse-and-skort", name: "Blouse & Skort Set", forms: [
					{ id: 1, name: "Silky White" },
					{ id: 2, name: "Moon Gray" },
					{ id: 3, name: "Lamp Black" },
					{ id: 4, name: "Forest Green" },
				],
			},
			{
				id: "belted-romper", name: "Belted Romper Set", forms: [
					{ id: 1, name: "Black Quilting" },
					{ id: 2, name: "White Quilting" },
					{ id: 3, name: "Red Quilting" },
					{ id: 4, name: "Retro Quilting" },
					{ id: 5, name: "Retro Green" },
					{ id: 6, name: "Retro Brown" },
					{ id: 7, name: "Retro Red" },
					{ id: 8, name: "Sweet Black" },
					{ id: 9, name: "Sweet Blue" },
					{ id: 10, name: "Sweet White" },
					{ id: 11, name: "Sweet Pink" },
				],
			},
			{
				id: "overalls-and-shirt", name: "Overalls & Shirt Set", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Gray" },
					{ id: 5, name: "Mystic Black" },
					{ id: 6, name: "Mystic White" },
					{ id: 7, name: "Mystic Purple" },
					{ id: 8, name: "Mystic Yellow" },
				],
			},
			{
				id: "kimono-overalls", name: "Kimono Overalls Set", forms: [
					{ id: 1, name: "Dayflower Ichimatsu" },
					{ id: 2, name: "Alabaster Ichimatsu" },
					{ id: 3, name: "Midnight Asanoha" },
					{ id: 4, name: "Crimson Asanoha" },
				],
			},
			{
				id: "mod-coat-and-pants", name: "Mod Coat & Pants Set", forms: [
					{ id: 1, name: "Moss Green" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Dark Brown" },
					{ id: 4, name: "Light Caramel" },
					{ id: 5, name: "White" },
				],
			},
		],
		"headwear": [
			{
				id: "striped-trilby", name: "Striped Trilby", forms: [
					{ id: 1, name: "Black Denim", startGame: true },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Orange" },
					{ id: 5, name: "Pink" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Red" },
					{ id: 8, name: "White" },
					{ id: 9, name: "Yellow" },
				],
			},
			{
				id: "leather-trilby", name: "Leather Trilby", forms: [
					{ id: 1, name: "Tan" },
					{ id: 2, name: "Dark Brown" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Wine Red" },
					{ id: 5, name: "Gray-Black" },
				],
			},
			{
				id: "plaid-trilby", name: "Plaid Trilby", forms: [
					{ id: 1, name: "BRAVELY Gray" },
					{ id: 2, name: "BRAVELY Tan" },
					{ id: 3, name: "BRAVELY Brown" },
					{ id: 4, name: "BRAVELY Red" },
				],
			},
			{
				id: "patterned-trilby", name: "Patterned Trilby", forms: [
					{ id: 1, name: "Noxious Red" },
					{ id: 2, name: "Graffiti Black" },
					{ id: 3, name: "Pink Splash" },
				],
			},
			{
				id: "flower-stitch-beret", name: "Flower-Stitch Beret", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Pale Pink" },
					{ id: 3, name: "Blue-Gray" },
					{ id: 4, name: "Black" },
				],
			},
			{
				id: "wooloo-knit-beret", name: "Wooloo Knit Beret", forms: [
					{ id: 1, name: "Moss Green" },
					{ id: 2, name: "Maroon" },
					{ id: 3, name: "Navy" },
					{ id: 4, name: "Gray" },
					{ id: 5, name: "Dark Brown" },
					{ id: 6, name: "Ivory" },
					{ id: 7, name: "Light Caramel" },
				],
			},
			{
				id: "leather-beret", name: "Leather Beret", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid Red" },
				],
			},
			{
				id: "simple-headband", name: "Simple Headband", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Ivory" },
					{ id: 11, name: "Gray" },
					{ id: 12, name: "Moss Green" },
					{ id: 13, name: "Maroon" },
					{ id: 14, name: "Dark Brown" },
					{ id: 15, name: "Navy" },
				],
			},
			{
				id: "headphones", name: "Headphones", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Vivid Lime" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "Emerald Green" },
					{ id: 6, name: "Strawberry Milk" },
					{ id: 7, name: "Yellow" },
					{ id: 8, name: "Woodgrain" },
					{ id: 9, name: "Dual Legends" },
					{ id: 10, name: "Sound Wave" },
				],
			},
			{
				id: "striped-knit-beanie", name: "Striped Knit Beanie", forms: [
					{ id: 1, name: "Taffy Pink" },
					{ id: 2, name: "Emerald Green" },
					{ id: 3, name: "Lime Yellow" },
					{ id: 4, name: "Ultramarine" },
				],
			},
			{
				id: "big-logo-knit-beanie", name: "Big-Logo Knit Beanie", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Orange" },
					{ id: 3, name: "Pink" },
				],
			},
			{
				id: "simple-knit-beanie", name: "Simple Knit Beanie", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
				],
			},
			{
				id: "graffiti-knit-beanie", name: "Graffiti Knit Beanie", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid White" },
				],
			},
			{
				id: "kiss-pattern-knit-beanie", name: "Kiss-Pattern Knit Beanie", forms: [
					{ id: 1, name: "Blue Kiss" },
					{ id: 2, name: "Red Kiss" },
				],
			},
			{
				id: "pom-pom-knit-beanie", name: "Pom-Pom Knit Beanie", forms: [
					{ id: 1, name: "Pink / Light Gray" },
					{ id: 2, name: "White / Black" },
					{ id: 3, name: "Red / Black" },
					{ id: 4, name: "Pink / Gray" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Gray" },
					{ id: 7, name: "Maroon" },
					{ id: 8, name: "Moss Green" },
					{ id: 9, name: "Tan" },
					{ id: 10, name: "Black" },
				],
			},
			{
				id: "kickspin-logo-cap", name: "Kickspin Logo Cap", forms: [
					{ id: 1, name: "White / Orange" },
					{ id: 2, name: "White / Green" },
					{ id: 3, name: "Black / Yellow" },
					{ id: 4, name: "Black / White" },
				],
			},
			{
				id: "densoku-logo-cap", name: "DENSOKU Logo Cap", forms: [
					{ id: 1, name: "Yellow / Black" },
					{ id: 2, name: "Blue / Orange" },
					{ id: 3, name: "White / Pink" },
					{ id: 4, name: "Red / Black" },
				],
			},
			{
				id: "magnet-pattern-cap", name: "Magnet-Pattern Cap", forms: [
					{ id: 1, name: "White / Black" },
					{ id: 2, name: "All-Black" },
					{ id: 3, name: "Pink / White" },
				],
			},
			{
				id: "leather-cap", name: "Leather Cap", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid White" },
				],
			},
			{
				id: "kiss-pattern-cap", name: "Kiss-Pattern Cap", forms: [
					{ id: 1, name: "Red Kiss" },
					{ id: 2, name: "Blue Kiss" },
				],
			},
			{ id: "kalos-logo-cap", name: "Kalos Logo Cap", },
			{
				id: "cinematic-cap", name: "Cinematic Cap", forms: [
					{ id: 1, name: "Oh, Charmie!" },
					{ id: 2, name: "Tyrantrum Island" },
				],
			},
			{
				id: "fleece-cap", name: "Fleece Cap", forms: [
					{ id: 1, name: "Candy White" },
					{ id: 2, name: "Candy Purple" },
					{ id: 3, name: "Candy Blue" },
					{ id: 4, name: "Candy Pink" },
					{ id: 5, name: "Tan" },
					{ id: 6, name: "Black" },
					{ id: 7, name: "Moss Green" },
					{ id: 8, name: "Ivory" },
					{ id: 9, name: "Maroon" },
					{ id: 10, name: "Dark Brown" },
				],
			},
			{
				id: "floral-headband", name: "Floral Headband", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Blue-Gray" },
					{ id: 3, name: "Black" },
				],
			},
			{
				id: "spiderweb-headband", name: "Spiderweb Headband", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Pink" },
				],
			},
			{
				id: "studded-headband", name: "Studded Headband", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "Beige" },
				],
			},
			{
				id: "crisscross-ribbon-headband", name: "Crisscross Ribbon Headband", forms: [
					{ id: 1, name: "Lavender" },
					{ id: 2, name: "Maroon" },
					{ id: 3, name: "Moon Gray" },
					{ id: 4, name: "Forest Green" },
				],
			},
			{
				id: "metallic-headband", name: "Metallic Headband", forms: [
					{ id: 1, name: "Silver" },
					{ id: 2, name: "Gold" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Orange" },
					{ id: 5, name: "Pink" },
					{ id: 6, name: "Green" },
				],
			},
			{
				id: "boater-hat", name: "Boater Hat", forms: [
					{ id: 1, name: "Greige" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Wine Red" },
					{ id: 5, name: "Dark Brown" },
					{ id: 6, name: "Green Ribbon" },
					{ id: 7, name: "Red Ribbon" },
					{ id: 8, name: "Gray Ribbon" },
				],
			},
			{
				id: "poke-ear-knit-beanie", name: "Poke Ear Knit Beanie", forms: [
					{ id: 1, name: "Chespin Green" },
					{ id: 2, name: "Gengar Black" },
					{ id: 3, name: "Pikachu Yellow" },
					{ id: 4, name: "Eevee Brown" },
				],
			},
			{
				id: "ear-knit-beanie", name: "Ear Knit Beanie", forms: [
					{ id: 1, name: "Black / Gray" },
					{ id: 2, name: "Purple / Black" },
					{ id: 3, name: "Blue / Brown" },
					{ id: 4, name: "White / Pink" },
				],
			},
			{
				id: "logo-bucket-hat", name: "Logo Bucket Hat", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Navy" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "White" },
					{ id: 5, name: "Ivory" },
				],
			},
			{
				id: "two-tone-bucket-hat", name: "Two-Tone Bucket Hat", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Moss Green" },
					{ id: 3, name: "Dark Brown" },
					{ id: 4, name: "Smoky Blue" },
					{ id: 5, name: "Light Caramel" },
				],
			},
			{
				id: "arabesque-bucket-hat", name: "Arabesque Bucket Hat", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
				],
			},
		],
		"eyewear": [
			{
				id: "rectangle-glasses", name: "Rectangle Glasses", forms: [
					{ id: 1, name: "Black Frames" },
					{ id: 2, name: "White Frames" },
					{ id: 3, name: "Silver Frames" },
					{ id: 4, name: "Gold Frames" },
					{ id: 5, name: "Red Frames" },
					{ id: 6, name: "Blue Frames" },
					{ id: 7, name: "Black Lenses" },
					{ id: 8, name: "Brown Lenses" },
					{ id: 9, name: "Silver Lenses" },
					{ id: 10, name: "Gold Lenses" },
				],
			},
			{
				id: "round-glasses", name: "Round Glasses", forms: [
					{ id: 1, name: "Gold Frames" },
					{ id: 2, name: "Silver Frames" },
					{ id: 3, name: "Black Frames" },
					{ id: 4, name: "White Frames" },
					{ id: 5, name: "Black Lenses" },
					{ id: 6, name: "Peach Lenses" },
					{ id: 7, name: "Lemon Lenses" },
					{ id: 8, name: "Sunset Lenses" },
				],
			},
			{
				id: "oval-glasses", name: "Oval Glasses", forms: [
					{ id: 1, name: "Black Frames" },
					{ id: 2, name: "White Frames" },
					{ id: 3, name: "Beige Frames" },
					{ id: 4, name: "Red Frames" },
					{ id: 5, name: "Green Frames" },
					{ id: 6, name: "Blue Frames" },
					{ id: 7, name: "Yellow Frames" },
					{ id: 8, name: "Pink Frames" },
					{ id: 9, name: "Gray Lenses" },
					{ id: 10, name: "Brown Lenses" },
					{ id: 11, name: "Black Lenses (Noir)" },
					{ id: 12, name: "Black Lenses (Blanc)" },
					{ id: 13, name: "Mottled Frames" },
					{ id: 13, name: "Liepard Frames" },
				],
			},
			{
				id: "sporty-glasses", name: "Sporty Glasses", forms: [
					{ id: 1, name: "Green / Yellow" },
					{ id: 2, name: "Blue / Red" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Purple / Green" },
				],
			},
			{
				id: "cool-bridge-glasses", name: "Cool Bridge Glasses", forms: [
					{ id: 1, name: "Black Frames" },
					{ id: 2, name: "Red Frames" },
					{ id: 3, name: "Orange Lenses" },
					{ id: 4, name: "Purple Lenses" },
				],
			},
		],
		"gloves": [
			{
				id: "leather-gloves", name: "Leather Gloves", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Wine Red" },
				],
			},
			{
				id: "budew-knit-gloves", name: "Budew Knit Gloves", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
				],
			},
			{
				id: "geometric-knit-gloves", name: "Geometric Knit Gloves", forms: [
					{ id: 1, name: "Navy" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Moss Green" },
				],
			},
			{
				id: "sylveon-knit-gloves", name: "Sylveon Knit Gloves", forms: [
					{ id: 1, name: "Pastel Blue" },
					{ id: 2, name: "Pastel Pink" },
					{ id: 3, name: "Pink-Brown" },
					{ id: 4, name: "Black" },
				],
			},
			{
				id: "three-finger-gloves", name: "Three Finger Gloves", forms: [
					{ id: 1, name: "Lavender" },
					{ id: 2, name: "Burgundy" },
					{ id: 3, name: "Lamp Black" },
					{ id: 4, name: "Moon Gray" },
					{ id: 5, name: "Vivid Black" },
					{ id: 6, name: "Vivid White" },
					{ id: 7, name: "Vivid Red" },
					{ id: 8, name: "Vivid Blue" },
				],
			},
		],
		"legwear": [
			{
				id: "striped-quarter-socks", name: "Striped Quarter Socks", forms: [
					{ id: 1, name: "Black / Yellow" },
					{ id: 2, name: "White / Orange" },
					{ id: 3, name: "Pink / White" },
					{ id: 4, name: "Black / Green" },
					{ id: 5, name: "Yellow / Black" },
					{ id: 6, name: "Purple / White" },
					{ id: 7, name: "Blue / White" },
				],
			},
			{
				id: "simple-quarter-socks", name: "Simple Quarter Socks", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Yellow Mix" },
					{ id: 11, name: "Navy Mix" },
					{ id: 12, name: "Red Mix" },
					{ id: 13, name: "Green Mix" },
					{ id: 14, name: "White Mix" },
					{ id: 15, name: "Black Mix" },
				],
			},
			{
				id: "plaid-quarter-socks", name: "Plaid Quarter Socks", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Red" },
				],
			},
			{
				id: "logo-quarter-socks", name: "Logo Quarter Socks", forms: [
					{ id: 1, name: "White / Red" },
					{ id: 2, name: "Red / Blue" },
				],
			},
			{
				id: "simple-knee-high-socks", name: "Simple Knee-High Socks", forms: [
					{ id: 1, name: "Vivid Orange" },
					{ id: 2, name: "Ultramarine" },
					{ id: 3, name: "Sky Blue" },
					{ id: 4, name: "Lime Yellow" },
					{ id: 5, name: "Vivid Purple" },
					{ id: 6, name: "Taffy Pink" },
					{ id: 7, name: "Emerald Green" },
					{ id: 8, name: "Red" },
					{ id: 9, name: "Blue" },
					{ id: 10, name: "Green" },
					{ id: 11, name: "Yellow" },
					{ id: 12, name: "Orange" },
					{ id: 13, name: "Purple" },
					{ id: 14, name: "Pink" },
					{ id: 15, name: "Black", startGame: true },
					{ id: 16, name: "White" },
				],
			},
			{
				id: "striped-knee-high-socks", name: "Striped Knee-High Socks", forms: [
					{ id: 1, name: "Maroon" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Moss Green" },
					{ id: 4, name: "Navy" },
					{ id: 5, name: "Ocher" },
					{ id: 6, name: "Ivory" },
				],
			},
			{
				id: "plaid-knee-high-socks", name: "Plaid Knee-High Socks", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Red" },
				],
			},
			{
				id: "signature-knee-high-socks", name: "Signature Knee-High Socks", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid Red" },
				],
			},
			{
				id: "rendezvous-knee-high-socks", name: "Rendezvous Knee-High Socks", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Blue" },
				],
			},
			{
				id: "cactus-knee-high-socks", name: "Cactus Knee-High Socks", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "Blue" },
				],
			},
			{
				id: "rose-knee-high-socks", name: "Rose Knee-High Socks", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Purple" },
					{ id: 3, name: "White" },
				],
			},
			{
				id: "gradient-knee-high-socks", name: "Gradient Knee-High Socks", forms: [
					{ id: 1, name: "Yellow" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Navy" },
				],
			},
			{
				id: "simple-cropped-socks", name: "Simple Cropped Socks", forms: [
					{ id: 1, name: "Vivid Orange" },
					{ id: 2, name: "Lime Yellow" },
					{ id: 3, name: "Vivid Purple" },
					{ id: 4, name: "Ultramarine" },
					{ id: 5, name: "Emerald Green" },
					{ id: 6, name: "Taffy Pink" },
					{ id: 7, name: "Gray" },
					{ id: 8, name: "Black" },
				],
			},
			{
				id: "gradient-cropped-socks", name: "Gradient Cropped Socks", forms: [
					{ id: 1, name: "Purple / Blue" },
					{ id: 2, name: "Green / Yellow" },
					{ id: 3, name: "Pink / Gray" },
					{ id: 4, name: "Black / Orange" },
				],
			},
			{
				id: "simple-tights", name: "Simple Tights", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "White" },
				],
			},
			{
				id: "colorful-tights", name: "Colorful Tights", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
				],
			},
			{
				id: "knit-tights", name: "knit Tights", forms: [
					{ id: 1, name: "Ivory" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Navy" },
					{ id: 5, name: "Maroon" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Brown" },
					{ id: 8, name: "Smoky Blue" },
				],
			},
			{
				id: "floral-tights", name: "Floral Tights", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Foggy Blue" },
					{ id: 3, name: "Black" },
				],
			},
			{
				id: "girafarig-tights", name: "Girafarig Tights", forms: [
					{ id: 1, name: "Yellow Girafarig" },
					{ id: 2, name: "Green Girafarig" },
					{ id: 3, name: "White Girafarig" },
				],
			},
			{
				id: "asymnmetrical-tights", name: "Asymnmetrical Tights", forms: [
					{ id: 1, name: "Avalugg Blue" },
					{ id: 2, name: "Avalugg Black" },
				],
			},
			{
				id: "diamond-pattern-tights", name: "Diamond-Pattern Tights", forms: [
					{ id: 1, name: "Lamp Black" },
					{ id: 2, name: "Burgundy" },
					{ id: 3, name: "Silky White" },
				],
			},
			{
				id: "simple-thigh-high-socks", name: "Simple Thigh-High Socks", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
				],
			},
			{
				id: "striped-thigh-high-socks", name: "Striped Thigh-High Socks", forms: [
					{ id: 1, name: "Black / White" },
					{ id: 2, name: "Blue / White" },
					{ id: 3, name: "Red / Black" },
				],
			},
			{
				id: "bow-and-bone-thigh-high-socks", name: "Bow-and-Bone Thigh-High Socks", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Pale Purple" },
					{ id: 3, name: "Black" },
				],
			},
			{ id: "psychic-thigh-high-socks", name: "Psychic Thigh-High Socks", },
			{ id: "mystic-thigh-high-socks", name: "Mystic Thigh-High Socks", },
			{
				id: "gradient-thigh-high-socks", name: "Gradient Thigh-High Socks", forms: [
					{ id: 1, name: "Black / Purple" },
					{ id: 2, name: "White / Gray" },
					{ id: 3, name: "Purple / Black" },
					{ id: 4, name: " Black / Green" },
				],
			},
			{
				id: "polka-dot-ribbon-socks", name: "Polka Dot Ribbon Socks", forms: [
					{ id: 1, name: "White / Pink" },
					{ id: 2, name: "White / Beige" },
					{ id: 3, name: "Purple / Yellow" },
					{ id: 4, name: " Black / Red" },
				],
			},
			{
				id: "bow-and-bone-socks", name: "Bow-and-Bone Socks", forms: [
					{ id: 1, name: "Black / White" },
					{ id: 2, name: "White / Pink" },
					{ id: 3, name: "White / Purple" },
					{ id: 4, name: "All-Blue" },
				],
			},
			{
				id: "lacy-ribbon-socks", name: "Lacy Ribbon Socks", forms: [
					{ id: 1, name: "Flowery White" },
					{ id: 2, name: "Flowery Black" },
					{ id: 3, name: "Flowery Gray" },
				],
			},
			{
				id: "socks-and-tights", name: "Socks & Tights", forms: [
					{ id: 1, name: "Gray Knit" },
					{ id: 2, name: "Blue Knit" },
					{ id: 3, name: "Red Knit" },
					{ id: 4, name: "Navy Knit" },
					{ id: 5, name: "Beige Cable-Knit" },
					{ id: 6, name: "White Cable-Knit" },
					{ id: 7, name: "Yellow Cable-Knit" },
					{ id: 8, name: "Green Cable-Knit" },
					{ id: 9, name: "Geometric Red" },
					{ id: 10, name: "Geometric Yellow" },
					{ id: 11, name: "Geometric Blue" },
					{ id: 12, name: "Geometric Blue" },
				],
			},
			{
				id: "patterned-tights-and-socks", name: "Socks & Tights Socks", forms: [
					{ id: 1, name: "Geometric Red" },
					{ id: 2, name: "Geometric Blue" },
					{ id: 3, name: "Geometric Black" },
					{ id: 4, name: "Geometric Green" },
					{ id: 5, name: "Red Graffiti" },
					{ id: 6, name: "Green Graffiti" },
					{ id: 7, name: "Blue Graffiti" },
				],
			},
		],
		"footwear": [
			{
				id: "mid-top-sneakers", name: "Mid-Top Sneakers", forms: [
					{ id: 1, name: "Blue / Black" },
					{ id: 2, name: "White / Pink" },
					{ id: 3, name: "Red / Black" },
					{ id: 4, name: "Tricolor" },
					{ id: 5, name: "Red", startGame: true },
					{ id: 6, name: "Blue" },
					{ id: 7, name: "Green" },
					{ id: 8, name: "Yellow" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Purple" },
					{ id: 11, name: "Pink" },
					{ id: 12, name: "Black" },
					{ id: 13, name: "White" },
				],
			},
			{
				id: "sock-sneakers", name: "Sock Sneakers", forms: [
					{ id: 1, name: "Green / Pink" },
					{ id: 2, name: "Orange / Black" },
					{ id: 3, name: "Black / Blue" },
					{ id: 4, name: "White / Green" },
					{ id: 5, name: "Blue / Red" },
					{ id: 6, name: "Red / Green" },
					{ id: 7, name: "Green / Orange" },
					{ id: 8, name: "Yellow / Blue" },
					{ id: 9, name: "Orange / Purple" },
					{ id: 10, name: "Purple / Yellow" },
					{ id: 11, name: "All-Pink" },
					{ id: 12, name: "All-Black" },
					{ id: 13, name: "White / Gray" },
					{ id: 14, name: "Pastel Spring" },
					{ id: 15, name: "Pastel Autumn" },
					{ id: 16, name: "Pastel Summer" },
					{ id: 17, name: "Pastel Winter" },
				],
			},
			{
				id: "canvas-sneakers", name: "Canvas Sneakers", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Maroon" },
					{ id: 11, name: "Navy" },
					{ id: 12, name: "Moss Green" },
					{ id: 13, name: "Foggy Blue" },
					{ id: 14, name: "Dark Brown" },
					{ id: 15, name: "Tan" },
					{ id: 16, name: "Light Pumpkin" },
					{ id: 17, name: "Dark Pumpkin" },
				],
			},
			{
				id: "high-top-sneakers", name: "High-Top Sneakers", forms: [
					{ id: 1, name: "Orange" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Purple" },
					{ id: 5, name: "Blue" },
					{ id: 6, name: "Tan / Brown" },
					{ id: 7, name: "Navy / Tan" },
					{ id: 8, name: "Maroon / Black" },
					{ id: 9, name: "Black / Green" },
					{ id: 10, name: "Ivory / Beige" },
					{ id: 11, name: "Blue / Gray" },
				],
			},
			{
				id: "striped-high-top-sneakers", name: "Striped High-Top Sneakers", forms: [
					{ id: 1, name: "Black-and-White Stripes" },
					{ id: 2, name: "Red-and-Black Stripes" },
					{ id: 3, name: "White-and-Black Stripes" },
					{ id: 4, name: "Gray-and-Black Stripes" },
					{ id: 5, name: "Black-and-Peach Stripes" },
				],
			},
			{
				id: "performance-sneakers", name: "Performance Sneakers", forms: [
					{ id: 1, name: "Black / Yellow" },
					{ id: 2, name: "Green / White" },
					{ id: 3, name: "Purple / Pink" },
					{ id: 4, name: "Yellow / Blue", startGame: true },
					{ id: 5, name: "Red / Black" },
					{ id: 6, name: "White / Gray" },
					{ id: 7, name: "Lemon Yellow" },
					{ id: 8, name: "Tricolor" },
					{ id: 9, name: "Cool Black" },
				],
			},
			{
				id: "puffy-sole-sneakers", name: "Puffy-Sole Sneakers", forms: [
					{ id: 1, name: "Clean Blue" },
					{ id: 2, name: "Clean Pink" },
					{ id: 3, name: "Clean Navy" },
					{ id: 4, name: "Clean White" },
					{ id: 5, name: "All-Black" },
					{ id: 6, name: "White / Black" },
					{ id: 7, name: "Red / Blue" },
					{ id: 8, name: "Sand Orange" },
					{ id: 9, name: "Sand Green" },
					{ id: 10, name: "Yellow" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Purple" },
					{ id: 13, name: "Black" },
				],
			},
			{
				id: "opera-shoes", name: "Opera Shoes", forms: [
					{ id: 1, name: "Dark Brown" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Wine Red" },
					{ id: 5, name: "Green" },
				],
			},
			{
				id: "plaid-loafers", name: "Plaid Loafers", forms: [
					{ id: 1, name: "White Stitching" },
					{ id: 2, name: "Black Stitching" },
					{ id: 3, name: "Green Stitching" },
					{ id: 4, name: "Yellow Stitching" },
					{ id: 5, name: "Red Stitching" },
				],
			},
			{
				id: "leather-loafers", name: "Leather Loafers", forms: [
					{ id: 1, name: "Light Caramel" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Black" },
				],
			},
			{
				id: "dark-type-loafers", name: "Dark-Type Loafers", forms: [
					{ id: 1, name: "Inferno" },
					{ id: 2, name: "Sand Gang" },
					{ id: 3, name: "Three-Headed Dragon" },
				],
			},
			{
				id: "floral-loafers", name: "Floral Loafers", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Black" },
				],
			},
			{
				id: "lace-up-shoes", name: "Lace-Up Shoes", forms: [
					{ id: 1, name: "Moss Green" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Navy" },
					{ id: 4, name: "Maroon" },
					{ id: 5, name: "Pink-Gray" },
					{ id: 6, name: "Tan / Brown" },
					{ id: 7, name: "White / Black" },
					{ id: 8, name: "Red / Black" },
					{ id: 9, name: "Beige / Gray" },
					{ id: 10, name: "Green / Brown" },
					{ id: 11, name: "Shiny Black" },
					{ id: 12, name: "White Wise-Eyes" },
					{ id: 13, name: "Mystic Pattern" },
				],
			},
			{
				id: "suede-long-boots", name: "Suede Long Boots", forms: [
					{ id: 1, name: "Tan" },
					{ id: 2, name: "Navy" },
					{ id: 3, name: "Maroon" },
					{ id: 4, name: "Moss Green" },
					{ id: 5, name: "Brown" },
					{ id: 6, name: "White" },
				],
			},
			{
				id: "patent-leather-toe-cap-boots", name: "Patent Leather Toe-Cap Boots", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Red" },
				],
			},
			{
				id: "medallion-long-boots", name: "Medallion Long Boots", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Cocoa" },
				],
			},
			{
				id: "patterned-long-boots", name: "Patterned Long Boots", forms: [
					{ id: 1, name: "Black Blossoms" },
					{ id: 2, name: "Blue Blossoms" },
					{ id: 3, name: "Red Blossoms" },
				],
			},
			{
				id: "combat-boots", name: "Combat Boots", forms: [
					{ id: 1, name: "Black / Red" },
					{ id: 2, name: "Red / White" },
					{ id: 3, name: "Blue / Red" },
					{ id: 4, name: "All-Black" },
					{ id: 5, name: "All-White" },
					{ id: 6, name: "Noxious Red" },
					{ id: 7, name: "Pink Splash" },
					{ id: 8, name: "Graffiti Black" },
				],
			},
			{
				id: "side-gore-boots", name: "Side Gore Boots", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Black" },
					{ id: 5, name: "Midnight Geta" },
					{ id: 6, name: "Tin Geta" },
					{ id: 7, name: "Refined Ichimatsu" },
					{ id: 8, name: "Flashy Ichimatsu" },
				],
			},
			{
				id: "mouton-boots", name: "Mouton Boots", forms: [
					{ id: 1, name: "Tan" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "White" },
					{ id: 5, name: "Dark Brown" },
					{ id: 6, name: "Pink-Brown" },
				],
			},
			{
				id: "chunky-sneakers", name: "Chunky Sneakers", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Yellow / Blue" },
					{ id: 4, name: "Blue / Black" },
				],
			},
			{
				id: "mid-calf-boots", name: "Mid-Calf Boots", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Black / White" },
					{ id: 4, name: "Red / Black" },
				],
			},
			{
				id: "dark-type-mid-calf-boots", name: "Dark-Type Mid-Calf Boots", forms: [
					{ id: 1, name: "Black / Orange" },
					{ id: 2, name: "Blue / Yellow" },
				],
			},
			{
				id: "embellished-mary-janes", name: "Embellished Mary Janes", forms: [
					{ id: 1, name: "Pitch Black" },
					{ id: 2, name: "Burgundy" },
					{ id: 3, name: "Violet" },
					{ id: 4, name: "Silky White" },
				],
			},
			{
				id: "mary-janes", name: "Mary Janes", forms: [
					{ id: 1, name: "White / Green" },
					{ id: 2, name: "White / Red" },
					{ id: 3, name: "Black / Green" },
					{ id: 4, name: "Black / Yellow" },
					{ id: 5, name: "Pale Pink" },
					{ id: 6, name: "Pale Purple" },
					{ id: 7, name: "Old Rose" },
					{ id: 8, name: "Foggy Blue" },
				],
			},
			{
				id: "simple-pumps", name: "Simple Pumps", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Maroon" },
					{ id: 5, name: "Dark Brown" },
				],
			},
			{
				id: "plaid-pumps", name: "Plaid Pumps", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Gray" },
					{ id: 3, name: "BRAVELY Brown" },
					{ id: 4, name: "BRAVELY Red" },
					{ id: 5, name: "BRAVELY Green" },
				],
			},
			{
				id: "liepard-pumps", name: "Liepard Pumps", forms: [
					{ id: 1, name: "Purple" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Brown" },
				],
			},
			{
				id: "pointed-loafers", name: "Pointed Loafers", forms: [
					{ id: 1, name: "All-Purple" },
					{ id: 2, name: "White / Gray" },
					{ id: 3, name: "White / Magenta" },
					{ id: 3, name: "Purple / Magenta" },
				],
			},
		],
		"satchels": [
			{
				id: "simple-round", name: "Simple Round Satchel", forms: [
					{ id: 1, name: "Red", startGame: true },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
				],
			},
			{
				id: "two-tone-round", name: "Two-Tone Round Satchel", forms: [
					{ id: 1, name: "Purple / Yellow" },
					{ id: 2, name: "Pink / White" },
					{ id: 3, name: "Green / Black" },
					{ id: 4, name: "Black / Orange" },
				],
			},
			{
				id: "densoku-round", name: "DENSOKU Round Satchel", forms: [
					{ id: 1, name: "Black / Yellow" },
					{ id: 2, name: "Navy / Pink" },
					{ id: 3, name: "White / Blue" },
				],
			},
			{
				id: "leather-round", name: "Leather Round Satchel", forms: [
					{ id: 1, name: "Gold" },
					{ id: 2, name: "Silver" },
				],
			},
			{ id: "aurora-round", name: "Aurora Round Satchel", },
			{
				id: "tie-dye-square", name: "Tie-Dye Square Satchel", forms: [
					{ id: 1, name: "Bruxish" },
					{ id: 2, name: "Hawlucha" },
					{ id: 3, name: "Obstagoon" },
				],
			},
			{
				id: "spiderweb-square", name: "Spiderweb Square Satchel", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Pink" },
				],
			},
			{
				id: "plaid-square", name: "Plaid Square Satchel", forms: [
					{ id: 1, name: "BRAVELY Tan" },
					{ id: 2, name: "BRAVELY Gray" },
					{ id: 3, name: "BRAVELY Red" },
					{ id: 4, name: "BRAVELY Brown" },
				],
			},
			{
				id: "leather-square", name: "Leather Square Satchel", forms: [
					{ id: 1, name: "Vivid Black" },
					{ id: 2, name: "Vivid White" },
					{ id: 3, name: "Gold" },
					{ id: 4, name: "Silver" },
				],
			},
			{
				id: "patterned-square", name: "Patterned Square Satchel", forms: [
					{ id: 1, name: "Zigzag Blue" },
					{ id: 2, name: "Zigzag Red" },
				],
			},
			{
				id: "studded-square", name: "Studded Square Satchel", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Yellow" },
					{ id: 4, name: "Green" },
				],
			},
			{ id: "aurora-square", name: "Aurora Square Satchel", },
			{
				id: "floral-fleece", name: "Floral Fleece Satchel", forms: [
					{ id: 1, name: "Pink" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Yellow" },
				],
			},
			{
				id: "simple-fleece", name: "Simple Fleece Satchel", forms: [
					{ id: 1, name: "Tan" },
					{ id: 2, name: "Navy" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Beige" },
					{ id: 5, name: "Dark Brown" },
					{ id: 6, name: "Pink-Brown" },
					{ id: 7, name: "Gray" },
				],
			},
			{ id: "studded-fleece", name: "Studded Fleece Satchel", },
			{
				id: "patterned-fleece", name: "Patterned Fleece Satchel", forms: [
					{ id: 1, name: "Mystic Pattern" },
					{ id: 2, name: "Psychic Black" },
				],
			},
			{
				id: "simple-frilly", name: "Simple Frilly Satchel", forms: [
					{ id: 1, name: "Lavender" },
					{ id: 2, name: "Violet" },
					{ id: 3, name: "Moon Gray" },
					{ id: 4, name: "Silky White" },
				],
			},
			{
				id: "patterned-frilly", name: "Patterned Frilly Satchel", forms: [
					{ id: 1, name: "Sweet Black" },
					{ id: 2, name: "Sweet Blue" },
					{ id: 3, name: "Sweet White" },
					{ id: 4, name: "Sweet Pink" },
				],
			},
		],
		"earrings": [
			{
				id: "lightning-earrings", name: "Lightning Earrings", forms: [
					{ id: 1, name: "Gold" },
					{ id: 2, name: "Silver" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Blue" },
					{ id: 5, name: "Red" },
					{ id: 6, name: "Multicolor Orange" },
					{ id: 7, name: "Multicolor Red" },
					{ id: 8, name: "Multicolor Yellow" },
					{ id: 9, name: "Multicolor Black" },
				],
			},
			{
				id: "flower-earrings", name: "Flower Earrings", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "Blue" },
					{ id: 5, name: "Violet" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Burgundy" },
					{ id: 8, name: "Lamp Black" },
					{ id: 9, name: "Yellow / Purple" },
					{ id: 10, name: "Red / Blue" },
				],
			},
			{
				id: "simple-studs", name: "Simple Studs", forms: [
					{ id: 1, name: "Red" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Purple" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Black" },
					{ id: 9, name: "White" },
					{ id: 10, name: "Maroon" },
					{ id: 11, name: "Navy" },
					{ id: 12, name: "Moss Green" },
					{ id: 13, name: "Tan" },
					{ id: 14, name: "Brown" },
					{ id: 15, name: "Gray" },
					{ id: 16, name: "Gold" },
					{ id: 17, name: "Silver" },
					{ id: 18, name: "Rose Gold" },
				],
			},
			{
				id: "triangle-earrings", name: "Triangle Earrings", forms: [
					{ id: 1, name: "White" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Yellow Girafarig" },
					{ id: 4, name: "Green Girafarig" },
					{ id: 5, name: "White Girafarig" },
					{ id: 6, name: "Red Lines" },
					{ id: 7, name: "Ivy Lines" },
					{ id: 8, name: "Green Lines" },
					{ id: 9, name: "Blue Lines" },
					{ id: 10, name: "Red / White" },
					{ id: 11, name: "Blue / Red" },
					{ id: 12, name: "Gold" },
					{ id: 13, name: "Silver" },
					{ id: 14, name: "Bronze" },
				],
			},
			{
				id: "hoop-earrings", name: "Hoop Earrings", forms: [
					{ id: 1, name: "Orange / Yellow" },
					{ id: 2, name: "Marine / Green" },
					{ id: 3, name: "Purple / Pink" },
					{ id: 4, name: "Blue / White" },
					{ id: 5, name: "Yellow / Green" },
					{ id: 6, name: "Navy / Red" },
					{ id: 7, name: "Gold" },
					{ id: 8, name: "Silver" },
					{ id: 9, name: "Rose Gold" },
				],
			},
		],
	};

	window.DATA = window.DATA || {};
	window.DATA.fashion = window.DATA.fashion || {};

	function slugify(s) {
		return String(s || "")
			.trim()
			.toLowerCase()
			.replace(/\s*\/\s*/g, "-")    // "Black / Red" -> "black-red"
			.replace(/\s+/g, "-")          // spaces -> hyphens
			.replace(/[^a-z0-9\-]/g, "")   // drop anything else
			.replace(/\-+/g, "-");         // collapse
	}

	function mapItem(categoryId, item) {
		const out = { ...item };

		// normalize gender folder
		let gender = (out.gender || "unisex").toLowerCase();

		// Build the runtime img function you want:
		// img: ({ gameKey }) => fashionItem(gameKey, categoryId, gender, imageId)
		const mkImg = (imageId) => ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId);

		if (Array.isArray(out.forms) && out.forms.length) {
			out.forms = out.forms.map((f) => {
				const suffix = slugify(f.name ?? f.id);
				const imageId = `${out.id}-${suffix}`;

				return {
					...f,	// keep numeric ids as-is (your authoring format)
					img: f.img ?? mkImg(imageId),
				};
			});

			// Parent preview uses the first form image (unless author manually set one)
			out.img = out.img ?? out.forms[0].img;
		} else {			// No forms: image id is just the item id
			out.img = out.img ?? mkImg(out.id);
		}

		return out;
	}

	function buildFashionFor(gameKey) {
		return {
			categories: CATEGORIES.map((c) => ({
				id: c.id, label: c.label, items: (ITEMS_BY_CATEGORY[c.id] || []).map((it) => mapItem(c.id, it)),
			})),
		};
	}

	defineFashionMany(GAME_KEYS, (gameKey) => buildFashionFor(gameKey));
})();
