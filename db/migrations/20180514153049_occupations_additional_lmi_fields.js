exports.up = knex =>
  knex.schema.table('occupations', table => {
    table.string('title');
    table.text('description');
    table.text('tasks');
    table.text('qualifications');
    table.text('additionalTitles');
    table.integer('weekHours');
    table.integer('weekPay');
    table.date('created_at');
    table.date('updated_at');
  });

exports.down = knex =>
  knex.schema.table('occupations', table => {
    table.dropColumn('title');
    table.dropColumn('description');
    table.dropColumn('tasks');
    table.dropColumn('qualifications');
    table.dropColumn('additionalTitles');
    table.dropColumn('weekHours');
    table.dropColumn('weekPay');
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
