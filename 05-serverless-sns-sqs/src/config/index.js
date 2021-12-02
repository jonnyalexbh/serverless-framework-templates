module.exports = {
  dynamodb: {
    clientTable: process.env.CLIENT_TABLE_NAME,
  },
  sns: {
    clientCreatedTopic: process.env.CLIENT_CREATED_TOPIC,
  },
};
