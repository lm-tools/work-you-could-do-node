const config = require('./config');
const LmiClient = require('./services/lmi-client-service');
module.exports = { lmiClient: new LmiClient(config) };
