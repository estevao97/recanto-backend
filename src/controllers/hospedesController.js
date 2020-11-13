const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(resquest, response) {
    const hospedes = await connection('hospedes').select('*');

    return response.json(hospedes);
  },

  async create(request, response) {
    const { name, email } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('hospedes').insert({
      id,
      name,
      email,
    });

    return response.json({ id });
  },
};
