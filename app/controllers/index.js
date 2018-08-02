const cookie = require('./cookie-controller.js');
const healthCheck = require('./health-check-controller');
const index = require('./index-controller');
const introduction = require('./introduction-controller');
const metrics = require('./metrics-controller');
const occupation = require('./occupation-controller');
const search = require('./search-controller');

module.exports = {
  cookie,
  healthCheck,
  index,
  introduction,
  metrics,
  occupation,
  search,
};
