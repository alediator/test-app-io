const express = require('express');
const app = express();
var cors = require('cors')
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

app.use(cors());

app.use('/static', express.static('public'));

app.use('/assets', express.static('public/assets'));

app.get('/**', (req, res) => {
    return res.sendfile(path.join(__dirname + '/public/index.html'));
});

// root head
app.head('/_ping', function(req, res){
    console.log('Ping received');
    res.sendStatus(204);
});

// TODO: use REDIS for storing this stuff
let rooms = {};
let users = {};

io.on('connection', socket => {
    console.log('Socket conneted ' + socket.id);

    socket.on('join-room', (roomId, userId, metadata) => {

        console.log('join-room');
        console.log(metadata);


        userName = metadata && metadata.userName ? metadata.userName: null;
        roomName = metadata && metadata.roomName ? metadata.roomName: null;

        if (rooms[roomId]) {
            roomName = rooms[roomId].roomName;
            rooms[roomId].users.push(userId);
        } else {
            rooms[roomId] = {
                ownerId: userId,
                roomName: roomName,
                users: [userId]
            };
        }


        console.log(`User (${userId}) "${userName}" joined "${roomName}" (${roomId})`);
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId, { roomName, userName });

        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId, { roomName, userName });
            console.log(`User (${userId}) "${userName}" left "${roomName}" (${roomId}) (disconnected)`);
        })
    });

    socket.on('leave-room', (roomId, userId, metadata) => {

        console.log('leave-room');
        console.log(metadata);


        userName = metadata && metadata.userName ? metadata.userName: null;
        roomName = metadata && metadata.roomName ? metadata.roomName: null;

        if (rooms[roomId]) {
            roomName = rooms[roomId].roomName;
            rooms[roomId].users = rooms[roomId].users.filter((id) => id != userId);
        }


        socket.to(roomId).broadcast.emit('user-disconnected', userId, { roomName, userName });
        console.log(`User (${userId}) "${userName}" left "${roomName}" (${roomId})`);

        console.log(rooms[roomId]);
        if(rooms[roomId] && rooms[roomId].users.lenght === 0){
            delete rooms.roomId;
        }
    })

    socket.on("disconnect", (reason) => {
        console.log('Socket ' + socket.id + ' disconnected because of: ' + reason);
        console.log('Rooms: ', io.sockets.adapter.rooms);
    });
});

const port = process.env.NODE_PORT ? process.env.NODE_PORT : (process.env.PORT ? process.env.PORT : 3000);

console.log('Running socket.io in ' + port);
server.listen(port);