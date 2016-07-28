# My Tic Tac Toe Game

- My tic tac toe stuff here

User Stories
- As a user I want to be able to play a game of tic tac toe against my friends.
- As a user I want to be able to reset the board so I can play again.
- As a user I want the game to keep track of how many times I've won.
- As an admin I want users to be able to change their password.
- As a user I want to be able to log out and log back in so I don't lose my win
  total.

Problems
- My first problem arose when trying to use a bootstrap nav bar. I wanted to have
  the menu button right aligned but it would go off the edge of the screen just
  a bit. I fixed the problem by adding margin to the right of the button.
- Having more trouble with margin on certain elements. Will put it aside for now.
- Biggest problem so far is building an array with the X's and O's from the board
  in the correct index. Was able to give the div's an attribute of 'data-index'
  to make them correspond to the correct indeces of the array.
- Struggled with the logic of my checkWinner function. Originally had a giant
  if statement that worked for most instances but wasn't perfect. Broke down the
  function into smaller functions to make it easier to understand. Will break it
  down even further if I have time at the end but it is working.
