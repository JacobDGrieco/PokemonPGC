(() => {
	const GAME_KEYS = ["scarlettm", "violettm"];

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
			{ id: 1, name: "Fezandipiti" },
			{ id: 2, name: "Munkidori" },
			{ id: 3, name: "Neo Kitakami", extraCredit: true },
			{ id: 4, name: "Okidogi" },
			{
				id: 5, name: "Poke Ball Case", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "Yellow" },
				]
			},
			{ id: 6, name: "Tera Fire" },
			{ id: 7, name: "Tera Grass" },
			{ id: 8, name: "Tera Water" },
		],
		"uniforms": [
			{
				id: 1, name: "Festival Jinbei", forms: [
					{ id: 1, name: "Deep Blue" },
					{ id: 2, name: "Flash" },
					{ id: 3, name: "Green", startGame: true },
					{ id: 4, name: "White/Gray" },
				]
			},
		],
		"hats": [],
		"glasses": [
			{
				id: 1, name: "Clubmaster Glasses", forms: [
					{ id: 1, name: "All-Black" },
					{ id: 2, name: "Beige" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Black/Brown" },
					{ id: 5, name: "Black/Tan" },
					{ id: 6, name: "Blue" },
					{ id: 7, name: "Brown" },
					{ id: 8, name: "Gray" },
					{ id: 9, name: "Green" },
					{ id: 10, name: "Mottled/Black" },
					{ id: 11, name: "Mottled/Tawny" },
					{ id: 12, name: "Navy" },
					{ id: 13, name: "Olive" },
					{ id: 14, name: "Orange" },
					{ id: 15, name: "Pink" },
					{ id: 16, name: "Purple" },
					{ id: 17, name: "Red" },
					{ id: 18, name: "Turquoise" },
					{ id: 19, name: "White" },
					{ id: 20, name: "Yellow" },
				]
			},
			{
				id: 2, name: "Crown Panto Glasses", forms: [
					{ id: 1, name: "All-Green" },
					{ id: 2, name: "Beige" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Blue" },
					{ id: 5, name: "Brown" },
					{ id: 6, name: "Brown/Pink" },
					{ id: 7, name: "Gray" },
					{ id: 8, name: "Green" },
					{ id: 9, name: "Navy" },
					{ id: 10, name: "Olive" },
					{ id: 11, name: "Orange" },
					{ id: 12, name: "Pink" },
					{ id: 13, name: "Pink/Brown" },
					{ id: 14, name: "Purple" },
					{ id: 15, name: "Red" },
					{ id: 16, name: "Turquoise" },
					{ id: 17, name: "White" },
					{ id: 18, name: "White/Blue" },
					{ id: 19, name: "Yellow" },
					{ id: 20, name: "Yellow/Orange" },
				]
			},
			{
				id: 3, name: "Half-Moon Glasses", forms: [
					{ id: 1, name: "All-Black" },
					{ id: 2, name: "All-Gold" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Black" },
					{ id: 5, name: "Black/Blue" },
					{ id: 6, name: "Black/Brown" },
					{ id: 7, name: "Black/Green" },
					{ id: 8, name: "Blue" },
					{ id: 9, name: "Brown" },
					{ id: 10, name: "Gray" },
					{ id: 11, name: "Green" },
					{ id: 12, name: "Navy" },
					{ id: 13, name: "Olive" },
					{ id: 14, name: "Orange" },
					{ id: 15, name: "Pink" },
					{ id: 16, name: "Purple" },
					{ id: 17, name: "Red" },
					{ id: 18, name: "Turquoise" },
					{ id: 19, name: "White" },
					{ id: 20, name: "Yellow" },
				]
			},
			{
				id: 4, name: "Joke Glasses", forms: [
					{ id: 1, name: "Clefairy" },
					{ id: 2, name: "Dipplin" },
					{ id: 3, name: "Eevee" },
					{ id: 4, name: "Jigglypuff" },
					{ id: 5, name: "Pikachu" },
				]
			},
		],
		"bags": [
			{
				id: 1, name: "Classic Leather Backpack", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Black/White" },
					{ id: 3, name: "Blue" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Brown/White" },
					{ id: 6, name: "Caramel" },
					{ id: 7, name: "Caramel/White" },
					{ id: 8, name: "Red" },
					{ id: 9, name: "White" },
					{ id: 10, name: "White/Black" },
				]
			},
			{ id: 1, name: "Festival Cinch Bag", startGame: true },
			{
				id: 1, name: "Frilly Backpack", forms: [
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
					{ id: 15, name: "I" },
					{ id: 16, name: "II" },
					{ id: 17, name: "III" },
				]
			},
			{
				id: 1, name: "Two-Way Nylon Backpack", forms: [
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
					{ id: 18, name: "Tiles I" },
					{ id: 19, name: "Tiles II" },
					{ id: 20, name: "Tiles III" },
				]
			},
		],
		"gloves": [],
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
