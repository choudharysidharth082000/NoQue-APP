const express = require('express');
const router = express.Router();
const canteen = require('../models/Shops');


router.get('/', async (req, res)=>
{
    try {
        const user = await canteen.find();

        console.log(user);
        
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;