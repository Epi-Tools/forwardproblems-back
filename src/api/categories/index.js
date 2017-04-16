/**
 * Created by carlen on 4/16/17.
 */
const Model = require('../../services/categories/categories')

const get = async ctx => ctx.body = await Model.get()

module.exports = { get }