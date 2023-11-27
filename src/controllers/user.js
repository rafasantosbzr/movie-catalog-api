const knex = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtPassword = require('../jwt');

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

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await knex('users')
        .insert({
            username,
            email,
            password: hashedPassword
        }).returning('*');

        const { password: _, ...user } = newUser[0];

        return res.status(201).json(user);
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' });
    };
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await knex('users')
        .where({ email })
        .first();

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        };

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        };

        const token = jwt.sign({ id: user.id }, jwtPassword, {
            expiresIn: '8h'
        });

        const { password: _, ...loggedUser } = user;

        return res.status(200).json({ user: loggedUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    };
};

const viewProfile = async (req, res) => {
    const { id } = req.user;

    try {
        const userFound = await knex('users')
        .where({ id }).first();

        if (!userFound) {
            return res.status(400).json({ message: 'User not found' });
        };

        const { password: _, ...loggedUser } = userFound;

        return res.status(200).json({ user: loggedUser });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    };
};

const editProfile = async (req, res) => {
    const { id } = req.user;
    const { username, email, password } = req.body;

    try {
        const duplicateUsername = await knex('users')
        .where({ username: knex.raw('LOWER(?)', username.trim()) })
        .whereNot({ id }).first();
        
        const duplicateEmail = await knex('users')
        .where({ email })
        .whereNot({ id }).first();

        if (duplicateUsername || duplicateEmail) {
            return res.status(400).json({ message: 'User already exists' });
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        await knex('users')
        .update({
            username,
            email,
            password: hashedPassword
        }).where({ id }).returning('*');

        return res.status(204).send();        
    } catch (error) {
       return res.status(500).json({ message: 'Internal server error' }); 
    };
};

const deleteAccount = async (req, res) => {
    const { id } = req.user;

    try {
        const userFound = await knex('users')
        .where({ id }).first();

        if (!userFound) {
            return res.status(400).json({ message: 'User not found' });
        };

        await knex('users')
        .where({ id })
        .del();

        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    };
};

module.exports = {
    createAccount,
    login,
    viewProfile,
    editProfile,
    deleteAccount
};