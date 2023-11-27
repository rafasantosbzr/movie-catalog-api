const joi = require('joi');

const userSchema = joi.object({
    username: joi.string().required().messages({
        'string.base': 'username must be a string',
        'string.empty': 'username cannot be empty',
        'any.required': 'username is required'
    }),
    email: joi.string().email().required().messages({
        'string.base': 'email must be a string',
        'string.email': 'email must be a valid e-mail',
        'string.empty': 'email cannot be empty',
        'any.required': 'email is required'
    }),
    password: joi.string().required().messages({
        'string.base': 'password must be a string',
        'string.empty': 'password cannot be empty',
        'any.required': 'password is required'
    })
});

module.exports = userSchema;