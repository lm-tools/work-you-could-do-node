const Page = require('./page.js');

class OccupationHowToPage extends Page {
  visit(accountId, occupationId, fromQuery) {
    return this.browser.visit(this.routes.occupationHowToUrl({
      accountId,
      socCode: occupationId,
      fromQuery,
    }));
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
    return this.extractLink('back-to-role');
  }

}

module.exports = OccupationHowToPage;
