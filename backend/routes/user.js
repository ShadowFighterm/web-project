const express = require('express');
const userModel = require('../models/user');
const router = express.Router();
const userController = require('../controllers/user');
// API Endpoints
// Get all listings
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;

   