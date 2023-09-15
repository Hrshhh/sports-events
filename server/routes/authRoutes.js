const express = require('express');
const router = express.Router();
const {loginUser, createUser} = require('../controllers/authController');
const { createEvent, viewEvent } = require('../controllers/eventController');

router.post('/create', createUser);
router.post('/createEvent', createEvent)
router.get('/viewEvent', viewEvent)
router.post('/login', loginUser);

module.exports = router;
