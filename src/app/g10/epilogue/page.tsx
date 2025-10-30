import { prisma } from "@/server/db";
import ClientList from "./ui";

export const dynamic = "force-dynamic";

export default async function Page() {
  const items = await prisma.checklistItem.findMany({
    where: { gameId: "g10", categoryKey: "epilogue" },
    orderBy: { sortOrder: "asc" },
    include: { objective: true }
  });
  return <ClientList items={items} />;
}
