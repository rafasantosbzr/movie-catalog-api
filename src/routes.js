const express = require('express');
const { createAccount } = require('./controllers/user');
const validateRequest = require('./middlewares/validateRequest');
const userSchema = require('./joiSchemas/userSchema');

const routes = express();

routes.post('/user', validateRequest(userSchema), createAccount);

module.exports = routes;