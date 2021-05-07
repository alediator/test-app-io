"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heartbeat_1 = require("./heartbeat");
const app = {
    head: jest.fn(),
    listen: jest.fn()
};
jest.doMock('express', () => {
    return () => {
        return app;
    };
});
const heartbeat = new heartbeat_1.HeartBeat(app, '/');
heartbeat.getRoute();
test('should call head when get route', () => {
    expect(app.head).toHaveBeenCalledTimes(1);
});
const req = {};
const res = {
    sendStatus: jest.fn()
};
heartbeat.handle(req, res);
test('should return 204', () => {
    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    expect(res.sendStatus).toHaveBeenCalledWith(204);
});
//# sourceMappingURL=heartbeat.spec.js.map