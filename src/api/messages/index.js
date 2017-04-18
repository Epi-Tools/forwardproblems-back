/**
 * Created by carlen on 4/18/17.
 */
const Model = require('../../services/messages/messages')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isValidId } = require('../../../utils/validator')

const get = async ctx => ctx.body = await Model.get()

const post = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.body.pools_id, 'pools')
        .then(() => isValidId(ctx.request.body.categories_id, 'categories')
            .then(() => Model.post(ctx.request.body)
                .then(() => responseValid(ctx, 200, 'Message saved'))
                .catch(() => responseError(ctx, 500, 'Invalid Messages')))
        .catch(() => responseError(ctx, 400, 'Invalid id pools')))
    .catch(() => responseError(ctx, 400, 'Invalid id categories')))
    .catch(() => responseError(ctx, ctx.invalid.body.status, ctx.invalid.body.msg))

module.exports = { post, get }