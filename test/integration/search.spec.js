const helper = require('./support/integrationSpecHelper');
const nock = require('nock');
const googleTagManagerHelper = helper.googleTagManagerHelper;
const searchPage = helper.searchPage;
const expect = require('chai').expect;

describe('Search', () => {
  const account = '109c346f-e64e-4bb5-9749-28dbbdfdfe55';

  describe('no results', () => {
    before(() => searchPage.visit(account));

    it('should contain valid google tag manager data', () =>
      expect(googleTagManagerHelper.getUserVariable()).to.equal('set-me-in-controller')
    );

    it('should display search examples', () =>
      expect(searchPage.getText()).to.contain('e.g.')
    );
  });

  describe('results', () => {
    before(() => {
      nock('https://api.lmiforall.org.uk', { allowUnmocked: true })
        .get('/api/v1/soc/search')
        .query({
          q: 'MockedRetail',
        })
        .reply(200, [
          { title: 'job title 1', description: 'a job description' },
          { title: 'job title 2', description: 'another job description' },
        ]);
      return searchPage.visit(account, 'MockedRetail');
    });

    it('should not display search examples', () =>
      expect(searchPage.getText()).not.to.contain('e.g.')
    );

    it('should display all search results', () => {
      expect(searchPage.getText()).to.contain('job title 1');
      expect(searchPage.getText()).to.contain('job title 2');
    });
  });
});

