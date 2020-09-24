const activeGames = require('./create-new-game').activeGames;

function gameSearch(code) {
  for (let i = 0; i < activeGames.length; i++) {
    let a = activeGames[i].code;
    if (a === code) {
      return activeGames[i];
    }
  }
}

module.exports = gameSearch;
