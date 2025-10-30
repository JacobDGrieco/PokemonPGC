"use client";
import { useState, useEffect } from "react";

type Item = {
  id: string;
  objectiveId: string;
  objective: { id: string; title: string };
};

export default function ClientList({ items }: { items: Item[] }) {
  const [state, setState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // fetch current progress
    (async () => {
      const ids = items.map(i => i.objectiveId);
      const res = await fetch("/api/progress?ids=" + ids.join(","));
      const data = (await res.json()) as { objectiveId: string; status: string }[];
      const map: Record<string, boolean> = {};
      data.forEach(p => (map[p.objectiveId] = p.status === "done"));
      setState(map);
    })();
  }, [items]);

  async function toggle(objId: string, next: boolean) {
    setState(s => ({ ...s, [objId]: next }));
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ objectiveId: objId, status: next ? "done" : "undone" })
    });
    // refetch to include derived mirrors
    const res = await fetch("/api/progress?ids=" + items.map(i => i.objectiveId).join(","));
    const data = (await res.json()) as { objectiveId: string; status: string }[];
    const map: Record<string, boolean> = {};
    data.forEach(p => (map[p.objectiveId] = p.status === "done"));
    setState(map);
  }

  return (
    <>
      <h2>G10 — Epilogue (demo)</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map(it => (
          <li key={it.id} style={{ display: "flex", gap: 8, alignItems: "center", padding: "6px 0" }}>
            <input
              type="checkbox"
              checked={!!state[it.objectiveId]}
              onChange={(e) => toggle(it.objectiveId, e.target.checked)}
            />
            <span>{it.objective.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
