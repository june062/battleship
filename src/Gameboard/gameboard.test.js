let Gameboard = require("./gameboard.js");
let Ship = require("../Ship/ships.js");
test("Gameboard grid is correctly set up", () => {
  let player = new Gameboard();
  expect(typeof player.gameBoard[0][0]).toBe("object");
});
test("Places ships in gameboards", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  player.placeShip(patrol, [0, 0], [0, 1]);
  expect(player.gameBoard[0][0].ship).toStrictEqual(patrol);
  expect(player.gameBoard[0][1].ship).toStrictEqual(patrol);
});
test("placeShip() method does not accept diagonal placements", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  expect(() => player.placeShip(patrol, [0, 0], [1, 1])).toThrow(
    Error("You can only place ships vertically or horizontally")
  );
});
test("Given coordinates must be on the board", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  expect(() => player.placeShip(patrol, [10, 10], [11, 11])).toThrow(
    Error("Ship must be on the board")
  );
});
/* test("All cells must vacant in order to place the ship") */
