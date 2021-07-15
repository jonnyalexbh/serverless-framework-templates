/* eslint-disable no-new */
const InputSchema = require('../schema/input/update-card');
const { updateClient } = require('../service/dynamodb');

module.exports = async (commandPayload, commandMeta) => {
  new InputSchema(commandPayload, commandMeta);

  const client = await updateClient(commandPayload);

  return {
    body: {
      message: 'Updated client',
      client,
    },
  };
};
