const joi = require('joi');

const idSchema = joi.object({
    id: joi.number().min(1).integer().messages({
        'number.base': 'id must be a number',
        'number.min': 'id must be greater than 0',
        'number.integer': 'id must be an integer'
    })
});

module.exports = idSchema;