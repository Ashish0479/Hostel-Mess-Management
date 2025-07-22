const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  suggestion: {
    type: String,
    default: ''
  },
  complaint: {
    type: String,
    default: ''
  },
  rating: {
    type: Number, // 1 to 5
    min: 1,
    max: 5
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
