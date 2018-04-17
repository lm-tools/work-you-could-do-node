const express = require('express');
const router = new express.Router({ mergeParams: true });

/* GET home page. */
router.get('/', (req, res) => {
  res.render('introduction', { accountId: req.params.accountId });
});

module.exports = router;
