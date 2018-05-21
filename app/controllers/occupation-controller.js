const express = require('express');
const router = new express.Router({ mergeParams: true });
const { lmiClient } = require('./../appContext');
const pages = require('../pages');
const breadcrumb = require('../middleware/breadcrumb');

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const occupationViewModel = occupation => Object.assign(occupation, {
  tasks: occupation.tasks.split('; ').map(capitalizeFirstLetter),
});

router.get('/', breadcrumb(pages.OCCUPATION), (req, res) => {
  const accountId = req.params.accountId;
  const socCode = req.params.id;
  const fromQuery = req.query.fromQuery;
  lmiClient.getOccupation(socCode)
    .then(occupation => res.render('occupation', {
      occupation: occupationViewModel(occupation),
      fromQuery,
      accountId,
    }));
});

module.exports = router;
