/**
 * Created by carlen on 4/16/17.
 */
const Model = require('./categories')

const get = async ctx => ctx.body = await Model.get()

module.exports = { get }