import app from '../src/app'
const request = require('supertest').agent(app.listen())

describe('Index', () => {
    it('should say "ForwardProblems"',done => {
        request
            .get('/')
            .expect(200)
            .expect('ForwardProblems', done)
    })
})