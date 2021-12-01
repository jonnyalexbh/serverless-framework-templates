const { logger } = require('logging');
const sum = require('sum');

module.exports.main = async () => {
  console.log('From lambda');
  console.log('Layer sum', sum(2, 4));
  logger('jabh');
  return {
    statusCode: 200,
    body: JSON.stringify({ greetings: 'Hello from main' }),
  };
};
