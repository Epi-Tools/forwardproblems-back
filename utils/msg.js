/**
 * Created by carlen on 4/17/17.
 */

const jsonError = (code, msg) => ({ status: code, message: msg })

const responseError = (ctx, code, msg) => {
    ctx.status = code
    ctx.body = jsonError(code, msg)
}

module.exports = { jsonError, responseError }