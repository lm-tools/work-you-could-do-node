const uuid = require('uuid');
const helper = require('./support/integrationSpecHelper');
const browser = helper.browser;
const introductionPage = helper.introductionPage;
const { expect } = require('chai');
const routes = helper.routes;

describe('Entrypoints', () => {
  const accountId = uuid.v4();
  const uuidRegEx = '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}';

  const anonymousEntryPointRegEx = `${uuidRegEx}/introduction`;
  const accountEntryPointRegEx = `/${accountId}/introduction`;

  it('should see the entry page with a generated accountId if entry from root path', () =>
    browser.visit(routes.entrypointUrl())
      .then(() => expect(introductionPage.browserPath())
        .to.match(new RegExp(anonymousEntryPointRegEx)))
  );

  it('should see the entry page with referenced accountId', () =>
    browser.visit(routes.entrypointUrl(accountId))
      .then(() =>
        expect(introductionPage.browserPath())
          .to.match(new RegExp(accountEntryPointRegEx))
      )
  );
});
