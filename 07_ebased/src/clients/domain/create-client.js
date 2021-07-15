/* eslint-disable no-new */
const InputSchema = require('../schema/input/create-card');
const ClientCreatedEvent = require('../schema/event/client-created.event');
const { createClient } = require('../service/dynamodb');
const sendClientNotification = require('../service/sns');

module.exports = async (commandPayload, commandMeta) => {
  new InputSchema(commandPayload, commandMeta);

  const newClient = await createClient(commandPayload);

  await sendClientNotification(new ClientCreatedEvent(newClient.Item, commandMeta));

  return {
    body: {
      message: 'Client created',
      client: newClient.Item,
    },
  };
};
