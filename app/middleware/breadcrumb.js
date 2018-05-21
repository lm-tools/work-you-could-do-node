/* eslint-disable no-underscore-dangle */
const pages = require('../pages');

const replacements = {
  accountId: ':accountId',
  socCode: ':socCode',
  fromQuery: ':fromQuery',
  occupationTitle: ':occupationTitle',
};

const pageToBreadcrumbTrail = {
  [pages.SAVED_ROLES]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.SEARCH]: [pages.INTRODUCTION],
  [pages.RESULTS]: [pages.INTRODUCTION, pages.SEARCH],
  [pages.OCCUPATION]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS],
  [pages.HOW_TO]: [pages.INTRODUCTION, pages.SEARCH, pages.RESULTS, pages.OCCUPATION],
  [pages.NOT_FOUND]: [pages.INTRODUCTION],
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

const removeLink = (crumb) => {
  const clonedCrumb = Object.assign({}, crumb);
  delete clonedCrumb.link;
  return clonedCrumb;
};

module.exports = (currentPage) =>
  (req, res, next) => {
    const breadcrumbs = [];
    const breadcrumbTrail = pageToBreadcrumbTrail[currentPage];

    if (breadcrumbTrail) {
      breadcrumbTrail.forEach(page => breadcrumbs.push(Object.assign({}, pageToBreadcrumb[page])));

      breadcrumbs.push(Object.assign({}, pageToBreadcrumb[currentPage]));
    }

    const accountId = req.params && req.params.accountId;
    if (accountId !== undefined) {
      breadcrumbs.map(crumb =>
        Object.assign(crumb, { link: crumb.link.replace(replacements.accountId, accountId) })
      );
    }

    const fromQuery = req.query && req.query.fromQuery;
    if (fromQuery !== undefined) {
      breadcrumbs.map(crumb =>
        Object.assign(crumb, { link: crumb.link.replace(replacements.fromQuery, fromQuery) })
      );
    }

    const socCode = req.params && req.params.id;
    if (socCode !== undefined) {
      breadcrumbs.map(crumb =>
        Object.assign(crumb, { link: crumb.link.replace(replacements.socCode, socCode) })
      );
    }

    const title = req.occupation && req.occupation.title;
    if (title !== undefined) {
      breadcrumbs.map(crumb =>
        Object.assign(crumb, { title: crumb.title.replace(replacements.occupationTitle, title) })
      );
    }

    if (breadcrumbs.length !== 0) {
      breadcrumbs[breadcrumbs.length - 1] = removeLink(breadcrumbs[breadcrumbs.length - 1]);
    }

    Object.assign(res.locals, { trail: breadcrumbs });
    next();
  };
