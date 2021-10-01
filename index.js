//files Importiing
const dotenv = require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const cors = require('cors');


//importing routes 

const mainRoute = require('./Express Routers/Auth');



//dotenv config
dotenv.config();





//App Stuff
const app=express();
const port=process.env.PORT || 3000;

//body parser config 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//middlewares
app.use(express.json());
app.use(cors());


const db = process.env.DB;
console.log(db);

app.use('/local', mainRoute);


//Database Stuff
// ApxSl6G3WMIwuSf1
// mongodb+srv://Admin:<password>@cluster0.yayms.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(db, (err)=>
{
    if(err)
    {
        console.log(err);

    }
    else 
    {
        console.log('DB connected');
    }
})









//Listeners
app.listen(port,()=>{console.log("Server Started on Port :"+port)});




