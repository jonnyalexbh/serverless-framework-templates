const { getRepositories } = require('../services/github');

module.exports.handler = async () => {
  try {
    const response = await getRepositories();
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ internalError: 'internal_error', message: error.message }),
    };
  }
};
