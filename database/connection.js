const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Database successfully connected xa hai")
})
.catch((error)=>{
    console.log(error)
})