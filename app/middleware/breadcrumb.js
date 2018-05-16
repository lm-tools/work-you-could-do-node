/* eslint-disable no-underscore-dangle */

const Pages = Object.freeze({
  INTRODUCTION: Symbol('introduction'),
  SEARCH: Symbol('search'),
  RESULTS: Symbol('results'),
  OCCUPATION: Symbol('occupations'),
  HOW_TO: Symbol('howTo'),
  SAVED_ROLES: Symbol('savedRoles'),
});

const replacements = {
  accountId: ':accountId',
  socCode: ':socCode',
  fromQuery: ':fromQuery',
  occupationTitle: ':occupationTitle',
};

const urlToPageAndBreadcrumbTrail = [
  {
    urlRegex: /\/?[A-Fa-f\d-]+$/, pageName: Pages.SAVED_ROLES,
    breadcrumbTrail: [Pages.INTRODUCTION, Pages.SEARCH],
  },
  {
    urlRegex: /\/search(?:\/new)?(?!\?query=)/, pageName: Pages.SEARCH,
    breadcrumbTrail: [Pages.INTRODUCTION],
  },
  {
    urlRegex: /\/search\?query=/, pageName: Pages.RESULTS,
    breadcrumbTrail: [Pages.INTRODUCTION, Pages.SEARCH],
  },
  {
    urlRegex: /\/occupation\/[0-9]+/, pageName: Pages.OCCUPATION,
    breadcrumbTrail: [Pages.INTRODUCTION, Pages.SEARCH, Pages.RESULTS],
  },
  {
    urlRegex: /\/occupation_how_to\/[0-9]+/, pageName: Pages.HOW_TO,
    breadcrumbTrail: [Pages.INTRODUCTION, Pages.SEARCH, Pages.RESULTS, Pages.OCCUPATION],
  },
];

const pageToBreadcrumb = {
  [Pages.INTRODUCTION]: { title: 'Introduction', link: `/${replacements.accountId}/introduction` },
  [Pages.SEARCH]: { title: 'Search', link: `/${replacements.accountId}/search/new` },
  [Pages.RESULTS]: {
    title: 'Results',
    link: `/${replacements.accountId}/search?query=${replacements.fromQuery}`,
  },
  [Pages.OCCUPATION]: {
    title: replacements.occupationTitle,
    link: `/${replacements.accountId}/occupations/${replacements.socCode}` +
      `?fromQuery=${replacements.fromQuery}`,
  },
  [Pages.HOW_TO]: {
    title: 'How-to',
    link: `/${replacements.accountId}/occupation_how_to/${replacements.socCode}
      ?fromQuery=${replacements.fromQuery}`,
  },
  [Pages.SAVED_ROLES]: { title: 'Saved roles', link: '/:accountId' },
};

const removeLink = (crumb) => {
  const clonedCrumb = Object.assign({}, crumb);
  delete clonedCrumb.link;
  return clonedCrumb;
};

module.exports = (req, res, next) => {
  const url = req.originalUrl;
  const accountId = req.params && req.params.accountId;
  const socCode = req.params && req.params.id;
  const fromQuery = req.query && req.query.fromQuery;
  const title = req.occupation && req.occupation.title;

  const breadcrumbs = [];
  const pageAndBreadcrumbTrail = urlToPageAndBreadcrumbTrail.find(o => url.match(o.urlRegex));

  if (pageAndBreadcrumbTrail) {
    const currentPage = pageAndBreadcrumbTrail.pageName;
    const breadcrumbTrail = pageAndBreadcrumbTrail.breadcrumbTrail;

    breadcrumbTrail.forEach(page => breadcrumbs.push(Object.assign({}, pageToBreadcrumb[page])));

    breadcrumbs.push(Object.assign({}, pageToBreadcrumb[currentPage]));
  }

  if (accountId !== undefined) {
    breadcrumbs.map(crumb =>
      Object.assign(crumb, { link: crumb.link.replace(replacements.accountId, accountId) })
    );
  }

  if (fromQuery !== undefined) {
    breadcrumbs.map(crumb =>
      Object.assign(crumb, { link: crumb.link.replace(replacements.fromQuery, fromQuery) })
    );
  }

  if (socCode !== undefined) {
    breadcrumbs.map(crumb =>
      Object.assign(crumb, { link: crumb.link.replace(replacements.socCode, socCode) })
    );
  }

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
}
;
