export default function Chat() {
  return (
    <div className="h-screen grid grid-cols-[260px_1fr] bg-slate-900 text-slate-200">

      {/* Sidebar */}
      <aside className="border-r border-slate-800 p-4 space-y-3">
        <h3 className="font-semibold">Chats</h3>
        <div className="p-2 rounded-lg border border-slate-800 hover:bg-slate-800 cursor-pointer">
          John
        </div>
        <div className="p-2 rounded-lg border border-slate-800 hover:bg-slate-800 cursor-pointer">
          Maria
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex flex-col">
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          <div className="max-w-xs p-3 rounded-xl bg-slate-800">
            Hello 👋
          </div>

          <div className="max-w-xs p-3 rounded-xl bg-blue-600 ml-auto">
            Hi there!
          </div>
        </div>

        <div className="border-t border-slate-800 p-3 flex gap-2">
          <input
            placeholder="Type a message…"
            className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="px-4 rounded-lg bg-blue-600 hover:bg-blue-500">
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
