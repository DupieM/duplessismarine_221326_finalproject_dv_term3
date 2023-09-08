const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    number: {
        type: Number, 
        required: true
    },
    username: {
        type: String,
        required: true,
    }, 
    order_number: { 
        type: Number, 
        required: true
    },
    model: { 
        type: String, 
        required: false
    },
    qty: { 
        type: Number, 
        required: false
    },
    price: { 
        type: Number, 
        required: false
    },
    cartItems: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model("Order", OrderSchema)