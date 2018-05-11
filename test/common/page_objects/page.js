class Page {

  constructor(browser) {
    this.browser = browser;
  }
  // eslint-disable-next-line no-unused-vars
  visit(...args) {
    throw new Error('Must implement the visit method');
  }

  /**
   * @param {string} dataTest - the data test element
   * @param {object} context - the core object returned from browser.querySelector. By default
   * uses the document
   * returns the text within the element
   */
  extractText(dataTest = '', context = this.browser) {
    return this.browser.text(this.dataTestEl(dataTest), context);
  }

  dataTestEl(dataTest) {
    return dataTest ? `[data-test="${dataTest}"]` : '';
  }

  /**
   * @param {string} dataTest - the data test element
   * @param {object} context - the 'core' object returned from browser.querySelector. By default
   * uses the document
   * returns the text within the element
   */
  extractLink(dataTest, context = this.browser) {
    const href = this.browser.query(this.dataTestEl(dataTest), context).getAttribute('href');
    const text = this.extractText(dataTest, context);
    return { href, text };
  }

  /**
   * @param {string} dataTest - the data test element
   * @param {string} attribute - the attribute name
   * @param {object} context - the 'core' object returned from browser.querySelector. By default
   * uses the document
   * returns the attribute value
   */
  extractAttributeValue(dataTest, attribute, context = this.browser) {
    return this.browser.query(`[data-test="${dataTest}"]`, context).getAttribute(attribute);
  }

  /**
   * Check id a data test element has a class
   * @param {string} dataTest - the data test element
   * @param {string} className - class to check
   * @param {object} context - the 'core' object returned from browser.querySelector. By default
   * uses the document
   * returns true if matches
   *
   */
  hasClass(dataTest, className, context = this.browser) {
    return this.browser.query(`[data-test="${dataTest}"]`, context)
      .className.split(' ').indexOf(className) > -1;
  }

  /**
   * returns the text in the #content element
   */
  getText() {
    return this.browser.text('#content');
  }

  /**
   *
   * @param {string} dataTest - the data test element. Must wrap ${dataTest}-text in ${dataTest} el.
   *   e.g.
   *     <span data-test="occupation-task">
   *       <li data-test="occupation-task-text">{{.}}</li>
   *     </span>
   * @param {object} context - the 'core' object returned from browser.querySelector. By default
   * @returns array of text within the elements
   */
  extractAll(dataTest) {
    return this.browser.queryAll(`[data-test="${dataTest}"]`)
      .map(context => this.extractText(`${dataTest}-text`, context));
  }

}
module.exports = Page;
