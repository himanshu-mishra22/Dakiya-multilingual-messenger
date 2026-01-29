import { LingoDotDevEngine } from "lingo.dev/sdk";
import dotenv from "dotenv";
dotenv.config();

const lingoDotDev = new LingoDotDevEngine({
  apiKey: process.env.LINGO_API_KEY,
});

export default lingoDotDev;