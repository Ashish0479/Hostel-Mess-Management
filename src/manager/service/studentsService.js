//const cloudinary = require('../config/cloudinaryConfig');
const StudentsRespository = require('../repository/studentsRepository');
const fs = require('fs/promises');
const InternalServerError = require('../../utils/internalServerError');
const NotFoundError = require('../../utils/notFoundError');

async function createStudent(studentDetails) {
    // 1. We should check if an image is coming to create the product, then we should first upload it on 
    // cloudinary

    // const imagePath = productDetails.imagePath;
    // if(imagePath) {
    //     try {
    //         const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
    //         var productImage = cloudinaryResponse.secure_url;
    //         console.log(productImage);
    //         await fs.unlink(process.cwd() + "/" + imagePath);
    //     } catch(error) {
    //         console.log(error);
    //         throw new InternalServerError();
    //     }
        
    // }

    // 2. Then use the url from cloudinary and other propduct details to add product in db
    const student = await StudentsRespository.createStudent({
        ...studentDetails
        // Image: productImage
    });

    console.log(student);
        
    return student;
    

}

async function getStudentById(studentId) {
    const response = await ProductRespository.getStudentById(productId);
    if(!response) {
        throw new NotFoundError('student');
    }
    return response;
}

async function getAllStudentsData() {
    const response = await ProductRespository.getAllStudents();
    if(!response) {
        throw new NotFoundError('Student');
    }
    return response;
}

async function deleteStudentById(studentId) {
    const response = await StudentRespository.deleteStudentById(studentId);
    if(!response) {
        throw new NotFoundError('Student');
    }
    return response;
}


module.exports = {
    createStudent,
    getStudentById,
    deleteStudentById,
    getAllStudentsData
}