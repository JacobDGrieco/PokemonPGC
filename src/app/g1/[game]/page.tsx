// src/app/g1/[game]/[category]/page.tsx
import { prisma } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: { params: { game: string; category: string } }) {
  const gameId = `g1-${params.game}`;
  const categoryKey = params.category;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">
        {params.game.toUpperCase()} · {categoryKey}
      </h2>
    </div>
  );
}
