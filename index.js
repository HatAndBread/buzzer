const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = (module.exports = require('socket.io')(http));
const path = require('path');
const createNewGame = require('./create-new-game.js');
const images = require('./images');
const activeGames = createNewGame.activeGames;
const gameSearch = require('./game-search');
const join = require('./join');
const addP = require('./add-player');

const nameSpace = io.of('/games');

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/create', createNewGame.router);
app.use('/join', join);
app.use('/images', images);
app.use('/add-player', addP);

app.get('/', (reg, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

nameSpace.on('connection', (socket) => {
  console.log('a connection!');
  socket.on('disconnect', () => {
    console.log('disconnected!');
  });
  socket.on('join', (room) => {
    const num = room.substring(1); //substring removes character
    const game = gameSearch(num);
    socket.join(room);
    !game.host ? (game.host = socket.id) : nameSpace.to(game.host).emit('newPlayer', game); // Create host when room created
    console.log(game);
  });
  socket.on('buzz', (player, code, answer) => {
    // player buzzed
    console.log('buzz received');
    const game = gameSearch(code);
    game && nameSpace.to(game.host).emit('buzz', player, answer);
    console.log(game);
    console.log(player);
    console.log(answer);
  });
  socket.on('host', (code) => {
    // Game host started
    const room = `/${code}`;
    socket.to(room).emit('start');
  });
  socket.on('allowAnswers', (code) => {
    const room = `/${code}`;
    socket.to(room).emit('allowAnswers');
    console.log('allowAnswers!');
  });
});

http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
