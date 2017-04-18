/**
 * Created by carlen on 4/17/17.
 */
const knex = require('../../../utils/db')
const { sanitize } = require('../../../utils/msg')
const table = 'pools'

const get = () => knex.select().from(table)

const getId = id => knex(table).where('id', id)

const getMessagesId = id => knex.select('*').from('messages').where('pools_id', id)

const post = ({ name, users_id }) => sanitize(name).then(nameSanit => knex(table).insert({ name: nameSanit, users_id }))

module.exports = { get, getId, getMessagesId, post }