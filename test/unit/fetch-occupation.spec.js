const { describe, it } = require('mocha');
const expect = require('chai').expect;

const fetchOccupation = require('../../app/middleware/fetch-occupation.js');

const expectedSocObject = {
  add_titles: [
    'Manager, branch (wholesale, retail trade)',
    'Manager, wholesale',
    'Manager, shop',
    'Manager, operations, wholesale',
    'Manager, circulation',
    'Manager (wholesale trade)',
    'Manager, room, show',
    'Manager, shop (agriculture)',
    'Manager, shop, butcher\'s',
    'Manager, florist',
    'Manager, station, service',
    'Manager, dairy',
    'Manager, production (wholesale, retail trade)',
    'Manager (off-licence)',
    'Manager, service (retail trade)',
    'Manager (filling station)',
    'Manager',
    'Manager (builders\' merchants)',
    'Manager, room, sales',
    'Manager, district (wholesale trade)',
    'Manager, practice (opticians)',
    'Manager, store (wholesale, retail trade)',
    'Manager, butcher\'s',
    'Manager, tailor\'s',
    'Manager (retail trade)',
    'Manager, site (retail trade)',
    'Manager, sales, fleet',
    'Manager (garden centre)',
    'Director (wholesale trade)',
    'Manager, district (retail trade)',
    'Licensee (petrol station)',
    'Manager (livestock dealing)',
    'Manager, shift (wholesale, retail trade)',
    'Manager, area (retail trade)',
    'Manager, bookshop',
    'Manager (fuel merchant)',
    'Manager, stores (wholesale, retail trade)',
    'Director (retail trade)',
    'Director, retail',
    'Manager (timber merchants)',
    'Manager, operations (wholesale, retail trade)',
    'Manager, order, mail',
    'Manager (NAAFI: shop)',
    'Manager, shop (retail, wholesale trade)',
    'Manager, shop, farm',
    'Manager (petrol station)',
    'Manager, centre, garden',
    'Director, franchise',
    'Manager, fishmonger\'s',
    'Manager, showroom',
    'Manager, supermarket',
    'Manager, shop, charity',
    'Manager, technical (wholesale, retail trade)',
    'Manager, sales (wholesale trade)',
    'Manager, licence, off',
    'Manager (steel stockholders)',
    'Manager, shop (retail trade: pharmacists)',
    'Manager (pawnbrokers)',
    'Manager, sales (retail trade)',
    'Manager, station, petrol',
    'Manager, operations, retail',
    'Manager, stall, book',
    'Manager, club, clothing',
    'Manager, trade',
    'Manager (mail order establishment)',
    'Manager, shop (horticulture)',
    'Director, technical (wholesale, retail trade)',
    'Manager, retail',
    'Director, managing (wholesale, retail trade)',
    'Manager, shop, fishmonger\'s',
  ],
  description: 'Retail and wholesale managers and directors plan, organise, direct ' +
  'and co-ordinate the operations of major retail and wholesale establishments in ' +
  'order to maximise business performance and meet financial goals.',
  qualifications: 'Entry requirements vary from company to company. Entrants may ' +
  'possess GCSEs/S grades, A levels/H grades, GNVQs/GSVQs, a BTEC/SQA award, a ' +
  'degree or equivalent qualification. Entry is also possible through promotion ' +
  'after gaining sufficient experience. NVQs/SVQs in Retail Operations are available ' +
  'at Level 4.',
  soc: 1190,
  tasks: ' appoints staff, assigns tasks and monitors and reviews staff performance;\n ' +
  'liaises with other staff to provide information about merchandise, special promotions ' +
  'etc. to customers;\n ensures that adequate reserves of merchandise are held and that ' +
  'stock keeping is carried out efficiently;\n ensures customer complaints and queries ' +
  'regarding sales and service are appropriately handled;\n oversees the maintenance of ' +
  'financial and other records and controls security arrangements for the premises;\n ' +
  'authorises payment for supplies received and decides on vending price, discount rates ' +
  'and credit terms;\n examines quality of merchandise and ensures that effective use ' +
  'is made of advertising and display facilities.',
  title: 'Managers and directors in retail and wholesale',
};

describe('fetchOccupation', () => {
  it('should get the occupation and populate the request object when id param is present', () => {
    const req = { params: { id: 1190 } };
    fetchOccupation(req, {}, () => {}).then(() =>
      expect(req.occupation).to.eql(expectedSocObject), {});
  });

  it('throws error when id param is missing', () => {
    const next = err => expect(err).to.be.eql({ status: 500 });
    fetchOccupation({ params: {} }, {}, next);
  });
});
