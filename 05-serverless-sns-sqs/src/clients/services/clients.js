const DYNAMODB = require('aws-sdk/clients/dynamodb');
const config = require('../../config/index');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });

exports.createClient = (client) => {
  const params = {
    TableName: config.dynamodb.clientTable,
    Item: client,
  };
  return db
    .put(params)
    .promise()
    .then(() => params.Item)
    .catch(() => {
      throw new Error('An error occurred while trying to create the client');
    });
};
