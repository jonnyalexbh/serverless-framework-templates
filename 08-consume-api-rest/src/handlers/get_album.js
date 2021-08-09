const { getAlbum } = require('../services/albums');

module.exports.handler = async (event) => {
  try {
    const { data } = await getAlbum(event.pathParameters.id);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ internalError: 'internal_error', message: error.message }),
    };
  }
};
