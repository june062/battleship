let Gameboard = require("./gameboard.js");
let Ship = require("../Ship/ships.js");
test("Gameboard grid is correctly set up", () => {
  let player = new Gameboard();
  expect(player.gameBoard[0][0].coor).toBe("A1");
});
test("Places ships in gameboards", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  player.placeShip(patrol, [1, 2], [1, 3]);
  player.board(/* 1,2-1,3 should have patrol ship */);
});
