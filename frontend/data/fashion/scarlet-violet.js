(() => {
	const GAME_KEYS = ["scarlet", "violet"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "cases", label: "Rotom Phone Cases" },
		{ id: "uniforms", label: "Uniforms" },
		{ id: "hats", label: "Hats" },
		{ id: "glasses", label: "Glasses" },
		{ id: "bags", label: "Bags" },
		{ id: "gloves", label: "Gloves" },
		{ id: "socks", label: "Socks" },
		{ id: "shoes", label: "Shoes" }
	];

	// Fashion data authoring format:
	// - item.id stays a slug (e.g. "boater")
	// - item.forms[].id is numeric (e.g. 1), and helpers format it to "hats:boater:001"
	const ITEMS_BY_CATEGORY = {
		"cases": [
			{ id: 1, name: "Default", startGame: true },
			{
				id: 2, name: "Colors", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Brown" },
					{ id: 4, name: "Cocoa Brown" },
					{ id: 5, name: "Cream" },
					{ id: 6, name: "Dark Brown" },
					{ id: 7, name: "Dark Green" },
					{ id: 8, name: "Green" },
					{ id: 9, name: "Lavender" },
					{ id: 10, name: "Navy Blue" },
					{ id: 11, name: "Olive" },
					{ id: 12, name: "Orange" },
					{ id: 13, name: "Pink" },
					{ id: 14, name: "Purple" },
					{ id: 15, name: "Rose" },
					{ id: 16, name: "Sky Blue" },
					{ id: 17, name: "Turquoise" },
					{ id: 18, name: "White" },
					{ id: 19, name: "Wine Red" },
					{ id: 20, name: "Yellow" },
				]
			},
			{
				id: 3, name: "Typings", forms: [
					{ id: 1, name: "Bug" },
					{ id: 2, name: "Dark" },
					{ id: 3, name: "Dragon" },
					{ id: 4, name: "Electric" },
					{ id: 5, name: "Fairy" },
					{ id: 6, name: "Fighting" },
					{ id: 7, name: "Fire" },
					{ id: 8, name: "Flying" },
					{ id: 9, name: "Ghost" },
					{ id: 10, name: "Grass" },
					{ id: 11, name: "Ground" },
					{ id: 12, name: "Ice" },
					{ id: 13, name: "Normal" },
					{ id: 14, name: "Poison" },
					{ id: 15, name: "Psychic" },
					{ id: 16, name: "Rock" },
					{ id: 17, name: "Steel" },
					{ id: 18, name: "Water" },
				]
			},
			{
				id: 4, name: "Special", forms: [
					{ id: 1, name: "Applin Apple" },
					{ id: 2, name: "Arc Phone", extraCredit: true },
					{ id: 3, name: "Ball Guy", extraCredit: true },
					{ id: 4, name: "Combee Honey" },
					{ id: 5, name: "Eevee" },
					{ id: 6, name: "Flabebe Flower" },
					{ id: 7, name: "Fuecoco" },
					{ id: 8, name: "Glitterati" },
					{ id: 9, name: "Gothita Ribbon" },
					{ id: 10, name: "Komala Log" },
					{ id: 11, name: "Magnemite Magnet" },
					{ id: 12, name: "Pikachu" },
					{ id: 13, name: "Pika-Vee", extraCredit: true },
					{ id: 14, name: "Poketch", extraCredit: true },
					{ id: 15, name: "Quaxly" },
					{ id: 16, name: "Scarlet/Violet", extraCredit: true },
					{ id: 17, name: "Sprigatito" },
					{ id: 18, name: "Swablu Sky" },
				]
			},
		],
		"uniforms": [
			{ id: 1, name: "Autumn Uniform", startGame: true },
			{ id: 2, name: "Spring Uniform", startGame: true },
			{ id: 3, name: "Summer Uniform", startGame: true },
			{ id: 4, name: "Winter Uniform", startGame: true },
			{ id: 5, name: "New Autumn Uniform", extraCredit: true },
			{ id: 6, name: "New Spring Uniform", extraCredit: true },
			{ id: 7, name: "New Summer Uniform", extraCredit: true },
			{ id: 8, name: "New Winter Uniform", extraCredit: true },
			{ id: 9, name: "Tracksuit", extraCredit: true },
		],
		"hats": [],
		"glasses": [
			{
				id: 1, name: "Aviator Sunglasses", forms: [
					{ id: 1, name: "Gold / Black" },
					{ id: 2, name: "Gold / Blue" },
					{ id: 3, name: "Gold / Brown" },
					{ id: 4, name: "Gold / Green" },
					{ id: 5, name: "Gold / Mirrored" },
					{ id: 6, name: "Gold / Red" },
					{ id: 7, name: "Gold / Tan" },
					{ id: 8, name: "Gold / Yellow" },
					{ id: 9, name: "Silver / Black" },
					{ id: 10, name: "Silver / Blue" },
					{ id: 11, name: "Silver / Brown" },
					{ id: 12, name: "Silver / Green" },
					{ id: 13, name: "Silver / Mirrored" },
					{ id: 14, name: "Silver / Red" },
					{ id: 15, name: "Silver / Tan" },
					{ id: 16, name: "Silver / Yellow" },
				]
			},
			{
				id: 2, name: "Cat-Eye Sunglasses", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Gold" },
					{ id: 3, name: "Gold / Black" },
					{ id: 4, name: "Gold / Blue" },
					{ id: 5, name: "Gold / Brown" },
					{ id: 6, name: "Gold / Green" },
					{ id: 7, name: "Gold / Mirrored" },
					{ id: 8, name: "Gold / Red" },
					{ id: 9, name: "Gold / Tan" },
					{ id: 10, name: "Gold / Yellow" },
					{ id: 11, name: "Silver" },
					{ id: 12, name: "Silver / Black" },
					{ id: 13, name: "Silver / Blue" },
					{ id: 14, name: "Silver / Brown" },
					{ id: 15, name: "Silver / Green" },
					{ id: 16, name: "Silver / Mirrored" },
					{ id: 17, name: "Silver / Red" },
					{ id: 18, name: "Silver / Tan" },
					{ id: 19, name: "Silver / Yellow" },
				]
			},
			{
				id: 3, name: "Half-Rim Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 4, name: "Half-Rim Sunglasses", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Mottled" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "Yellow" },
				]
			},
			{
				id: 5, name: "Horn-Rimmed Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 6, name: "Horn-Rimmed Sunglasses", forms: [
					{ id: 1, name: "All-Black" },
					{ id: 2, name: "Black/Blue" },
					{ id: 3, name: "Black/Red" },
					{ id: 4, name: "Black/Yellow" },
					{ id: 5, name: "Mottled" },
				]
			},
			{
				id: 7, name: "Oval Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 8, name: "Oval Sunglasses", forms: [
					{ id: 1, name: "All-Black" },
					{ id: 2, name: "Black/Blue" },
					{ id: 3, name: "Black/Red" },
					{ id: 4, name: "Black/Yellow" },
				]
			},
			{
				id: 9, name: "Round Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 10, name: "Round Sunglasses", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Mottled" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "White" },
				]
			},
			{
				id: 11, name: "Sporty Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 12, name: "Square Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
			{
				id: 13, name: "Square Sunglasses", forms: [
					{ id: 1, name: "All-Black" },
					{ id: 2, name: "Black/Blue" },
					{ id: 3, name: "Black/Red" },
					{ id: 4, name: "Black/Yellow" },
				]
			},
		],
		"bags": [
			{
				id: 1, name: "Canvas Backpack", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
					{ id: 15, name: "Great Ball", extraCredit: true },
					{ id: 16, name: "Poke Ball", extraCredit: true },
					{ id: 17, name: "Ultra Ball", extraCredit: true },
				]
			},
			{
				id: 1, name: "Leather Backpack", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Black/White" },
					{ id: 4, name: "Blue" },
					{ id: 5, name: "Brown" },
					{ id: 6, name: "Brown/White" },
					{ id: 7, name: "Caramel" },
					{ id: 8, name: "Caramel/White" },
					{ id: 9, name: "Gray" },
					{ id: 10, name: "Green" },
					{ id: 11, name: "Mint Stripes" },
					{ id: 12, name: "Navy" },
					{ id: 13, name: "Olive" },
					{ id: 14, name: "Orange" },
					{ id: 15, name: "Pink" },
					{ id: 16, name: "Pink Stripes" },
					{ id: 17, name: "Purple" },
					{ id: 18, name: "Purple Stripes" },
					{ id: 19, name: "Red" },
					{ id: 20, name: "White" },
					{ id: 21, name: "White/Black" },
					{ id: 22, name: "Yellow" },
				]
			},
			{ id: 1, name: "New School Backpack", extraCredit: true },
			{
				id: 1, name: "Nylon Backpack", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
					{ id: 15, name: "A" },
					{ id: 16, name: "B" },
					{ id: 17, name: "C" },
					{ id: 18, name: "Mimicry" },
					{ id: 19, name: "Spicy Pepper" },
					{ id: 20, name: "Terra Whale" },
				]
			},
			{ id: 1, name: "Replica Leader Bag" },
			{ id: 1, name: "School Backpack", startGame: true },
			{
				id: 1, name: "Sport Backpack", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "Turquoise" },
					{ id: 14, name: "White" },
					{ id: 15, name: "Yellow" },
					{ id: 16, name: "A" },
					{ id: 17, name: "B" },
					{ id: 18, name: "C" },
					{ id: 19, name: "Color A" },
					{ id: 20, name: "Color B" },
					{ id: 21, name: "Color C" },
					{ id: 22, name: "Dreamy Wash I" },
					{ id: 23, name: "Dreamy Wash II" },
					{ id: 24, name: "Dreamy Wash III" },
					{ id: 25, name: "Floral Print A" },
					{ id: 26, name: "Floral Print B" },
					{ id: 27, name: "Floral Print C", extraCredit: true },
				]
			},
		],
		"gloves": [
			{
				id: 1, name: "Heart Glasses", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Green" },
					{ id: 7, name: "Navy" },
					{ id: 8, name: "Olive" },
					{ id: 9, name: "Orange" },
					{ id: 10, name: "Pink" },
					{ id: 11, name: "Purple" },
					{ id: 12, name: "Red" },
					{ id: 13, name: "White" },
					{ id: 14, name: "Yellow" },
				]
			},
		],
		"socks": [],
		"shoes": [],
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

		// img: ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId)
		const mkImg = (imageId) => ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId);

		// ✅ IMPORTANT: build image ids from NAME slugs, not numeric ids
		const slug = (s) => (window._fashionSlug ? window._fashionSlug(s) : slugify(s));
		const itemSlug = slug(out.name);

		if (Array.isArray(out.forms) && out.forms.length) {
			out.forms = out.forms.map((f) => {
				const formSlug = slug(f.name ?? f.id);
				const imageId = `${itemSlug}-${formSlug}`;

				return {
					...f, // keep numeric ids as-is (authoring format)
					img: f.img ?? mkImg(imageId),
				};
			});

			// Parent preview uses the first form image (unless author manually set one)
			out.img = out.img ?? out.forms[0].img;
		} else {
			// No forms: image id is just the item name slug
			out.img = out.img ?? mkImg(itemSlug);
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

	function buildFashionFor(gameKey) {
		return {
			categories: CATEGORIES.map((c) => ({
				id: c.id,
				label: c.label,
				items: (ITEMS_BY_CATEGORY[c.id] || []).map((it) => mapItem(c.id, it)),
			})),
		};
	}

	defineFashionMany(GAME_KEYS, (gameKey) => buildFashionFor(gameKey));
})();
