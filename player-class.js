class Player {
  constructor(name, lives) {
    this.name = name;
    this.lives = lives;
  }
  //check if player is alive
  checkLives() {
    if (this.lives == 0) {
      true;
    }
  }
  decreaseLives() {
    this.lives -= 1;
  }
}
module.exports = Player;
