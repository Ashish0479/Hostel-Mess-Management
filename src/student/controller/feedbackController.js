const feedbackService = require('../service/feedbackService');

async function submitFeedbackController(req, res) {
  try {
    const data = req.body;

    const saved = await feedbackService.submitFeedback(data);

    return res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: saved
    });
  } catch (err) {
    console.error("Error submitting feedback:", err);
    return res.status(400).json({
      success: false,
      message: err.message || 'Failed to submit feedback'
    });
  }
}

async function getStudentFeedbacksController(req, res) {
  try {
    const studentId = req.params.studentId;

    const feedbacks = await feedbackService.getStudentFeedbacks(studentId);

    return res.status(200).json({
      success: true,
      data: feedbacks
    });
  } catch (err) {
    console.error("Error fetching feedbacks:", err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch feedbacks'
    });
  }
}

async function getAllFeedbacksController(req, res) {
  try {
    const all = await feedbackService.getAllFeedbacks();

    return res.status(200).json({
      success: true,
      data: all
    });
  } catch (err) {
    console.error("Error fetching all feedbacks:", err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch all feedbacks'
    });
  }
}

module.exports = {
  submitFeedbackController,
  getStudentFeedbacksController,
  getAllFeedbacksController
};
