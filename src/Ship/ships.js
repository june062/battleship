class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }
  hit() {
    this.hitCount += 1;
  }
  isSunk() {
    if (this.length === this.hitCount) {
      this.sunk = true;
      return this.sunk;
    }
  }
}

module.exports = Ship;
