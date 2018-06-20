exports.up = knex => knex.schema.createTable('occupations', table => {
  table.increments();
  table.integer('soc');
  table.index('soc');
});

exports.down = knex => knex.schema.dropTable('occupations');
