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
        type: String
      },
      
    email: {
        type: String,
        trim: true,
       
        unique: [true, "Email is already in use"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    room_no :{
        type:String,
        required:true,

    },
    
   password: {
        type: String,
       
        minlength: [6, "Password should be minimum 6 character long"]
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
studentSchema.pre('save', async function () {

    //mongodb m save hon t pehla encryot hoja ga password kyunki pre wala middleware use kra h

 
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
});



const Student= mongoose.model("Student", studentSchema);  // ab Student object hee use hoga hr jagah

module.exports = Student;