"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(roomName, ownerId) {
        this.roomName = roomName;
        this.ownerId = ownerId;
        this.users = [ownerId];
    }
}
exports.Room = Room;
//# sourceMappingURL=room.js.map