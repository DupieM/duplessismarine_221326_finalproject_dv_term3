const express = require('express')

const NewCupSchema = require('../models/newcups')

const router = express();

//Get All
router.get('/api/newcups/', async (req, res) => {
    const findCup = await NewCupSchema.find();
    res.json(findCup)
})

//Get Single
router.get('/api/newcup/:id', async (req, res) => {
    const findCup = await NewCupSchema.findById(req.params.id);
    res.json(findCup)
})

//Create
router.post('/api/newcup', async (req, res) => {
    const cup = new NewCupSchema({ ...req.body });
    await cup.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router