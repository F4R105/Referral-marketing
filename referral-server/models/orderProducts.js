const mongoose = require('mongoose')

const orderProductSchema = new mongoose.Schema({
    // order_id: (foreign key to Orders),
    // product_id: (foreign key to Products),
    quantity: Number
})

const orderProductModel = mongoose.model("orderProduct", orderProductSchema)
module.exports = orderProductModel