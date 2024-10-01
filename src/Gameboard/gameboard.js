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
    let checkIfAllAreVacant = (start,end)=>{
      let greaterNum;
      let smallerNum;
      let sameNum;
      let samePosition=""
      if(start[0]!==end[0]){
        if(start[0]>end[0]){
          greaterNum = start[0]
          smallerNum = end[0];
          sameNum = start[1]
          samePosition = "V"
        }else{
          greaterNum = end[0]
          smallerNum = start[0]
          sameNum = start[1]
          samePosition = "V"
        }
      }else{
        if(start[1]>end[1]){
          greaterNum = start[1]
          smallerNum = end[1];
          sameNum = start[0]
          samePosition = "H"
        }else{
          greaterNum = end[1]
          smallerNum = start[1]
          sameNum = start[0]
          samePosition = "H"
        }
      }
      for(let i = smallerNum; i <= greaterNum; i++){
       if(samePosition == "H"){
        if(this.gameBoard[sameNum][i].ship !== null){
          throw new Error("All target cells must be vacant in order to place the ship")
        }
       }else{
        if(this.gameBoard[i][sameNum].ship !== null){
          throw new Error("All target cells must be vacant in order to place the ship")
        }
       }
      }
      return {greaterNum,smallerNum,sameNum,samePosition}

    }

    if(start[0]==end[0]||start[1]==end[1]){
    let checkResult = checkIfAllAreVacant(start,end);
    for(let i = checkResult.smallerNum;i <= checkResult.greaterNum; i++ ){
      if(checkResult.samePosition == "H"){
        this.gameBoard[checkResult.sameNum][i].ship = ship;
      }else{
        this.gameBoard[i][checkResult.sameNum].ship = ship;
      }
    }
    }else{
      throw new Error("You can only place ships vertically or horizontally")
    }
  }
}

module.exports = Gameboard;
