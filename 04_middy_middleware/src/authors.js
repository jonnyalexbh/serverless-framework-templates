const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');

const author = async (event) => {
  console.info('trying to save the author', event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'testing @middy/http-json-body-parser' }),
  };
};

exports.store = middy(author)
  .use(jsonBodyParser());
