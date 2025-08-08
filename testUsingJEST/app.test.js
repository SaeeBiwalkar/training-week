const request = require('supertest');
const { app, db } = require('./app');

/*
describe('POST /create', () => {
  afterAll(() => {
    db.end(); // close DB connection
  });

  it('should create a new account', async () => {
    const response = await request(app).post('/create').send({
      account_number: 1011,
      name: 'Test User2',
      balance: 50000,
      pin: 1234
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'Account created');
    expect(response.body).toHaveProperty('account_number', 1011);
  });
});
*/

describe('GET /accounts/:id', () => {
  afterAll(() => {
    db.end(); // close DB connection
  });

  it('should fetch account details', async () => {
    const response = await request(app).get('/accounts/1010');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('account_number', 1010);
    expect(response.body).toHaveProperty('name', 'Test User');
    expect(parseFloat(response.body.balance)).toBeCloseTo(50000);
    //expect(response.body).toHaveProperty('balance', 50000);
    expect(response.body).toHaveProperty('pin', 1234);
  });

  it('should return 404 for non-existent account', async () => {
    const response = await request(app).get('/accounts/9999');

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', 'Account not found');
  });
});


