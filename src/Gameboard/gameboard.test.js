let Gameboard = require("./gameboard.js");
let Ship = require("../Ship/ships.js");
test("Gameboard grid is correctly set up", () => {
  let player = new Gameboard();
  expect(typeof player.gameBoard[0][0]).toBe("object");
});
test("Places ships in gameboards", () => {
  let player = new Gameboard();
  let submarine = new Ship(3);
  player.placeShip(submarine, [0, 0], [0, 2]);
  expect(player.gameBoard[0][0].ship).toStrictEqual(submarine);
  expect(player.gameBoard[0][1].ship).toStrictEqual(submarine);
  expect(player.gameBoard[0][2].ship).toStrictEqual(submarine);
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
test("All target cells must be vacant in order to place the ship", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  let submarine = new Ship(3);
  player.placeShip(patrol, [0, 1], [1, 1]);
  expect(() => player.placeShip(submarine, [1, 0], [1, 2])).toThrow(
    "All target cells must be vacant in order to place the ship"
  );
});
