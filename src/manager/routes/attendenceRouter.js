const express = require('express');
const { isLoggedIn, isAdmin } = require('../validations/authValidator');
const {
  saveAttendanceController,
  getMonthlyAttendanceController
} = require('../controller/attendenceController');

const router = express.Router();

router.post('/save', isLoggedIn, isAdmin, saveAttendanceController);
router.get('/monthly/:studentId', isLoggedIn, getMonthlyAttendanceController);

module.exports = router;
