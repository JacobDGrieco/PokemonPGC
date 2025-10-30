import { prisma } from "../src/server/db";

async function main() {
  // Objectives
  const objectives = [
    { id: "obj.g10.quest.entei", title: "Quest — Entei (G10)", gameId: "g10" },
    { id: "obj.g10.catch.entei", title: "Catch Entei (G10)", gameId: "g10" },
    { id: "obj.dex.nat.0244",    title: "National Dex — Entei (#244)", gameId: "cross" },
    { id: "obj.dex.johto.0244",  title: "Johto Dex — Entei (#244)",    gameId: "cross" },
  ];
  for (const o of objectives) {
    await prisma.objective.upsert({
      where: { id: o.id },
      create: o,
      update: { title: o.title, gameId: o.gameId },
    });
  }

  // Checklist items
  const items = [
    { id: "ci.g10.epilogue.quest.entei", gameId: "g10",  categoryKey: "epilogue", objectiveId: "obj.g10.quest.entei", sortOrder: 1 },
    { id: "ci.g10.epilogue.catch.entei", gameId: "g10",  categoryKey: "epilogue", objectiveId: "obj.g10.catch.entei", sortOrder: 2 },
    { id: "ci.dex.national.0244",       gameId: "cross", categoryKey: "dex",      objectiveId: "obj.dex.nat.0244",    sortOrder: 1 },
    { id: "ci.dex.johto.0244",          gameId: "cross", categoryKey: "dex",      objectiveId: "obj.dex.johto.0244",  sortOrder: 2 },
  ];
  for (const it of items) {
    await prisma.checklistItem.upsert({
      where: { id: it.id },
      create: it,
      update: {
        gameId: it.gameId,
        categoryKey: it.categoryKey,
        objectiveId: it.objectiveId,
        sortOrder: it.sortOrder,
      },
    });
  }

  // Equivalence set (regional <-> national)
  const eqMembers = [
    { equivGroupId: "eq.dex.entei", objectiveId: "obj.dex.nat.0244" },
    { equivGroupId: "eq.dex.entei", objectiveId: "obj.dex.johto.0244" },
  ];
  for (const m of eqMembers) {
    // no composite upsert, so simulate
    const exists = await prisma.objectiveEquivalence.findUnique({
      where: { equivGroupId_objectiveId: { equivGroupId: m.equivGroupId, objectiveId: m.objectiveId } },
    }).catch(() => null);
    if (!exists) {
      await prisma.objectiveEquivalence.create({ data: m });
    }
  }

  console.log("Seed complete.");
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
