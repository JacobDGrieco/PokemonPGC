import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <h2>Games</h2>
      <ul>
        <li><Link href="/g10/epilogue">Gen 10 — Epilogue</Link></li>
        <li><Link href="/dex/national">National Dex (demo)</Link></li>
      </ul>
    </>
  );
}
