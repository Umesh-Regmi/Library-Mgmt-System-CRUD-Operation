const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        unique:true
    },
    bookPrice:{
        type:Number
    },
    isbnNumber:{
        type:Number
    },
    authorName:{
        type:String
    },
    publishedAt:{
        type:String
    },
    publication:{
        type:String
    }
})

module.exports = mongoose.model('Book', bookSchema)