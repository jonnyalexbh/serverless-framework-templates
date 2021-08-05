const DYNAMODB = require('aws-sdk/clients/dynamodb');
const { TABLE_NAME } = require('./constants');

const db = new DYNAMODB.DocumentClient({ region: 'us-east-1' });

const randomGift = () => {
  const gifts = ['Bag', 'Shoes', 'Mobile'];
  const random = Math.floor(Math.random() * gifts.length);
  return gifts[random];
};

exports.handler = async (event) => {
  try {
    console.log('**** createGift', event);

    const params = {
      TableName: TABLE_NAME,
      Key: { id: '999' },
      ExpressionAttributeValues: {
        ':g': randomGift(),
      },
      UpdateExpression: 'set gift = :g',
    };

    await db.update(params).promise();

    const response = {
      statusCode: 200,
      body: JSON.stringify('Successfully created gift'),
    };
    return response;
  } catch (error) {
    console.log('**** Error creating gift', error);
    throw new Error('An error occurred while trying to create the gift');
  }
};
