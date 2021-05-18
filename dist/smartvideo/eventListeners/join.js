"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinRoomListener = void 0;
class JoinRoomListener {
    constructor(socket, roomsRepository) {
        this.event = 'join-room';
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
        let room = this.roomsRepository.getRoom(roomId);
        if (!room) {
            this.socket.emit('no-room', 'Some error happened');
        }
        else {
            const roomName = room.roomName;
            if (!room.users.includes(userId)) {
                room.users.push(userId);
            }
            this.roomsRepository.setRoom(roomId, room);
            console.log(`User (${userId}) "${userName}" joined "${roomName}" (${roomId})`);
            this.socket.join(roomId);
            this.socket.to(roomId).emit('user-connected', userId, { roomName, userName });
            this.socket.on('disconnect', () => {
                this.socket.to(roomId).emit('user-disconnected', userId, { roomName, userName });
                console.log(`User (${userId}) "${userName}" left "${roomName}" (${roomId}) (disconnected)`);
            });
            //console.log('Current rooms: ', this.roomsRepository.getRooms());
        }
    }
}
exports.JoinRoomListener = JoinRoomListener;
//# sourceMappingURL=join.js.map