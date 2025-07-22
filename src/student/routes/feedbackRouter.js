const express = require('express');
const {
  submitFeedbackController,
  getStudentFeedbacksController,
  getAllFeedbacksController
} = require('../controller/feedbackController');

const { isLoggedIn, isAdmin } = require('../../manager/validations/authValidator');

const router = express.Router();

// Student feedback submit
router.post('/submit', isLoggedIn, submitFeedbackController);

//  Get all feedbacks of one student
router.get('/student/:studentId', isLoggedIn,getStudentFeedbacksController);

//  Admin - get all feedbacks
router.get('/all', isLoggedIn, isAdmin, getAllFeedbacksController);

module.exports = router;
