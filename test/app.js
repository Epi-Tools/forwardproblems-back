const app = require('../src/app')
const knex = require('../utils/db')
const request = require('supertest').agent(app.listen())

describe('Categories', () => {
    it('should have Categories List', done => {
        knex.select().from('categories').then(data => {
            request
                .get('/categories')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})