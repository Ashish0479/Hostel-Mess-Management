const Student = require('../../manager/schema/studentSchema');

/**
 * Find student by email
 * @param {String} email
 * @returns {Object} student document or null
 */
async function findStudentByEmail(email) {
    return await Student.findOne({ email });
}

module.exports = {
    findStudentByEmail
};
