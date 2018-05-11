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
    .get('/api/v1/ashe/estimateHours')
    .query(query => query.soc && socCodeRegex.test(query.soc.toString()))
    .reply(uri => {
      const soc = Number(getQueryParameterByName('soc', uri));
      const hours = !isNaN(soc) && soc % 40;
      return hours && [200, {
        soc,
        series: [
          {
            year: 2015,
            hours,
          },
        ],
      }];
    });
