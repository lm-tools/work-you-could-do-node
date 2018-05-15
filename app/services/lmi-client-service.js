const config = require('./../config/index');
const request = require('request-promise-native');
const crypto = require('crypto');

class LmiClient {

  constructor() {
    this.secretKey = config.lmi_secret_key;
    this.keyId = config.lmi_key_id;
    this.lmiBaseUri = config.lmiBaseUri;
  }

  /**
   *
   * @param keyword
   * @returns soc: Standard Occupational Classification
   */
  searchSoc(keyword) {
    return request.get(`${this.lmiBaseUri}/soc/search?q=${keyword}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }

  getSoc(socCode) {
    return this.lmiGetRequest(`/soc/code/${socCode}`)
      .then(r => {
        const body = r.body && JSON.parse(r.body);
        if (!body) {
          throw new Error(`${socCode} not found`);
        }
        return body;
      });
  }

  getHours(socCode) {
    return this.lmiGetRequest(`/ashe/estimateHours?soc=${socCode}&coarse=true`)
      .then(response => this.handleAsheResponse(response, socCode, 'hours'));
  }

  getPay(socCode) {
    return this.lmiGetRequest(`/ashe/estimatePay?soc=${socCode}`)
      .then(response => this.handleAsheResponse(response, socCode, 'estpay'));
  }

  lmiGetRequest(endpoint) {
    return request.get(`${this.lmiBaseUri}${endpoint}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }

  handleAsheResponse(r, socCode, seriesKey) {
    const body = r.body && JSON.parse(r.body);
    const estpay = body && body.series && body.series[0] && body.series[0][seriesKey];
    if (!estpay) {
      throw new Error(`${seriesKey} not found for ${socCode}`);
    }
    return estpay;
  }

  generateHmacHeaders(date) {
    const Date = date.toUTCString();
    const hmac = crypto.createHmac('sha1', this.secretKey).update(Date).digest('sha1');
    const hmacB64 = Buffer.from(hmac).toString('base64');
    const Authorization = `Signature keyId="${this.keyId}",algorithm="hmac-sha1"` +
      `,signature="${hmacB64}"`;
    return { Authorization, Date };
  }

  generateHmacHeadersNow() {
    return this.generateHmacHeaders(new Date());
  }
}

module.exports = new LmiClient();
