const express = require('express');
const { login, logout } = require('../control/authController');


const authRouter = express.Router();  

authRouter.post('/login', login); 
authRouter.post('/logout', logout);

module.exports = authRouter;
