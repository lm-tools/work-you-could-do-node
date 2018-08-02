const Page = require('./page.js');
const OccupationPage = require('./occupation-page');

class SavedOccupationsPage extends Page {
  visit(account, occupationId, fromQuery) {
    return this.browser.visit(this.routes.occupationUrl(account, occupationId, fromQuery));
  }

  getOccupations() {
    return this.browser.queryAll('occupation').map(occContext =>
      new OccupationPage(occContext, this.routes).getOccupationResult()
    );
  }

}

module.exports = SavedOccupationsPage;
