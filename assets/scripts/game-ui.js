'use strict';

let gameBoardArray = [];
// let gameBoardObject = {
//   // tilea: $('.tile-a').text(),
//   // tileb: $('.tile-b').text(),
//   // tilec: $('.tile-c').text(),
//   // tiled: $('.tile-d').text(),
//   // tilee: $('.tile-e').text(),
//   // tilef: $('.tile-f').text(),
//   // tileg: $('.tile-g').text(),
//   // tileh: $('.tile-h').text(),
//   // tilei: $('.tile-i').text(),
// };

let counter = 0;


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
     tempIndex = $(this).attr('data-index');
     gameBoardArray[tempIndex] = $(this).text();
     console.log(gameBoardArray);
  });
};



module.exports = {
  attachGameLogic,
};
