/* eslint-disable no-new */
const InputSchema = require('../schema/input/get-client');
const { getClient } = require('../service/dynamodb');

module.exports = async (commandPayload, commandMeta) => {
  new InputSchema(commandPayload, commandMeta);

  const client = await getClient(commandPayload);

  return {
    body: {
      message: 'Get client',
      client,
    },
  };
};
