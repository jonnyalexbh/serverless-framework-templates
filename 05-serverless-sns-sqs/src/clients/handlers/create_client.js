const { getBody, jsonResponse } = require('../../commons/helpers');
const { createClient } = require('../services/clients');

module.exports.handler = async (event) => {
  try {
    const client = await createClient(getBody(event.body));
    return jsonResponse(client);
  } catch (error) {
    return jsonResponse({ error }, 500);
  }
};
