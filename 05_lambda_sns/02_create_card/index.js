const DYNAMODB = require('aws-sdk/clients/dynamodb');

const { TABLE_NAME } = require('./constants');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });

exports.handler = async (event) => {
  try {
    console.log('**** createCard', event);

    // const params = {
    //   TableName: TABLE_NAME,
    //   Key: { 'id': '999'  },
    //   UpdateExpression: 'set credit_card = :n',
    //   ExpressionAttributeValues: {
    //     ':n': 'adasdas',
    //   },
    //   ReturnValues: 'ALL_NEW',
    // };

    const params = {
      TableName: TABLE_NAME,
      Key: { id: '999' },
      ExpressionAttributeNames: {
        '#C': 'creditCard',
      },
      ExpressionAttributeValues: {
        ':c': {
          number: '678',
        },
      },
      UpdateExpression: 'set #C = :c',
    };

    await db.update(params).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify('Credit card created successfully'),
    };
    return response;
  } catch (error) {
    console.log('**** Error CreateCard', error);
    throw new Error('An error occurred while trying to add the card');
  }
};
