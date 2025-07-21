const jwt = require('jsonwebtoken');
const { verifyStudentCredentials } = require('../service/studentLoginService');

/**
 * POST /api/student/login
 * Login student and return JWT token
 */
async function loginStudent(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide both email and password' });
        }

        const student = await verifyStudentCredentials(email, password);

        // Generate JWT token
        const token = jwt.sign(
            { id: student._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            student: {
                id: student._id,
                name: `${student.firstName} ${student.lastName}`,
                email: student.email,
                room_no: student.room_no
            }
        });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = {
    loginStudent
};
