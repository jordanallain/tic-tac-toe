'use strict';

// const update = require('./auth/api');

let gameBoardArray = new Array(9);
let counter = 0;
let over = false;

//function to check if three cells hold a value of X
const allX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'X') && (cellTwo === 'X') && (cellThree === 'X');
};

//function to check if three cells hold a value of O
const allO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'O') && (cellTwo === 'O') && (cellThree === 'O');
};

//this function passes in the horizontal cells and passes them to the allX
//function to check if there is any row across of all X's
const xWinRows = function(){
  return allX(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allX(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allX(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//this function passes in the horizontal cells and passes them to the allO
//function to check if there is any row across of all O's
const oWinRows = function(){
  return allO(gameBoardArray[0], gameBoardArray[1], gameBoardArray[2]) ||
         allO(gameBoardArray[3], gameBoardArray[4], gameBoardArray[5]) ||
         allO(gameBoardArray[6], gameBoardArray[7], gameBoardArray[8]);
};

//this function passes in the vertical cells and passes them to the allX
//function to check if there is any column of all X's
const xWinCol = function(){
  return allX(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allX(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allX(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//this function passes in the vertical cells and passes them to the allO
//function to check if there is any column of all O's
const oWinCol = function(){
  return allO(gameBoardArray[0], gameBoardArray[3], gameBoardArray[6]) ||
         allO(gameBoardArray[1], gameBoardArray[4], gameBoardArray[7]) ||
         allO(gameBoardArray[2], gameBoardArray[5], gameBoardArray[8]);
};

//this function passes in the diagonal cells and passes them to the allX
//function to check if there is any diagonal of all X's
const xWinDiag = function(){
  return allX(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allX(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//this function passes in the diagonal cells and passes them to the allO
//function to check if there is any diagonal of all O's
const oWinDiag = function(){
  return allO(gameBoardArray[0], gameBoardArray[4], gameBoardArray[8]) ||
         allO(gameBoardArray[6], gameBoardArray[4], gameBoardArray[2]);
};

//this function runs the previous functions to check if there are any X winning
//scenarios
const xWins = function(){
  return xWinRows() || xWinCol() || xWinDiag();
};

//this function runs the previous functions to check if there are any O winning
//scenarios
const oWins = function(){
  return oWinRows() || oWinCol() || oWinDiag();
};

//Every time a cell is clicked this function runs all other functions to check
//if there are any winning conditions for X or for O
const checkWinner = function(){
  if(xWins('X')) {

    $('.user-message').text('X IS VICTORIOUS!');
    $('.game-tile').data('val', '1');
    gameBoardArray = [];
    over = true;
  }else if(oWins('O')){

    $('.user-message').text('O EQUALS CHAMPION!');
    $('.game-tile').data('val', '1');
    gameBoardArray = [];
    over = true;
  }else{
    if(counter === 9){

      over = true;
    $('.user-message').text('tie...gross');
  }
    return null;
  }
};

//function that listens for a click on the game board and places alternating X
//and O
const attachGameLogic = () => {
  let tempIndex;
  $('.game-tile').on('click', function(){
  if($(this).data('val') === '0'){
    if(counter % 2 === 0){
      $(this).text('X');
      $(this).data('val', '1');
      counter++;
    }else{
      $(this).text('O');
      $(this).data('val', '1');
      counter++;
    }
  }
  tempIndex = $(this).data('index');
  gameBoardArray[tempIndex] = $(this).text();
  checkWinner();

  });
};

module.exports = {
  attachGameLogic,
  gameBoardArray,
};
