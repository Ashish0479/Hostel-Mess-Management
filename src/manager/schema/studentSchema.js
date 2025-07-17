const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
       
        lowercase: true,
        trim: true, 
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    lastName: {
        type: String,
       
        lowercase: true,
        trim: true, 
        maxlength: [20, "First name should be less than or equal to 20 characters"]
    },

    contactNumber: {
        type: String,
        required: true
      },
      
    email: {
        type: String,
        trim: true,
        required: [true, "Email should be provoided"],
        unique: [true, "Email is already in use"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    room_no :{
        type:String,
        required:true,

    },
   
    address: {
        type: String
    },
    course:{
        type:String
    },
    year:{
        type:String
    }
}, {
    timestamps: true
});


const Student= mongoose.model("Student", studentSchema);  // ab User object hee use hoga hr jagah

module.exports = Student;