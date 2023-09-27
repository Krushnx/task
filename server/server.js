const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://contactnagare:BWTm1ng4Vi9QJ09z@cluster0.wzhzr4h.mongodb.net/?retryWrites=true&w=majority")

const db = mongoose.connection;

db.on('error' , (error)=>
{
    console.log(error);
});

db.once('open' , ()=>
{
    console.log("DB Connected successfully");
})
app.use(express.json());

const itemrouter = require('./routes/item')

app.use('/item' , itemrouter);



app.listen(8000, ()=>{
    console.log(`App listed on port http://localhost:8000`);
});


