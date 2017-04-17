/**
 * Created by carlen on 4/17/17.
 */
const Model = require('../../services/pools/pools')
const Validator = require('../../../utils/validator')
const Msg = require('../../../utils/msg')

const get = async ctx => ctx.body = await Model.get()

const getId = (ctx, id) => Validator.isInt(id)
    .then(id => Model.getId(id).then(data => ctx.body = data))
    .catch(() => Msg.responseError(ctx, 400, 'id must be a number'))

module.exports = { get, getId }