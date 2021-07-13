const DYNAMODB = require('aws-sdk/clients/dynamodb');
const SNS = require('aws-sdk/clients/sns');
const { calculateAge } = require('./helpers');

const { TABLE_NAME, MAXIMUM_AGE, SNS_ARN } = require('./constants');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });
const sns = new SNS({ region: 'us-east-1' });

const checkAge = (birthday) => calculateAge(birthday) <= MAXIMUM_AGE;

exports.handler = async (event) => {
  try {
    const body = event;
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
        body: `Client must be under ${MAXIMUM_AGE} years old`,
      };
    }
    const client = await db.put({ TableName: TABLE_NAME, Item: item }).promise();
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
