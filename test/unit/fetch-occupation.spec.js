const { describe, it } = require('mocha');
const expect = require('chai').expect;

const fetchOccupation = require('../../app/middleware/fetch-occupation.js');
const expectedSocObject = require('./test_data/fetch-occupation-data');

describe('fetchOccupation', () => {
  it('should get the occupation and populate the request object when id param is present', () => {
    const req = { params: { id: 1190 } };
    fetchOccupation(req, {}, () => {}).then(() =>
      expect(req.occupation).to.eql(expectedSocObject), {});
  });

  it('throws error when id param is missing', () => {
    const next = err => expect(err).to.be.eql({ status: 500 });
    fetchOccupation({ params: {} }, {}, next);
  });
});
