/* eslint-disable max-len */
const mockResponse = soc => ({
  soc,
  title: `Library clerks and assistants - ${soc}`,
  description: 'Library clerks and assistants classify, sort and file publications, documents, ' +
    'audio-visual and computerised material in libraries and offices.',
  qualifications: 'There are no minimum academic requirements, although entrants usually possess ' +
    'GCSEs/S grades or A-Levels/H grades. Training is usually provided on-the-job. NVQs/SVQs in ' +
    'Information and Library Services are available at Levels 2 and 3.',
  tasks: 'sorts, catalogues and maintains library records;\n locates and retrieves material on ' +
    'request for borrowers;\n issues library material and records date of issue/ due date for return;\n' +
    ' classifies, labels and indexes new books;\n performs simple repairs on old books.',
  add_titles: ['Abstractor (press cuttings)', 'Agent, cutting, press', 'Assistant, archives',
    'Assistant, bibliographic', 'Assistant, chief (library)', 'Assistant, clerical (library)',
    'Assistant, counter (library)', 'Assistant, information (educational establishments)',
    'Assistant, information (library)', 'Assistant, library', 'Assistant, resource, learning',
    'Assistant, services, bibliographic', 'Assistant (library)', 'Attendant, library',
    'Clerk, cuttings, press', 'Clerk, library', 'Clerk (library)', 'Clipper, press (press cutting agency)',
    'Looker-out, book', 'Reader (press cutting agency)', 'Supervisor, library'],
});
const mockHeaders = () => ({
  Server: 'nginx/1.2.7',
  Date: 'Mon, 20 Feb 2017 14:23:16 GMT',
  'Content-Type': 'application/json;charset=utf-8',
  'Content-Length': '1349',
  Connection: 'keep-alive',
  'X-Auth-Type': 'HMAC',
  'Access-Control-Allow-Origin': '*',
});

module.exports = lmiNock => () => {
  const nock = lmiNock()
    .get(/\/api\/v1\/soc\/code\/[0-9]{1,5}$/)
    .reply(uri => {
      const params = uri.split('/');
      const soc = params[params.length - 1];
      return [200, Object.assign(mockResponse(soc), mockResponse(soc)), mockHeaders];
    });
  return { nock, mockResponse, mockHeaders };
};
