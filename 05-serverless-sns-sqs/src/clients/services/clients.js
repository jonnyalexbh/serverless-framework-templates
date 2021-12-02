const DYNAMODB = require('aws-sdk/clients/dynamodb');
const SNS = require('aws-sdk/clients/sns');
const config = require('../../config/index');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });
const sns = new SNS({ region: 'us-east-1' });

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

exports.clientCreatedNotification = () => {
  const params = {
    Message: 'Tankis Tankis SNS',
    TopicArn: config.sns.clientCreatedTopic,
  };
  return sns
    .publish(params)
    .promise()
    .then((result) => result)
    .catch((error) => {
      console.log('****2222', error);
      throw new Error('An error occurred while trying to public sns');
    });
};
