const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    // user_id: {},
    total_amount: Number,
    // payment_status: (pending, completed, failed)
})

const orderModel = mongoose.model("order", orderSchema)
module.exports = orderModel