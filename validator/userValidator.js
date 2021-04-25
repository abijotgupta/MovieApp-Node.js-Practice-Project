const Joi = require('@hapi/joi');

const schema = Joi.object({
    username: Joi.string().alphanum().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(
        new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
    ).message().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
});

module.exports = schema