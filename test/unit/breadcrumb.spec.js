const pages = require('../../app/pages');
const breadcrumbMiddleware = require('../../app/middleware/breadcrumb');

const { describe, it } = require('mocha');
const expect = require('chai').expect;
const { routes } = require('../../app/appContext');

describe('breadcrumb', () => {
  const accountId = '0b91f2d0-8af8-40f1-81d6-1e45cd4fe3f5';

  it('should set empty breadcrumb array if no page given', () => {
    const res = { locals: {} };
    const returnedFunction = breadcrumbMiddleware();
    returnedFunction({}, res, () => {
    });
    expect(res.locals.trail).to.eql([]);
  });

  it('should set empty breadcrumb array if no page matches',
    () => {
      const res = { locals: {} };

      const returnedFunction = breadcrumbMiddleware(Symbol('noMatch'));
      returnedFunction({}, res, () => {
      });

      expect(res.locals.trail).to.eql([]);
    }
  );

  it('should set breadcrumb information adding the account id', () => {
    const req = { params: { accountId } };
    const res = { locals: {} };

    const returnedFunction = breadcrumbMiddleware(pages.SAVED_ROLES);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: routes.introductionUrl({ accountId }) },
      { title: 'Search', link: routes.searchUrl({ accountId }) },
      { title: 'Saved roles' },
    ]);
  });

  it('should set breadcrumb information if account param is not populated for not found page',
    () => {
      const req = { params: {} };
      const res = { locals: {} };

      const returnedFunction = breadcrumbMiddleware(pages.NOT_FOUND);
      returnedFunction(req, res, () => {
      });

      expect(res.locals.trail).to.eql([
        { title: 'Introduction', link: routes.entrypointUrl() },
        { title: 'Page not found' },
      ]);
    });

  it('should set breadcrumb information for the not found page', () => {
    const req = { params: { accountId } };
    const res = { locals: {} };

    const returnedFunction = breadcrumbMiddleware(pages.NOT_FOUND);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: routes.entrypointUrl({ accountId }) },
      { title: 'Page not found' },
    ]);
  });

  it('should set breadcrumb information adding the search query and occupation title', () => {
    const req = {
      params: { accountId, id: 1190 },
      query: { fromQuery: 'Retail' },
      occupation: { title: 'Managers and directors in retail and wholesale' },
    };
    const res = { locals: {} };

    const returnedFunction = breadcrumbMiddleware(pages.OCCUPATION);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: routes.introductionUrl({ accountId }) },
      { title: 'Search', link: routes.searchUrl({ accountId }) },
      { title: 'Results', link: routes.resultsUrl({ accountId, fromQuery: 'Retail' }) },
      { title: 'Managers and directors in retail and wholesale' },
    ]);
  });

  it('should set breadcrumb information adding the soc code', () => {
    const req = {
      params: { accountId, id: 1190 },
      query: { fromQuery: 'Retail' },
      occupation: { title: 'Managers and directors in retail and wholesale' },
    };
    const res = { locals: {} };

    const returnedFunction = breadcrumbMiddleware(pages.HOW_TO);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: routes.introductionUrl({ accountId }) },
      { title: 'Search', link: routes.searchUrl({ accountId }) },
      { title: 'Results', link: routes.resultsUrl({ accountId, fromQuery: 'Retail' }) },
      {
        title: 'Managers and directors in retail and wholesale',
        link: routes.occupationUrl({ accountId, socCode: 1190, fromQuery: 'Retail' }),
      },
      { title: 'How-to' },
    ]);
  });
})
;
