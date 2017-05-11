/**
 * Created by carlen on 4/20/17.
 */
const Model = require('../../services/problems/problems')
const { responseError, responseValid } = require('../../../utils/msg')
const { isInvalid, isValidId } = require('../../../utils/validator')

const get = async ctx => ctx.body = await Model.get()

const getId = ctx => isInvalid(ctx)
    .then(() => Model.getId(+ctx.request.params.id)
        .then(data => ctx.body = data)
        .catch(() => responseError(ctx, 500, 'Invalid Problems')))
    .catch(() => responseError(ctx, 400, ctx.invalid.params.msg))

const post = ctx => isInvalid(ctx)
    .then(() => Model.post(ctx.request.body)
        .then(() => {
            responseValid(ctx, 'Problems Saved')
        })
        .catch(() => responseError(ctx, 500, 'Invalid Problems')))
    .catch(() => responseError(ctx, 400, 'Invalid Problems'))

const putId = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.params.id, Model.table)
        .then(() => Model.updateImportance(+ctx.request.params.id)
            .then(() => responseValid(ctx, 'Importance increased'))
            .catch(() => responseError(ctx, 500, 'Invalid Problems')))
        .catch(() => responseError(ctx, 400, 'Invalid Problems Id')))
    .catch(() => responseError(ctx, 400, ctx.invalid.params.msg))

const putStatus = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.params.id, Model.table)
        .then(() => Model.updateStatus(+ctx.request.params.id, +ctx.request.params.status)
            .then(() => responseValid(ctx, 'Status updated'))
            .catch(() => responseError(ctx, 500, 'Invalid Problems')))
        .catch(() => responseError(ctx, 400, 'Invalid Problems Id')))
    .catch(() => responseError(ctx, 400, ctx.invalid.params.msg))

const deleteId = ctx => isInvalid(ctx)
    .then(() => isValidId(ctx.request.params.id, Model.table)
        .then(() => Model.deleteId(+ctx.request.params.id)
            .then(() => responseValid(ctx, 'Problems deleted'))
            .catch(() => responseError(ctx, 500, 'Invalid Problems')))
        .catch(() => responseError(ctx, 400, 'Invalid Problems Id')))
    .catch(() => responseError(ctx, 400, ctx.invalid.params.msg))

module.exports = { get, post, getId, putId, deleteId, putStatus }