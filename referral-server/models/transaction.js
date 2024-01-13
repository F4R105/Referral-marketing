const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },
    transaction_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [pending, completed, failed],
        required: true,
        default: "pending"
    }
})

const transactionModel = mongoose.model("Transaction", transactionSchema)
module.exports = transactionModel