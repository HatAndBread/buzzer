const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = (module.exports = require('socket.io')(http));
const path = require('path');
const createNewGame = require('./create-new-game.js');
const activeGames = createNewGame.activeGames;
const gameSearch = require('./game-search');
const join = require('./join');
const addP = require('./add-player');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/create', createNewGame.router);
app.use('/join', join);
app.use('/add-player', addP);

app.get('/', (reg, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a connection!');
  socket.on('button', (msg) => {
    console.log(msg);
    socket.emit('yoyo', msg);
    socket.broadcast.emit('yoyo', `somebody said : ${msg}`);
  });
  socket.on('disconnect', () => {
    console.log('disconnected!');
  });
  socket.on('join', (room) => {
    const num = room.substring(1); //substring removes character
    const game = gameSearch(num);
    !game.host && (game.host = socket.id);
    console.log(room, 'joined');
    socket.join(room);
    io.to(room).emit('new', 'howdy');
  });
  socket.on('buzz', (player, code) => {
    const game = gameSearch(code);
    game && io.to(game.host).emit('buzz', player);
    console.log(game);
    console.log(player);
  });
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
