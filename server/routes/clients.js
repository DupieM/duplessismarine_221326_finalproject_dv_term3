const express = require('express');
const router = express();
const { Client } = require('../models/clients');
const bcrypt = require("bcrypt");
const Joi = require("joi");

// Login User
router.post("/api/clients", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const client = await Client.findOne({ username: req.body.username });
		if (client)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// Create
router.post('/api/client', async (req, res) => {
    const client = new Client({ ...req.body});
    await client.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router