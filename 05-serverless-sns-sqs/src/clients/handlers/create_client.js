const { getBody, jsonResponse } = require('../../commons/helpers');
const { createClient, clientCreatedNotification } = require('../services/clients');

module.exports.handler = async (event) => {
  try {
    const client = await createClient(getBody(event.body));
    const clientNotification = await clientCreatedNotification();
    console.log(clientNotification);
    return jsonResponse(client);
  } catch (error) {
    console.log('****1111', error);
    return jsonResponse({ error }, 500);
  }
};
