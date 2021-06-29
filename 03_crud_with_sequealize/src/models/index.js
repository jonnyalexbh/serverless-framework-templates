const Sequelize = require('sequelize');
const config = require('../config').common.database;

const db = {};

const sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  port: config.port,
  logging: true,
  dialect: config.dialect,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.authors = require('./author')(sequelize, Sequelize);

module.exports = db;
