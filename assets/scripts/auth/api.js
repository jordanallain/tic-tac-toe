'use strict';

const app = require('../app');

//ajax request to the api to create a new user
const signUp = (data) => {
  return $.ajax({
    url: app.api + 'sign-up',
    method: "POST",
    data,
  });
};

//ajax request for user to sign in
const signIn = (data) => {
  return $.ajax({
    url: app.api + 'sign-in',
    method: "POST",
    data,
  });
};

//ajax request to change a user's password
const changePassword = (data) => {
  return $.ajax({
    url: app.api + 'change-password/' + app.user.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

//ajax request to sign a user out, deletes their token
const signOut = () => {
  return $.ajax({
    url: app.api + 'sign-out/' + app.user.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

//ajax request to create a new game attached to the current user
const newGame = (data) => {
  return $.ajax({
    url: app.api + 'games',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  },
  data,
});
};

//ajax request to get all games user has played
const getGames = () => {
  return $.ajax({
    url: app.api + 'games',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

//ajax request to get a single game by ID that is associated with the user
const getGame = (data) => $.ajax({
  url: app.api + 'games/' + data.id,
  method: 'GET',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  getGames,
  getGame,
};
