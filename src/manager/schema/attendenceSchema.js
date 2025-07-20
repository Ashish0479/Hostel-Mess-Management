const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  present: {
    type: Boolean,
    default: false
  },
  extraCharge: {
    type: Number,
    default: 0
  },
  guestCount: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Attendance', attendanceSchema);
