/* eslint-disable no-unused-vars */
const { createCard } = require('../service/dynamodb');

module.exports = async (eventPayload, _batchMeta) => {
  const item = JSON.parse(eventPayload.Message);
  await createCard(item);
  return { body: 'Create card' };
};
