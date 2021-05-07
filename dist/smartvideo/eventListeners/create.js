"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomListener = void 0;
const room_1 = require("../model/room");
class CreateRoomListener {
    constructor(socket, roomsRepository) {
        this.event = 'create-room';
        this.socket = socket;
        this.roomsRepository = roomsRepository;
        this.addListener();
    }
    addListener() {
        this.socket.on(this.event, (roomId, userId, metadata) => {
            this.handle(roomId, userId, metadata);
        });
    }
    handle(roomId, userId, metadata) {
        console.log('Event ', this.event);
        const userName = metadata && metadata.userName ? metadata.userName : null;
        const roomName = metadata && metadata.roomName ? metadata.roomName : null;
        const room = new room_1.Room(roomName, userId);
        this.roomsRepository.setRoom(roomId, room);
        console.log(`User (${userId}) "${userName}" created "${roomName}" (${roomId})`);
        this.socket.join(roomId);
        this.socket.on('disconnect', () => {
            this.socket.to(roomId).emit('user-disconnected', userId, { roomName, userName });
            console.log(`User (${userId}) "${userName}" left "${roomName}" (${roomId}) (disconnected)`);
        });
    }
}
exports.CreateRoomListener = CreateRoomListener;
//# sourceMappingURL=create.js.map