import MessageBubble from "./MessageBubble";

interface Message {
  _id?: string;
  originalText: string;
  senderId?: string;
}

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <div className="flex-1 p-4 space-y-3 overflow-y-auto">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          text={msg.originalText}
          mine={false} // we’ll fix this later with userId
        />
      ))}
    </div>
  );
}
