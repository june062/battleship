import "./styles.css";
let screenController = require("./updateDOM/updateDOM.js");
let Player = require("./Player/players.js");
let player = new Player();
let computer = new Player();

class GameController {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.activePlayer = player1;
  }
  getActivePlayer() {
    return this.activePlayer;
  }
  switchActivePlayer() {
    this.activePlayer == this.player1
      ? (this.activePlayer = this.player2)
      : (this.activePlayer = this.player1);
  }
  getOtherPlayer() {
    if (this.activePlayer == this.player1) {
      return this.player2;
    } else {
      return this.player1;
    }
  }
  placeShips(ship, row, col) {
    this.getActivePlayer().board.placeShip(this[ship], row, col);
    this.switchActivePlayer();
  }
  placeAttack(row, col) {
    let attackStatus = this.getOtherPlayer().board.placeAttack([row, col]);
    this.switchActivePlayer();
    return attackStatus;
  }
}
let game = new GameController(player, computer);

screenController.createGridCells();
let computerGrid = document.querySelector(".computer-grid-container");
computer.board.placeShip(computer.patrol, [0, 0], [0, 1]);

computerGrid.addEventListener("click", (event) => {
  let rowCoord = event.target.dataset.row;
  let colCoord = event.target.dataset.col;
  let status = game.placeAttack(rowCoord, colCoord);
  screenController.placeAttacksDOM(status, event.target);
});
