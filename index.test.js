const req=require('supertest');
const app=require('./index');
let server;

beforeAll((done) => {
  server = app.listen(3000, done);  // use a test port
});

afterAll((done) => {
  server.close(done);
});
test('GET / should return Hello World back', async()=>{
const res= await req(server).get('/');
expect(res.status).toBe(200);
expect(res.text).toBe('Hello World');
});