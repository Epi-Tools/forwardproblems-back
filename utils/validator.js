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
    else s(data)
})

const isTrue = data => new Promise((s, f) => {
    if (data) s(data)
    else f()
})

const isValidId = (id, table) => new Promise((s, f) => knex.select('*').from(table).where('id', +id)
    .then(data => isVoid(data).then(s).catch(f)).catch(f))

const isInvalid = ctx => new Promise((s, f) => {
    if (ctx.invalid) f(ctx)
    else s(ctx)
})

const validateJson = hanlder => ({ validate: { type: 'json', body: hanlder, continueOnError } })
const validateParam = hanlder => ({ validate: { params: hanlder, continueOnError } })

const ValidMsg = {
    message: Joi.string().min(5).max(255).required(),
    categories_id: Joi.number().integer().positive().required(),
    pools_id: Joi.number().integer().positive().required(),
    username: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required()
}

const ValidPool = {
    name: Joi.string().min(4).max(255).required(),
    users_id: Joi.number().integer().positive().required()
}

const ValidId = { id: Joi.number().integer().positive().required() }

const ValidStatus = {
    id: Joi.number().integer().positive().required(),
    status: Joi.number().integer().min(0).max(2).required()
}

const ValidProblem = {
    name: Joi.string().min(4).max(255).required(),
    user_name: Joi.string().email().required()
}

const ValidLogin = {
    login: Joi.string().email().required(),
    password: Joi.string().required()
}

module.exports = { isInt, isVoid, isTrue, ValidMsg, ValidPool, ValidId, ValidStatus, ValidProblem, ValidLogin, validateJson, validateParam, isInvalid, isValidId }