class Gameboard {
  constructor() {
    this.gameBoard = [
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}], 
        [{ship: null, miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false},{ship: null,miss: false, hit: false}]
    ];
    this.totalShips = 0;
    this.totalSunkShips = 0;
    
  }
  #addToTotalShips(){
    this.totalShips+= 1
  }
  #sunkShipsObserver = {subs:[this.checkIfGameIsOver.bind(this)],
    
    addSubs(sub){
      this.subs.push(sub)
    },
    notify(){
      this.subs.forEach((sub)=>sub())
    },
  }
 
   #notOnTheBoard(element){
    if(element > 10 || element< 0){
      return true;
    }
  }
  placeShip(ship, start, end){
    
    if(start.some(this.#notOnTheBoard)||end.some(this.#notOnTheBoard)){
      throw new Error("Ship must be on the board")
    }
    let checkIfAllAreVacant = (start,end)=>{
      let greaterNum;
      let smallerNum;
      let sameNum;
      let samePosition=""
      /* Finds all cells between start coordinate and end coordinate and throws an error if any of them are not vacant. AKA
      user is trying to place a ship where there already is a ship*/
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
    this.#addToTotalShips()
  }
  placeAttack(coordinates){
    if(coordinates.some(this.#notOnTheBoard)){
      throw new Error("Coordinates must be on the gameboard")
    }
    if(this.gameBoard[coordinates[0]][coordinates[1]].hit === true || this.gameBoard[coordinates[0]][coordinates[1]].miss === true){
      throw new Error("You can't attack the same cell twice")
    }else if(this.gameBoard[coordinates[0]][coordinates[1]].ship === null){
      this.gameBoard[coordinates[0]][coordinates[1]].miss = true;
    }else{
      this.gameBoard[coordinates[0]][coordinates[1]].hit = true;
      this.gameBoard[coordinates[0]][coordinates[1]].ship.hit()

       if(this.gameBoard[coordinates[0]][coordinates[1]].ship.isSunk()){
          this.#sunkShipsObserver.notify()   
          
      } 
      
    }
  }
  checkIfGameIsOver(){
   this.totalSunkShips = this.totalSunkShips + 1;
    if(this.totalShips == this.totalSunkShips){
      return "GAME OVER"
    }  
  }

}

module.exports = Gameboard;
