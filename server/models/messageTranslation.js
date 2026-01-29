import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
  messageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    index: true
  },
  targetLanguage: String,
  translatedText: String,
  translatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("MessageTranslation", translationSchema);
