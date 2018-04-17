const SearchPage = function (browser) {
  this.browser = browser;

  this.visit = (account) => this.browser.visit(`/${account}/search`);
  this.clickSearch = () => this.browser.click('[data-test="search"]');
};

module.exports = SearchPage;
