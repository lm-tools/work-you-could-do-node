const express = require('express');
const router = new express.Router({ mergeParams: true });
const { lmiClient } = require('./../appContext');

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const occupationViewModel = occupation => Object.assign(occupation, {
  tasks: occupation.tasks.split('; ').map(capitalizeFirstLetter),
});

const getOccupation = req => {
  const socCode = req.params.id;
  return lmiClient.getOccupation(socCode);
};

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
router.get('/:id', (req, res) =>
  getOccupation(req)
    .then(occupation =>
      renderOccupation({ res, req, occupation })
    ));

/* POST save occupation page. */
router.post('/:id', (req, res) =>
  getOccupation(req)
    .then(occupation =>
      renderOccupation({ res, req, occupation, savedOccupation: true })
    ));

module.exports = router;
