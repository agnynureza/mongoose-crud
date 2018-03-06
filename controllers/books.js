const Books = require('../models/books')

module.exports = {
    addBook(req,res){
        const {isbn,title,author,category,stock} = req.body
        const book = new Books({
            isbn,title,author,category,stock
        })

        book.save((err,r)=>{
            if(err) throw new error('invalid add book');
            res.status(201).send({
                message : 'add book success',
                data : r
            })
        })
    },
    showBooks(req,res){
        Books
        .find()
        .exec()
        .then(data=>{
            res.status(201).send({
                message : 'show all books',
                data:data
            })
        })
    },
    deletedBook(req,res){
        const id = req.params.id
        Books
        .deleteOne({_id:id})
        .then(data=>{
            res.status(201).send({
                message : 'delete success',
                data:data
            })
        })
    },
    updateBook(req,res){
     const id = req.params.id
     Books
     .update({_id:id},{$set:req.body})
     .then(data=>{
         res.status(201).send({
             message : 'update book success',
             data:data
         })
        })   
    }
}