const express = require('express');

const CupSchema = require('../models/cups');

const router = express();

//Get All
router.get('/api/cups/', async (req, res) => {
    const findCup = await CupSchema.find();
    res.json(findCup)
});

//Get Single
router.get('/api/cup/:id', async (req, res) => {
    const findCup = await CupSchema.findById(req.params.id);
    res.json(findCup)
});


//Update
router.patch('/api/updatecup/:id', async (req, res) => {
    console.log(req.body);
    // let stock = +req.body.varOne + +req.body.varTwo + +req.body.varThree;

    const findProduct = await CupSchema.updateOne(
        {_id: req.params.id},
        {Sset: {
            make: req.body.make, 
            model: req.body.model, 
            price: req.body.price, 
            quantity: req.body.quantity,
            capacity: req.body.capacity, 
            img: req.body.img, 
            product_code: req.body.product_code, 
            color_img1: req.body.color_img1, 
            color_img2: req.body.color_img2, 
            color_img3: req.body.color_img3, 
            color_img4: req.body.color_img4, 
            description: req.body.description, 
            care_instructions: req.body.care_instructions, 
            timestamp: req.body.timestamp, 
            discount: req.body.discount, 
        }}
    );
    res.json(findProduct);

    // const { id } = req.params.id
    // await CupSchema.updateOne({id} , req.body)
    //     .then(response => res.json(response))
    //     .catch(error => res.status(500).json(error))
});

//Delete
router.delete('/api/cup/:id', async (req, res) => {
    const { id } = req.params.id
    await CupSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

//Create
router.post('/api/cup', async (req, res) => {
    const cup = new CupSchema({ 
        make: req.body.make, 
        model: req.body.model, 
        price: req.body.price, 
        quantity: req.body.quantity,
        capacity: req.body.capacity, 
        img: req.body.img, 
        product_code: req.body.product_code, 
        color_img1: req.body.color_img1, 
        color_img2: req.body.color_img2, 
        color_img3: req.body.color_img3, 
        color_img4: req.body.color_img4, 
        description: req.body.description, 
        care_instructions: req.body.care_instructions, 
        timestamp: req.body.timestamp, 
        discount: req.body.discount, 
    });
    await cup.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router