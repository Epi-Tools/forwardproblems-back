/**
 * Created by carlen on 4/18/17.
 */
const Model = require('../../services/messages/messages')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isValidId } = require('../../../utils/validator')

const post = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.body.pools_id, 'pools')
        .then(() => isValidId(ctx.request.body.categories_id, 'categories')
            .then(() => responseValid(ctx, 'message push'))
        .catch(() => responseError(ctx, 400, 'invalid id pools')))
    .catch(() => responseError(ctx, 400, 'invalid id categories')))
    .catch(() => responseError(ctx, ctx.invalid.body.status, ctx.invalid.body.msg))

module.exports = { post }