const express = require('express');
const router = express.Router();
const {loginUser, createUser} = require('../controllers/authController');

router.post('/create', createUser)
router.post('/login', loginUser);

module.exports = router;
