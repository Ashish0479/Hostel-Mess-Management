const Attendance = require('../schema/attendenceSchema');

async function findByStudentAndDate(studentId, date) {
  return await Attendance.findOne({ student: studentId, date });
}

async function createAttendance(data) {
  return await Attendance.create(data);
}

async function updateAttendance(existing, updates) {
  Object.assign(existing, updates);
  return await existing.save();
}

async function getMonthlyAttendance(studentId, start, end) {
  return await Attendance.find({
    student: studentId,
    date: { $gte: start, $lt: end }
  });
}

module.exports = {
  findByStudentAndDate,
  createAttendance,
  updateAttendance,
  getMonthlyAttendance
};
