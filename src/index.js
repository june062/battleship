import "./styles.css";
let screenController = require("./updateDOM/updateDOM.js");
let Player = require("./Player/players.js");
let player = new Player("player");
let computer = new Player("comp");

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
    /* this.switchActivePlayer(); */
  }

  placeAttack(row, col) {
    let attackStatus = this.getOtherPlayer().board.placeAttack([row, col]);
    this.switchActivePlayer();
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
  resetGame() {}
}
let game = new GameController(player, computer);
let computerGrid = document.querySelector(".computer-grid-container");
let playerShips = document.querySelector(".player.ships-container");
let computerShips = document.querySelector(".computer.ships-container");
let playerGrid = document.querySelector(".player-grid-container");

screenController.createGridCells();

playerShips.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg") {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let playerShipContainer = document.querySelector(".player.ships-container");
    playerShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

playerGrid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg") {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let playerShipContainer = document.querySelector(".player.ships-container");
    let selectedShip = playerShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      player[selectedShip].length,
      "player"
    );
    let shipDOM = document.querySelector(`.player .${selectedShip}`);
    shipDOM.remove();

    playerShipContainer.dataset.selectedShip = "";
    if (!playerShipContainer.firstElementChild) {
      game.switchActivePlayer();
    }
  } else {
    event.preventDefault();
  }
});

computerShips.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg") {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let computerShipContainer = document.querySelector(
      ".computer.ships-container"
    );
    computerShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

computerGrid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg") {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let computerShipContainer = document.querySelector(
      ".computer.ships-container"
    );
    let selectedShip = computerShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      computer[selectedShip].length,
      "computer"
    );
    let shipDOM = document.querySelector(`.computer .${selectedShip}`);
    shipDOM.remove();
    computerShipContainer.dataset.selectedShip = "";
    if (!computerShipContainer.firstElementChild) {
      game.switchActivePlayer();
      game.switchGameStage();
    }
  } else {
    event.preventDefault();
  }
});
/* computerGrid.addEventListener("click", (event) => {
  let rowCoord = event.target.dataset.row;
  let colCoord = event.target.dataset.col;
  let status = game.placeAttack(+rowCoord, +colCoord);
  screenController.placeAttacksDOM(status, event.target);
});
 */
