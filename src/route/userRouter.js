const express = require('express');
const {createUser}=require('../control/userController')


const userRouter = express.Router();  

userRouter.post('/', createUser); 

module.exports = userRouter; 