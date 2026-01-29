import express from "express";
import cors from "cors";
import translateRoutes from "./routes/translate.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test",(req,res)=>{
    res.json({message:"Hello World"})
});

app.use("/api/translate", translateRoutes);

export default app;
