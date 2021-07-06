const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');
const errorHandler = require('@middy/http-error-handler');
const validator = require('@middy/validator');
const { authorSchema } = require('../schemas/authors');

const author = async (event) => {
  try {
    console.info('trying to save the author', event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'testing @middy/http-json-body-parser' }),
    };
  } catch (error) {
    throw new Error('Error getting the answer');
  }
};

exports.store = middy(author)
  .use(jsonBodyParser())
  .use(errorHandler())
  .use(validator({ inputSchema: authorSchema }));
