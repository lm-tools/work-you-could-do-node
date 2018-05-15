const socCodeRegex = /^[0-9]{4}$/;
function getQueryParameterByName(name, url) {
  const nameStripped = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${nameStripped}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
module.exports = lmiNock => () =>
  lmiNock()
    .get('/api/v1/ashe/estimatePay')
    .query(query => query.soc && socCodeRegex.test(query.soc.toString()))
    .reply(uri => {
      const soc = Number(getQueryParameterByName('soc', uri));
      const pay = !isNaN(soc) && soc % 1600;
      return pay && [200, {
        soc,
        series: [
          {
            year: 2013,
            estpay: pay - 1,
          },
          {
            year: 2015,
            estpay: pay,
          },
        ],
      }];
    });
