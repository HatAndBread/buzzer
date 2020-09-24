const express = require('express');
const router = express.Router();
const gameSearch = require('./game-search');

router.post('/', (req, res) => {
  const player = req.body.player;
  const code = req.body.code;
  const game = gameSearch(code);
  if (game) {
    if (checkUsed(game, player)) {
      res.send({ ok: false, msg: 'used' });
    } else {
      const newPlayer = { name: player, points: 0 };
      game.players.push(newPlayer);
      res.send({ ok: true });
      console.log(game, 'peep');
    }
  } else {
    res.send({ ok: false, msg: 'eneded' });
  }
});

function checkUsed(game, player) {
  for (let i = 0; i < game.players.length; i++) {
    let a = game.players[i];
    if (a.name === player) {
      return true;
    }
  }
  return false;
}

module.exports = router;
