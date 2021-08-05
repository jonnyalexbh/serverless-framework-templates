module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define('author', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
    lastName: {
      type: Sequelize.STRING(),
      allowNull: false,
      defaultValue: null,
    },
  }, {
    underscored: true,
    timestamps: false,
  });
  return Author;
};
