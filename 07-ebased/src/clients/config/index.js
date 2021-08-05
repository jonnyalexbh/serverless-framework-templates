module.exports = {
  dynamodb: {
    table: process.env.CLIENTS_TABLE,
  },
  sns: {
    clientNotification: process.env.TOPIC_ARN_CLIENT,
  },
};
