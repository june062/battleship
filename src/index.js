import "./styles.css";
let screenController = require("./updateDOM/updateDOM.js");
let GameController = require("./gameController/gameController.js");
let Player = require("./Player/players.js");
let player = new Player("player1");
let computer = new Player("player2");

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

    if (!playerShipContainer.firstElementChild) {
      let playerGridClass = ".player";

      game.switchActivePlayer();
      screenController.hideBoard(playerGridClass);
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
      let computerGridClass = ".computer";

      game.switchActivePlayer();
      screenController.hideBoard(computerGridClass);
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
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let computerGridClass = ".computer";
      let playerGridClass = ".player";
      screenController.revealBoard(
        computerGridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        playerGridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

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
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let computerGridClass = ".computer";
      let playerGridClass = ".player";
      screenController.revealBoard(
        playerGridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        computerGridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

    game.switchActivePlayer();

    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
