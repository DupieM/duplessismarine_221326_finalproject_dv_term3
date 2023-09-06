const express = require('express')

const DisCupSchema = require('../models/discountedcups')

const router = express();

//Get All
router.get('/api/discups/', async (req, res) => {
    const findCup = await DisCupSchema.find();
    res.json(findCup)
})

//Get Single
router.get('/api/discup/:id', async (req, res) => {
    const findCup = await DisCupSchema.findById(req.params.id);
    res.json(findCup)
})

//Create
router.post('/api/discup', async (req, res) => {
    const cup = new DisCupSchema({ ...req.body });
    await cup.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router