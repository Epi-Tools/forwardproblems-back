/**
 * Created by carlen on 4/17/17.
 */
const Model = require('../../services/pools/pools')
const { isInt } = require('../../../utils/validator')
const { responseError } = require('../../../utils/msg')

const get = async ctx => ctx.body = await Model.get()

const getId = (ctx, id) => isInt(id)
    .then(id => Model.getId(id).then(data => ctx.body = data))
    .catch(() => responseError(ctx, 400, 'id must be a number'))

const getMessagesId = (ctx, id) => isInt(id)
    .then(id => Model.getMessagesId(id).then(data => ctx.body = data))
    .catch(() => responseError(ctx, 400, 'id must be a number'))

module.exports = { get, getId, getMessagesId }