const { commandMapper } = require('ebased/handler');
const inputMode = require('ebased/handler/input/commandApi');
const outputMode = require('ebased/handler/output/commandApi');

const domain = require('../domain/create-client');
const getClientDomain = require('../domain/get-client');
const getClientsDomain = require('../domain/get-clients');
const updateClientDomain = require('../domain/update-client');
const deleteClientDomain = require('../domain/delete-client');

// Handler
module.exports.create = async (command, context) => commandMapper(
  { command, context },
  inputMode,
  domain,
  outputMode,
);

module.exports.getByDni = async (command, context) => commandMapper(
  { command, context },
  inputMode,
  getClientDomain,
  outputMode,
);

module.exports.get = async (command, context) => commandMapper(
  { command, context },
  inputMode,
  getClientsDomain,
  outputMode,
);

module.exports.update = async (command, context) => commandMapper(
  { command, context },
  inputMode,
  updateClientDomain,
  outputMode,
);

module.exports.delete = async (command, context) => commandMapper(
  { command, context },
  inputMode,
  deleteClientDomain,
  outputMode,
);
