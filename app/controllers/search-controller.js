const express = require('express');
const router = new express.Router({ mergeParams: true });
const appContext = require('./../appContext');
const lmiClient = appContext.lmiClient;
const pages = require('../pages');
const breadcrumb = require('../middleware/breadcrumb');

/* GET home page. */
router.get('/new', breadcrumb(pages.SEARCH), (req, res) => {
  res.render('search', { accountId: req.params.accountId });
});

router.get('/', breadcrumb(pages.RESULTS), (req, res) => {
  const query = req.query.query;
  lmiClient.searchSoc(query)
    .then(searchResults => res.render('search', {
      accountId: req.params.accountId,
      query: req.query.query,
      searchResults,
    }));
});


module.exports = router;
