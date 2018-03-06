const mongoose = require('mongoose');
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member   : { type: Schema.Types.ObjectId, ref: 'Customer' },
    days     : Number,
    out_date : String,
    due_date : String,
    in_date  : String,
    fine     : Number,
    booklist : { type: Schema.Types.ObjectId, ref: 'Book' }
}) 

const Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction