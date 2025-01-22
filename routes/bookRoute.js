const express = require('express')
const { addBook, findBook, specificBook, updateBook, deleteBook } = require('../controllers/bookController')
const upload = require('../middleware/multerConfig')
const router = express.Router()

router.post('/addbook',upload.single("image"), addBook)
router.get('/findbook', findBook)
router.get('/specificbook/:id', specificBook)
router.put('/updatebook/:id', updateBook)
router.delete('/deletebook/:id', deleteBook)

module.exports = router   