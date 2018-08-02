const Page = require('./page.js');

class OccupationPage extends Page {
  constructor(browser, routes, context = null){
    super(browser, routes);
    this.context = context || browser;
  }
  visit(account, occupationId, fromQuery) {
    return this.browser.visit(this.routes.occupationUrl(account, occupationId, fromQuery));
  }

  getTitle() {
    return this.extractText('occupation-title', this.context);
  }

  getDescription() {
    return this.extractText('occupation-description', this.context);
  }

  getTasks() {
    return this.extractAll('occupation-task', this.context);
  }

  getAdditionalTitles() {
    return this.extractText('occupation-additional-titles', this.context);
  }

  getHoursPerWeek() {
    return this.extractText('occupation-week-hours', this.context);
  }

  getPayPerWeek() {
    return this.extractText('occupation-week-pay', this.context);
  }

  getBackLink() {
    return this.extractLink('back-to-search-results', this.context);
  }

  getHelpLink() {
    return this.extractLink(('occupation-how-to'), this.context);
  }

  getSavedOccupationBoxTitle() {
    return this.extractText('saved-occupation-title', this.context);
  }

  getSavedOccupationBoxSavedRolesLink() {
    return this.extractLink('saved-occupation-link', this.context).href;
  }

  getOccupationResult() {
    return {
      title: this.getTitle(),
      tasks: this.getTasks(),
      additionalTitles: this.getAdditionalTitles(),
      hoursPerWeek: this.getHoursPerWeek(),
      payPerWeek: this.getPayPerWeek(),
      description: this.getDescription(),
    }
  }

  clickSave() {
    return this.click('save-occupation');
  }

}

module.exports = OccupationPage;
