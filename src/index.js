import "./styles.css";
let screenController = require("./updateDOM/updateDOM.js");
let Player = require("./Player/players.js");
let player = new Player();
let computer = new Player();

class GameController {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  #activePlayer = player1;

  getActivePlayer() {
    return this.#activePlayer;
  }
  switchActivePlayer() {
    this.#activePlayer == this.player1
      ? (this.#activePlayer = this.player2)
      : (this.#activePlayer = this.player1);
  }
  getOtherPlayer() {
    if (this.#activePlayer == this.player1) {
      return this.player2;
    } else {
      return this.player1;
    }
  }
  placeShips(ship, start) {
    let end = [+start[0], +start[1] + this.getActivePlayer()[ship.length]];
    this.getActivePlayer().board.placeShip(
      this.getActivePlayer()[ship],
      start,
      end
    );
    /* this.switchActivePlayer(); */
  }
  placeAttack(row, col) {
    let attackStatus = this.getOtherPlayer().board.placeAttack([row, col]);
    this.switchActivePlayer();
    return attackStatus;
  }
  beginningOrMidGameMode() {}
  resetGame() {}
}
let game = new GameController(player, computer);
let computerGrid = document.querySelector(".computer-grid-container");
let playerShips = document.querySelector(".player.ships-container");
let computerShips = document.querySelector(".computer.ships-container");

screenController.createGridCells();
async function shipPlacement(ship, row, col) {
  return await game.placeShips(ship, row, col);
}

computerGrid.addEventListener("click", (event) => {
  let rowCoord = event.target.dataset.row;
  let colCoord = event.target.dataset.col;
  let status = game.placeAttack(+rowCoord, +colCoord);
  screenController.placeAttacksDOM(status, event.target);
});
playerShips.addEventListener("click", (event) => {
  /* Check if we are in the beginning game mode, if we are... */
  let selectedShip = event.target.parentElement.classList[1];
  let playerGrid = document.querySelector(".player-grid-container");
  playerGrid.addEventListener("click", (event) => {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    console.log(player.board.gameBoard);
  });
});
