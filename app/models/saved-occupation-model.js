const db = require('./../db');

const DbModel = db.Model.extend(
  {
    tableName: 'saved_occupations',
    hasTimestamps: true,
  },
  {
    findByAccountId(accountId) {
      return this.query({ where: { accountId } })
        .fetchAll()
        .then(queryResult => queryResult && queryResult.serialize());
    },
  }
);

DbModel.saveOrUpdate = saveOccupation =>
  new DbModel(saveOccupation)
    .save()
    .catch(e => {
      // swallow duplicate key error for roles saved more than once
      if (e.constraint !== 'saved_occupations_accountid_soc_unique') {
        throw e;
      }
    });

module.exports = DbModel;
