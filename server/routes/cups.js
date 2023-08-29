const express = require('express')

const CupSchema = require('../models/cups')

const router = express();

//Get All
router.get('/api/cups/', async (req, res) => {
    const findCup = await CupSchema.find();
    res.json(findCup)
})

//Get Single
router.get('/api/cup/:id', async (req, res) => {
    const findCup = await CupSchema.findById(req.params.id);
    res.json(findCup)
})

//Update
router.put('/api/cup/:id', async (req, res) => {
    const { id } = req.params.id
    await CupSchema.updateOne({id} , req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Delete
router.delete('/api/cup/:id', async (req, res) => {
    const { id } = req.params.id
    await CupSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

//Create
router.post('/api/cup', async (req, res) => {
    const cup = new CupSchema({ ...req.body });
    await cup.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router