const helper = require('./../integration/support/integrationSpecHelper');
const occupationPage = helper.occupationPage;
const introductionPage = helper.introductionPage;
const searchPage = helper.searchPage;
const mock = helper.mock;
const expect = helper.expect;
const describe = helper.describe;
const it = helper.it;

const accountId = '109c346f-e64e-4bb5-9749-28dbbdfdfe55';
const occupationId = 4235;
const fromQuery = 'Retail';

describe('Breadcrumb Links', () => {
  before(() => mock.mockAll());

  beforeEach(() => occupationPage.visit(accountId, occupationId, fromQuery));

  after(() => {
    mock.restore();
    mock.cleanAll();
  });

  it('introduction breadcrumb link works', () => {
    const crumb = occupationPage.getBreadcrumbs().find(c => c.text === 'Introduction');

    return occupationPage.clickBreadcrumb(crumb).then(() => {
      expect(introductionPage.getTitle()).to.be.eql('How to use this tool');
    });
  });

  it('search breadcrumb link works', () => {
    const crumb = occupationPage.getBreadcrumbs().find(c => c.text === 'Search');

    return occupationPage.clickBreadcrumb(crumb).then(() => {
      expect(searchPage.getTitle()).to.be.eql('Find information on roles');
    });
  });

  it('results breadcrumb link works', () => {
    const crumb = occupationPage.getBreadcrumbs().find(c => c.text === 'Results');

    return occupationPage.clickBreadcrumb(crumb).then(() => {
      expect(searchPage.getTitle()).to.be.eql('Find information on roles');
    });
  });
});
