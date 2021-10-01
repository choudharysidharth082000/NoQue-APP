const mongoose = require('mongoose');

const {Schema} = mongoose;

const Admins = new Schema(
    {
        userName: {
            required: true,
            type: String,
            min:3
        },
        
        email: 
        {
            required: true,
            type: String,
            min: 8
        },
       
        password: 
        {
            type: String,
            required : true,
            min: 8
        },
       
        salt : {
            type: String,
            required: true,
            

        }

    },{timestamps: true}
)

const Admin = mongoose.model("Admin", Admins);

exports.Admin = Admin;