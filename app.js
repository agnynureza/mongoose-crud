const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose')
const books = require('./routes/books')
const customers = require('./routes/customers')
const transaction = require('./routes/transactions')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books',books)
app.use('/customers',customers)
app.use('/transactions',transaction)

const dburl = 'mongodb://localhost:27017/library'

mongoose.connect(dburl,err=>{
    if(!err) console.log('connected to database !')
    else throw new error(err)
})
app.listen(3000,()=>console.log('server up !'))