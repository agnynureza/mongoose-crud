const Transaction = require('../models/transaction')

module.exports = {
    addTransaction(req,res){
        const {member,days,fine,in_date,booklist} = req.body
        const transaction = new Transaction(
            {member,
            days,
            out_date:new Date(),
            due_date:new Date().setDate(new Date().getDate() + Number(req.body.days)),
            in_date,
            fine,
            booklist}
        )
        transaction
        .save((err,r)=>{
            if(err) return res.status(500).send(err);
            res.status(201).send({
                message : 'add Transaction success',
                data : r
            })
        })
    },
    showTransaction(req,res){
        Transaction
        .find()
        .populate('member')
        .populate('booklist')
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
    //  const diff = Transaction.due_date - new Date(req.body.in_date) 
     Transaction
     .update({_id:id},{
         $set:{
             in_date:new Date(req.body.in_date)
            //  fine:diff*1000
            }
        })
     .then(data=>{
         res.status(201).send({
             message : 'update customer success',
             data:data
         })
        })   
    }
}