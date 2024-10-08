class GameController {
  #activePlayer;
  #gameStage = "beg";
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.#activePlayer = this.player1;
    this.player1PlacedShips = [];
    this.player2PlacedShips = [];
  }

  getActivePlayer() {
    return this.#activePlayer;
  }
  switchActivePlayer() {
    if (this.#activePlayer === this.player1) {
      this.#activePlayer = this.player2;
    } else {
      this.#activePlayer = this.player1;
    }
  }
  getOtherPlayer() {
    if (this.#activePlayer == this.player1) {
      return this.player2;
    } else {
      return this.player1;
    }
  }
  placeShips(ship, start) {
    let end = [+start[0], +start[1] + this.#activePlayer[ship].length - 1];
    this.#activePlayer.board.placeShip(this.#activePlayer[ship], start, end);
  }

  placeAttack(row, col) {
    let attackStatus = this.getOtherPlayer().board.placeAttack([row, col]);

    return attackStatus;
  }
  getGameStage() {
    return this.#gameStage;
  }

  switchGameStage() {
    if (this.#gameStage == "beg") {
      this.#gameStage = "mid";
    } else {
      this.#gameStage = "beg";
    }
  }
}
module.exports = GameController;
