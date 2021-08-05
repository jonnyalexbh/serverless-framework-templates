const authors = require('../seeders/initial_authors');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('publications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    author_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    body: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
  })
    .then(() => authors.map((author) => queryInterface
      .bulkInsert('authors', [
        {
          first_name: author.first_name,
          last_name: author.last_name,
          email: author.email,
          date_of_birth: author.date_of_birth,
        },
      ],
      { returning: true })
      .then((authorId) => {
        const { id } = authorId[0];
        return queryInterface.bulkInsert(
          'publications',
          authors[id - 1].publications.map(({ title, body }) => ({ author_id: id, title, body })),
        );
      }))),
  down: (queryInterface) => queryInterface.dropTable('publications'),
};
