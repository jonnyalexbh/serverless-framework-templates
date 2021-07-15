const { getClients } = require('../service/dynamodb');

module.exports = async () => {
  const clients = await getClients();

  return {
    body: {
      message: 'Get client',
      clients: clients.Items,
    },
  };
};
