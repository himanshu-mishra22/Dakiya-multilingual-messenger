import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        index: true
    },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    originalText: { type: String, required: true },
    sourceLanguage: String,
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);
