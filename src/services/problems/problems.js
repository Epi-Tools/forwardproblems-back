/**
 * Created by carlen on 4/20/17.
 */
const knex = require('../../../utils/db')
const table = 'problems'

const get = () => knex.select('*').from(table)

module.exports = { get }