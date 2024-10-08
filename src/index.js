import "./styles.css";
let screenController = require("./updateDOM/updateDOM.js");
let GameController = require("./gameController/gameController.js");
let Player = require("./Player/players.js");
let player1 = new Player("player1");
let player2 = new Player("player2");

let game = new GameController(player1, player2);
let player2Grid = document.querySelector(".player2-grid-container");
let player1Ships = document.querySelector(".player1.ships-container");
let player2Ships = document.querySelector(".player2.ships-container");
let player1Grid = document.querySelector(".player1-grid-container");
screenController.createGridCells();

/* Placing ships stage */
player1Ships.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player1) {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let player1ShipContainer = document.querySelector(
      ".player1.ships-container"
    );
    player1ShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

player1Grid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player1) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let player1ShipContainer = document.querySelector(
      ".player1.ships-container"
    );
    let selectedShip = player1ShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      player1[selectedShip].length,
      "player1"
    );
    let shipDOM = document.querySelector(`.player1 .${selectedShip}`);
    shipDOM.remove();

    player1ShipContainer.dataset.selectedship = "";

    if (!player1ShipContainer.firstElementChild) {
      let player1GridClass = ".player1";

      game.switchActivePlayer();
      screenController.hideBoard(player1GridClass);
      screenController.displayActivePlayer(game.getActivePlayer().name);
    }
    event.stopImmediatePropagation();
  } else {
    event.preventDefault();
  }
});

player2Ships.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player2) {
    let selectedShipEventTarget = event.target.parentElement.classList[1];
    let player2ShipContainer = document.querySelector(
      ".player2.ships-container"
    );
    player2ShipContainer.setAttribute(
      "data-selectedShip",
      selectedShipEventTarget
    );
  } else {
    event.preventDefault();
  }
});

player2Grid.addEventListener("click", (event) => {
  if (game.getGameStage() == "beg" && game.getActivePlayer() === player2) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let player2ShipContainer = document.querySelector(
      ".player2.ships-container"
    );
    let selectedShip = player2ShipContainer.dataset.selectedship;

    game.placeShips(selectedShip, [+rowCoord, +colCoord]);
    screenController.placeShipsDOM(
      event.target,
      player2[selectedShip].length,
      "player2"
    );
    let shipDOM = document.querySelector(`.player2 .${selectedShip}`);
    shipDOM.remove();
    player2ShipContainer.dataset.selectedship = "";
    if (!player2ShipContainer.firstElementChild) {
      let player2GridClass = ".player2";

      game.switchActivePlayer();
      screenController.hideBoard(player2GridClass);
      game.switchGameStage();
      screenController.displayActivePlayer(game.getActivePlayer().name);
      event.stopImmediatePropagation();
    }
  } else {
    event.preventDefault();
  }
});
/* Attacking ships stage */
player2Grid.addEventListener("click", (event) => {
  let player2Grid = document.querySelector(".player2-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === player1 &&
    event.target.parentElement == player2Grid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let player2GridClass = ".player2";
      let player1GridClass = ".player1";
      screenController.revealBoard(
        player2GridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        player1GridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

    game.switchActivePlayer();
    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
player1Grid.addEventListener("click", (event) => {
  let player1Grid = document.querySelector(".player1-grid-container");
  if (
    game.getGameStage() == "mid" &&
    game.getActivePlayer() === player2 &&
    event.target.parentElement == player1Grid
  ) {
    let rowCoord = event.target.dataset.row;
    let colCoord = event.target.dataset.col;
    let status = game.placeAttack(+rowCoord, +colCoord);
    screenController.placeAttacksDOM(status, event.target);
    if (status === "all sunk") {
      screenController.displayWinner(game.getActivePlayer().name);
      let player2GridClass = ".player2";
      let player1GridClass = ".player1";
      screenController.revealBoard(
        player1GridClass,
        game.getOtherPlayer().board.gameBoard
      );
      screenController.revealBoard(
        player2GridClass,
        game.getActivePlayer().board.gameBoard
      );
      return;
    }

    game.switchActivePlayer();

    screenController.displayActivePlayer(game.getActivePlayer().name);
  }
});
