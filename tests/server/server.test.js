const expect = require('expect')
const request = require('supertest')
var app = require('./server').app

describe('Server check', () => {

    describe('Get /', () => {
        it('should verify the main page is not available', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({ error: 'Page not found' })
                })
                .end(done);
        });
    });

    describe('Get /Users', () => {
        it('should verify the body data', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({ age: 25 })
                })
                .end(done);
        });
    });
});