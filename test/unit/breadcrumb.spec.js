const breadcrumbModel = require('../../app/middleware/breadcrumb');

const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('breadcrumb', () => {
  const accountId = '21312213-1234124-3-123-12-321321';

  [
    {
      originalUrl: '/',
    },
    {
      originalUrl: `/${accountId}/introduction`,
      params: { accountId },
    },
  ].forEach(req => {
    it(`should have no breadcrumb information for the root page with url '${req.originalUrl}'`,
      () => {
        const res = { locals: {} };
        breadcrumbModel(req, res, () => {
        });
        expect(res.locals.trail).to.eql([]);
      });
  });

//  it('should display breadcrumbs for the not found page', () => {
//    expect(breadcrumbModel(`/${accountId}/page-is-not-here`)).to.eql([
//      { title: 'Introduction', link: `/${accountId}/introduction` },
//      { title: 'Page not found' },
//    ]);
//  });

  it('should have breadcrumb information for the saved roles page', () => {
    const req = {
      originalUrl: `/${accountId}`,
      params: { accountId },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Saved roles' },
    ]);
  });

  it('should have breadcrumb information for the new search page', () => {
    const req = {
      originalUrl: `/${accountId}/search/new`,
      params: { accountId },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search' },
    ]);
  });

  it('should have breadcrumb information for the search page without the "/new" suffix', () => {
    const req = {
      originalUrl: `/${accountId}/search`,
      params: { accountId },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search' },
    ]);
  });

  it('should have breadcrumb information for the results page', () => {
    const req = {
      originalUrl: `/${accountId}/search?query=Retail`,
      params: { accountId },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Results' },
    ]);
  });

  it('should have breadcrumb information for the occupations page', () => {
    const req = {
      originalUrl: `/${accountId}/occupation/1190?fromQuery=Retail`,
      params: { accountId, id: 1190 },
      query: { fromQuery: 'Retail' },
      occupation: { title: 'Managers and directors in retail and wholesale' },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Results', link: `/${accountId}/search?query=Retail` },
      { title: 'Managers and directors in retail and wholesale' },
    ]);
  });

  it('should have breadcrumb information for the occupations how to page', () => {
    const req = {
      originalUrl: `/${accountId}/occupation_how_to/1190?fromQuery=Retail`,
      params: { accountId, id: 1190 },
      query: { fromQuery: 'Retail' },
      occupation: { title: 'Managers and directors in retail and wholesale' },
    };
    const res = { locals: {} };

    breadcrumbModel(req, res, () => {});

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Results', link: `/${accountId}/search?query=Retail` },
      {
        title: 'Managers and directors in retail and wholesale',
        link: `/${accountId}/occupations/1190?fromQuery=Retail`,
      },
      { title: 'How-to' },
    ]);
  });
});
