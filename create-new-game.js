const express = require('express');
const router = express.Router();
const io = require('./index');
const activeGames = [];

router.get('/', (req, res) => {
  res.send({ gameNumber: getGameCode() });
});

router.post('/', (req, res) => {
  let code = req.body.code;
  console.log(activeGames);
  res.send({ res: 'ended' });
  for (let i = 0; i < activeGames.length; i++) {
    let a = activeGames[i];
    if (a.code === code) {
      activeGames.splice(i, 1);
      console.log(activeGames, 'after');
      break;
    }
  }
});

class Game {
  constructor(code) {
    this.code = code;
    this.players = [];
  }
}

function getGameCode() {
  const ranNum = `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;

  for (let i = 0; i < activeGames.length; i++) {
    let a = activeGames[i];
    if (a.code === ranNum) {
      getGameCode();
      break;
    }
  }
  let game = new Game(ranNum);
  activeGames.push(game);
  console.log(activeGames);
  return ranNum;
}

module.exports = { router, activeGames };
