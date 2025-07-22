const express = require('express');
const {
  generateBillController,
  getStudentBillsController,
  getBillByIdController,
  markBillAsPaidController
} = require('../control/billController');

const { isLoggedIn, isAdmin } = require('../manager/validations/authValidator');

const router = express.Router();

// Only admin can generate bills
router.post('/generate', isLoggedIn, isAdmin, generateBillController);

// Student or admin can view all bills of a student
router.get('/student/:studentId', isLoggedIn, getStudentBillsController);

// View single bill
router.get('/:billId', isLoggedIn, getBillByIdController);

// Mark bill as paid (after UPI/card payment)
router.post('/:billId/pay', isLoggedIn, markBillAsPaidController);

module.exports = router;
