/* eslint-disable no-underscore-dangle */
const pages = require('../pages');
const Routes = require('../routes');
const routes = new Routes('');

const pageToBreadcrumbTrail = {
  [pages.SAVED_ROLES]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.SEARCH]: [pages.INTRODUCTION],
  [pages.RESULTS]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.OCCUPATION]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS],
  [pages.HOW_TO]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS, pages.OCCUPATION],
  [pages.NOT_FOUND]: [pages.INTRODUCTION],
};

const pageToBreadcrumb = {
  [pages.INTRODUCTION]: { title: 'Introduction', link: routes.introductionUrl },
  [pages.SEARCH]: { title: 'Search', link: routes.searchUrl },
  [pages.RESULTS]: { title: 'Results', link: routes.resultsUrl },
  [pages.OCCUPATION]: { link: routes.occupationUrl },
  [pages.HOW_TO]: { title: 'How-to', link: routes.occupationHowTo },
  [pages.SAVED_ROLES]: { title: 'Saved roles', link: routes.savedRoles },
  [pages.NOT_FOUND]: { title: 'Page not found', link: routes.introductionUrl },
};

const cloneBreadcrumb = crumb => Object.assign({}, crumb);

const isLastElement = (i, arr) => i === arr.length - 1;

module.exports = (currentPage) =>
  (req, res, next) => {
    const accountId = req.params && req.params.accountId;
    const fromQuery = req.query && req.query.fromQuery;
    const socCode = req.params && req.params.id;
    const occupationTitle = req.occupation && req.occupation.title;

    const breadcrumbTrail = pageToBreadcrumbTrail[currentPage];
    let trail = [];

    if (breadcrumbTrail) {
      trail = [...breadcrumbTrail, currentPage]
        .map(page => cloneBreadcrumb(pageToBreadcrumb[page]))
        .map((crumb, index, arr) => {
          // 'this' needs to be routes object not crumb object to get basePath
          const link = crumb.link.call(routes, { accountId, fromQuery, socCode });
          const title = crumb.title || occupationTitle;

          return isLastElement(index, arr) ? { title } : { title, link };
        });
    }

    Object.assign(res.locals, { trail });
    next();
  };
