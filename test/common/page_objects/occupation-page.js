const Page = require('./page.js');

class OccupationPage extends Page {
  visit(accountId, occupationId, fromQuery) {
    return this.browser.visit(this.routes.occupationUrl({
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
    return this.extractLink('back-to-search-results');
  }

  getHelpLink() {
    return this.extractLink(('occupation-how-to'));
  }

}

module.exports = OccupationPage;
