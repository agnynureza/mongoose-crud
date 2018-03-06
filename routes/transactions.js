
const express = require('express');
const router = express.Router();
const {addTransaction,showTransaction,deletedTransaction,updateTransaction} = require('../controllers/transaction')

router.get('/',showTransaction)
router.post('/',addTransaction)
router.put('/:id',updateTransaction)
router.delete('/:id',deletedTransaction)

module.exports = router