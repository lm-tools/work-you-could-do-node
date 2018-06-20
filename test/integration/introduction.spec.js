const helper = require('./support/integrationSpecHelper');
const googleTagManagerHelper = helper.googleTagManagerHelper;
const introductionPage = helper.introductionPage;
const expect = require('chai').expect;

describe('Introduction', () => {
  const account = '6a9c346f-e64e-4bb5-9749-28dbbdfdfe55';

  before(() => introductionPage.visit(account));

  it('should contain valid google tag manager data', () =>
    expect(googleTagManagerHelper.getUserVariable()).to.equal('set-me-in-controller')
  );

  it('should render introduction information', () =>
    expect(introductionPage.getText())
      .to.include('Use this tool to help your work search and discover')
  );

  it('should link to search page', () =>
    introductionPage.clickNext().then(() =>
      expect(introductionPage.browserPath()).to.match(new RegExp(`${account}/search/new`))
    )
  );

  describe('breadcrumb', () => {
    before(() => introductionPage.visit(account));

    it('should not show breadcrumb on the homepage', () =>
      expect(introductionPage.getBreadcrumbs()).to.eql([])
    );
  });
});

