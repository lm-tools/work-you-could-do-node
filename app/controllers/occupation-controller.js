const express = require('express');
const router = new express.Router({ mergeParams: true });
const lmiClient = require('./../services/lmi-client-service');

/* GET home page. */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

router.get('/:id', (req, res) => {
  const accountId = req.params.accountId;
  const socCode = req.params.id;
  const fromQuery = req.query.fromQuery;
  Promise.all([
    lmiClient.getSoc(socCode),
    lmiClient.getHours(socCode),
    lmiClient.getPay(socCode),
  ])
    .then(([soc, hours, pay]) => {
      const occupation = soc;
      occupation.tasks = occupation.tasks.split(';').map(i =>
        capitalizeFirstLetter(i.replace(/\r?\n|\r/g, '').trim())
      );
      occupation.additionalTitles = occupation.add_titles.join('; ');
      occupation.weekHours = hours;
      occupation.weekPay = pay;
      return res.render('occupation', {
        occupation,
        fromQuery,
        accountId,
      });
    });
});

module.exports = router;
