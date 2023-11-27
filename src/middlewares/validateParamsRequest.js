const validateId = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.params);
        next();
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    };
};

module.exports = validateId;