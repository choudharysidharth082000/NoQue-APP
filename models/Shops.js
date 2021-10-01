const mongoose = require('mongoose');

const {Schema} = mongoose;

const canteens = new Schema(
    {
        shopName: {
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
        mobileNumber: 
        {
            required: true,
            type: String,
            min: 10,
            max:10
        },
        
        password: 
        {
            type: String,
            required : true,
            min: 8
        },
        items: Array,
        price: Array,
        Image: Array
        

    },{timestamps: true}
)

const canteen = mongoose.model("canteen", canteens);

exports.canteen = canteen;