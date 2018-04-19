const express = require('express');
const router = new express.Router({ mergeParams: true });
const lmiClient = require('./../services/lmi-client-service');

/* GET home page. */
router.get('/new', (req, res) => {
  res.render('search', { accountId: req.params.accountId });
});

router.get('/', (req, res) => {
  const query = req.query.query;
  lmiClient.socSearch(query)
    .then((response) => res.render('search', {
      accountId: req.params.accountId,
      query: req.query.query,
      searchResults: JSON.parse(response.body),
    }));
});


module.exports = router;
