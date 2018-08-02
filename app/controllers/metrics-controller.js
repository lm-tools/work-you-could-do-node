const express = require('express');
const router = new express.Router({ mergeParams: true });
const report = require('./../../db/reports');
const json2csv = require('json2csv');

router.get('/:format?', (req, res) => {
  let resultPromise = report.getOccupationsSavedCountJson();
  if (req.params.format === 'csv') {
    resultPromise = resultPromise
      .then(results => json2csv({ data: results, fields: Object.keys(results[0]) }));
  }
  resultPromise
    .then(result => res.status(200).send(result))
    .catch(e => {
      throw new Error(e);
    });
});

module.exports = router;
