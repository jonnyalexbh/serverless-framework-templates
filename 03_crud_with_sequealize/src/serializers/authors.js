exports.parseAuthors = (authors) => authors.map((author) => ({
  id: author.id,
  first_name: author.firstName,
  last_name: author.lastName,
}));
