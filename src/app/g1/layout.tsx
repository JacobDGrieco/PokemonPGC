// src/app/g1/layout.tsx
import Link from "next/link";

const G1_GAMES = [
  { key: "red",    label: "Red" },
  { key: "blue",   label: "Blue" },
  { key: "yellow", label: "Yellow" },
];

export default function G1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3 text-sm">
        <span className="opacity-70">Gen 1:</span>
        {G1_GAMES.map(g => (
          <Link
            key={g.key}
            href={`/g1/${g.key}/dex`}
            className="rounded px-2 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800"
          >
            {g.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
