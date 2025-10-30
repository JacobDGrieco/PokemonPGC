import { prisma } from "../db";

export async function applyEquivalenceMirrors(userId: string, objectiveId: string) {
  // Find all equivalence groups containing objectiveId
  const eqs = await prisma.objectiveEquivalence.findMany({
    where: { objectiveId },
    select: { equivGroupId: true }
  });

  if (eqs.length === 0) return;

  // Is the triggering objective marked done?
  const base = await prisma.userObjectiveProgress.findUnique({
    where: { userId_objectiveId: { userId, objectiveId } }
  });

  const targetStatus = base?.status ?? "undone";

  for (const { equivGroupId } of eqs) {
    const members = await prisma.objectiveEquivalence.findMany({
      where: { equivGroupId },
      select: { objectiveId: true }
    });

    for (const m of members) {
      if (m.objectiveId === objectiveId) continue; // skip self
      await prisma.userObjectiveProgress.upsert({
        where: { userId_objectiveId: { userId, objectiveId: m.objectiveId } },
        create: {
          userId,
          objectiveId: m.objectiveId,
          status: targetStatus,
          source: `derived:eq:${equivGroupId}`
        },
        update: { status: targetStatus, source: `derived:eq:${equivGroupId}` }
      });
    }
  }
}

export async function applyBidirectionalLinks(userId: string, objectiveId: string) {
  // TODO: load links from a config table or YAML later.
  // Example mapping for demo:
  const pairs: Array<[string, string]> = [
    ["obj.g10.quest.entei", "obj.g10.catch.entei"],
  ];
  for (const [a, b] of pairs) {
    if (objectiveId !== a && objectiveId !== b) continue;
    const partner = objectiveId === a ? b : a;
    const me = await prisma.userObjectiveProgress.findUnique({
      where: { userId_objectiveId: { userId, objectiveId } },
      select: { status: true }
    });
    if (!me) continue;
    await prisma.userObjectiveProgress.upsert({
      where: { userId_objectiveId: { userId, objectiveId: partner } },
      create: { userId, objectiveId: partner, status: me.status, source: "derived:link" },
      update: { status: me.status, source: "derived:link" }
    });
  }
}

export async function applyMacroAutofill(userId: string, objectiveId: string) {
  // TODO: make this data-driven later (e.g., content/games/<game>/rules.yaml).
  const macros: Record<string, string[]> = {
    "obj.g10.main.complete": ["obj.g10.keyitem.xyz", "obj.g10.keyitem.abc"],
  };
  const targets = macros[objectiveId];
  if (!targets) return;
  const me = await prisma.userObjectiveProgress.findUnique({
    where: { userId_objectiveId: { userId, objectiveId } },
    select: { status: true }
  });
  if (!me) return;
  for (const t of targets) {
    await prisma.userObjectiveProgress.upsert({
      where: { userId_objectiveId: { userId, objectiveId: t } },
      create: { userId, objectiveId: t, status: me.status, source: "derived:macro" },
      update: { status: me.status, source: "derived:macro" }
    });
  }
}