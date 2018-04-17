const helper = require('./support/integrationSpecHelper');
const googleTagManagerHelper = helper.googleTagManagerHelper;
const searchPage = helper.searchPage;
const expect = require('chai').expect;

describe('Search', () => {
  const account = '109c346f-e64e-4bb5-9749-28dbbdfdfe55';

  before(() => searchPage.visit(account));

  it('should contain valid google tag manager data', () =>
    expect(googleTagManagerHelper.getUserVariable()).to.equal('set-me-in-controller')
  );
});

