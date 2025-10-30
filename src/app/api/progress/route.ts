import { NextRequest } from "next/server";
import { prisma } from "@/server/db";
import { getUserId } from "@/server/auth-lite";
import { applyEquivalenceMirrors } from "@/server/rules/evaluator";
import { applyBidirectionalLinks, applyMacroAutofill } from "@/server/rules/evaluator";

export async function GET(req: NextRequest) {
  const userId = getUserId();
  const ids = (req.nextUrl.searchParams.get("ids") ?? "").split(",").filter(Boolean);
  if (ids.length === 0) return Response.json([]);
  const rows = await prisma.userObjectiveProgress.findMany({
    where: { userId, objectiveId: { in: ids } },
    select: { objectiveId: true, status: true }
  });
  return Response.json(rows);
}

export async function POST(req: Request) {
  const userId = getUserId();
  const { objectiveId, status } = await req.json() as { objectiveId: string; status: "done" | "undone" };

  await prisma.$transaction(async (tx: { userObjectiveProgress: { upsert: (arg0: { where: { userId_objectiveId: { userId: string; objectiveId: string; }; }; create: { userId: string; objectiveId: string; status: "undone" | "done"; source: string; }; update: { status: "undone" | "done"; source: string; }; }) => any; }; }) => {
    await tx.userObjectiveProgress.upsert({
      where: { userId_objectiveId: { userId, objectiveId } },
      create: { userId, objectiveId, status, source: "manual" },
      update: { status, source: "manual" }
    });
  });

  // Apply equivalence mirrors (regional<->national, etc.)
  await applyEquivalenceMirrors(userId, objectiveId);
  await applyBidirectionalLinks(userId, objectiveId);
  await applyMacroAutofill(userId, objectiveId);
  return new Response("ok");
}