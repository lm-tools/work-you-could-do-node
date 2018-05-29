const express = require('express');
const router = new express.Router({ mergeParams: true });
const pages = require('../pages');
const breadcrumb = require('../middleware/breadcrumb');

/* GET home page. */
router.get('/', breadcrumb(pages.INTRODUCTION), (req, res) => {
  res.render('introduction', { accountId: req.params.accountId });
});

module.exports = router;
