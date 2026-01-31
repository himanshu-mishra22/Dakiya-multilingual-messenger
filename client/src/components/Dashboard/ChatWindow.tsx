import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface Message {
  _id?: string;
  originalText: string;
}

interface Props {
  messages: Message[];
  text: string;
  onTextChange: (v: string) => void;
  onSend: () => void;
}

export default function ChatWindow({
  messages,
  text,
  onTextChange,
  onSend,
}: Props) {
  return (
    <main className="flex flex-col">
      <MessageList messages={messages} />
      <MessageInput text={text} onChange={onTextChange} onSend={onSend} />
    </main>
  );
}
