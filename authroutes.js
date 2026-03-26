const express = require('express');
const router = express.Router();
const authController = require('./authcontrollr');

router.get('/token', authController.generateToken);

module.exports = router;
