const request = require('supertest');
const app = require('../app.js')

// post /cars requires many query params

// if not sent, get a message & status code 422

// if sent, get back data with an "id " field


// get /cars requires id as a query param

// if not sent,get a message & status code 422

// if sent, get back car obj


// This is what our index test looks like, use it as a template
  // it('responds with string', function(done){
  //   request(app)
  //     .get('/')
  //     .expect('Content-Type', /text/)
  //     .expect(200, done)
  // })
