const express = require('express');
const router = new express.Router({ mergeParams: true });

/* GET home page. */
router.get('/new', (req, res) => {
  res.render('search', { accountId: req.params.accountId });
});

router.get('/', (req, res) => {
  res.render('search', { accountId: req.params.accountId });
});


module.exports = router;
