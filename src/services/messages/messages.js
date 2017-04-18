/**
 * Created by carlen on 4/18/17.
 */
const knex = require('../../../utils/db')
const { sanitize } = require('../../../utils/msg')
const table = 'messages'

const get = () => knex.select('*').from(table)

const post = ({ message, pools_id, categories_id }) => sanitize(message)
    .then(msg => knex(table).insert({ message: msg, pools_id, categories_id }))

module.exports = { get, post }