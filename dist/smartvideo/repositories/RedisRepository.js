"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
const redis = require("redis");
class RedisRepository {
    constructor() {
        this.rooms = new Map();
        this.client = redis.createClient(Number(process.env.REDISPORT), process.env.REDISURL, { no_ready_check: false });
        this.client.on('error', function (err) {
            console.log('redis is not running');
            console.log(err);
        });
        this.client.on('ready', function () {
            console.log('redis is running');
        });
        this.client.auth(process.env.REDISSECRET || '', function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('auth');
        });
        this.client.select(0);
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