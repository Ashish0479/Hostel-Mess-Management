const feedbackRepo = require('../repository/feedbackRepo');

async function submitFeedback(data) {
  // Basic validation (optional)
  if (!data.student || (!data.message && !data.rating)) {
    throw new Error("Student ID and at least message or rating is required.");
  }

  return await feedbackRepo.createFeedback({
    student: data.student,
    message: data.message || '',
    rating: data.rating || null,
    date: new Date()
  });
}

async function getStudentFeedbacks(studentId) {
  return await feedbackRepo.getFeedbackByStudent(studentId);
}

async function getAllFeedbacks() {
  return await feedbackRepo.getAllFeedbacks();
}

module.exports = {
  submitFeedback,
  getStudentFeedbacks,
  getAllFeedbacks
};
