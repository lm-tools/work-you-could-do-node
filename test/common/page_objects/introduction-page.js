const Page = require('./page');

class IntroductionPage extends Page {
  visit(account) {
    return this.browser.visit(this.routes.introductionUrl(account));
  }

  clickNext() {
    return this.browser.click('[data-test="next"]');
  }

  browserPath() {
    return this.browser.location.pathname;
  }
}

module.exports = IntroductionPage;
