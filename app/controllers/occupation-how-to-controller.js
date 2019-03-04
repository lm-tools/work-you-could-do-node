const express = require('express');
const router = new express.Router({ mergeParams: true });
const { lmiClient } = require('./../appContext');
const fetchAndSetOccupation = require('../middleware/fetch-occupation');
const pages = require('../pages');
const breadcrumb = require('../middleware/breadcrumb');
const i18n = require('i18n');

const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);

const occupationViewModel = occupation => Object.assign(occupation, {
  tasks: occupation.tasks.split('; ').map(capitalizeFirstLetter),
});

/* eslint-disable no-underscore-dangle */
router.get('/:id', fetchAndSetOccupation, breadcrumb(pages.HOW_TO), (req, res) => {
  const accountId = req.params.accountId;
  const socCode = req.params.id;
  const fromQuery = req.query.fromQuery;
  lmiClient.getOccupation(socCode)
        .then(occupation => res.render('occupation-how-to', {
          content: {
            'week-hours': i18n.__('occupation-how-to.time.hours', occupation.weekHours),
            'week-pay': i18n.__('occupation-how-to.time.pay', occupation.weekPay),
          },
          occupation: occupationViewModel(occupation),
          fromQuery,
          accountId,
        }));
});

module.exports = router;
