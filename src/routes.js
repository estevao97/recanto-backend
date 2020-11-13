const express = require('express');
const hospedesController = require('./controllers/hospedesController');
const connection = require('./database/connection');

const routes = express.Router();
routes.get('/cadastro', hospedesController.index);
routes.post('/cadastro', hospedesController.create);

module.exports = routes;
