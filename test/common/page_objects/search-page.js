const Page = require('./page.js');

class SearchPage extends Page {
  visit(accountId) {
    return this.browser.visit(this.routes.searchUrl({ accountId }));
  }

  getText() {
    return this.browser.text('#content');
  }
}

module.exports = SearchPage;
