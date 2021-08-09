const { getAlbums } = require('../services/albums');

module.exports.handler = async () => {
  try {
    const { data } = await getAlbums();
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
