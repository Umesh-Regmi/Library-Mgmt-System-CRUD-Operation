const Book = require('../models/bookModel')

// to add book
exports.addBook = async(req, res) => {
    let book = await Book.create({
        bookName:req.body.bookName,
        bookPrice:req.body.bookPrice,
        isbnNumber:req.body.isbnNumber,
        authorName:req.body.authorName,
        publishedAt:req.body.publishedAt,
        publication:req.body.publication
    })
    if(!book){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(book)
}

// to find all books
exports.findBook = async(req, res) => {
    let book = await Book.find()
    if(!book){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(book)
}
// to find specific book
exports.specificBook = async(req, res) => {
    let book = await Book.findById(req.params.id)
    if(!book){
        return res.status(400).json({erro:"Something went wrong"})
    }
    res.send(book)
}
// update books
exports.updateBook = async(req, res) => {
    let book = await Book.findByIdAndUpdate(req.params.id,{
        bookName: req.body.bookName,
        bookPrice: req.body.bookPrice,
        isbnNumber: req.body.isbnNumber,
        authorName: req.body.authorName,
        publishedAt: req.body.publishedAt,
        publication: req.body.publication
    })
    if(!book){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(book)
}
// deleteBook
exports.deleteBook = async(req, res) => {
    let book = await Book.findByIdAndDelete(req.params.id)
    if(!book){
        return res.status(400).json({error:"Book was not deleted"})
    }
    res.send({message:"Book was successfully deleted"})
}