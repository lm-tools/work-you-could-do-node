const Page = require('./page.js');

class OccupationPage extends Page {
  visit(account, occupationId, fromQuery) {
    return this.browser.visit(
      `/${account}/occupation/${occupationId}${fromQuery ? `?fromQuery=${fromQuery}` : ''}`
    );
  }

  getTasks() {
    return this.extractAll('occupation-task');
  }

  getAdditionalTitles() {
    return this.extractText('occupation-additional-titles');
  }

  getHoursPerWeek() {
    return this.extractText('occupation-week-hours');
  }

  getPayPerWeek() {
    return this.extractText('occupation-week-pay');
  }

  getBackLink() {
    return this.extractLink('back-to-search-results');
  }

}

module.exports = OccupationPage;
