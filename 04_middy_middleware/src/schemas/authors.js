exports.authorSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      properties: {
        first_name: {
          type: 'string',
          minLength: 1,
        },
        last_name: {
          type: 'string',
          minLength: 1,
        },
      },
      required: ['first_name', 'last_name'],
    },
  },
};
