interface Props {
  text: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function MessageInput({ text, onChange, onSend }: Props) {
  return (
    <div className="border-t border-slate-800 p-3 flex gap-2">
      <input
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
      />
      <button
        onClick={onSend}
        className="px-4 rounded-lg bg-blue-600 hover:bg-blue-500"
      >
        Send
      </button>
    </div>
  );
}
