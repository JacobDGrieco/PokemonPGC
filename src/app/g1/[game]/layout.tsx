// src/app/g1/[game]/layout.tsx
import Link from "next/link";
import { prisma } from "@/server/db";

export default async function GameLayout({
  children,
  params,
}: { children: React.ReactNode; params: { game: string } }) {
  const gameId = `g1-${params.game}`; // g1-red | g1-blue | g1-yellow

  // Get distinct categories that exist for this game
  const raw = await prisma.checklistItem.findMany({
    where: { gameId },
    select: { categoryKey: true },
    distinct: ["categoryKey"],
    orderBy: { categoryKey: "asc" },
  });
  const categories = raw.map(r => r.categoryKey);
  const defaultCat = categories[0] ?? "dex";

  return (
    <div className="grid md:grid-cols-[220px_1fr] gap-6">
      <aside className="space-y-2">
        <h3 className="text-sm font-semibold opacity-80">Categories</h3>
        <nav className="grid gap-1">
          {categories.length === 0 && (
            <span className="text-sm opacity-60">No categories yet</span>
          )}
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/g1/${params.game}/${cat}`}
              className="text-sm rounded px-2 py-1 hover:bg-zinc-900 border border-transparent hover:border-zinc-800"
            >
              {cat}
            </Link>
          ))}
          {/* Ensure there's always a route to land on */}
          {categories.length === 0 && (
            <Link
              href={`/g1/${params.game}/${defaultCat}`}
              className="hidden"
              aria-hidden
            />
          )}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
