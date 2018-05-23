const Page = require('./page');

class IntroductionPage extends Page {
  visit(account) {
    return Page.visit(this.routes.introductionUrl(account));
  }

  getText() {
    return this.browser.text('#content');
  }

  clickNext() {
    return this.browser.click('[data-test="next"]');
  }

  browserPath() {
    return this.browser.location.pathname;
  }
}

module.exports = IntroductionPage;
