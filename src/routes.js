const express = require('express');
const { createAccount, login, viewProfile, editProfile, deleteAccount } = require('./controllers/user');
const validateRequest = require('./middlewares/validateRequest');
const userSchema = require('./joiSchemas/userSchema');
const loginSchema = require('./joiSchemas/loginSchema');
const authenticateUser = require('./middlewares/authentication');

const routes = express();

routes.post('/user', validateRequest(userSchema), createAccount);
routes.post('/login', validateRequest(loginSchema), login);

routes.use(authenticateUser);

routes.get('/user', viewProfile);
routes.put('/user', validateRequest(userSchema), editProfile);
routes.delete('/user', deleteAccount);

module.exports = routes;