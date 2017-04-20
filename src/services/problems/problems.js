/**
 * Created by carlen on 4/20/17.
 */
const knex = require('../../../utils/db')
const { sanitize } = require('../../../utils/msg')
const table = 'problems'

const get = () => knex.select('*').from(table)

const getId = id => knex(table).where('id', id)

const post = ({ name, user_name }) => sanitize(name)
    .then(nameSanit => knex(table).insert({ name: nameSanit, user_name }))

const deleteId = id => knex(table).where('id', id).del()

const updateImportance = id => knex(table).where('id', id).increment('importance', 1)

const updateStatus = (id, status) => knex(table).where('id', id).update({ status })

module.exports = { get, post, getId, deleteId, updateImportance, updateStatus, table }