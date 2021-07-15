/* eslint-disable no-new */
const InputSchema = require('../schema/input/delete-client');
const { deleteClient } = require('../service/dynamodb');

module.exports = async (commandPayload, commandMeta) => {
  new InputSchema(commandPayload, commandMeta);

  const client = await deleteClient(commandPayload);

  return {
    body: {
      message: 'Client deleted',
      client,
    },
  };
};
