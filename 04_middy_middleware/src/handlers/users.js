module.exports.store = async (event) => {
  console.log('trying to save the user without format', event.body);
  console.log('trying to save the user with format', JSON.parse(event.body));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'testing JSON.parse' }),
  };
};
