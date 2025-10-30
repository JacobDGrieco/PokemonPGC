export default function Settings() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Settings</h2>
      <div className="space-x-2">
        <button className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700">Export Progress (JSON)</button>
        <button className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700">Import Progress</button>
      </div>
      <p className="text-sm opacity-70">Export/import will be wired to SQLite shortly.</p>
    </div>
  );
}
