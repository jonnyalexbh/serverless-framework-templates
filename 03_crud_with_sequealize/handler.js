'use strict';

module.exports.getAuthors = event => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'get authors' }),
  };
};
