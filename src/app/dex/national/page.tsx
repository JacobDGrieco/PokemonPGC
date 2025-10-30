import { prisma } from "@/server/db";
import DexUI from "./ui";
export const dynamic = "force-dynamic";

export default async function Page() {
  const items = await prisma.checklistItem.findMany({
    where: { gameId: "cross", categoryKey: "dex" },
    orderBy: { sortOrder: "asc" },
    include: { objective: true }
  });
  return <DexUI items={items} />;
}
