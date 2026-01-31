(() => {
	const GAME_KEYS = ["scarletid", "violetid"];

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
			{
				id: 1, name: "Blueberry Case", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" },
				]
			},
			{ id: 2, name: "Iono Zone" },
			{ id: 3, name: "Sandwich Case" },
			{ id: 4, name: "Surrendering Sunflora" },
			{ id: 5, name: "Team Star" },
		],
		"uniforms": [
			{ id: 1, name: "BB Autumn Uniform", startGame: true },
			{ id: 2, name: "BB Spring Uniform", startGame: true },
			{ id: 3, name: "BB Summer Uniform", startGame: true },
			{ id: 4, name: "BB Winter Uniform", startGame: true },
			{ id: 5, name: "BB Track Suit" },
			{ id: 6, name: "Leauge Club Uniform" },
			{ id: 7, name: "Modified Uniform A" },
			{ id: 8, name: "Modified Uniform B" },
			{ id: 9, name: "Track Suit" },
		],
		"hats": [],
		"glasses": [
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
			{
				id: 2, name: "Hexagonal Glasses", forms: [
					{ id: 1, name: "All-Gold" },
					{ id: 2, name: "All-Silver" },
					{ id: 3, name: "Beige" },
					{ id: 4, name: "Black" },
					{ id: 5, name: "Black/Orange" },
					{ id: 6, name: "Blac/Pink" },
					{ id: 7, name: "Blue" },
					{ id: 8, name: "Brown" },
					{ id: 9, name: "Green" },
					{ id: 10, name: "Mottled" },
					{ id: 11, name: "Navy" },
					{ id: 12, name: "Olive" },
					{ id: 13, name: "Orange" },
					{ id: 14, name: "Pink" },
					{ id: 15, name: "Purple" },
					{ id: 16, name: "Red" },
					{ id: 17, name: "White" },
					{ id: 18, name: "Yellow" },
				]
			},
			{ id: 3, name: "Joke Glasses - Sinistcha" },
			{
				id: 4, name: "Polarized Sports Sunglasses", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Sky Blue" },
					{ id: 4, name: "White" },
					{ id: 5, name: "Yellow" },
				]
			},
			{ id: 5, name: "Replica Ultra Glasses" },
			{ id: 6, name: "Team Star Sunglasses" },
		],
		"bags": [
			{ id: 1, name: "BB School Backpack", startGame: true },
			{
				id: 1, name: "Enamel Backpack", forms: [
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
				id: 1, name: "Triangle Backpack", forms: [
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
					{ id: 18, name: "Pattern I" },
					{ id: 19, name: "Pattern II" },
					{ id: 20, name: "Pattern III" },
				]
			},
		],
		"gloves": [
			{ id: 1, name: "BB School Gloves", startGame: true },
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
