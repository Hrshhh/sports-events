const express = require('express');
const router = express.Router();
const {loginUser, createUser} = require('../controllers/authController');
const { createEvent, viewEvent, updateEvent } = require('../controllers/eventController');

router.post('/create', createUser);
router.post('/createEvent', createEvent)
router.put('/updateEvent', updateEvent)
router.get('/viewEvent', viewEvent)
router.post('/login', loginUser);

module.exports = router;
