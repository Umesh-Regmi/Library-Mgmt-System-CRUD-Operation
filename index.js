const express = require('express')
const app = express()
require('dotenv').config()
require('./database/connection')
app.use(express.json())

const PORT = process.env.port

app.get('/', (req, res)=>{
    res.send("How are you.")
})

// routes
const addBook = require('./routes/bookRoute')

// adding to pipeline
app.use(addBook)

app.listen(PORT,() =>{
    console.log("Node was started at port " +PORT)
})