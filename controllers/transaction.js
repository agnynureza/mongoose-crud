const Transaction = require('../models/transaction')

module.exports = {
    addTransaction(req,res){
        const {member,days,fine,booklist} = req.body
        const transaction = new Transaction(
            {member,
            days,
            out_date:new Date(),
            due_date:new Date(),
            in_date: new Date(),
            fine,
            booklist}
        )
        Transaction
        .save((err,r)=>{
            if(err) throw new error('invalid add Transaction');
            res.status(201).send({
                message : 'add Transaction success',
                data : r
            })
        })
    },
    showTransaction(req,res){
        Transaction
        .find()
        .populate('Book')
        .populate('Customer')
        .exec()
        .then(data=>{
            res.status(201).send({
                message : 'show all customer',
                data:data
            })
        })
    },
    deletedTransaction(req,res){
        const id = req.params.id
        Transaction
        .deleteOne({_id:id})
        .then(data=>{
            res.status(201).send({
                message : 'delete data success',
                data:data
            })
        })
    },
    updateTransaction(req,res){
     const id = req.params.id
     Transaction
     .update({_id:id},{$set:req.body})
     .then(data=>{
         res.status(201).send({
             message : 'update customer success',
             data:data
         })
        })   
    }
}