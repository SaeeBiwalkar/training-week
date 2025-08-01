const request = require('supertest');
const { app, db } = require('./app');

describe('POST /create', () => {
  afterAll(() => {
    db.end(); // close DB connection
  });

  it('should create a new account', async () => {
    const response = await request(app).post('/create').send({
      account_number: 1010,
      name: 'Test User',
      balance: 50000,
      pin: 1234
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message', 'Account created');
    expect(response.body).toHaveProperty('account_number', 1010);
  });
});
