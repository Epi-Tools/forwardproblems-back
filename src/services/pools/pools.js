/**
 * Created by carlen on 4/17/17.
 */
const knex = require('../../../utils/db')
const { sanitize } = require('../../../utils/msg')
const table = 'pools'

const get = () => knex.select().from(table)

const getId = id => knex(table).where('id', id)

const getMaxId = () => knex(table).max('id')

const getMessagesId = id => knex.select('*').from('messages').where('pools_id', id)

const post = ({ name, users_id }) => sanitize(name).then(nameSanit => knex(table).insert({ name: nameSanit, users_id }))

const updateStatusAll = () => knex(table).update({ status: 0 })

const updateStatus = id => knex(table).where({ id: id[0]['max("id")'] }).update({ status: 1 })

module.exports = { get, getId, getMaxId, getMessagesId, post, updateStatusAll, updateStatus }