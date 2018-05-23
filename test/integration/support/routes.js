class Routes {
  constructor(basePath) {
    this.basePath = basePath;
  }

  entrypointUrl(query = '') {
    return `${this.basePath}${query}`;
  }

  introductionUrl(accountId) {
    return accountId ? `${this.basePath}/${accountId}/introduction`
      : `${this.basePath}/introduction`;
  }

  cookieUrl() {
    return `${this.basePath}/cookie`;
  }

  searchUrl(accountId, query) {
    let path = '';

    if (query === undefined) {
      path = '/new';
    }

    if (query) {
      path = `?query=${encodeURIComponent(query)}`;
    }

    return `${this.basePath}/${accountId}/search${path}`;
  }

  occupationUrl(accountId, socCode, fromQuery) {
    const fromQ = `fromQuery=${encodeURIComponent(fromQuery)}`;
    return `${this.basePath}/${accountId}/occupation/${socCode}?${fromQ}`;
  }

  occupationHowTo(accountId, socCode, fromQuery) {
    return `${this.basePath}/${accountId}/occupationHowTo/${socCode}?fromQuery=${fromQuery}`;
  }
}

module.exports = Routes;
