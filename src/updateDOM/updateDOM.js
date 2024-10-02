function createGridCells() {
  for (let i = 0; i < 99; i++) {
    let gridCellPlayer = document.createElement("div");
    gridCellPlayer.classList.add("grid-cell");
    let gridCellComputer = document.createElement("div");
    gridCellComputer.classList.add("grid-cell");
    let playerGrid = document.querySelector(".player-grid-container");
    let computerGrid = document.querySelector(".computer-grid-container");

    playerGrid.appendChild(gridCellPlayer);
    computerGrid.appendChild(gridCellComputer);
  }
}
module.exports = createGridCells;
