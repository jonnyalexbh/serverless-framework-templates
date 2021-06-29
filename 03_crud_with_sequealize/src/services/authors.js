const db = require('../models');

const Author = db.authors;
const logger = require('../logger');

exports.getAuthors = () => Author.findAll()
  .then((authors) => authors)
  .catch((error) => {
    logger.error(error);
    throw new Error('An error occurred while trying to get the authors');
  });
