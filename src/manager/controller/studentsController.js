const { createStudent, getStudentById, deleteStudentById, getAllStudentsData } = require('../service/studentsService');
const AppError = require('../../utils/appError');
async function addStudent(req, res) {
    try {
        const student = await createStudent({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            room_no: req.body.room_no,
            //imagePath: req.file?.path,
            email: req.body.email,
            password:req.body.password,
            contactNumber: req.body.contactNumber, 
            address: req.body.address ,
            year:req.body.year,
            course:req.body.course

        });
        console.log("Back to controller", student);
        return res.status(201).json({
            success: true,
            message: 'Successfully created the student',
            error: {},
            data: student
        });
    } catch(error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
        
    }
}

async function getStudent(req, res) {
    try {
        const response = await getStudentById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched the student',
            error: {},
            data: response
        })
    } catch (error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

async function getStudents(req, res) {
    try {
        const response = await getAllStudentsData();;
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched the student',
            error: {},
            data: response
        })
    } catch (error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

async function deleteStudent(req, res) {
    try {
        const response = await deleteStudentById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted the student',
            error: {},
            data: response
        })
    } catch (error) {
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}


module.exports = {
    addStudent,
    getStudent,
    deleteStudent,
    getStudents
}