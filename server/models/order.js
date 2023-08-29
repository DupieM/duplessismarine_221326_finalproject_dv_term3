const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    number: {
        type: Number, 
        required: true
    },
    username: {
        type: String,
        required: true
    }, 
    order_number: { 
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model("Order", OrderSchema)