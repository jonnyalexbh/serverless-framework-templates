module.exports.create = async (event) => {
  console.log('**** Event Create Card', event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Create Card Ok', input: event }),
  };
};
