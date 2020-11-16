exports.up = function (knex) {
  return knex.schema.createTable("hospedes", function (table) {
    table.string("email").notNullable().unique();
    table.string("name").notNullable();
    table.string("cpf").notNullable().unique().primary;
    table.string("cidade").notNullable();
    table.string("estado").notNullable();
    table.string("senha").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("hospedes");
};
