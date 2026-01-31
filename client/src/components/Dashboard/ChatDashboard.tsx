import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { connectSocket, getSocket, disconnectSocket } from "../../utils/socket";

import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";

interface Message {
  originalText: string;
}

const CONVERSATION_ID = "REPLACE_WITH_REAL_ID";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const socket = connectSocket(token);

    socket.emit("join_conversation", CONVERSATION_ID);

    socket.on("new_message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;

    const socket = getSocket();
    if (!socket) return;

    socket.emit("send_message", {
      conversationId: CONVERSATION_ID,
      text,
    });

    setText("");
  };

  const logout = () => {
    localStorage.removeItem("token");
    disconnectSocket();
    navigate("/login");
  };

  return (
    <div className="h-screen grid grid-cols-[260px_1fr] bg-slate-900 text-slate-200">
      <Sidebar onLogout={logout} />
      <ChatWindow
        messages={messages}
        text={text}
        onTextChange={setText}
        onSend={sendMessage}
      />
    </div>
  );
}
