const { registerUser } = require("../services/userService");


async function createUser(req, res) {

    try {
        const response = await registerUser(req.body);
        console.log(response)
        return res.status(201).json({
            message: 'Successfully registered the user',
            success: true,
            data: response,
            error: {}
        });
        
    } catch(error) {
       console.log(error)
        return res.status(error.statusCode).json({
            success: false,
            message: error.reason,
            data: {},
            error: error
        })
    }
   
}

module.exports = {
    createUser
}