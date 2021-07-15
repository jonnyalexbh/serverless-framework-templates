/* eslint-disable no-dupe-keys */
const { InputValidation } = require('ebased/schema/inputValidation');

class UpdateCardInputSchema extends InputValidation {
  constructor(payload, meta) {
    super({
      source: meta.status,
      payload,
      source: 'FIRST.LAMBDA',
      specVersion: 'v1.0.0',
      schema: {
        strict: false,
        cNames: { type: String, required: true },
        lastName: { type: String, required: true },
        birth: { type: String, required: true },
      },
    });
  }
}

module.exports = UpdateCardInputSchema;
