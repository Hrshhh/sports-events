// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust the path as needed

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmpassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
