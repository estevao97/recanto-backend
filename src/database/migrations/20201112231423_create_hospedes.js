exports.up = function(knex) {
  knex.schema.createTable('hospedes', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('hospedes');
};
