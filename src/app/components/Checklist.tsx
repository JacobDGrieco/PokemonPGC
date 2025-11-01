// src/components/Checklist.tsx
"use client";
import { useEffect, useState } from "react";

type Props = { items: { id: string; objectiveId: string; title: string }[] };

export default function Checklist({ items }: Props) {
  const [state, setState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const ids = items.map(i => i.objectiveId);
    if (!ids.length) return;
    (async () => {
      const res = await fetch("/api/progress?ids=" + ids.join(","));
      const data = (await res.json()) as { objectiveId: string; status: string }[];
      setState(Object.fromEntries(data.map(p => [p.objectiveId, p.status === "done"])));
    })();
  }, [items]);

  async function toggle(objId: string, next: boolean) {
    setState(s => ({ ...s, [objId]: next }));
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ objectiveId: objId, status: next ? "done" : "undone" }),
    });
    // Optional re-fetch to include any derived effects
    const ids = items.map(i => i.objectiveId);
    const res = await fetch("/api/progress?ids=" + ids.join(","));
    const data = (await res.json()) as { objectiveId: string; status: string }[];
    setState(Object.fromEntries(data.map(p => [p.objectiveId, p.status === "done"])));
  }

  return (
    <ul className="divide-y divide-zinc-800 rounded-md border border-zinc-800 bg-zinc-950">
      {items.map((it) => (
        <li key={it.id} className="flex items-center gap-3 p-3">
          <input
            className="size-4 accent-red-500"
            type="checkbox"
            checked={!!state[it.objectiveId]}
            onChange={(e) => toggle(it.objectiveId, e.target.checked)}
          />
          <span className="text-sm">{it.title}</span>
        </li>
      ))}
      {items.length === 0 && (
        <li className="p-3 text-sm opacity-70">No items yet in this category.</li>
      )}
    </ul>
  );
}
