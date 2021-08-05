module.exports.healthCheck = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({ message: 'Health Check Successful', input: event }),
});
