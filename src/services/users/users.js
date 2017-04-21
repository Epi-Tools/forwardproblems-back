/**
 * Created by carlen on 4/21/17.
 */
const knex = require('../../../utils/db')
const table = 'users'

const login = ({ login, password }) => knex.select('*').from(table).where({ login, password })

const getUserByLogin = login => knex(table).where({ login })

module.exports = { login, getUserByLogin }