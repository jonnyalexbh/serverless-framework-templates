/* eslint-disable no-dupe-keys */
const { InputValidation } = require('ebased/schema/inputValidation');

class GetClientInputSchema extends InputValidation {
  constructor(payload, meta) {
    super({
      source: meta.status,
      payload,
      source: 'FIRST.LAMBDA',
      specVersion: 'v1.0.0',
      schema: {
        strict: false,
        dni: { type: String, required: true },
      },
    });
  }
}

module.exports = GetClientInputSchema;
