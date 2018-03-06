const express = require('express');
const router = express.Router();
const{showBooks,addBook,updateBook,deletedBook} = require('../controllers/books')

router.get('/',showBooks)
router.post('/',addBook)
router.put('/:id',updateBook)
router.delete('/:id',deletedBook)

module.exports = router

