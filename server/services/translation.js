import Message from "../models/message.js";
import MessageTranslation from "../models/messageTranslation.js";
import lingoDotDev from "../config/lingo.js";

export const translateStoredMessage = async (messageId, targetLanguage) => {
  const cached = await MessageTranslation.findOne({
    messageId,
    targetLanguage
  });

  if (cached) return cached.translatedText;

  const message = await Message.findById(messageId);
  if (!message) throw new Error("Message not found");

  const result = await lingoDotDev.localizeText(message.originalText, {
    sourceLocale: 'en',
    targetLocale: targetLanguage
  });

  await MessageTranslation.create({
    messageId,
    targetLanguage,
    translatedText: result
  });

  return result;
};

export const translateRawText = async ({
  text,
  targetLanguage
}) => {
  const result = await lingoDotDev.localizeText(text, {
    sourceLocale: 'en',
    targetLocale: targetLanguage
  });

  // console.log(result);
  return result;
};
