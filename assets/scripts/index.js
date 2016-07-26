'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');

// On document ready add the event handlers to the DOM nodes
$(() => {
  authEvents.addHandlers();
  $('.select-sign-up').on('click', function(){
    $('.sign-up-modal').modal('show');
  });
  $('.select-sign-in').on('click', function(){
    $('.sign-in-modal').modal('show');
  });
  $('.select-change-password').on('click', function(){
    $('.change-password-modal').modal('show');
  });
});
