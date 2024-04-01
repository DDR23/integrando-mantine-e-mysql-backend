const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Use o dialeto MySQL
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
});

module.exports = sequelize;