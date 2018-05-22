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
const SavedOccupations = require('./../../app/models/saved-occupation-model');

const ACCOUNT_ID = 'b7be5584-5d09-11e8-9c2d-fa7ae01bbebc';
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
  before(() => knexCleaner.clean(knex, { ignoreTables: ['knex_migrations'] }));
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
  describe('saved-occupations', () => {
    before(() => occupationPage.clickSave());
    it('should redirect to the occupation saved page', () => {
      expect(occupationPage.getSavedOccupationBoxTitle())
        .to.eql('Library clerks and assistants - 4235 saved');
      expect(occupationPage.getSavedOccupationBoxSavedRolesLink())
        .to.eql(routes.savedRoles(ACCOUNT_ID));
    });
    it('should add the occupations to the db', () =>
      occupationPage.visit(ACCOUNT_ID, 4236, FROM_QUERY)
        .then(() => occupationPage.clickSave())
        .then(() => SavedOccupations.findByAccountId(ACCOUNT_ID))
        .then(results => expect(results
          .map(r => ({ soc: r.soc, accountId: r.accountId })))
          .to.eql([
            {
              accountId: ACCOUNT_ID,
              soc: 4235,
            },
            {
              accountId: ACCOUNT_ID,
              soc: 4236,
            },
          ])
        )
    );
    it('should allow users to save the same role twice', () =>
      occupationPage.visit(ACCOUNT_ID, 4236, FROM_QUERY)
        .then(() => occupationPage.clickSave())
        .then(() =>
          expect(occupationPage.getSavedOccupationBoxTitle())
            .to.eql('Library clerks and assistants - 4236 saved')
        )
    );
  });
});
