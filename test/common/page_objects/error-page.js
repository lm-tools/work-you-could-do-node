const Page = require('./page');

class ErrorPage extends Page {
  getMessage() {
    return this.browser.text('[data-test="message"]');
  }

  getErrorDetails() {
    return this.browser.text('[data-test="error-details"]');
  }
}

module.exports = ErrorPage;
