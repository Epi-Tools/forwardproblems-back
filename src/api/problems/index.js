/**
 * Created by carlen on 4/20/17.
 */
const Model = require('../../services/problems/problems')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isValidId } = require('../../../utils/validator')

const get = async ctx => ctx.body = await Model.get()

const putId = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.params.id, Model.table)
        .then(() => Model.updateImportance(+ctx.request.params.id)
            .then(() => responseValid(ctx, 'Importance increased'))
            .catch(() => responseError(ctx, 500, 'Invalid Problems')))
        .catch(() => responseError(ctx, 400, 'Invalid Message Id')))
    .catch(() => responseError(ctx, 400, ctx.invalid.params.msg))

module.exports = { get, putId }