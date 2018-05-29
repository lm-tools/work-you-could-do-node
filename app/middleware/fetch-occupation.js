const { lmiClient } = require('./../appContext');

module.exports = (req, res, next) => {
  const socCode = req.params.id;

  if (!socCode) {
    const error = new Error('msg');
    error.status = 500;
    return next(error);
  }

  return lmiClient.getOccupation(socCode).then(occupation => {
    // eslint-disable-next-line no-param-reassign
    req.occupation = occupation;
    next();
  });
};
