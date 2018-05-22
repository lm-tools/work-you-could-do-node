require('./specHelper');
const LmiClientService = require('./../app/services/lmi-client-service');
const config = require('./../app/config');
const lmiClient = new LmiClientService(config);
const mock = require('./common/mocks');
const knexCleaner = require('knex-cleaner');
const knex = require('../app/db').knex;

describe('lmi service', () => {
  describe('generateHmacHeaders', () =>
    it('creates hmac headers for date as per ruby implementation', () =>
      expect(lmiClient.generateHmacHeaders(new Date(2001, 1, 3, 4, 5, 6))).to.eql({
        Authorization:
        'Signature keyId="U9CMRK1DQSa5iX4N5wXrLQ==",' +
        'algorithm="hmac-sha1",' +
        'signature="+rPRuCvReIAeyEgkoZ+r2MI7u1c="',
        Date: 'Sat, 03 Feb 2001 04:05:06 GMT',
      })
    )
  );
  describe('lmi', () => {
    before(() => {
      mock.getSocMock();
      mock.hoursMock();
      mock.payMock();
      this.mockSearchResponse = mock.searchMock().mockResponse;
    });
    describe('searchSoc', () => {
      it('should return soc array', () =>
        lmiClient.searchSoc('check_authentication')
          .then(searchResults => expect(searchResults).to.eql(this.mockSearchResponse))
      );
    });
    describe('getWeekHours', () => {
      it('should return weekHours', () =>
        lmiClient.getWeekHours('4135')
          .then(r => expect(r).to.eql(15))
      );
    });
    describe('getWeekPay', () => {
      it('should return weekPay', () =>
        lmiClient.getWeekPay('4135')
          .then(r => expect(r).to.eql(934))
      );
    });
    describe('getOccupation', () => {
      beforeEach(() => knexCleaner.clean(knex, { ignoreTables: ['knex_migrations'] }));
      it('should return the lmi result the first time', () =>
        lmiClient.getOccupation('4136')
          .then(r => {
            expect(r.title).to.eql('Library clerks and assistants - 4136');
            expect(r.weekHours).to.eql(16);
            expect(r.weekPay).to.eql(935);
          })
      );
      it('should return the cached result the second time', () =>
        lmiClient.getOccupation('4135')
          .then(() => knex('occupations').where('soc', '=', 4135).update({ title: 'blah' }))
          .then(() => lmiClient.getOccupation('4135'))
          .then(r => expect(r.title).to.eql('blah'))
      );
    });
  });
});
