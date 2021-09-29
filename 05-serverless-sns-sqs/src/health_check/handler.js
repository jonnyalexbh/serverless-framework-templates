const { jsonResponse } = require('../commons/helpers');

module.exports.healthCheck = async (event) => jsonResponse({ message: 'Health Check Successful', input: event });
