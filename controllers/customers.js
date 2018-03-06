const Customer = require('../models/customers')

module.exports = {
    addCustomer(req,res){
        const {name,memberid,address,zipcode,phone} = req.body
        const customer = new Customer(
            {name,memberid,address,zipcode,phone}
        )
        customer.save((err,r)=>{
            if(err) throw new error('invalid add customer');
            res.status(201).send({
                message : 'add customer success',
                data : r
            })
        })
    },
    showCustomer(req,res){
        Customer
        .find()
        .exec()
        .then(data=>{
            res.status(201).send({
                message : 'show all customer',
                data:data
            })
        })
    },
    deletedCustomer(req,res){
        const id = req.params.id
        Customer
        .deleteOne({_id:id})
        .then(data=>{
            res.status(201).send({
                message : 'delete data success',
                data:data
            })
        })
    },
    updateCustomer(req,res){
     const id = req.params.id
     Customer
     .update({_id:id},{$set:req.body})
     .then(data=>{
         res.status(201).send({
             message : 'update customer success',
             data:data
         })
        })   
    }
}