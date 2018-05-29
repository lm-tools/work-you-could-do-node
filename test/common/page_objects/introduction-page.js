const Page = require('./page');

class IntroductionPage extends Page {
  visit(accountId) {
    return this.browser.visit(this.routes.introductionUrl({ accountId }));
  }

  clickNext() {
    return this.browser.click('[data-test="next"]');
  }

  browserPath() {
    return this.browser.location.pathname;
  }
}

module.exports = IntroductionPage;
