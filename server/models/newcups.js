const mongoose = require('mongoose')

const NewCupSchema = mongoose.Schema({
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
        required: false
    },
    img: {
        type: String,
        required: true
    },
    product_code: {
        type: String,
        required: true
    },
    color_img1: {
        type: String,
        required: true
    },
    color_img2: {
        type: String,
        required: false
    },
    color_img3: {
        type: String,
        required: false
    },
    color_img4: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    care_instructions: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("NewCup", NewCupSchema)