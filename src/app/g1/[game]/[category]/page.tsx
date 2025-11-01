// src/app/g1/[game]/[category]/page.tsx
import { prisma } from "@/server/db";
import Checklist from "@/app/components/Checklist";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: { params: { game: string; category: string } }) {
  const gameId = `g1-${params.game}`;
  const categoryKey = params.category;

  const items = await prisma.checklistItem.findMany({
    where: { gameId, categoryKey },
    orderBy: { sortOrder: "asc" },
    include: { objective: true },
  });

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">
        {params.game.toUpperCase()} · {categoryKey}
      </h2>
      <Checklist items={items.map(i => ({
        id: i.id,
        objectiveId: i.objectiveId,
        title: i.objective.title
      }))} />
    </div>
  );
}
