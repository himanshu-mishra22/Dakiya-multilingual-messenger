import Message from "../models/message.js";
import Conversation from "../models/conversation.js";
import { translateStoredMessage } from "../services/translation.js";

export const chatSocket = (io, socket) => {

  const userId = socket.user.userId;

  socket.on("join_conversation", (conversationId) => {
    socket.join(conversationId);
  });

  socket.on("send_message", async ({ conversationId, text }) => {
    const message = await Message.create({
      conversationId,
      senderId: userId,
      originalText: text
    });

    await Conversation.findByIdAndUpdate(conversationId, {
      lastMessageId: message._id,
      updatedAt: new Date()
    });

    io.to(conversationId).emit("new_message", message);
  });

  socket.on("translate_message", async ({ messageId, targetLanguage }) => {
    const translatedText = await translateStoredMessage(
      messageId,
      targetLanguage
    );

    socket.emit("translated_message", {
      messageId,
      targetLanguage,
      translatedText
    });
  });
};
