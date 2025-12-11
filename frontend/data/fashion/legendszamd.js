window.DATA.fashion = window.DATA.fashion || {};
window.DATA.fashion["legendszamd"] = {
	categories: [
		{
			id: "tops", label: "Tops", items: [
				{
					id: "holo-blouson-and-off-shuolder", name: "Holo Blouson & Off-Shoulder", forms: [
						{ id: "holo-blouson-and-off-shuolder-1", name: "X - Holo Blue / White", startGame: true, },
						{ id: "holo-blouson-and-off-shuolder-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{
					id: "holo-blouson-and-v-neck", name: "Holo Blouson & V-Neck", forms: [
						{ id: "holo-blouson-and-v-neck-1", name: "X - Holo Blue / White", startGame: true, },
						{ id: "holo-blouson-and-v-neck-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{ id: "grishams-chef-top", name: "Grisham's Chef Top Set", },
			],
		},
		{
			id: "bottoms", label: "Bottoms", items: [
				{
					id: "holo-skinny-jeans", name: "Holo Skinny Jeans", forms: [
						{ id: "holo-skinny-jeans-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-skinny-jeans-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{
					id: "holo-wide-leg-pants", name: "Holo Wide-Leg Pants", forms: [
						{ id: "holo-blouson-and-v-neck-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-blouson-and-v-neck-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{ id: "grishams-aproned-pants", name: "Grisham's Aproned Pants", },
			],
		},
		{
			id: "all-in-one", label: "All-in-One", items: [
				{ id: "canaris-tracksuit", name: "Canari's Tracksuit Set", taskSync: ["legendszamd-side-quests-2-32"], fashionSync: ["canaris-satchel"], },
				{ id: "ivors-gi", name: "Ivor's Gi Set", taskSync: ["legendszamd-side-quests-2-33"], fashionSync: ["ivors-training-gloves", "ivors-geta-sandals", "ivors-clasped-satchel"], },
				{ id: "corbeaus-suit-and-tie", name: "Corbeau's Suit & Tie Set", taskSync: ["legendszamd-side-quests-2-34"], fashionSync: ["corbeaus-glasses", "corbeaus-leather-satchel"], },
				{ id: "jacinthes-dress", name: "Jacinthe's Dress", taskSync: ["legendszamd-side-quests-2-35"], },
			],
		},
		{
			id: "headwear", label: "Headwear", items: [
				{
					id: "holo-striped-trilby", name: "Holo Striped Trilby", forms: [
						{ id: "holo-striped-trilby-1", name: "X - Black / Holo Blue", startGame: true, },
						{ id: "holo-striped-trilby-2", name: "Y - Black / Holo Pink", startGame: true, },
					]
				},
				{ id: "jacinthes-pillbox-hat", name: "Jacinthe's Pillbox Hat", taskSync: ["legendszamd-side-quests-2-35"], },
			],
		},
		{
			id: "eyewear", label: "Eyewear", items: [
				{
					id: "holo-visor", name: "Holo Visor", forms: [
						{ id: "holo-visor-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-visor-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{ id: "corbeaus-glasses", name: "Corbeau's Glasses", taskSync: ["legendszamd-side-quests-2-34"], fashionSync: ["corbeaus-suit-and-tie", "corbeaus-leather-satchel"], },
				{ id: "grishams-glasses", name: "Grisham's Glasses", },
			],
		},
		{
			id: "gloves", label: "Gloves", items: [
				{ id: "ivors-training-gloves", name: "Ivor's Training Gloves", taskSync: ["legendszamd-side-quests-2-33"], fashionSync: ["ivors-gi", "ivors-geta-sandals", "ivors-clasped-satchel"], },
				{ id: "jacinthes-beribboned-gloves", name: "Jacinthe's Beribboned Gloves", taskSync: ["legendszamd-side-quests-2-35"], },
			]
		},
		{
			id: "legwear", label: "Legwear", items: [
				{ id: "jacinthes-mesh-tights", name: "Jacinthe's Mesh Tights", taskSync: ["legendszamd-side-quests-2-35"], },
			]
		},
		{
			id: "footwear", label: "Footwear", items: [
				{
					id: "holo-mid-top-sneakers", name: "Holo Mid-Top Sneakers", forms: [
						{ id: "holo-mid-top-sneakers-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-mid-top-sneakers-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{
					id: "holo-sock-sneakers", name: "Holo Sock Sneakers", forms: [
						{ id: "holo-sock-sneakers-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-sock-sneakers-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{ id: "ivors-geta-sandals", name: "Ivor's Geta Sandals", taskSync: ["legendszamd-side-quests-2-33"], fashionSync: ["ivors-training-gloves", "ivors-gi", "ivors-clasped-satchel"], },
				{ id: "jacinthes-bejeweled-pumps", name: "Jacinthe's Bejeweled Pumps", taskSync: ["legendszamd-side-quests-2-35"], },
				{ id: "grishams-leather-shoes", name: "Grisham's Leather Shoes", },
			],
		},
		{
			id: "satchels", label: "Satchels", items: [
				{
					id: "holo-round", name: "Holo Round Satchel", forms: [
						{ id: "holo-round-1", name: "X - Holo Blue", startGame: true, },
						{ id: "holo-round-2", name: "Y - Holo Pink", startGame: true, },]
				},
				{ id: "canaris-satchel", name: "Canari's Satchel", taskSync: ["legendszamd-side-quests-2-32"], fashionSync: ["canaris-tracksuit"], },
				{ id: "ivors-clasped-satchel", name: "Ivor's Clasped Satchel", taskSync: ["legendszamd-side-quests-2-33"], fashionSync: ["ivors-training-gloves", "ivors-geta-sandals", "ivors-gi"], },
				{ id: "corbeaus-leather-satchel", name: "Corbeau's Leather Satchel", taskSync: ["legendszamd-side-quests-2-34"], fashionSync: ["corbeaus-suit-and-tie", "corbeaus-glasses"], },
				{ id: "jacinthes-bejeweled-satchel", name: "Jacinthe's Bejeweled Satchel", taskSync: ["legendszamd-side-quests-2-35"], },
				{ id: "grishams-round-satchel", name: "Grisham's Round Satchel", },
			],
		},
	],
};

