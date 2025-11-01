import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <header className="border-b border-zinc-800">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Pokémon Post-Game Checklist</h1>
            <nav className="text-sm opacity-80 space-x-4">
              <a href="/" className="hover:opacity-100">Home</a>
              <a href="/dex/national" className="hover:opacity-100">Dex</a>
              <a href="/g1/red" className="hover:opacity-100">Red</a>
              <a href="/g1/blue" className="hover:opacity-100">Blue</a>
              <a href="/g1/yellow" className="hover:opacity-100">Yellow</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
