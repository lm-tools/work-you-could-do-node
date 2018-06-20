const config = require('./config');
const LmiClient = require('./services/lmi-client-service');
const Routes = require('./routes');

const basePath = process.env.EXPRESS_BASE_PATH || '';

module.exports = {
  lmiClient: new LmiClient(config),
  routes: new Routes(basePath),
  basePath,
};
