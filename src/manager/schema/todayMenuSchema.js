const mongoose = require('mongoose');

const todayMenuSchema = new mongoose.Schema({
  date: {
    type: String, // Format: "2025-07-20"
    required: true,
    unique: true
  },
  breakfast: { type: String, required: true },
  lunch: { type: String, required: true },
  dinner: { type: String, required: true }
});

module.exports = mongoose.model('TodayMenu', todayMenuSchema);
