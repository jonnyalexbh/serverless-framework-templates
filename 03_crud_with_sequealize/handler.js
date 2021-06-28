module.exports.getAuthors = async () => ({
  statusCode: 200,
  body: JSON.stringify({ data: 'get authors' }),
});
