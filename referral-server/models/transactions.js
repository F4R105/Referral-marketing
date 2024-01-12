const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    // order_id: (foreign key to Orders),
    // transaction_id: (unique identifier from Stripe or PayPal),
    amount: Number,
    // status: (pending, completed, failed)
})

const transactionModel = mongoose.model("transaction", transactionSchema)
module.exports = transactionModel