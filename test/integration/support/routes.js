class Routes {
  constructor(basePath, siteUrl) {
    this.basePath = basePath;
    this.siteUrl = siteUrl;
  }
  entrypointUrl(query='') {
    return `${this.basePath}${query}`;
  }

  introductionUrl(accountId) {
    return `${this.basePath}/${accountId}/introduction`;
  }

  cookieUrl() {
    return `${this.basePath}/cookie`;
  }

  searchUrl(accountId, query) {
    const q = query ? `?query=${encodeURIComponent(query)}` : '';
    return `${this.basePath}/${accountId}/search${q}`;
  }

  searchUrlAbsolute(search) {
    return `${this.siteUrl}${this.basePath}/search?query=${encodeURIComponent(search)}`;
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
