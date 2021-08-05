'use strict';

module.exports.add = event => {
  const { num1, num2 } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: num1 + num2 }),
  };
};
