class Game {

  constructor() {
    this.towers = [[1,2,3], [], []];
  }
  promptMove(callback) {
    //print the stacks
    //get user's move
    reader.question("Which stack do you want to move from? : ", (from)=> {
      reader.question("Which stack do you want to move to? : ", (to)=> {
        callback(from, to);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[endTowerIdx].length < 1) {
      return true;
    } else {
    return (this.towers[endTowerIdx][0] > this.towers[startTowerIdx][0]);
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if(this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].unshift(this.towers[startTowerIdx].shift());
    }
  }

}
game = new Game();

game.move(0,2);
console.log(game.towers);
game.move(0,1);
console.log(game.towers);
// const readline = require('readline');
//
// const reader = readline.createInterface( {
//   input: process.stdin,
//   output: process.stdout
// });

// game.promptMove(  (from, to)=> {
//   console.log(`${from}, ${to}`);
//   reader.close();
// });
//
// console.log(game.isValidMove(0, 2));
// console.log(game.isValidMove(2, 0));
