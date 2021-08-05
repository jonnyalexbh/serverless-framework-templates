'use strict';

module.exports.main = (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ greetings: 'Hello from main' }),
  };
};
