const billRepo = require('../repo/billRepository');
const attendanceService = require('../manager/service/attendenceService');

async function generateMonthlyBill(studentId, month, year) {
  // Calculate total using attendance records
  const { summary, records } = await attendanceService.calculateMonthlySummary(studentId, month, year);

  // Create and save the bill
  const billData = {
    student: studentId,
    month,
    year,
    grandTotal: summary.grandTotal,
    isPaid: false,
    details: summary,
  };

  return await billRepo.createBill(billData);
}

async function getStudentBills(studentId) {
  return await billRepo.getBillsByStudent(studentId);
}

async function getBillById(billId) {
  return await billRepo.getBillById(billId);
}

async function markBillAsPaid(billId, paymentDetails) {
  return await billRepo.updateBill(billId, {
    isPaid: true,
    paymentMode: paymentDetails.mode,
    amountPaid: paymentDetails.amount,
    paymentDate: new Date()
  });
}

module.exports = {
  generateMonthlyBill,
  getStudentBills,
  getBillById,
  markBillAsPaid
};
