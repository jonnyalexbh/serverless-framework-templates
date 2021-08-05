module.exports = {
  common: {
    database: {
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      port: process.env.PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      dialect: process.env.DB_DIALECT,
    },
  },
};
