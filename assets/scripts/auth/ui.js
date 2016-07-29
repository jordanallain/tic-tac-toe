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
  $('.user-message').text('Click New Game!');
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  $('.user-display').text(':');
  delete app.user;
  console.log(app);
};

const newGameSuccess = (data) => {
  $('.user-message').text(':)');
  console.log(data);
};

const getGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const getGamesSuccess = (data) => {
  $('.total-games').text(data.games.length + 'games');
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
