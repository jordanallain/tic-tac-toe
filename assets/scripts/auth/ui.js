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
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};

const newGameSuccess = (data) => {
  console.log(data.games.cells + "huckoo");
};

module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
};
