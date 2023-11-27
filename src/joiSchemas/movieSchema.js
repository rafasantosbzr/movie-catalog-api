const joi = require('joi');

const movieSchema = joi.object({
    'title': joi.string().required().messages({
        'string.base': 'title must be a string',
        'string.empty': 'title cannot be empty',
        'any.required': 'title is required'
    }),
    'release_year': joi.number().integer().min(1874).required().messages({
        'number.base': 'release_year must be a number',
        'number.empty': 'release_year cannot be empty',
        'number.integer': 'release_year must be an integer',
        'any.required': 'release_year is required',
        'number.min': 'release_year must be greater than 1873'
    }),
    'directed_by': joi.string().required().messages({
        'string.base': 'directed_by must be a string',
        'string.empty': 'directed_by cannot be empty',
        'any.required': 'directed_by is required'
    }),
    'synopsis': joi.string().messages({
        'string.base': 'synopsis must be a string',
        'string.empty': 'synopsis cannot be empty'
    })
});

module.exports = movieSchema;