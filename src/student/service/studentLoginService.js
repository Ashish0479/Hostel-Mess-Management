const bcrypt = require('bcrypt');
const { findStudentByEmail } = require('../repository/studentLoginRepo');

/**
 * Verify student login credentials
 * @param {String} email
 * @param {String} password
 * @returns {Object} student document if valid
 * @throws Error if email not found or password mismatch
 */
async function verifyStudentCredentials(email, password) {
    const student = await findStudentByEmail(email);

    if (!student) {
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    return student;
}

module.exports = {
    verifyStudentCredentials
};
