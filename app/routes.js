class Routes {
  constructor(basePath) {
    this.basePath = basePath;
  }

  entrypointUrl({ accountId = '' } = {}) {
    return accountId ? `${this.basePath}?id=${accountId}` : this.basePath;
  }

  introductionUrl({ accountId = '' } = {}) {
    return accountId ? `${this.basePath}/${accountId}/introduction`
      : `${this.basePath}/introduction`;
  }

  savedRolesUrl({ accountId = '' } = {}) {
    return `${this.basePath}/${accountId}`;
  }

  cookieUrl() {
    return `${this.basePath}/cookie`;
  }

  searchUrl({ accountId = '' } = {}) {
    return `${this.basePath}/${accountId}/search/new`;
  }

  resultsUrl({ accountId = '', fromQuery = '' } = {}) {
    const path = fromQuery && `?query=${encodeURIComponent(fromQuery)}` || '';
    return `${this.basePath}/${accountId}/search${path}`;
  }

  occupationUrl({ accountId = '', socCode = '', fromQuery = '' } = {}) {
    const fromQ = `fromQuery=${encodeURIComponent(fromQuery)}`;
    return `${this.basePath}/${accountId}/occupation/${socCode}?${fromQ}`;
  }

  occupationHowToUrl({ accountId = '', socCode = '', fromQuery = '' } = {}) {
    return `${this.basePath}/${accountId}/occupationHowTo/${socCode}?fromQuery=${fromQuery}`;
  }
}

module.exports = Routes;
