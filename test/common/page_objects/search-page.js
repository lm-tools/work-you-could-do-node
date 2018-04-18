const SearchPage = function (browser) {
  this.browser = browser;

  this.visit = (account, query) =>
    this.browser.visit(`/${account}/search${query ? `?query=${query}` : ''}`);
  this.clickSearch = () => this.browser.click('[data-test="search"]');
  this.getText = () => this.browser.text('#content');
};

module.exports = SearchPage;
