import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import { chatSocket } from "./socket/socket.js";
import { socketAuth } from "./middleware/sockeMid.js";

dotenv.config();
connectDB();

const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" },
});

io.use(socketAuth);

io.on("connection", (socket) => {
    chatSocket(io, socket);
});

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
