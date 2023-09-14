const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const User = require('../models/User');
const { secretKey } = require('../config/config');

// User registration
async function register(req, res) {
  console.log("Req body", req.body);
}

// User login
async function login(req, res) {
  // Implement user login logic
}

module.exports = {
  register,
  login,
};
