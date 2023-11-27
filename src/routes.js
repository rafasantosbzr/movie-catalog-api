const express = require('express');
const { createAccount, login, viewProfile, editProfile, deleteAccount } = require('./controllers/user');
const validateBody = require('./middlewares/validateBodyRequest');
const userSchema = require('./joiSchemas/userSchema');
const loginSchema = require('./joiSchemas/loginSchema');
const authenticateUser = require('./middlewares/authentication');
const { addMovie, findMovie, editMovie, deleteMovie, listMovies } = require('./controllers/movie');
const validateId = require('./middlewares/validateParamsRequest');
const movieSchema = require('./joiSchemas/movieSchema');
const idSchema = require('./joiSchemas/idSchema');

const routes = express();

routes.post('/user', validateBody(userSchema), createAccount);
routes.post('/login', validateBody(loginSchema), login);

routes.use(authenticateUser);

routes.get('/user', viewProfile);
routes.put('/user', validateBody(userSchema), editProfile);
routes.delete('/user', deleteAccount);

routes.post('/movie', validateBody(movieSchema), addMovie);
routes.get('/movie/:id', validateId(idSchema), findMovie);
routes.put('/movie/:id', validateId(idSchema), validateBody(movieSchema), editMovie);
routes.delete('/movie/:id', validateId(idSchema), deleteMovie);
routes.get('/movies', listMovies);

module.exports = routes;