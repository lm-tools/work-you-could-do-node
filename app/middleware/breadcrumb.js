/* eslint-disable no-underscore-dangle */
const pages = require('../pages');

const pageToBreadcrumbTrail = {
  [pages.SAVED_ROLES]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.SEARCH]: [pages.INTRODUCTION],
  [pages.RESULTS]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.OCCUPATION]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS],
  [pages.HOW_TO]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS, pages.OCCUPATION],
  [pages.NOT_FOUND]: [pages.INTRODUCTION],
};

const replacements = {
  accountId: ':accountId',
  socCode: ':socCode',
  fromQuery: ':fromQuery',
  occupationTitle: ':occupationTitle',
};

const pageToBreadcrumb = {
  [pages.INTRODUCTION]: { title: 'Introduction', link: `/${replacements.accountId}/introduction` },
  [pages.SEARCH]: { title: 'Search', link: `/${replacements.accountId}/search/new` },
  [pages.RESULTS]: {
    title: 'Results',
    link: `/${replacements.accountId}/search?query=${replacements.fromQuery}`,
  },
  [pages.OCCUPATION]: {
    title: replacements.occupationTitle,
    link: `/${replacements.accountId}/occupation/${replacements.socCode}` +
    `?fromQuery=${replacements.fromQuery}`,
  },
  [pages.HOW_TO]: {
    title: 'How-to',
    link: `/${replacements.accountId}/occupation_how_to/${replacements.socCode}
      ?fromQuery=${replacements.fromQuery}`,
  },
  [pages.SAVED_ROLES]: { title: 'Saved roles', link: `/${replacements.accountId}` },
  [pages.NOT_FOUND]: { title: 'Page not found', link: `/${replacements.accountId}/introduction` },
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
          let link = crumb.link;
          let title = crumb.title;

          if (!accountId && currentPage === pages.NOT_FOUND) {
            link = link.replace(`/${replacements.accountId}`, '');
          } else {
            link = link.replace(replacements.accountId, accountId);
          }
          if (fromQuery) {
            link = link.replace(replacements.fromQuery, fromQuery);
          }
          if (socCode) {
            link = link.replace(replacements.socCode, socCode);
          }
          if (title) {
            title = title.replace(replacements.occupationTitle, occupationTitle);
          }

          return isLastElement(index, arr) ? { title } : { title, link };
        });
    }

    Object.assign(res.locals, { trail });
    next();
  };
