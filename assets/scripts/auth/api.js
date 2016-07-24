'use strict';

const app = require('../app');

//ajax request to the api to create a new user
const signUp = (data) => {
  return $.ajax({
    url: app.api,
    method: "POST",
    data,
  });
};

module.exports = {
  signUp,
};
