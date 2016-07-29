# My Tic Tac Toe Game

I am making a single page tic tac toe app, with certain requirements. You need
to sign up and log in to be able to start a new game, you should be able to
change your password, the app should keep track of your games and be able to
show you a past one if you enter the game ID number.

My plan for approaching the project is to first make some basic HTML to
test functionality on. I'll focus on the signing up and in process first,
then the game board interactions, then resetting and remembering the win
totals for each player. Once I get everything working I will worry about
styling it to make it look good, and then hopefully have time to iron out

User Stories
- As a user I want to be able to play a game of tic tac toe against my friends.
- As a user I want to be able to reset the board so I can play again.
- As a user I want the game to keep track of how many times I've won.
- As an admin I want users to be able to change their password.
- As a user I want to be able to log out and log back in so I don't lose my win
  total.

I tried to stick to my plan of simple HTML, the signing up and in process, and
finally the game logic and ajax requests. I was able to stick to this basic flow
but got caught up quite a bit with the ajax requets.

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
- Hours of struggling trying to get the amount of games a user has associated with
  them to show up on the page. Finally after passing 'data' into my getGamesSuccess
  I was able to show the amount of games with $('.total-games').text(data.games.length);
  in my ui.js file.
- Major issues trying to pull up a single game by its ID number. For some reason
  not able to get to the success function. Was not able to get past this and try
  to PATCH the moves of the game to the server.

One thing I will try to be better about next time is not focusing in on one
issue for too long. It was advice that I somehow completely forgot in the midst
of stumbling over problem after problem. Could probably have benefited greatly
from putting one thing to the side for an hour or so and moving on to something
else for the time being.

My plan of doing a feature branch to work on was mostly successful, however I
didn't end up creating as many as I thought I would at the start.
