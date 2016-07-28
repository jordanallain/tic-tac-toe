'use strict';

let gameBoardArray = new Array(9);
let counter = 0;
let over = false;

const allX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'X') && (cellTwo === 'X') && (cellThree === 'X');
};

const allO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'O') && (cellTwo === 'O') && (cellThree === 'O');
};

const xWinRows = function(){
  return allX(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allX(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allX(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

const oWinRows = function(){
  return allO(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allO(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allO(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

const xWinCol = function(){
  return allX(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allX(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allX(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

const oWinCol = function(){
  return allO(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allO(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allO(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

const xWinDiag = function(){
  return allX(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allX(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

const oWinDiag = function(){
  return allO(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allO(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

const xWins = function(){
  return xWinRows() || xWinCol() || xWinDiag();
};

const oWins = function(){
  return oWinRows() || oWinCol() || oWinDiag();
};

const checkWinner = function(){
  if(xWins('X')) {
    console.log('x');
    over = true;
  }else if(oWins('O')){
    console.log('o');
    over = true;
  }else{
    if(counter === 9){
      over = true;
      console.log('tie');
    }
    return null;
  }
};

//function that listens for a click on the game board and places alternating X
//and O
const attachGameLogic = () => {
  let tempIndex;
  $('.game-tile').on('click', function(){
      $(this).off();
       if(counter % 2 === 0){
         $(this).text('X');
         counter++;
       }else{
         $(this).text('O');
         counter++;
     }
     tempIndex = $(this).data('index');
     gameBoardArray[tempIndex] = $(this).text();
     console.log(gameBoardArray);
     checkWinner();
  });
};



module.exports = {
  attachGameLogic,
};
