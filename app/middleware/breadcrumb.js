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
    link: `/${replacements.accountId}/occupations/${replacements.socCode}` +
    `?fromQuery=${replacements.fromQuery}`,
  },
  [pages.HOW_TO]: {
    title: 'How-to',
    link: `/${replacements.accountId}/occupation_how_to/${replacements.socCode}
      ?fromQuery=${replacements.fromQuery}`,
  },
  [pages.SAVED_ROLES]: { title: 'Saved roles', link: '/:accountId' },
  [pages.NOT_FOUND]: { title: 'Page not found', link: '/${replacements.accountId}/introduction' },
};

const cloneBreadcrumb = crumb => Object.assign({}, crumb);

const removeLink = (crumb) => {
  const clonedCrumb = Object.assign({}, crumb);
  delete clonedCrumb.link;
  return clonedCrumb;
};

module.exports = (currentPage) =>
  (req, res, next) => {
    const trail = [];
    const breadcrumbTrail = pageToBreadcrumbTrail[currentPage];

    if (breadcrumbTrail) {
      breadcrumbTrail.forEach(page => trail.push(cloneBreadcrumb(pageToBreadcrumb[page])));

      trail.push(cloneBreadcrumb(pageToBreadcrumb[currentPage]));
    }

    const accountId = req.params && req.params.accountId;
    const fromQuery = req.query && req.query.fromQuery;
    const socCode = req.params && req.params.id;
    const occupationTitle = req.occupation && req.occupation.title;

    trail.forEach(crumb => {
      let link = crumb.link;
      let title = crumb.title;

      if (accountId) {
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

      Object.assign(crumb, { title, link });
    });

    if (trail.length !== 0) {
      const lastCrumb = trail.length - 1;
      trail[lastCrumb] = removeLink(trail[lastCrumb]);
    }

    Object.assign(res.locals, { trail });
    next();
  };
