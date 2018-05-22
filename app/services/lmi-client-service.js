const config = require('./../config/index');
const request = require('request-promise-native');
const crypto = require('crypto');
const OccupationCache = require('./../models/occupation-cache-model');

const filterObjectByKeys = function (body, keepProperties) {
  return Object.keys(body)
    .filter(key => keepProperties.includes(key))
    .reduce((accumulator, value) => {
      const obj = {};
      obj[value] = body[value];
      return Object.assign(accumulator, obj);
    }, {});
};

class LmiClient {

  constructor({ lmiSecretKey, lmiKeyId, lmiBaseUri }) {
    this.secretKey = lmiSecretKey;
    this.keyId = lmiKeyId;
    this.lmiBaseUri = lmiBaseUri;
  }

  /**
   *
   * @param keyword
   * @returns soc Array: Standard Occupational Classification
   */
  searchSoc(keyword) {
    return request.get(`${this.lmiBaseUri}/soc/search?q=${keyword}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    }).then(r =>
      r.body && JSON.parse(r.body)
    );
  }

  getSoc(socCode) {
    return this.lmiGetRequest(`/soc/code/${socCode}`);
  }

  getOccupation(socCode) {
    return OccupationCache.findBySocId(socCode)
      .then(cachedOccupation => {
        if (!cachedOccupation) {
          let occupation;
          return Promise.all([
            this.getSoc(socCode),
            this.getWeekHours(socCode),
            this.getWeekPay(socCode),
          ]).then(([soc, weekHours, weekPay]) => {
            occupation = this.toOccupationCacheDTO(socCode, soc, weekHours, weekPay);
            return new OccupationCache(occupation).save();
          }).then(() => occupation);
        }
        return cachedOccupation;
      });
  }

  getWeekHours(socCode) {
    return this.lmiGetRequest(`/ashe/estimateHours?soc=${socCode}&coarse=true`)
      .then(response => this.handleAsheResponse(response, socCode, 'hours'));
  }

  getWeekPay(socCode) {
    return this.lmiGetRequest(`/ashe/estimatePay?soc=${socCode}`)
      .then(response => this.handleAsheResponse(response, socCode, 'estpay'));
  }

  toOccupationCacheDTO(socCode, soc, weekHours, weekPay) {
    const body = soc.body && JSON.parse(soc.body);
    if (!body) {
      throw new Error(`${socCode} not found`);
    }
    body.additionalTitles = body.add_titles.join('; ');
    body.tasks = body.tasks.replace(/\r?\n|\r/g, '').trim();
    body.weekHours = weekHours;
    body.weekPay = weekPay;
    return filterObjectByKeys(body, OccupationCache.columns);
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

module.exports = LmiClient;
