const knex = require('../connection');

const createAccount = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const usernameTaken = await knex('users')
        .where({
        username: knex.raw('LOWER(?)', username.trim())
        }).first();

        const emailTaken = await knex('users')
        .where({ email }).first();

        if (usernameTaken || emailTaken) {
            return res.status(400).json({ message: 'User already exists' });
        };

        const newUser = await knex('users')
        .insert({
            username,
            email,
            password
        }).returning('*');

        const { password: _, ...user } = newUser[0];

        return res.status(201).json({ user });
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' });
    };
};

module.exports = {
    createAccount
};