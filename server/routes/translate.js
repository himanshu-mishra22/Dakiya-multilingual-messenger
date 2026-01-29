import express from "express";
import { translateRawText } from "../services/translation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text, targetLanguage, sourceLanguage } = req.body;

    if (!text || !targetLanguage) {
      return res.status(400).json({
        error: "text and targetLanguage are required"
      });
    }

    const translatedText = await translateRawText({
      text,
      targetLanguage,
      sourceLanguage
    });

    res.json(translatedText);
  } catch (error) {
    res.status(500).json({ error: "Translation failed", message: error.message });
  }
});

export default router;
