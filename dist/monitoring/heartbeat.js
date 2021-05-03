"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartBeat = void 0;
class HeartBeat {
    constructor(app, path) {
        this.app = app;
        this.path = path;
    }
    config() {
        this.app.head(this.path, this.handle);
    }
    handle(req, res) {
        console.log('Ping received');
        res.sendStatus(204);
    }
    getRoute() {
        this.config();
    }
}
exports.HeartBeat = HeartBeat;
//# sourceMappingURL=heartbeat.js.map