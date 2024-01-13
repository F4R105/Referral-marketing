const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    total_amount: {
        type: Number, /* total price of every items on a cart */
        required: true
    },
    payment_status: {
        type: String,
        enum: ["pending", "completed", "failed"],
        default: "pending",
        required: true
    }
})

const orderModel = mongoose.model("Order", orderSchema)
module.exports = orderModel