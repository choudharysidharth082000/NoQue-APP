const mongoose = require('mongoose');

const {Schema} = mongoose;

const Owners = new Schema(
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

const Owner = mongoose.model("owner", Owners);

exports.Owner = Owner;