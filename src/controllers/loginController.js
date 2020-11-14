const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const hospede = await connection("hospedes")
      .where("id", id)
      .select("name")
      .first();

    if (!hospede) {
      return response
        .status(400)
        .json({ error: "Hospede não encontrado com esse ID" });
    }

    return response.json(hospede);
  },
};
