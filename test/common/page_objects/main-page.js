class MainPage {
  constructor(browser) {
    this.browser = browser;
  }

  visit() {
    return Page.visit('/');
  }
}
module.exports = MainPage;
