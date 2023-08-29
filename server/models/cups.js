const mongoose = require('mongoose')

const CupSchema = mongoose.Schema({
    make: {
        type: String, 
        required: true
    },
    model: {
        type: String,
        required: true
    }, 
    price: {
        type: Number, 
        required: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Cup", CupSchema)