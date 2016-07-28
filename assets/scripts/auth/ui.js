'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  $('.user-display').text(data.user.email + ':');
  // $('.total-games').text(data.games);
  // console.log(data.games);
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  $('.user-display').text(':');
  delete app.user;
  console.log(app);
};

const newGameSuccess = (data) => {
  // app.id = data.game.id;
  // app.game = data.game;
  console.log(data);
};

const getGameSuccess = (data) => {
  // console.log(app.user.games);
  //$('.total-games').text(app.games);
  console.log(data);
};

const getGamesSuccess = (data) => {
  // console.log(data.games);
  console.log(data.games.cells);
  $('.total-games').text(data.games.length);
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  getGameSuccess,
  getGamesSuccess,
};
