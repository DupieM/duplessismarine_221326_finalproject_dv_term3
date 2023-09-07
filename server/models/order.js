const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    number: {
        type: Number, 
        required: false
    },
    username: {
        type: String,
        required: true,
        ref: 'Clients'
    }, 
    order_number: { 
        type: Number, 
        required: false
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
    }
})

module.exports = mongoose.model("Order", OrderSchema)