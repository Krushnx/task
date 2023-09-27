const express = require('express');
const router = express.Router();
const Item = require('../models/schema')

router.get('/' , async(req , res)=>{
    
    try {
        const item = await Item.find();
        res.json(item);

        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

module.exports  =router;
