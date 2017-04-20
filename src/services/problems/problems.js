/**
 * Created by carlen on 4/20/17.
 */
const knex = require('../../../utils/db')
const table = 'problems'

const get = () => knex.select('*').from(table)

const updateImportance = id => knex(table).where('id', id).increment('importance', 1)

module.exports = { get, updateImportance , table }