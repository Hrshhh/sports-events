
const { Sequelize } = require("sequelize");
const UserModel = require("../models/User");
 const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
const User = UserModel(sequelize, Sequelize);

  sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch(error => {
    throw error;
  });

  sequelize.sync({force:false})
module.exports = {User};