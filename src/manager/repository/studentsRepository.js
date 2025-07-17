const Student = require('../schema/studentSchema');
const BadRequestError = require('../../utils/badRequestError');
const InternalServerError = require('../../utils/internalServerError');

async function createStudent(studentDetails) {
    try {
        const response = await Student.create(studentDetails);
        return response;
    } catch(error) {
        if(error.name === 'ValidationError') {

            const errorMessageList = Object.keys(error.errors).map((property) => {
                return error.errors[property].message;
            })
            throw new BadRequestError(errorMessageList);
        } 
        console.log(error);
        throw new InternalServerError();
    }
}

async function getStudentById(studentId) {
    try {
        const student = await Student.findById(productId);
        return student;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

async function getAllStudents() {
    try {
        const students = await Student.find({});
        return students;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

async function deleteStudentById(StudentId) {
    try {
        const response = await Student.findByIdAndDelete(studentId);
        return response;
    } catch (error) {
        console.log(error);
        throw new InternalServerError();
    }
}

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    deleteStudentById
}