import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  auth: {
    token: ""
  }
});

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("Connection failed:", err.message);
});

socket.on("disconnect", () => {
  console.log("Disconnected");
});
