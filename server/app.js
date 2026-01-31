import express from "express";
import cors from "cors";
import translateRoutes from "./routes/translate.js";
import authRoutes from "./routes/authRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test",(req,res)=>{
    res.json({message:"Hello World"})
});

app.use("/api/translate", translateRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

export default app;
