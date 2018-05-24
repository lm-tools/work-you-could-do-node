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
const breadcrumb = helper.breadcrumbBuilder;

const accountId = 4567189203921863;
const occupationId = 4235;
const fromQuery = 'Retail';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

describe('Occupation', () => {
  before(() => {
    this.getSocMock = mock.getSocMock();
    mock.payMock();
    mock.hoursMock();
    return occupationPage.visit(accountId, occupationId, fromQuery);
  });

  beforeEach(() => knexCleaner.clean(knex, { ignoreTables: ['knex_migrations'] }));

  after(() => mock.restore());

  it('should format tasks', () =>
    expect(occupationPage.getTasks())
      .to.eql(this.getSocMock.mockResponse(occupationId).tasks.split(';').map(
      i => capitalizeFirstLetter(i.replace(/\r?\n|\r/g, '').trim())
      )
    )
  );

  it('should format occupation-additional-titles', () =>
    expect(occupationPage.getAdditionalTitles())
      .to.eql(this.getSocMock.mockResponse(occupationId).add_titles.join('; '))
  );

  it('should display expected hours per week', () =>
    expect(occupationPage.getHoursPerWeek()).to.eql('Around 35 hours a week')
  );

  it('should display expected pay per week', () =>
    expect(occupationPage.getPayPerWeek()).to.eql('Around £1034 a week')
  );

  it('should display back link', () =>
    expect(occupationPage.getBackLink()).to.eql({
      href: routes.resultsUrl({ accountId, fromQuery }),
      text: 'Search results',
    })
  );

  it('should display help link', () =>
    expect(occupationPage.getHelpLink()).to.eql({
      href: routes.occupationHowTo({ accountId, socCode: occupationId, fromQuery }),
      text: 'How do I use this?',
    })
  );

  describe('breadcrumb', () =>
    it('should show breadcrumb on the details page', () => {
      const expectedTitle = this.getSocMock.mockResponse(occupationId).title;

      expect(occupationPage.getBreadcrumbs()).to.eql([
        breadcrumb('Introduction', routes.introductionUrl({ accountId })),
        breadcrumb('Search', routes.searchUrl({ accountId })),
        breadcrumb('Results', routes.resultsUrl({ accountId, fromQuery: 'Retail' })),
        breadcrumb(expectedTitle),
      ]);
    })
  );
})
;
