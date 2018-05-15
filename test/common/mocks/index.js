/* eslint-disable no-console */
const nock = require('nock');
const lmiNock = () => {
  if (!nock.isActive()) {
    nock.activate();
  }
  return nock('https://api.lmiforall.org.uk', {
    allowUnmocked: false,
    reqheaders: {
      authorization: headerVal =>
        headerVal.includes('Signature keyId="')
          && headerVal.includes('",algorithm="hmac-sha1",signature="'),
      date: headerVal => !isNaN(Date.parse(headerVal)),
      host: 'api.lmiforall.org.uk',
    },
  })
    .log(console.log)
    .persist();
};

const getSocMock = require('./get-soc.mock')(lmiNock);
const searchMock = require('./search.mock')(lmiNock);
const hoursMock = require('./hours.mock')(lmiNock);
const payMock = require('./pay.mock')(lmiNock);

module.exports = {
  getSocMock,
  hoursMock,
  payMock,
  mockAll: () => {
    getSocMock();
    searchMock();
    hoursMock();
    payMock();
  },
  restore: () => {
    nock.restore();
  },
};
