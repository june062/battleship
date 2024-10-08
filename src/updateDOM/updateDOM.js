class UIController {
  placeAttacksDOM(attackStatus, target) {
    if (attackStatus == "miss") {
      let missIcon = document.createElement("p");
      missIcon.textContent = "*";
      target.appendChild(missIcon);
    } else if (attackStatus == "hit") {
      let hitIcon = document.createElement("p");
      hitIcon.textContent = "X";
      target.appendChild(hitIcon);
      target.style.backgroundColor = "rgb(235, 45, 45)";
    } else if (attackStatus == "one sunk") {
      let hitIcon = document.createElement("p");
      hitIcon.textContent = "X";
      target.appendChild(hitIcon);
      target.style.backgroundColor = "rgb(235, 45, 45)";

      let audioElement = document.createElement("audio");
      audioElement.setAttribute("autoplay", "");
      let audioSource = document.createElement("source");
      audioSource.setAttribute("src", `${require("../Assets/fart.mp3")}`);
      audioSource.setAttribute("type", "audio/mpeg");
      audioElement.appendChild(audioSource);
      audioElement.style.display = "hidden";
      target.appendChild(audioElement);
    } else {
      let hitIcon = document.createElement("p");
      hitIcon.textContent = "X";
      target.appendChild(hitIcon);
      target.style.backgroundColor = "rgb(235, 45, 45)";

      let audioElement = document.createElement("audio");
      audioElement.setAttribute("autoplay", "");
      let audioSource = document.createElement("source");
      audioSource.setAttribute("src", `${require("../Assets/battleshit.mp3")}`);
      audioSource.setAttribute("type", "audio/mpeg");
      audioElement.appendChild(audioSource);
      audioElement.style.display = "hidden";
      target.appendChild(audioElement);
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

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.computer-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    }
  }
  displayActivePlayer(player) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `it is ${player}'s turn `;
  }
  displayWinner(player) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `${player}'s the winner! `;
  }
  hideBoard(boardToHideClass) {
    let boardToHideDOM = document.querySelector(
      `${boardToHideClass}-grid-container`
    );

    for (let element of boardToHideDOM.children) {
      while (element.firstElementChild) {
        element.removeChild(element.firstElementChild);
      }
      element.style.backgroundColor = "";
    }
  }
  revealBoard(boardToShowClass, boardToShow) {
    /* Loop through board to show, look at the status of all the cells,
    (hit, miss, sunk) and update the correct board DOM with that info*/
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (
          boardToShow[row][col].ship == null &&
          boardToShow[row][col].miss == false
        ) {
          continue;
        } else if (
          boardToShow[row][col].ship !== null &&
          boardToShow[row][col].hit == false
        ) {
          let gridCell = document.querySelector(
            `${boardToShowClass}-grid-container [data-row = '${row}'][data-col = '${col}']`
          );
          gridCell.style.backgroundColor = "rgb(45, 203, 235)";
        } else if (
          boardToShow[row][col].ship !== null &&
          boardToShow[row][col].hit == true
        ) {
          let gridCell = document.querySelector(
            `${boardToShowClass}-grid-container [data-row = '${row}'][data-col = '${col}']`
          );
          gridCell.style.backgroundColor = "rgb(235, 45, 45)";
        }
      }
    }
  }
}
let screenController = new UIController();
module.exports = screenController;
/* module.exports = placeAttacksDOM; */
