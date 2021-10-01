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
        userID:
        {
            type: String,
            required: true
        } ,       
       
        items:
        [
            {
                name:
                {
                    type: String
                },
                price:
                {
                    type: String
                },
                image:
                {
                    type: String
                }
            }
        ]
        

    },{timestamps: true}
)

const canteen = mongoose.model("canteen", canteens);

exports.canteen = canteen;