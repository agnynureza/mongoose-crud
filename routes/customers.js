const express = require('express');
const router = express.Router();
const {addCustomer,showCustomer,deletedCustomer,updateCustomer} = require('../controllers/customers')

router.get('/',showCustomer)
router.post('/',addCustomer)
router.put('/:id',updateCustomer)
router.delete('/:id',deletedCustomer)

module.exports = router