const helper = require('./support/integrationSpecHelper');
const googleTagManagerHelper = helper.googleTagManagerHelper;
const errorPage = helper.errorPage;
const expect = require('chai').expect;
const breadcrumb = helper.breadcrumbBuilder;
const routes = helper.routes;

describe('Error handling', () => {
  describe('not found', () => {
    before(() =>
      helper.browser.visit('/path-that-not-exists').catch(() => {
      })
    );

    it('returns 404 code', () =>
      expect(helper.browser.response.status).to.equal(404)
    );

    it('has empty error details', () =>
      expect(errorPage.getErrorDetails()).to.equal('')
    );
    it('displays "Page not found" message', () =>
      expect(errorPage.getMessage()).to.equal('Page not found')
    );

    it('should contain valid google tag manager data', () =>
      expect(googleTagManagerHelper.getUserVariable()).to.exists
    );

    describe('breadcrumb without account ID', () => {
      before(() =>
        helper.browser.visit('/path-that-not-exists').catch(() => {
        })
      );

      it('should show breadcrumb on the page', () => {
        expect(errorPage.getBreadcrumbs()).to.eql([
          breadcrumb('Introduction', routes.entrypointUrl()),
          breadcrumb('Page not found'),
        ]);
      });
    });
  });
});
