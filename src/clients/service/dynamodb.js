const dynamo = require('ebased/service/storage/dynamo');
const { ErrorHandled } = require('ebased/util/error');
const config = require('../config');
const { randomGift, getCard } = require('../utils');
const { calculateAge } = require('../helpers');
const { MAXIMUM_AGE } = require('../constants');

exports.createClient = (client) => dynamo.putItem(
  { TableName: config.dynamodb.table, Item: client },
);

exports.getClient = async (client) => {
  const params = {
    TableName: config.dynamodb.table,
    Key: { dni: client.dni },
  };
  const { Item } = await dynamo.getItem(params);
  if (!Item) throw new ErrorHandled('Missing Client', { status: 404, code: 'NOT_FOUND' });
  return Item;
};

exports.getClients = async () => {
  const clients = await dynamo.scanTable({ TableName: config.dynamodb.table });
  return clients;
};

exports.deleteClient = async (client) => {
  const params = {
    TableName: config.dynamodb.table,
    Key: { dni: client.dni },
    ExpressionAttributeValues: {
      ':s': 'REMOVED',
    },
    UpdateExpression: 'set clientStatus = :s',
  };

  await dynamo.updateItem(params);
};

exports.createCard = async (body) => {
  const params = {
    TableName: config.dynamodb.table,
    Key: { dni: body.dni },
    ExpressionAttributeNames: {
      '#C': 'creditCard',
    },
    ExpressionAttributeValues: {
      ':c': {
        creditCardNumber: getCard.creditCardNumber,
        expirationDate: getCard.expirationDate,
        securityCode: getCard.securityCode,
        type: calculateAge(body.birth) > MAXIMUM_AGE ? 'Gold' : 'Classic',
      },
    },
    UpdateExpression: 'set #C = :c',
  };

  await dynamo.updateItem(params);
};

exports.createGift = async (body) => {
  const params = {
    TableName: config.dynamodb.table,
    Key: { dni: body.dni },
    ExpressionAttributeValues: {
      ':g': randomGift(),
    },
    UpdateExpression: 'set gift = :g',
  };

  await dynamo.updateItem(params);
};
