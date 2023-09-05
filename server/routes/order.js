const express = require('express')

const OrderSchema = require('../models/order')

const router = express();

//Get All
router.get('/api/orders/', async (req, res) => {
    const findOrder = await OrderSchema.find();
    res.json(findOrder)
})

//Delete 


//Create
router.post('/api/order', async (req, res) => {
    const order = new OrderSchema({ ...req.body });
    await order.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router