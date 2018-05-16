const lmiClient = require('./../services/lmi-client-service');

module.exports = (req, res, next) => {
  const socCode = req.params.id;

  if (socCode === undefined) {
    const error = new Error('msg');
    error.status = 500;
    return next(error);
  }

  return lmiClient.getSoc(socCode).then(occupation => {
    // eslint-disable-next-line no-param-reassign
    req.occupation = occupation;
    next();
  });
};
