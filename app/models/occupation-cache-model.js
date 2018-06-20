const db = require('./../db');

const dbModel = db.Model.extend(
  {
    tableName: 'occupations',
    hasTimestamps: true,
  },
  {
    findBySocId(soc) {
      return this.query({ where: { soc } })
        .fetch()
        .then(queryResult => queryResult && queryResult.serialize());
    },
  }
);
dbModel.columns = [
  'soc',
  'title',
  'description',
  'tasks',
  'qualifications',
  'additionalTitles',
  'weekHours',
  'weekPay'];

module.exports = dbModel;
