const express = require('express');
const { addStudent, getStudent, deleteStudent, getStudents } = require('../controller/studentsController');
//const uploader = require('../middlewares/multerMiddleware');
const { isLoggedIn, isAdmin } = require('../validations/authValidator');

const studentRouter = express.Router();

studentRouter.post(
    '/', 
    isLoggedIn, 
    isAdmin, 
    //uploader.single('productImage'), 
    addStudent
);

studentRouter.get('/:id', getStudent);
studentRouter.get('/', getStudents);
studentRouter.delete('/:id',deleteStudent);
// GET /products/:id 
// delete /products/:id
module.exports = studentRouter;