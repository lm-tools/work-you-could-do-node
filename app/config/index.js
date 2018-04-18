const all = {
  env: process.env.NODE_ENV || 'local',
  lmiBaseUri: 'https://api.lmiforall.org.uk/api/v1',
};
let env;
try {
  // eslint-disable-next-line global-require
  env = require(`./${all.env}.js`);
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(`no environment config for ${all.env}`);
  process.exit(1);
}

module.exports = Object.assign(
  all,
  env
);
