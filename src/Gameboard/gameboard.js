class Gameboard {
  constructor() {
    this.gameBoard = [
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}], 
        [{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null},{ship: null}]
    ];
  }
  placeShip(ship, start, end){
    let notOnTheBoard = (element)=>{
      if(element > 10 || element< 0){
        return true;
      }
    }
    if(start.some(notOnTheBoard)||end.some(notOnTheBoard)){
      throw new Error("Ship must be on the board")
    }

    if(start[0]==end[0]||start[1]==end[1]){
    this.gameBoard[start[0]][start[1]].ship = ship;
    this.gameBoard[end[0]][end[1]].ship = ship;
    }else{
      throw new Error("You can only place ships vertically or horizontally")
    }
  }
}
let player = new Gameboard()

module.exports = Gameboard;
