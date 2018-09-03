const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;


describe("server", () => {
  describe("GET /", () => {
    it('should return hello World response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    })});
  describe("GET /users", () => {
    it('should return user object and read 200', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name:'Dan',
            age: 34
          })
        })
        .end(done);
    })

  })

  })




//Server
 // get/
   // some test

// it('should return hello World response', (done) => {
//   request(app)
//     .get('/')
//     .expect(404)
//     .expect((res) => {
//       expect(res.body).toInclude({
//         error: 'Page not found.'
//       })
//     })
//     .end(done);
// })
//
// it('should return user object and read 200', (done) => {
//   request(app)
//     .get('/users')
//     .expect(200)
//     .expect((res) => {
//       expect(res.body).toInclude({
//         name:'Dan',
//         age: 34
//       })
//     })
//     .end(done);
// })

//MAke a new tests
//status is 200
//user object exists using toInclude
