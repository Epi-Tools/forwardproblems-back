/**
 * Created by carlen on 4/17/17.
 */
const Model = require('../../services/pools/pools')
const { isInt } = require('../../../utils/validator')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isValidId } = require('../../../utils/validator')

const get = async ctx => ctx.body = await Model.get()

const getId = (ctx, id) => isInt(id)
    .then(id => Model.getId(id).then(data => ctx.body = data))
    .catch(() => responseError(ctx, 400, 'id must be a number'))

const getMessagesId = (ctx, id) => isInt(id)
    .then(id => Model.getMessagesId(id).then(data => ctx.body = data))
    .catch(() => responseError(ctx, 400, 'id must be a number'))

const post = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.body.users_id, 'users')
        .then(() => Model.post(ctx.request.body)
            .then(() => responseValid(ctx, 'Pool Saved'))
            .catch(() => responseError(ctx, 500, 'Invalid Pool')))
        .catch(() => responseError(ctx, 400, 'Invalid User Id')))
    .catch(() => responseError(ctx, ctx.invalid.body.status, ctx.invalid.body.msg))

module.exports = { get, getId, getMessagesId, post }