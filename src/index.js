const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connect", (socket) => {
    console.log(socket);
});


app.use(express.static("public", {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
        }
    }
}));

httpServer.listen(5000);