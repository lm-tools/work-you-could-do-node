require('./specHelper');
const lmiClientService = require('./../app/services/lmi-client-service');

describe('lmi service', () => {
  describe('generateHmacHeaders', () =>
    it('creates hmac headers for date as per ruby implementation', () =>
      expect(lmiClientService.generateHmacHeaders(new Date(2001, 1, 3, 4, 5, 6))).to.eql({
        Authorization:
          'Signature keyId="U9CMRK1DQSa5iX4N5wXrLQ==",' +
          'algorithm="hmac-sha1",' +
          'signature="+rPRuCvReIAeyEgkoZ+r2MI7u1c="',
        Date: 'Sat, 03 Feb 2001 04:05:06 GMT',
      })
    )
  );
  describe('socSearch', () => {
    it('returns 200', () =>
      lmiClientService.socSearch('check_authentication')
        .then(r => expect(r.statusCode).to.eql(200))
    );
  });
  describe('hoursLookup', () => {
    it('returns 200', () => {
      lmiClientService.hoursLookup('4135')
        .then(r => expect(r.statusCode).to.eql(200));
    });
  });
  describe('payLookup', () => {
    it('returns 200', () => {
      lmiClientService.payLookup('4135')
        .then(r => expect(r.statusCode).to.eql(200));
    });
  });
  describe('socCodeLookup', () => {
    it('returns 200', () => {
      lmiClientService.socCodeLookup('4135')
        .then(r => expect(r.statusCode).to.eql(200));
    });
  });
});
