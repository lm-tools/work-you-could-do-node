class MainPage {
  constructor(browser) {
    this.browser = browser;
  }

  visit(account) {
    return this.browser.visit(`/${account}/introduction`);
  }

  getText() {
    return this.browser.text('#content');
  }

}
module.exports = MainPage;
