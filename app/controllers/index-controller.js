const express = require('express');
const router = new express.Router({ mergeParams: true });
const uuid = require('uuid');

/* GET home page. */
router.get('/', (req, res) => {
  const accountId = req.query.id;
  if (accountId) {
    res.redirect(`${req.app.locals.basePath}/${accountId}/introduction`);
  } else {
    res.redirect(`${req.app.locals.basePath}/${uuid.v4()}/introduction`);
  }
});

module.exports = router;
