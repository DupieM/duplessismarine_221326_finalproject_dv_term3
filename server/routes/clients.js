const express = require('express');
const router = express();
const { Client, validate } = require('../models/clients');
const bcrypt = require("bcrypt");

// Register User
router.post("/api/clients", async (req, res) => {
    try {
		console.log("Request Body:", req.body);
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error });

        const client = await Client.findOne({ username: req.body.username });
        if (client)
            return res.status(409).send({ message: "User with given username already exists!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new Client({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Create Client
router.post('/api/client', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error });

        // Hash the password before saving (assuming there is a password field)
        if (req.body.password) {
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const client = new Client({ ...req.body });
        await client.save();
        res.status(201).send({ message: "Client created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
