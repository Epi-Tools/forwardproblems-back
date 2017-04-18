const { app } = require('../src/app')
const knex = require('../utils/db')
const request = require('supertest').agent(app.listen())

describe('Categories', () => {
    it('should have Categories List', done => {
        knex.select().from('categories').then(data => {
            request
                .get('/api/categories')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('Pools', () => {
    it('should have Pools List', done => {
        knex.select().from('pools').then(data => {
            request
                .get('/api/pools')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('Pools Id', () => {
    it('should have Pools by Id', done => {
        knex('pools').where('id', 1).then(data => {
            request
                .get('/api/pools/1')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})


describe('Pools Message', () => {
    it('should have Pools by Id', done => {
        knex.select('*').from('messages').where('pools_id', 1).then(data => {
            request
                .get('/api/pools/messages/1')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})