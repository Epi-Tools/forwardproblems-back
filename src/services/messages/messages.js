/**
 * Created by carlen on 4/18/17.
 */
const knex = require('../../../utils/db')
const table = 'messages'

const get = () => knex.select('*').from(table)

//const put = { message, pools_id, categories_id } => knex

module.exports = { get }