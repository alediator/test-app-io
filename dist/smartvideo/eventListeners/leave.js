"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRoomListener = void 0;
class LeaveRoomListener {
    constructor(socket, roomsRepository) {
        this.event = 'leave-room';
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
        let roomName = metadata && metadata.roomName ? metadata.roomName : null;
        let room = this.roomsRepository.getRoom(roomId);
        if (room) {
            roomName = room.roomName;
            room.users = room.users.filter((id) => id !== userId);
            this.roomsRepository.setRoom(roomId, room);
        }
        this.socket.to(roomId).emit('user-disconnected', userId, { roomName, userName });
        console.log(`User (${userId}) "${userName}" left "${roomName}" (${roomId})`);
        this.roomsRepository.deleteIfEmpty(roomId);
        //console.log('Current rooms: ', this.roomsRepository.getRooms());
    }
}
exports.LeaveRoomListener = LeaveRoomListener;
//# sourceMappingURL=leave.js.map