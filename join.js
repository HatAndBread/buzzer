const express = require('express');
const router = express.Router();
const cng = require('./create-new-game');
const activeGames = cng.activeGames;

router.get('/', (req, res) => {
  res.send({ res: 'hi!' });
  console.log('join!', activeGames);
});

router.post('/', (req, res) => {
  console.log(activeGames);
  let code = req.body.code;
  for (let i = 0; i < activeGames.length; i++) {
    if (activeGames[i].code === code) {
      res.send({ ok: true });
      return;
    }
  }
  res.send({ ok: false });
});

module.exports = router;
