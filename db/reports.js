const knex = require('../app/db').knex;

module.exports = {
  getOccupationsSavedCountJson: () =>
    knex('saved_occupations')
      .select('scrapbook_id as interventionRef')
      .count('scrapbook_id as totalOccupationsSaved')
      .groupBy('scrapbook_id'),
};
