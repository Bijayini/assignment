let chai = require('chai');
const request = require('supertest');

let expect = chai.expect;
const { server } = require('../server');

describe('GET /tasks', ()=>{
    it('should get tasks succesfully', (done)=>{
        request(server)
            .get('/tasks')
            .expect((res)=>{
                expect(res.body.statusCode).to.equal(200);
                expect(res.body.task).to.be.an('array');

            })
            .end(done);
    })
});