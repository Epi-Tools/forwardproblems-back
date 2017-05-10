/**
 * Created by carlen on 5/10/17.
 */
const { responseError } = require('./msg')

const admin = (ctx, next) => {
    if (ctx.state.user.acl !== 1) responseError(ctx, 401, "Wrong acl")
    else return next()
}

module.exports = { admin }