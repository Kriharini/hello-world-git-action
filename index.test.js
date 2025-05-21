const req=require('supertest');
const app=require('./index');

test('GET / should return Hello World', async()=>{
const res= await req(app).get('/');
expect(res.status).toBe(200);
expect(res.text).toBe('Hello World');
});