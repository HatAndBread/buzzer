const gameSearch = require('./game-search');

const getPlayer = (code, player, callback) => {
  const game = gameSearch(code);
  for (let i = 0; i < game.players.length; i++) {
    if (game.players[i].name === player.name) {
      callback(game.players[i]);
      console.log(game);
      return game;
    }
  }
};

module.exports = getPlayer;
