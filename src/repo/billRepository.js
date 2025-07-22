const Bill = require('../schem/billSchema');

async function createBill(data) {
  return await Bill.create(data);
}

async function getBillByStudentAndMonth(studentId, month, year) {
  return await Bill.findOne({ student: studentId, month, year });
}

async function updateBill(studentId, month, year, updates) {
  return await Bill.findOneAndUpdate(
    { student: studentId, month, year },
    updates,
    { new: true }
  );
}

async function getBillsByStudent(studentId) {
  return await Bill.find({ student: studentId }).sort({ year: -1, month: -1 });
}

async function getUnpaidBills() {
  return await Bill.find({ isPaid: false });
}

async function markBillAsPaid(studentId, month, year, amountPaid, mode) {
  return await Bill.findOneAndUpdate(
    { student: studentId, month, year },
    {
      isPaid: true,
      amountPaid,
      paymentMode: mode,
      paymentDate: new Date()
    },
    { new: true }
  );
}

module.exports = {
  createBill,
  getBillByStudentAndMonth,
  updateBill,
  getBillsByStudent,
  getUnpaidBills,
  markBillAsPaid
};
