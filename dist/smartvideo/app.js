"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartVideo = void 0;
const express = require("express");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const subscriber_1 = require("./eventListeners/subscriber");
class SmartVideo {
    constructor() {
        this.app = express();
        this.app.use(express.static('public'));
        this.port = process.env.PORT || SmartVideo.PORT;
        const httpServer = http_1.createServer(this.app);
        httpServer.listen(this.port, () => {
            console.log('Running smartvideo-io on port %s', this.port);
            const io = new socket_io_1.Server(httpServer, {
                cors: {
                    origin: true,
                    methods: ["HEAD", "GET", "POST"],
                    credentials: true
                }
            });
            const subscriber = new subscriber_1.SocketIoSubscriber();
            subscriber.subscribe(io);
        });
    }
    getApp() {
        return this.app;
    }
}
exports.SmartVideo = SmartVideo;
SmartVideo.PORT = 3000;
//# sourceMappingURL=app.js.map