"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRoomRepository = void 0;
class InMemoryRoomRepository {
    constructor() {
        this.rooms = new Map();
    }
    getRoom(roomId) {
        const room = this.rooms.get(roomId);
        return room ? room : null;
    }
    setRoom(roomId, value) {
        this.rooms.set(roomId, value);
    }
    deleteIfEmpty(roomId) {
        const room = this.rooms.get(roomId);
        if (room && room.users.length === 0) {
            console.log('Room deleted because is empty: ', roomId);
            this.rooms.delete(roomId);
        }
    }
    getRooms() {
        return this.rooms;
    }
}
exports.InMemoryRoomRepository = InMemoryRoomRepository;
//# sourceMappingURL=inMemoryRoomRepository.js.map