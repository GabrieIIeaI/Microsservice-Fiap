const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
    it('should return welcome message', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal("Welcome to the microservice professor!");
                done();
            });
    });
});

describe('POST /add', () => {
    it('should return the sum of two numbers', (done) => {
        request(app)
            .post('/add')
            .send({ num1: 5, num2: 3 })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.result).to.equal(8);
                done();
            });
    });
});

describe('POST /subtract', () => {
    it('should return the difference of two numbers', (done) => {
        request(app)
            .post('/subtract')
            .send({ num1: 5, num2: 3 })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.result).to.equal(2);
                done();
            });
    });
});
