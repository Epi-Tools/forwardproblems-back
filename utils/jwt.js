/**
 * Created by carlen on 4/21/17.
 */
const koaJwt = require('koa-jwt')

module.exports = koaJwt({
    secret: process.env.JWT_SECRET
})