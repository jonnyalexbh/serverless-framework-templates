const { batchEventMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/batchEventQueue');
const outputMode = require('ebased/handler/output/batchEventConfirmation');

const domain = require('../domain/create-gift');

// Handler
module.exports.create = async (events, context) => batchEventMapper(
  { events, context }, inputMode, domain, outputMode,
);
