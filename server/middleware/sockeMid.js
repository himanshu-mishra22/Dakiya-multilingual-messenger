import jwt from "jsonwebtoken";

export const socketAuth = (socket, next) => {
  const token = socket.handshake.auth?.token;

  if (!token) {
    return next(new Error("Authentication error: token missing"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach identity to socket
    socket.user = {
      userId: decoded.userId
    };

    next();
  } catch (err) {
    next(new Error("Authentication error: invalid token"));
  }
};
