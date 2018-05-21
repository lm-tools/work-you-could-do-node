const helper = require('./../integration/support/integrationSpecHelper');
const occupationPage = helper.occupationPage;
const mock = helper.mock;
const expect = helper.expect;
const describe = helper.describe;
const before = helper.before;
const after = helper.after;
const it = helper.it;
const routes = helper.routes;
const knexCleaner = helper.knexCleaner;
const knex = helper.knex;

const ACCOUNT_ID = 4567189203921863;
const OCCUPATION_ID = 4235;
const FROM_QUERY = 'Retail';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

describe('Occupation', () => {
  before(() => {
    this.getSocMock = mock.getSocMock();
    mock.payMock();
    mock.hoursMock();
    return occupationPage.visit(ACCOUNT_ID, OCCUPATION_ID, FROM_QUERY);
  });
  beforeEach(() => knexCleaner.clean(knex, { ignoreTables: ['knex_migrations'] }));
  after(() => mock.restore());
  it('should format tasks', () =>
    expect(occupationPage.getTasks())
      .to.eql(this.getSocMock.mockResponse(OCCUPATION_ID).tasks.split(';').map(
        i => capitalizeFirstLetter(i.replace(/\r?\n|\r/g, '').trim())
      )
    )
  );
  it('should format occupation-additional-titles', () =>
    expect(occupationPage.getAdditionalTitles())
      .to.eql(this.getSocMock.mockResponse(OCCUPATION_ID).add_titles.join('; '))
  );
  it('should display expected hours per week', () =>
    expect(occupationPage.getHoursPerWeek()).to.eql('Around 35 hours a week')
  );
  it('should display expected pay per week', () =>
    expect(occupationPage.getPayPerWeek()).to.eql('Around £1034 a week')
  );
  it('should display back link', () =>
    expect(occupationPage.getBackLink()).to.eql({
      href: routes.searchUrl(ACCOUNT_ID, FROM_QUERY),
      text: 'Search results',
    })
  );
  it('should display help link', () =>
    expect(occupationPage.getHelpLink()).to.eql({
      href: routes.occupationHowTo(ACCOUNT_ID, OCCUPATION_ID, FROM_QUERY),
      text: 'How do I use this?',
    })
  );
});
