class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  score(player1, player2) {
    console.log(
      `${player1.name} ${player1.lives} || ${player2.name} ${player2.lives} `
    );
  }
}
module.exports = Game;
