/**
 * Created by carlen on 4/16/17.
 */
const knex = require('../../../utils/db')
const table = 'categories'

exports.get = () => knex.select().from(table)