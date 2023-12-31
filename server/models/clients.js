const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const ClientSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: false
    }, 
    password: { 
        type: String, 
        required: true
    }
});

ClientSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

const Client = mongoose.model("client", ClientSchema);

const validate = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });

    const result = schema.validate(data);
    return result.error ? { error: result.error.details[0].message } : {};
};

module.exports =  { Client, validate };
