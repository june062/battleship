class UIController {
  placeAttacksDOM(attackStatus, target) {
    if (attackStatus == "miss") {
      let missIcon = document.createElement("p");
      missIcon.textContent = "x";
      target.appendChild(missIcon);
    } else {
      let hitIcon = document.createElement("p");
      hitIcon.textContent = "O";
      target.appendChild(hitIcon);
    }
  }

  createGridCells() {
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        let gridCellPlayer = document.createElement("div");
        gridCellPlayer.classList.add("grid-cell");
        gridCellPlayer.setAttribute("data-row", row);
        gridCellPlayer.setAttribute("data-col", col);
        let gridCellComputer = document.createElement("div");
        gridCellComputer.classList.add("grid-cell");
        gridCellComputer.setAttribute("data-row", row);
        gridCellComputer.setAttribute("data-col", col);
        let playerGrid = document.querySelector(".player-grid-container");
        let computerGrid = document.querySelector(".computer-grid-container");

        playerGrid.appendChild(gridCellPlayer);
        computerGrid.appendChild(gridCellComputer);
      }
    }
  }
  placeShipsDOM(eventTarget, shipLength, player) {
    if (player == "player") {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.player-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "blue";
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.computer-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "blue";
      }
    }
  }
}
let screenController = new UIController();
module.exports = screenController;
/* module.exports = placeAttacksDOM; */
