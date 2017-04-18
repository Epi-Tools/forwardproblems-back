/**
 * Created by carlen on 4/18/17.
 */
const knex = require('../../../utils/db')
const table = 'messages'

const get = () => knex.select('*').from(table)

module.exports = { get }