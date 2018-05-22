
exports.up = knex => knex.schema.createTable('saved_occupations', table => {
  table.increments();
  table.integer('soc');
  table.string('accountId', 36);
  table.unique(['accountId', 'soc']);
  table.index(['accountId', 'soc']);
  table.date('created_at');
  table.date('updated_at');
});

exports.down = knex => knex.schema.table(
  'saved_occupations',
  knex.schema.dropTable('saved_occupations')
);
