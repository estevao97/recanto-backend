const connection = require("../database/connection");

module.exports = {
  async index(resquest, response) {
    const hospedes = await connection("hospedes").select("*");
    const [count] = await connection("hospedes").count();

    response.header("X-Total-Count", count["count(*)"]);
    return response.json(hospedes);
  },

  async create(request, response) {
    const { name, email, cpf, cidade, estado, senha } = request.body;

    try {
      await connection("hospedes").insert({
        name,
        email,
        cpf,
        cidade,
        estado,
        senha,
      });
    } catch (err) {
      alertify.error("Teve um erro no cadastro, tente novamente.");
    }

    return response.json({ name });
  },
};
