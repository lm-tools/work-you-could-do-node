const IntroductionPage = function (browser) {
  this.browser = browser;

  this.visit = (account) => this.browser.visit(`/${account}/introduction`);
  this.getText = () => this.browser.text('#content');
  this.clickNext = () => this.browser.click('[data-test="next"]');
  this.browserPath = () => browser.location.pathname;
};

module.exports = IntroductionPage;
