let Gameboard = require("../Gameboard/gameboard.js");
let Ship = require("../Ship/ships.js");
class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new Gameboard();
    this.patrol = new Ship(2);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(3);
    this.battleship = new Ship(4);
    this.carrier = new Ship(5);
  }
}
