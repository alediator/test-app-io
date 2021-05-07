"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisconnectListener = void 0;
class DisconnectListener {
    constructor(io, socket) {
        this.event = 'disconnect';
        this.io = io;
        this.socket = socket;
        this.addListener();
    }
    addListener() {
        // TODO: Check compatibility with socket.io > 4.0.0
        // this.io.on(this.event, (reason: string | null) => {
        //     this.handle(reason);
        // });
        this.socket.on(this.event, () => {
            this.handle(null);
        });
    }
    handle(reason) {
        console.log('Socket ', this.socket.id, ' disconnected because of: ', reason);
    }
}
exports.DisconnectListener = DisconnectListener;
//# sourceMappingURL=disconnect.js.map