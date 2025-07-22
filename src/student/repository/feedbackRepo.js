const Feedback = require('../schema/feedbackSchema');


async function createFeedback(data) {
  return await Feedback.create(data);
}


async function getFeedbackByStudent(studentId) {
  return await Feedback.find({ student: studentId }).sort({ date: -1 });
}

async function getAllFeedbacks() {
  return await Feedback.find().populate('student').sort({ date: -1 });
}

module.exports = {
  createFeedback,
  getFeedbackByStudent,
  getAllFeedbacks
};
