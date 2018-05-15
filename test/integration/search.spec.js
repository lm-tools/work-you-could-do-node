const helper = require('./support/integrationSpecHelper');
const nock = require('nock');
const googleTagManagerHelper = helper.googleTagManagerHelper;
const searchPage = helper.searchPage;
const expect = helper.expect;
const before = helper.before;
const after = helper.after;
const it = helper.it;
const describe = helper.describe;
const routes = helper.routes;

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
      this.mockSearchQuery = 'MockedRetail';
      this.mockedResponse = [
        { title: 'job title 1', description: 'a job description', soc: 1234 },
        { title: 'job title 2', description: 'another job description', soc: 1234 },
      ];
      if (!nock.isActive()) {
        nock.activate();
      }
      nock('https://api.lmiforall.org.uk', { allowUnmocked: true })
        .get('/api/v1/soc/search')
        .query({
          q: this.mockSearchQuery,
        })
        .reply(200, this.mockedResponse);
      return searchPage.visit(account, 'MockedRetail');
    });
    after(() => nock.restore());

    it('should not display search examples', () =>
      expect(searchPage.getText()).not.to.contain('e.g.')
    );

    it('should display search results, descriptions and links', () =>
      expect(searchPage.getResults()).to.eql(this.mockedResponse.map(r => ({
        title: r.title,
        description: r.description,
        href: routes.occupationUrl(account, r.soc, this.mockSearchQuery),
      })))
    );
  });
});

