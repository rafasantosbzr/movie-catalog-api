const express = require('express');
const { createAccount, login, viewProfile, editProfile, deleteAccount } = require('./controllers/user');
const validateBody = require('./middlewares/validateBodyRequest');
const userSchema = require('./joiSchemas/userSchema');
const loginSchema = require('./joiSchemas/loginSchema');
const authenticateUser = require('./middlewares/authentication');
const { addMovie, findMovie } = require('./controllers/movie');
const movieSchema = require('./joiSchemas/movieSchema');
const idSchema = require('./joiSchemas/idSchema');
const validateId = require('./middlewares/validateParamsRequest');

const routes = express();

routes.post('/user', validateBody(userSchema), createAccount);
routes.post('/login', validateBody(loginSchema), login);

routes.use(authenticateUser);

routes.get('/user', viewProfile);
routes.put('/user', validateBody(userSchema), editProfile);
routes.delete('/user', deleteAccount);

routes.post('/movie', validateBody(movieSchema), addMovie);
routes.get('/movie/:id', validateId(idSchema), findMovie);

module.exports = routes;