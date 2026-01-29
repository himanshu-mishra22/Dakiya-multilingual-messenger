import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    nativeLanguage: { type: String, default: "en" },
    status: { type: String, enum: ["online", "offline"], default: "offline" }
});

export default mongoose.model("User", userSchema);
