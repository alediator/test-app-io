"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketIoSubscriber = void 0;
const inMemoryRoomRepository_1 = require("../repositories/inMemoryRoomRepository");
const create_1 = require("./create");
const join_1 = require("./join");
const leave_1 = require("./leave");
const disconnect_1 = require("./disconnect");
class SocketIoSubscriber {
    constructor() {
        // TODO: Use an alternative room reporitory
        this.roomsRepository = new inMemoryRoomRepository_1.InMemoryRoomRepository();
    }
    subscribe(io) {
        io.on('connection', (socket) => {
            console.log('Connected ', socket.id);
            const createListener = new create_1.CreateRoomListener(socket, this.roomsRepository);
            const joinListener = new join_1.JoinRoomListener(socket, this.roomsRepository);
            const leaveListener = new leave_1.LeaveRoomListener(socket, this.roomsRepository);
            const disconnectListener = new disconnect_1.DisconnectListener(io, socket);
        });
    }
}
exports.SocketIoSubscriber = SocketIoSubscriber;
//# sourceMappingURL=subscriber.js.map