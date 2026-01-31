interface Props {
  text: string;
  mine?: boolean;
}

export default function MessageBubble({ text, mine }: Props) {
  return (
    <div
      className={`max-w-xs p-3 rounded-xl ${
        mine ? "bg-blue-600 ml-auto" : "bg-slate-800"
      }`}
    >
      {text}
    </div>
  );
}
