let Gameboard = require("./gameboard.js");
let Ship = require("../Ship/ships.js");
test.skip("Gameboard grid is correctly set up", () => {
  let player = new Gameboard();
  expect(typeof player.gameBoard[0][0]).toBe("object");
});
test.skip("Places ships in gameboards", () => {
  let player = new Gameboard();
  let submarine = new Ship(3);
  player.placeShip(submarine, [0, 0], [0, 2]);
  expect(player.gameBoard[0][0].ship).toStrictEqual(submarine);
  expect(player.gameBoard[0][1].ship).toStrictEqual(submarine);
  expect(player.gameBoard[0][2].ship).toStrictEqual(submarine);
});
test.skip("placeShip() method does not accept diagonal placements", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  expect(() => player.placeShip(patrol, [0, 0], [1, 1])).toThrow(
    Error("You can only place ships vertically or horizontally")
  );
});
test.skip("Given coordinates must be on the board", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  expect(() => player.placeShip(patrol, [10, 10], [11, 11])).toThrow(
    Error("Ship must be on the board")
  );
});
test.skip("All target cells must be vacant in order to place the ship", () => {
  let player = new Gameboard();
  let patrol = new Ship(2);
  let submarine = new Ship(3);
  player.placeShip(patrol, [0, 1], [1, 1]);
  expect(() => player.placeShip(submarine, [1, 0], [1, 2])).toThrow(
    "All target cells must be vacant in order to place the ship"
  );
});
describe("placeAttack() tests", () => {
  test.skip("placeAttack() only accepts coordinates that are on the gameboard", () => {
    let player = new Gameboard();
    expect(() =>
      player
        .placeAttack([11, 11])
        .toThrow("Coordinates must be on the gameboard")
    );
  });
  test.skip("placeAttack() marks cells as missed when cell is empty and attacked", () => {
    let player = new Gameboard();
    player.placeAttack([0, 0]);
    expect(player.gameBoard[0][0].miss).toBe(true);
  });
  test.skip("placeAttack() marks cells as hit when cell is occupied and attacked", () => {
    let player = new Gameboard();
    let patrol = new Ship(2);
    player.placeShip(patrol, [0, 0], [0, 1]);
    player.placeAttack([0, 0]);
    expect(player.gameBoard[0][0].hit).toBe(true);
  });
  test.skip("placeAttack() updates attacked ships hit count", () => {
    let player = new Gameboard();
    let patrol = new Ship(2);
    player.placeShip(patrol, [0, 0], [0, 1]);
    player.placeAttack([0, 0]);
    expect(patrol.hitCount).toBe(1);
  });
  test.skip("placeAttack() updates attacked ship isSunk property", () => {
    let player = new Gameboard();
    let patrol = new Ship(2);
    player.placeShip(patrol, [0, 0], [0, 1]);
    player.placeAttack([0, 0]);
    player.placeAttack([0, 1]);
    expect(patrol.sunk).toBe(true);
  });
  test.skip("placeAttack() doesn't allow attacking the same cell", () => {
    let player = new Gameboard();
    player.placeAttack([0, 0]);
    expect(() => player.placeAttack([0, 0])).toThrow(
      "You can't attack the same cell twice"
    );
  });
  test.skip("Game is over when all ships have been sunk", () => {
    let player = new Gameboard();
    let patrol = new Ship(2);
    player.placeShip(patrol, [0, 0], [0, 1]);
    player.placeAttack([0, 0]);
    expect(player.placeAttack([0, 1])).toBe("GAME OVER");
  });
});
