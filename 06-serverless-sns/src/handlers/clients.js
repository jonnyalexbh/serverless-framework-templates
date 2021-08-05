const DYNAMODB = require('aws-sdk/clients/dynamodb');
const SNS = require('aws-sdk/clients/sns');

const { SNS_ARN } = require('../constants');
const { common: { maximumAge }, dynamodb: { table: dynamodbTable }, aws: { region } } = require('../config');

const { calculateAge } = require('../helpers');

const db = new DYNAMODB.DocumentClient({ region });
const sns = new SNS({ region });

const checkAge = (birthday) => calculateAge(birthday) <= maximumAge;

module.exports.create = async (event) => {
  console.log('****', event.body);
  try {
    const { body } = event;
    const item = {
      id: body.dni, dni: body.dni, name: body.name, last_name: body.lastName, birth: body.birth,
    };
    if (!body.dni || !body.name || !body.lastName || !body.birth) {
      return {
        statusCode: 400,
        body: 'These attributes are required: dni, name, lastName, birth',
      };
    }
    if (!checkAge(item.birth)) {
      return {
        statusCode: 400,
        body: `Client must be under ${maximumAge} years old`,
      };
    }
    const client = await db.put({ TableName: dynamodbTable, Item: item }).promise();
    console.log('**** CLIENT ', client);
    const snsResult = await sns.publish({
      Message: JSON.stringify(body),
      TopicArn: SNS_ARN,
    }).promise();
    console.log('**** SNS', snsResult);
    const response = {
      statusCode: 200,
      body: JSON.stringify(client),
    };
    return response;
  } catch (error) {
    console.log('**** Error CreateClient', error);
    throw new Error('An error occurred while trying to create the client');
  }
};
