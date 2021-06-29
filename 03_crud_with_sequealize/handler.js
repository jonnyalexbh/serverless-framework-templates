const { getAuthors } = require('./src/services/authors');
const { jsonResponse } = require('./src/helpers');
const { parseAuthors } = require('./src/serializers/authors');

module.exports.getAuthors = async () => {
  try {
    const authors = await getAuthors();
    return jsonResponse(parseAuthors(authors));
  } catch (error) {
    return jsonResponse({ internalError: 'internal_error', message: 'Internal Server Error' }, 500);
  }
};
