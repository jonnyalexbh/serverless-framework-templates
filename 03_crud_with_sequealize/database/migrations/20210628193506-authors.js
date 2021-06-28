module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('authors',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('authors'),
};
