/**
 * Created by carlen on 4/17/17.
 */
const sanitizeHtml = require('sanitize-html')

const sanitize = msg => new Promise(s => s(sanitizeHtml(msg)))

const jsonSerialize = (code, msg) => ({ status: code, message: msg })

const responseError = (ctx, code, msg) => {
    ctx.status = code
    ctx.body = jsonSerialize(code, msg)
}

const responseValid = (ctx, msg, code=200) => {
    ctx.status = code
    ctx.body = jsonSerialize(code, msg)
}

module.exports = { responseError, responseValid, sanitize }