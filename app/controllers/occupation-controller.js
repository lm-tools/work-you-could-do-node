const express = require('express');
const router = new express.Router({ mergeParams: true });
const { lmiClient } = require('./../appContext');
const SavedOccupation = require('./../models/saved-occupation-model');

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const occupationViewModel = occupation => Object.assign(occupation, {
  tasks: occupation.tasks.split('; ').map(capitalizeFirstLetter),
});

const renderOccupation = ({ res, req, occupation, savedOccupation = false }) => {
  const accountId = req.params.accountId;
  const fromQuery = req.query.fromQuery;
  res.render('occupation', {
    occupation: occupationViewModel(occupation),
    fromQuery,
    accountId,
    savedOccupation,
  });
};

/* GET occupation page. */
router.get('/:id', (req, res) => {
  const socCode = req.params.id;
  lmiClient.getOccupation(socCode)
    .then(occupation =>
      renderOccupation({ res, req, occupation }));
});

/* POST save occupation page. */
router.post('/:id', (req, res, next) => {
  const accountId = req.params.accountId;
  const socCode = req.params.id;
  let occupation;
  lmiClient.getOccupation(socCode)
    .then(occupationResponse => {
      if (!occupationResponse) {
        const e = new Error('error saving occupation. Occupation must exist!');
        e.status = 400;
        next(e);
        throw e;
      }
      occupation = occupationResponse;
    })
    .then(() => SavedOccupation.saveOrUpdate({ accountId, soc: socCode }))
    .then(() => renderOccupation({ res, req, occupation, savedOccupation: true }));
});

module.exports = router;
