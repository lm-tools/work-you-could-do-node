const pages = require('../../app/pages');
const breadcrumb = require('../../app/middleware/breadcrumb');

const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('breadcrumb', () => {
  const accountId = '0b91f2d0-8af8-40f1-81d6-1e45cd4fe3f5';

  it('should set empty breadcrumb array if no page given',
    () => {
      const res = { locals: {} };
      const returnedFunction = breadcrumb();
      returnedFunction({}, res, () => {
      });
      expect(res.locals.trail).to.eql([]);
    }
  );

  it('should set empty breadcrumb array if no page matches',
    () => {
      const res = { locals: {} };

      const returnedFunction = breadcrumb(Symbol('noMatch'));
      returnedFunction({}, res, () => {
      });

      expect(res.locals.trail).to.eql([]);
    }
  );

  it('should set breadcrumb information adding the account id', () => {
    const req = { params: { accountId } };
    const res = { locals: {} };

    const returnedFunction = breadcrumb(pages.SAVED_ROLES);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Saved roles' },
    ]);
  });

  it('should set breadcrumb information adding the search query and occupation title', () => {
    const req = {
      params: { accountId, id: 1190 },
      query: { fromQuery: 'Retail' },
      occupation: { title: 'Managers and directors in retail and wholesale' },
    };
    const res = { locals: {} };

    const returnedFunction = breadcrumb(pages.OCCUPATION);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Search', link: `/${accountId}/search/new` },
      { title: 'Results', link: `/${accountId}/search?query=Retail` },
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

    const returnedFunction = breadcrumb(pages.HOW_TO);
    returnedFunction(req, res, () => {
    });

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

  it('should set breadcrumb information for the not found page', () => {
    const req = { params: { accountId } };
    const res = { locals: {} };

    const returnedFunction = breadcrumb(pages.NOT_FOUND);
    returnedFunction(req, res, () => {
    });

    expect(res.locals.trail).to.eql([
      { title: 'Introduction', link: `/${accountId}/introduction` },
      { title: 'Page not found' },
    ]);
  });
})
;
