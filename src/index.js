import "./styles.css";
let createGridCells = require("./updateDOM/updateDOM.js");

let Player = require("./Player/players.js");

let player1 = new Player("Juneid");
let player2 = new Player("Computer");
/* console.log(player1.patrol); */
player1.board.placeShip(player1.patrol, [0, 0], [0, 1]);
player2.board.placeShip(player2.patrol, [0, 0], [0, 1]);
/* PLayer 1 first attack */
player2.board.placeAttack([0, 0]);
console.log(player2.board.gameBoard[0][0].ship.isSunk());
/* Player 2 first attack */
player1.board.placeAttack([0, 0]);
console.log(player1.board.gameBoard[0][0].ship.isSunk());
/* Player 1 second attack */
player2.board.placeAttack([0, 1]);
console.log(
  player2.board.gameBoard[0][1],
  player2.board.gameBoard[0][1].ship.isSunk()
);
createGridCells();
