/**
 * Created by carlen on 4/20/17.
 */
const knex = require('../../../utils/db')
const { sanitize } = require('../../../utils/msg')
const table = 'problems'

const get = () => knex.select('*').from(table)

const getId = id => knex(table).where('id', id)

const post = async ({ problem, username, severity }) => knex(table)
    .insert({ name: await sanitize(problem), user_name: await sanitize(username), importance: await sanitize(severity) })

const deleteId = id => knex(table).where('id', id).del()

const updateImportance = id => knex(table).where('id', id).increment('importance', 1)

const updateStatus = (id, status) => knex(table).where('id', id).update({ status })

module.exports = { get, post, getId, deleteId, updateImportance, updateStatus, table }