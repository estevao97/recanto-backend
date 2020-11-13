const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.post('/cadastro', (request, response) => {
  const { name, email } = request.body;

  const id = crypto.randomBytes(2).toString('HEX');
  return response.json();
});

module.exports = routes;
