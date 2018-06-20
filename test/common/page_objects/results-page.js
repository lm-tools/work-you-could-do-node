const Page = require('./page.js');

class SearchPage extends Page {
  visit(accountId, query) {
    return this.browser.visit(this.routes.resultsUrl({ accountId, fromQuery: query }));
  }

  getText() {
    return this.browser.text('#content');
  }

  getResults() {
    const occupations = this.browser.queryAll('[data-test="occupation"]');
    return occupations.map(occupationCtxt => ({
      title: this.extractText('title', occupationCtxt),
      description: this.extractText('summary', occupationCtxt),
      href: this.browser.query('[data-test^="occupation-"]', occupationCtxt).getAttribute('href'),
    }));
  }
}

module.exports = SearchPage;
