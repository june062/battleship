class UIController {
  placeAttacksDOM(attackStatus, target) {
    const missIcon = document.createElement("p");
    missIcon.textContent = "*";
    const hitIcon = document.createElement("p");
    hitIcon.textContent = "X";
    let colorRed = "rgb(235, 45, 45)";
    if (attackStatus == "miss") {
      target.appendChild(missIcon);
    } else if (attackStatus == "hit") {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;
    } else if (attackStatus == "one sunk") {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;

      let audioElement = document.createElement("audio");
      audioElement.setAttribute("autoplay", "");
      let audioSource = document.createElement("source");
      audioSource.setAttribute("src", `${require("../Assets/fart.mp3")}`);
      audioSource.setAttribute("type", "audio/mpeg");
      audioElement.appendChild(audioSource);
      audioElement.style.display = "hidden";
      target.appendChild(audioElement);
    } else {
      target.appendChild(hitIcon);
      target.style.backgroundColor = colorRed;

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
        let gridCellplayer1 = document.createElement("div");
        gridCellplayer1.classList.add("grid-cell");
        gridCellplayer1.setAttribute("data-row", row);
        gridCellplayer1.setAttribute("data-col", col);
        let gridCellplayer2 = document.createElement("div");
        gridCellplayer2.classList.add("grid-cell");
        gridCellplayer2.setAttribute("data-row", row);
        gridCellplayer2.setAttribute("data-col", col);
        let player1Grid = document.querySelector(".player1-grid-container");
        let player2Grid = document.querySelector(".player2-grid-container");

        player1Grid.appendChild(gridCellplayer1);
        player2Grid.appendChild(gridCellplayer2);
      }
    }
  }
  placeShipsDOM(eventTarget, shipLength, player1) {
    if (player1 == "player1") {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.player1-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        let element = document.querySelector(
          `.player2-grid-container > [data-row = '${
            eventTarget.dataset.row
          }'][data-col = '${+eventTarget.dataset.col + i}']`
        );

        element.style.backgroundColor = "rgb(45, 203, 235)";
      }
    }
  }
  displayActivePlayer(player1) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `it is ${player1}'s turn `;
  }
  displayWinner(player1) {
    let gameHeader = document.querySelector(".game-title");
    gameHeader.textContent = `${player1}'s the winner! `;
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
    const missIcon = document.createElement("p");
    missIcon.textContent = "*";
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (boardToShow[row][col].ship == null) {
          continue;
        } else if (
          boardToShow[row][col].ship !== null &&
          boardToShow[row][col].hit == false
        ) {
          let gridCell = document.querySelector(
            `${boardToShowClass}-grid-container [data-row = '${row}'][data-col = '${col}']`
          );
          gridCell.style.backgroundColor = "rgb(45, 203, 235)";

          gridCell.appendChild(missIcon);
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
