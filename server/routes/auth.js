const router = require("express").Router();
const { Client } = require("../models/clients");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post('/api/auth', async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const client = await Client.findOne({ username: req.body.username });
		if (!client)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			client.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = client.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully" });
	} catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

const validate = (data) => {
	const schema = Joi.object({
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;