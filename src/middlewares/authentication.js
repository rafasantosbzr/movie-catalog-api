const knex = require('../connection');
const jwt = require('jsonwebtoken');
const jwtPassword = require('../jwt');

const authenticateUser = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    };

    const [, token] = authorization.split(' ');

    try {
        const { id } = jwt.verify(token, jwtPassword);

        const user = await knex('users')
        .where({ id }).first();

        if (!user) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        };

        req.user = user;
        
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Access denied' });
    };
};

module.exports = authenticateUser;