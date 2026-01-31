interface Props {
  onLogout: () => void;
}

export default function Sidebar({ onLogout }: Props) {
  return (
    <aside className="border-r border-slate-800 p-4 space-y-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Users</h3>
        <button onClick={onLogout} className="text-sm text-red-400">
          Logout
        </button>
      </div>

      {/* placeholder users */}
      <div className="p-2 rounded-lg border border-slate-800">John</div>
      <div className="p-2 rounded-lg border border-slate-800">Maria</div>
    </aside>
  );
}
