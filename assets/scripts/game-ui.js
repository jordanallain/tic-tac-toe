'use strict';

let gameBoardArray = new Array(9);
let counter = 0;


//giant if statement to check the cells for matches and then to check if the
//values are X or O
const checkWinner = function(){
  if((gameBoardArray[0] === gameBoardArray[1]) && (gameBoardArray[0] === gameBoardArray[2]) ||
    (gameBoardArray[0] === gameBoardArray[3]) && (gameBoardArray[0] === gameBoardArray[6]) ||
    (gameBoardArray[0] === gameBoardArray[4]) && (gameBoardArray[0] === gameBoardArray[8])){
      if(gameBoardArray[0] === 'X'){
        console.log('X Wins!');
      }else if(gameBoardArray[0] === 'O'){
        console.log('O Wins!');
      }else if((gameBoardArray[2] === gameBoardArray[4]) && (gameBoardArray[2] === gameBoardArray[6]) ||
        (gameBoardArray[2] === gameBoardArray[5]) && (gameBoardArray[2] === gameBoardArray[8])){
          if(gameBoardArray[2] === 'X'){
            console.log(gameBoardArray);
            console.log('X Wins!');
          }else if(gameBoardArray[2] === 'O'){
            console.log('O Wins!');
          }else if((gameBoardArray[3] === gameBoardArray[4]) && (gameBoardArray[3] === gameBoardArray[5])){
            if(gameBoardArray[3] === 'X'){
              console.log('X Wins!');
            }else if(gameBoardArray[3] === 'O'){
              console.log('O Wins!');
            }else if((gameBoardArray[6] === gameBoardArray[7]) && (gameBoardArray[6] === gameBoardArray[8])){
              if(gameBoardArray[6] === 'X'){
                console.log('X Wins!');
              }else if(gameBoardArray[6] === 'O'){
                console.log('O Wins!');
              }else if((gameBoardArray[1] === gameBoardArray[4]) && (gameBoardArray[1] === gameBoardArray[7])){
                if(gameBoardArray[1] === 'X'){
                  console.log('X Wins!');
                }else if(gameBoardArray[1] === 'O'){
                  console.log('O Wins!');
                }
                console.log('broke');
              }
              console.log('broke2');
            }
          }
        }
      }
    };

// const checkWinner = function(){
//     if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[0] === gameBoardArray[2]){
//       if(gameBoardArray[0] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[0] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[3] === gameBoardArray[5]){
//       if(gameBoardArray[3] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[3] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[6] === gameBoardArray[8]){
//       if(gameBoardArray[6] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[6] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[0] === gameBoardArray[6]){
//       if(gameBoardArray[0] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[0] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[1] === gameBoardArray[7]){
//       if(gameBoardArray[1] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[1] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[2] === gameBoardArray[8]){
//       if(gameBoardArray[2] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[2] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[0] === gameBoardArray[8]){
//       if(gameBoardArray[0] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[0] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[2] === gameBoardArray[6]){
//       if(gameBoardArray[2] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[2] === 'O'){
//         console.log('O Wins!');
//       }
//     }else{
//       console.log('broken');
//     }
//     console.log('broken2');
//   };


// const checkWinner = function(){
//   if((gameBoardArray[0] === gameBoardArray[1]) && (gameBoardArray[0] === gameBoardArray[2]) ||
//     (gameBoardArray[0] === gameBoardArray[3]) && (gameBoardArray[0] === gameBoardArray[6]) ||
//     (gameBoardArray[0] === gameBoardArray[4]) && (gameBoardArray[0] === gameBoardArray[8])){
//       if(gameBoardArray[0] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[0] === 'O'){
//         console.log('O Wins!');
//       }
//   }else if((gameBoardArray[2] === gameBoardArray[4]) && (gameBoardArray[2] === gameBoardArray[6]) ||
//     (gameBoardArray[2] === gameBoardArray[5]) && (gameBoardArray[2] === gameBoardArray[8])){
//       if(gameBoardArray[2] === 'X'){
//         console.log(gameBoardArray);
//         console.log('X Wins!');
//       }else if(gameBoardArray[2] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if((gameBoardArray[3] === gameBoardArray[4]) && (gameBoardArray[3] === gameBoardArray[5])){
//       if(gameBoardArray[3] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[3] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if((gameBoardArray[6] === gameBoardArray[7]) && (gameBoardArray[6] === gameBoardArray[8])){
//       if(gameBoardArray[6] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[6] === 'O'){
//         console.log('O Wins!');
//       }
//     }else if((gameBoardArray[1] === gameBoardArray[4]) && (gameBoardArray[1] === gameBoardArray[7])){
//       if(gameBoardArray[1] === 'X'){
//         console.log('X Wins!');
//       }else if(gameBoardArray[1] === 'O'){
//         console.log('O Wins!');
//       }
//       console.log('broke');
//     }
//     console.log('broke2');
// };






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
     checkWinner();
  });
};



module.exports = {
  attachGameLogic,
};
