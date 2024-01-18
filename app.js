const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIo = require("socket.io");

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running ${PORT}`));
