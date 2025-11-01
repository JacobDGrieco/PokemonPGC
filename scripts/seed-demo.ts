// scripts/seed-demo.ts
import { prisma } from "../src/server/db";

async function upsertObjective(id: string, title: string, gameId?: string) {
  await prisma.objective.upsert({
    where: { id },
    create: { id, title, gameId },
    update: { title, gameId },
  });
}

async function upsertCI(data: {
  id: string; gameId: string; categoryKey: string; objectiveId: string; sortOrder: number;
}) {
  await prisma.checklistItem.upsert({
    where: { id: data.id },
    create: data,
    update: {
      gameId: data.gameId, categoryKey: data.categoryKey,
      objectiveId: data.objectiveId, sortOrder: data.sortOrder,
    },
  });
}

async function main() {
  // --- Existing demo (Entei) stays ---

  // --- Gen 1 Games (Red/Blue/Yellow) Dex examples ---
  const g1Games = ["red", "blue", "yellow"] as const;
  const mons = [
    { ndex: "0001", name: "Bulbasaur" },
    { ndex: "0004", name: "Charmander" },
    { ndex: "0007", name: "Squirtle" },
  ];

  for (const g of g1Games) {
    const gameId = `g1-${g}`;
    for (let idx = 0; idx < mons.length; idx++) {
      const m = mons[idx];
      const objId = `obj.${gameId}.dex.${m.ndex}`;
      await upsertObjective(objId, `${m.ndex} — ${m.name}`, gameId);
      await upsertCI({
        id: `ci.${gameId}.dex.${m.ndex}`,
        gameId,
        categoryKey: "dex",
        objectiveId: objId,
        sortOrder: idx + 1,
      });
    }
  }

  console.log("Seed complete (G1 Dex demo).");
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
