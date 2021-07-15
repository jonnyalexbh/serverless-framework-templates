/* eslint-disable no-unused-vars */
const { createGift } = require('../service/dynamodb');

module.exports = async (eventPayload, _batchMeta) => {
  const item = JSON.parse(eventPayload.Message);
  await createGift(item);
  return { body: 'Create gift' };
};
