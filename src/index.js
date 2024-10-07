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
  endGame() {}
  resetGame() {}
}
let game = new GameController(player, computer);
let computerGrid = document.querySelector(".computer-grid-container");
let playerShips = document.querySelector(".player.ships-container");
let computerShips = document.querySelector(".computer.ships-container");
let playerGrid = document.querySelector(".player-grid-container");

screenController.createGridCells();

/* Placing ships stage */
playerShips.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player) {
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
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player) {
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

    playerShipContainer.dataset.selectedship = "";
    console.log(playerShipContainer.dataset.selectedship);
    if (!playerShipContainer.firstElementChild) {
      game.switchActivePlayer();
      screenController.displayActivePlayer(game.getActivePlayer().name);
    }
    event.stopImmediatePropagation();
  } else {
    event.preventDefault();
  }
});

computerShips.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === computer) {
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
  if (game.getGameStage() == "beg" && game.getActivePlayer() === computer) {
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
    computerShipContainer.dataset.selectedship = "";
    if (!computerShipContainer.firstElementChild) {
      game.switchActivePlayer();
      game.switchGameStage();
      screenController.displayActivePlayer(game.getActivePlayer().name);
      event.stopImmediatePropagation();
    }
  } else {
    event.preventDefault();
  }
});
/* Attacking ships stage */
computerGrid.addEventListener("click", (event) => {
  let computerGrid = document.querySelector(".computer-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === player &&
    event.target.parentElement == computerGrid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
    }
    screenController.placeAttacksDOM(status, event.target);
    game.switchActivePlayer();
    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
playerGrid.addEventListener("click", (event) => {
  let playerGrid = document.querySelector(".player-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === computer &&
    event.target.parentElement == playerGrid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
    }
    screenController.placeAttacksDOM(status, event.target);
    game.switchActivePlayer();
    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
/* computerGrid.addEventListener("click", (event) => {
  let rowCoord = event.target.dataset.row;
  let colCoord = event.target.dataset.col;
  let status = game.placeAttack(+rowCoord, +colCoord);
  screenController.placeAttacksDOM(status, event.target);
});
 */
