//Here We Are definintg the Scgema/Structure of our data

const mongoose = require('mongoose');

const shopsSchema= mongoose.Schema({
    
    Name:String,
    Items:Array,
    Price:Array,
    Images:Array,
    Phone:Number

});



const canteen = mongoose.model("canteen", shopsSchema);
module.exports = canteen;