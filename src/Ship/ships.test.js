let Ship = require("./ships.js");

test.skip("Tracks how many times its been hit", () => {
  let patrol = new Ship(1);
  patrol.hit();
  expect(patrol.hitCount).toBe(1);
});
test.skip("Checks if the ship has been sunk or not", () => {
  let patrol = new Ship(1);
  patrol.hit();
  expect(patrol.isSunk()).toBe(true);
});
