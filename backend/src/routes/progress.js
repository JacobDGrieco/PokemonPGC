// backend/src/routes/progress.js
import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

function requireAuth(req, res, next) {
	if (!req.session || !req.session.userId) {
		return res.status(401).json({ error: "Not authenticated." });
	}
	next();
}

// GET /api/progress/:gameKey
router.get("/:gameKey", requireAuth, async (req, res) => {
	const { gameKey } = req.params;

	try {
		const save = await prisma.gameSave.findUnique({
			where: {
				userId_gameKey: {
					userId: req.session.userId,
					gameKey,
				},
			},
		});

		if (!save) {
			return res.status(404).json({ save: null });
		}

		return res.json({
			save: {
				gameKey: save.gameKey,
				data: save.data,
				updatedAt: save.updatedAt,
			},
		});
	} catch (err) {
		console.error("[progress] GET error:", err);
		return res.status(500).json({ error: "Internal error." });
	}
});

// PUT /api/progress/:gameKey
router.put("/:gameKey", requireAuth, async (req, res) => {
	const { gameKey } = req.params;
	const { data } = req.body || {};

	if (!data || typeof data !== "object") {
		return res.status(400).json({ error: "Missing or invalid data." });
	}

	try {
		const save = await prisma.gameSave.upsert({
			where: {
				userId_gameKey: {
					userId: req.session.userId,
					gameKey,
				},
			},
			update: {
				data,
			},
			create: {
				userId: req.session.userId,
				gameKey,
				data,
			},
			select: {
				gameKey: true,
				updatedAt: true,
			},
		});

		return res.json({ save });
	} catch (err) {
		console.error("[progress] PUT error:", err);
		return res.status(500).json({ error: "Internal error." });
	}
});

export default router;
