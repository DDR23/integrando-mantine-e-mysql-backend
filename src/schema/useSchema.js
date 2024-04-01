const { DataTypes } = require('sequelize');
const sequelize = require('../data/sequelize'); // Importe sua configuração do Sequelize

const User = sequelize.define('User', {
  // Defina os campos da tabela
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  // Adicione outros campos conforme necessário
});

// Sincronize o esquema com o banco de dados
User.sync();

module.exports = User;