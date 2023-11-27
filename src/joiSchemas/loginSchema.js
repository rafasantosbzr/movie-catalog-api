const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'email must be a valid e-mail',
        'string.empty': 'email cannot be empty',
        'string.base': 'email must be a string',
        'any.required': 'email is required'
    }),
    password: joi.string().required().messages({
        'string.empty': 'password cannot be empty',
        'string.base': 'password must be a string',
        'any.required': 'password is required'
    })
});

module.exports = loginSchema;