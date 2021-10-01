const mongoose = require('mongoose');

const {Schema} = mongoose;

const students = new Schema(
    {
        enrollment: {
            required: true,
            type: Number,
            min:3
        },
        
        email: 
        {
            required: true,
            type: String,
            min: 8
        },
       
       

    },{timestamps: true}
)

const student = mongoose.model("student", students);

exports.student = student;