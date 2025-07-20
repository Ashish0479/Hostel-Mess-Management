const attendanceService = require('../service/attendenceService');

async function saveAttendanceController(req, res) {
   console.log("Body received from Postman: ", req.body);
  try {
    const result = await attendanceService.saveOrUpdateAttendance(req.body);
    

    return res.status(200).json({
      success: true,
      message: "Attendance saved successfully",
      data: result
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err
    });
  }
}

async function getMonthlyAttendanceController(req, res) {
  try {
    const { studentId } = req.params;
    const { month, year } = req.query;

    const result = await attendanceService.calculateMonthlySummary(studentId, month, year);
    console.log(req.body); // to verify if body aa bhi rahi hai


    return res.status(200).json({
      success: true,
      ...result
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error fetching monthly summary",
      error: err
    });
  }
}

module.exports = {
  saveAttendanceController,
  getMonthlyAttendanceController
};
