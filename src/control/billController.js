const billService = require('../services/billService');

async function generateBillController(req, res) {
  try {
    const { studentId, month, year } = req.body;

    if (!studentId || !month || !year) {
      return res.status(400).json({
        success: false,
        message: "studentId, month and year are required"
      });
    }

    const bill = await billService.generateMonthlyBill(studentId, month, year);

    return res.status(201).json({
      success: true,
      message: "Bill generated successfully",
      data: bill
    });

  } catch (err) {
    console.error("Error generating bill:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err
    });
  }
}

async function getStudentBillsController(req, res) {
  try {
    const { studentId } = req.params;

    const bills = await billService.getStudentBills(studentId);

    return res.status(200).json({
      success: true,
      data: bills
    });
  } catch (err) {
    console.error("Error fetching student bills:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err
    });
  }
}

async function getBillByIdController(req, res) {
  try {
    const { billId } = req.params;

    const bill = await billService.getBillById(billId);

    return res.status(200).json({
      success: true,
      data: bill
    });

  } catch (err) {
    console.error("Error fetching bill by ID:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err
    });
  }
}

async function markBillAsPaidController(req, res) {
  try {
    const { billId } = req.params;
    const { mode, amount } = req.body;

    if (!mode || !amount) {
      return res.status(400).json({
        success: false,
        message: "Payment mode and amount are required"
      });
    }

    const updated = await billService.markBillAsPaid(billId, {
      mode,
      amount
    });

    return res.status(200).json({
      success: true,
      message: "Payment status updated to paid",
      data: updated
    });

  } catch (err) {
    console.error("Error updating payment status:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err
    });
  }
}

module.exports = {
  generateBillController,
  getStudentBillsController,
  getBillByIdController,
  markBillAsPaidController
};
