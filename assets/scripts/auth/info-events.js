'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

//prevents page from refreshing and either creates new user or presents an error
const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevents page from refreshing and checks to see if user exists, if they do
//it logs them in
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

//prevents page from refreshing and checks to see if old password is correct. if
//it is it changes the value to the new password
const onChangePassword = function onChangePassword(event){
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const onNewGame = function onNewGame(event){
  event.preventDefault();
  api.newGame()
    .done(ui.success)
    .fail(ui.failure);
};

//attach listeners to the DOM set all to one variable
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('.select-sign-out').on('click', onSignOut);
  $('.new-game').on('click', onNewGame);
};

module.exports = {
  addHandlers,
};
