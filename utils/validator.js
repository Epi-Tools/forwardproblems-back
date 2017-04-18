/**
 * Created by carlen on 4/17/17.
 */
const knex = require('./db')
const Router = require('koa-joi-router')
const Joi = Router.Joi

const continueOnError = true

const isNormalInteger = str => /^\+?(0|[1-9]\d*)$/.test(str)

const isInt = nb => new Promise((s, f) => {
    if (isNormalInteger(nb)) s(+nb)
    else f()
})

const isVoid = data => new Promise((s, f) => {
    if (!data.length) f()
    else s()
})

const isValidId = (id, table) => new Promise((s, f) => knex.select('*').from(table).where('id', +id)
    .then(data => isVoid(data).then(s).catch(f)).catch(f))

const isInvalid = ctx => new Promise((s, f) => {
    if (ctx.invalid) f(ctx)
    else s(ctx)
})

const validateJson = hanlder => ({ validate: { type: 'json', body: hanlder, continueOnError } })

const ValidMsg = {
    message: Joi.string().min(5).max(255).required(),
    categories_id: Joi.number().integer().positive().required(),
    pools_id: Joi.number().integer().positive().required(),
}

const ValidPool = {
    name: Joi.string().min(4).max(255).required(),
    users_id: Joi.number().integer().positive().required()
}

module.exports = { isInt, ValidMsg, ValidPool, validateJson, isInvalid, isValidId }