const attendanceRepo = require('../repository/attendenceRepository');

async function saveOrUpdateAttendance(data) {
  const { studentId, date, present, extras, guestCount } = data;

  if (!studentId || !date) {
    throw new Error("studentId and date are required.");
  }

  const existing = await attendanceRepo.findByStudentAndDate(studentId, date);

  if (existing) {
    return await attendanceRepo.updateAttendance(existing, {
      present,
      extras: extras || [],
      guestCount
    });
  } else {
    return await attendanceRepo.createAttendance({
      student: studentId,
      date,
      present,
      extras: extras || [],
      guestCount
    });
  }
}

async function calculateMonthlySummary(studentId, month, year) {
  if (!studentId || !month || !year) {
    throw new Error("studentId, month, and year are required.");
  }

  const start = new Date(`${year}-${month}-01`);
  const end = new Date(`${year}-${parseInt(month) + 1}-01`);

  const records = await attendanceRepo.getMonthlyAttendance(studentId, start, end);

  let totalPresent = 0;
  let totalExtra = 0;
  let totalGuestCharge = 0;

  records.forEach(entry => {
    if (entry.present) totalPresent++;

    const extrasArray = Array.isArray(entry.extras) ? entry.extras : [];

    totalExtra += extrasArray.reduce((acc, item) => acc + item.price, 0);
    totalGuestCharge += (entry.guestCount || 0) * (entry.chargePerGuest || 0);
  });

  const fixedCharge = 620;
  const grandTotal = (totalPresent * 70) + totalExtra + totalGuestCharge + fixedCharge;

  return {
    summary: {
      totalPresent,
      totalExtra,
      totalGuestCharge,
      fixedCharge,
      grandTotal
    },
    records
  };
}

module.exports = {
  saveOrUpdateAttendance,
  calculateMonthlySummary
};
