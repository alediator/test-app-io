"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
const redis = require("redis");
class RedisRepository {
    constructor() {
        this.client = redis.createClient({
            port: Number(process.env.REDISPORT),
            host: process.env.REDISURL,
            password: process.env.REDISSECRET,
        });
        this.rooms = new Map();
    }
    getRoom(roomId) {
        let room = null;
        try {
            this.client.get(roomId, async (err, res) => {
                if (err)
                    throw err;
                if (res) {
                    room = res;
                }
                else {
                    room = null;
                }
            });
        }
        catch (err) {
            console.log(err);
        }
        return room;
    }
    setRoom(roomId, value) {
        console.log("creando");
        this.client.setex(roomId, 86400, JSON.stringify(value));
    }
    deleteIfEmpty(roomId) {
        this.client.DEL(roomId);
    }
    getRooms() {
        return this.rooms;
    }
}
exports.RedisRepository = RedisRepository;
//# sourceMappingURL=RedisRepository.js.map