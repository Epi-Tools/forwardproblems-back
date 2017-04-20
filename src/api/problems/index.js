/**
 * Created by carlen on 4/20/17.
 */
const Model = require('../../services/problems/problems')

const get = async ctx => ctx.body = await Model.get()

module.exports = { get }