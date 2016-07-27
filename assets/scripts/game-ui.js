'use strict';
let gameBoardArray = [];
//
// //
// // const clickX = functon(){
// //   this.
// // }
// //
//
// const onTile = function(){
//   if(gameBoardArray.length === 0){
//     $
//   }


// $('.game-tile').on('click', function(){
//   $(this).innertext('X');
// });


let counter = 0;

const attachGameLogic = () => {
  $('.game-tile').on('click', function(){


       if(counter % 2 === 0){
         gameBoardArray.push('X');
         $(this).text('X');
         return counter++;
       }else{
         gameBoardArray.push('O');
         $(this).text('O');
         return counter++;
       }

  });
};

module.exports = {
  attachGameLogic,
};
