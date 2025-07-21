const express = require('express');
const router = express.Router();
const { loginStudent } = require('../controller/studentLoginController');

// @route   POST /api/student/login
// @desc    Login student and return JWT
// @access  Public
router.post('/student/login', loginStudent);

module.exports = router;
