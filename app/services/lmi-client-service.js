const config = require('./../config/index');
const request = require('request-promise-native');
const crypto = require('crypto');

class LmiClient {

  constructor() {
    this.secretKey = config.lmi_secret_key;
    this.keyId = config.lmi_key_id;
  }
  generateHmacHeaders(date) {
    const dateStr = date.toUTCString();
    const hmac = crypto.createHmac('sha1', this.secretKey).update(dateStr).digest('sha1');
    const hmacB64 = Buffer.from(hmac).toString('base64');
    return {
      Authorization:
        `Signature keyId=\"${this.keyId}\",algorithm=\"hmac-sha1\",signature=\"${hmacB64}\"`,
      Date: dateStr,
    };
  }
  generateHmacHeadersNow() {
    this.generateHmacHeaders(new Date());
  }
  socSearch(keyword) {
    return request.get(`${config.lmiBaseUri}/soc/search?q=${keyword}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }
  hoursLookup(socCode) {
    return request.get(`${config.lmiBaseUri}/ashe/estimateHours?soc=${socCode}&coarse=true`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }
  payLookup(socCode) {
    return request.get(`${config.lmiBaseUri}/ashe/estimatePay?soc=${socCode}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }
  socCodeLookup(socCode) {
    return request.get(`${config.lmiBaseUri}/soc/code/${socCode}`, {
      headers: this.generateHmacHeadersNow(),
      insecure: config.env === 'test',
      resolveWithFullResponse: true,
    });
  }
}

module.exports = new LmiClient();
