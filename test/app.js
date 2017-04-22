const { app } = require('../src/app')
const knex = require('../utils/db')
const request = require('supertest').agent(app.listen())

require('dotenv').config()

const loginUser = auth => done => {
    request
        .post('/login')
        .send({ login: process.env.DEFAULT_ADMIN_NAME, password: process.env.DEFAULT_ADMIN_PWD })
        .expect(200)
        .end((_, res) => {
            auth.token = res.body.token
            return done()
        })
}

describe('API',  () => {

    describe('Categories', () => {
        it('should not have Categories List', done => {
            request
                .get('/api/categories')
                .expect(401, done)
        })
    })

    describe('Pools', () => {
        it('should not have Pools List', done => {
            request
                .get('/api/pools')
                .expect(401, done)
        })
    })

    describe('Pools Id', () => {
        it('should not have Pools by Id', done => {
            request
                .get('/api/pools/1')
                .expect(401, done)
        })
    })

    describe('Pools Message', () => {
        it('should not have Pools by Id', done => {
            request
                .get('/api/pools/messages/1')
                .expect(401, done)
        })
    })

    describe('POST Pools', () => {
        it('should not have POST Pools', done => {
            request
                .post('/api/pools')
                .send({ name: 'LittleTest', users_id: 1 })
                .expect(401, done)
        })
    })

    describe('Messages', () => {
        it('should not have Messages List', done => {
            request
                .get('/api/messages')
                .expect(401, done)
        })
    })

    describe('POST Messages', () => {
        it('should not have POST Message', done => {
            request
                .post('/api/messages')
                .send({ message: "Just a test", pools_id: 1, categories_id: 1 })
                .expect(401, done)
        })
    })

    describe('Problems', () => {
        it('should not have Problems List', done => {
            request
                .get('/api/problems')
                .expect(401, done)
        })
    })

    describe('Problems Id', () => {
        it('should not have Problems by Id', done => {
            request
                .get('/api/problems/1')
                .expect(401, done)
        })
    })

    describe('Problems Importance Increase', () => {
        it('should not have Problems Importance Increase', done => {
            request
                .put('/api/problems/1')
                .expect(401, done)
        })
    })

    describe('Problems Status change', () => {
        it('should not have Problems Status change', done => {
            request
                .put('/api/problems/1/1')
                .expect(401, done)
        })
    })

    describe('Problems Post', () => {
        it('should not have Problems Post', done => {
            request
                .post('/api/problems')
                .send({ name: "Just a test Problem", user_name: 'test.test@epitech.eu' })
                .expect(401, done)
        })
    })

    describe('Problems Delete', () => {
        it('should not have Problems Delete', done => {
            knex('problems').max('id').then(data => {
                request
                    .delete(`/api/problems/${+data[0]['max("id")']}`)
                    .expect(401, done)
            }).catch(done)
        })
    })
})

describe('Auth API',  () => {
    let auth = {}

    before(loginUser(auth))

    describe('Categories', () => {
        it('should have Categories List', done => {
            knex.select().from('categories').then(data => {
                request
                    .get('/api/categories')
                    .set('Authorization', 'bearer ' + auth.token)
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
                    .set('Authorization', 'bearer ' + auth.token)
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
                    .set('Authorization', 'bearer ' + auth.token)
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
                    .set('Authorization', 'bearer ' + auth.token)
                    .expect(200)
                    .expect(data, done)
            }).catch(done)
        })
    })

    describe('POST Pools', () => {
        it('should have POST Pools', done => {
            request
                .post('/api/pools')
                .set('Authorization', 'bearer ' + auth.token)
                .send({ name: 'LittleTest', users_id: 1 })
                .expect(200, done)
        })
    })

    describe('Messages', () => {
        it('should have Messages List', done => {
            knex.select('*').from('messages').then(data => {
                request
                    .get('/api/messages')
                    .set('Authorization', 'bearer ' + auth.token)
                    .expect(200)
                    .expect(data, done)
            }).catch(done)
        })
    })

    describe('POST Messages', () => {
        it('should have POST Message', done => {
            request
                .post('/api/messages')
                .set('Authorization', 'bearer ' + auth.token)
                .send({ message: "Just a test", pools_id: 1, categories_id: 1 })
                .expect(200, done)
        })
    })

    describe('Problems', () => {
        it('should have Problems List', done => {
            knex.select().from('problems').then(data => {
                request
                    .get('/api/problems')
                    .set('Authorization', 'bearer ' + auth.token)
                    .expect(200)
                    .expect(data, done)
            }).catch(done)
        })
    })

    describe('Problems Id', () => {
        it('should have Problems by Id', done => {
            knex('problems').where('id', 1).then(data => {
                request
                    .get('/api/problems/1')
                    .set('Authorization', 'bearer ' + auth.token)
                    .expect(200)
                    .expect(data, done)
            }).catch(done)
        })
    })

    describe('Problems Importance Increase', () => {
        it('should have Problems Importance Increase', done => {
            request
                .put('/api/problems/1')
                .set('Authorization', 'bearer ' + auth.token)
                .expect(200, done)
        })
    })

    describe('Problems Status change', () => {
        it('should have Problems Status change', done => {
            request
                .put('/api/problems/1/1')
                .set('Authorization', 'bearer ' + auth.token)
                .expect(200, done)
        })
    })

    describe('Problems Post', () => {
        it('should have Problems Post', done => {
            request
                .post('/api/problems')
                .send({ name: "Just a test Problem", user_name: 'test.test@epitech.eu' })
                .set('Authorization', 'bearer ' + auth.token)
                .expect(200, done)
        })
    })

    describe('Problems Delete', () => {
        it('should have Problems Delete', done => {
            knex('problems').max('id').then(data => {
                request
                    .delete(`/api/problems/${+data[0]['max("id")']}`)
                    .set('Authorization', 'bearer ' + auth.token)
                    .expect(200, done)
            }).catch(done)
        })
    })
})