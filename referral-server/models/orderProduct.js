const mongoose = require('mongoose')

const orderProductSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderProductModel = mongoose.model("OrderProduct", orderProductSchema)
module.exports = orderProductModel