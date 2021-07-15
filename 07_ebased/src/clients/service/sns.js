const sns = require('ebased/service/downstream/sns');
const config = require('../config');

const sendClientNotification = async (clientCreatedEvent) => {
  const { eventPayload, eventMeta } = clientCreatedEvent.get();

  const publishParams = {
    Message: eventPayload,
    TopicArn: config.sns.clientNotification,
  };

  await sns.publish(publishParams, eventMeta);
};

module.exports = sendClientNotification;
