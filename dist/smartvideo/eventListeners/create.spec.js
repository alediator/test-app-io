"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const moq_ts_1 = require("moq.ts");
const userId = 'thisistheuserid';
const userName = 'thisistheusername';
const roomId = '156464adf354';
const roomName = 'MyCoolRoom';
const socketMock = new moq_ts_1.Mock();
const repositoryMock = new moq_ts_1.Mock();
const socket = socketMock.object();
socket.on = jest.fn();
socket.join = jest.fn();
const repository = repositoryMock.object();
repository.setRoom = jest.fn((currentRoomId, room) => {
    expect(currentRoomId).toEqual(roomId);
    expect(room.ownerId).toEqual(userId);
    expect(room.roomName).toEqual(roomName);
    expect(room.users).toEqual([userId]);
});
const listener = new create_1.CreateRoomListener(socket, repository);
listener.handle(roomId, userId, { userName, roomName });
test('should save the room', () => {
    expect(repository.setRoom).toHaveBeenCalledTimes(1);
});
test('should join the room', () => {
    expect(socket.join).toHaveBeenCalledTimes(1);
    expect(socket.join).toHaveBeenCalledWith(roomId);
});
test('add 2 event listeners', () => {
    expect(socket.on).toHaveBeenCalledTimes(2);
});
//# sourceMappingURL=create.spec.js.map